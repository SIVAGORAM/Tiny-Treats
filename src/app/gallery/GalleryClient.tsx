"use client";

import React, { useState, useMemo } from "react";
import { ProtectedImage } from "@/components/ui/ProtectedImage";
import Link from "next/link";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import {
  Camera,
  Sparkles,
  MessageCircle,
  Heart,
  ChevronRight,
  Eye,
  X,
  ArrowRight,
  Gift,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { BotanicalDivider, BotanicalSprig } from "@/components/ui/BotanicalFlourish";
import { InstagramIcon } from "@/components/ui/SocialIcons";

const galleryCategories = [
  { id: "all", label: "All Moments" },
  { id: "our-treats", label: "Our Treats" },
  { id: "baking", label: "Baking & Ovens" },
  { id: "behind-the-scenes", label: "Behind the Scenes" },
  { id: "celebrations", label: "Celebrations & Gifts" },
];

export function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: GALLERY_ITEMS.length };
    galleryCategories.forEach((cat) => {
      if (cat.id !== "all") {
        counts[cat.id] = GALLERY_ITEMS.filter((item) => item.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pt-3 sm:pt-4 pb-6 sm:pb-8 bg-[#FFF8ED] min-h-screen select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
        
        {/* ── 1. Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5A321B]/70">
          <Link href="/" className="hover:text-[#B9573F] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="font-semibold text-[#5A321B]">Kitchen Gallery</span>
          {selectedCategory !== "all" && (
            <>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="text-[#B9573F] font-semibold">
                {galleryCategories.find((c) => c.id === selectedCategory)?.label}
              </span>
            </>
          )}
        </nav>

        {/* ── 2. Hero Header ── */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#FFFDF9] to-[#FAF2E4] border-2 border-[#D99A45]/30 p-4 sm:p-6 text-center space-y-2.5 sm:space-y-3 shadow-[0_12px_40px_rgba(90,50,27,0.06)] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[radial-gradient(ellipse_at_top,rgba(217,154,69,0.15),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E2C4]/80 border border-[#D99A45]/40 text-[#5A321B] text-xs font-bold uppercase tracking-widest shadow-2xs">
              <Camera className="w-3.5 h-3.5 text-[#D99A45]" />
              <span>Real Kitchen Moments • Artisan Stories</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3A1E0E] tracking-tight leading-snug">
              Little Moments. <span className="text-[#B9573F] italic font-normal">Freshly Baked with Love.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#5A321B]/80 font-light leading-relaxed max-w-xl mx-auto">
              Step inside our home kitchen. A photographic celebration of wholesome ingredients, warm oven aromas, and homemade treats made to be shared.
            </p>

            <div className="flex items-center justify-center gap-2 font-script text-lg text-[#D99A45] pt-0.5">
              <span>Pure ingredients. Honest preparation. Big Love.</span>
              <Heart className="w-3.5 h-3.5 text-[#B9573F] fill-[#B9573F] inline" />
            </div>
          </div>
        </div>

        {/* ── 3. Category Filter Tabs: Responsive Multi-line Wrapping ── */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-1">
          {galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = categoryCounts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-2xs cursor-pointer ${
                  isActive
                    ? "bg-[#5A321B] text-white shadow-md font-semibold scale-102"
                    : "bg-white text-[#5A321B] border border-[#5A321B]/12 hover:bg-[#F3E2C4]/50"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-[#D99A45] text-[#3A1E0E] font-bold" : "bg-[#FFF8ED] text-[#5A321B]/70"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── 4. Gallery Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl bg-white border border-[#5A321B]/12 overflow-hidden shadow-[0_4px_20px_rgba(90,50,27,0.04)] hover:shadow-[0_16px_36px_rgba(90,50,27,0.12)] hover:border-[#D99A45]/60 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative aspect-4/3 w-full bg-[#F3E2C4]/30 overflow-hidden flex items-center justify-center">
                <ProtectedImage
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[#5A321B] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-2xs border border-[#5A321B]/10">
                  {item.categoryLabel}
                </span>

                {/* Hover Zoom Prompt */}
                <div className="absolute inset-0 bg-[#5A321B]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#5A321B] font-semibold text-xs shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5 text-[#D99A45]" />
                    View Moment
                  </span>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#5A321B]/08 flex items-center justify-between gap-3">
                <div className="space-y-1 flex-1 min-w-0">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#3A1E0E] group-hover:text-[#B9573F] transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5A321B]/70 font-light line-clamp-1">
                    {item.caption}
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(`Hello Tiny Treats! 👋 I saw "${item.title}" in your Kitchen Gallery and would love to order it.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Order ${item.title} on WhatsApp`}
                  className="w-8 h-8 rounded-xl bg-[#66723A]/15 hover:bg-[#66723A] text-[#66723A] hover:text-white flex items-center justify-center shrink-0 transition-colors border border-[#66723A]/25"
                  title="Direct WhatsApp Order"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── 5. Instagram Community Callout Card ── */}
        <div className="max-w-3xl mx-auto w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#5A321B] via-[#4A2816] to-[#381F12] text-[#FFF8ED] p-5 sm:p-7 text-center space-y-3.5 shadow-[0_16px_40px_rgba(90,50,27,0.18)] relative overflow-hidden border border-[#D99A45]/30">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#D99A45]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-xl mx-auto space-y-2.5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#D99A45]/30 text-xs font-bold uppercase tracking-widest text-[#D99A45]">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Join Our Baking Community</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF8ED]">
              Follow Along on Instagram
            </h2>

            <p className="text-xs sm:text-sm text-[#FFF8ED]/80 font-light leading-relaxed">
              Watch live oven pulls, behind-the-scenes ingredient prep, and customer unboxing moments on our official Instagram page.
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://www.instagram.com/tinytreatsbyswetha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#B9573F] hover:bg-[#A34B35] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@tinytreatsbyswetha</span>
              </a>

              <a
                href={getWhatsAppUrl("Hello Tiny Treats! 👋 I browsed your gallery and would like to order fresh treats.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#66723A] hover:bg-[#566331] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ── 6. Full-Screen Photo Lightbox Modal ── */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-[#3A1E0E]/75 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveItem(null)}
          />

          <div className="relative w-full max-w-2xl bg-[#FFFDF9] text-[#2B211B] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.4)] overflow-hidden z-10 border-2 border-[#D99A45]/30 my-6">
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Close photo"
              className="absolute top-3.5 right-3.5 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#5A321B] shadow-sm flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-4/3 w-full bg-[#F3E2C4]/30">
              <ProtectedImage
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="(max-width: 672px) 100vw, 672px"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9573F] block mb-1">
                  {activeItem.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3A1E0E]">
                  {activeItem.title}
                </h3>
              </div>

              <p className="text-sm text-[#5A321B]/85 font-light leading-relaxed">
                {activeItem.caption}
              </p>

              <div className="pt-3 border-t border-[#5A321B]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#5A321B]/70 italic">
                  Baked fresh with love in our home kitchen.
                </span>

                <a
                  href={getWhatsAppUrl(`Hello Tiny Treats! 👋 I'm interested in ordering "${activeItem.title}" from your gallery.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#66723A] hover:bg-[#566331] text-white text-xs font-semibold shadow-xs transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
