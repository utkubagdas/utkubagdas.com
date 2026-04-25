import { techLogos } from "./TechLogos";

export default function Marquee() {
  const doubled = [...techLogos, ...techLogos];
  return (
    <div className="marquee-fade overflow-hidden border-y border-border/60 bg-panel/30 py-5">
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap text-muted">
        {doubled.map(({ name, Icon }, i) => (
          <div
            key={`${name}-${i}`}
            className="group flex items-center gap-2.5 transition-colors hover:text-white"
          >
            <Icon className="h-5 w-5 transition-colors group-hover:text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest">
              {name}
            </span>
            <span className="ml-12 text-accent/40">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
