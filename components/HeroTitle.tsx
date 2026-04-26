"use client";

import { useRef } from "react";

export default function HeroTitle({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const raf = useRef<number | null>(null);

  const onMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (raf.current != null) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1400px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (raf.current != null) cancelAnimationFrame(raf.current);
    el.style.transform = "";
  };

  const chars = Array.from(text);
  return (
    <h1
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="font-display italic leading-[1.02] tracking-[-0.02em] text-white transition-transform duration-300 ease-out will-change-transform"
      style={{
        fontWeight: 400,
        fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
        fontVariationSettings: "'opsz' 144, 'SOFT' 50",
      }}
      aria-label={text}
    >
      {chars.map((c, i) => (
        <span
          key={i}
          aria-hidden
          className="reveal-char inline-block"
          style={{ animationDelay: `${i * 40}ms` }}
        >
          {c === " " ? " " : c}
        </span>
      ))}
      <span className="not-italic text-accent">.</span>
    </h1>
  );
}
