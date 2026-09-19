"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cart-store";
import { ProductQuickView } from "./ProductQuickView";
import { ShoppingBag, Eye, Heart, Check, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

interface ProductCardProps {
  product: Product;
  priorityImage?: boolean;
}

export function ProductCard({ product, priorityImage = false }: ProductCardProps) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { items, addItem } = useCartStore();

  const inCartItem = items.find((item) => item.product.id === product.id);
  const inCartQty = inCartItem ? inCartItem.quantity : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1000);
  };

  const handleWhatsAppInquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = `*PRODUCT INQUIRY — Tiny Treats*\n────────────────────────────\nHello Tiny Treats! 👋\n\nI would like to check availability and order:\n• *${product.name}* (${product.weight || "Fresh Pack"})\n\nThank you!`;
    window.open(getWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <article
        onClick={() => setQuickViewOpen(true)}
        className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#5A321B]/12 overflow-hidden shadow-[0_4px_20px_rgba(90,50,27,0.04)] hover:shadow-[0_16px_36px_rgba(90,50,27,0.12)] hover:border-[#D99A45]/60 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer select-none w-full h-full"
      >
        {/* ── Top Image Container ── */}
        <div className="relative aspect-4/3 w-full bg-[#F3E2C4]/30 overflow-hidden flex items-center justify-center">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority={priorityImage}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-[#FAF0EC] border border-[#EADBCA] flex items-center justify-center text-[#B9573F] shadow-2xs group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-[#B9573F]" />
            </div>
          )}

          {/* Gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />

          {/* Top Badges / Wishlist */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
            {product.badge ? (
              <span className="px-3 py-1 rounded-full bg-[#B9573F] text-white text-[11px] font-bold tracking-wide shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#F3E2C4]" />
                {product.badge}
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-white/95 text-[#5A321B] text-[10px] font-semibold tracking-wide backdrop-blur-md shadow-2xs border border-[#5A321B]/10">
                {product.categoryLabel}
              </span>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-md text-[#5A321B] hover:text-[#B9573F] flex items-center justify-center shadow-xs transition-colors hover:scale-110 active:scale-95 cursor-pointer"
            >
              <Heart
                className={`w-4 h-4 transition-transform ${
                  isWishlisted ? "text-[#B9573F] fill-[#B9573F]" : "text-[#5A321B]/60"
                }`}
              />
            </button>
          </div>

          {/* Quick View Desktop Hover Pill */}
          <div className="absolute inset-0 bg-[#5A321B]/25 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#5A321B] font-semibold text-xs shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5 text-[#D99A45]" />
              Quick View
            </span>
          </div>
        </div>

        {/* ── Card Body / Details ── */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9573F]">
                {product.categoryLabel}
              </span>
              {product.weight && (
                <span className="px-2 py-0.5 rounded-full bg-[#FFF8ED] text-[#5A321B]/80 text-[10px] font-medium border border-[#5A321B]/10">
                  {product.weight}
                </span>
              )}
            </div>

            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3A1E0E] group-hover:text-[#B9573F] transition-colors leading-snug min-h-[2.8rem] flex items-start">
              {product.name}
            </h3>

            <p className="text-xs text-[#5A321B]/75 leading-relaxed font-light line-clamp-2">
              {product.shortDescription}
            </p>
          </div>

          {/* Attribute chips */}
          {product.attributes && product.attributes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {product.attributes.slice(0, 2).map((attr, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-[#FFF8ED] text-[#5A321B] text-[10px] font-medium border border-[#5A321B]/10 flex items-center gap-1"
                >
                  <span className="text-[#66723A] font-bold">✓</span> {attr}
                </span>
              ))}
            </div>
          )}

          {/* ── Bottom Row: Price & Actions ── */}
          <div className="pt-3 border-t border-[#5A321B]/10 flex items-center justify-between gap-2">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#5A321B]/60 block font-medium">
                {product.price > 0 ? "Price" : "Fresh Batch"}
              </span>
              <span className="font-serif font-bold text-[#3A1E0E] text-base">
                {product.price > 0 ? `₹${product.price.toLocaleString("en-IN")}` : (product.priceLabel || "Price on Request")}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {/* WhatsApp direct button */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                aria-label={`Order ${product.name} on WhatsApp`}
                className="w-9 h-9 rounded-xl bg-[#66723A]/15 hover:bg-[#66723A] text-[#66723A] hover:text-white flex items-center justify-center transition-all border border-[#66723A]/25"
                title="Direct WhatsApp Order"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </button>

              {/* Add to Cart button */}
              <button
                type="button"
                onClick={handleAddToCart}
                aria-label={`Add ${product.name} to basket`}
                className={`flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-xl text-xs font-semibold shadow-2xs transition-all ${
                  inCartQty > 0
                    ? justAdded
                      ? "bg-[#526A3A] text-white scale-95 ring-2 ring-[#9FD468]"
                      : "bg-[#66723A] hover:bg-[#526A3A] text-white hover:scale-102 active:scale-95"
                    : justAdded
                    ? "bg-[#66723A] text-white scale-95"
                    : "bg-[#B9573F] hover:bg-[#A34B35] text-white hover:scale-102 active:scale-95"
                }`}
                title={inCartQty > 0 ? "In basket — click to add another" : "Add to basket"}
              >
                {inCartQty > 0 ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#C0D880]" />
                    <span>Added ({inCartQty})</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Quick View Modal */}
      <ProductQuickView
        product={product}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  );
}
