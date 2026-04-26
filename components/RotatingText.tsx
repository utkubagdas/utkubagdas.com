"use client";

import { useEffect, useState } from "react";

export default function RotatingText({
  items,
  intervalMs = 2400,
}: {
  items: readonly string[];
  intervalMs?: number;
}) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setI((idx) => (idx + 1) % items.length);
        setPhase("in");
      }, 280);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  return (
    <span
      className="inline-block min-w-[10ch] transition-all duration-300"
      style={{
        opacity: phase === "in" ? 1 : 0,
        transform: phase === "in" ? "translateY(0)" : "translateY(8px)",
      }}
      aria-live="polite"
    >
      {items[i]}
    </span>
  );
}
