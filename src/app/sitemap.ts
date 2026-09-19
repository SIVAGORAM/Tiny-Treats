import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { ROUTES_SEO, getCanonicalUrl, SITE_CONFIG } from "@/lib/seo";

interface DiscoveredRoute {
  routePath: string;
  filePath: string;
  mtime: Date;
}

/**
 * Recursively scans the Next.js app directory for all `page.tsx` (and page.jsx/js/ts) files.
 * Automatically discovers newly added routes (e.g., app/blog/page.tsx) without manual entry.
 */
function getPageRoutes(baseDir: string, currentDir: string = ""): DiscoveredRoute[] {
  const fullDir = path.join(baseDir, currentDir);
  if (!fs.existsSync(fullDir)) return [];

  const entries = fs.readdirSync(fullDir, { withFileTypes: true });
  let routes: DiscoveredRoute[] = [];

  for (const entry of entries) {
    const relativePath = currentDir ? path.join(currentDir, entry.name) : entry.name;
    const fullPath = path.join(baseDir, relativePath);

    if (entry.isDirectory()) {
      // Ignore private folders (_*), API routes (/api), and internal test/build directories
      if (
        entry.name.startsWith("_") ||
        entry.name.startsWith(".") ||
        entry.name === "api" ||
        entry.name.startsWith("(") // Route groups if handled separately
      ) {
        continue;
      }

      // Ignore dynamic route brackets if static sitemap only
      if (entry.name.startsWith("[")) {
        continue;
      }

      routes = routes.concat(getPageRoutes(baseDir, relativePath));
    } else if (
      entry.isFile() &&
      /^page\.(tsx|ts|jsx|js)$/.test(entry.name)
    ) {
      // Normalize route path to URL format (e.g., "about/page.tsx" -> "/about", "page.tsx" -> "")
      const normalizedPath = currentDir
        .split(path.sep)
        .join("/")
        .replace(/\/$/, "");

      const routePath = normalizedPath ? `/${normalizedPath}` : "";
      const stats = fs.statSync(fullPath);

      routes.push({
        routePath,
        filePath: fullPath,
        mtime: stats.mtime,
      });
    }
  }

  return routes;
}

/**
 * Dynamic Sitemap Generator
 * Merges discovered filesystem routes with SEO registry specifications.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Determine app directory location (src/app or app)
  const appDirectory = fs.existsSync(path.join(process.cwd(), "src", "app"))
    ? path.join(process.cwd(), "src", "app")
    : path.join(process.cwd(), "app");

  const discoveredRoutes = getPageRoutes(appDirectory);

  // Map known SEO registry routes by path
  const seoByPath = new Map<string, (typeof ROUTES_SEO)[keyof typeof ROUTES_SEO]>();
  Object.values(ROUTES_SEO).forEach((config) => {
    const cleanPath = config.path.replace(/^\/+/, "").replace(/\/+$/, "");
    seoByPath.set(cleanPath ? `/${cleanPath}` : "", config);
  });

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const discovered of discoveredRoutes) {
    const matchingConfig = seoByPath.get(discovered.routePath);

    // Skip routes explicitly marked noIndex (e.g. /cart, /thank-you)
    if (matchingConfig?.noIndex) {
      continue;
    }

    // Fallback exclusions for sensitive/internal routes
    if (
      discovered.routePath.startsWith("/cart") ||
      discovered.routePath.startsWith("/thank-you") ||
      discovered.routePath.startsWith("/admin")
    ) {
      continue;
    }

    const priority =
      matchingConfig?.priority ??
      (discovered.routePath === "" ? 1.0 : discovered.routePath === "/menu" ? 0.95 : 0.7);

    const changeFrequency =
      matchingConfig?.changeFrequency ??
      (discovered.routePath === "" ? "weekly" : "monthly");

    sitemapEntries.push({
      url: getCanonicalUrl(discovered.routePath),
      lastModified: discovered.mtime || new Date(),
      changeFrequency,
      priority,
    });
  }

  // Ensure root home page is always first
  sitemapEntries.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));

  return sitemapEntries;
}

