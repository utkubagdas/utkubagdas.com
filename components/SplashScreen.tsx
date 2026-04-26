"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [stage, setStage] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage("gone");
      return;
    }

    const t1 = setTimeout(() => setStage("out"), 1500);
    const t2 = setTimeout(() => setStage("gone"), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (stage === "gone") return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[120] flex items-center justify-center bg-bg transition-opacity duration-500 ${
        stage === "out" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-3xl"
        aria-hidden
      />
      <svg
        viewBox="0 0 60 30"
        width="240"
        height="120"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative text-foreground-strong"
        style={{ color: "rgb(var(--c-foreground-strong))" }}
        aria-label="utkubagdas"
      >
        {/* u — left curl down then up */}
        <path
          d="M 5 8 V 18 A 6 6 0 0 0 17 18 V 8"
          className="splash-stroke"
          style={{ animationDelay: "100ms" }}
        />
        {/* b stem — vertical line */}
        <path
          d="M 28 3 V 24"
          className="splash-stroke"
          style={{ animationDelay: "350ms" }}
        />
        {/* b bowl — half circle attached to stem */}
        <path
          d="M 28 24 A 6 6 0 0 0 28 12"
          className="splash-stroke"
          style={{ animationDelay: "550ms" }}
        />
        {/* accent dot */}
        <circle
          cx="42"
          cy="22"
          r="2"
          fill="currentColor"
          stroke="none"
          className="splash-dot"
          style={{ animationDelay: "1050ms", color: "rgb(var(--c-accent))" }}
        />
      </svg>
      <style>{`
        .splash-stroke {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: splash-draw 0.85s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .splash-dot {
          opacity: 0;
          transform-origin: center;
          animation: splash-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes splash-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes splash-pop {
          0% { opacity: 0; transform: scale(0); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
