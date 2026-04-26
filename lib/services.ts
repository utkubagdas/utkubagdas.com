export const serviceSlugs = [
  "game-development",
  "ai-saas",
  "automation-tools",
  "ar-vr-interactive",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export const serviceIconMap: Record<ServiceSlug, "game" | "saas" | "automation" | "ar"> = {
  "game-development": "game",
  "ai-saas": "saas",
  "automation-tools": "automation",
  "ar-vr-interactive": "ar",
};
