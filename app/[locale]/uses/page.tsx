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
    title: t.uses.title,
    description: t.uses.subtitle,
    alternates: {
      canonical: `https://utkubagdas.com/${locale}/uses`,
      languages: {
        tr: "https://utkubagdas.com/tr/uses",
        en: "https://utkubagdas.com/en/uses",
        "x-default": "https://utkubagdas.com/tr/uses",
      },
    },
  };
}

export default async function UsesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const t = getDictionary(locale as Locale);
  const l = locale as Locale;

  return (
    <>
      <ScrollReveal />
      <Header locale={l} t={t} />
      <main className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <Link
          href={`/${l}`}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition hover:text-accent"
        >
          <span aria-hidden>←</span>
          {t.uses.backHome}
        </Link>
        <h1
          className="mt-6 font-display italic leading-[1.05] tracking-tight text-white"
          style={{
            fontWeight: 400,
            fontSize: "clamp(2.75rem, 7vw, 5rem)",
            fontVariationSettings: "'opsz' 144, 'SOFT' 50",
          }}
        >
          /{t.uses.title.toLowerCase()}
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
          {t.uses.subtitle}
        </p>

        <div className="mt-16 space-y-14">
          {t.uses.groups.map((g, i) => (
            <section key={g.name} data-reveal data-reveal-delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                0{i + 1} — {g.name}
              </h2>
              <dl className="mt-4 divide-y divide-border border-y border-border">
                {g.items.map((it) => (
                  <div
                    key={it.k}
                    className="flex flex-col gap-1 py-4 transition-colors hover:bg-panel/30 md:flex-row md:items-baseline md:gap-6"
                  >
                    <dt className="w-44 shrink-0 font-mono text-xs uppercase tracking-widest text-muted">
                      {it.k}
                    </dt>
                    <dd className="text-base text-white/90">{it.v}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </main>
      <Footer locale={l} t={t} />
    </>
  );
}
