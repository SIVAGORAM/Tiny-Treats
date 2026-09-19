export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Tiny Treats by Shweta",
    url: "https://www.tinytreats.in",
    sameAs: [
      "https://www.instagram.com/tinytreatsbyswetha",
      "https://www.facebook.com/profile.php?id=61592823341135",
      "https://x.com/tinytreatsbys",
      "https://www.linkedin.com/in/tinay-treats-by-swetha-a09202383/",
    ],
    description:
      "Homemade cookies, laddus, cakes, brownies and seed crackers made in small batches with thoughtfully selected ingredients.",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
