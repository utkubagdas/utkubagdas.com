import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";
import ConsoleEgg from "@/components/ConsoleEgg";
import KonamiEgg from "@/components/KonamiEgg";
import SmoothScroll from "@/components/SmoothScroll";
import ThemeProvider from "@/components/ThemeProvider";
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
    default: "Utku Bağdaş — Lead Game Developer",
    template: "%s — Utku Bağdaş",
  },
  description:
    "Lead Game Developer with 6.5+ years of Unity and 50+ titles shipped. Portfolio and personal projects.",
  openGraph: {
    title: "Utku Bağdaş — Lead Game Developer",
    description:
      "Lead Game Developer with 6.5+ years of Unity and 50+ titles shipped. Portfolio and personal projects.",
    url: "https://utkubagdas.com",
    siteName: "Utku Bağdaş",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utku Bağdaş — Lead Game Developer",
    description:
      "Lead Game Developer with 6.5+ years of Unity and 50+ titles shipped. Portfolio and personal projects.",
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  appleWebApp: {
    capable: true,
    title: "Utku Bağdaş",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090c" },
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider>
          <NextTopLoader
            color="#34d399"
            height={2}
            showSpinner={false}
            shadow="0 0 10px #34d399, 0 0 5px #34d399"
          />
          <SmoothScroll />
          <div className="grain-overlay" aria-hidden />
          <ConsoleEgg />
          <KonamiEgg />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
