"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = { href: string; label: string };

export default function MobileMenu({
  items,
  currentLocale,
  otherLocale,
  langLabel,
  contactLabel,
}: {
  items: NavItem[];
  currentLocale: string;
  otherLocale: string;
  langLabel: string;
  contactLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-panel/60 text-muted transition hover:border-accent hover:text-accent md:hidden"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-[90] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/85 backdrop-blur-xl transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          style={{
            boxShadow: "-24px 0 60px rgba(0,0,0,0.6)",
            isolation: "isolate",
            transform: open ? "translate3d(0,0,0)" : "translate3d(100%,0,0)",
          }}
          className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-border transition-transform duration-300"
        >
          <div
            aria-hidden
            style={{ backgroundColor: "#0a0b0e" }}
            className="absolute inset-0 -z-10"
          />
          <div
            style={{ backgroundColor: "#0a0b0e" }}
            className="flex items-center justify-between border-b border-border px-6 py-4"
          >
            <span className="font-mono text-sm tracking-tight text-white">
              ub<span className="text-accent">.</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition hover:border-accent hover:text-accent"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <nav
            style={{ backgroundColor: "#0a0b0e" }}
            className="flex flex-1 flex-col px-6 py-8"
          >
            {items.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-border/60 py-4 transition hover:text-accent"
              >
                <span className="text-2xl font-medium text-white transition group-hover:text-accent">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-muted">
                  0{i + 1}
                </span>
              </a>
            ))}
          </nav>

          <div
            style={{ backgroundColor: "#0a0b0e" }}
            className="flex items-center justify-between gap-3 border-t border-border px-6 py-5"
          >
            <Link
              href={`/${otherLocale}`}
              onClick={() => setOpen(false)}
              className="rounded-md border border-border px-3 py-2 font-mono text-xs text-muted transition hover:border-accent hover:text-accent"
            >
              {langLabel}
            </Link>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition hover:bg-accent/90"
            >
              {contactLabel} →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
