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
    jobTitle: "Full-stack Developer",
    description:
      locale === "tr"
        ? "Şirketler için ölçeklenebilir web uygulamaları ve özel yazılım çözümleri geliştiren full-stack developer."
        : "Full-stack developer building scalable web applications and custom software for companies.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
    },
    sameAs: socials.map((s) => s.href),
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      ".NET",
      "C#",
      "Unity",
      "Flutter",
      "Firebase",
      "Postgres",
      "Tailwind CSS",
      "Claude API",
      "Vercel",
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
