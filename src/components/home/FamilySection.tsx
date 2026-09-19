import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Sparkles, ShieldCheck, Check, MessageCircle, Baby, Users } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const familyStages = [
  {
    image: "/gallery/ragi-cookies-plate.jpg",
    emoji: "🧒",
    stage: "TODDLERS & SCHOOL KIDS",
    title: "Crunchy Lunchbox Treats",
    description:
      "Nutrient-dense Almond & Ragi cookies that replace refined commercial biscuits with 100% whole grains and roasted nuts.",
    highlights: ["100% No Maida", "Roasted Almonds", "Kid Approved"],
    link: "/menu?category=cookies",
    linkText: "Explore Kids Treats",
    accentColor: "#B85843",
  },
  {
    image: "/gallery/calcium-laddu.jpg",
    emoji: "🤱",
    stage: "NEW MOTHERS & WELLNESS",
    title: "Lactation & Nourishment Laddus",
    description:
      "Traditional recipes packed with calcium, dry fruits, roasted seeds, and pure nutrition to support postpartum strength.",
    highlights: ["Calcium & Iron Rich", "Protein Dense", "Traditional Care"],
    link: "/menu?category=laddus",
    linkText: "Explore Nourishing Laddus",
    accentColor: "#D49942",
  },
  {
    image: "/gallery/jowar-jeera-biscuits.jpg",
    emoji: "☕",
    stage: "EVERYDAY FAMILY TEATIME",
    title: "Artisan Breads & Savouries",
    description:
      "Crispy Jowar Jeera biscuits, 100% millet loaves and savoury seed crackers for guilt-free evening tea and mindful snacking.",
    highlights: ["Gluten-Conscious", "5-Seed Blend", "No Artificial Sugar"],
    link: "/menu?category=seed-crackers",
    linkText: "Explore Savoury Treats",
    accentColor: "#586E3C",
  },
];


export function FamilySection() {
  return (
    <section className="py-20 sm:py-28 bg-white/60 border-y border-[#EADBCA]/80 relative overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#FAF0EC]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 rounded-full bg-[#F0F5EB]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3EA] border border-[#EADBCA] text-xs font-bold uppercase tracking-widest text-[#B85843] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D49942]" />
            <span>FOR LITTLE ONES & GROWING FAMILIES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#3D2314] tracking-tight leading-[1.15]">
            Made for Little Ones & <br />
            <span className="text-[#B85843] font-serif italic font-normal">
              Growing Families ♡
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#7C6B5E] font-light leading-relaxed max-w-2xl mx-auto">
            Our aim is to create delicious homemade snack options for parents looking for thoughtful alternatives for their children, as well as families seeking wholesome choices during important stages of life.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. THREE FAMILY STAGE CARDS                                               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {familyStages.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-white border border-[#EADBCA] shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo Banner with Stage Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF3EA]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-106 transition-transform duration-500"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Stage Pill */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-md text-[#3D2314] text-[10.5px] font-bold tracking-wider">
                    <span>{item.emoji}</span>
                    <span>{item.stage}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2314] group-hover:text-[#B85843] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6E5A4E] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights Checkmarks */}
                  <div className="space-y-1.5 pt-1">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-[#5A3825] font-medium">
                        <div className="w-4 h-4 rounded-full bg-[#586E3C]/15 flex items-center justify-center text-[#586E3C] shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={item.link}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#FFF9F0] group-hover:bg-[#FAF0EC] border border-[#EADBCA]/70 text-xs font-bold text-[#B85843] transition-all"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Bottom Accent Strip */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: item.accentColor }}
              />
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM FAMILY PROMISE & ACTION BANNER                                  */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF3EA]/90 border border-[#EADBCA] shadow-xs max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#3D2314]">
              Looking for Custom Family or Gifting Boxes?
            </h4>
            <p className="text-xs sm:text-[13px] text-[#7C6B5E] font-light">
              We personalize treat assortments for birthdays, family visits, and new mothers.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl("Hello Tiny Treats! 👋 I would like to order a custom assortment for my family.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[#526A3A] hover:bg-[#43592D] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
