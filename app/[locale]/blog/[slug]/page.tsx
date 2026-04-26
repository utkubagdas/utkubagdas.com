import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import { posts } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    posts.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title[locale as Locale],
    description: post.excerpt[locale as Locale],
    alternates: {
      canonical: `https://utkubagdas.com/${locale}/blog/${slug}`,
      languages: {
        tr: `https://utkubagdas.com/tr/blog/${slug}`,
        en: `https://utkubagdas.com/en/blog/${slug}`,
        "x-default": `https://utkubagdas.com/tr/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const post = posts.find((p) => p.slug === slug);
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
            publisher: {
              "@type": "Person",
              name: "Utku Bağdaş",
            },
            mainEntityOfPage: `https://utkubagdas.com/${l}/blog/${post.slug}`,
            keywords: post.tags.join(", "),
            inLanguage: l === "tr" ? "tr-TR" : "en-US",
            image: `https://utkubagdas.com/${l}/blog/${post.slug}/opengraph-image`,
          }),
        }}
      />
      <ScrollReveal />
      <Header locale={l} t={t} />
      <main id="main" className="mx-auto max-w-2xl px-6 py-24 md:py-32">
        <Link
          href={`/${l}/blog`}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition hover:text-accent"
        >
          <span aria-hidden>←</span>
          {l === "tr" ? "Tüm yazılar" : "All posts"}
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            {fmt.format(new Date(post.date))}
          </span>
          <span className="text-muted/40" aria-hidden>·</span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            {post.readingMinutes} {l === "tr" ? "dk okuma" : "min read"}
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
            fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
            fontVariationSettings: "'opsz' 144, 'SOFT' 50",
          }}
        >
          {post.title[l]}
        </h1>

        <article className="prose prose-invert mt-10 space-y-6 text-base leading-relaxed text-white/85 md:text-lg">
          {post.body[l].map((p, i) => (
            <p key={i} data-reveal data-reveal-delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              {p}
            </p>
          ))}
        </article>

        <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
          <Link
            href={`/${l}/blog`}
            className="font-mono text-[11px] uppercase tracking-widest text-muted transition hover:text-accent"
          >
            ← {l === "tr" ? "Tüm yazılar" : "All posts"}
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
