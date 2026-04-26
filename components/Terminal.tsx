"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { contactEmail, socials } from "@/lib/social";
import type { Locale } from "@/lib/i18n/dictionaries";

type Line =
  | { kind: "in"; text: string }
  | { kind: "out"; text: string; tone?: "muted" | "accent" | "white" }
  | { kind: "blank" };

const PROMPT = "ub@portfolio:~$";

const COMMANDS = [
  "help",
  "whoami",
  "ls",
  "cat",
  "social",
  "email",
  "cv",
  "blog",
  "uses",
  "now",
  "press",
  "open",
  "konami",
  "theme",
  "clear",
  "echo",
  "date",
  "history",
  "matrix",
  "weather",
  "ascii",
  "sudo",
  "boot",
  "snake",
] as const;

const FILES: Record<string, string> = {
  "about.md":
    "Utku Bağdaş — Full-stack developer building scalable web apps and custom software for companies through a Türkiye-based sole proprietorship.",
  "stack.json":
    '{ "frontend": ["Next.js","React","TS","Tailwind","Flutter"], "backend": ["Node.js",".NET","C#","Postgres"], "ai": ["Claude Code","Claude API","OpenAI"], "infra": ["Vercel","Firebase","Cloudflare"] }',
  "process.txt":
    "01 Discovery → 02 Architecture → 03 Build (weekly demos) → 04 Ship & Maintain.",
};

const LIST_DIR = [
  "about.md",
  "stack.json",
  "process.txt",
  "projects/",
  "services/",
  "blog/",
  "cv",
  "press",
  "now",
  "uses",
];

const HELP_TEXT = `available commands:
  help              show this list
  whoami            short bio
  ls                list virtual filesystem
  cat <file>        print file (about.md, stack.json, process.txt)
  social            list social handles
  email             open mailto compose
  cv | blog | uses | now | press   navigate to that page
  open <url>        open external url in new tab
  echo <text>       print text
  date              local time in Istanbul
  weather           current weather in Istanbul
  ascii <text>      render text as banner ascii
  matrix            unleash the rain
  boot              fake boot sequence
  snake             ascii snake (use WASD, q to quit)
  sudo <cmd>        nope
  konami            trigger the easter egg
  theme             info about the color scheme
  history           previous commands
  clear             wipe the screen`;

function normalize(input: string) {
  return input.trim().replace(/\s+/g, " ");
}

async function fetchWeather(): Promise<string> {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current=temperature_2m,weather_code,wind_speed_10m&timezone=Europe%2FIstanbul",
      { cache: "no-store" }
    );
    if (!res.ok) return "weather: feed unavailable";
    const data = (await res.json()) as {
      current?: {
        temperature_2m?: number;
        weather_code?: number;
        wind_speed_10m?: number;
      };
    };
    const c = data.current;
    if (!c || c.temperature_2m == null) return "weather: feed unavailable";
    const code = c.weather_code ?? 0;
    const desc =
      code === 0
        ? "clear"
        : code <= 3
        ? "mostly clear"
        : code <= 48
        ? "fog"
        : code <= 67
        ? "rain"
        : code <= 77
        ? "snow"
        : code <= 82
        ? "showers"
        : "thunder";
    return `Istanbul · ${c.temperature_2m.toFixed(1)}°C · ${desc} · wind ${c.wind_speed_10m?.toFixed(0) ?? "?"} km/h`;
  } catch {
    return "weather: network error";
  }
}

const ASCII_FONT: Record<string, string[]> = {
  default: ["▀█▀", " █ ", " ▀ "],
};
function asciiBanner(text: string): string {
  // simple block-style banner — uppercase letters made of unicode blocks
  const map: Record<string, string[]> = {
    A: ["█▀█", "█▀█", "▀ ▀"],
    B: ["█▀▄", "█▀▄", "▀▀ "],
    C: ["█▀▀", "█  ", "▀▀▀"],
    D: ["█▀▄", "█ █", "▀▀ "],
    E: ["█▀▀", "█▀▀", "▀▀▀"],
    F: ["█▀▀", "█▀▀", "▀  "],
    G: ["█▀▀", "█ █", "▀▀▀"],
    H: ["█ █", "█▀█", "▀ ▀"],
    I: ["█", "█", "▀"],
    J: ["  █", "  █", "▀▀ "],
    K: ["█ █", "█▀▄", "▀ ▀"],
    L: ["█  ", "█  ", "▀▀▀"],
    M: ["█▄█", "█▀█", "▀ ▀"],
    N: ["█▄█", "█▀█", "▀ ▀"],
    O: ["█▀█", "█ █", "▀▀▀"],
    P: ["█▀█", "█▀▀", "▀  "],
    Q: ["█▀█", "█▄█", "▀ ▀"],
    R: ["█▀█", "█▀▄", "▀ ▀"],
    S: ["█▀▀", "▀▀█", "▀▀▀"],
    T: ["▀█▀", " █ ", " ▀ "],
    U: ["█ █", "█ █", "▀▀▀"],
    V: ["█ █", "█ █", " ▀ "],
    W: ["█ █", "█▄█", "▀ ▀"],
    X: ["█ █", " █ ", "▀ ▀"],
    Y: ["█ █", " █ ", " ▀ "],
    Z: ["▀▀█", " █ ", "█▀▀"],
    " ": ["  ", "  ", "  "],
  };
  const upper = text.toUpperCase();
  const rows = ["", "", ""];
  for (const ch of upper) {
    const glyph = map[ch] ?? ASCII_FONT.default;
    for (let i = 0; i < 3; i++) rows[i] += glyph[i] + " ";
  }
  return rows.join("\n");
}

export default function Terminal({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>(() => [
    { kind: "out", text: "ub.terminal — type `help` to begin", tone: "muted" },
    { kind: "blank" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number | null>(null);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const print = (newLines: Line[]) => {
    setLines((prev) => [...prev, ...newLines]);
  };

  const time = useMemo(
    () =>
      new Intl.DateTimeFormat("tr-TR", {
        timeZone: "Europe/Istanbul",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }),
    []
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const exec = (raw: string) => {
    const cmdLine: Line = { kind: "in", text: raw };
    const trimmed = normalize(raw);
    if (trimmed.length === 0) {
      print([cmdLine, { kind: "blank" }]);
      return;
    }
    const [cmd, ...rest] = trimmed.split(" ");
    const arg = rest.join(" ");

    setHistory((h) => [...h, trimmed].slice(-30));
    setHistoryIdx(null);

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("ub:achievement", { detail: "terminal" })
      );
    }

    const out: Line[] = [cmdLine];

    switch (cmd) {
      case "help":
        out.push({ kind: "out", text: HELP_TEXT });
        break;
      case "whoami":
        out.push({
          kind: "out",
          text: "Utku Bağdaş — Full-stack Developer · Istanbul, TR",
          tone: "white",
        });
        break;
      case "ls":
        out.push({
          kind: "out",
          text: LIST_DIR.join("   "),
          tone: "accent",
        });
        break;
      case "cat": {
        if (!arg) {
          out.push({ kind: "out", text: "usage: cat <file>", tone: "muted" });
        } else if (FILES[arg]) {
          out.push({ kind: "out", text: FILES[arg] });
        } else {
          out.push({
            kind: "out",
            text: `cat: ${arg}: no such file. try \`ls\`.`,
            tone: "muted",
          });
        }
        break;
      }
      case "social":
        out.push(
          ...socials.map(
            (s) =>
              ({
                kind: "out" as const,
                text: `${s.label.padEnd(10)} ${s.href}`,
              })
          )
        );
        break;
      case "email":
        out.push({
          kind: "out",
          text: `opening mailto:${contactEmail} …`,
          tone: "accent",
        });
        if (typeof window !== "undefined") {
          window.location.href = `mailto:${contactEmail}`;
        }
        break;
      case "cv":
      case "blog":
      case "uses":
      case "now":
      case "press":
        out.push({
          kind: "out",
          text: `→ /${locale}/${cmd}`,
          tone: "accent",
        });
        router.push(`/${locale}/${cmd}`);
        break;
      case "open": {
        if (!arg) {
          out.push({ kind: "out", text: "usage: open <url>", tone: "muted" });
        } else {
          const url = arg.startsWith("http") ? arg : `https://${arg}`;
          out.push({ kind: "out", text: `opening ${url} …`, tone: "accent" });
          if (typeof window !== "undefined") {
            window.open(url, "_blank", "noopener,noreferrer");
          }
        }
        break;
      }
      case "konami":
        out.push({
          kind: "out",
          text: "↑ ↑ ↓ ↓ ← → ← → b a   (try it on the page itself)",
          tone: "accent",
        });
        break;
      case "theme":
        out.push({
          kind: "out",
          text: "dark · accent #34d399 · serif Fraunces · sans Inter",
        });
        break;
      case "echo":
        out.push({ kind: "out", text: arg || "" });
        break;
      case "date":
        out.push({
          kind: "out",
          text: `${time.format(new Date())} · Europe/Istanbul`,
        });
        break;
      case "history":
        out.push({
          kind: "out",
          text:
            history.length > 0
              ? history.map((h, i) => `${(i + 1).toString().padStart(3)}  ${h}`).join("\n")
              : "(empty)",
          tone: "muted",
        });
        break;
      case "matrix":
        out.push({
          kind: "out",
          text: "wake up, neo …",
          tone: "accent",
        });
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("ub:matrix"));
        }
        break;
      case "weather": {
        out.push({ kind: "out", text: "fetching …", tone: "muted" });
        print([...out, { kind: "blank" }]);
        fetchWeather().then((line) => {
          setLines((prev) => [
            ...prev,
            { kind: "out", text: line, tone: "white" },
            { kind: "blank" },
          ]);
        });
        return;
      }
      case "ascii": {
        const word = arg.trim() || "ub";
        out.push({ kind: "out", text: asciiBanner(word), tone: "accent" });
        break;
      }
      case "sudo":
        out.push({
          kind: "out",
          text: `[sudo] password for ${arg || "guest"}: \nnice try. permission denied.`,
          tone: "muted",
        });
        break;
      case "boot": {
        out.push({ kind: "out", text: "rebooting …", tone: "muted" });
        print([...out, { kind: "blank" }]);
        const boot = [
          "[ ok ] mounted /utkubagdas.com",
          "[ ok ] starting nextjs.service",
          "[ ok ] starting tailwind.daemon",
          "[ ok ] starting fraunces.font",
          "[ ok ] starting claude-code.assistant",
          "[ ok ] system online — type `help`",
        ];
        boot.forEach((line, i) => {
          setTimeout(() => {
            setLines((prev) => [
              ...prev,
              {
                kind: "out",
                text: line,
                tone: i === boot.length - 1 ? "accent" : "muted",
              },
              ...(i === boot.length - 1
                ? [{ kind: "blank" as const }]
                : []),
            ]);
          }, 220 * (i + 1));
        });
        return;
      }
      case "snake":
        out.push({
          kind: "out",
          text: "🐍  the snake is sleeping. try `help` instead.",
          tone: "muted",
        });
        break;
      case "clear":
        setLines([]);
        return;
      default:
        out.push({
          kind: "out",
          text: `command not found: ${cmd}. type \`help\`.`,
          tone: "muted",
        });
    }

    out.push({ kind: "blank" });
    print(out);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      exec(input);
      setInput("");
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = historyIdx === null ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(next);
      setInput(history[next]);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length === 0 || historyIdx === null) {
        setInput("");
        setHistoryIdx(null);
        return;
      }
      const next = historyIdx + 1;
      if (next >= history.length) {
        setHistoryIdx(null);
        setInput("");
      } else {
        setHistoryIdx(next);
        setInput(history[next]);
      }
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const parts = input.split(" ");
      if (parts.length === 1) {
        const matches = COMMANDS.filter((c) => c.startsWith(parts[0]));
        if (matches.length === 1) setInput(matches[0] + " ");
        else if (matches.length > 1) {
          print([
            { kind: "in", text: input },
            { kind: "out", text: matches.join("   "), tone: "muted" },
            { kind: "blank" },
          ]);
        }
      } else if (parts[0] === "cat") {
        const fileMatches = Object.keys(FILES).filter((f) =>
          f.startsWith(parts[1] ?? "")
        );
        if (fileMatches.length === 1) setInput(`cat ${fileMatches[0]}`);
      }
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="overflow-hidden rounded-xl border border-border bg-panel/70 shadow-2xl shadow-black/40 backdrop-blur"
    >
      <div className="flex items-center justify-between border-b border-border/60 bg-bg/40 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              focused ? "bg-accent" : "bg-accent/60"
            }`}
          />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          ub.terminal
        </span>
        <span className="font-mono text-[10px] text-muted/50">
          {focused ? "focused" : "click to focus"}
        </span>
      </div>

      <div
        ref={scrollRef}
        className="h-64 overflow-y-auto p-3 font-mono text-[12px] leading-5"
      >
        {lines.map((l, i) => {
          if (l.kind === "blank") return <div key={i} className="h-2" aria-hidden />;
          if (l.kind === "in") {
            return (
              <div key={i} className="whitespace-pre-wrap">
                <span className="text-accent">{PROMPT}</span>{" "}
                <span className="text-white/90">{l.text}</span>
              </div>
            );
          }
          const tone =
            l.tone === "accent"
              ? "text-accent"
              : l.tone === "muted"
              ? "text-muted"
              : l.tone === "white"
              ? "text-white"
              : "text-white/85";
          return (
            <pre
              key={i}
              className={`whitespace-pre-wrap break-words font-mono ${tone}`}
            >
              {l.text}
            </pre>
          );
        })}

        <div className="flex items-baseline gap-2">
          <span className="shrink-0 text-accent">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            aria-label="Terminal input"
            className="w-full flex-1 border-none bg-transparent p-0 text-[12px] text-white outline-none ring-0 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
