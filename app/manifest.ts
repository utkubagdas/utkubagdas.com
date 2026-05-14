import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Utku Bağdaş — Lead Game Developer",
    short_name: "Utku Bağdaş",
    description:
      "Lead Game Developer with 6.5+ years of Unity and 50+ titles shipped. Portfolio and personal projects.",
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
