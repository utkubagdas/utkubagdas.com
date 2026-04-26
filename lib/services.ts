export const serviceSlugs = [
  "web-application",
  "corporate-website",
  "ai-integrations",
  "maintenance-support",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export const serviceIconMap: Record<ServiceSlug, "web" | "site" | "ai" | "support"> = {
  "web-application": "web",
  "corporate-website": "site",
  "ai-integrations": "ai",
  "maintenance-support": "support",
};
