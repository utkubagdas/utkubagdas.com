import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Stats({ t }: { t: Dictionary }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
        {t.stats.items.map((s) => (
          <div key={s.label} className="px-6 py-8 md:py-10">
            <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
