"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { contactEmail, socials } from "@/lib/social";
import type { Locale } from "@/lib/i18n/dictionaries";

type Section = { id: string; label: string };

export default function CommandPalette({
  locale,
  sections,
  labels,
}: {
  locale: Locale;
  sections: Section[];
  labels: {
    placeholder: string;
    navigate: string;
    contact: string;
    language: string;
    social: string;
    switchTo: string;
    sendEmail: string;
    copyEmail: string;
    empty: string;
    hint: string;
  };
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const otherLocale: Locale = locale === "tr" ? "en" : "tr";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const close = () => setOpen(false);

  const goSection = (id: string) => {
    close();
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.hash = `#${id}`;
    });
  };

  const switchLang = () => {
    close();
    router.push(`/${otherLocale}`);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
    } catch {
      /* ignore */
    }
    close();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="hidden h-9 items-center gap-2 rounded-md border border-border bg-panel/60 px-2.5 text-xs text-muted transition hover:border-accent hover:text-accent md:inline-flex"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="font-mono">⌘K</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[15vh]">
          <div
            className="absolute inset-0 bg-bg/80 backdrop-blur-md"
            onClick={close}
            aria-hidden
          />
          <Command
            label={labels.placeholder}
            className="relative w-full max-w-xl overflow-hidden rounded-xl border border-border bg-panel/95 shadow-2xl shadow-black/60 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <Command.Input
                autoFocus
                placeholder={labels.placeholder}
                className="flex-1 bg-transparent py-4 text-sm text-white placeholder:text-muted focus:outline-none"
              />
              <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted sm:inline-block">
                ESC
              </kbd>
            </div>
            <Command.List className="max-h-[60vh] overflow-y-auto p-2">
              <Command.Empty className="px-3 py-8 text-center text-sm text-muted">
                {labels.empty}
              </Command.Empty>

              <Command.Group
                heading={labels.navigate}
                className="px-2 pb-1 pt-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted"
              >
                {sections.map((s) => (
                  <Item key={s.id} onSelect={() => goSection(s.id)}>
                    <ArrowIcon />
                    {s.label}
                  </Item>
                ))}
              </Command.Group>

              <Command.Group
                heading={labels.contact}
                className="px-2 pb-1 pt-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted"
              >
                <Item
                  onSelect={() => {
                    close();
                    window.location.href = `mailto:${contactEmail}`;
                  }}
                >
                  <MailIcon />
                  {labels.sendEmail}
                  <kbd className="ml-auto font-mono text-[10px] text-muted/70">
                    {contactEmail}
                  </kbd>
                </Item>
                <Item onSelect={copyEmail}>
                  <CopyIcon />
                  {labels.copyEmail}
                </Item>
              </Command.Group>

              <Command.Group
                heading={labels.social}
                className="px-2 pb-1 pt-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted"
              >
                {socials.map((s) => (
                  <Item
                    key={s.label}
                    onSelect={() => {
                      close();
                      window.open(s.href, "_blank", "noopener,noreferrer");
                    }}
                  >
                    <ExternalIcon />
                    {s.label}
                  </Item>
                ))}
              </Command.Group>

              <Command.Group
                heading={labels.language}
                className="px-2 pb-2 pt-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted"
              >
                <Item onSelect={switchLang}>
                  <GlobeIcon />
                  {labels.switchTo} {otherLocale.toUpperCase()}
                </Item>
              </Command.Group>
            </Command.List>

            <div className="flex items-center justify-between border-t border-border px-4 py-2 font-mono text-[10px] text-muted/70">
              <span>{labels.hint}</span>
              <span className="hidden sm:inline">⌘K</span>
            </div>
          </Command>
        </div>
      )}
    </>
  );
}

function Item({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-white/85 transition data-[selected=true]:bg-accent/10 data-[selected=true]:text-white"
    >
      {children}
    </Command.Item>
  );
}

const ico = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
function ArrowIcon() {
  return (
    <svg {...ico} className="text-muted" aria-hidden>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg {...ico} className="text-muted" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function CopyIcon() {
  return (
    <svg {...ico} className="text-muted" aria-hidden>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg {...ico} className="text-muted" aria-hidden>
      <path d="M14 4h6v6" />
      <path d="m20 4-9 9" />
      <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg {...ico} className="text-muted" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
    </svg>
  );
}
