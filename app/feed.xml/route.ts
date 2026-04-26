import { posts } from "@/lib/posts";

const SITE = "https://utkubagdas.com";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const dynamic = "force-static";

export async function GET() {
  const items = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p) => {
      const url = `${SITE}/en/blog/${p.slug}`;
      const date = new Date(p.date).toUTCString();
      return `
    <item>
      <title>${escapeXml(p.title.en)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(p.excerpt.en)}</description>
      <pubDate>${date}</pubDate>
      ${p.tags.map((t) => `<category>${escapeXml(t)}</category>`).join("")}
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Utku Bağdaş — Blog</title>
    <link>${SITE}/en/blog</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Notes on development, productizing with AI, and sustainable code.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
