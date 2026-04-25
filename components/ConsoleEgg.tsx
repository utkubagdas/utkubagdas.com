"use client";

import { useEffect } from "react";

export default function ConsoleEgg() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const flag = "__ub_console_eg__";
    if ((window as unknown as Record<string, unknown>)[flag]) return;
    (window as unknown as Record<string, unknown>)[flag] = true;

    const banner = `
   ╭─────────────────────────────────────────────╮
   │                                             │
   │     hey, dev — you found the console.       │
   │                                             │
   │     building something interesting?         │
   │     i'd love to hear about it.              │
   │                                             │
   │     →  utku.bagdas@gmail.com                │
   │                                             │
   ╰─────────────────────────────────────────────╯
`;
    const accent = "color:#34d399;font-family:ui-monospace,monospace;";
    const dim = "color:#8a8a93;font-family:ui-monospace,monospace;";
    // eslint-disable-next-line no-console
    console.log(`%c${banner}`, accent);
    // eslint-disable-next-line no-console
    console.log(
      "%cBuilt with %cNext.js %c+ %cTypeScript %c+ %cTailwind %c· %cClaude Code",
      dim,
      accent,
      dim,
      accent,
      dim,
      accent,
      dim,
      accent
    );
  }, []);

  return null;
}
