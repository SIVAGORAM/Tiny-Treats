import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
  },
  async redirects() {
    return [
      // ── 1. WordPress Legacy Core Pages to Next.js Routes (301 Permanent) ──
      {
        source: "/about-us",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/our-story",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/story",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/who-we-are",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/get-in-touch",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/reach-us",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/menu/",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/menu/",
        permanent: true,
      },
      {
        source: "/our-menu",
        destination: "/menu/",
        permanent: true,
      },
      {
        source: "/menu-items",
        destination: "/menu/",
        permanent: true,
      },
      {
        source: "/store",
        destination: "/menu/",
        permanent: true,
      },
      {
        source: "/order-now",
        destination: "/menu/",
        permanent: true,
      },
      {
        source: "/gallery-view",
        destination: "/gallery/",
        permanent: true,
      },
      {
        source: "/photos",
        destination: "/gallery/",
        permanent: true,
      },
      {
        source: "/our-gallery",
        destination: "/gallery/",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy/",
        permanent: true,
      },
      {
        source: "/privacy-policy-2",
        destination: "/privacy-policy/",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-and-conditions/",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms-and-conditions/",
        permanent: true,
      },
      {
        source: "/cookies",
        destination: "/cookie-policy/",
        permanent: true,
      },
      {
        source: "/cookie-policy-2",
        destination: "/cookie-policy/",
        permanent: true,
      },
      {
        source: "/checkout",
        destination: "/cart/",
        permanent: true,
      },

      // ── 2. WordPress Taxonomies, Categories, Products & Tags ──
      {
        source: "/category/:slug*",
        destination: "/menu/",
        permanent: true,
      },
      {
        source: "/categories/:slug*",
        destination: "/menu/",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/menu/",
        permanent: true,
      },
      {
        source: "/product-category/:slug*",
        destination: "/menu/",
        permanent: true,
      },
      {
        source: "/product/:slug*",
        destination: "/menu/",
        permanent: true,
      },
      {
        source: "/author/:slug*",
        destination: "/about/",
        permanent: true,
      },

      // ── 3. WordPress Media Uploads Wildcard Redirect ──
      {
        source: "/wp-content/uploads/:path*",
        destination: "/gallery/",
        permanent: true,
      },

      // ── 4. WordPress Feeds & RSS Streams to Homepage ──
      {
        source: "/feed/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/comments/feed/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-json/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/:path*.(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
