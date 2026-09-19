import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const domain = SITE_CONFIG.domain || SITE_CONFIG.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/wp-admin/",
          "/wp-includes/",
          "/wp-content/",
          "/wp-json/",
          "/xmlrpc.php",
          "/*.php$",
          "/category/",
          "/tag/",
          "/author/",
          "/cart/",
          "/thank-you/",
          "/admin/",
          "/feed/",
          "/*.json$",
        ],
      },
    ],
    sitemap: `${domain}/sitemap.xml`,
    host: domain,
  };
}

