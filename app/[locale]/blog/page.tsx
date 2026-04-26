import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import { posts } from "@/lib/posts";
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
    title: isTr ? "Blog" : "Blog",
    description: isTr
      ? "Geliştirme yolculuğumdan ve şirketler için ürün üretirken öğrendiklerimden notlar."
      : "Notes from my dev journey and what I learn while shipping products.",
    alternates: {
      canonical: `https://utkubagdas.com/${locale}/blog`,
      languages: {
        tr: "https://utkubagdas.com/tr/blog",
        en: "https://utkubagdas.com/en/blog",
        "x-default": "https://utkubagdas.com/tr/blog",
      },
    },
  };
}

export default async function BlogIndex({
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
          /blog
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
          {l === "tr"
            ? "Geliştirme süreçleri, AI ile ürünleştirme ve sürdürülebilir kod üzerine notlar."
            : "Notes on development, productizing with AI, and sustainable code."}
        </p>

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {posts.map((p, i) => (
            <li
              key={p.slug}
              data-reveal
              data-reveal-delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            >
              <Link
                href={`/${l}/blog/${p.slug}`}
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
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted/70 md:shrink-0">
                  {p.readingMinutes} {l === "tr" ? "dk" : "min"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer locale={l} t={t} />
    </>
  );
}
