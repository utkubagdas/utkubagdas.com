"use client";

import { useEffect, useRef } from "react";

export default function HeroParallax({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      target.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      target.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const tick = () => {
      cur.current.x += (target.current.x - cur.current.x) * 0.08;
      cur.current.y += (target.current.y - cur.current.y) * 0.08;
      el.style.setProperty("--mx", cur.current.x.toFixed(3));
      el.style.setProperty("--my", cur.current.y.toFixed(3));
      raf.current = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`hero-parallax ${className}`}
      style={{ ["--mx" as string]: 0, ["--my" as string]: 0 }}
    >
      {children}
    </div>
  );
}
