"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "default" | "link" | "button" | "external" | "text";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("ub-cursor-on");

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) {
        setVariant("default");
        setLabel("");
        return;
      }

      const text = el.closest("input, textarea, [contenteditable='true']");
      if (text) {
        setVariant("text");
        setLabel("");
        return;
      }

      const linkOrButton = el.closest(
        "a, button, [role='button']"
      ) as HTMLAnchorElement | null;
      if (linkOrButton) {
        const explicit = linkOrButton.getAttribute("data-cursor-label");
        const href = linkOrButton.getAttribute("href") ?? "";
        const isExternal =
          linkOrButton.tagName === "A" &&
          (href.startsWith("http") || linkOrButton.getAttribute("target") === "_blank");
        if (isExternal) {
          setVariant("external");
          setLabel(explicit ?? "");
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
      const p = pos.current;
      const t = target.current;
      p.x += (t.x - p.x) * 0.22;
      p.y += (t.y - p.y) * 0.22;
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -100%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      if (raf.current != null) cancelAnimationFrame(raf.current);
      document.documentElement.classList.remove("ub-cursor-on");
    };
  }, []);

  if (!enabled) return null;

  const symbol =
    variant === "external"
      ? "↗"
      : variant === "link" || variant === "button"
      ? "▶"
      : variant === "text"
      ? "_"
      : null;

  const isBlock = variant === "default";

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center font-mono font-bold text-accent transition-[width,height,opacity] duration-150 ${
          isBlock
            ? "h-[18px] w-[10px] bg-accent ub-blink"
            : variant === "text"
            ? "h-5 w-[10px] text-[18px]"
            : variant === "external"
            ? "h-6 w-6 text-[16px]"
            : "h-6 w-6 text-[14px]"
        }`}
        style={{ mixBlendMode: "screen" }}
      >
        {symbol}
      </div>
      {label && !isBlock && variant !== "text" && (
        <div
          ref={labelRef}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[101] -translate-y-12 rounded border border-accent/40 bg-accent/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur-md"
        >
          {label}
        </div>
      )}
    </>
  );
}
