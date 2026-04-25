"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollUI() {
  const [showTop, setShowTop] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]")
    );

    const setActive = (id: string | null) => {
      navLinks.forEach((a) => {
        const target = a.getAttribute("href")?.replace("#", "") ?? "";
        if (id && target === id) {
          a.setAttribute("data-active", "true");
        } else {
          a.removeAttribute("data-active");
        }
      });
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const doc = document.documentElement;
        const scrollTop = window.scrollY || doc.scrollTop;
        const scrollHeight = doc.scrollHeight - doc.clientHeight;
        const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        if (progressRef.current) {
          progressRef.current.style.setProperty("--progress", `${pct}%`);
        }

        setShowTop(scrollTop > 500);

        const probe = scrollTop + window.innerHeight * 0.3;
        let current: string | null = null;
        for (const s of sections) {
          if (s.offsetTop <= probe) current = s.id;
        }
        setActive(current);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div ref={progressRef} className="scroll-progress" aria-hidden />
      <button
        type="button"
        onClick={onBackToTop}
        data-visible={showTop ? "true" : "false"}
        className="back-to-top fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-panel/80 text-muted backdrop-blur-md transition hover:border-accent hover:text-accent"
        aria-label="Back to top"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
