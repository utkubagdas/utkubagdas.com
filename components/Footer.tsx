import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { contactEmail, socials } from "@/lib/social";

export default function Footer({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const year = new Date().getFullYear();
  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#projects", label: t.nav.projects },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-30"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-mono text-sm tracking-tight text-white">
              ub<span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-md text-base text-muted">
              {t.footer.tagline}
            </p>
          </div>

          <FooterCol title={t.footer.navTitle}>
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="text-sm text-white/80 transition hover:text-accent"
              >
                {it.label}
              </a>
            ))}
          </FooterCol>

          <FooterCol title={t.footer.socialTitle}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/80 transition hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </FooterCol>

          <FooterCol title={t.footer.contactTitle}>
            <a
              href={`mailto:${contactEmail}`}
              className="text-sm text-white/80 transition hover:text-accent"
            >
              {contactEmail}
            </a>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
              utkubagdas.com
            </span>
          </FooterCol>
        </div>

        <div
          aria-hidden
          className="pointer-events-none mt-16 select-none text-center font-semibold leading-none tracking-tighter text-white/[0.04]"
          style={{ fontSize: "clamp(4rem, 18vw, 14rem)" }}
        >
          utkubagdas
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted">
            © {year} Utku Bağdaş. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-muted/60">
              {locale.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:col-span-2">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {title}
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {Array.isArray(children)
          ? children.map((c, i) => <li key={i}>{c}</li>)
          : <li>{children}</li>}
      </ul>
    </div>
  );
}
