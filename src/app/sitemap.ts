import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.tinytreats.in";
  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/menu", changeFrequency: "daily" as const, priority: 0.95 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/gallery", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/cart", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.5 },
    { path: "/terms-and-conditions", changeFrequency: "yearly" as const, priority: 0.5 },
    { path: "/cookie-policy", changeFrequency: "yearly" as const, priority: 0.5 },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
