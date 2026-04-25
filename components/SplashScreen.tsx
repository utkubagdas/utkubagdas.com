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

    const t1 = setTimeout(() => setStage("out"), 700);
    const t2 = setTimeout(() => setStage("gone"), 1300);
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
        className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/15 to-transparent blur-3xl"
        aria-hidden
      />
      <div className="relative flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-panel/80 font-mono text-sm font-bold text-accent">
          ub
        </div>
        <span className="font-display text-2xl italic text-white/90" style={{ fontWeight: 400 }}>
          utkubagdas
          <span className="text-accent">.</span>
        </span>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-px w-32 overflow-hidden bg-border">
          <div className="h-full w-1/2 origin-left animate-[loadbar_0.9s_ease-in-out_infinite] bg-accent" />
        </div>
      </div>
      <style>{`
        @keyframes loadbar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
