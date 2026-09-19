import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";

export function FeaturedTreats() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="pt-3 sm:pt-4 pb-4 sm:pb-6 bg-[#FFF8ED] border-t border-brand-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-brown/10 text-xs font-bold uppercase tracking-widest text-brand-terracotta">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Signature Treats</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown">
              Fresh from Our Kitchen
            </h2>
            <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
              Handcrafted in small batches with thoughtfully selected ingredients.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-terracotta hover:text-[#A34B35] group"
          >
            <span>See All Treats</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <ProductGrid products={featured} columns={4} />
      </div>
    </section>
  );
}
