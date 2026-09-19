import React from "react";
import { BRAND_PHONE, BRAND_EMAIL, BRAND_SOCIALS } from "@/lib/whatsapp";
import { CATEGORIES } from "@/data/products";
import { JsonLd } from "./json-ld";
import { SITE_CONFIG } from "@/lib/seo";

export function BakerySchema() {
  const baseUrl = SITE_CONFIG.siteUrl;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Tiny Treats",
        alternateName: ["Tiny Treats by Swetha", "Tiny Treats Bakery"],
        description: "Small-batch homemade cookies, dry fruit laddus, healthy brownies and seed crackers crafted in Hyderabad.",
        publisher: {
          "@id": `${baseUrl}/#bakery`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "Bakery",
        "@id": `${baseUrl}/#bakery`,
        name: "Tiny Treats by Swetha",
        alternateName: "Tiny Treats",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/favicon.png`,
          caption: "Tiny Treats Logo",
        },
        image: `${baseUrl}/og/tiny-treats-og.jpg`,
        telephone: BRAND_PHONE,
        email: BRAND_EMAIL,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "UPI, Cash on Delivery, Bank Transfer",
        servesCuisine: [
          "Homemade Bakery",
          "Millet Cookies",
          "No Maida Cookies",
          "Dry Fruit Laddus",
          "Healthy Brownies",
          "Artisanal Tea Cakes",
        ],
        description:
          "Artisanal small-batch home bakery in Hyderabad. We handcraft authentic wholesome treats with pure butter, whole grains, seeds, and unrefined sweeteners without industrial preservatives.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "17.3850",
          longitude: "78.4867",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Hyderabad",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],
        sameAs: [
          BRAND_SOCIALS.instagram,
          BRAND_SOCIALS.facebook,
          BRAND_SOCIALS.twitter,
          BRAND_SOCIALS.linkedin,
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Tiny Treats Homemade Menu",
          itemListElement: CATEGORIES.filter((c) => c.id !== "all").map((cat) => ({
            "@type": "OfferCatalog",
            name: cat.name,
            description: cat.description,
          })),
        },
      },
    ],
  };

  return <JsonLd id="bakery-schema" data={schema} />;
}

