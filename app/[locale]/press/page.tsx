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
          "Utku Bağdaş, Türkiye merkezli, 6.5+ yıl Unity / C# deneyimine ve App Store + Google Play'de 50+ yayınlanmış oyuna sahip bir Lead Game Developer'dır. Şu an Mimiko Technology'de (London, Remote) Lead Full-Stack Game Developer olarak görev yapıyor; aynı zamanda kendi şahıs şirketi üzerinden şirketlere AI destekli SaaS ürünleri ve otomasyon yazılımları sunuyor.",
        medium:
          "Utku Bağdaş, Ocak 2020'den itibaren Unity ekosisteminde mobil ve PC oyunları geliştiren, 6.5+ yıllık deneyime sahip bir Lead Game Developer'dır. Kariyeri boyunca Kaiju Games, Omnio Games, Ace Games ve eleman.net gibi stüdyolarda yer almış, App Store ve Google Play'de 50+ yayınlanmış başlığa katkıda bulunmuştur. Eylül 2024'ten itibaren London merkezli Mimiko Technology'de Lead Full-Stack Game Developer olarak Unity (frontend) + backend + DevOps ekip liderliği yapmaktadır. 2025'ten beri kendi şahıs şirketi üzerinden şirketlere AI destekli SaaS ürünleri, otomasyon araçları ve özel yazılımlar üretmektedir; Anadolu Üniversitesi (Yönetim Bilişim Sistemleri, Lisans) ve Dokuz Eylül Üniversitesi (Bilgisayar Programlama, Önlisans) mezunudur.",
      }
    : {
        short:
          "Utku Bağdaş is a Türkiye-based Lead Game Developer with 6.5+ years of Unity / C# experience and 50+ titles shipped on App Store and Google Play. He is currently Lead Full-Stack Game Developer at Mimiko Technology (London, Remote) while also running his own sole proprietorship building AI-powered SaaS products and automation software for companies.",
        medium:
          "Utku Bağdaş is a Lead Game Developer with 6.5+ years of experience building mobile and PC games in the Unity ecosystem since January 2020. Across his career at Kaiju Games, Omnio Games, Ace Games and eleman.net, he has contributed to 50+ titles published on App Store and Google Play. Since September 2024 he has been Lead Full-Stack Game Developer at London-based Mimiko Technology, leading the team across Unity (frontend), backend and DevOps. Since 2025 he also runs a sole proprietorship in Türkiye, delivering AI-powered SaaS products, automation tools and custom software to companies. He holds a Bachelor's in Management Information Systems from Anadolu University and an Associate's in Computer Programming from Dokuz Eylül University.",
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
