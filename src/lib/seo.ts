import type { Metadata } from "next";

const resolvedDomain = (() => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && !envUrl.includes("localhost") && !envUrl.includes("127.0.0.1")) {
    return envUrl.replace(/\/$/, "");
  }
  return "https://www.tinytreats.in";
})();

export const SITE_CONFIG = {
  domain: resolvedDomain,
  siteUrl: resolvedDomain,
  siteName: "Tiny Treats",
  defaultTitle: "Tiny Treats | Fresh Homemade Cookies, Laddus & Wholesome Treats Hyderabad",
  titleTemplate: "%s | Tiny Treats",
  defaultDescription:
    "Order fresh homemade cookies, dry fruit laddus, no-maida treats and brownies from Tiny Treats in Hyderabad. Baked fresh with pure butter and natural sweeteners.",
  defaultOgImage: "/og/tiny-treats-og.jpg",
  twitterHandle: "@tinytreatsbys",
  locale: "en_IN",
  defaultKeywords: [
    "Tiny Treats",
    "homemade cookies Hyderabad",
    "no maida cookies online",
    "ragi cookies homemade",
    "dry fruit laddu without sugar",
    "calcium laddu for kids",
    "protein laddu online",
    "seed crackers",
    "whole wheat brownies",
    "healthy bakery Hyderabad",
    "artisanal treats India",
  ],
};

/**
 * Normalizes any path into a strict canonical URL with a trailing slash.
 * E.g. "" -> "https://www.tinytreats.in/"
 * E.g. "/menu" -> "https://www.tinytreats.in/menu/"
 * E.g. "contact/" -> "https://www.tinytreats.in/contact/"
 */
export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!cleanPath) {
    return `${SITE_CONFIG.siteUrl}/`;
  }
  return `${SITE_CONFIG.siteUrl}/${cleanPath}/`;
}

export interface RouteSEOConfig {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  priority?: number;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  noIndex?: boolean;
}

export const ROUTES_SEO: Record<string, RouteSEOConfig> = {
  home: {
    path: "",
    title: "Tiny Treats | Fresh Homemade Cookies, Laddus & Wholesome Treats Hyderabad",
    description:
      "Order fresh homemade cookies, dry fruit laddus, no-maida treats and brownies from Tiny Treats in Hyderabad. Baked fresh with pure butter and natural sweeteners.",
    keywords: SITE_CONFIG.defaultKeywords,
    priority: 1.0,
    changeFrequency: "weekly",
  },
  menu: {
    path: "/menu",
    title: "Artisan Treats Menu — Ragi Cookies, Dry Fruit Laddus, Brownies",
    description:
      "Explore our authentic menu: No-maida Almond & Ragi Cookies, Calcium & Protein Laddus, Banana Bread, Fudgy Brownies, and Seed Crackers. Baked fresh in Hyderabad.",
    keywords: [
      "homemade cookies menu",
      "ragi cookies Hyderabad",
      "dry fruit laddu online",
      "calcium laddu for kids",
      "protein laddu homemade",
      "no maida brownies",
      "seed crackers online",
      "banana bread Hyderabad",
      "gluten free treats India",
    ],
    priority: 0.95,
    changeFrequency: "daily",
  },
  about: {
    path: "/about",
    title: "Our Story — A Mother's Home Baking Journey",
    description:
      "Discover how a mother's passion for wholesome lunchbox snacks grew into Tiny Treats — an artisan home bakery delivering pure homemade treats across India.",
    keywords: [
      "Tiny Treats story",
      "home baker Hyderabad",
      "healthy snacks for kids",
      "mother home bakery India",
      "wholesome ingredients story",
      "fresh artisan baking",
    ],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  gallery: {
    path: "/gallery",
    title: "Artisan Kitchen Gallery & Creations",
    description:
      "Explore photo highlights of Tiny Treats homemade cookies, festive gift hampers, nutritious laddus, and whole grain breads handcrafted in our Hyderabad kitchen.",
    keywords: [
      "homemade bakery gallery",
      "cookie hampers photo",
      "fresh baking pictures",
      "healthy treats gallery",
      "Tiny Treats photos",
    ],
    priority: 0.8,
    changeFrequency: "weekly",
  },
  contact: {
    path: "/contact",
    title: "Contact & Direct WhatsApp Orders Hyderabad",
    description:
      "Connect directly with Tiny Treats via WhatsApp (+91 93953 24365) or phone for fresh homemade cookies, customized celebration hampers, and pan-India express shipping.",
    keywords: [
      "contact Tiny Treats",
      "order homemade cookies WhatsApp",
      "custom baked hampers Hyderabad",
      "healthy bakery phone number",
      "fresh cookies delivery contact",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  cart: {
    path: "/cart",
    title: "Treat Basket & WhatsApp Order Summary",
    description:
      "Review your fresh homemade treat selections before direct consultation and baking schedule confirmation on WhatsApp with Tiny Treats.",
    priority: 0.5,
    changeFrequency: "monthly",
    noIndex: true,
  },
  privacyPolicy: {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "Read the Privacy Policy for Tiny Treats. Learn how we handle your contact information, order details, and data with complete privacy.",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  termsAndConditions: {
    path: "/terms-and-conditions",
    title: "Terms and Conditions",
    description:
      "Review the Terms and Conditions for ordering small-batch homemade cookies, laddus, and artisanal treats from Tiny Treats.",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  cookiePolicy: {
    path: "/cookie-policy",
    title: "Cookie Policy",
    description:
      "Learn about the cookies and storage technologies used on Tiny Treats to enhance your browsing experience and store your cart preferences.",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  thankYou: {
    path: "/thank-you",
    title: "Thank You — Tiny Treats",
    description:
      "Thank you for reaching out to Tiny Treats. We look forward to baking fresh for you!",
    priority: 0.4,
    changeFrequency: "monthly",
    noIndex: true,
  },
};

/**
 * Constructs standardized, production-ready Next.js Metadata with strict trailingSlash canonical normalization.
 */
export function constructMetadata(config: RouteSEOConfig): Metadata {
  const canonicalUrl = getCanonicalUrl(config.path);
  const ogImageUrl = config.ogImage || SITE_CONFIG.defaultOgImage;
  const fullOgImageUrl = ogImageUrl.startsWith("http")
    ? ogImageUrl
    : `${SITE_CONFIG.siteUrl}${ogImageUrl}`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords || SITE_CONFIG.defaultKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      siteName: SITE_CONFIG.siteName,
      title: config.title,
      description: config.description,
      url: canonicalUrl,
      images: [
        {
          url: fullOgImageUrl,
          width: 1200,
          height: 630,
          alt: `${config.title} | ${SITE_CONFIG.siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [fullOgImageUrl],
      creator: SITE_CONFIG.twitterHandle,
    },
    robots: config.noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
