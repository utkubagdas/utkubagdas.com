<div align="center">

# utkubagdas.com

**Personal site of [Utku Bağdaş](https://utkubagdas.com) — full-stack developer building scalable web applications and custom software for companies.**

Bilingual (TR / EN) · Dark-first editorial design · B2B-friendly

[Live site](https://utkubagdas.com) · [TR](https://utkubagdas.com/tr) · [EN](https://utkubagdas.com/en) · [/uses](https://utkubagdas.com/tr/uses) · [/now](https://utkubagdas.com/tr/now) · [/cv](https://utkubagdas.com/tr/cv)

</div>

---

## Why this exists

A personal storefront aimed at companies looking to commission custom software. The site has to do three jobs at once:

1. **Communicate the work** clearly enough for non-technical decision-makers (services, process, FAQ, contact)
2. **Earn trust with developers** — clients often forward the URL to their CTO; the code, performance and craft details have to hold up
3. **Stay maintainable solo** — content lives in typed dictionaries; no CMS, no database, no moving parts

## Highlights

- **Bilingual at the route level** — `/tr` and `/en` are statically generated, with full hreflang alternates and per-locale OG cards
- **Editorial typography** — Inter for body, [Fraunces](https://fonts.google.com/specimen/Fraunces) variable serif italic for displays, opsz/SOFT axes tuned per heading
- **Crafted interactions** — magnetic CTAs, mouse-tracked hero spotlight, custom cursor, 3D-tilt cards, scroll-spy nav, scroll progress bar, intersection-observer scroll reveals, animated stat counters, hover-following "view project" bubble
- **Power-user UX** — `⌘K` / `Ctrl+K` command palette (cmdk) with section jumps, language switch, mailto and copy-email
- **Mobile-first details** — full-screen drawer, body-scroll lock, tap-friendly targets, no hover-trap cursors on touch
- **Top-level pages** — `/uses`, `/now` (derek-sivers style) and a print-friendly `/cv`
- **SEO done properly** — sitemap, robots, JSON-LD (Person, WebSite, FAQPage, ProfessionalService), per-locale Open Graph, canonical + hreflang
- **A11y & motion-aware** — `prefers-reduced-motion` disables animations site-wide, semantic landmarks, `Esc` closes modals, focusable nav
- **Live data** — homepage GitHub-activity widget pulls recent public commits server-side with 30-min revalidation
- **Installable PWA** — web app manifest + apple-web-app meta for "Add to Home Screen"
- **Performance** — fully static homepage at ~4 KB / ~128 KB First Load JS; near-instant TTFB on Vercel's edge

## Stack

| Layer       | Choice                                                                |
| ----------- | --------------------------------------------------------------------- |
| Framework   | [Next.js 15](https://nextjs.org) (App Router, RSC, edge runtime)      |
| Language    | TypeScript (strict)                                                   |
| Styling     | [Tailwind CSS](https://tailwindcss.com) v3 with CSS-variable tokens   |
| Fonts       | [Inter](https://rsms.me/inter/) + Fraunces (variable serif)           |
| Animation   | CSS-first (no framer-motion); intersection observers for reveals      |
| Routing UX  | [`nextjs-toploader`](https://github.com/TheSGJ/nextjs-toploader)      |
| Cmd palette | [`cmdk`](https://cmdk.paco.me)                                        |
| Hosting     | [Vercel](https://vercel.com) (Hobby tier)                             |
| Telemetry   | `@vercel/analytics` + `@vercel/speed-insights`                        |

## Architecture

```
app/
├── layout.tsx                  root <html>, fonts, splash + grain + analytics
├── page.tsx                    /  →  redirects to /tr
├── not-found.tsx               root 404 (bilingual)
├── manifest.ts robots.ts sitemap.ts
├── icon.svg
└── [locale]/                   /tr | /en
    ├── layout.tsx              hreflang + OG locale alternates
    ├── page.tsx                composes 14 homepage sections
    ├── opengraph-image.tsx     edge runtime, locale-aware 1200×630
    ├── not-found.tsx           bilingual 404
    ├── uses/page.tsx
    ├── now/page.tsx
    └── cv/page.tsx             print-friendly resume
components/                     Header, Hero, Stats, About, Currently,
                                Services, Process, PullQuote, Projects,
                                Journey, GitHubActivity, Testimonials,
                                FAQ, CTA, Contact, Footer + helpers
                                (CommandPalette, MobileMenu, TiltCard,
                                MagneticLink, CustomCursor, Spotlight,
                                ScrollReveal, ScrollUI, SplashScreen,
                                LocalTime, AnimatedNumber, CodeEditor,
                                StructuredData, ConsoleEgg, …)
lib/
├── i18n/dictionaries.ts        all UI strings (TR + EN), fully typed
├── projects.ts                 typed project list
└── social.ts                   social links + contact email
```

### Routing & i18n

- Locales live under a single `[locale]` segment
- `generateStaticParams` pre-renders both languages at build time
- All UI copy lives in `lib/i18n/dictionaries.ts` as `as const` typed objects — no runtime lookup, no missing-key risk
- `generateMetadata` per page emits canonical + hreflang alternates

### Rendering strategy

| Route                       | Mode                | Notes                                      |
| --------------------------- | ------------------- | ------------------------------------------ |
| `/`                         | Static              | Redirects to `/tr`                         |
| `/[locale]`                 | SSG                 | 30-min revalidate (GitHub widget)          |
| `/[locale]/{uses,now,cv}`   | SSG                 | Pure static                                |
| `/[locale]/opengraph-image` | Edge dynamic        | Per-request rendering avoids Windows bug   |
| `/sitemap.xml` `/robots.txt`| Static              | From metadata routes                       |

### Design system

- Color tokens in `tailwind.config.ts`: `bg`, `panel`, `border`, `muted`, `accent`, `accent-2`
- Display font tuned via `font-variation-settings: 'opsz' 144, 'SOFT' 50` on hero & section headings
- Custom CSS in `app/globals.css`: spotlight, glow-border, marquee fade, scroll progress, view-transitions, grain overlay
- All animations gracefully disabled under `prefers-reduced-motion`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000  →  /tr
npm run build    # production build
npm run lint
```

No `.env` required — analytics and the GitHub widget run unauthenticated.

## Editing content

- **Copy (TR + EN):** [`lib/i18n/dictionaries.ts`](./lib/i18n/dictionaries.ts) — every visible string is here
- **Projects:** [`lib/projects.ts`](./lib/projects.ts) — replace placeholders, set `status: "live"`, add `url`
- **Social links + email:** [`lib/social.ts`](./lib/social.ts)

## Credits

- Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [Vercel](https://vercel.com)
- Type set in [Inter](https://rsms.me/inter/) and [Fraunces](https://fonts.google.com/specimen/Fraunces)
- Command palette by [`cmdk`](https://cmdk.paco.me)
- Top loader by [`nextjs-toploader`](https://github.com/TheSGJ/nextjs-toploader)
- Crafted with [Claude Code](https://www.anthropic.com/claude-code)

---

<div align="center">

If you found something here interesting or want to talk about a project,<br/>
**[info@utkubagdas.com](mailto:info@utkubagdas.com)**

</div>
