import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/dictionaries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://utkubagdas.com";
  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "tr" ? 1 : 0.8,
  }));
}
