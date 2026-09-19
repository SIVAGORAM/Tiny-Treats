import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.tinytreats.in";
  const staticRoutes = ["", "/menu", "/about", "/gallery", "/contact", "/cart"];

  return staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/menu" ? 0.9 : 0.8,
  }));
}
