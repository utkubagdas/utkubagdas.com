"use client";

import Link from "next/link";

export default function LangSwitch({
  href,
  label,
  ariaLabel,
}: {
  href: string;
  label: string;
  ariaLabel: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("ub:achievement", { detail: "language" })
          );
        }
      }}
      className="hidden rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted transition hover:border-accent hover:text-accent md:inline-flex"
      aria-label={ariaLabel}
    >
      {label}
    </Link>
  );
}
