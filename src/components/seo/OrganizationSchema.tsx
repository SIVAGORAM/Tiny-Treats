import { BRAND_PHONE, BRAND_EMAIL, BRAND_SOCIALS } from "@/lib/whatsapp";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Tiny Treats by Shweta",
    alternateName: "Tiny Treats",
    url: "https://www.tinytreats.in",
    logo: "https://www.tinytreats.in/favicon.png",
    image: "https://www.tinytreats.in/og/tiny-treats-og.jpg",
    telephone: BRAND_PHONE,
    email: BRAND_EMAIL,
    priceRange: "₹₹",
    description:
      "Artisanal small-batch homemade cookies, laddus, tea cakes, brownies and seed crackers crafted in Hyderabad with pure butter and real wholesome grains.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [
      BRAND_SOCIALS.instagram,
      BRAND_SOCIALS.facebook,
      BRAND_SOCIALS.twitter,
      BRAND_SOCIALS.linkedin,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
