"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
                        <Image
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
                        <span className="font-serif font-bold text-brand-brown text-sm">
                          {itemPrice > 0 ? `₹${(itemPrice * item.quantity).toLocaleString("en-IN")}` : "Price: TBC"}
                        </span>

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
          <div className="p-6 bg-white border-t border-brand-brown/10 space-y-4">
            {/* Subtotal */}
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-brand-muted">Estimated Subtotal</span>
              <span className="font-serif text-2xl font-bold text-brand-brown">
                {subtotal > 0 ? `₹${subtotal.toLocaleString("en-IN")}` : "Confirmed on WhatsApp"}
              </span>
            </div>

            {/* Reassurance Note */}
            <div className="flex items-center gap-2 text-xs text-brand-sage bg-brand-cream/80 p-2.5 rounded-xl border border-brand-sage/20">
              <Sparkles className="w-4 h-4 shrink-0 text-brand-gold" />
              <span>Small-batch & fresh to order. We confirm baking time on WhatsApp.</span>
            </div>

            {/* WhatsApp Order Action */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-13 rounded-xl bg-brand-sage text-white font-medium text-base shadow-sm hover:bg-brand-sage-dark transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </a>

            <p className="text-center text-[11px] text-brand-muted">
              No online payment required now. You will chat directly with Shweta.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
