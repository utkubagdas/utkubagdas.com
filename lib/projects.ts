export type Project = {
  slug: string;
  name: string;
  tagline: { tr: string; en: string };
  stack: string[];
  url?: string;
  year: string;
  status: "live" | "wip" | "placeholder";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    name: "Project One",
    tagline: {
      tr: "Yakında — kurumsal SaaS ürünü için kapsamlı bir vaka çalışması.",
      en: "Coming soon — a full case study for an enterprise SaaS product.",
    },
    stack: ["Next.js", "TypeScript", "Postgres", "Stripe"],
    year: "2025",
    status: "placeholder",
    featured: true,
  },
  {
    slug: "project-two",
    name: "Project Two",
    tagline: {
      tr: "Yakında — performans odaklı kurumsal web sitesi.",
      en: "Coming soon — performance-first corporate website.",
    },
    stack: ["React", "Node.js", "Tailwind"],
    year: "2024",
    status: "placeholder",
  },
  {
    slug: "project-three",
    name: "Project Three",
    tagline: {
      tr: "Yakında — Claude API ile yapay zekâ entegrasyonu.",
      en: "Coming soon — AI integration powered by the Claude API.",
    },
    stack: ["Claude API", "Next.js", "Vercel"],
    year: "2025",
    status: "placeholder",
  },
  {
    slug: "project-four",
    name: "Project Four",
    tagline: {
      tr: "Yakında — iç araç ve admin paneli.",
      en: "Coming soon — internal tool and admin dashboard.",
    },
    stack: ["Next.js", "Prisma", "tRPC"],
    year: "2024",
    status: "placeholder",
  },
];
