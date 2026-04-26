export type Post = {
  slug: string;
  date: string;
  title: { tr: string; en: string };
  excerpt: { tr: string; en: string };
  body: { tr: string[]; en: string[] };
  tags: string[];
  readingMinutes: number;
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    date: "2026-04-26",
    title: {
      tr: "Merhaba — neden bir blog açtım?",
      en: "Hello — why I started a blog",
    },
    excerpt: {
      tr: "Bu blogu, geliştirme yolculuğumdan ve şirketler için ürün üretirken öğrendiklerimden notlar tutmak için açtım.",
      en: "I started this blog to keep notes from my dev journey and what I learn while shipping products for companies.",
    },
    body: {
      tr: [
        "Bu sayfa şu anda blog'un altyapısını barındırmak için boş bir gönderidir. Yakında burada şu konularda yazılar olacak: AI-first geliştirme, Claude Code ile ürünleştirme, sürdürülebilir kod yazımı, bilingual sitelerde i18n stratejileri ve B2B müşteri ilişkileri.",
        "Yazılar Türkçe ve İngilizce olarak iki dilde yayınlanacak. Yorumlar şimdilik kapalı; geri bildirim için doğrudan e-postayla ulaşabilirsin.",
        "Takipte kal.",
      ],
      en: [
        "This page is a placeholder while the blog infrastructure goes live. Upcoming topics include: AI-first development, productizing with Claude Code, writing sustainable code, i18n strategies for bilingual sites and B2B client relationships.",
        "Posts will be published in both Turkish and English. Comments are closed for now; reach out directly by email for feedback.",
        "Stay tuned.",
      ],
    },
    tags: ["meta", "intro"],
    readingMinutes: 2,
  },
];
