import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/dictionaries";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";
import { devlogs } from "@/lib/devlogs";
import { serviceSlugs } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://utkubagdas.com";
  const now = new Date();

  const topRoutes = ["", "uses", "now", "cv", "press", "blog", "devlog"];

  const out: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const sub of topRoutes) {
      out.push({
        url: `${base}/${locale}${sub ? `/${sub}` : ""}`,
        lastModified: now,
        changeFrequency: sub === "now" || sub === "blog" ? "monthly" : "yearly",
        priority:
          sub === ""
            ? locale === "tr"
              ? 1
              : 0.9
            : sub === "blog"
            ? 0.7
            : sub === "cv"
            ? 0.7
            : 0.6,
      });
    }
    for (const p of projects) {
      out.push({
        url: `${base}/${locale}/projects/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
    for (const slug of serviceSlugs) {
      out.push({
        url: `${base}/${locale}/services/${slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
    for (const post of posts) {
      out.push({
        url: `${base}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
    for (const log of devlogs) {
      out.push({
        url: `${base}/${locale}/devlog/${log.slug}`,
        lastModified: new Date(log.date),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return out;
}
