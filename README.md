# utkubagdas.com

Personal portfolio site of Utku Bağdaş. Bilingual (TR / EN), dark-first, B2B-friendly.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Hosted on Vercel
- Domain registered at Natro

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 — root redirects to `/tr`. Switch language from the header (TR/EN button) or visit `/en`.

## Project structure

```
app/
  layout.tsx            # root <html>, fonts, global metadata
  page.tsx              # / -> redirects to /tr
  [locale]/             # /tr and /en pages
  sitemap.ts robots.ts  # SEO
  icon.svg              # favicon
components/             # Header, Hero, About, Services, Projects, Contact, Footer
lib/
  i18n/dictionaries.ts  # TR + EN copy
  projects.ts           # project list (placeholders for now)
  social.ts             # social links + contact email
```

## Editing content

- **Copy (TR/EN)** -> `lib/i18n/dictionaries.ts`
- **Projects** -> `lib/projects.ts` (replace placeholders, set `status: "live"` and add `url`)
- **Social links** -> `lib/social.ts` (replace placeholder URLs with your real handles)
- **Stack chips** -> `components/About.tsx` (`stack` array)

## Deploy to Vercel

1. Push this repo to GitHub.
2. On https://vercel.com, click **New Project** -> import the GitHub repo.
3. Framework preset: **Next.js** (auto-detected). Click **Deploy**. First deploy gives you a `*.vercel.app` URL.

## Connect the Natro domain (utkubagdas.com)

In Vercel:

1. Project -> **Settings** -> **Domains** -> add `utkubagdas.com` and `www.utkubagdas.com`.
2. Vercel will show you the DNS records you need to add.

In Natro (DNS Yönetimi):

| Type    | Name | Value                  |
| ------- | ---- | ---------------------- |
| `A`     | `@`  | `76.76.21.21`          |
| `CNAME` | `www`| `cname.vercel-dns.com` |

> Natro nameserver'larını kullanıyorsan kayıtları **DNS Yönetimi** sekmesinden ekle. Eğer kayıtları göremiyorsan, **Nameserver** ayarının Natro'da kaldığını doğrula (Vercel nameserver'larına geçirmek de mümkün ama gerekli değil).

DNS yayılması 5 dk - birkaç saat sürebilir. Vercel sertifikayı (SSL) otomatik atar.

## What's next

- Replace project placeholders in `lib/projects.ts` with real case studies.
- Update social URLs in `lib/social.ts`.
- Optional: blog (`app/[locale]/blog/`), case-study detail pages, contact form, analytics.
