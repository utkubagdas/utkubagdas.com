type Name = "game" | "saas" | "automation" | "ar";

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
    case "game":
      // game controller / pad
      return (
        <svg {...common} aria-hidden>
          <path d="M6 8h12a4 4 0 0 1 4 4v3a3 3 0 0 1-5.5 1.7l-1.4-1.7H8.9l-1.4 1.7A3 3 0 0 1 2 15v-3a4 4 0 0 1 4-4z" />
          <path d="M8 12h2" />
          <path d="M9 11v2" />
          <circle cx="16" cy="12" r="0.8" fill="currentColor" />
          <circle cx="14" cy="14" r="0.8" fill="currentColor" />
        </svg>
      );
    case "saas":
      // cloud + spark
      return (
        <svg {...common} aria-hidden>
          <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.6-1A4 4 0 0 0 7 18z" />
          <path d="M12 14v-3" />
          <path d="M10.5 12.5l3-1.5 3 1.5" />
        </svg>
      );
    case "automation":
      // gear + arrow loop
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
        </svg>
      );
    case "ar":
      // VR headset / AR glasses
      return (
        <svg {...common} aria-hidden>
          <path d="M3 9h18a1 1 0 0 1 1 1v5a3 3 0 0 1-3 3h-2.5l-2-3h-5l-2 3H5a3 3 0 0 1-3-3v-5a1 1 0 0 1 1-1z" />
          <circle cx="8" cy="13" r="1.2" fill="currentColor" />
          <circle cx="16" cy="13" r="1.2" fill="currentColor" />
        </svg>
      );
  }
}
