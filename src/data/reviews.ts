export interface ReviewItem {
  id: string;
  product: string;
  category: "cookies" | "laddus" | "breads" | "seed-crackers" | "experience";
  rating: number;
  quote: string;
  author: string;
  tag: string;
  badge?: string;
}

export interface ReviewPillar {
  title: string;
  description: string;
  icon: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    product: "Dry Fruit Laddu",
    category: "laddus",
    rating: 5,
    quote:
      "My kids usually don't eat dry fruits, but they loved these laddus and started eating them on their own. It made things so much easier for me!",
    author: "Parent & Regular Customer",
    tag: "Kid-Approved Snacking",
    badge: "Family Favourite",
  },
  {
    id: "rev-2",
    product: "Seed Crackers",
    category: "seed-crackers",
    rating: 5,
    quote:
      "The seed crackers stayed crispy and tasty even after more than four days. Everyone at home tasted them and loved them!",
    author: "Verified Customer Feedback",
    tag: "Crunchy & Fresh",
    badge: "Long-Lasting Freshness",
  },
  {
    id: "rev-3",
    product: "Ragi Cookies",
    category: "cookies",
    rating: 5,
    quote:
      "I tried the Ragi Cookies and really loved the taste and homemade feel. They were a delicious and wholesome snack.",
    author: "Verified Customer Feedback",
    tag: "Wholesome Goodness",
    badge: "Millet Special",
  },
  {
    id: "rev-4",
    product: "Ragi Laddu",
    category: "laddus",
    rating: 5,
    quote:
      "The Ragi Laddoos were wonderful. The taste and texture were really enjoyable, and I loved the homemade quality.",
    author: "Verified Customer Feedback",
    tag: "Homemade Quality",
    badge: "Traditional Taste",
  },
  {
    id: "rev-5",
    product: "Homemade Bread",
    category: "breads",
    rating: 5,
    quote:
      "I tried the bread along with the other treats and really enjoyed it. The bread had a lovely soft texture and tasted delicious.",
    author: "Verified Customer Feedback",
    tag: "Soft & Fresh",
    badge: "Freshly Baked Loaf",
  },
  {
    id: "rev-6",
    product: "Tiny Treats Experience",
    category: "experience",
    rating: 5,
    quote:
      "Everything was made with such care. The snacks were tasty, light and satisfying. Wishing Tiny Treats lots of success!",
    author: "Verified Customer Feedback",
    tag: "Light & Satisfying",
    badge: "Heartwarming Care",
  },
  {
    id: "rev-7",
    product: "A Customer Favourite",
    category: "experience",
    rating: 5,
    quote:
      "The snacks were light and crispy, and the taste was really good. Definitely something I would enjoy having again.",
    author: "Verified Customer Feedback",
    tag: "Crispy & Delicious",
    badge: "Repeat Choice",
  },
];

export const REVIEW_PILLARS: ReviewPillar[] = [
  {
    title: "Homemade Taste",
    description: "Customers appreciate the authentic fresh, homemade character and warmth baked into every single order.",
    icon: "home",
  },
  {
    title: "Wholesome Ingredients",
    description: "Our customers love the thoughtful combination of premium nuts, seeds, ancient grains and clean ingredients.",
    icon: "leaf",
  },
  {
    title: "Fresh & Delicious",
    description: "From crunchy crackers to soft artisan breads and melt-in-mouth laddus, every product is prepared with utmost care.",
    icon: "sparkles",
  },
  {
    title: "Family Friendly",
    description: "Some of our happiest feedback comes from parents — especially when little ones discover their new favourite healthy snack.",
    icon: "heart",
  },
];
