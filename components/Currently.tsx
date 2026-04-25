import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Currently({ t }: { t: Dictionary }) {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-baseline justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {t.currently.label}
            </span>
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-widest text-muted/60 md:block">
            live
          </span>
        </div>

        <h2
          className="mt-4 font-display italic leading-[1.05] tracking-tight text-white"
          style={{
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontVariationSettings: "'opsz' 144, 'SOFT' 50",
          }}
        >
          {t.currently.title}
        </h2>

        <div
          data-reveal
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3"
        >
          {t.currently.items.map((item) => (
            <div
              key={item.k}
              className="flex flex-col gap-3 bg-panel/40 p-6 transition-colors hover:bg-panel"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                {item.k}
              </span>
              <p className="text-sm leading-relaxed text-white/85 md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
