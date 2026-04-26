export type DevLog = {
  slug: string;
  date: string;
  title: { tr: string; en: string };
  excerpt: { tr: string; en: string };
  body: { tr: string[]; en: string[] };
  tags: string[];
};

export const devlogs: DevLog[] = [
  {
    slug: "devlog-acildi",
    date: "2026-04-26",
    title: {
      tr: "/devlog'u açtım",
      en: "Opened the /devlog",
    },
    excerpt: {
      tr: "Mimiko'da, kendi şahıs şirketimde ve kişisel projelerde çıkan küçük teknik notları, denediğim Unity kalıplarını ve AI workflow'larını buraya yazacağım.",
      en: "Short technical notes from Mimiko, my sole proprietorship and side projects — Unity patterns I'm trying, AI workflows that work, build breaks I solved.",
    },
    body: {
      tr: [
        "Bu sayfa devlog'un ilk girişi. Blog uzun yazılar için (giriş, gelişme, sonuç). Devlog ise daha çiğ, daha sık atılan kısa notlar olacak — bir Unity tip, Claude Code workflow'u, build break çözümü, performans ölçümü, vb.",
        "Bunu yapma sebebim basit: yıllarca öğrendiğim küçük şeyler genelde notlarımın içinde kalıyor. Buraya yazınca hem ben tekrar bulurum, hem de aynı problemle karşılaşan başka bir geliştirici Google'a sorduğunda denk gelir.",
        "Format: tarih + başlık + 1-3 paragraf + opsiyonel kod bloğu. Şu an tek girişten ibaret, devamı yakında.",
      ],
      en: [
        "This is the first entry of the devlog. The blog is for long-form writing (intro, body, conclusion). The devlog will be rawer, shorter posts — a Unity tip, a Claude Code workflow, a build-break fix, a perf measurement.",
        "Reason is simple: most of the small things I learn end up trapped in my notes. Writing them here means I can find them again — and someone hitting the same problem on Google might too.",
        "Format: date + title + 1–3 paragraphs + optional code block. One entry today, more on the way.",
      ],
    },
    tags: ["meta", "site"],
  },
];
