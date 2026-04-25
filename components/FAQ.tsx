"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import SectionHeading from "./SectionHeading";

export default function FAQ({ t }: { t: Dictionary }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label={t.faq.label} title={t.faq.title} />

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} data-reveal data-reveal-delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left transition hover:bg-panel/40"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <span className="text-base font-medium text-white md:text-lg">
                      {item.q}
                    </span>
                  </span>
                  <span
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-bg/60 font-mono text-sm text-muted transition-transform ${
                      isOpen ? "rotate-45 border-accent text-accent" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="ml-9 max-w-3xl pb-6 text-sm leading-relaxed text-muted md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
