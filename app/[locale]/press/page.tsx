import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import { contactEmail, socials } from "@/lib/social";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CopyEmail from "@/components/CopyEmail";

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
    title: isTr ? "Basın & Marka" : "Press & Brand",
    description: isTr
      ? "Utku Bağdaş için resmi marka varlıkları ve kısa biyografi."
      : "Official brand assets and short bio for Utku Bağdaş.",
    alternates: {
      canonical: `https://utkubagdas.com/${locale}/press`,
      languages: {
        tr: "https://utkubagdas.com/tr/press",
        en: "https://utkubagdas.com/en/press",
        "x-default": "https://utkubagdas.com/tr/press",
      },
    },
  };
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const t = getDictionary(locale as Locale);
  const l = locale as Locale;

  const bios = l === "tr"
    ? {
        short:
          "Utku Bağdaş, şirketler için ölçeklenebilir web uygulamaları ve özel yazılım çözümleri geliştiren Türkiye merkezli bir full-stack developer'dır.",
        medium:
          "Utku Bağdaş, kendi şahıs şirketi üzerinden firmalara uçtan uca yazılım çözümleri sunan, 5+ yıllık deneyime sahip bir full-stack developer'dır. Next.js, TypeScript ve modern web yığınında uzman olmakla birlikte, .NET / C#, Flutter ve Unity ile çapraz alan ürünleri de teslim etmektedir. Geliştirme süreçlerine AI'ı (Claude Code) entegre ederek daha hızlı ve sürdürülebilir teslimatlar yapar.",
      }
    : {
        short:
          "Utku Bağdaş is a Türkiye-based full-stack developer building scalable web applications and custom software solutions for companies.",
        medium:
          "Utku Bağdaş is a full-stack developer with 5+ years of experience, delivering end-to-end software solutions to companies through his sole proprietorship. Specialized in Next.js, TypeScript and the modern web stack, he also ships cross-domain products in .NET / C#, Flutter and Unity. He integrates AI (Claude Code) into his development process for faster, more sustainable delivery.",
      };

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
          /press
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
          {l === "tr"
            ? "Utku Bağdaş için resmi marka varlıkları, kısa ve uzun biyografi."
            : "Official brand assets, short and medium bio for Utku Bağdaş."}
        </p>

        <section data-reveal className="mt-16">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {l === "tr" ? "Logo" : "Logo"}
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-bg p-10">
              <span className="flex h-20 w-20 items-center justify-center rounded-xl border border-border bg-panel/60 font-mono text-2xl font-bold text-accent">
                ub
              </span>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
                Dark · default
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-white p-10">
              <span className="flex h-20 w-20 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 font-mono text-2xl font-bold text-emerald-600">
                ub
              </span>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                Light
              </p>
            </div>
          </div>
          <a
            href="/icon.svg"
            download
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-panel/60 px-3 py-2 font-mono text-xs text-muted transition hover:border-accent hover:text-accent"
          >
            ↓ icon.svg
          </a>
        </section>

        <section data-reveal data-reveal-delay="2" className="mt-16">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {l === "tr" ? "Renkler" : "Colors"}
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-5">
            {[
              { name: "Background", hex: "#08090C" },
              { name: "Panel", hex: "#0F1014" },
              { name: "Border", hex: "#1F1F24" },
              { name: "Accent", hex: "#34D399" },
              { name: "Accent 2", hex: "#22D3EE" },
            ].map((c) => (
              <div
                key={c.hex}
                className="overflow-hidden rounded-md border border-border"
              >
                <div
                  className="h-14 w-full"
                  style={{ background: c.hex }}
                  aria-hidden
                />
                <div className="bg-panel/40 px-2 py-2">
                  <p className="text-[11px] text-white/85">{c.name}</p>
                  <p className="font-mono text-[10px] text-muted">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section data-reveal data-reveal-delay="3" className="mt-16">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {l === "tr" ? "Tipografi" : "Typography"}
          </h2>
          <div className="mt-4 space-y-3 rounded-xl border border-border bg-panel/40 p-6">
            <p className="text-sm text-muted">
              <span className="font-mono text-xs text-accent">Display · </span>
              <span className="font-display text-2xl italic" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}>
                Fraunces
              </span>
            </p>
            <p className="text-sm text-muted">
              <span className="font-mono text-xs text-accent">Sans · </span>
              <span className="font-sans text-base text-white">Inter</span>
            </p>
            <p className="text-sm text-muted">
              <span className="font-mono text-xs text-accent">Mono · </span>
              <span className="font-mono text-base text-white">ui-monospace</span>
            </p>
          </div>
        </section>

        <section data-reveal data-reveal-delay="4" className="mt-16">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {l === "tr" ? "Kısa biyografi" : "Short bio"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            {bios.short}
          </p>
        </section>

        <section data-reveal className="mt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {l === "tr" ? "Orta biyografi" : "Medium bio"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            {bios.medium}
          </p>
        </section>

        <section data-reveal className="mt-16 rounded-xl border border-border bg-panel/40 p-6">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {l === "tr" ? "İletişim" : "Contact"}
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contactEmail}`}
              className="text-base text-white transition hover:text-accent"
            >
              {contactEmail}
            </a>
            <CopyEmail
              email={contactEmail}
              copyLabel={t.contact.copy}
              copiedLabel={t.contact.copied}
            />
          </div>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/80 transition hover:text-accent"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer locale={l} t={t} />
    </>
  );
}
