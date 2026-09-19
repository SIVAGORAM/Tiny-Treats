"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cart-store";
import { QuantitySelector } from "./QuantitySelector";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { X, ShoppingBag, Sparkles, Check, Heart, ShieldCheck, Leaf } from "lucide-react";
import { BotanicalSprig } from "@/components/ui/BotanicalFlourish";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductQuickView({ product, isOpen, onClose }: ProductQuickViewProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCartStore();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 600);
  };

  const directWhatsAppMsg = `Hello Tiny Treats! 👋\n\nI'm interested in ordering:\n*${product.name}* (Qty: ${quantity}, Pack: ${product.weight || "Standard"})\n\nPlease let me know the availability and fresh batch timing. Thank you! ❤️`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#3A1E0E]/65 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
        className="relative w-full max-w-2xl lg:max-w-3xl bg-[#FFFDF9] text-[#2B211B] rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.3)] overflow-hidden z-10 border-2 border-[#D99A45]/30 my-auto max-h-[92vh] sm:max-h-[88vh] flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-3 right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-[#5A321B] shadow-sm flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer border border-[#5A321B]/15"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Left: Product Media */}
        <div className="relative w-full md:w-5/12 bg-[#F3E2C4]/40 h-44 sm:h-56 md:h-auto md:min-h-[400px] flex items-center justify-center p-4 overflow-hidden shrink-0">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover"
            />
          ) : (
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/80 border border-[#EADBCA] flex items-center justify-center text-[#B9573F] shadow-sm">
                <Sparkles className="w-8 h-8 text-[#B9573F]" />
              </div>
              <span className="inline-block px-3 py-0.5 rounded-full bg-white/90 text-[#5A321B] text-[11px] font-semibold shadow-2xs">
                {product.categoryLabel}
              </span>
            </div>
          )}

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#B9573F] text-white text-[11px] font-bold shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#F3E2C4]" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Right: Product Details & Actions */}
        <div className="p-4 sm:p-6 md:p-7 flex-1 flex flex-col justify-between overflow-y-auto space-y-4">
          <div className="space-y-3">
            {/* Category & Title with padding to prevent collision with close button */}
            <div className="pr-8 sm:pr-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9573F] block mb-0.5">
                {product.categoryLabel}
              </span>
              <h3 id="quick-view-title" className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] leading-snug">
                {product.name}
              </h3>
            </div>

            {/* Price & Weight */}
            <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#5A321B]/10">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E]">
                {product.price > 0 ? `₹${product.price.toLocaleString("en-IN")}` : (product.priceLabel || "Price on Request")}
              </span>
              {product.weight && (
                <span className="text-xs text-[#5A321B]/75 font-medium px-2.5 py-0.5 rounded-full bg-[#FFF8ED] border border-[#5A321B]/10">
                  Pack: {product.weight}
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-[#5A321B]/85 leading-relaxed font-light">
              {product.shortDescription}
            </p>

            {/* Story / Baker's Note */}
            {product.story && (
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#FFF8ED] border border-[#D99A45]/30 text-xs text-[#5A321B]/80 leading-relaxed font-light italic">
                &ldquo;{product.story}&rdquo;
              </div>
            )}

            {/* Attribute Chips */}
            {product.attributes && product.attributes.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {product.attributes.map((attr, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-lg bg-[#F3E2C4]/70 text-[#5A321B] text-[11px] font-medium border border-[#5A321B]/10 flex items-center gap-1"
                  >
                    <Leaf className="w-3 h-3 text-[#66723A]" />
                    <span>{attr}</span>
                  </span>
                ))}
              </div>
            )}

            {/* Quality Note */}
            <div className="flex items-center gap-1.5 text-[11px] text-[#5A321B]/70 pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#66723A] shrink-0" />
              <span>Baked to order in small batches. Zero artificial preservatives.</span>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="space-y-2.5 pt-2.5 border-t border-[#5A321B]/10">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-[#5A321B]">Select Quantity:</span>
              <QuantitySelector
                quantity={quantity}
                onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
                onIncrease={() => setQuantity(quantity + 1)}
                size="sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 h-11 rounded-xl bg-[#B9573F] hover:bg-[#A34B35] text-white font-semibold text-xs shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Basket!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Basket</span>
                  </>
                )}
              </button>

              <a
                href={getWhatsAppUrl(directWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-11 rounded-xl bg-[#66723A] hover:bg-[#566331] text-white font-semibold text-xs shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
