import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Utku Bağdaş — Full-stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: { locale: string };
}) {
  const isTr = params.locale === "tr";
  const lede = isTr
    ? "Şirketler için ölçeklenebilir web uygulamaları ve özel yazılım çözümleri."
    : "Scalable web applications and custom software for companies.";
  const tag = isTr
    ? "Müsait — yeni projelere açık"
    : "Available — open to new projects";

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
            "radial-gradient(800px 400px at 50% -10%, rgba(52,211,153,0.18), transparent 60%)",
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
            utkubagdas.com / {params.locale}
          </div>
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
            Full-stack Developer
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
            {lede}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8a8a93",
            fontFamily: "ui-monospace, monospace",
            fontSize: 16,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          <span>{tag}</span>
          <span>{isTr ? "TR / EN" : "EN / TR"}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
