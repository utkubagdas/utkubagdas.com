import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Utku Bağdaş — Full-stack Developer",
    short_name: "Utku Bağdaş",
    description:
      "Full-stack developer building scalable web applications and custom software for companies.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090c",
    theme_color: "#08090c",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Projects",
        short_name: "Projects",
        url: "/tr#projects",
      },
      {
        name: "Contact",
        short_name: "Contact",
        url: "/tr#contact",
      },
      {
        name: "CV",
        short_name: "CV",
        url: "/tr/cv",
      },
      {
        name: "Blog",
        short_name: "Blog",
        url: "/tr/blog",
      },
    ],
  };
}
