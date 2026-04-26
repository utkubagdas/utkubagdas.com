import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";
import ConsoleEgg from "@/components/ConsoleEgg";
import KonamiEgg from "@/components/KonamiEgg";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://utkubagdas.com"),
  title: {
    default: "Utku Bağdaş — Full-stack Developer",
    template: "%s — Utku Bağdaş",
  },
  description:
    "Full-stack developer building scalable web applications and custom software for companies.",
  openGraph: {
    title: "Utku Bağdaş — Full-stack Developer",
    description:
      "Full-stack developer building scalable web applications and custom software for companies.",
    url: "https://utkubagdas.com",
    siteName: "Utku Bağdaş",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utku Bağdaş — Full-stack Developer",
    description:
      "Full-stack developer building scalable web applications and custom software for companies.",
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Utku Bağdaş",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <NextTopLoader
          color="#34d399"
          height={2}
          showSpinner={false}
          shadow="0 0 10px #34d399, 0 0 5px #34d399"
        />
        <div className="grain-overlay" aria-hidden />
        <ConsoleEgg />
        <KonamiEgg />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
