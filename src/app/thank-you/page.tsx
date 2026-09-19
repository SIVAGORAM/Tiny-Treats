import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ShoppingBag, ArrowRight, Heart, Sparkles } from "lucide-react";
import { getWhatsAppUrl, BRAND_PHONE } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { constructMetadata, ROUTES_SEO } from "@/lib/seo";

export const metadata: Metadata = constructMetadata(ROUTES_SEO.thankYou);

export default function ThankYouPage() {
  return (
    <div className="min-h-[75vh] py-16 sm:py-24 bg-[#FFF8ED] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-xl mx-auto bg-white rounded-3xl border-2 border-[#D99A45]/30 p-8 sm:p-12 shadow-[0_12px_40px_rgba(90,50,27,0.08)] space-y-6">
        
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-[#FAF0EC] border-2 border-[#B9573F]/30 flex items-center justify-center text-[#B9573F] mx-auto shadow-sm animate-bounce duration-1000">
          <CheckCircle2 className="w-10 h-10 text-[#526A3A]" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF8ED] border border-[#D99A45]/40 text-[#5A321B] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-[#D99A45]" />
            <span>Order Inquiry Received</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A321B]">
            Thank You for Choosing Tiny Treats!
          </h1>

          <p className="text-sm sm:text-base text-[#786B61] leading-relaxed font-light">
            We have received your message. Every batch is baked fresh with love in our home kitchen — we will connect with you shortly on WhatsApp to confirm your baking schedule and delivery details.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#FFF8ED] border border-[#D99A45]/25 text-xs text-[#5A321B] space-y-1">
          <p className="font-semibold">Direct Bakery Hotline: {BRAND_PHONE}</p>
          <p className="text-[#786B61]">Fresh Small-Batch Baking • Pan-India Courier</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={getWhatsAppUrl("Hello Tiny Treats! 👋 I submitted an inquiry on your website and would like to chat.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#66723A] hover:bg-[#526A3A] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Chat Directly on WhatsApp</span>
          </a>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#5A321B] hover:bg-[#3D2114] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Explore More Treats</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
