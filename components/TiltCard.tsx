"use client";

import { useRef, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  intensity?: number;
};

export default function TiltCard({
  children,
  className = "",
  style,
  intensity = 4,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (raf.current != null) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1100px) rotateX(${(-y * intensity).toFixed(
        2
      )}deg) rotateY(${(x * intensity).toFixed(2)}deg) translateZ(0)`;
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (raf.current != null) cancelAnimationFrame(raf.current);
    el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
