import type { Dictionary } from "@/lib/i18n/dictionaries";

const GH_USERNAME = "utkubagdas";

type ActivityKind =
  | "push"
  | "pr"
  | "create"
  | "public"
  | "release"
  | "issue"
  | "star"
  | "fork";

type Activity = {
  repo: string;
  message: string;
  url: string;
  date: string;
  kind: ActivityKind;
};

type GhEvent = {
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    commits?: { message: string; sha: string }[];
    ref?: string;
    ref_type?: string;
    pull_request?: { number: number; title: string; html_url: string };
    issue?: { number: number; title: string; html_url: string };
    release?: { name: string | null; tag_name?: string; html_url: string };
    action?: string;
  };
};

function eventToActivity(ev: GhEvent): Activity | null {
  const repo = ev.repo.name;
  const repoUrl = `https://github.com/${repo}`;
  const date = ev.created_at;

  switch (ev.type) {
    case "PushEvent": {
      const c = ev.payload.commits?.[ev.payload.commits.length - 1];
      if (!c) return null;
      return {
        repo,
        message: c.message.split("\n")[0],
        url: `${repoUrl}/commit/${c.sha}`,
        date,
        kind: "push",
      };
    }
    case "PullRequestEvent": {
      const pr = ev.payload.pull_request;
      if (!pr) return null;
      return {
        repo,
        message: `${ev.payload.action ?? "updated"} PR #${pr.number} · ${pr.title}`,
        url: pr.html_url,
        date,
        kind: "pr",
      };
    }
    case "CreateEvent": {
      const ref = ev.payload.ref_type ?? "ref";
      const name = ev.payload.ref ? ` "${ev.payload.ref}"` : "";
      return {
        repo,
        message: `Created ${ref}${name}`,
        url: repoUrl,
        date,
        kind: "create",
      };
    }
    case "PublicEvent":
      return {
        repo,
        message: "Made repository public",
        url: repoUrl,
        date,
        kind: "public",
      };
    case "ReleaseEvent": {
      const r = ev.payload.release;
      if (!r) return null;
      return {
        repo,
        message: `Released ${r.name ?? r.tag_name ?? ""}`.trim(),
        url: r.html_url,
        date,
        kind: "release",
      };
    }
    case "IssuesEvent": {
      const i = ev.payload.issue;
      if (!i) return null;
      return {
        repo,
        message: `${ev.payload.action ?? "updated"} issue #${i.number} · ${i.title}`,
        url: i.html_url,
        date,
        kind: "issue",
      };
    }
    case "WatchEvent":
      return {
        repo,
        message: "Starred repository",
        url: repoUrl,
        date,
        kind: "star",
      };
    case "ForkEvent":
      return {
        repo,
        message: "Forked repository",
        url: repoUrl,
        date,
        kind: "fork",
      };
    default:
      return null;
  }
}

async function getRecentActivity(): Promise<Activity[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GH_USERNAME}/events/public`,
      {
        next: { revalidate: 300 },
        headers: { Accept: "application/vnd.github+json" },
      }
    );
    if (!res.ok) return null;
    const events = (await res.json()) as GhEvent[];
    const list: Activity[] = [];
    for (const ev of events) {
      const a = eventToActivity(ev);
      if (a) list.push(a);
      if (list.length >= 6) break;
    }
    return list;
  } catch {
    return null;
  }
}

function relative(date: string, locale: "tr" | "en"): string {
  const ms = Date.now() - new Date(date).getTime();
  const m = Math.round(ms / 60000);
  const rtf = new Intl.RelativeTimeFormat(locale === "tr" ? "tr-TR" : "en-US", {
    numeric: "auto",
  });
  if (m < 60) return rtf.format(-m, "minute");
  const h = Math.round(m / 60);
  if (h < 24) return rtf.format(-h, "hour");
  const d = Math.round(h / 24);
  if (d < 30) return rtf.format(-d, "day");
  return rtf.format(-Math.round(d / 30), "month");
}

const KIND_LABELS: Record<ActivityKind, string> = {
  push: "PUSH",
  pr: "PR",
  create: "NEW",
  public: "PUBLIC",
  release: "REL",
  issue: "ISSUE",
  star: "★",
  fork: "FORK",
};

const KIND_COLORS: Record<ActivityKind, string> = {
  push: "border-accent/40 bg-accent/10 text-accent",
  pr: "border-violet-400/40 bg-violet-400/10 text-violet-300",
  create: "border-sky-400/40 bg-sky-400/10 text-sky-300",
  public: "border-cyan-400/40 bg-cyan-400/10 text-cyan-300",
  release: "border-amber-400/40 bg-amber-400/10 text-amber-300",
  issue: "border-orange-400/40 bg-orange-400/10 text-orange-300",
  star: "border-yellow-400/40 bg-yellow-400/10 text-yellow-300",
  fork: "border-white/20 bg-white/5 text-white/70",
};

export default async function GitHubActivity({
  t,
  locale,
}: {
  t: Dictionary;
  locale: "tr" | "en";
}) {
  const activity = await getRecentActivity();

  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="section-rule" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                {t.activity.label}
              </span>
            </div>
            <h2
              className="mt-4 font-display italic leading-[1.05] tracking-tight text-white"
              style={{
                fontWeight: 400,
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontVariationSettings: "'opsz' 144, 'SOFT' 50",
              }}
            >
              {t.activity.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted">
              {t.activity.subtitle}
            </p>
          </div>
          <a
            href={`https://github.com/${GH_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-panel/60 px-3 py-2 font-mono text-xs text-muted transition hover:border-accent hover:text-accent"
          >
            @{GH_USERNAME}
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div data-reveal className="mt-10 overflow-hidden rounded-xl border border-border bg-panel/40">
          {activity && activity.length > 0 ? (
            <ul className="divide-y divide-border">
              {activity.map((a, i) => (
                <li key={`${a.url}-${i}`} className="transition-colors hover:bg-panel">
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col gap-2 px-5 py-4 md:flex-row md:items-center md:gap-4"
                  >
                    <span
                      className={`inline-flex w-fit items-center justify-center rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest md:w-14 md:shrink-0 ${KIND_COLORS[a.kind]}`}
                    >
                      {KIND_LABELS[a.kind]}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted md:w-44 md:shrink-0 md:truncate">
                      {a.repo.replace(`${GH_USERNAME}/`, "")}
                    </span>
                    <span className="flex-1 truncate text-sm text-white/90">
                      {a.message}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted/70 md:shrink-0">
                      {relative(a.date, locale)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-5 py-8 text-center text-sm text-muted">
              {activity === null ? t.activity.offline : t.activity.empty}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
