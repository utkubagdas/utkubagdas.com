import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

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
    title: t.now.title,
    description: t.now.subtitle,
    alternates: {
      canonical: `https://utkubagdas.com/${locale}/now`,
      languages: {
        tr: "https://utkubagdas.com/tr/now",
        en: "https://utkubagdas.com/en/now",
        "x-default": "https://utkubagdas.com/tr/now",
      },
    },
  };
}

export default async function NowPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const t = getDictionary(locale as Locale);
  const l = locale as Locale;

  const updated = new Intl.DateTimeFormat(l === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
  }).format(new Date());

  return (
    <>
      <ScrollReveal />
      <Header locale={l} t={t} />
      <main className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Link
          href={`/${l}`}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition hover:text-accent"
        >
          <span aria-hidden>←</span>
          {t.now.backHome}
        </Link>
        <div className="mt-6 flex items-baseline gap-4">
          <h1
            className="font-display italic leading-[1.05] tracking-tight text-white"
            style={{
              fontWeight: 400,
              fontSize: "clamp(2.75rem, 7vw, 5rem)",
              fontVariationSettings: "'opsz' 144, 'SOFT' 50",
            }}
          >
            /now
          </h1>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            {t.now.updated}: {updated}
          </span>
        </div>
        <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
          {t.now.subtitle}
        </p>

        <div className="mt-16 space-y-12">
          {t.now.sections.map((s, i) => (
            <section key={s.h} data-reveal data-reveal-delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                <h2 className="text-xl font-medium text-white md:text-2xl">
                  {s.h}
                </h2>
              </div>
              <p className="ml-8 mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {s.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-20 font-mono text-[11px] uppercase tracking-[0.2em] text-muted/60">
          inspired by — nownownow.com
        </p>
      </main>
      <Footer locale={l} t={t} />
    </>
  );
}
