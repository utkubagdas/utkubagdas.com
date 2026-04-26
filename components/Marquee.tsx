import { techLogos } from "./TechLogos";

export default function Marquee() {
  const doubled = [...techLogos, ...techLogos];
  return (
    <div className="marquee-fade relative z-20 overflow-hidden border-y border-border bg-bg py-5">
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap text-white/85">
        {doubled.map(({ name, Icon }, i) => (
          <div
            key={`${name}-${i}`}
            className="group flex items-center gap-2.5 transition-colors hover:text-accent"
          >
            <Icon className="h-5 w-5 text-accent transition-colors" />
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
