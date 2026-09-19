"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCategory, Product } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";
import {
  Search,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Filter,
  X,
  ChevronRight,
  ShieldCheck,
  Gift,
  Leaf,
  Heart,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { BotanicalDivider, BotanicalSprig } from "@/components/ui/BotanicalFlourish";

type DietaryFilter = "all" | "no-maida" | "no-sugar" | "wellness" | "chocolate";

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = (searchParams.get("category") as ProductCategory) || "all";

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [selectedDietary, setSelectedDietary] = useState<DietaryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const categoryParam = searchParams.get("category") as ProductCategory;
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId: ProductCategory) => {
    setSelectedCategory(catId);
    if (catId === "all") {
      router.push("/menu", { scroll: false });
    } else {
      router.push(`/menu?category=${catId}`, { scroll: false });
    }
  };

  // Category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PRODUCTS.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== "all") {
        counts[cat.id] = PRODUCTS.filter((p) => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filter products by Category, Dietary tag, and Search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      let matchesDietary = true;
      if (selectedDietary === "no-maida") {
        matchesDietary = Boolean(
          product.attributes?.some((a) => a.toLowerCase().includes("no maida") || a.toLowerCase().includes("millet") || a.toLowerCase().includes("ragi") || a.toLowerCase().includes("jowar")) ||
          product.tags?.some((t) => t.toLowerCase().includes("no maida") || t.toLowerCase().includes("millet") || t.toLowerCase().includes("ragi"))
        );
      } else if (selectedDietary === "no-sugar") {
        matchesDietary = Boolean(
          product.name.toLowerCase().includes("no added sugar") ||
          product.shortDescription.toLowerCase().includes("no added sugar") ||
          product.tags?.some((t) => t.toLowerCase().includes("sugar") || t.toLowerCase().includes("dates") || t.toLowerCase().includes("jaggery")) ||
          product.attributes?.some((a) => a.toLowerCase().includes("sugar") || a.toLowerCase().includes("jaggery"))
        );
      } else if (selectedDietary === "wellness") {
        matchesDietary = Boolean(
          product.category === "laddus" ||
          product.name.toLowerCase().includes("calcium") ||
          product.name.toLowerCase().includes("protein") ||
          product.name.toLowerCase().includes("lactation")
        );
      } else if (selectedDietary === "chocolate") {
        matchesDietary = Boolean(
          product.category === "brownies" ||
          product.category === "cakes" ||
          product.name.toLowerCase().includes("brownie") ||
          product.name.toLowerCase().includes("chocolate")
        );
      }

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.categoryLabel?.toLowerCase().includes(query) ||
        product.tags?.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, selectedDietary, searchQuery]);

  return (
    <div className="py-6 sm:py-10 bg-[#FFF8ED] min-h-screen select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* ── 1. Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5A321B]/70">
          <Link href="/" className="hover:text-[#B9573F] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="font-semibold text-[#5A321B]">Menu</span>
          {selectedCategory !== "all" && (
            <>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="text-[#B9573F] font-semibold capitalize">
                {CATEGORIES.find((c) => c.id === selectedCategory)?.name || selectedCategory}
              </span>
            </>
          )}
        </nav>

        {/* ── 2. Compact Artisan Header & Control Bar ── */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF2E4] to-[#FFF8ED] border border-[#D99A45]/35 p-6 sm:p-8 shadow-[0_4px_20px_rgba(90,50,27,0.05)] overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-80 h-40 bg-[radial-gradient(ellipse_at_top_right,rgba(217,154,69,0.12),transparent_70%)] pointer-events-none" />

          {/* Header Title & Tagline */}
          <div className="max-w-2xl space-y-2 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF8ED] border border-[#D99A45]/40 text-[#5A321B] text-[11px] font-bold uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D99A45]" />
              <span>Fresh Small Batches • Baked to Order</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3A1E0E] tracking-tight leading-snug">
              Homemade. Wholesome. <span className="text-[#B9573F] italic font-normal">Honestly Delicious.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#5A321B]/80 font-light leading-relaxed">
              Prepared fresh in our home kitchen with real grains, pure butter, dry fruits, and zero preservatives.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="pt-2 border-t border-[#5A321B]/10 space-y-3.5 relative z-10">
            
            {/* Search Input Bar */}
            <div className="max-w-md relative">
              <Search className="w-4 h-4 text-[#5A321B]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cookies, laddus, cakes, brownies..."
                className="w-full h-10 pl-10 pr-9 rounded-xl bg-white border border-[#5A321B]/15 text-xs sm:text-sm text-[#3A1E0E] placeholder:text-[#5A321B]/45 focus:border-[#B9573F] focus:ring-2 focus:ring-[#B9573F]/20 outline-none shadow-2xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#5A321B]/10 hover:bg-[#5A321B]/20 text-[#5A321B] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count = categoryCounts[cat.id] || 0;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-all shrink-0 shadow-2xs cursor-pointer ${
                      isActive
                        ? "bg-[#5A321B] text-white shadow-xs font-semibold"
                        : "bg-white text-[#5A321B] border border-[#5A321B]/12 hover:bg-[#FFF8ED]"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                        isActive ? "bg-[#D99A45] text-[#3A1E0E] font-bold" : "bg-[#FFF8ED] text-[#5A321B]/70"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-xs">
              <span className="text-[#5A321B]/60 font-semibold uppercase tracking-wider text-[10px] mr-1 shrink-0">
                Dietary:
              </span>
              {[
                { id: "all", label: "All Treats" },
                { id: "no-maida", label: "🌾 No Maida" },
                { id: "no-sugar", label: "🍯 No Refined Sugar" },
                { id: "wellness", label: "⚡ Nourishment & Laddus" },
                { id: "chocolate", label: "🍫 Pure Chocolate" },
              ].map((diet) => {
                const isActive = selectedDietary === diet.id;
                return (
                  <button
                    key={diet.id}
                    onClick={() => setSelectedDietary(diet.id as DietaryFilter)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#B9573F] text-white font-semibold shadow-2xs"
                        : "bg-white text-[#5A321B]/80 border border-[#5A321B]/10 hover:bg-[#FFF8ED]"
                    }`}
                  >
                    {diet.label}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* ── 3. Active Results Counter Bar ── */}
        <div className="flex items-center justify-between pb-2 border-b border-[#5A321B]/10 text-xs text-[#5A321B]/75">
          <p>
            Showing <span className="font-bold text-[#3A1E0E]">{filteredProducts.length}</span> handcrafted treats
          </p>
          {(selectedCategory !== "all" || selectedDietary !== "all" || searchQuery !== "") && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedDietary("all");
                setSearchQuery("");
                router.push("/menu", { scroll: false });
              }}
              className="text-[#B9573F] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* ── 4. Product Grid ── */}
        <div>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 px-4 bg-white rounded-2xl border-2 border-dashed border-[#5A321B]/20 max-w-md mx-auto space-y-3">
              <span className="text-4xl block">🍪</span>
              <h3 className="font-serif text-lg font-bold text-[#3A1E0E]">
                No treats matched your filters
              </h3>
              <p className="text-xs text-[#5A321B]/70 leading-relaxed">
                Looking for a custom dietary request? We prepare bespoke batches on request!
              </p>
              <div className="flex items-center justify-center gap-2.5 pt-1">
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedDietary("all");
                    setSearchQuery("");
                    router.push("/menu", { scroll: false });
                  }}
                  className="px-4 py-2 rounded-xl bg-[#B9573F] text-white text-xs font-semibold hover:bg-[#A34B35] transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
                <a
                  href={getWhatsAppUrl("Hello Tiny Treats! 👋 I am looking for a custom homemade treat.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#66723A] text-white text-xs font-semibold hover:bg-[#566331] transition-colors"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  priorityImage={idx < 4}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── 5. Compact Promise & Ingredient Assurance Strip ── */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#D99A45]/30 p-6 sm:p-8 shadow-[0_4px_20px_rgba(90,50,27,0.04)] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#5A321B]/10 pb-3">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9573F] block">
                The Tiny Treats Quality Standard
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#3A1E0E]">
                Honest Ingredients, Prepared with Family Care
              </h2>
            </div>
            
            <span className="font-script text-base text-[#D99A45] hidden sm:inline">
              Pure. Wholesome. Fresh. ♡
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs text-[#3A1E0E]">
            <div className="p-3 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/08 flex items-center gap-2">
              <span className="text-[#66723A] font-bold text-sm">✓</span>
              <span className="font-medium text-[11px]">No Maida Range</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/08 flex items-center gap-2">
              <span className="text-[#66723A] font-bold text-sm">✓</span>
              <span className="font-medium text-[11px]">No Added Sugar</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/08 flex items-center gap-2">
              <span className="text-[#66723A] font-bold text-sm">✓</span>
              <span className="font-medium text-[11px]">No Artificial Colors</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/08 flex items-center gap-2">
              <span className="text-[#66723A] font-bold text-sm">✓</span>
              <span className="font-medium text-[11px]">Home Kitchen</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/08 flex items-center gap-2">
              <span className="text-[#66723A] font-bold text-sm">✓</span>
              <span className="font-medium text-[11px]">Small Batch Baked</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/08 flex items-center gap-2">
              <span className="text-[#66723A] font-bold text-sm">✓</span>
              <span className="font-medium text-[11px]">100% Vegetarian</span>
            </div>
          </div>
        </div>

        {/* ── 6. Custom Gifting & WhatsApp Concierge Banner ── */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#5A321B] via-[#4A2816] to-[#381F12] text-[#FFF8ED] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(90,50,27,0.15)] border border-[#D99A45]/30 relative overflow-hidden">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D99A45]">
              <Gift className="w-3.5 h-3.5" />
              <span>Custom Hampers & Bulk Orders</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF8ED]">
              Planning a Special Occasion or Gift Box?
            </h3>
            <p className="text-xs text-[#FFF8ED]/75 font-light max-w-xl">
              We curate customized celebration hampers for birthdays, weddings, baby showers, and festive gifting.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello Tiny Treats! 👋 I would like to inquire about custom gift hampers / celebration orders.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#66723A] hover:bg-[#566331] text-white font-semibold text-xs shadow-sm hover:scale-102 transition-all shrink-0 w-full md:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Custom Order on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export function MenuClient() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-[#5A321B]/70 font-serif text-base">Loading fresh treats...</div>}>
      <MenuContent />
    </Suspense>
  );
}
