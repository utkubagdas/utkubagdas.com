"use client";

import { useEffect, useRef, useState } from "react";

type Achievement = {
  id: string;
  title: { tr: string; en: string };
  desc: { tr: string; en: string };
  icon: string;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first-visit",
    icon: "✦",
    title: { tr: "Hoş geldin", en: "Welcome" },
    desc: { tr: "Siteye ilk ziyaret", en: "First visit to the site" },
  },
  {
    id: "scroll-half",
    icon: "↓",
    title: { tr: "Yarı yola", en: "Halfway down" },
    desc: { tr: "Sayfanın yarısını gördün", en: "Scrolled through half the page" },
  },
  {
    id: "scroll-bottom",
    icon: "⤓",
    title: { tr: "Sonuna kadar", en: "All the way" },
    desc: { tr: "Sayfayı sonuna kadar kaydırdın", en: "Reached the bottom" },
  },
  {
    id: "terminal",
    icon: "▶",
    title: { tr: "Terminal hacker", en: "Terminal hacker" },
    desc: { tr: "Terminale komut girdin", en: "Ran a terminal command" },
  },
  {
    id: "konami",
    icon: "✧",
    title: { tr: "Konami ustası", en: "Konami master" },
    desc: { tr: "Gizli kodu buldun", en: "Found the secret code" },
  },
  {
    id: "language",
    icon: "⌘",
    title: { tr: "Polyglot", en: "Polyglot" },
    desc: { tr: "Dili değiştirdin", en: "Switched the language" },
  },
  {
    id: "cmdk",
    icon: "⌨",
    title: { tr: "Power user", en: "Power user" },
    desc: { tr: "Komut paletini açtın", en: "Opened the command palette" },
  },
  {
    id: "project",
    icon: "◆",
    title: { tr: "Proje gözcüsü", en: "Project peek" },
    desc: { tr: "Bir proje detayını açtın", en: "Opened a project detail" },
  },
  {
    id: "cv",
    icon: "≡",
    title: { tr: "CV okuru", en: "CV reader" },
    desc: { tr: "/cv sayfasını ziyaret ettin", en: "Visited the /cv page" },
  },
  {
    id: "night-owl",
    icon: "☾",
    title: { tr: "Gece kuşu", en: "Night owl" },
    desc: { tr: "Gece yarısı sonrası ziyaret", en: "Visited past midnight" },
  },
];

const STORAGE_KEY = "ub.achievements";

function readUnlocked(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as string[];
    return new Set(arr);
  } catch {
    return new Set();
  }
}

function writeUnlocked(set: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set)));
  } catch {
    /* ignore */
  }
}

type Toast = Achievement & { stamp: number };

export function useAchievement() {
  return (id: string) => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("ub:achievement", { detail: id }));
  };
}

export default function Achievements({ locale }: { locale: "tr" | "en" }) {
  const unlocked = useRef<Set<string>>(new Set());
  const [toasts, setToasts] = useState<Toast[]>([]);
  const scrollHalfFired = useRef(false);
  const scrollBottomFired = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    unlocked.current = readUnlocked();

    const trigger = (id: string) => {
      if (unlocked.current.has(id)) return;
      const a = ACHIEVEMENTS.find((x) => x.id === id);
      if (!a) return;
      unlocked.current.add(id);
      writeUnlocked(unlocked.current);
      setToasts((prev) => [...prev, { ...a, stamp: Date.now() }]);
    };

    trigger("first-visit");

    const hour = new Date().getHours();
    if (hour >= 0 && hour < 6) trigger("night-owl");

    if (window.location.pathname.endsWith("/cv")) trigger("cv");
    if (/\/projects\/[^/]+$/.test(window.location.pathname)) trigger("project");

    const onCustom = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      trigger(id);
    };
    window.addEventListener("ub:achievement", onCustom);

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) return;
      const pct = scrollTop / max;
      if (pct > 0.5 && !scrollHalfFired.current) {
        scrollHalfFired.current = true;
        trigger("scroll-half");
      }
      if (pct > 0.92 && !scrollBottomFired.current) {
        scrollBottomFired.current = true;
        trigger("scroll-bottom");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        trigger("cmdk");
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("ub:achievement", onCustom);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (toasts.length === 0) return;
    const timers = toasts.map((t) =>
      setTimeout(() => {
        setToasts((prev) => prev.filter((x) => x.stamp !== t.stamp));
      }, 4500)
    );
    return () => timers.forEach((id) => clearTimeout(id));
  }, [toasts]);

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed bottom-20 right-6 z-[70] flex flex-col gap-2"
    >
      {toasts.map((t) => (
        <div
          key={t.stamp}
          className="pointer-events-auto flex w-72 items-start gap-3 rounded-lg border border-accent/40 bg-panel/95 px-4 py-3 shadow-2xl shadow-black/50 backdrop-blur-md animate-[toast-in_0.4s_cubic-bezier(0.2,0.8,0.2,1)_both]"
        >
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-accent/40 bg-accent/10 font-mono text-base text-accent">
            {t.icon}
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              {locale === "tr" ? "Başarı" : "Achievement"}
            </p>
            <p className="text-sm font-medium text-white">{t.title[locale]}</p>
            <p className="text-xs leading-snug text-muted">{t.desc[locale]}</p>
          </div>
        </div>
      ))}
      <style>{`
        @keyframes toast-in {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
