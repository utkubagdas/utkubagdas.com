import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import LocalTime from "./LocalTime";
import Spotlight from "./Spotlight";
import Marquee from "./Marquee";
import MagneticLink from "./MagneticLink";
import CodeEditor from "./CodeEditor";

export default function Hero({
  locale: _locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <Spotlight />
      <div
        className="absolute -top-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="reveal reveal-1 mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-3 py-1 text-xs text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t.hero.tag}
            </div>

            <h1 className="reveal reveal-2 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
              {t.hero.title}
              <span className="text-accent">.</span>
            </h1>

            <p className="reveal reveal-3 mt-4 font-mono text-sm uppercase tracking-[0.2em] text-accent">
              {t.hero.role}
            </p>

            <p className="reveal reveal-4 mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              {t.hero.lede}{" "}
              <span className="text-muted">{t.hero.sub}</span>
            </p>

            <div className="reveal reveal-4 mt-10 flex flex-wrap gap-3">
              <MagneticLink
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg hover:bg-accent/90"
              >
                {t.hero.cta}
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </MagneticLink>
              <MagneticLink
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-panel/60 px-5 py-2.5 text-sm font-medium text-white backdrop-blur hover:border-accent hover:text-accent"
              >
                {t.hero.ctaSecondary}
              </MagneticLink>
            </div>
          </div>

          <aside className="reveal reveal-4 flex flex-col gap-4 md:col-span-4">
            <div className="rounded-xl border border-border bg-panel/60 p-5 backdrop-blur">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  status.json
                </span>
                <div className="flex gap-1.5" aria-hidden>
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                <Row label={t.hero.statusLocation} value="Türkiye, IST" />
                <Row label={t.hero.statusLocaltime} value={<LocalTime />} />
                <Row
                  label={t.hero.statusFocus}
                  value={t.hero.statusFocusValue}
                />
              </dl>
            </div>
            <CodeEditor />
          </aside>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
        {label}
      </dt>
      <dd className="text-right text-white/90">{value}</dd>
    </div>
  );
}
