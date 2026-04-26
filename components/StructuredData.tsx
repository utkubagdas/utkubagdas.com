import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { contactEmail, socials } from "@/lib/social";

const SITE_URL = "https://utkubagdas.com";

export default function StructuredData({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Utku Bağdaş",
    url: SITE_URL,
    email: `mailto:${contactEmail}`,
    jobTitle: "Lead Game Developer · SaaS Builder",
    worksFor: {
      "@type": "Organization",
      name: "Mimiko Technology",
      url: "https://mimiko.com.tr",
    },
    description:
      locale === "tr"
        ? "Lead Full-Stack Game Developer @ Mimiko Technology (London, Remote). 6.5+ yıllık Unity / C# deneyimi, 50+ yayınlanmış oyun. Kendi şahıs şirketim üzerinden şirketlere AI destekli SaaS ürünleri ve otomasyon yazılımları üretiyorum."
        : "Lead Full-Stack Game Developer at Mimiko Technology (London, Remote). 6.5+ years of Unity / C# experience, 50+ titles shipped. Building AI-powered SaaS products and automation tools for companies through my sole proprietorship.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
    },
    sameAs: socials.map((s) => s.href),
    knowsAbout: [
      "Unity",
      "C#",
      ".NET",
      "Game Development",
      "Mobile Game Development",
      "Multiplayer (Photon, Mirror, Netcode, Fishnet)",
      "AR / VR",
      "ARKit",
      "AR Foundation",
      "Oculus SDK",
      "Unity XR",
      "iOS",
      "Android",
      "Steam",
      "WebGL",
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
      "Firebase",
      "Claude API",
      "AI-powered SaaS",
      "Workflow automation",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Utku Bağdaş",
    url: SITE_URL,
    inLanguage: locale === "tr" ? "tr-TR" : "en-US",
    publisher: {
      "@type": "Person",
      name: "Utku Bağdaş",
      url: SITE_URL,
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Utku Bağdaş",
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    priceRange: "$$",
    serviceType: t.services.items.map((s) => s.title),
    provider: {
      "@type": "Person",
      name: "Utku Bağdaş",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  };

  const data = [person, website, faq, professionalService];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
