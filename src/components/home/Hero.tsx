"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Heart, Leaf, Sparkles, Check } from "lucide-react";
import { HERO_SLIDES } from "@/data/hero-slides";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Silent automatic product rotation every 2.8s
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 2800);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative overflow-hidden pt-4 sm:pt-6 pb-6 sm:pb-8 lg:pt-6 lg:pb-10 bg-[#FFF8ED] flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. SEAMLESS NATURAL DESKTOP PHOTOGRAPHY BACKDROP (VISIBLE ON LG SCREENS) */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%] xl:w-[56%] h-full pointer-events-none select-none z-0 overflow-hidden">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.productTag}
              fill
              priority={idx === 0}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center lg:object-right"
            />
            {/* Soft Organic Edge Blend into Cream Surface */}
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#FFF8ED] via-[#FFF8ED]/80 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFF8ED] via-[#FFF8ED]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FFF8ED] via-[#FFF8ED]/40 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>

      {/* 2. FOREGROUND RESPONSIVE CONTAINER (MOBILE, TABLET & DESKTOP) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Brand Typography, 4 Badges, CTAs, Trust & Controls */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-5 text-center sm:text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 py-1.5 rounded-full bg-white/95 border border-brand-brown/12 shadow-2xs text-[10.5px] xs:text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#5A3825]">
              <Leaf className="w-3.5 h-3.5 text-[#6B7E45]" />
              <span key={`eyebrow-${slide.id}`} className="animate-in fade-in duration-300">
                {slide.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <div className="min-h-[75px] xs:min-h-[85px] sm:min-h-[110px] lg:min-h-[130px] flex flex-col justify-center">
              <h1
                key={`headline-${slide.id}`}
                className="font-serif text-[26px] xs:text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-extrabold text-[#3D2314] tracking-tight leading-[1.08] transition-opacity duration-300 animate-in fade-in"
              >
                {slide.headlineMain} <br className="hidden sm:inline" />
                <span className="text-[#B85843] font-serif italic font-normal">
                  {slide.headlineAccent}
                </span>{" "}
                <span className="font-script text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#B85843] font-normal inline ml-0.5">
                  ♡
                </span>
              </h1>
            </div>

            {/* MOBILE & TABLET DEDICATED VISUAL STAGE */}
            <div className="block lg:hidden relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-hover border border-[#E7DAC7] my-3 sm:my-4">
              {HERO_SLIDES.map((s, idx) => (
                <div
                  key={`m-${s.id}`}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.productTag}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                </div>
              ))}

              {/* Mobile Floating Stamp */}
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAF3EA]/95 border-2 border-dashed border-[#D5C2AB] shadow-md flex flex-col items-center justify-center text-center p-1 transform -rotate-12 select-none">
                <span className="font-script text-[10px] sm:text-[11px] font-bold text-[#5A3825] leading-tight">
                  {slide.stickerText.replace("♡", "")}
                </span>
                <span className="text-[#B85843] text-[10px] sm:text-xs">♡</span>
              </div>

              {/* Mobile Floating Product Tag */}
              <Link
                href={slide.ctaLink}
                key={`mpill-${slide.id}`}
                className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 z-20 flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-[#FAF3EA]/95 backdrop-blur-md border border-[#E7DAC7] shadow-md"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#8FA36A]/20 flex items-center justify-center text-[#435424] shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#5A6E3B]" />
                  </div>
                  <div className="text-left truncate">
                    <h4 className="font-serif text-xs font-bold text-[#3D2314] truncate">
                      {slide.productTag}
                    </h4>
                    <p className="text-[9.5px] sm:text-[10px] text-[#7C6B5E] truncate">
                      {slide.supportingLine}
                    </p>
                  </div>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#8FA36A] text-white flex items-center justify-center text-xs shrink-0">
                  →
                </div>
              </Link>
            </div>

            {/* Description */}
            <div className="min-h-[40px] sm:min-h-[55px] flex items-center">
              <p
                key={`desc-${slide.id}`}
                className="text-xs xs:text-sm sm:text-base lg:text-[16px] text-[#5A3825]/90 font-light leading-relaxed max-w-lg mx-auto sm:mx-0 transition-opacity duration-300 animate-in fade-in"
              >
                {slide.description}
              </p>
            </div>

            {/* 4 Core Value Badges */}
            <div
              key={`badges-${slide.id}`}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 pt-0.5 text-[11px] sm:text-xs font-medium text-[#5A3825]/90 animate-in fade-in duration-300"
            >
              {slide.badges.map((b, idx) => (
                <span
                  key={idx}
                  className="px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full bg-[#FAF3EA]/90 border border-[#E7DAC7] shadow-2xs flex items-center gap-1.5"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-[#8FA36A]/20 text-[#435424] flex items-center justify-center text-[9px] font-bold">
                    ✓
                  </span>
                  <span>{b.label}</span>
                </span>
              ))}
            </div>

            {/* CTAs Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-2.5 sm:gap-3 pt-1.5">
              <Link
                href={slide.ctaLink}
                className="flex items-center justify-center gap-2 w-full sm:w-auto h-11 sm:h-12.5 px-6 sm:px-8 rounded-full bg-[#B85843] hover:bg-[#A34B35] text-white font-semibold text-xs sm:text-sm shadow-subtle hover:shadow-hover transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl(
                  `Hello Tiny Treats! 👋 I would like to order fresh ${slide.productTag}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto h-11 sm:h-12.5 px-5 sm:px-7 rounded-full bg-[#EDF3E6] hover:bg-[#E0ECD6] text-[#3D5222] font-semibold text-xs sm:text-sm border border-[#D7E4CB] shadow-2xs transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#5A6E3B]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Slogan */}
            <div className="pt-2 flex items-center justify-center sm:justify-start gap-2 text-xs text-[#7C6B5E] flex-wrap">
              <span className="font-script text-xl sm:text-2xl font-bold text-[#B85843] inline-block">
                No Junk, Just Goodness
              </span>
              <span className="text-[#7C6B5E]/85">— Baked fresh in small batches</span>
            </div>

            {/* Bottom Row: Customer Trust + Carousel Controls */}
            <div className="pt-4 mt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E7DAC7]/70">
              
              {/* Customer Monogram Initials & Stars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#5A321B] text-[#FFF8ED] border-2 border-white flex items-center justify-center font-serif text-[11px] font-bold shadow-2xs">
                    P
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#B9573F] text-[#FFF8ED] border-2 border-white flex items-center justify-center font-serif text-[11px] font-bold shadow-2xs">
                    A
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#D99A45] text-[#3A1E0E] border-2 border-white flex items-center justify-center font-serif text-[11px] font-bold shadow-2xs">
                    S
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#66723A] text-[#FFF8ED] border-2 border-white flex items-center justify-center font-serif text-[11px] font-bold shadow-2xs">
                    R
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1 text-[#D99A45]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D99A45] text-[#D99A45]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#7C6B5E] font-medium">
                    Loved by 500+ happy customers
                  </p>
                </div>
              </div>

              {/* Slider Controls: Arrows & Dots */}
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={prevSlide}
                  aria-label="Previous treat"
                  className="w-8 h-8 rounded-full bg-white border border-[#E7DAC7] flex items-center justify-center text-[#5A3825] hover:bg-[#FAF3EA] transition-colors cursor-pointer shadow-2xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 px-1">
                  {HERO_SLIDES.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Show ${s.productTag}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx
                          ? "w-6 bg-[#5A3825]"
                          : "w-2 bg-[#D5C2AB] hover:bg-[#A89279]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  aria-label="Next treat"
                  className="w-8 h-8 rounded-full bg-white border border-[#E7DAC7] flex items-center justify-center text-[#5A3825] hover:bg-[#FAF3EA] transition-colors cursor-pointer shadow-2xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* DESKTOP FLOATING STAGE (LG & XL ONLY) */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-6 relative min-h-[500px] xl:min-h-[560px]">
            
            {/* Floating Element 1: Round Kraft Stamp Sticker (Top-Left of Plate) */}
            <div className="absolute top-4 xl:top-6 left-0 xl:left-4 z-20 w-24 h-24 xl:w-28 xl:h-28 rounded-full bg-[#FAF3EA]/95 backdrop-blur-xs border-2 border-dashed border-[#D5C2AB] shadow-md flex flex-col items-center justify-center text-center p-2 transform -rotate-12 select-none">
              <span className="font-script text-xs xl:text-[14px] font-bold text-[#5A3825] leading-tight">
                {slide.stickerText.replace("♡", "")}
              </span>
              <span className="text-[#B85843] text-xs mt-0.5">♡</span>
            </div>

            {/* Floating Element 2: Active Treat Glass Product Card (Bottom Left of Plate) */}
            <Link
              href={slide.ctaLink}
              key={`dpill-${slide.id}`}
              className="absolute bottom-6 xl:bottom-8 left-0 xl:left-4 z-20 flex items-center gap-3 p-3 xl:p-3.5 rounded-2xl bg-[#FAF3EA]/95 backdrop-blur-md border border-[#E7DAC7] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all group max-w-[290px] xl:max-w-sm cursor-pointer animate-in fade-in duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-[#8FA36A]/20 flex items-center justify-center text-[#435424] shrink-0">
                <Sparkles className="w-4 h-4 text-[#5A6E3B]" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <h4 className="font-serif text-xs xl:text-sm font-bold text-[#3D2314] truncate">
                  {slide.productTag}
                </h4>
                <p className="text-[10.5px] xl:text-[11px] text-[#7C6B5E] truncate">
                  {slide.supportingLine}
                </p>
              </div>
              <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-[#8FA36A] group-hover:bg-[#435424] text-white flex items-center justify-center text-xs shrink-0 transition-colors shadow-2xs">
                →
              </div>
            </Link>

            {/* Floating Element 3: Kraft Paper Pinned Tag (Bottom Right) */}
            <div className="absolute bottom-6 xl:bottom-8 right-2 xl:right-6 z-20 p-3 xl:p-4 rounded-xl bg-[#FAF3EA] border border-[#E7DAC7] shadow-lg transform rotate-3 select-none text-center">
              <span className="font-script text-base xl:text-lg font-bold text-[#5A3825] block leading-none">
                Made with Love
              </span>
              <Heart className="w-3.5 h-3.5 text-[#B85843] fill-[#B85843] mx-auto mt-1" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
