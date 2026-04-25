import type { Dictionary } from "@/lib/i18n/dictionaries";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

export default function Testimonials({ t }: { t: Dictionary }) {
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t.testimonials.label}
          title={t.testimonials.title}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.testimonials.items.map((item, i) => (
            <TiltCard
              key={i}
              data-reveal
              data-reveal-delay={((i % 2) + 1) as 1 | 2}
              intensity={3}
              className="glow-border relative rounded-xl border border-border bg-panel/40 p-8"
            >
              <figure>
              <span
                className="absolute -top-4 left-6 font-mono text-6xl leading-none text-accent/40"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="text-lg leading-relaxed text-white/90">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/60 font-mono text-xs text-accent">
                  {item.author
                    .split(" ")
                    .map((s) => s[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">
                    {item.author}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    {item.role}
                  </p>
                </div>
              </figcaption>
              </figure>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
