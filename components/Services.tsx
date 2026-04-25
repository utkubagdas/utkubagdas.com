import type { Dictionary } from "@/lib/i18n/dictionaries";
import SectionHeading from "./SectionHeading";
import ServiceIcon from "./ServiceIcon";
import TiltCard from "./TiltCard";

const icons = ["web", "site", "ai", "support"] as const;

export default function Services({ t }: { t: Dictionary }) {
  return (
    <section id="services" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t.services.label}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.services.items.map((item, i) => (
            <TiltCard
              key={item.title}
              data-reveal
              data-reveal-delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="glow-border group relative flex flex-col rounded-xl border border-border bg-panel/40 p-6 transition-colors hover:bg-panel"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg/80 text-accent transition group-hover:border-accent/50">
                  <ServiceIcon name={icons[i]} />
                </span>
                <span className="font-mono text-[11px] text-muted">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.desc}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="rounded-md border border-border/70 bg-bg/40 px-2 py-1 font-mono text-[11px] text-white/70"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
