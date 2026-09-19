"use client";

import React, { useEffect, useState } from "react";
import { ProtectedImage } from "@/components/ui/ProtectedImage";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { getCartWhatsAppUrl } from "@/lib/whatsapp";
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, Sparkles } from "lucide-react";
import { BotanicalSprig } from "@/components/ui/BotanicalFlourish";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, clearCart, getItemCount, getSubtotal } =
    useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch for persisted localStorage cart state
  if (!mounted) return null;
  if (!isOpen) return null;

  const itemCount = getItemCount();
  const subtotal = getSubtotal();
  const whatsAppUrl = getCartWhatsAppUrl(items, subtotal);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-brown/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Slide-out Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
        className="relative w-full max-w-md h-full bg-[#FFF8ED] text-[#2B211B] shadow-drawer flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-brand-brown/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-brown/10 bg-white/70">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-brand-beige/60 flex items-center justify-center text-brand-brown">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-brand-brown">Your Treats</h2>
              <p className="text-xs text-brand-muted">
                {itemCount} {itemCount === 1 ? "item" : "items"} selected
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="w-9 h-9 rounded-full bg-brand-beige/40 hover:bg-brand-beige text-brand-brown flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4 py-12">
              <div className="w-20 h-20 rounded-full bg-brand-beige/50 flex items-center justify-center text-brand-gold mb-4">
                <ShoppingBag className="w-9 h-9 opacity-70" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-brand-brown mb-2">
                Your basket is waiting
              </h3>
              <p className="text-sm text-brand-muted max-w-xs mb-6 leading-relaxed">
                Explore our wholesome homemade cookies, laddus, cakes and crackers to add your favorite treats.
              </p>
              <Link
                href="/menu"
                onClick={closeCart}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-terracotta text-white font-medium shadow-sm hover:bg-[#A34B35] transition-all text-sm"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  Treats in Cart
                </span>
                <button
                  onClick={clearCart}
                  className="text-xs text-brand-muted hover:text-brand-terracotta underline transition-colors"
                >
                  Clear all
                </button>
              </div>

              {items.map((item) => {
                const itemPrice = item.variant?.price || item.product.price || 0;
                return (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-2xl bg-white border border-brand-brown/10 shadow-xs"
                  >
                    {/* Item Image */}
                    <div className="relative w-18 h-18 rounded-xl bg-brand-beige/40 overflow-hidden shrink-0 flex items-center justify-center text-2xl">
                      {item.product.image ? (
                        <ProtectedImage
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          sizes="72px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-[#FAF0EC] flex items-center justify-center text-[#B9573F]">
                          <Sparkles className="w-4 h-4 text-[#B9573F]" />
                        </div>
                      )}
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-serif text-base font-semibold text-brand-brown truncate">
                            {item.product.name}
                          </h4>
                          {item.variant && (
                            <p className="text-xs text-brand-muted font-medium">
                              Size: {item.variant.name}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.product.name}`}
                          className="text-brand-muted hover:text-brand-terracotta transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-brown/5">
                        <div className="flex flex-col">
                          <span className="font-serif font-bold text-[#3D2314] text-xs sm:text-sm">
                            {itemPrice > 0
                              ? `₹${(itemPrice * item.quantity).toLocaleString("en-IN")}`
                              : (item.product.priceLabel || "Price on Request")}
                          </span>
                          {item.product.weight && (
                            <span className="text-[10px] text-[#8C6D53]/80 font-normal">
                              Pack: {item.product.weight}
                            </span>
                          )}
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-1 bg-brand-beige/40 rounded-lg p-1 border border-brand-brown/10">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                            className="w-6 h-6 rounded flex items-center justify-center text-brand-brown hover:bg-white transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-semibold text-brand-brown">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                            className="w-6 h-6 rounded flex items-center justify-center text-brand-brown hover:bg-white transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer / WhatsApp Checkout */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-brand-brown/10 space-y-3 shrink-0 shadow-lg">
            {/* Subtotal Card */}
            <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-[#FAF4E8] border border-[#EADBCA]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D53] block">
                  Estimated Subtotal
                </span>
                <span className="text-[11px] text-[#8C6D53]/80">
                  {itemCount} {itemCount === 1 ? "treat" : "treats"} in basket
                </span>
              </div>
              <div className="text-right shrink-0">
                {subtotal > 0 ? (
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#3D2314]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-[#EADBCA] text-xs font-semibold text-[#B9573F] shadow-2xs">
                    Confirmed on WhatsApp
                  </span>
                )}
              </div>
            </div>

            {/* Reassurance Note */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#526A3A] bg-[#F0F5EB] p-2.5 rounded-xl border border-[#66723A]/25">
              <Sparkles className="w-4 h-4 shrink-0 text-[#D99A45]" />
              <span>Small-batch & fresh to order. We confirm baking time on WhatsApp.</span>
            </div>

            {/* Actions: Order on WhatsApp + Add More Items */}
            <div className="space-y-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-11 sm:h-12 rounded-xl bg-[#526A3A] hover:bg-[#43592D] text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <WhatsAppIcon className="w-4.5 h-4.5 text-white" />
                <span>Order on WhatsApp</span>
              </a>

              <Link
                href="/menu"
                onClick={closeCart}
                className="flex items-center justify-center gap-1.5 w-full h-9.5 rounded-xl bg-[#FAF0EC] hover:bg-[#F3E2C4] text-[#5A321B] font-semibold text-xs sm:text-sm border border-[#EADBCA] transition-all"
              >
                <Plus className="w-3.5 h-3.5 text-[#B9573F]" />
                <span>Add More Items from Menu</span>
              </Link>
            </div>

            <p className="text-center text-[10.5px] sm:text-[11px] text-brand-muted">
              No online payment required now. You will chat directly with our Tiny Treats.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
