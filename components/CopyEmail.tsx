"use client";

import { useState } from "react";

export default function CopyEmail({
  email,
  copyLabel,
  copiedLabel,
}: {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-md border border-border bg-bg/60 px-2.5 py-1 font-mono text-[11px] text-muted transition hover:border-accent hover:text-accent"
      aria-label={copied ? copiedLabel : copyLabel}
    >
      <span>{copied ? copiedLabel : copyLabel}</span>
      <span aria-hidden>{copied ? "✓" : "⧉"}</span>
    </button>
  );
}
