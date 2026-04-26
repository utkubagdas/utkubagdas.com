import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Utku Bağdaş — /now";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({
  params,
}: {
  params: { locale: string };
}) {
  const isTr = params.locale === "tr";
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
            "radial-gradient(800px 400px at 20% 0%, rgba(52,211,153,0.18), transparent 60%)",
        }}
      >
        <div
          style={{
            color: "#34d399",
            fontFamily: "ui-monospace, monospace",
            fontSize: 18,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          utkubagdas.com / {params.locale} / now
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 140,
              fontWeight: 700,
              letterSpacing: -3,
              fontStyle: "italic",
            }}
          >
            /now
          </div>
          <div
            style={{
              color: "#8a8a93",
              fontSize: 28,
              marginTop: 16,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {isTr
              ? "Hayatımın bu döneminde nelere odaklandığımı paylaşıyorum."
              : "What I'm focused on at this period of life."}
          </div>
        </div>
        <div
          style={{
            color: "#8a8a93",
            fontFamily: "ui-monospace, monospace",
            fontSize: 16,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Utku Bağdaş — Full-stack Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
