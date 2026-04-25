import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import SectionHeading from "./SectionHeading";

export default function About({
  locale: _locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <section id="about" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label={t.about.label} title={t.about.title} />

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <div data-reveal data-reveal-delay="1" className="md:col-span-7">
            <p className="text-lg leading-relaxed text-white/85">
              {t.about.body}
            </p>

            <h3 className="mt-12 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {t.about.principlesTitle}
            </h3>
            <ol className="mt-5 divide-y divide-border border-y border-border">
              {t.about.principles.map((p, i) => (
                <li
                  key={p.title}
                  className="group flex items-start gap-5 py-5 transition hover:bg-panel/40"
                >
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="text-base font-medium text-white">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {p.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div data-reveal data-reveal-delay="2" className="md:col-span-5">
            <div className="rounded-xl border border-border bg-panel/40 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {t.about.stackLabel}
              </p>
              <div className="mt-5 space-y-5">
                {t.about.stackGroups.map((group) => (
                  <div key={group.name}>
                    <p className="text-xs font-medium text-white/90">
                      {group.name}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((it) => (
                        <li
                          key={it}
                          className="rounded-md border border-border bg-bg/60 px-2 py-1 font-mono text-[11px] text-white/80"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
