import { ImageResponse } from "next/og";
import { posts } from "@/lib/posts";

export const runtime = "edge";
export const alt = "Utku Bağdaş — Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  const isTr = params.locale === "tr";
  const title = post?.title[params.locale as "tr" | "en"] ?? "Blog";
  const date = post
    ? new Intl.DateTimeFormat(isTr ? "tr-TR" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(post.date))
    : "";
  const tags = post?.tags ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#08090c",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
          backgroundImage:
            "radial-gradient(900px 500px at 30% 0%, rgba(52,211,153,0.18), transparent 60%), radial-gradient(700px 400px at 80% 100%, rgba(34,211,238,0.10), transparent 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: "1px solid #1f1f24",
              background: "#0f1014",
              color: "#34d399",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "ui-monospace, monospace",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            ub
          </div>
          <div
            style={{
              color: "#34d399",
              fontFamily: "ui-monospace, monospace",
              fontSize: 18,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            utkubagdas.com / blog
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8a8a93",
            fontFamily: "ui-monospace, monospace",
            fontSize: 18,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          <span>{date}</span>
          <span>{tags.map((t) => `#${t}`).join("  ")}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
