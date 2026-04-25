export default function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="section-rule" aria-hidden />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
