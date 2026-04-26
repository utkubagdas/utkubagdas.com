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
      tag: "Müsait — yeni projelere açık",
      title: "Utku Bağdaş",
      role: "Full-stack Developer",
      lede:
        "Şirketler için ölçeklenebilir web uygulamaları ve özel yazılım çözümleri tasarlıyor, geliştiriyorum.",
      sub: "Modern stack, hızlı teslim, sürdürülebilir kod.",
      cta: "Projeleri gör",
      ctaSecondary: "İletişime geç",
      rotatingPrefix: "Geliştiriyorum:",
      rotatingItems: [
        "Web uygulamaları",
        "Mobil ürünler",
        "AI entegrasyonları",
        "Kurumsal SaaS",
        "Oyun / 3D arayüz",
      ],
      statusLocation: "Türkiye",
      statusLocaltime: "Yerel Saat",
      statusFocus: "Şu an üzerinde çalıştığım",
      statusFocusValue: "Claude Code ile özel ürünler",
      scrollHint: "Aşağı kaydır",
    },
    stats: {
      items: [
        { value: "5+", label: "Yıllık deneyim" },
        { value: "20+", label: "Tamamlanan proje" },
        { value: "10+", label: "Mutlu müşteri" },
        { value: "24s", label: "Ortalama yanıt süresi" },
      ],
    },
    about: {
      label: "01 — Hakkımda",
      title: "Şirketlere uçtan uca yazılım çözümleri",
      body:
        "Şahıs şirketim üzerinden firmalara özel yazılım çözümleri sunuyorum. İhtiyacınızı analiz edip en uygun mimariyi kuruyor, uçtan uca tek elden yönetiyorum: tasarım, geliştirme, dağıtım ve sürdürme.",
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
          title: "Sürdürülebilir kod",
          desc: "Ekipsiz devralınabilen, okunabilir, test edilebilir teslimat.",
        },
        {
          title: "Şeffaf iletişim",
          desc: "Direkt mesajlaşma, net dokümantasyon, hızlı dönüş.",
        },
      ],
      stackLabel: "Çalıştığım araçlar",
      stackGroups: [
        {
          name: "Frontend & Mobil",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter"],
        },
        {
          name: "Backend",
          items: ["Node.js", ".NET", "C#", "Postgres", "Prisma"],
        },
        {
          name: "Oyun & 3D",
          items: ["Unity", "C#"],
        },
        {
          name: "AI / Tooling",
          items: ["Claude Code", "Claude API", "OpenAI"],
        },
        {
          name: "Altyapı",
          items: ["Vercel", "Firebase", "Cloudflare", "GitHub Actions"],
        },
      ],
    },
    currently: {
      label: "Şu an / Now",
      title: "Hayatın bu döneminde",
      items: [
        {
          k: "Geliştiriyorum",
          desc: "Claude Code ile şahıs şirketim için ürünler ve B2B müşterilerime özel yazılım çözümleri.",
        },
        {
          k: "Okuyorum",
          desc: "Working in Public — Nadia Eghbal. İnternet üretkenliği üzerine.",
        },
        {
          k: "Dinliyorum",
          desc: "Lo-fi ve ambient elektronik. Odaklanma için Brian Eno karışımları.",
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
          year: "2026",
          title: "Şahıs şirketi & freelance",
          desc:
            "Türkiye merkezli kendi şirketim üzerinden firmalara özel yazılım çözümleri sunmaya başladım.",
        },
        {
          year: "2024",
          title: "AI-first ürün geliştirme",
          desc: "Claude Code ile çok daha hızlı ve sürdürülebilir kod üretmeye odaklandım.",
        },
        {
          year: "2022",
          title: "Full-stack geçiş",
          desc:
            "React + Node.js ekosisteminde tam yığın geliştirici olarak ürünleştirme deneyimi.",
        },
        {
          year: "2020",
          title: "Yazılıma giriş",
          desc:
            "Web teknolojileriyle ilk projelerimi yapmaya başladım; HTML / CSS / JavaScript temelleri.",
        },
      ],
    },
    pull: {
      quote:
        "Yazılımı, gerçek ürünlere — şirketinize değer katan, ölçeklenebilir ve sürdürülebilir çözümlere — çeviriyorum.",
      attribution: "Çalışma felsefesi",
    },
    services: {
      label: "02 — Hizmetler",
      title: "Sunduğum hizmetler",
      subtitle:
        "İhtiyacınıza göre paketlenmiş çözümler — küçük bir kurumsal siteden tam ürünleştirilmiş SaaS'a kadar.",
      items: [
        {
          title: "Web Uygulaması Geliştirme",
          desc:
            "Next.js, React ve modern backend teknolojileriyle ölçeklenebilir SaaS ve iç araçlar.",
          bullets: ["Auth & roller", "Ödeme entegrasyonu", "Admin panelleri"],
        },
        {
          title: "Kurumsal Web Sitesi",
          desc: "SEO odaklı, hızlı ve yönetilebilir kurumsal siteler.",
          bullets: ["İçerik yönetimi (CMS)", "Çok dilli destek", "Analitik"],
        },
        {
          title: "AI Entegrasyonları",
          desc: "Claude ve diğer LLM'lerle iş akışlarınıza yapay zekâ entegrasyonu.",
          bullets: ["Otomatik raporlama", "Akıllı asistanlar", "Veriden içgörü"],
        },
        {
          title: "Bakım & Destek",
          desc: "Mevcut ürünleriniz için sürekli geliştirme, bakım ve teknik destek.",
          bullets: ["Aylık paketler", "Hata düzeltme", "Performans iyileştirme"],
        },
      ],
    },
    process: {
      label: "03 — Süreç",
      title: "Birlikte nasıl çalışırız",
      steps: [
        {
          k: "01",
          title: "Keşif",
          desc:
            "Kısa bir görüşmeyle hedefleri, kullanıcıları ve teknik kısıtları konuşuruz. Net bir kapsam çıkarırız.",
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
            "Üretime alma, izleme, ihtiyaca göre aylık bakım ve geliştirme paketleri.",
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
            "Sürecin başından sonuna kadar şeffaf ve hızlıydı. Tam istediğimiz ürünü teslim aldık.",
          author: "Müşteri Adı",
          role: "Kurucu — Şirket A",
        },
        {
          quote:
            "Karmaşık bir entegrasyonu temiz ve sürdürülebilir biçimde çözdü. Tavsiye ediyoruz.",
          author: "Müşteri Adı",
          role: "CTO — Şirket B",
        },
      ],
    },
    faq: {
      label: "06 — S.S.S",
      title: "Sıkça sorulan sorular",
      items: [
        {
          q: "Bir projenin teslim süresi ne kadar?",
          a: "Kapsama göre değişir. Tipik kurumsal site 2–3 hafta, orta ölçekli web uygulaması 6–12 hafta arasında tamamlanır. Keşif görüşmesinden sonra net bir takvim paylaşırım.",
        },
        {
          q: "Faturalandırma nasıl çalışıyor?",
          a: "Şahıs şirketim üzerinden Türkiye ve yurt dışına resmi fatura kesiyorum. Sabit fiyat veya saatlik anlaşma seçeneklerinden ihtiyacınıza uygun olanı belirliyoruz.",
        },
        {
          q: "Mevcut ekibimle çalışabilir misin?",
          a: "Evet. Mevcut ekibinizin bir parçası gibi çalışabilir, kod incelemelerine ve standartlarınıza uyum sağlayabilirim.",
        },
        {
          q: "Yayın sonrası destek veriyor musun?",
          a: "Evet. Aylık bakım paketleri sunuyorum: hata düzeltme, küçük geliştirmeler, izleme ve performans iyileştirme dahil.",
        },
        {
          q: "NDA / gizlilik sözleşmesi imzalıyor musun?",
          a: "Evet, tüm projelerde gizlilik sözleşmesi imzalıyorum.",
        },
      ],
    },
    cta: {
      title: "Aklında bir proje mi var?",
      subtitle:
        "Konuşmaya başlamak için kısa bir e-posta yeterli. Genelde 24 saat içinde dönüyorum.",
      button: "E-posta gönder",
    },
    contact: {
      label: "07 — İletişim",
      title: "İletişim",
      lede:
        "Yeni bir proje, bir soru ya da iş birliği için bana ulaşın. Genelde 24 saat içinde yanıt veriyorum.",
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
            { k: "Bilgisayar", v: "MacBook Pro / Windows masaüstü" },
            { k: "Monitör", v: "27\" 4K, ergonomik kol üzerinde" },
            { k: "Klavye", v: "Mekanik, tactile switch" },
            { k: "Mouse", v: "Logitech MX Master" },
            { k: "Kulaklık", v: "Sony WH-1000XM5 (gürültü engelleme)" },
            { k: "Mikrofon", v: "Shure MV7 (toplantı / kayıt)" },
          ],
        },
        {
          name: "Editör & Geliştirme",
          items: [
            { k: "Editör", v: "VS Code + Cursor" },
            { k: "AI Eşi", v: "Claude Code (terminal)" },
            { k: "Terminal", v: "Warp" },
            { k: "Tarayıcı", v: "Arc, Chrome (DevTools)" },
            { k: "Tema", v: "Karanlık, accent yeşil" },
            { k: "Font", v: "Geist Mono, JetBrains Mono" },
          ],
        },
        {
          name: "Araçlar & Servisler",
          items: [
            { k: "Versiyonlama", v: "Git, GitHub" },
            { k: "Hosting", v: "Vercel, Cloudflare" },
            { k: "DB", v: "Postgres (Neon, Supabase)" },
            { k: "Analitik", v: "Vercel Analytics, Plausible" },
            { k: "İletişim", v: "Linear, Slack, Telegram" },
            { k: "Tasarım", v: "Figma, FigJam" },
          ],
        },
        {
          name: "Tarayıcı eklentileri",
          items: [
            { k: "1Password", v: "Şifre yöneticisi" },
            { k: "React DevTools", v: "Component inceleme" },
            { k: "Wappalyzer", v: "Site stack tespiti" },
            { k: "JSON Viewer", v: "API yanıtlarını biçimleme" },
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
          h: "Üzerinde çalıştığım",
          body:
            "Şahıs şirketim üzerinden firmalara özel yazılım çözümleri geliştiriyorum. Çoğunlukla Next.js + TypeScript ekseninde, son dönemde mobil için Flutter ve oyun tarafında Unity ile de projeler üretiyorum.",
        },
        {
          h: "Öğrendiğim",
          body:
            "Claude Code'un agent-based geliştirme yetkinliklerini derinleştiriyorum. AI'ın günlük geliştirme akışına nasıl en sürdürülebilir biçimde girdiğine dair pratik notlar tutuyorum.",
        },
        {
          h: "Okuduğum",
          body:
            "Working in Public — Nadia Eghbal. İnternet üreticilerinin ekonomisi üzerine. Yan masada Kent Beck'in TDD klasiği duruyor.",
        },
        {
          h: "Dinlediğim",
          body:
            "Lo-fi, Brian Eno ambient ve odaklanma için Helios karışımları. Kahve molalarında Türkçe podcast: 'Hidden Things'.",
        },
        {
          h: "Konum",
          body: "Türkiye, Istanbul. Uzaktan çalışıyor, gerektiğinde gidip görüşüyorum.",
        },
      ],
    },
    cv: {
      title: "Özgeçmiş",
      printLabel: "Yazdır / PDF olarak kaydet",
      backHome: "Ana sayfaya dön",
      headline: "Full-stack Developer",
      summary:
        "5+ yıllık deneyime sahip, end-to-end ürün geliştirme odaklı bir full-stack developer. Next.js, React, TypeScript ekosisteminde uzmanlaşmış; .NET, Flutter ve Unity ile çapraz alanlarda da üretim deneyimi var.",
      experienceTitle: "Deneyim",
      experience: [
        {
          year: "2026 — şu an",
          role: "Bağımsız Yazılım Geliştirici",
          company: "Şahıs Şirketi · Türkiye",
          desc:
            "Türkiye ve yurt dışından firmalara özel yazılım çözümleri sunuyorum. Web uygulamaları, AI entegrasyonları ve mobil ürünler.",
        },
        {
          year: "2022 — 2026",
          role: "Full-stack Developer",
          company: "Çeşitli projeler",
          desc:
            "React + Node.js stack ile SaaS ürünleri ve iç araçlar geliştirdim.",
        },
      ],
      educationTitle: "Eğitim",
      education: [
        {
          year: "—",
          role: "Bilgisayar Mühendisliği",
          company: "Üniversite",
          desc: "Lisans eğitimi.",
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
      tag: "Available — open to new projects",
      title: "Utku Bağdaş",
      role: "Full-stack Developer",
      lede:
        "I design and build scalable web applications and custom software for companies.",
      sub: "Modern stack, fast delivery, maintainable code.",
      cta: "View projects",
      ctaSecondary: "Get in touch",
      rotatingPrefix: "I build:",
      rotatingItems: [
        "Web applications",
        "Mobile products",
        "AI integrations",
        "Enterprise SaaS",
        "Game / 3D interfaces",
      ],
      statusLocation: "Türkiye",
      statusLocaltime: "Local time",
      statusFocus: "Currently building",
      statusFocusValue: "Custom products with Claude Code",
      scrollHint: "Scroll",
    },
    stats: {
      items: [
        { value: "5+", label: "Years of experience" },
        { value: "20+", label: "Projects shipped" },
        { value: "10+", label: "Happy clients" },
        { value: "24h", label: "Average reply time" },
      ],
    },
    about: {
      label: "01 — About",
      title: "End-to-end software for companies",
      body:
        "Through my sole proprietorship I deliver custom software to companies. I analyze your needs, choose the right architecture and own the full process: design, build, deploy and maintain.",
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
          title: "Sustainable code",
          desc: "Readable, testable code that anyone on your team can take over.",
        },
        {
          title: "Transparent communication",
          desc: "Direct messaging, clear docs, fast turnaround.",
        },
      ],
      stackLabel: "Tools I work with",
      stackGroups: [
        {
          name: "Frontend & Mobile",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter"],
        },
        {
          name: "Backend",
          items: ["Node.js", ".NET", "C#", "Postgres", "Prisma"],
        },
        {
          name: "Game & 3D",
          items: ["Unity", "C#"],
        },
        {
          name: "AI / Tooling",
          items: ["Claude Code", "Claude API", "OpenAI"],
        },
        {
          name: "Infrastructure",
          items: ["Vercel", "Firebase", "Cloudflare", "GitHub Actions"],
        },
      ],
    },
    currently: {
      label: "Currently / Now",
      title: "Where I'm at",
      items: [
        {
          k: "Building",
          desc: "Products for my own venture and custom software for B2B clients — all with Claude Code.",
        },
        {
          k: "Reading",
          desc: "Working in Public — Nadia Eghbal. On the makers of the internet.",
        },
        {
          k: "Listening",
          desc: "Lo-fi and ambient electronic. Brian Eno mixes for focus sessions.",
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
          year: "2026",
          title: "Sole proprietorship & freelance",
          desc:
            "Started serving companies through my own Türkiye-based business with custom software solutions.",
        },
        {
          year: "2024",
          title: "AI-first product development",
          desc:
            "Doubled down on shipping faster, more sustainable code with Claude Code.",
        },
        {
          year: "2022",
          title: "Full-stack transition",
          desc:
            "Productizing experience as a full-stack developer in the React + Node.js ecosystem.",
        },
        {
          year: "2020",
          title: "Started in software",
          desc:
            "Shipped my first projects with web fundamentals — HTML / CSS / JavaScript.",
        },
      ],
    },
    pull: {
      quote:
        "I turn software into real products — scalable, sustainable solutions that move your company forward.",
      attribution: "Working philosophy",
    },
    services: {
      label: "02 — Services",
      title: "What I offer",
      subtitle:
        "Packaged solutions for your needs — from a small corporate site to a fully productized SaaS.",
      items: [
        {
          title: "Web Application Development",
          desc: "Scalable SaaS and internal tools with Next.js, React and modern backend.",
          bullets: ["Auth & roles", "Payments", "Admin dashboards"],
        },
        {
          title: "Corporate Websites",
          desc: "SEO-friendly, fast and easy-to-manage company sites.",
          bullets: ["CMS", "Multi-language", "Analytics"],
        },
        {
          title: "AI Integrations",
          desc: "Bring Claude and other LLMs into your workflows.",
          bullets: ["Auto-reporting", "Smart assistants", "Insights from data"],
        },
        {
          title: "Maintenance & Support",
          desc: "Continuous improvement, maintenance and technical support for existing products.",
          bullets: ["Monthly retainers", "Bug fixes", "Performance work"],
        },
      ],
    },
    process: {
      label: "03 — Process",
      title: "How we work together",
      steps: [
        {
          k: "01",
          title: "Discovery",
          desc:
            "A short call to align on goals, users and technical constraints. We define a clear scope.",
        },
        {
          k: "02",
          title: "Design & Architecture",
          desc: "Flows, screens and the data model. We pick the right stack.",
        },
        {
          k: "03",
          title: "Build",
          desc: "Weekly demos and transparent progress. Early usable prototypes.",
        },
        {
          k: "04",
          title: "Ship & Maintain",
          desc:
            "Production rollout, monitoring and optional monthly maintenance packages.",
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
            "Transparent and fast from start to finish. We received exactly the product we wanted.",
          author: "Client Name",
          role: "Founder — Company A",
        },
        {
          quote:
            "Solved a complex integration in a clean, sustainable way. Highly recommended.",
          author: "Client Name",
          role: "CTO — Company B",
        },
      ],
    },
    faq: {
      label: "06 — FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "How long does a project take?",
          a: "It depends on scope. A typical corporate site lands in 2–3 weeks; a mid-sized web app in 6–12 weeks. After the discovery call I share a clear timeline.",
        },
        {
          q: "How does billing work?",
          a: "I issue official invoices through my sole proprietorship for both Türkiye and international clients. We pick fixed-price or hourly depending on your needs.",
        },
        {
          q: "Can you work with my existing team?",
          a: "Yes. I can plug into your team, follow your code-review and engineering standards.",
        },
        {
          q: "Do you offer post-launch support?",
          a: "Yes. Monthly retainers covering bug fixes, small improvements, monitoring and performance work.",
        },
        {
          q: "Do you sign NDAs?",
          a: "Yes, NDAs are standard for every project.",
        },
      ],
    },
    cta: {
      title: "Got a project in mind?",
      subtitle:
        "A short email is enough to start the conversation. I usually reply within 24 hours.",
      button: "Send an email",
    },
    contact: {
      label: "07 — Contact",
      title: "Contact",
      lede:
        "Reach out for a new project, a question or a collaboration. I usually reply within 24 hours.",
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
            { k: "Computer", v: "MacBook Pro / Windows desktop" },
            { k: "Monitor", v: "27\" 4K on an ergonomic arm" },
            { k: "Keyboard", v: "Mechanical, tactile switches" },
            { k: "Mouse", v: "Logitech MX Master" },
            { k: "Headphones", v: "Sony WH-1000XM5 (noise-cancelling)" },
            { k: "Microphone", v: "Shure MV7 (calls / recording)" },
          ],
        },
        {
          name: "Editor & Dev",
          items: [
            { k: "Editor", v: "VS Code + Cursor" },
            { k: "AI Pair", v: "Claude Code (terminal)" },
            { k: "Terminal", v: "Warp" },
            { k: "Browser", v: "Arc, Chrome (DevTools)" },
            { k: "Theme", v: "Dark, accent green" },
            { k: "Font", v: "Geist Mono, JetBrains Mono" },
          ],
        },
        {
          name: "Tools & Services",
          items: [
            { k: "Versioning", v: "Git, GitHub" },
            { k: "Hosting", v: "Vercel, Cloudflare" },
            { k: "DB", v: "Postgres (Neon, Supabase)" },
            { k: "Analytics", v: "Vercel Analytics, Plausible" },
            { k: "Comms", v: "Linear, Slack, Telegram" },
            { k: "Design", v: "Figma, FigJam" },
          ],
        },
        {
          name: "Browser extensions",
          items: [
            { k: "1Password", v: "Password manager" },
            { k: "React DevTools", v: "Component inspection" },
            { k: "Wappalyzer", v: "Detect site stack" },
            { k: "JSON Viewer", v: "Format API responses" },
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
          h: "Working on",
          body:
            "Building custom software for companies through my sole proprietorship. Mostly Next.js + TypeScript, with cross-platform Flutter and Unity work picking up.",
        },
        {
          h: "Learning",
          body:
            "Going deeper into Claude Code's agent-based dev workflows. Keeping practical notes on how AI plugs into a sustainable everyday cycle.",
        },
        {
          h: "Reading",
          body:
            "Working in Public — Nadia Eghbal. On the economics of internet creators. Kent Beck's TDD classic on the side desk.",
        },
        {
          h: "Listening",
          body:
            "Lo-fi, Brian Eno ambient and Helios mixes for focus. Coffee breaks: Hidden Things podcast.",
        },
        {
          h: "Location",
          body: "Türkiye, Istanbul. Working remotely, traveling on demand.",
        },
      ],
    },
    cv: {
      title: "Curriculum Vitae",
      printLabel: "Print / Save as PDF",
      backHome: "Back home",
      headline: "Full-stack Developer",
      summary:
        "End-to-end product-focused full-stack developer with 5+ years of experience. Specialized in Next.js, React and TypeScript; with cross-domain shipping experience in .NET, Flutter and Unity.",
      experienceTitle: "Experience",
      experience: [
        {
          year: "2026 — present",
          role: "Independent Software Developer",
          company: "Sole Proprietorship · Türkiye",
          desc:
            "Custom software solutions for companies in Türkiye and abroad. Web applications, AI integrations and mobile products.",
        },
        {
          year: "2022 — 2026",
          role: "Full-stack Developer",
          company: "Various projects",
          desc:
            "Shipped SaaS products and internal tools with the React + Node.js stack.",
        },
      ],
      educationTitle: "Education",
      education: [
        {
          year: "—",
          role: "Computer Engineering",
          company: "University",
          desc: "Bachelor's degree.",
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
