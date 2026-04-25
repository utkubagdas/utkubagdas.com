export default function CodeEditor() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-panel/70 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center justify-between border-b border-border/60 bg-bg/40 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          about.ts
        </span>
        <span className="font-mono text-[10px] text-muted/50">utf-8</span>
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6 text-white/90 md:text-[13px]">
        <code>
          <Line n={1}>
            <Kw>const</Kw> <Var>utku</Var> <Op>=</Op> <Brace>{"{"}</Brace>
          </Line>
          <Line n={2}>
            {"  "}
            <Prop>role</Prop>
            <Op>:</Op> <Str>"Full-stack Developer"</Str>
            <Op>,</Op>
          </Line>
          <Line n={3}>
            {"  "}
            <Prop>stack</Prop>
            <Op>:</Op> <Brace>[</Brace>
            <Str>"Next.js"</Str>
            <Op>,</Op> <Str>"TypeScript"</Str>
            <Op>,</Op> <Str>"Claude"</Str>
            <Brace>]</Brace>
            <Op>,</Op>
          </Line>
          <Line n={4}>
            {"  "}
            <Prop>available</Prop>
            <Op>:</Op> <Bool>true</Bool>
            <Op>,</Op>
          </Line>
          <Line n={5}>
            {"  "}
            <Prop>respondsIn</Prop>
            <Op>:</Op> <Str>"&lt; 24h"</Str>
            <Op>,</Op>
          </Line>
          <Line n={6}>
            <Brace>{"}"}</Brace>
            <Op>;</Op>
          </Line>
          <Line n={7}>
            <Comment>{"// reach out → utku.bagdas@gmail.com"}</Comment>
          </Line>
        </code>
      </pre>
    </div>
  );
}

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="mr-4 inline-block w-4 select-none text-right text-muted/40">
        {n}
      </span>
      <span>{children}</span>
    </div>
  );
}
const Kw = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#c084fc]">{children}</span>
);
const Var = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#60a5fa]">{children}</span>
);
const Prop = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#34d399]">{children}</span>
);
const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#fbbf24]">{children}</span>
);
const Bool = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#22d3ee]">{children}</span>
);
const Op = ({ children }: { children: React.ReactNode }) => (
  <span className="text-muted">{children}</span>
);
const Brace = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white/70">{children}</span>
);
const Comment = ({ children }: { children: React.ReactNode }) => (
  <span className="text-muted/70 italic">{children}</span>
);
