import type { Dictionary } from "@/lib/i18n/dictionaries";

const GH_USERNAME = "utkubagdas";

type Commit = {
  repo: string;
  message: string;
  url: string;
  date: string;
};

type GhEvent = {
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    commits?: { message: string; sha: string }[];
    ref_type?: string;
    description?: string;
  };
};

async function getRecentCommits(): Promise<Commit[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GH_USERNAME}/events/public`,
      {
        next: { revalidate: 1800 },
        headers: { Accept: "application/vnd.github+json" },
      }
    );
    if (!res.ok) return null;
    const events = (await res.json()) as GhEvent[];
    const commits: Commit[] = [];
    for (const ev of events) {
      if (ev.type !== "PushEvent" || !ev.payload.commits) continue;
      for (const c of ev.payload.commits) {
        if (commits.length >= 5) break;
        commits.push({
          repo: ev.repo.name,
          message: c.message.split("\n")[0],
          url: `https://github.com/${ev.repo.name}/commit/${c.sha}`,
          date: ev.created_at,
        });
      }
      if (commits.length >= 5) break;
    }
    return commits;
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

export default async function GitHubActivity({
  t,
  locale,
}: {
  t: Dictionary;
  locale: "tr" | "en";
}) {
  const commits = await getRecentCommits();

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
            <p className="mt-3 max-w-xl text-sm text-muted">{t.activity.subtitle}</p>
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
          {commits && commits.length > 0 ? (
            <ul className="divide-y divide-border">
              {commits.map((c, i) => (
                <li key={`${c.url}-${i}`} className="transition-colors hover:bg-panel">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col gap-1 px-5 py-4 md:flex-row md:items-center md:gap-6"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted md:w-44 md:shrink-0">
                      {c.repo}
                    </span>
                    <span className="flex-1 truncate text-sm text-white/90">
                      {c.message}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted/70 md:shrink-0">
                      {relative(c.date, locale)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-5 py-8 text-center text-sm text-muted">
              {commits === null ? t.activity.offline : t.activity.empty}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
