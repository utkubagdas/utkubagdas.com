const items = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Postgres",
  "Prisma",
  "Claude API",
  "Vercel",
  "Cloudflare",
  "GitHub Actions",
  "tRPC",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-fade overflow-hidden border-y border-border/60 bg-panel/30 py-3">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted">
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center gap-10">
            {it}
            <span className="text-accent/50">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
