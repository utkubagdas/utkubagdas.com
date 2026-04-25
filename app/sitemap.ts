import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/dictionaries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://utkubagdas.com";
  const subRoutes = ["", "uses", "now", "cv"];
  const now = new Date();

  return locales.flatMap((locale) =>
    subRoutes.map((sub) => ({
      url: `${base}/${locale}${sub ? `/${sub}` : ""}`,
      lastModified: now,
      changeFrequency: sub === "now" ? "monthly" : "yearly",
      priority:
        sub === ""
          ? locale === "tr"
            ? 1
            : 0.9
          : sub === "cv"
          ? 0.7
          : 0.6,
    }))
  );
}
