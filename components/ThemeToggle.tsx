"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="hidden h-9 w-9 items-center justify-center rounded-md border border-border bg-panel/60 text-muted md:inline-flex"
      >
        <span className="sr-only">Theme</span>
      </button>
    );
  }

  const current = theme === "system" ? resolvedTheme : theme;
  const next =
    theme === "system" ? "dark" : current === "dark" ? "light" : "system";

  const onToggle = () => setTheme(next);

  const Icon = () => {
    if (theme === "system") {
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      );
    }
    if (current === "light") {
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    }
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    );
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Theme: ${theme}. Click to switch to ${next}.`}
      title={`Theme: ${theme} (next: ${next})`}
      className="hidden h-9 w-9 items-center justify-center rounded-md border border-border bg-panel/60 text-muted transition hover:border-accent hover:text-accent md:inline-flex"
    >
      <Icon />
    </button>
  );
}
