import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { CategoryCard } from "@/components/products/CategoryCard";

interface CategoryMeta {
  emoji: string;
  image: string;
  badge: string;
  itemCount: string;
  accentColor: string;
  bgLight: string;
}

const categoryMetadata: Record<string, CategoryMeta> = {
  cookies: {
    emoji: "🍪",
    image: "/gallery/almond-cookies-fresh.jpg",
    badge: "Crisp & Nutty",
    itemCount: "4 Signature Treats",
    accentColor: "#B85843",
    bgLight: "#FAF0EC",
  },
  laddus: {
    emoji: "🥜",
    image: "/gallery/protein-laddu.jpg",
    badge: "High Protein",
    itemCount: "4 Nourishing Treats",
    accentColor: "#D49942",
    bgLight: "#FAF4E8",
  },
  "seed-crackers": {
    emoji: "🌱",
    image: "/gallery/seed-crackers.jpg",
    badge: "5-Seed Blend",
    itemCount: "Gluten-Conscious",
    accentColor: "#586E3C",
    bgLight: "#F0F5EB",
  },
  breads: {
    emoji: "🍞",
    image: "/hero/millet-bread-artisan.jpg",
    badge: "100% Millet",
    itemCount: "3 Artisan Loaves",
    accentColor: "#8C6D53",
    bgLight: "#F5ECE1",
  },
  cakes: {
    emoji: "🍰",
    image: "/gallery/whole-wheat-cake.jpg",
    badge: "No Refined Sugar",
    itemCount: "2 Wholesome Bakes",
    accentColor: "#B85843",
    bgLight: "#FAF0EC",
  },
  brownies: {
    emoji: "🍫",
    image: "/gallery/walnut-brownie.jpg",
    badge: "Dark Cocoa & Walnut",
    itemCount: "2 Fudgy Bakes",
    accentColor: "#4A2E1C",
    bgLight: "#F2EAE4",
  },
};

export function FeaturedCategories() {
  const displayCategories = CATEGORIES.filter((c) => c.id !== "all");

  return (
    <section className="pt-3 sm:pt-4 pb-4 sm:pb-6 bg-[#FFF8ED] relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-[#FAF0EC]/60 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-[#F0F5EB]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-5">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-center md:text-left">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EADBCA] shadow-2xs text-xs font-bold uppercase tracking-widest text-[#B85843]">
              <Sparkles className="w-3.5 h-3.5 text-[#D49942]" />
              <span>EXPLORE OUR TREATS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3D2314] tracking-tight leading-[1.15]">
              A Little Taste of Tiny Treats. <br />
              <span className="text-[#B85843] font-serif italic font-normal">
                Crafted with Thought & Love.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#7C6B5E] font-light leading-relaxed">
              Wholesome homemade choices prepared with carefully selected ingredients — free from refined maida and chemical additives.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-6 sm:px-7 rounded-full bg-[#3D2314] hover:bg-[#2A180D] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all self-center md:self-end shrink-0 group transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Complete Menu</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#E7CA9F]" />
          </Link>
        </div>

        {/* 6 Luxury Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayCategories.map((category) => {
            const meta = categoryMetadata[category.id] || {
              emoji: "🍪",
              image: "/gallery/lactation-cookies.jpg",
              badge: "Signature",
              itemCount: "Wholesome",
              accentColor: "#B85843",
              bgLight: "#FAF0EC",
            };

            return (
              <CategoryCard
                key={category.id}
                category={category}
                emoji={meta.emoji}
                image={meta.image}
                badge={meta.badge}
                itemCount={meta.itemCount}
                accentColor={meta.accentColor}
                bgLight={meta.bgLight}
              />
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="text-center pt-0.5">
          <p className="font-script text-xl sm:text-2xl text-[#5A3825]">
            Every batch is baked fresh in our home kitchen. No artificial colours, no preservatives. ♡
          </p>
        </div>

      </div>
    </section>
  );
}
