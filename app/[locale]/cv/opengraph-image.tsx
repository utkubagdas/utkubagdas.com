import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Utku Bağdaş — CV";
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
            "radial-gradient(800px 400px at 50% 0%, rgba(52,211,153,0.18), transparent 60%)",
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
          utkubagdas.com / {params.locale} / cv
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 110,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Utku Bağdaş
          </div>
          <div
            style={{
              color: "#34d399",
              fontSize: 36,
              marginTop: 8,
              fontFamily: "ui-monospace, monospace",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {isTr ? "Özgeçmiş" : "Curriculum Vitae"}
          </div>
          <div
            style={{
              color: "#8a8a93",
              fontSize: 26,
              marginTop: 28,
              maxWidth: 980,
              lineHeight: 1.4,
            }}
          >
            {isTr
              ? "Full-stack Developer — Next.js, .NET, Flutter, Unity, AI integrations."
              : "Full-stack Developer — Next.js, .NET, Flutter, Unity, AI integrations."}
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
          {isTr ? "Yazdırılabilir" : "Print-friendly"} · utkubagdas.com
        </div>
      </div>
    ),
    { ...size }
  );
}
