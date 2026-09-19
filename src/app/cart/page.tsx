"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { getCartWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";
import { ShoppingBag, ArrowRight, Trash2, Plus, Minus, Sparkles } from "lucide-react";
import { BotanicalDivider } from "@/components/ui/BotanicalFlourish";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, getSubtotal, getItemCount } =
    useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="py-24 text-center text-brand-muted bg-[#FFF8ED]">
        Loading your basket...
      </div>
    );
  }

  const subtotal = getSubtotal();
  const itemCount = getItemCount();
  const whatsAppUrl = getCartWhatsAppUrl(items, subtotal);

  return (
    <div className="py-8 sm:py-12 bg-[#FFF8ED] min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-2.5 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-brown/10 shadow-2xs text-xs font-semibold uppercase tracking-widest text-brand-terracotta">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Review Your Basket</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-brown">
            Your Selected Treats
          </h1>

          <p className="text-sm text-brand-muted font-light">
            {itemCount} {itemCount === 1 ? "treat" : "treats"} in your basket
          </p>
        </div>

        {items.length === 0 ? (
          /* Empty Cart State */
          <div className="max-w-md mx-auto p-10 rounded-3xl bg-white border border-brand-brown/10 text-center space-y-5 shadow-2xs">
            <div className="w-20 h-20 rounded-full bg-brand-cream border border-brand-brown/10 flex items-center justify-center text-brand-gold mx-auto">
              <ShoppingBag className="w-9 h-9" />
            </div>

            <h2 className="font-serif text-2xl font-bold text-brand-brown">
              Your basket is waiting
            </h2>

            <p className="text-xs text-brand-muted leading-relaxed font-light">
              Looks like you haven&apos;t added any treats yet. Explore our wholesome homemade cookies, laddus, cakes and crackers!
            </p>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-terracotta text-white font-semibold text-sm shadow-subtle hover:bg-[#A34B35] transition-all"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          /* Cart Items & Order Summary Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Items List (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Treats ({itemCount})
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
                    className="p-5 rounded-3xl bg-white border border-brand-brown/10 shadow-2xs flex gap-4 items-center justify-between"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-16 h-16 rounded-2xl bg-brand-cream border border-brand-brown/10 flex items-center justify-center text-2xl shrink-0 overflow-hidden relative">
                        {item.product.image ? (
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-[#FAF0EC] flex items-center justify-center text-[#B9573F]">
                            <Sparkles className="w-4 h-4 text-[#B9573F]" />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-serif text-base font-bold text-brand-brown truncate">
                          {item.product.name}
                        </h3>
                        {item.variant && (
                          <p className="text-xs text-brand-muted">Size: {item.variant.name}</p>
                        )}
                        <p className="text-xs font-serif font-semibold text-brand-terracotta mt-0.5">
                          {itemPrice > 0 ? `₹${itemPrice.toLocaleString("en-IN")}` : "Price on Request"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 bg-brand-cream rounded-xl p-1 border border-brand-brown/10">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-brand-brown hover:bg-white transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-brand-brown">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-brand-brown hover:bg-white transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.product.name}`}
                        className="text-brand-muted hover:text-brand-terracotta p-2 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="pt-2">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-terracotta hover:underline"
                >
                  <span>← Add more treats from Menu</span>
                </Link>
              </div>
            </div>

            {/* Right: Summary Box & WhatsApp Order (5 cols) */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-brand-brown/10 shadow-subtle space-y-6">
              <h2 className="font-serif text-xl font-bold text-brand-brown">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm pb-4 border-b border-brand-brown/10">
                <div className="flex justify-between text-brand-muted">
                  <span>Items ({itemCount})</span>
                  <span className="font-medium text-brand-brown">
                    {subtotal > 0 ? `₹${subtotal.toLocaleString("en-IN")}` : "Confirmed on chat"}
                  </span>
                </div>
                <div className="flex justify-between text-brand-muted">
                  <span>Fresh Preparation</span>
                  <span className="text-brand-sage font-medium">Small-batch</span>
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-brand-brown">Estimated Total</span>
                <span className="font-serif text-2xl font-bold text-brand-brown">
                  {subtotal > 0 ? `₹${subtotal.toLocaleString("en-IN")}` : "Confirmed on WhatsApp"}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-brand-cream border border-brand-sage/20 text-xs text-brand-sage flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  No online payment required now. You will chat directly with our Tiny Treats on WhatsApp to confirm delivery and baking schedule.
                </span>
              </div>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full h-14 rounded-2xl bg-brand-sage text-white font-semibold text-base shadow-subtle hover:bg-brand-sage-dark transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
