import type { Dictionary } from "@/lib/i18n/dictionaries";
import { contactEmail, socials } from "@/lib/social";
import SectionHeading from "./SectionHeading";
import CopyEmail from "./CopyEmail";

export default function Contact({ t }: { t: Dictionary }) {
  return (
    <section id="contact" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t.contact.label}
          title={t.contact.title}
          subtitle={t.contact.lede}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-panel/40 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {t.contact.emailLabel}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className="text-lg text-white transition hover:text-accent md:text-xl"
              >
                {contactEmail}
              </a>
              <CopyEmail
                email={contactEmail}
                copyLabel={t.contact.copy}
                copiedLabel={t.contact.copied}
              />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-panel/40 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {t.contact.socialLabel}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-md border border-border bg-bg/40 px-3 py-2 text-sm text-white/80 transition hover:border-accent hover:text-accent"
                  >
                    {s.label}
                    <span className="text-muted" aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
