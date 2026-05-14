export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const dictionaries = {
  tr: {
    nav: {
      about: "Hakkımda",
      services: "Hizmetler",
      process: "Süreç",
      projects: "Projeler",
      faq: "S.S.S",
      contact: "İletişim",
    },
    hero: {
      tag: "Portfolyo · 2020 — şu an",
      title: "Utku Bağdaş",
      role: "Lead Game Developer",
      lede:
        "6.5+ yıldır Unity ile mobil ve PC oyunlar geliştiriyorum. App Store ve Play Store'da 50+ yayınlanmış oyun.",
      sub: "Mesai dışı zamanlarda AI destekli ürün denemeleri ve otomasyon araçları üzerinde çalışıyorum.",
      cta: "Projeleri gör",
      ctaSecondary: "Merhaba de",
      rotatingPrefix: "Çalıştığım alanlar:",
      rotatingItems: [
        "Mobil oyunlar",
        "Steam / PC oyunları",
        "AI destekli ürünler",
        "Otomasyon araçları",
        "AR / VR deneyimler",
      ],
      statusLocation: "Türkiye",
      statusLocaltime: "Yerel Saat",
      statusFocus: "Şu an",
      statusFocusValue: "Lead Game Dev @ Mimiko Technology",
      scrollHint: "Aşağı kaydır",
    },
    stats: {
      items: [
        { value: "6+", label: "Yıllık game dev deneyimi" },
        { value: "50+", label: "Yayınlanmış oyun" },
        { value: "5+", label: "Stüdyo & şirket" },
        { value: "24s", label: "Yanıt süresi" },
      ],
    },
    about: {
      label: "01 — Hakkımda",
      title: "Lead Game Developer · AI ile genişleyen pratik",
      body:
        "Mimiko Technology'de (London, remote) Lead Full-Stack Game Developer olarak ekip yönetiyorum. 6.5+ yıldır Unity / C# ekosisteminde mobil, Steam ve WebGL oyunları geliştirdim — 50+ yayınlanmış proje var. Mesai dışı zamanlarda AI destekli ürün denemeleri ve otomasyon araçları üzerinde çalışıyor, yeni teknolojileri kişisel projelerde deniyorum.",
      principlesTitle: "Çalışma prensiplerim",
      principles: [
        {
          title: "Önce iş hedefi",
          desc: "Önce ne kazandıracağını konuşuruz, sonra teknolojiyi seçeriz.",
        },
        {
          title: "Hızlı teslim, küçük döngüler",
          desc: "Her hafta görülebilir ilerleme, gizli sürpriz yok.",
        },
        {
          title: "Game-grade kod kalitesi",
          desc: "60 FPS oyun motorunda öğrenilen disiplini SaaS ürünlerine taşıyorum.",
        },
        {
          title: "Şeffaf iletişim",
          desc: "Direkt mesajlaşma, net dokümantasyon, hızlı dönüş.",
        },
      ],
      stackLabel: "Çalıştığım araçlar",
      stackGroups: [
        {
          name: "Game Engine & Tools",
          items: ["Unity", "C#", ".NET", "DOTween", "Cinemachine", "Odin Inspector"],
        },
        {
          name: "Multiplayer & Network",
          items: ["Photon", "Mirror", "Netcode", "Fishnet"],
        },
        {
          name: "AR / VR",
          items: ["ARKit", "AR Foundation", "Oculus SDK", "Unity XR"],
        },
        {
          name: "Platform",
          items: ["iOS", "Android", "Steam", "WebGL"],
        },
        {
          name: "SaaS / Web",
          items: ["Next.js", "React", "TypeScript", "Tailwind", "Flutter", "Firebase"],
        },
        {
          name: "AI / Tooling",
          items: ["Claude Code", "Claude API", "OpenAI"],
        },
      ],
    },
    currently: {
      label: "Şu an / Now",
      title: "Hayatın bu döneminde",
      items: [
        {
          k: "Çalışıyorum",
          desc: "Mimiko Technology'de Lead Game Dev olarak Unity projelerinde ekip lideriyim.",
        },
        {
          k: "Deniyorum",
          desc: "Mesai dışında AI agent mimarileri, Claude Code workflow'ları ve oyun motoru içi LLM entegrasyonları — kişisel prototipler üzerinde.",
        },
        {
          k: "Konum",
          desc: "Türkiye'den remote çalışıyorum. Mimiko Technology UK merkezli.",
        },
      ],
    },
    activity: {
      label: "GitHub aktivitesi",
      title: "Son commit'ler",
      subtitle: "GitHub'da son halka açık aktivitem.",
      empty: "Şu an gösterilecek halka açık aktivite yok.",
      offline: "GitHub aktivitesi geçici olarak yüklenemedi.",
      view: "Profili gör",
    },
    journey: {
      label: "Yolculuk",
      title: "Bugüne nasıl geldim",
      items: [
        {
          year: "2025",
          title: "Şahıs şirketi · AI-powered SaaS",
          desc:
            "Türkiye'de kendi şahıs şirketimi açtım. Şirketlere AI destekli SaaS ürünleri ve otomasyon yazılımları sunmaya başladım — game dev disiplinini ürün geliştirmeye taşıyorum.",
        },
        {
          year: "2024",
          title: "Lead Full-Stack Game Developer · Mimiko Technology",
          desc:
            "London merkezli Mimiko Technology'ye Lead Full-Stack Game Developer olarak katıldım. Unity + backend + DevOps ekip yönetimi, remote.",
        },
        {
          year: "2023",
          title: "Game Developer · eleman.net",
          desc:
            "İstanbul Ataşehir'de eleman.net'te tam zamanlı Game Developer. 'Meta Life: Your Second Home' mobil oyunu üzerinde çalıştım.",
        },
        {
          year: "2022",
          title: "Omnio Games + Ace Games · 10+ yayınlanmış oyun",
          desc:
            "Hypercasual ve mid-core mobil oyun stüdyolarında Game Developer. Rope Archer, Knit Up!, Crossing Crowd, Squad League gibi shipped başlıklar.",
        },
        {
          year: "2021",
          title: "Game Developer · Kaiju Games İstanbul",
          desc:
            "Profesyonel game development kariyerime ilk full-time pozisyonumla başladım. Aynı yıl Kodluyoruz Mobil Oyun Bootcamp sertifikasını aldım.",
        },
        {
          year: "2020",
          title: "Unity'ye başladım",
          desc:
            "Anadolu Üniversitesi Yönetim Bilişim Sistemleri okurken Unity / C# ile oyun geliştirmeye odaklandım.",
        },
      ],
    },
    pull: {
      quote:
        "6 yıl boyunca 60 FPS oyun motorunda öğrendiğim disiplini SaaS ürünlerine taşıyorum: oynatılabilir, ölçeklenebilir, sürdürülebilir.",
      attribution: "Çalışma felsefesi",
    },
    codeshow: {
      label: "Kod kalitesi",
      title: "Yazdığım kod nasıl görünür",
      subtitle:
        "50+ shipped başlık boyunca biriktirdiğim Unity / C# yardımcıları — kalite ve okunabilirlik vitrini.",
    },
    services: {
      label: "02 — Uzmanlık",
      title: "Çalıştığım alanlar",
      subtitle:
        "Mobil ve PC oyunlardan AI destekli ürünlere — yıllardır üzerinde çalıştığım disiplin alanları.",
      items: [
        {
          title: "Mobil & PC Oyun Geliştirme",
          desc:
            "Unity / C# ile mobile, Steam ve WebGL platformlarda oyun geliştirme. 50+ shipped başlık deneyimi.",
          bullets: ["Hypercasual & mid-core", "Multiplayer (Photon/Mirror)", "Live ops & analytics"],
        },
        {
          title: "AI Destekli Ürünler",
          desc:
            "Claude ve diğer LLM'lerle güçlendirilmiş ürün denemeleri ve internal tools üzerine çalışmalar.",
          bullets: ["Akıllı otomasyon", "Veri zekası", "Custom dashboard"],
        },
        {
          title: "Otomasyon & İş Akışları",
          desc:
            "Operasyonel iş akışlarını otomatikleştiren yazılımlar ve admin paneller.",
          bullets: ["Workflow automation", "İç araçlar", "Veri entegrasyonları"],
        },
        {
          title: "AR / VR & Interactive",
          desc:
            "Unity XR, ARKit, AR Foundation ve Oculus SDK ile simülasyon, training ve interactive deneyimler.",
          bullets: ["AR ürün gösterim", "VR training", "Interactive simülasyon"],
        },
      ],
    },
    process: {
      label: "03 — Süreç",
      title: "Çalışma şeklim",
      steps: [
        {
          k: "01",
          title: "Keşif",
          desc:
            "Hedefler, kullanıcılar ve teknik kısıtlar konuşulur. Net bir kapsam çıkar.",
        },
        {
          k: "02",
          title: "Tasarım & Mimari",
          desc:
            "Akış, ekran ve veri modeli çıkarılır. Doğru stack ve mimariye karar verilir.",
        },
        {
          k: "03",
          title: "Geliştirme",
          desc:
            "Haftalık demo'larla şeffaf ilerleme. Erken kullanılabilir prototipler.",
        },
        {
          k: "04",
          title: "Yayın & Bakım",
          desc:
            "Üretime alma, izleme ve iterasyon.",
        },
      ],
    },
    projects: {
      label: "04 — Projeler",
      title: "Seçili işler",
      subtitle: "Üzerinde çalıştığım ve teslim ettiğim seçili işler.",
      placeholderLabel: "Yakında",
      featuredLabel: "Öne çıkan",
      viewProject: "Projeyi gör",
      year: "Yıl",
    },
    testimonials: {
      label: "05 — Referanslar",
      title: "Müşteri yorumları",
      items: [
        {
          quote:
            "Game-grade teknik disiplini SaaS projemize taşıdı. Performans, kararlılık ve teslim hızı beklentilerin çok üstündeydi.",
          author: "Müşteri Adı",
          role: "Kurucu — Şirket A",
        },
        {
          quote:
            "Unity'deki yıllarının verdiği problem-çözme refleksi, AI destekli iç araç projemizde fark yarattı.",
          author: "Müşteri Adı",
          role: "CTO — Şirket B",
        },
      ],
    },
    studios: {
      label: "05 — Stüdyolar",
      title: "Birlikte çalıştığım yerler",
      subtitle:
        "Profesyonel game development kariyerim boyunca yer aldığım stüdyolar ve şu an aktif olduğum yer.",
      items: [
        {
          name: "Mimiko Technology",
          period: "Eyl 2024 — Şu an",
          role: "Lead Full-Stack Game Developer · Team Lead",
          location: "London, UK · Remote · Full-time",
          note: "Multi-platform mobil ve PC oyun projelerinde Unity client + .NET backend + DevOps üzerine ekip lideri.",
        },
        {
          name: "Bağımsız Projeler",
          period: "2025 — Şu an",
          role: "Şahıs şirketi · Kişisel ürün geliştirme",
          location: "Türkiye",
          note: "Mesai dışı zamanlarda AI destekli ürün denemeleri, otomasyon araçları ve kişisel SaaS prototipleri.",
        },
        {
          name: "eleman.net",
          period: "Oca 2023 — Eyl 2024",
          role: "Game Developer",
          location: "Ataşehir, İstanbul · On-site · Full-time",
          note: "Meta Life: Your Second Home — App Store ve Google Play'de yayınlanan mobil sosyal yaşam oyunu.",
        },
        {
          name: "Ace Games",
          period: "Eyl 2022 — Kas 2022",
          role: "Game Developer",
          location: "İstanbul · Full-time",
          note: "Hypercasual divizyonu kapatılana kadar Rope on Titan ve Squad League gibi başlıklarda Unity geliştirme.",
        },
        {
          name: "Omnio Games",
          period: "Oca 2022 — Eyl 2022",
          role: "Game Developer",
          location: "Ataşehir, İstanbul · Full-time",
          note: "9 ayda 10+ yayınlanmış mobil başlık: Rope Archer, Knit Up!, Crossing Crowd, Golden Parents, Rope Down!, Diamond Factory! ve dahası.",
        },
        {
          name: "Kaiju Games İstanbul",
          period: "Oca 2021 — Oca 2022",
          role: "Game Developer",
          location: "Ataşehir, İstanbul · Full-time",
          note: "İlk profesyonel game development pozisyonum. Hypercasual ve mid-core mobil oyunlarda Unity geliştirme.",
        },
      ],
    },
    faq: {
      label: "06 — S.S.S",
      title: "Sıkça sorulan sorular",
      items: [
        {
          q: "Bu site iş arıyor olduğunu mu gösteriyor?",
          a: "Hayır. Bu site geçmişte ne yaptığımı ve neye odaklandığımı gösteren bir vitrin. Şu an Mimiko Technology'de Lead Game Developer olarak tam zamanlı çalışıyorum. İlginç bir konuşma, geri bildirim veya soru için yazabilirsin.",
        },
        {
          q: "Sadece oyun geliştirme mi, web/SaaS de yapıyor musun?",
          a: "İkisi de. 6.5 yıl Unity / C# game dev ana uzmanlığım. Mesai dışında AI destekli SaaS, otomasyon ve Flutter tarafında kişisel ürün denemeleri ve prototipler üretiyorum.",
        },
        {
          q: "Hangi platform ve teknolojilerde tecrübeli sin?",
          a: "Unity ana motorum (mobile, Steam, WebGL). Multiplayer için Photon, Mirror, Netcode, Fishnet. AR/VR için ARKit, AR Foundation, Oculus SDK, Unity XR. Web/SaaS tarafında Next.js, Flutter, Firebase, Claude API.",
        },
        {
          q: "NDA / gizlilik sözleşmesi imzalıyor musun?",
          a: "Evet, tüm projelerde gizlilik sözleşmesi standart. Önceki stüdyo projelerinin de pek çoğu NDA altındadır.",
        },
      ],
    },
    cta: {
      title: "Konuşalım mı?",
      subtitle:
        "Geri bildirim, soru veya sadece merhaba demek için kısa bir e-posta yeterli. Genelde 24 saat içinde dönüyorum.",
      button: "E-posta gönder",
    },
    contact: {
      label: "07 — İletişim",
      title: "İletişim",
      lede:
        "Bir soru, geri bildirim veya merhaba demek için ulaşabilirsin. Genelde 24 saat içinde yanıt veriyorum.",
      emailLabel: "E-posta",
      socialLabel: "Sosyal",
      copy: "Kopyala",
      copied: "Kopyalandı",
      vcardLabel: "Telefonuna kaydet (.vcf)",
      icsLabel: "Takvimine ekle (.ics)",
    },
    footer: {
      tagline: "Yazılımı ürüne çeviriyorum.",
      rights: "Tüm hakları saklıdır.",
      built: "Next.js ile yapıldı, Vercel'de barındırılıyor.",
      navTitle: "Bağlantılar",
      socialTitle: "Sosyal",
      contactTitle: "İletişim",
    },
    langSwitch: { tr: "TR", en: "EN" },
    cmdk: {
      placeholder: "Bir komut yaz veya bölüm ara…",
      navigate: "Bölümler",
      contact: "İletişim",
      language: "Dil",
      social: "Sosyal",
      switchTo: "Diline geç:",
      sendEmail: "E-posta gönder",
      copyEmail: "E-postayı kopyala",
      empty: "Eşleşen sonuç yok.",
      hint: "↑↓ gez · ↵ seç · esc kapat",
    },
    uses: {
      title: "Kullandıklarım",
      subtitle:
        "Çalışma masamda olan donanım, yazılım ve günlük rutinime giren araçlar.",
      backHome: "Ana sayfaya dön",
      groups: [
        {
          name: "Donanım",
          items: [
            { k: "Bilgisayar", v: "Geliştirme makinesi (Windows + macOS)" },
            { k: "Test cihazları", v: "iPhone + Android + iPad (build doğrulama)" },
            { k: "Monitör", v: "27\" 4K + ek monitor" },
            { k: "Klavye", v: "Mekanik, tactile switch" },
            { k: "Mouse", v: "Logitech MX Master" },
            { k: "Kulaklık", v: "Gürültü engellemeli (uzun build maraton'ları için)" },
          ],
        },
        {
          name: "Game Dev",
          items: [
            { k: "Engine", v: "Unity (LTS)" },
            { k: "IDE", v: "JetBrains Rider · Visual Studio" },
            { k: "Plugins", v: "DOTween, Cinemachine, Odin Inspector" },
            { k: "Multiplayer", v: "Photon, Mirror, Netcode, Fishnet" },
            { k: "AR / VR", v: "ARKit, AR Foundation, Oculus SDK, Unity XR" },
            { k: "Asset", v: "Aseprite, Blender (light)" },
          ],
        },
        {
          name: "SaaS & Web",
          items: [
            { k: "Editör", v: "VS Code + Cursor + Claude Code" },
            { k: "Stack", v: "Next.js, React, TypeScript, Tailwind, Flutter" },
            { k: "DB", v: "Firebase, Postgres (Neon, Supabase)" },
            { k: "Hosting", v: "Vercel, Cloudflare" },
            { k: "AI", v: "Claude API, Claude Code, OpenAI" },
            { k: "Tarayıcı", v: "Arc, Chrome (DevTools)" },
          ],
        },
        {
          name: "Servisler & Araçlar",
          items: [
            { k: "Versiyonlama", v: "Git, GitHub, Plastic SCM (Unity)" },
            { k: "Tasarım", v: "Figma, Adobe Creative Cloud" },
            { k: "İletişim", v: "Slack, Discord, Telegram" },
            { k: "Analytics", v: "Firebase Analytics, GameAnalytics, Vercel Analytics" },
            { k: "PM", v: "Linear, Notion, Trello" },
          ],
        },
      ],
    },
    now: {
      title: "Şu an",
      subtitle:
        "Bu sayfa derek-sivers tarzı bir 'now' sayfası. Hayatımın bu döneminde nelere odaklandığımı paylaşıyorum.",
      backHome: "Ana sayfaya dön",
      updated: "Son güncelleme",
      sections: [
        {
          h: "Tam zamanlı işim",
          body:
            "Mimiko Technology'de (London, Remote) Lead Full-Stack Game Developer olarak çalışıyorum — Unity / C# + backend + DevOps + ekip lideri. Multi-platform mobil ve PC oyun projelerini yönetiyorum.",
        },
        {
          h: "Kişisel projelerim",
          body:
            "Boş zamanlarımda kendi şahıs şirketim üzerinden AI destekli ürün denemeleri ve otomasyon araçları üzerinde çalışıyorum. Yeni teknolojileri ürün haline getirmek için kişisel prototipler pişiriyorum.",
        },
        {
          h: "Öğrendiğim",
          body:
            "Claude Code'un agent-based geliştirme yetkinliklerini ve oyun motoru içi LLM entegrasyonlarını derinleştiriyorum. AI'ın hem game dev hem ürün geliştirme akışına nasıl en sürdürülebilir biçimde girdiğine dair pratik notlar tutuyorum.",
        },
        {
          h: "Konum",
          body:
            "Türkiye'den remote çalışıyorum. Mimiko UK merkezli — uzun süreli mutluyum.",
        },
      ],
    },
    cv: {
      title: "Özgeçmiş",
      printLabel: "Yazdır / PDF olarak kaydet",
      backHome: "Ana sayfaya dön",
      headline: "Lead Game Developer · SaaS Builder",
      summary:
        "6.5+ yıllık game development deneyimi. Unity / C# ana stack. App Store ve Play Store'da 50+ yayınlanmış oyun. Şu an Mimiko Technology'de (London, Remote) Lead Full-Stack Game Developer + Türkiye'de kendi şahıs şirketim üzerinden AI destekli SaaS ürünleri ve otomasyon yazılımları geliştiriyorum.",
      experienceTitle: "Deneyim",
      experience: [
        {
          year: "Eyl 2024 — Şu an",
          role: "Lead Full-Stack Game Developer · Team Lead",
          company: "Mimiko Technology · London, UK · Remote · Full-time",
          desc:
            "Unity (frontend) + backend + DevOps üzerine ekip lideri. Multi-platform mobil ve PC oyun projelerinde teknik mimariyi yönetiyorum.",
        },
        {
          year: "2025 — Şu an",
          role: "Bağımsız Geliştirici · Şahıs Şirketi",
          company: "Türkiye · Freelance",
          desc:
            "Şirketler için AI destekli SaaS ürünleri, otomasyon araçları ve özel yazılım çözümleri. Claude Code, Next.js, Flutter, Firebase.",
        },
        {
          year: "Oca 2023 — Eyl 2024",
          role: "Game Developer",
          company: "eleman.net · Ataşehir, İstanbul · Full-time",
          desc:
            "Meta Life: Your Second Home — App Store & Google Play yayınlanan mobil sosyal oyun üzerinde Unity / C# geliştirme.",
        },
        {
          year: "Eyl 2022 — Kas 2022",
          role: "Game Developer",
          company: "Ace Games · İstanbul · Full-time",
          desc:
            "Hypercasual divizyonu kapatılana kadar Rope on Titan ve Squad League gibi başlıklarda Unity geliştirme.",
        },
        {
          year: "Oca 2022 — Eyl 2022",
          role: "Game Developer",
          company: "Omnio Games · Ataşehir, İstanbul · Full-time",
          desc:
            "Hypercasual mobile portföyünde 10+ yayınlanmış oyun: Rope Archer, Knit Up!, Crossing Crowd, Golden Parents, Rope Down!, Diamond Factory! ve dahası.",
        },
        {
          year: "Oca 2021 — Oca 2022",
          role: "Game Developer",
          company: "Kaiju Games İstanbul · Ataşehir · Full-time",
          desc:
            "İlk profesyonel game development pozisyonum. Mobil hypercasual & mid-core oyunlar üzerinde Unity geliştirme.",
        },
      ],
      educationTitle: "Eğitim",
      education: [
        {
          year: "2019 — 2023",
          role: "Lisans · Yönetim Bilişim Sistemleri",
          company: "Anadolu Üniversitesi",
          desc: "Bachelor's degree, Management Information Systems.",
        },
        {
          year: "2016 — 2018",
          role: "Önlisans · Bilgisayar Programlama",
          company: "Dokuz Eylül Üniversitesi",
          desc: "Associate's degree, Computer Programming.",
        },
      ],
      certificationsTitle: "Sertifikalar",
      certifications: [
        {
          year: "Oca 2021",
          role: "Mobil Oyun Bootcamp",
          company: "Kodluyoruz",
          desc: "Credential ID 47851801780552",
        },
      ],
      skillsTitle: "Yetkinlikler",
      contactTitle: "İletişim",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      process: "Process",
      projects: "Projects",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      tag: "Portfolio · 2020 — present",
      title: "Utku Bağdaş",
      role: "Lead Game Developer",
      lede:
        "6.5+ years building mobile and PC games with Unity. 50+ titles shipped on App Store and Play Store.",
      sub: "Off-hours, I experiment with AI-powered products and automation tools as personal projects.",
      cta: "View projects",
      ctaSecondary: "Say hi",
      rotatingPrefix: "I work on:",
      rotatingItems: [
        "Mobile games",
        "Steam / PC games",
        "AI-powered products",
        "Automation tools",
        "AR / VR experiences",
      ],
      statusLocation: "Türkiye",
      statusLocaltime: "Local time",
      statusFocus: "Currently",
      statusFocusValue: "Lead Game Dev @ Mimiko Technology",
      scrollHint: "Scroll",
    },
    stats: {
      items: [
        { value: "6+", label: "Years of game dev" },
        { value: "50+", label: "Titles shipped" },
        { value: "5+", label: "Studios & companies" },
        { value: "24h", label: "Reply time" },
      ],
    },
    about: {
      label: "01 — About",
      title: "Lead Game Developer · expanding with AI",
      body:
        "Currently Lead Full-Stack Game Developer at Mimiko Technology (London, Remote), leading the team across Unity (frontend) + backend + DevOps. 6.5+ years in the Unity / C# ecosystem with 50+ titles shipped on App Store, Google Play, Steam and WebGL. Off-hours, I explore AI-powered product ideas and automation tools as personal experiments.",
      principlesTitle: "How I work",
      principles: [
        {
          title: "Business goals first",
          desc: "We talk about outcomes before we pick the technology.",
        },
        {
          title: "Fast delivery, small loops",
          desc: "Visible progress every week, no hidden surprises.",
        },
        {
          title: "Game-grade code quality",
          desc: "I bring the discipline of 60 FPS engines into SaaS products.",
        },
        {
          title: "Transparent communication",
          desc: "Direct messaging, clear docs, fast turnaround.",
        },
      ],
      stackLabel: "Tools I work with",
      stackGroups: [
        {
          name: "Game Engine & Tools",
          items: ["Unity", "C#", ".NET", "DOTween", "Cinemachine", "Odin Inspector"],
        },
        {
          name: "Multiplayer & Network",
          items: ["Photon", "Mirror", "Netcode", "Fishnet"],
        },
        {
          name: "AR / VR",
          items: ["ARKit", "AR Foundation", "Oculus SDK", "Unity XR"],
        },
        {
          name: "Platforms",
          items: ["iOS", "Android", "Steam", "WebGL"],
        },
        {
          name: "SaaS / Web",
          items: ["Next.js", "React", "TypeScript", "Tailwind", "Flutter", "Firebase"],
        },
        {
          name: "AI / Tooling",
          items: ["Claude Code", "Claude API", "OpenAI"],
        },
      ],
    },
    currently: {
      label: "Currently / Now",
      title: "Where I'm at",
      items: [
        {
          k: "Working",
          desc: "Leading the Unity team at Mimiko Technology as Lead Game Dev.",
        },
        {
          k: "Exploring",
          desc: "Off-hours, AI agent architectures, Claude Code workflows and in-engine LLM integrations — on personal prototypes.",
        },
        {
          k: "Location",
          desc: "Working remotely from Türkiye. Mimiko Technology is UK-based.",
        },
      ],
    },
    activity: {
      label: "GitHub activity",
      title: "Recent commits",
      subtitle: "My latest public activity on GitHub.",
      empty: "No public activity to show right now.",
      offline: "GitHub activity is temporarily unavailable.",
      view: "View profile",
    },
    journey: {
      label: "Journey",
      title: "How I got here",
      items: [
        {
          year: "2025",
          title: "Sole proprietorship · AI-powered SaaS",
          desc:
            "Started my own sole proprietorship in Türkiye. Began offering AI-powered SaaS products and automation software to companies — bringing game-dev discipline into product development.",
        },
        {
          year: "2024",
          title: "Lead Full-Stack Game Developer · Mimiko Technology",
          desc:
            "Joined Mimiko Technology (London) as Lead Full-Stack Game Developer. Unity + backend + DevOps + team lead, fully remote.",
        },
        {
          year: "2023",
          title: "Game Developer · eleman.net",
          desc:
            "Full-time Game Developer at eleman.net in Istanbul. Worked on the mobile social game Meta Life: Your Second Home.",
        },
        {
          year: "2022",
          title: "Omnio Games + Ace Games · 10+ titles shipped",
          desc:
            "Game Developer across hypercasual and mid-core mobile studios. Shipped titles include Rope Archer, Knit Up!, Crossing Crowd, Squad League and more.",
        },
        {
          year: "2021",
          title: "Game Developer · Kaiju Games İstanbul",
          desc:
            "Started my professional game-dev career with my first full-time role. Earned the Kodluyoruz Mobile Game Bootcamp certificate the same year.",
        },
        {
          year: "2020",
          title: "Started with Unity",
          desc:
            "While studying Management Information Systems at Anadolu University, focused on Unity / C# game development.",
        },
      ],
    },
    pull: {
      quote:
        "I bring 6 years of 60-FPS game-engine discipline into SaaS products: playable, scalable, sustainable.",
      attribution: "Working philosophy",
    },
    codeshow: {
      label: "Code quality",
      title: "What my code looks like",
      subtitle:
        "Unity / C# helpers I've sharpened across 50+ shipped titles — a window into quality and readability.",
    },
    services: {
      label: "02 — Expertise",
      title: "Areas I work in",
      subtitle:
        "From mobile and PC games to AI-powered products — the disciplines I've spent years deepening.",
      items: [
        {
          title: "Mobile & PC Game Development",
          desc:
            "Unity / C# game development across mobile, Steam and WebGL. 50+ titles shipped.",
          bullets: ["Hypercasual & mid-core", "Multiplayer (Photon/Mirror)", "Live ops & analytics"],
        },
        {
          title: "AI-powered Products",
          desc:
            "Experiments with Claude and other LLMs — product prototypes, internal tools and workflow agents.",
          bullets: ["Smart automation", "Data intelligence", "Custom dashboards"],
        },
        {
          title: "Automation & Workflows",
          desc:
            "Software and admin panels that automate operational workflows.",
          bullets: ["Workflow automation", "Internal tools", "Data integrations"],
        },
        {
          title: "AR / VR & Interactive",
          desc:
            "Simulation, training and interactive experiences with Unity XR, ARKit, AR Foundation and Oculus SDK.",
          bullets: ["AR product showcase", "VR training", "Interactive simulation"],
        },
      ],
    },
    process: {
      label: "03 — Process",
      title: "How I work",
      steps: [
        {
          k: "01",
          title: "Discovery",
          desc:
            "Align on goals, users and technical constraints. Define a clear scope.",
        },
        {
          k: "02",
          title: "Design & Architecture",
          desc: "Flows, screens and data model. Pick the right stack.",
        },
        {
          k: "03",
          title: "Build",
          desc: "Weekly demos and transparent progress. Early usable prototypes.",
        },
        {
          k: "04",
          title: "Ship & Iterate",
          desc:
            "Production rollout, monitoring and iteration.",
        },
      ],
    },
    projects: {
      label: "04 — Projects",
      title: "Selected work",
      subtitle: "Selected work I've shipped and worked on.",
      placeholderLabel: "Coming soon",
      featuredLabel: "Featured",
      viewProject: "View project",
      year: "Year",
    },
    testimonials: {
      label: "05 — Testimonials",
      title: "What clients say",
      items: [
        {
          quote:
            "He brought game-grade technical discipline to our SaaS project. Performance, stability and delivery speed were well above expectations.",
          author: "Client Name",
          role: "Founder — Company A",
        },
        {
          quote:
            "The problem-solving reflexes from years of Unity made a real difference in our AI-powered internal tool.",
          author: "Client Name",
          role: "CTO — Company B",
        },
      ],
    },
    studios: {
      label: "05 — Studios",
      title: "Where I've worked",
      subtitle:
        "Studios I've been part of through my professional game-dev career, and where I'm based today.",
      items: [
        {
          name: "Mimiko Technology",
          period: "Sep 2024 — Present",
          role: "Lead Full-Stack Game Developer · Team Lead",
          location: "London, UK · Remote · Full-time",
          note: "Team lead across Unity client + .NET backend + DevOps for multi-platform mobile and PC game projects.",
        },
        {
          name: "Independent Projects",
          period: "2025 — Present",
          role: "Sole proprietorship · Personal product work",
          location: "Türkiye",
          note: "Off-hours experiments with AI-powered products, automation tools and personal SaaS prototypes.",
        },
        {
          name: "eleman.net",
          period: "Jan 2023 — Sep 2024",
          role: "Game Developer",
          location: "Ataşehir, Istanbul · On-site · Full-time",
          note: "Meta Life: Your Second Home — a mobile social-life game published on App Store and Google Play.",
        },
        {
          name: "Ace Games",
          period: "Sep 2022 — Nov 2022",
          role: "Game Developer",
          location: "Istanbul · Full-time",
          note: "Unity development on titles like Rope on Titan and Squad League before the hypercasual division was closed.",
        },
        {
          name: "Omnio Games",
          period: "Jan 2022 — Sep 2022",
          role: "Game Developer",
          location: "Ataşehir, Istanbul · Full-time",
          note: "10+ shipped mobile titles in 9 months: Rope Archer, Knit Up!, Crossing Crowd, Golden Parents, Rope Down!, Diamond Factory! and more.",
        },
        {
          name: "Kaiju Games İstanbul",
          period: "Jan 2021 — Jan 2022",
          role: "Game Developer",
          location: "Ataşehir, Istanbul · Full-time",
          note: "First professional game-dev role. Unity development on hypercasual and mid-core mobile games.",
        },
      ],
    },
    faq: {
      label: "06 — FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "Does this site mean you're looking for work?",
          a: "No. This site is a showcase of what I've built and what I focus on. I'm currently Lead Game Developer at Mimiko Technology, full-time and happy. Feel free to reach out for an interesting conversation, question or feedback.",
        },
        {
          q: "Just game dev, or also web/SaaS?",
          a: "Both. 6.5 years of Unity / C# game dev as my core. Off-hours, I experiment with AI-powered SaaS, automation and Flutter as personal product prototypes.",
        },
        {
          q: "Which platforms and tech do you have experience with?",
          a: "Unity is my main engine (mobile, Steam, WebGL). Multiplayer via Photon, Mirror, Netcode, Fishnet. AR/VR with ARKit, AR Foundation, Oculus SDK, Unity XR. On the web/SaaS side: Next.js, Flutter, Firebase, Claude API.",
        },
        {
          q: "Do you sign NDAs?",
          a: "Yes — NDAs are standard for every project. Most of my prior studio work is also under NDA.",
        },
      ],
    },
    cta: {
      title: "Want to chat?",
      subtitle:
        "Feedback, a question or just a hello — a short email is enough. I usually reply within 24 hours.",
      button: "Send an email",
    },
    contact: {
      label: "07 — Contact",
      title: "Contact",
      lede:
        "Reach out for a question, some feedback or just to say hi. I usually reply within 24 hours.",
      emailLabel: "Email",
      socialLabel: "Social",
      copy: "Copy",
      copied: "Copied",
      vcardLabel: "Save to phone (.vcf)",
      icsLabel: "Add to calendar (.ics)",
    },
    footer: {
      tagline: "I turn software into products.",
      rights: "All rights reserved.",
      built: "Built with Next.js, hosted on Vercel.",
      navTitle: "Links",
      socialTitle: "Social",
      contactTitle: "Contact",
    },
    langSwitch: { tr: "TR", en: "EN" },
    cmdk: {
      placeholder: "Type a command or search a section…",
      navigate: "Sections",
      contact: "Contact",
      language: "Language",
      social: "Social",
      switchTo: "Switch to",
      sendEmail: "Send an email",
      copyEmail: "Copy email",
      empty: "No matching results.",
      hint: "↑↓ navigate · ↵ select · esc close",
    },
    uses: {
      title: "Uses",
      subtitle:
        "Hardware, software and tools I rely on daily.",
      backHome: "Back home",
      groups: [
        {
          name: "Hardware",
          items: [
            { k: "Computer", v: "Dev workstation (Windows + macOS)" },
            { k: "Test devices", v: "iPhone + Android + iPad (build verification)" },
            { k: "Monitor", v: "27\" 4K + secondary display" },
            { k: "Keyboard", v: "Mechanical, tactile switches" },
            { k: "Mouse", v: "Logitech MX Master" },
            { k: "Headphones", v: "Noise-cancelling (long build sessions)" },
          ],
        },
        {
          name: "Game Dev",
          items: [
            { k: "Engine", v: "Unity (LTS)" },
            { k: "IDE", v: "JetBrains Rider · Visual Studio" },
            { k: "Plugins", v: "DOTween, Cinemachine, Odin Inspector" },
            { k: "Multiplayer", v: "Photon, Mirror, Netcode, Fishnet" },
            { k: "AR / VR", v: "ARKit, AR Foundation, Oculus SDK, Unity XR" },
            { k: "Asset", v: "Aseprite, Blender (light)" },
          ],
        },
        {
          name: "SaaS & Web",
          items: [
            { k: "Editor", v: "VS Code + Cursor + Claude Code" },
            { k: "Stack", v: "Next.js, React, TypeScript, Tailwind, Flutter" },
            { k: "DB", v: "Firebase, Postgres (Neon, Supabase)" },
            { k: "Hosting", v: "Vercel, Cloudflare" },
            { k: "AI", v: "Claude API, Claude Code, OpenAI" },
            { k: "Browser", v: "Arc, Chrome (DevTools)" },
          ],
        },
        {
          name: "Services & Tools",
          items: [
            { k: "Versioning", v: "Git, GitHub, Plastic SCM (Unity)" },
            { k: "Design", v: "Figma, Adobe Creative Cloud" },
            { k: "Comms", v: "Slack, Discord, Telegram" },
            { k: "Analytics", v: "Firebase, GameAnalytics, Vercel Analytics" },
            { k: "PM", v: "Linear, Notion, Trello" },
          ],
        },
      ],
    },
    now: {
      title: "Now",
      subtitle:
        "A derek-sivers style /now page. What I'm focused on at this period of life.",
      backHome: "Back home",
      updated: "Last updated",
      sections: [
        {
          h: "Full-time",
          body:
            "Lead Full-Stack Game Developer at Mimiko Technology (London, Remote) — Unity / C# + backend + DevOps + team lead. Driving multi-platform mobile and PC game projects.",
        },
        {
          h: "Personal projects",
          body:
            "Off-hours, through my sole proprietorship, I experiment with AI-powered product ideas and automation tools. Cooking personal prototypes to turn new tech into shippable products.",
        },
        {
          h: "Learning",
          body:
            "Going deeper into Claude Code agent-based workflows and in-engine LLM integrations for games. Keeping practical notes on how AI plugs into both game-dev and product cycles sustainably.",
        },
        {
          h: "Location",
          body:
            "Working remotely from Türkiye. Mimiko is UK-based — happy here long-term.",
        },
      ],
    },
    cv: {
      title: "Curriculum Vitae",
      printLabel: "Print / Save as PDF",
      backHome: "Back home",
      headline: "Lead Game Developer · SaaS Builder",
      summary:
        "6.5+ years of game development experience. Unity / C# core stack. 50+ titles shipped on App Store and Google Play. Currently Lead Full-Stack Game Developer at Mimiko Technology (London, Remote) and running a sole proprietorship in Türkiye delivering AI-powered SaaS products and automation software.",
      experienceTitle: "Experience",
      experience: [
        {
          year: "Sep 2024 — Present",
          role: "Lead Full-Stack Game Developer · Team Lead",
          company: "Mimiko Technology · London, UK · Remote · Full-time",
          desc:
            "Team lead across Unity (frontend) + backend + DevOps. Owning the technical architecture of multi-platform mobile and PC game projects.",
        },
        {
          year: "2025 — Present",
          role: "Independent Developer · Sole Proprietorship",
          company: "Türkiye · Freelance",
          desc:
            "AI-powered SaaS products, automation tools and custom software for companies. Claude Code, Next.js, Flutter, Firebase.",
        },
        {
          year: "Jan 2023 — Sep 2024",
          role: "Game Developer",
          company: "eleman.net · Ataşehir, Istanbul · Full-time",
          desc:
            "Unity / C# development on Meta Life: Your Second Home — a mobile social game published on App Store and Google Play.",
        },
        {
          year: "Sep 2022 — Nov 2022",
          role: "Game Developer",
          company: "Ace Games · Istanbul · Full-time",
          desc:
            "Unity development on titles like Rope on Titan and Squad League before the hypercasual division was closed.",
        },
        {
          year: "Jan 2022 — Sep 2022",
          role: "Game Developer",
          company: "Omnio Games · Ataşehir, Istanbul · Full-time",
          desc:
            "10+ shipped titles in the hypercasual mobile portfolio: Rope Archer, Knit Up!, Crossing Crowd, Golden Parents, Rope Down!, Diamond Factory! and more.",
        },
        {
          year: "Jan 2021 — Jan 2022",
          role: "Game Developer",
          company: "Kaiju Games İstanbul · Ataşehir · Full-time",
          desc:
            "First professional game-dev role. Unity development on hypercasual & mid-core mobile games.",
        },
      ],
      educationTitle: "Education",
      education: [
        {
          year: "2019 — 2023",
          role: "Bachelor's · Management Information Systems",
          company: "Anadolu University",
          desc: "General degree.",
        },
        {
          year: "2016 — 2018",
          role: "Associate's · Computer Programming",
          company: "Dokuz Eylül University",
          desc: "",
        },
      ],
      certificationsTitle: "Certifications",
      certifications: [
        {
          year: "Jan 2021",
          role: "Mobile Game Bootcamp",
          company: "Kodluyoruz",
          desc: "Credential ID 47851801780552",
        },
      ],
      skillsTitle: "Skills",
      contactTitle: "Contact",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
