import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import { devlogs } from "@/lib/devlogs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    devlogs.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = devlogs.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title[locale as Locale],
    description: post.excerpt[locale as Locale],
    alternates: {
      canonical: `https://utkubagdas.com/${locale}/devlog/${slug}`,
      languages: {
        tr: `https://utkubagdas.com/tr/devlog/${slug}`,
        en: `https://utkubagdas.com/en/devlog/${slug}`,
        "x-default": `https://utkubagdas.com/tr/devlog/${slug}`,
      },
    },
  };
}

export default async function DevlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const post = devlogs.find((p) => p.slug === slug);
  if (!post) notFound();
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
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title[l],
            description: post.excerpt[l],
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: "Utku Bağdaş",
              url: "https://utkubagdas.com",
            },
            mainEntityOfPage: `https://utkubagdas.com/${l}/devlog/${post.slug}`,
            keywords: post.tags.join(", "),
            inLanguage: l === "tr" ? "tr-TR" : "en-US",
          }),
        }}
      />
      <ScrollReveal />
      <Header locale={l} t={t} />
      <main id="main" className="mx-auto max-w-2xl px-6 py-24 md:py-32">
        <Link
          href={`/${l}/devlog`}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition hover:text-accent"
        >
          <span aria-hidden>←</span>
          {l === "tr" ? "Tüm devlog" : "All devlog"}
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            {fmt.format(new Date(post.date))}
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border/70 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
        <h1
          className="mt-4 font-display italic leading-[1.05] tracking-tight text-white"
          style={{
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontVariationSettings: "'opsz' 144, 'SOFT' 50",
          }}
        >
          {post.title[l]}
        </h1>

        <article className="prose prose-invert mt-10 space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
          {post.body[l].map((p, i) => (
            <p key={i} data-reveal data-reveal-delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              {p}
            </p>
          ))}
        </article>

        <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
          <Link
            href={`/${l}/devlog`}
            className="font-mono text-[11px] uppercase tracking-widest text-muted transition hover:text-accent"
          >
            ← {l === "tr" ? "Tüm devlog" : "All devlog"}
          </Link>
          <Link
            href={`/${l}#contact`}
            className="font-mono text-[11px] uppercase tracking-widest text-muted transition hover:text-accent"
          >
            {l === "tr" ? "İletişime geç" : "Get in touch"} →
          </Link>
        </div>
      </main>
      <Footer locale={l} t={t} />
    </>
  );
}
