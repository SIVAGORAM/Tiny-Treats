export interface HeroBadge {
  label: string;
  icon: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  headlineMain: string;
  headlineAccent: string;
  description: string;
  productTag: string;
  supportingLine: string;
  image: string;
  badges: HeroBadge[];
  ctaText: string;
  ctaLink: string;
  stickerText: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "01",
    eyebrow: "SIGNATURE HOMEMADE",
    headlineMain: "Small Treats.",
    headlineAccent: "Big Love.",
    description:
      "Crunchy, nutty almond cookies, freshly baked in small batches with carefully selected ingredients.",
    productTag: "Almond Cookies",
    supportingLine: "Crunchy • Nutty • Homemade",
    image: "/hero/almond-cookies.jpg",
    badges: [
      { label: "No Maida*", icon: "✓" },
      { label: "No Added Sugar*", icon: "✓" },
      { label: "No Artificial Colours", icon: "✓" },
      { label: "Homemade with Love", icon: "✓" },
    ],
    ctaText: "Explore Our Treats",
    ctaLink: "/menu?category=cookies",
    stickerText: "Good Food Happier Families ♡",
  },
  {
    id: "02",
    eyebrow: "NOURISHING HOMEMADE",
    headlineMain: "Nourishment",
    headlineAccent: "in Every Bite.",
    description:
      "Wholesome homemade laddus prepared with carefully selected nuts, seeds, and protein-focused ingredients.",
    productTag: "Protein Laddu",
    supportingLine: "Wholesome • Nutty • Homemade",
    image: "/hero/protein-laddu.jpg",
    badges: [
      { label: "No Maida*", icon: "✓" },
      { label: "100% Wholesome", icon: "✓" },
      { label: "Nutrient Packed", icon: "✓" },
      { label: "Homemade with Love", icon: "✓" },
    ],
    ctaText: "Explore Our Treats",
    ctaLink: "/menu?category=laddus",
    stickerText: "Good Food Happier Days ♡",
  },
  {
    id: "03",
    eyebrow: "CRISPY & WHOLESOME",
    headlineMain: "Crunch",
    headlineAccent: "Made Better.",
    description:
      "Crispy, savoury seed crackers made with a thoughtful blend of seeds for a delicious everyday snack.",
    productTag: "Seed Crackers",
    supportingLine: "Crispy • Savoury • Seed-Packed",
    image: "/hero/seed-crackers.jpg",
    badges: [
      { label: "Gluten Conscious", icon: "✓" },
      { label: "5-Seed Blend", icon: "✓" },
      { label: "Stays Extra Crispy", icon: "✓" },
      { label: "Homemade with Love", icon: "✓" },
    ],
    ctaText: "Explore Our Treats",
    ctaLink: "/menu?category=seed-crackers",
    stickerText: "Wholesome Snacks Happier Days ♡",
  },
  {
    id: "04",
    eyebrow: "FRESHLY HOMEMADE",
    headlineMain: "Goodness",
    headlineAccent: "You Can Slice.",
    description:
      "Hearty homemade millet bread, finished with wholesome seeds and baked fresh in small batches.",
    productTag: "Millet Bread",
    supportingLine: "Hearty • Fresh • Wholesome",
    image: "/hero/millet-bread-artisan.jpg",
    badges: [
      { label: "Ancient Millets", icon: "✓" },
      { label: "Soft & Hearty", icon: "✓" },
      { label: "No Preservatives", icon: "✓" },
      { label: "Baked Fresh Daily", icon: "✓" },
    ],
    ctaText: "Explore Our Treats",
    ctaLink: "/menu?category=breads",
    stickerText: "Good Food Good Mood ♡",
  },
  {
    id: "05",
    eyebrow: "HOMEMADE INDULGENCE",
    headlineMain: "A Little",
    headlineAccent: "Chocolate Happiness.",
    description:
      "Rich, fudgy homemade brownies generously finished with walnuts for a deliciously satisfying treat.",
    productTag: "Walnut Brownie",
    supportingLine: "Rich • Fudgy • Chocolatey",
    image: "/hero/walnut-brownie.jpg",
    badges: [
      { label: "Rich Dark Cocoa", icon: "✓" },
      { label: "Premium Walnuts", icon: "✓" },
      { label: "Fudgy & Moist", icon: "✓" },
      { label: "Pure Indulgence", icon: "✓" },
    ],
    ctaText: "Explore Our Treats",
    ctaLink: "/menu?category=brownies",
    stickerText: "Sweet Moments Happier Days ♡",
  },
];
