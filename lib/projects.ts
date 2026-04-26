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
      tr: "App Store ve Google Play'de yayınlanmış mobil sosyal yaşam oyunu. Unity / C# ile geliştirilmiş, Flutter companion arayüzü ve Firebase backend'i üzerine kurulu.",
      en: "Mobile social-life game published on App Store and Google Play. Built with Unity / C#, paired with a Flutter companion interface and a Firebase backend.",
    },
    stack: ["Unity", "C#", "Flutter", "Firebase", "iOS", "Android"],
    year: "2023",
    status: "live",
    featured: true,
    client: { tr: "eleman.net", en: "eleman.net" },
    role: { tr: "Game Developer", en: "Game Developer" },
    problem: {
      tr: "Kullanıcıların gerçek hayat dinamiklerini sosyal bir oyun ortamında yaşayabileceği canlı, multiplayer bir 'ikinci ev' deneyimi gerekiyordu. Mobil cihazlarda akıcı çalışan, eş zamanlı binlerce oyuncuyu destekleyen, hızlı iterasyona izin veren bir mimariye ihtiyaç vardı.",
      en: "The product needed a live multiplayer 'second-home' experience where users could experience real-life social dynamics on mobile. The architecture had to run smoothly on devices, support thousands of concurrent players, and allow rapid iteration on game systems.",
    },
    solution: {
      tr: "Unity / C# ile gameplay ve dünya simülasyonunu, Flutter ile oyun dışı sosyal arayüz akışlarını (profil, mesajlaşma, mağaza), Firebase Realtime DB + Auth + Cloud Functions ile multiplayer sync ve sunucusuz oturum yönetimini birlikte kurguladık. Asset bundle pipeline'ı sayesinde oyun içeriğini app store güncellemesi beklemeden yayına almayı sağladım.",
      en: "Built gameplay and world simulation in Unity / C#, the out-of-game social flows (profile, messaging, store) in Flutter, and multiplayer sync + auth + serverless session handling on Firebase Realtime DB, Auth and Cloud Functions. An asset bundle pipeline let us push content without waiting on app-store updates.",
    },
    outcome: {
      tr: "Hem App Store hem Google Play'de yayına alındı. Mobil cihazlarda 60 FPS hedefini koruyan multiplayer altyapı, iterasyonu haftalık döngüye indiren content pipeline ve düşük operasyon maliyetli Firebase backend ile uzun vadeli live ops'u kolaylaştırdık.",
      en: "Shipped on both App Store and Google Play. The multiplayer stack held its 60 FPS target on devices, the content pipeline cut iteration to a weekly cadence, and the low-ops Firebase backend made long-term live ops sustainable.",
    },
  },
  {
    slug: "rope-on-titan",
    name: "Rope on Titan",
    tagline: {
      tr: "Ace Games'in hypercasual mobil oyun başlığı. iOS ve Android'de yayınlandı.",
      en: "Hypercasual mobile title from Ace Games, shipped on iOS and Android.",
    },
    stack: ["Unity", "C#", "iOS", "Android"],
    year: "2022",
    status: "live",
    client: { tr: "Ace Games", en: "Ace Games" },
    role: { tr: "Game Developer", en: "Game Developer" },
    problem: {
      tr: "Hypercasual pazarında bir prototipin 'tutması', metrikleri 1-2 hafta içinde test pazarlarda doğrulamasını gerektiriyordu. Hızlı pivot edilebilir, performansı tüm cihaz yelpazesinde stabil bir gameplay loop'una ihtiyaç vardı.",
      en: "In the hypercasual space, a prototype has to prove its metrics in test markets within 1–2 weeks. We needed a gameplay loop that could pivot fast and stay performant across the whole device range.",
    },
    solution: {
      tr: "Unity ile minimal core loop'u kısa iterasyonlarla kurdum. Oyuncunun ipi sallayıp asılarak ilerlediği ana mekanik, mobil dokunma ergonomisi gözetilerek kalibre edildi. Build süresi ve oyun ağırlığı düşük tutuldu — store size ve install conversion için kritik.",
      en: "Built the minimal core loop in Unity through short iterations. The rope-swing-and-cling mechanic was tuned for mobile-touch ergonomics. Build size and weight were kept low — both critical for store size and install conversion.",
    },
    outcome: {
      tr: "Hem iOS hem Android mağazalarında yayınlanan, Ace Games hypercasual portföyünün test edilen başlıklarından biri oldu.",
      en: "Shipped on both iOS and Android, becoming one of the tested titles in Ace Games' hypercasual portfolio.",
    },
  },
  {
    slug: "squad-league",
    name: "Squad League",
    tagline: {
      tr: "Ace Games'in rekabetçi multiplayer mobil oyunu. Photon altyapısıyla geliştirildi.",
      en: "Competitive multiplayer mobile title from Ace Games, built on Photon networking.",
    },
    stack: ["Unity", "C#", "Photon", "Multiplayer", "iOS"],
    year: "2022",
    status: "live",
    client: { tr: "Ace Games", en: "Ace Games" },
    role: { tr: "Game Developer", en: "Game Developer" },
    problem: {
      tr: "Rekabetçi bir squad-tabanlı multiplayer mobil oyunu için düşük gecikmeli matchmaking, deterministik gameplay simülasyonu ve mobil bant genişliğinde verimli çalışan state senkronizasyonuna ihtiyaç vardı.",
      en: "A competitive squad-based mobile multiplayer title needed low-latency matchmaking, deterministic gameplay simulation and state sync that runs efficiently within mobile bandwidth.",
    },
    solution: {
      tr: "Photon ile authoritative server modelinde matchmaking + room akışını kurdum, Unity tarafında client-side prediction ve interpolation katmanı ekledim. Multiplayer event'lerini paketleyip bant genişliğini optimize eden custom serialization yapısı, mobil cihazlarda akıcı bir deneyim sağladı.",
      en: "Built matchmaking and room flow on top of Photon's authoritative-server model, added client-side prediction and interpolation on the Unity side. A custom serialization layer that batched multiplayer events kept bandwidth low and the experience smooth on mobile.",
    },
    outcome: {
      tr: "iOS'ta yayınlanan başlık, Ace Games'in mid-core multiplayer denemeleri arasında yer aldı.",
      en: "Released on iOS as part of Ace Games' mid-core multiplayer experiments.",
    },
  },
  {
    slug: "omnio-portfolio",
    name: "Omnio Games Portfolio",
    tagline: {
      tr: "Rope Archer, Knit Up!, Crossing Crowd, Golden Parents, Rope Down!, Diamond Factory! ve dahası — 10+ yayınlanmış mobil başlık.",
      en: "Rope Archer, Knit Up!, Crossing Crowd, Golden Parents, Rope Down!, Diamond Factory! and more — 10+ mobile titles shipped.",
    },
    stack: ["Unity", "C#", "Hypercasual"],
    year: "2022",
    status: "live",
    client: { tr: "Omnio Games", en: "Omnio Games" },
    role: { tr: "Game Developer", en: "Game Developer" },
    problem: {
      tr: "Hypercasual stüdyoları başarı için hızı bir silah olarak kullanır: bir prototipin 1-2 haftada üretilmesi, test pazarlarında metrik toplaması ve sonra ya pivot etmesi ya da soft-launch'a geçmesi gerekir. Bu hızda kaliteyi koruyacak bir tekrar kullanılabilir kod tabanı şarttı.",
      en: "In hypercasual studios, speed is the weapon — a prototype must be built in 1–2 weeks, generate metrics in test markets, then pivot or soft-launch. Maintaining quality at that velocity required a reusable code base.",
    },
    solution: {
      tr: "Birçok başlık arasında ortak gameplay primitif'leri (girdi katmanı, level akışı, monetizasyon entegrasyonu, analytics olayları) için kendi internal framework'üme katkıda bulundum. Bu sayede her yeni prototip 0'dan değil, tutarlı bir kaideden başladı.",
      en: "Across the titles, I contributed to an internal framework of shared gameplay primitives (input layer, level flow, monetization integration, analytics events). Each new prototype started from a consistent base instead of from scratch.",
    },
    outcome: {
      tr: "9 ayda 10+ shipped başlık. Rope Archer, Knit Up!, Crossing Crowd, Golden Parents, Rope Down!, Diamond Factory! ve dahası — Omnio Games'in test pazarlarına çıkardığı portföyün önemli bir kısmı.",
      en: "10+ shipped titles in 9 months — Rope Archer, Knit Up!, Crossing Crowd, Golden Parents, Rope Down!, Diamond Factory! and more — a meaningful slice of Omnio Games' test-market portfolio.",
    },
  },
  {
    slug: "kaiju-portfolio",
    name: "Kaiju Games · Mobile Titles",
    tagline: {
      tr: "İlk profesyonel game dev pozisyonum. Hypercasual ve mid-core mobil oyunlar üzerinde Unity ile geliştirme yaptım.",
      en: "My first professional game-dev role. Worked on hypercasual and mid-core mobile titles with Unity.",
    },
    stack: ["Unity", "C#", "iOS", "Android"],
    year: "2021",
    status: "live",
    client: { tr: "Kaiju Games İstanbul", en: "Kaiju Games İstanbul" },
    role: { tr: "Game Developer", en: "Game Developer" },
    problem: {
      tr: "Profesyonel bir oyun stüdyosunun temposuna ve standartlarına junior bir geliştirici olarak adapte olmak; aynı anda hem hypercasual hızını hem mid-core derinliğini öğrenmek gerekiyordu.",
      en: "Adapting as a junior to the cadence and standards of a professional game studio — while learning both hypercasual speed and mid-core depth at the same time.",
    },
    solution: {
      tr: "Unity'nin core sistemlerini (UI, animation, input, scriptable objects) gerçek prodüksiyon ortamında derinleştirdim. Code review akışlarına ve git workflow'una uyum sağladım, ekiple paylaşılan asset pipeline'ında çalıştım.",
      en: "Got hands-on with Unity's core systems (UI, animation, input, scriptable objects) in a real production setting. Plugged into code-review flows, the git workflow, and the shared asset pipeline.",
    },
    outcome: {
      tr: "12 ay içinde birden fazla mobile başlığa katkıda bulundum, bir sonraki pozisyonuma kadar olan game dev temelimi attım.",
      en: "Contributed to several mobile titles within 12 months and laid the foundation for the next steps in my game-dev career.",
    },
  },
  {
    slug: "mimiko-projects",
    name: "Mimiko Technology · Confidential",
    tagline: {
      tr: "Mimiko Technology'de Lead Full-Stack Game Developer olarak yönettiğim multi-platform oyun projeleri. NDA kapsamında.",
      en: "Multi-platform game projects I lead at Mimiko Technology as Lead Full-Stack Game Developer. Under NDA.",
    },
    stack: ["Unity", "C#", ".NET", "Backend", "DevOps"],
    year: "2024",
    status: "live",
    client: { tr: "Mimiko Technology · London", en: "Mimiko Technology · London" },
    role: {
      tr: "Lead Full-Stack Game Developer · Team Lead",
      en: "Lead Full-Stack Game Developer · Team Lead",
    },
    problem: {
      tr: "Multi-platform mobil ve PC oyunlarını uçtan uca — Unity client, .NET backend ve DevOps pipeline'ı dahil — tek bir teknik vizyon altında yönetebilen bir lead'e ihtiyaç vardı. Ekibin hızını korumak ve teknik kararları yönlendirmek kritik unsurlardı.",
      en: "The team needed a lead who could own multi-platform mobile and PC games end-to-end — Unity client, .NET backend and DevOps pipeline — under one technical vision, while keeping team velocity high and steering technical decisions.",
    },
    solution: {
      tr: "Hem Unity client tarafında frontend mimarisini kurguladım hem .NET backend servislerinin tasarımına liderlik ettim. CI/CD ve build pipeline'larını kurarak ekibin haftalık sprint çıktısını öngörülebilir hale getirdim, code review ve mentoring akışıyla junior geliştiricilerin önünü açtım.",
      en: "Owned the Unity client frontend architecture, led the design of the .NET backend services, and built CI/CD + build pipelines so the team's weekly sprint output became predictable. Code review and mentoring helped unblock the junior engineers.",
    },
    outcome: {
      tr: "Devam eden çalışma — proje detayları NDA kapsamında. Roadmap'in sahibi ve teknik karar mercii olarak görev yapmaya devam ediyorum.",
      en: "Ongoing work — project details under NDA. I continue to own the roadmap and act as the technical decision-maker.",
    },
  },
];
