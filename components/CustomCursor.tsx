"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "default" | "link" | "button" | "text" | "external";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("ub-cursor-on");

    const onMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const text = target.closest("input, textarea, [contenteditable='true']");
      if (text) {
        setVariant("text");
        setLabel("");
        return;
      }

      const linkOrButton = target.closest("a, button, [role='button']") as HTMLAnchorElement | null;
      if (linkOrButton) {
        const explicit = linkOrButton.getAttribute("data-cursor-label");
        const href = linkOrButton.getAttribute("href") ?? "";
        const isExternal =
          linkOrButton.tagName === "A" &&
          (href.startsWith("http") || linkOrButton.getAttribute("target") === "_blank");
        if (isExternal) {
          setVariant("external");
          setLabel(explicit ?? "↗");
        } else {
          setVariant(linkOrButton.tagName === "BUTTON" ? "button" : "link");
          setLabel(explicit ?? "");
        }
        return;
      }

      setVariant("default");
      setLabel("");
    };

    const animate = () => {
      const r = ringPos.current;
      const t = targetPos.current;
      r.x += (t.x - r.x) * 0.18;
      r.y += (t.y - r.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${r.x}px, ${r.y}px, 0) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${r.x}px, ${r.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    rafId.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
      document.documentElement.classList.remove("ub-cursor-on");
    };
  }, []);

  if (!enabled) return null;

  const ringSize =
    variant === "link"
      ? "h-9 w-9 opacity-100 border-accent"
      : variant === "button"
      ? "h-12 w-12 opacity-100 border-accent bg-accent/5"
      : variant === "external"
      ? "h-10 w-10 opacity-100 border-accent-2"
      : variant === "text"
      ? "h-5 w-[2px] opacity-100 border-accent rounded-none animate-pulse"
      : "h-7 w-7 opacity-60 border-accent/50";

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-accent transition-opacity duration-200 ${
          variant === "text" ? "opacity-0" : "opacity-100"
        }`}
        style={{ mixBlendMode: "screen" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] rounded-full border transition-[width,height,opacity,background] duration-200 ${ringSize}`}
        style={{ mixBlendMode: "screen" }}
      />
      {label && (
        <div
          ref={labelRef}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[101] -translate-y-12 rounded-full border border-accent/40 bg-accent/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur-md"
        >
          {label}
        </div>
      )}
    </>
  );
}
