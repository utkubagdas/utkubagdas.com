"use client";

import { useEffect, useState } from "react";

const SEQ = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const GLYPHS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ";

export default function KonamiEgg() {
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const expected = SEQ[progress];
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === expected) {
        const next = progress + 1;
        if (next === SEQ.length) {
          setActive(true);
          setProgress(0);
          if (typeof window !== "undefined") {
            window.dispatchEvent(
              new CustomEvent("ub:achievement", { detail: "konami" })
            );
          }
        } else {
          setProgress(next);
        }
      } else if (progress > 0) {
        setProgress(0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [progress]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    const onTrigger = () => {
      setActive(true);
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("ub:achievement", { detail: "konami" })
        );
      }
    };
    window.addEventListener("ub:matrix", onTrigger);
    return () => window.removeEventListener("ub:matrix", onTrigger);
  }, []);

  if (!active) return null;

  const cols = typeof window !== "undefined" ? Math.ceil(window.innerWidth / 22) : 60;

  return (
    <div className="konami-overlay" role="dialog" aria-label="Easter egg">
      <div className="konami-rain" aria-hidden>
        {Array.from({ length: cols }).map((_, i) => {
          const dur = 6 + Math.random() * 10;
          const delay = -Math.random() * dur;
          const left = (i / cols) * 100;
          return (
            <span
              key={i}
              style={{
                left: `${left}%`,
                animationDuration: `${dur}s`,
                animationDelay: `${delay}s`,
              }}
            >
              {Array.from({ length: 24 })
                .map(() => GLYPHS[Math.floor(Math.random() * GLYPHS.length)])
                .join("\n")}
            </span>
          );
        })}
      </div>
      <p className="text-xs uppercase tracking-[0.4em]">// you found it</p>
      <h2 className="font-display italic text-5xl text-white" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}>
        keep building.
      </h2>
      <p className="text-sm text-muted">info@utkubagdas.com</p>
      <button
        type="button"
        onClick={() => setActive(false)}
        className="mt-4 rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-xs uppercase tracking-widest text-accent transition hover:bg-accent/20"
      >
        esc — close
      </button>
    </div>
  );
}
