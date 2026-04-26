import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import { projects } from "@/lib/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline[locale as Locale],
    alternates: {
      canonical: `https://utkubagdas.com/${locale}/projects/${slug}`,
      languages: {
        tr: `https://utkubagdas.com/tr/projects/${slug}`,
        en: `https://utkubagdas.com/en/projects/${slug}`,
        "x-default": `https://utkubagdas.com/tr/projects/${slug}`,
      },
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = getDictionary(locale as Locale);
  const l = locale as Locale;

  const placeholderTr =
    "Bu vakanın detayları yakında — sorun, çözüm ve sonuç bölümleri içerikle dolacak.";
  const placeholderEn =
    "Case-study details coming soon — problem, solution and outcome sections will be filled in.";
  const placeholder = l === "tr" ? placeholderTr : placeholderEn;

  const sections = [
    {
      label: l === "tr" ? "Sorun" : "Problem",
      body: project.problem?.[l] ?? placeholder,
    },
    {
      label: l === "tr" ? "Çözüm" : "Solution",
      body: project.solution?.[l] ?? placeholder,
    },
    {
      label: l === "tr" ? "Sonuç" : "Outcome",
      body: project.outcome?.[l] ?? placeholder,
    },
  ];

  return (
    <>
      <a href="#main" className="skip-link">
        {l === "tr" ? "İçeriğe atla" : "Skip to content"}
      </a>
      <ScrollReveal />
      <Header locale={l} t={t} />
      <main id="main" className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <Link
          href={`/${l}#projects`}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition hover:text-accent"
        >
          <span aria-hidden>←</span>
          {l === "tr" ? "Projelere dön" : "Back to projects"}
        </Link>

        <div className="mt-6 flex items-center gap-2">
          {project.status === "placeholder" && (
            <span className="rounded-full border border-border bg-bg/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
              {t.projects.placeholderLabel}
            </span>
          )}
          {project.featured && (
            <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
              {t.projects.featuredLabel}
            </span>
          )}
        </div>

        <h1
          className="mt-4 font-display italic leading-[1.05] tracking-tight text-white"
          style={{
            fontWeight: 400,
            fontSize: "clamp(2.75rem, 7vw, 5rem)",
            fontVariationSettings: "'opsz' 144, 'SOFT' 50",
          }}
        >
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {project.tagline[l]}
        </p>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          <Meta label={t.projects.year}>{project.year}</Meta>
          <Meta label={l === "tr" ? "Müşteri" : "Client"}>
            {project.client?.[l] ?? "—"}
          </Meta>
          <Meta label={l === "tr" ? "Rol" : "Role"}>
            {project.role?.[l] ?? "Full-stack"}
          </Meta>
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-panel/40 px-2.5 py-1 font-mono text-[11px] text-white/85"
            >
              {s}
            </span>
          ))}
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-accent/90"
          >
            {t.projects.viewProject}
            <span aria-hidden>↗</span>
          </a>
        )}

        <div className="mt-16 space-y-12">
          {sections.map((s, i) => (
            <section
              key={s.label}
              data-reveal
              data-reveal-delay={((i % 3) + 1) as 1 | 2 | 3}
            >
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                0{i + 1} — {s.label}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer locale={l} t={t} />
    </>
  );
}

function Meta({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 bg-panel/40 p-5">
      <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
        {label}
      </dt>
      <dd className="text-sm text-white/90">{children}</dd>
    </div>
  );
}
