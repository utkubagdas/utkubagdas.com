import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function PullQuote({ t }: { t: Dictionary }) {
  return (
    <section className="relative overflow-hidden border-b border-border py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center" data-reveal>
        <span
          aria-hidden
          className="absolute -top-10 left-1/2 -translate-x-1/2 font-display italic text-accent/30"
          style={{ fontSize: "clamp(8rem, 18vw, 14rem)", lineHeight: 0.6 }}
        >
          &ldquo;
        </span>
        <blockquote
          className="relative font-display italic text-white/90"
          style={{
            fontWeight: 300,
            fontSize: "clamp(1.75rem, 4.6vw, 3.5rem)",
            lineHeight: 1.2,
            fontVariationSettings: "'opsz' 144, 'SOFT' 80",
          }}
        >
          {t.pull.quote}
        </blockquote>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
          — {t.pull.attribution}
        </p>
      </div>
    </section>
  );
}
