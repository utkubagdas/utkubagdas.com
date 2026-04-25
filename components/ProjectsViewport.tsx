"use client";

import { useEffect, useRef, useState } from "react";

export default function ProjectsViewport({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const root = ref.current;
    if (!root) return;

    const onMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const inCard = !!target?.closest("article, .glow-border");
      setActive(inCard);
      if (bubbleRef.current) {
        bubbleRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -100%)`;
      }
    };
    const onLeave = () => setActive(false);
    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", onLeave);
    return () => {
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="relative" data-cursor="hover">
      {children}
      <div
        ref={bubbleRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[90] -translate-y-12 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur-md transition-opacity duration-200 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
