import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import { contactEmail, socials } from "@/lib/social";
import PrintButton from "@/components/PrintButton";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return {
    title: t.cv.title,
    description: t.cv.summary,
    alternates: {
      canonical: `https://utkubagdas.com/${locale}/cv`,
      languages: {
        tr: "https://utkubagdas.com/tr/cv",
        en: "https://utkubagdas.com/en/cv",
        "x-default": "https://utkubagdas.com/tr/cv",
      },
    },
  };
}

const skills = [
  "Unity",
  "C# / .NET",
  "Photon · Mirror · Netcode · Fishnet",
  "ARKit · AR Foundation",
  "Oculus SDK · Unity XR",
  "iOS · Android · Steam · WebGL",
  "DOTween · Cinemachine · Odin Inspector",
  "Next.js · React · TypeScript",
  "Flutter",
  "Firebase",
  "Claude Code · Claude API · OpenAI",
];

export default async function CvPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const t = getDictionary(locale as Locale);
  const l = locale as Locale;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 print:py-0 print:px-0 print:max-w-none">
      <div className="flex items-center justify-between print:hidden">
        <Link
          href={`/${l}`}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition hover:text-accent"
        >
          <span aria-hidden>←</span>
          {t.cv.backHome}
        </Link>
        <PrintButton label={t.cv.printLabel} />
      </div>

      <header className="mt-10 border-b border-border pb-8 print:mt-0 print:border-black/30">
        <h1 className="text-4xl font-semibold tracking-tight text-white print:text-black">
          Utku Bağdaş
        </h1>
        <p className="mt-1 font-mono text-sm uppercase tracking-widest text-accent print:text-emerald-700">
          {t.cv.headline}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 print:text-black/80">
          {t.cv.summary}
        </p>
      </header>

      <CvSection title={t.cv.experienceTitle}>
        {t.cv.experience.map((e) => (
          <CvEntry
            key={`${e.year}-${e.role}`}
            year={e.year}
            role={e.role}
            company={e.company}
            desc={e.desc}
          />
        ))}
      </CvSection>

      <CvSection title={t.cv.educationTitle}>
        {t.cv.education.map((e) => (
          <CvEntry
            key={`${e.year}-${e.role}`}
            year={e.year}
            role={e.role}
            company={e.company}
            desc={e.desc}
          />
        ))}
      </CvSection>

      <CvSection title={t.cv.certificationsTitle}>
        {t.cv.certifications.map((c) => (
          <CvEntry
            key={`${c.year}-${c.role}`}
            year={c.year}
            role={c.role}
            company={c.company}
            desc={c.desc}
          />
        ))}
      </CvSection>

      <CvSection title={t.cv.skillsTitle}>
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-md border border-border bg-panel/40 px-2.5 py-1 font-mono text-[11px] text-white/85 print:border-black/30 print:bg-transparent print:text-black"
            >
              {s}
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title={t.cv.contactTitle}>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-mono text-muted">Email · </span>
            <a
              href={`mailto:${contactEmail}`}
              className="text-white/90 hover:text-accent print:text-black"
            >
              {contactEmail}
            </a>
          </p>
          <p>
            <span className="font-mono text-muted">Web · </span>
            <a
              href="https://utkubagdas.com"
              className="text-white/90 hover:text-accent print:text-black"
            >
              utkubagdas.com
            </a>
          </p>
          {socials.map((s) => (
            <p key={s.label}>
              <span className="font-mono text-muted">{s.label} · </span>
              <a
                href={s.href}
                className="text-white/90 hover:text-accent print:text-black"
              >
                {s.href}
              </a>
            </p>
          ))}
        </div>
      </CvSection>
    </main>
  );
}

function CvSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 border-b border-border pb-8 last:border-b-0 print:border-black/30">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent print:text-emerald-700">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function CvEntry({
  year,
  role,
  company,
  desc,
}: {
  year: string;
  role: string;
  company: string;
  desc: string;
}) {
  return (
    <article className="grid gap-1 py-4 md:grid-cols-[8rem_1fr] md:gap-6">
      <p className="font-mono text-xs text-muted print:text-black/60">{year}</p>
      <div>
        <h3 className="text-base font-medium text-white print:text-black">
          {role}
        </h3>
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted print:text-black/60">
          {company}
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted print:text-black/80">
          {desc}
        </p>
      </div>
    </article>
  );
}
