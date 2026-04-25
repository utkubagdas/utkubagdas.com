import type { Dictionary } from "@/lib/i18n/dictionaries";
import SectionHeading from "./SectionHeading";

export default function Process({ t }: { t: Dictionary }) {
  return (
    <section id="process" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label={t.process.label} title={t.process.title} />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {t.process.steps.map((s) => (
            <li
              key={s.k}
              className="relative flex flex-col gap-3 bg-panel/40 p-6 transition hover:bg-panel"
            >
              <span className="font-mono text-xs text-accent">{s.k}</span>
              <h3 className="text-base font-medium text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
