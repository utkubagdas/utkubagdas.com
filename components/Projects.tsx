import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { projects, type Project } from "@/lib/projects";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import ProjectsViewport from "./ProjectsViewport";

export default function Projects({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.slug !== featured.slug);

  return (
    <section id="projects" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t.projects.label}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <ProjectsViewport label={t.projects.viewProject}>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <FeaturedCard project={featured} locale={locale} t={t} />
            {rest.map((p, i) => (
              <div
                key={p.slug}
                data-reveal
                data-reveal-delay={((i % 3) + 1) as 1 | 2 | 3}
              >
                <Card project={p} locale={locale} t={t} />
              </div>
            ))}
          </div>
        </ProjectsViewport>
      </div>
    </section>
  );
}

function FeaturedCard({
  project: p,
  locale,
  t,
}: {
  project: Project;
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <TiltCard
      data-reveal
      intensity={3}
      className="glow-border group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-panel/40 p-6 transition-colors hover:bg-panel md:col-span-3 md:p-10"
    >
      <Link
        href={`/${locale}/projects/${p.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`${p.name} — ${t.projects.viewProject}`}
        data-cursor-label={t.projects.viewProject}
      />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
            {t.projects.featuredLabel}
          </span>
          {p.status === "placeholder" && (
            <span className="rounded-full border border-border bg-bg/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
              {t.projects.placeholderLabel}
            </span>
          )}
        </div>
        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {p.name}
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {p.tagline[locale]}
        </p>
      </div>
      <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <li
              key={s}
              className="rounded-md border border-border bg-bg/40 px-2 py-1 font-mono text-[11px] text-white/70"
            >
              {s}
            </li>
          ))}
        </ul>
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          {t.projects.year} · {p.year}
        </span>
      </div>
    </TiltCard>
  );
}

function Card({
  project: p,
  locale,
  t,
}: {
  project: Project;
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <TiltCard className="glow-border group relative flex flex-col rounded-xl border border-border bg-panel/40 p-6 transition-colors hover:bg-panel">
      <Link
        href={`/${locale}/projects/${p.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`${p.name} — ${t.projects.viewProject}`}
        data-cursor-label={t.projects.viewProject}
      />
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium text-white">{p.name}</h3>
        {p.status === "placeholder" && (
          <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
            {t.projects.placeholderLabel}
          </span>
        )}
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {p.tagline[locale]}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <li
            key={s}
            className="rounded border border-border/70 px-1.5 py-0.5 font-mono text-[10px] text-muted"
          >
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          {p.year}
        </span>
        {p.url ? (
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-accent transition hover:underline"
          >
            {t.projects.viewProject}
            <span aria-hidden>↗</span>
          </a>
        ) : (
          <span className="font-mono text-[10px] text-muted/70">—</span>
        )}
      </div>
    </TiltCard>
  );
}
