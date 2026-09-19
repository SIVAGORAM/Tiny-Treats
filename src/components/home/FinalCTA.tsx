import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Heart, Sparkles, ShieldCheck, Flame, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { BotanicalDivider, BotanicalSprig } from "@/components/ui/BotanicalFlourish";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8ED] pt-2.5 sm:pt-3 pb-3 sm:pb-4 select-none">
      {/* ── Warm Background Radial Glows & Textures ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(217,154,69,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#B9573F]/08 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-[#66723A]/08 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #5A321B 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* ── Master Artisan Reserve Showcase Card ── */}
        <div className="relative rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-[#FFFFFF] via-[#FFFDF9] to-[#FAF2E4] border-2 border-[#D99A45]/30 p-5 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(90,50,27,0.08)] overflow-hidden">
          
          {/* Subtle Corner Filigree Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#D99A45]/40 rounded-tl-lg pointer-events-none hidden sm:block" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D99A45]/40 rounded-tr-lg pointer-events-none hidden sm:block" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#D99A45]/40 rounded-bl-lg pointer-events-none hidden sm:block" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D99A45]/40 rounded-br-lg pointer-events-none hidden sm:block" />

          {/* Top Decorative Flourish */}
          <div className="flex items-center justify-center gap-2 mb-3.5">
            <BotanicalSprig className="w-4 h-4 text-[#D99A45] -scale-x-100" />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E2C4]/80 border border-[#D99A45]/40 text-[#5A321B] text-xs font-bold uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D99A45]" />
              <span>Baked Fresh To Order • Small Batch Love</span>
            </div>
            <BotanicalSprig className="w-4 h-4 text-[#D99A45]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            {/* Headline */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#3A1E0E] leading-tight">
              Ready for a{" "}
              <span className="italic font-normal text-[#B9573F]">
                Little Treat?
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#5A321B]/85 max-w-2xl mx-auto font-normal leading-relaxed">
              Freshly prepared in our home kitchen with wholesome millets, dry fruits, pure butter, and zero artificial preservatives. Taste the warmth of authentic homemade baking.
            </p>

            {/* 3 Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/10 text-xs font-semibold text-[#5A321B] shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#D99A45] shrink-0" />
                <span>100% Clean Ingredients</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/10 text-xs font-semibold text-[#5A321B] shadow-2xs">
                <Flame className="w-4 h-4 text-[#B9573F] shrink-0" />
                <span>Fresh Small Batches</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/10 text-xs font-semibold text-[#5A321B] shadow-2xs">
                <Clock className="w-4 h-4 text-[#66723A] shrink-0" />
                <span>Made to Order</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link
                href="/menu"
                className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto h-11 sm:h-12 px-7 rounded-xl bg-[#B9573F] hover:bg-[#A34B35] text-white font-semibold text-xs sm:text-sm shadow-[0_8px_25px_rgba(185,87,63,0.28)] hover:shadow-[0_12px_35px_rgba(185,87,63,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden border border-[#D99A45]/30"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={getWhatsAppUrl("Hello Tiny Treats! 👋 I would like to check availability and place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto h-11 sm:h-12 px-7 rounded-xl bg-[#66723A] hover:bg-[#566331] text-white font-semibold text-xs sm:text-sm shadow-[0_8px_25px_rgba(102,114,58,0.25)] hover:shadow-[0_12px_35px_rgba(102,114,58,0.38)] hover:scale-[1.02] active:scale-[0.98] transition-all border border-emerald-400/20"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-300 animate-ping absolute -top-0.5 -right-0.5" />
                <div className="w-2 h-2 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5" />
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Divider & Signature */}
            <div className="pt-3.5 border-t border-[#5A321B]/10 max-w-md mx-auto space-y-1.5">
              <BotanicalDivider className="text-[#D99A45]/60 scale-90" />
              <div className="flex items-center justify-center gap-2 font-script text-xl text-[#D99A45]">
                <span>Tiny Treats</span>
                <span className="text-[#5A321B]/40 font-sans text-xs">•</span>
                <span>Small Treats. Big Love.</span>
                <Heart className="w-3.5 h-3.5 text-[#B9573F] fill-[#B9573F] inline" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
