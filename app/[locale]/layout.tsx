import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/dictionaries";

export function generateStaticParams() {
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
    alternates: {
      canonical: `https://utkubagdas.com/${locale}`,
      languages: {
        tr: "https://utkubagdas.com/tr",
        en: "https://utkubagdas.com/en",
        "x-default": "https://utkubagdas.com/tr",
      },
    },
    openGraph: {
      locale: isTr ? "tr_TR" : "en_US",
      alternateLocale: isTr ? "en_US" : "tr_TR",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <>{children}</>;
}
