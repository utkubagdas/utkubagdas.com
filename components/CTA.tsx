import type { Dictionary } from "@/lib/i18n/dictionaries";
import { contactEmail } from "@/lib/social";

export default function CTA({ t }: { t: Dictionary }) {
  return (
    <section className="border-b border-border py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div data-reveal className="relative overflow-hidden rounded-2xl border border-border bg-panel/60 p-10 md:p-16">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
            aria-hidden
          />
          <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {t.cta.title}
              </h2>
              <p className="mt-3 max-w-xl text-base text-muted md:text-lg">
                {t.cta.subtitle}
              </p>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-bg transition hover:bg-accent/90"
            >
              {t.cta.button}
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
