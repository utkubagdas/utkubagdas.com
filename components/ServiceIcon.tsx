type Name = "web" | "site" | "ai" | "support";

export default function ServiceIcon({ name }: { name: Name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "web":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 14l-2 2 2 2" />
          <path d="M16 14l2 2-2 2" />
        </svg>
      );
    case "site":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 3v3" />
          <path d="M12 18v3" />
          <path d="M4.5 7.5l2 1.2" />
          <path d="M17.5 14.3l2 1.2" />
          <path d="M4.5 16.5l2-1.2" />
          <path d="M17.5 8.7l2-1.2" />
          <rect x="8" y="8" width="8" height="8" rx="2" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );
    case "support":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 3l9 4v5c0 5-4 8-9 9-5-1-9-4-9-9V7z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
  }
}
