import type { MetadataRoute } from "next";
import { ROUTES_SEO, getCanonicalUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only public indexable routes in sitemap
  const publicRoutes = Object.values(ROUTES_SEO).filter((route) => !route.noIndex);

  return publicRoutes.map((route) => ({
    url: getCanonicalUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency || "monthly",
    priority: route.priority ?? 0.7,
  }));
}
