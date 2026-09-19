import React from "react";
import { JsonLd } from "./json-ld";

export function FAQSchema() {
  const faqs = [
    {
      q: "Are Tiny Treats cookies made without refined flour (maida)?",
      a: "Yes! Our signature cookies and crackers are crafted using 100% wholesome whole wheat, ragi (finger millet), and jowar flours. We prioritize authentic grains, real butter, and zero refined maida across our healthy range.",
    },
    {
      q: "How do I order fresh homemade treats in Hyderabad?",
      a: "You can browse our menu on the website, select your treats, and click 'Order on WhatsApp' to connect directly with Tiny Treats. We bake every batch fresh upon order confirmation with local delivery across Hyderabad.",
    },
    {
      q: "Does Tiny Treats deliver cookies and laddus across India?",
      a: "Yes, we carefully package dry treats such as ragi cookies, seed crackers, dry fruit laddus, and protein laddus in food-grade airtight containers for express courier dispatch pan-India.",
    },
    {
      q: "Are Tiny Treats laddus and cakes prepared with white sugar or natural sweeteners?",
      a: "We offer special guilt-free treats sweetened exclusively with premium dates and unrefined jaggery, with zero added refined white sugar or artificial chemical sweeteners.",
    },
    {
      q: "What is the shelf life of Tiny Treats homemade cookies and laddus?",
      a: "Our dry cookies, seed crackers, and laddus stay fresh and crunchy for 15 to 30 days when stored in an airtight container at room temperature. Fresh breads and cakes are best enjoyed within 3 to 5 days.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return <JsonLd id="faq-schema" data={schema} />;
}

