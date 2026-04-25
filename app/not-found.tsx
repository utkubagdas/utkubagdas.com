import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />
      <div className="relative text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          404 — not found
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
          Sayfa bulunamadı
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          Aradığın sayfa taşınmış ya da hiç var olmamış olabilir. Ana sayfaya
          dönüp baştan başlayabilirsin.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Link
            href="/tr"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-accent/90"
          >
            Ana sayfaya dön
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/en"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-panel/60 px-5 py-2.5 text-sm font-medium text-white transition hover:border-accent hover:text-accent"
          >
            English version
          </Link>
        </div>
      </div>
    </main>
  );
}
