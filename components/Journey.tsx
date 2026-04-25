import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Journey({ t }: { t: Dictionary }) {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div data-reveal>
          <div className="flex items-center gap-3">
            <span className="section-rule" aria-hidden />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {t.journey.label}
            </span>
          </div>
          <h2
            className="mt-4 font-display italic leading-[1.05] tracking-tight text-white"
            style={{
              fontWeight: 400,
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontVariationSettings: "'opsz' 144, 'SOFT' 50",
            }}
          >
            {t.journey.title}
          </h2>
        </div>

        <ol className="relative mt-14 space-y-2">
          <span
            aria-hidden
            className="absolute left-[6.5rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/40 via-border to-transparent md:block"
          />
          {t.journey.items.map((it, i) => (
            <li
              key={it.year}
              data-reveal
              data-reveal-delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="group relative grid gap-4 py-5 md:grid-cols-[6.5rem_1.25rem_1fr] md:gap-0 md:py-6"
            >
              <span
                className="font-mono text-sm tracking-wide text-muted transition-colors group-hover:text-accent md:text-base"
              >
                {it.year}
              </span>
              <span className="hidden md:flex md:items-center md:justify-center" aria-hidden>
                <span className="relative inline-flex h-3 w-3 rounded-full border border-accent bg-bg transition-colors group-hover:bg-accent">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 opacity-0 group-hover:opacity-100" />
                </span>
              </span>
              <div>
                <h3 className="text-lg font-medium text-white md:text-xl">
                  {it.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                  {it.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
