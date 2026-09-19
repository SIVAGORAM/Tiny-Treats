import React from "react";
import { PRODUCTS } from "@/data/products";

export function MenuProductsSchema() {
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
        "@id": `https://www.tinytreats.in/menu#${p.id}`,
        name: p.name,
        image: p.image.startsWith("http") ? p.image : `https://www.tinytreats.in${p.image}`,
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
