import type { Dictionary } from "@/lib/i18n/dictionaries";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

export default function Studios({ t }: { t: Dictionary }) {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t.studios.label}
          title={t.studios.title}
          subtitle={t.studios.subtitle}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.studios.items.map((s, i) => (
            <TiltCard
              key={s.name}
              data-reveal
              data-reveal-delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              intensity={3}
              className="glow-border relative flex flex-col rounded-xl border border-border bg-panel/40 p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium text-white md:text-xl">
                  {s.name}
                </h3>
                <span className="shrink-0 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-muted">
                  {s.period}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-accent">{s.role}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
                {s.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {s.note}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
