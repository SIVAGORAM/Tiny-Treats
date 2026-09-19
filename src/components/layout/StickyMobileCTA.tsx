"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Sparkles, MessageCircle, Utensils } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function StickyMobileCTA() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { items, openCart } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

  // Hide on desktop or if user is on checkout/cart page to avoid duplication
  if (!mounted) return null;

  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#D99A45]/30 px-3 py-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] shadow-[0_-4px_20px_rgba(90,50,27,0.12)] select-none"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Menu Link */}
        <Link
          href="/menu"
          className={`flex-1 min-h-[44px] px-3 rounded-2xl flex items-center justify-center gap-1.5 text-xs font-semibold transition-all ${
            pathname === "/menu"
              ? "bg-[#5A321B] text-[#FFF8ED] shadow-xs"
              : "bg-[#FFF8ED] text-[#5A321B] border border-[#D99A45]/30 hover:bg-[#F3E2C4]"
          }`}
        >
          <Utensils className="w-3.5 h-3.5 text-[#D99A45]" />
          <span>Menu</span>
        </Link>

        {/* WhatsApp Direct Order Button */}
        <a
          href={getWhatsAppUrl("Hello Tiny Treats! 👋 I would like to explore today's fresh baked batches.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] min-h-[44px] px-3 rounded-2xl bg-gradient-to-r from-[#66723A] to-[#526A3A] hover:from-[#526A3A] hover:to-[#43592D] text-white flex items-center justify-center gap-1.5 text-xs font-semibold shadow-xs active:scale-98 transition-all"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
          <span>Order on Chat</span>
        </a>

        {/* Cart Drawer Trigger */}
        <button
          type="button"
          onClick={openCart}
          aria-label={`View Cart with ${totalCount} items`}
          className="relative min-w-[44px] min-h-[44px] px-3 rounded-2xl bg-[#FAF0EC] hover:bg-[#F3E2C4] border border-[#B9573F]/30 text-[#B9573F] flex items-center justify-center transition-all cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          {totalCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-[#B9573F] text-white text-[10px] font-bold flex items-center justify-center px-1 shadow-xs animate-in zoom-in-50 duration-200">
              {totalCount}
            </span>
          )}
        </button>

      </div>
    </aside>
  );
}
