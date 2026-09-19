import { BRAND_PHONE, BRAND_EMAIL, BRAND_SOCIALS } from "./whatsapp";
import { SITE_CONFIG } from "./seo";

export const BRAND_CONTENT = {
  name: "Tiny Treats",
  legalName: "Tiny Treats by Swetha",
  founder: "Swetha",
  slogan: "No Junk, Just Goodness — Baked Fresh with Love",
  description:
    "Artisanal small-batch home bakery in Hyderabad. Handcrafting authentic wholesome cookies, laddus, tea cakes, and seed crackers with pure butter, whole grains, and zero industrial preservatives.",
  url: SITE_CONFIG.siteUrl,
  logo: `${SITE_CONFIG.siteUrl}/logo.png`,
  icon: `${SITE_CONFIG.siteUrl}/favicon.png`,
  ogImage: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`,
  contact: {
    telephone: BRAND_PHONE,
    email: BRAND_EMAIL,
    contactType: "Customer Support & Orders",
    areaServed: ["IN", "Hyderabad"],
    availableLanguage: ["English", "Hindi", "Telugu"],
  },
  address: {
    streetAddress: "Artisan Kitchen, Jubilee Hills",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500033",
    addressCountry: "IN",
  },
  geo: {
    latitude: 17.4319,
    longitude: 78.4073,
  },
  socials: [
    BRAND_SOCIALS.instagram,
    BRAND_SOCIALS.facebook,
    BRAND_SOCIALS.twitter,
    BRAND_SOCIALS.linkedin,
  ],
  application: {
    name: "Tiny Treats Web Order Portal",
    applicationCategory: "ShoppingApplication",
    operatingSystem: "All Web Platforms (iOS, Android, Windows, macOS, Linux)",
    applicationSubCategory: "Bakery & Food Ordering Platform",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "2.0.0",
    features: [
      "Real-time Small-Batch Bakery Availability",
      "Instant WhatsApp Direct Baker Concierge",
      "Custom Gifting & Celebration Box Builder",
      "Offline Resilient Recipe & Menu Catalog",
    ],
  },
};
