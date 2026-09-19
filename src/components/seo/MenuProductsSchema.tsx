import React from "react";
import { PRODUCTS } from "@/data/products";
import { JsonLd } from "./json-ld";
import { SITE_CONFIG } from "@/lib/seo";

export function MenuProductsSchema() {
  const baseUrl = SITE_CONFIG.siteUrl;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tiny Treats Artisan Homemade Menu",
    description: "Full collection of fresh homemade cookies, nutrient-dense laddus, whole grain tea cakes, and seed crackers.",
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        "@id": `${baseUrl}/menu#${p.id}`,
        name: p.name,
        image: p.image.startsWith("http") ? p.image : `${baseUrl}${p.image}`,
        description: p.shortDescription || p.name,
        category: p.categoryLabel || p.category,
        brand: {
          "@type": "Brand",
          name: "Tiny Treats",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: p.price ? p.price.toString() : "0.00",
          availability: p.available !== false ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@type": "Bakery",
            name: "Tiny Treats by Swetha",
          },
        },
      },
    })),
  };

  return <JsonLd id="menu-products-schema" data={schema} />;
}

