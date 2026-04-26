export type Project = {
  slug: string;
  name: string;
  tagline: { tr: string; en: string };
  stack: string[];
  url?: string;
  year: string;
  status: "live" | "wip" | "placeholder";
  featured?: boolean;
  client?: { tr: string; en: string };
  role?: { tr: string; en: string };
  problem?: { tr: string; en: string };
  solution?: { tr: string; en: string };
  outcome?: { tr: string; en: string };
};

export const projects: Project[] = [
  {
    slug: "meta-life",
    name: "Meta Life: Your Second Home",
    tagline: {
      tr: "App Store ve Google Play'de yayınlanan mobil sosyal yaşam oyunu. Unity / C# ile geliştirildi.",
      en: "Mobile social-life game published on App Store and Google Play. Built with Unity / C#.",
    },
    stack: ["Unity", "C#", "iOS", "Android"],
    year: "2023",
    status: "live",
    featured: true,
    client: { tr: "eleman.net", en: "eleman.net" },
    role: { tr: "Game Developer", en: "Game Developer" },
  },
  {
    slug: "rope-on-titan",
    name: "Rope on Titan",
    tagline: {
      tr: "Ace Games hypercasual mobil oyun başlığı. iOS ve Android'de yayınlandı.",
      en: "Ace Games hypercasual mobile title. Shipped on iOS and Android.",
    },
    stack: ["Unity", "C#", "iOS", "Android"],
    year: "2022",
    status: "live",
    client: { tr: "Ace Games", en: "Ace Games" },
    role: { tr: "Game Developer", en: "Game Developer" },
  },
  {
    slug: "squad-league",
    name: "Squad League",
    tagline: {
      tr: "Ace Games competitive multiplayer mobil başlığı.",
      en: "Ace Games competitive multiplayer mobile title.",
    },
    stack: ["Unity", "C#", "Multiplayer", "iOS"],
    year: "2022",
    status: "live",
    client: { tr: "Ace Games", en: "Ace Games" },
    role: { tr: "Game Developer", en: "Game Developer" },
  },
  {
    slug: "omnio-portfolio",
    name: "Omnio Games Portfolio",
    tagline: {
      tr: "Rope Archer, Knit Up!, Crossing Crowd, Golden Parents, Rope Down!, Diamond Factory! ve dahası — 10+ shipped başlık.",
      en: "Rope Archer, Knit Up!, Crossing Crowd, Golden Parents, Rope Down!, Diamond Factory! and more — 10+ shipped titles.",
    },
    stack: ["Unity", "C#", "Hypercasual"],
    year: "2022",
    status: "live",
    client: { tr: "Omnio Games", en: "Omnio Games" },
    role: { tr: "Game Developer", en: "Game Developer" },
  },
  {
    slug: "kaiju-portfolio",
    name: "Kaiju Games · Mobile Titles",
    tagline: {
      tr: "İlk profesyonel game dev pozisyonum. Hypercasual ve mid-core mobil oyunlarda Unity geliştirme.",
      en: "First professional game-dev role. Unity development on hypercasual & mid-core mobile games.",
    },
    stack: ["Unity", "C#", "iOS", "Android"],
    year: "2021",
    status: "live",
    client: { tr: "Kaiju Games İstanbul", en: "Kaiju Games İstanbul" },
    role: { tr: "Game Developer", en: "Game Developer" },
  },
  {
    slug: "mimiko-projects",
    name: "Mimiko Technology · Confidential",
    tagline: {
      tr: "Mimiko Technology'de Lead Full-Stack Game Developer olarak yönettiğim multi-platform oyun projeleri (NDA).",
      en: "Multi-platform game projects led at Mimiko Technology as Lead Full-Stack Game Developer (NDA).",
    },
    stack: ["Unity", "C#", ".NET", "Backend", "DevOps"],
    year: "2024",
    status: "live",
    client: { tr: "Mimiko Technology · London", en: "Mimiko Technology · London" },
    role: {
      tr: "Lead Full-Stack Game Developer · Team Lead",
      en: "Lead Full-Stack Game Developer · Team Lead",
    },
  },
];
