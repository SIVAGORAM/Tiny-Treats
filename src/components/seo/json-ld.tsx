import React from "react";
import { BRAND_CONTENT } from "@/lib/content";
import { SITE_CONFIG } from "@/lib/seo";

export type SchemaObject = Record<string, unknown> | Array<Record<string, unknown>>;

export interface JsonLdProps {
  data: SchemaObject;
  id?: string;
}

/**
 * Safely stringifies schema objects for JSON-LD script injection.
 * Escapes `<` to `\u003c` to completely eliminate XSS injection risks
 * while maintaining 100% server-to-client SSR/RSC hydration compatibility.
 */
export function safeJsonLdStringify(data: SchemaObject): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * Standard JSON-LD Schema.org Injection Component for React 19 & Next.js 16 App Router.
 */
export function JsonLd({ data, id }: JsonLdProps) {
  if (!data) return null;

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLdStringify(data),
      }}
    />
  );
}

/**
 * Dynamic Organization & Corporation Schema Generator
 * Fully compliant with Schema.org / Google Knowledge Graph / Rich Results standards.
 */
export function getOrganizationSchema() {
  const baseUrl = SITE_CONFIG.siteUrl;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: BRAND_CONTENT.name,
    legalName: BRAND_CONTENT.legalName,
    alternateName: ["Tiny Treats by Swetha", "Tiny Treats Hyderabad"],
    slogan: BRAND_CONTENT.slogan,
    description: BRAND_CONTENT.description,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      url: BRAND_CONTENT.logo,
      caption: `${BRAND_CONTENT.name} Brand Logo`,
      inLanguage: "en-IN",
    },
    image: BRAND_CONTENT.ogImage,
    telephone: BRAND_CONTENT.contact.telephone,
    email: BRAND_CONTENT.contact.email,
    founder: {
      "@type": "Person",
      name: BRAND_CONTENT.founder,
      jobTitle: "Founder & Master Baker",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND_CONTENT.address.streetAddress,
      addressLocality: BRAND_CONTENT.address.addressLocality,
      addressRegion: BRAND_CONTENT.address.addressRegion,
      postalCode: BRAND_CONTENT.address.postalCode,
      addressCountry: BRAND_CONTENT.address.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BRAND_CONTENT.contact.telephone,
        email: BRAND_CONTENT.contact.email,
        contactType: BRAND_CONTENT.contact.contactType,
        areaServed: BRAND_CONTENT.contact.areaServed,
        availableLanguage: BRAND_CONTENT.contact.availableLanguage,
      },
    ],
    sameAs: BRAND_CONTENT.socials,
  };
}

/**
 * Dynamic SoftwareApplication & WebApplication Schema Generator
 * Represents the Tiny Treats web application, order portal, and interactive store.
 */
export function getHcmSoftwareSchema() {
  const baseUrl = SITE_CONFIG.siteUrl;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${baseUrl}/#software`,
    name: BRAND_CONTENT.application.name,
    alternateName: "Tiny Treats Online Store & Order Portal",
    applicationCategory: BRAND_CONTENT.application.applicationCategory,
    applicationSubCategory: BRAND_CONTENT.application.applicationSubCategory,
    operatingSystem: BRAND_CONTENT.application.operatingSystem,
    browserRequirements: BRAND_CONTENT.application.browserRequirements,
    softwareVersion: BRAND_CONTENT.application.softwareVersion,
    description:
      "Interactive web application and online menu portal for ordering fresh, wholesome homemade cookies, laddus, and artisanal bakery treats in Hyderabad.",
    url: baseUrl,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      category: "Free Web Application",
    },
    featureList: BRAND_CONTENT.application.features,
    inLanguage: "en-IN",
  };
}

/**
 * Alias for getHcmSoftwareSchema for semantic clarity
 */
export const getWebApplicationSchema = getHcmSoftwareSchema;

/**
 * Dynamic BreadcrumbList Schema Generator for subpages
 */
export interface BreadcrumbItemInput {
  name: string;
  url: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItemInput[]) {
  const baseUrl = SITE_CONFIG.siteUrl;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: item.name,
        item: item.url.startsWith("http")
          ? item.url
          : `${baseUrl}${item.url.startsWith("/") ? item.url : `/${item.url}`}`,
      })),
    ],
  };
}

export default JsonLd;
