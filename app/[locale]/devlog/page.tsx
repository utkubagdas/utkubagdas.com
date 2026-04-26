import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import { devlogs } from "@/lib/devlogs";
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
  const isTr = locale === "tr";
  return {
    title: "Devlog",
    description: isTr
      ? "Mimiko'da, şahıs şirketimde ve kişisel projelerde çıkan küçük teknik notlar."
      : "Short technical notes from Mimiko, my sole proprietorship and side projects.",
    alternates: {
      canonical: `https://utkubagdas.com/${locale}/devlog`,
      languages: {
        tr: "https://utkubagdas.com/tr/devlog",
        en: "https://utkubagdas.com/en/devlog",
        "x-default": "https://utkubagdas.com/tr/devlog",
      },
    },
  };
}

export default async function DevlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const t = getDictionary(locale as Locale);
  const l = locale as Locale;

  const fmt = new Intl.DateTimeFormat(l === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sorted = [...devlogs].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <a href="#main" className="skip-link">
        {l === "tr" ? "İçeriğe atla" : "Skip to content"}
      </a>
      <ScrollReveal />
      <Header locale={l} t={t} />
      <main id="main" className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Link
          href={`/${l}`}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition hover:text-accent"
        >
          <span aria-hidden>←</span>
          {l === "tr" ? "Ana sayfaya dön" : "Back home"}
        </Link>
        <h1
          className="mt-6 font-display italic leading-[1.05] tracking-tight text-white"
          style={{
            fontWeight: 400,
            fontSize: "clamp(2.75rem, 7vw, 5rem)",
            fontVariationSettings: "'opsz' 144, 'SOFT' 50",
          }}
        >
          /devlog
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
          {l === "tr"
            ? "Mimiko'da, şahıs şirketimde ve kişisel projelerde çıkan küçük teknik notlar — Unity kalıpları, AI workflow'ları, build break çözümleri."
            : "Short notes from my work at Mimiko, my sole proprietorship and side projects — Unity patterns, AI workflows, build-break fixes."}
        </p>

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {sorted.map((p, i) => (
            <li
              key={p.slug}
              data-reveal
              data-reveal-delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            >
              <Link
                href={`/${l}/devlog/${p.slug}`}
                className="group flex flex-col gap-2 py-6 transition-colors hover:bg-panel/30 md:flex-row md:items-baseline md:gap-8"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted md:w-32 md:shrink-0">
                  {fmt.format(new Date(p.date))}
                </span>
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-white transition-colors group-hover:text-accent md:text-xl">
                    {p.title[l]}
                  </h2>
                  <p className="mt-1 text-sm text-muted md:text-base">
                    {p.excerpt[l]}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border/70 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer locale={l} t={t} />
    </>
  );
}
