import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import MobileMenu from "./MobileMenu";
import CommandPalette from "./CommandPalette";
import MagneticLink from "./MagneticLink";
import LangSwitch from "./LangSwitch";
import ThemeToggle from "./ThemeToggle";

export default function Header({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const otherLocale: Locale = locale === "tr" ? "en" : "tr";
  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#projects", label: t.nav.projects },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}`}
          className="group inline-flex items-center gap-2 font-mono text-sm tracking-tight text-white transition hover:text-accent"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-border bg-panel/60 text-[10px] text-accent transition group-hover:border-accent">
            ub
          </span>
          <span className="hidden sm:inline">utkubagdas</span>
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <MagneticLink
              key={item.href}
              href={item.href}
              strength={0.25}
              data-nav-link
              className="text-sm text-muted hover:text-white"
            >
              {item.label}
            </MagneticLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CommandPalette
            locale={locale}
            sections={navItems.map((n) => ({
              id: n.href.replace("#", ""),
              label: n.label,
            }))}
            labels={t.cmdk}
          />
          <ThemeToggle />
          <LangSwitch
            href={`/${otherLocale}`}
            label={t.langSwitch[otherLocale]}
            ariaLabel={`Switch to ${otherLocale.toUpperCase()}`}
          />
          <a
            href="#contact"
            className="hidden rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-bg transition hover:bg-accent/90 md:inline-flex"
          >
            {t.nav.contact} →
          </a>
          <MobileMenu
            items={navItems}
            currentLocale={locale}
            otherLocale={otherLocale}
            langLabel={t.langSwitch[otherLocale]}
            contactLabel={t.nav.contact}
          />
        </div>
      </div>
    </header>
  );
}
