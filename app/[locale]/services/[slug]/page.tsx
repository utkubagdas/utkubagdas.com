import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import { serviceSlugs, serviceIconMap, type ServiceSlug } from "@/lib/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceIcon from "@/components/ServiceIcon";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const idx = serviceSlugs.indexOf(slug as ServiceSlug);
  if (idx === -1) return {};
  const t = getDictionary(locale as Locale);
  const item = t.services.items[idx];
  return {
    title: item.title,
    description: item.desc,
    alternates: {
      canonical: `https://utkubagdas.com/${locale}/services/${slug}`,
      languages: {
        tr: `https://utkubagdas.com/tr/services/${slug}`,
        en: `https://utkubagdas.com/en/services/${slug}`,
        "x-default": `https://utkubagdas.com/tr/services/${slug}`,
      },
    },
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const idx = serviceSlugs.indexOf(slug as ServiceSlug);
  if (idx === -1) notFound();
  const t = getDictionary(locale as Locale);
  const l = locale as Locale;
  const item = t.services.items[idx];
  const iconName = serviceIconMap[slug as ServiceSlug];

  const stages = l === "tr"
    ? [
        { k: "Keşif", desc: "İhtiyacın detaylarını ve hedefleri çıkarıyoruz." },
        { k: "Mimari", desc: "Doğru stack ve veri modelini birlikte belirliyoruz." },
        { k: "Geliştirme", desc: "Haftalık demo'larla şeffaf ilerleme." },
        { k: "Yayın", desc: "Üretime alma + monitoring + opsiyonel bakım." },
      ]
    : [
        { k: "Discovery", desc: "We surface details and goals together." },
        { k: "Architecture", desc: "We agree on the right stack and data model." },
        { k: "Build", desc: "Weekly demos and transparent progress." },
        { k: "Launch", desc: "Production rollout + monitoring + optional maintenance." },
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
          href={`/${l}#services`}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition hover:text-accent"
        >
          <span aria-hidden>←</span>
          {l === "tr" ? "Hizmetlere dön" : "Back to services"}
        </Link>

        <div className="mt-8 flex items-center gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-panel/60 text-accent">
            <ServiceIcon name={iconName} />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            0{idx + 1} — {t.services.label.split("—")[1]?.trim() ?? ""}
          </span>
        </div>

        <h1
          className="mt-4 font-display italic leading-[1.05] tracking-tight text-white"
          style={{
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontVariationSettings: "'opsz' 144, 'SOFT' 50",
          }}
        >
          {item.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {item.desc}
        </p>

        <section data-reveal className="mt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {l === "tr" ? "İçerik" : "Includes"}
          </h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {item.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-md border border-border bg-panel/40 px-4 py-3"
              >
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-sm text-white/85">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <section data-reveal data-reveal-delay="2" className="mt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {l === "tr" ? "Süreç" : "Process"}
          </h2>
          <ol className="mt-4 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
            {stages.map((s, i) => (
              <li
                key={s.k}
                className="flex flex-col gap-2 bg-panel/40 p-5"
              >
                <span className="font-mono text-xs text-accent">
                  0{i + 1}
                </span>
                <h3 className="text-sm font-medium text-white">{s.k}</h3>
                <p className="text-xs leading-relaxed text-muted">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section data-reveal data-reveal-delay="3" className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-panel/40 p-6">
          <p className="text-base text-white/90">
            {l === "tr"
              ? "Bu hizmetle ilgili konuşalım mı?"
              : "Want to talk about this service?"}
          </p>
          <Link
            href={`/${l}#contact`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-accent/90"
          >
            {t.nav.contact}
            <span aria-hidden>→</span>
          </Link>
        </section>
      </main>
      <Footer locale={l} t={t} />
    </>
  );
}
