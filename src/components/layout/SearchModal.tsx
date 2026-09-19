"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCartStore } from "@/store/cart-store";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.ingredients?.some((ing) => ing.toLowerCase().includes(query.toLowerCase())) ||
          p.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : PRODUCTS.slice(0, 6); // default popular items

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-24 px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#FFF8ED] rounded-3xl border border-brand-brown/15 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-brand-brown/10 bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-brand-gold shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search healthy cookies, laddus, artisan breads, seed crackers..."
            className="w-full bg-transparent text-brand-brown placeholder:text-brand-muted/70 text-sm sm:text-base outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-brand-muted hover:text-brand-brown"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-brand-beige/50 text-brand-brown hover:bg-brand-beige text-xs font-semibold px-3"
          >
            Esc
          </button>
        </div>

        {/* Results / Suggestions List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between text-xs text-brand-muted font-medium px-1">
            <span>
              {query.trim()
                ? `Found ${filteredProducts.length} treats for "${query}"`
                : "Popular Signature Treats"}
            </span>
            <span className="text-brand-gold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Fresh Daily
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-brand-brown/10 hover:border-brand-gold/50 hover:shadow-subtle transition-all group"
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-brand-cream shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-bold text-brand-brown truncate">
                    {product.name}
                  </h4>
                  <p className="text-[11px] text-brand-muted truncate">
                    {product.shortDescription}
                  </p>
                  <span className="inline-block mt-0.5 text-[10px] px-2 py-0.2 rounded-full bg-brand-cream text-brand-terracotta font-semibold">
                    {product.categoryLabel || product.category}
                  </span>
                </div>
                <Link
                  href={`/menu#${product.id}`}
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-brown group-hover:bg-brand-sage group-hover:text-white transition-colors shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-10 space-y-2">
              <p className="text-sm font-serif font-bold text-brand-brown">
                No treats matched your search
              </p>
              <p className="text-xs text-brand-muted">
                Try searching for &quot;Almond&quot;, &quot;Ragi&quot;, &quot;Bread&quot;, or &quot;Laddu&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Footer Quick Links */}
        <div className="p-3 bg-brand-beige/30 border-t border-brand-brown/10 flex items-center justify-between text-xs px-6">
          <Link
            href="/menu"
            onClick={onClose}
            className="text-brand-terracotta font-semibold hover:underline flex items-center gap-1"
          >
            Explore Full Menu →
          </Link>
          <span className="text-brand-muted text-[11px]">
            Homemade in Small Batches
          </span>
        </div>
      </div>
    </div>
  );
}
