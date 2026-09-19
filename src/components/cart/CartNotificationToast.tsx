"use client";

import React, { useEffect } from "react";
import { ProtectedImage } from "@/components/ui/ProtectedImage";
import { useCartStore } from "@/store/cart-store";
import { ShoppingBag, ArrowRight, X, Sparkles, Plus } from "lucide-react";

export function CartNotificationToast() {
  const { showAddedToast, lastAddedItem, getItemCount, getSubtotal, openCart, dismissToast } =
    useCartStore();

  useEffect(() => {
    if (!showAddedToast) return;
    const timer = setTimeout(() => {
      dismissToast();
    }, 6500);
    return () => clearTimeout(timer);
  }, [showAddedToast, dismissToast]);

  if (!showAddedToast || !lastAddedItem) return null;

  const totalItems = getItemCount();
  const subtotal = getSubtotal();

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 max-w-[92vw] sm:max-w-md w-full animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-auto">
      <div className="relative p-3.5 sm:p-4 rounded-2xl bg-[#3D2314] text-[#FFF8ED] border-2 border-[#D99A45]/50 shadow-2xl backdrop-blur-md">
        
        {/* Close button */}
        <button
          onClick={dismissToast}
          aria-label="Dismiss notification"
          className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF8ED]/80 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Content Row */}
        <div className="flex items-start gap-3 pr-6">
          {/* Thumbnail / Icon */}
          <div className="relative w-12 h-12 rounded-xl bg-white/10 border border-white/15 overflow-hidden shrink-0 flex items-center justify-center">
            {lastAddedItem.product.image ? (
              <ProtectedImage
                src={lastAddedItem.product.image}
                alt={lastAddedItem.product.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            ) : (
              <Sparkles className="w-5 h-5 text-[#D99A45]" />
            )}
            <span className="absolute bottom-0 inset-x-0 bg-[#66723A] text-white text-[9px] font-bold text-center leading-tight py-0.5">
              +{lastAddedItem.quantity}
            </span>
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#9FD468]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9FD468] animate-ping" />
              <span>Added to Basket</span>
            </div>
            
            <h4 className="font-serif text-sm font-bold text-[#FFF8ED] truncate mt-0.5">
              {lastAddedItem.product.name}
            </h4>

            <p className="text-[11px] text-[#FFF8ED]/70 font-light mt-0.5">
              Basket now has <strong className="text-[#F3C47A] font-semibold">{totalItems} {totalItems === 1 ? "item" : "items"}</strong>
              {subtotal > 0 && <span> (₹{subtotal.toLocaleString("en-IN")})</span>}
            </p>
          </div>
        </div>

        {/* Dual Actions: "Add More Items" vs "Go to Cart" */}
        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/15">
          {/* Action 1: Add More Items (Dismiss & keep browsing) */}
          <button
            type="button"
            onClick={dismissToast}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-[#FFF8ED] text-xs font-semibold border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-3.5 h-3.5 text-[#D99A45]" />
            <span>Add More Items</span>
          </button>

          {/* Action 2: Go to Cart */}
          <button
            type="button"
            onClick={() => {
              dismissToast();
              openCart();
            }}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-[#B9573F] to-[#A34B35] hover:from-[#A34B35] hover:to-[#8E3B27] text-white text-xs font-semibold shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Go to Cart ({totalItems})</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
