import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Sparkles, MessageCircle } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/gallery";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function GalleryPreview() {
  const items = GALLERY_ITEMS.slice(0, 4);

  return (
    <section className="pt-2.5 sm:pt-3 pb-3 sm:pb-4 bg-white border-t border-[#5A321B]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-5 mb-4 sm:mb-6">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF8ED] border border-[#D99A45]/30 text-xs font-bold uppercase tracking-widest text-[#B9573F] shadow-2xs">
              <Camera className="w-3.5 h-3.5 text-[#D99A45]" />
              <span>Real Kitchen Moments</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A1E0E] leading-tight">
              From Our Kitchen to <br className="hidden sm:inline" />
              <span className="text-[#B9573F] italic font-normal">Your Family Table.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-[#5A321B]/75 font-light leading-relaxed">
              A peek into our small-batch baking — pure ingredients, warm oven aromas, and homemade treats prepared with care.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-2xl bg-[#5A321B] hover:bg-[#3D2114] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all self-center md:self-end shrink-0 group"
          >
            <span>View Full Gallery (16+)</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#D99A45]" />
          </Link>
        </div>

        {/* 4 Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl bg-[#FFF8ED] border border-[#5A321B]/12 overflow-hidden shadow-[0_4px_20px_rgba(90,50,27,0.04)] hover:shadow-[0_16px_36px_rgba(90,50,27,0.12)] hover:border-[#D99A45]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Area */}
              <div className="relative aspect-4/3 w-full bg-[#F3E2C4]/40 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[#5A321B] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-2xs border border-[#5A321B]/10">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#5A321B]/08 flex items-center justify-between gap-2">
                <div className="space-y-0.5 flex-1 min-w-0">
                  <h3 className="font-serif text-sm font-bold text-[#3A1E0E] group-hover:text-[#B9573F] transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#5A321B]/70 font-light line-clamp-1">
                    {item.caption}
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(`Hello Tiny Treats! 👋 I saw "${item.title}" in your home gallery and would like to order.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Order ${item.title} on WhatsApp`}
                  className="w-8 h-8 rounded-xl bg-[#66723A]/15 hover:bg-[#66723A] text-[#66723A] hover:text-white flex items-center justify-center shrink-0 transition-colors"
                  title="Direct WhatsApp Order"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
