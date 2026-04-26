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
    if (sessionStorage.getItem("splash-shown")) {
      setStage("gone");
      return;
    }
    sessionStorage.setItem("splash-shown", "1");

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
        viewBox="0 0 80 36"
        width="240"
        height="108"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative text-white"
        aria-label="utkubagdas"
      >
        {/* u */}
        <path
          d="M 5 6 V 20 A 8 8 0 0 0 21 20 V 6"
          className="splash-stroke"
          style={{ animationDelay: "100ms" }}
        />
        {/* b stem */}
        <path
          d="M 32 3 V 28"
          className="splash-stroke"
          style={{ animationDelay: "350ms" }}
        />
        {/* b bowl */}
        <path
          d="M 32 12 A 8 8 0 1 1 32 28 A 8 8 0 1 1 32 12 Z"
          className="splash-stroke"
          style={{ animationDelay: "550ms" }}
        />
        {/* accent dot */}
        <circle
          cx="55"
          cy="26"
          r="2.5"
          fill="currentColor"
          stroke="none"
          className="splash-dot text-accent"
          style={{ animationDelay: "1050ms" }}
        />
      </svg>
      <style>{`
        .splash-stroke {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
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
