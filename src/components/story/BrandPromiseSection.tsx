"use client";

import React from "react";
import Image from "next/image";
import { Leaf, Heart, Home, Sprout, Sparkles, Users, Star } from "lucide-react";

export function BrandPromiseSection() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 pb-16 sm:pb-24 bg-[#FFF8ED] select-none">
      
      {/* 1. SEAMLESS TABLETOP PHOTOGRAPHY SIDES (DESKTOP & TABLET) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/story/story-hero-bg.jpg"
          alt="Artisan raw nuts and freshly baked almond cookies on a rustic linen table"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35 lg:opacity-65"
        />
        {/* Soft Organic Vignette & Cream Wash for Perfect Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8ED]/85 via-[#FFF8ED]/70 to-[#FFF8ED] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FFF8ED] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FFF8ED] to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-10 sm:space-y-14">
        
        {/* ========================================================================= */}
        {/* 2. CENTER HERO PHILOSOPHY HEADLINE & ANNOTATIONS                          */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5 relative">
          
          {/* Left Script Annotation (Visible on Desktop / Tablets) */}
          <div className="hidden lg:block absolute -left-36 xl:-left-44 top-2 text-left transform -rotate-6 pointer-events-none">
            <p className="font-script text-xl xl:text-2xl font-bold text-[#5A3825] leading-tight">
              Real <br />
              Ingredients <br />
              Happier <br />
              Days <span className="text-[#B85843]">♡</span>
            </p>
            {/* Hand-drawn curved arrow SVG */}
            <svg
              className="w-14 h-12 text-[#8C6D53] ml-4 mt-1"
              viewBox="0 0 60 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5C25 10 38 25 35 42M35 42L28 35M35 42L42 37"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right Kraft Paper Tag Annotation on Cookies (Visible on Desktop) */}
          <div className="hidden lg:block absolute -right-32 xl:-right-40 top-4 text-center transform rotate-6 pointer-events-none">
            <div className="p-3.5 rounded-xl bg-[#FAF3EA] border border-[#D5C2AB] shadow-md">
              <span className="font-script text-base xl:text-lg font-bold text-[#5A3825] block leading-tight">
                Good Food <br />
                Brighter Days
              </span>
              <span className="text-[#B85843] text-sm block mt-0.5">♡</span>
            </div>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 sm:w-12 bg-[#8C6D53]/30" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#8C6D53]">
              OUR BRAND PROMISE
            </span>
            <span className="h-px w-8 sm:w-12 bg-[#8C6D53]/30" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#3D2314] tracking-tight leading-[1.12]">
            Because What We Give <br />
            Our Family{" "}
            <span className="text-[#B85843] font-serif italic font-normal">
              Matters
            </span>{" "}
            <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#B85843] font-normal inline ml-1">
              ♡
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-[17px] text-[#5A3825]/90 font-light leading-relaxed max-w-2xl mx-auto">
            We believe choosing a snack shouldn&apos;t mean choosing between taste and
            thoughtfully selected ingredients.
          </p>

          {/* Central Signature Philosophy Quote Card */}
          <div className="pt-2">
            <div className="inline-flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-6 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#F6ECE2]/95 border border-[#E8D9CB] shadow-xs">
                <span className="text-xl sm:text-2xl font-serif text-[#B85843]/80 font-bold leading-none">
                  &ldquo;
                </span>
                <span className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#3D2314] italic">
                  Would I happily serve this to my own family?
                </span>
                <span className="text-xl sm:text-2xl font-serif text-[#B85843]/80 font-bold leading-none">
                  &rdquo;
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#7C6B5E] mt-2.5 font-medium">
                If the answer is yes, it belongs at Tiny Treats.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. FOUR PROMISE CARDS GRID — MATCHING THE REFERENCE EXACT COLORS & WATERMARKS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: No Maida (Mint Pastel) */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-[#F0F5EB]/90 hover:bg-[#EAF1E4] border border-[#DEE7D7] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Top Right Leaf Watermark */}
            <div className="absolute top-2 right-2 w-20 h-20 opacity-20 pointer-events-none text-[#586E3C] group-hover:scale-110 transition-transform duration-500">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 10C35 25 20 50 25 80C55 85 80 70 90 50C75 45 60 30 50 10Z" />
                <path d="M50 10L35 75" stroke="#fff" strokeWidth="3" />
              </svg>
            </div>

            <div className="space-y-3.5 relative z-10">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#586E3C] shadow-2xs">
                <Leaf className="w-5 h-5 fill-[#586E3C]/20 text-[#586E3C]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2314]">
                No Maida
              </h3>
              <p className="text-xs sm:text-[13px] text-[#6E5A4E] leading-relaxed font-light">
                Our selected healthy snack range is prepared without maida for mindful everyday snacking.
              </p>
            </div>

            {/* Bottom Accent Pill */}
            <div className="h-1 w-7 bg-[#586E3C] rounded-full mt-6" />
          </div>

          {/* Card 2: No Added Sugar (Rose/Blush Pastel) */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-[#FAF0EC]/90 hover:bg-[#F6E9E4] border border-[#EEDCD6] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Top Right Hearts Watermark */}
            <div className="absolute top-2 right-2 w-20 h-20 opacity-20 pointer-events-none text-[#B85843] group-hover:scale-110 transition-transform duration-500">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 30 C45 15, 25 15, 20 30 C15 45, 35 60, 50 75 C65 60, 85 45, 80 30 C75 15, 55 15, 50 30 Z" />
                <circle cx="75" cy="20" r="8" opacity="0.6" />
                <circle cx="85" cy="40" r="5" opacity="0.6" />
              </svg>
            </div>

            <div className="space-y-3.5 relative z-10">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#B85843] shadow-2xs">
                <Heart className="w-5 h-5 fill-[#B85843] text-[#B85843]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2314]">
                No Added Sugar
              </h3>
              <p className="text-xs sm:text-[13px] text-[#6E5A4E] leading-relaxed font-light">
                Our selected treats are prepared without added sugar, using naturally sweet ingredients where appropriate.
              </p>
            </div>

            {/* Bottom Accent Pill */}
            <div className="h-1 w-7 bg-[#B85843] rounded-full mt-6" />
          </div>

          {/* Card 3: Homemade in Small Batches (Warm Gold Pastel) */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-[#FAF4E8]/90 hover:bg-[#F5EDDE] border border-[#EFE2CE] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Top Right Cottage Watermark */}
            <div className="absolute top-2 right-2 w-20 h-20 opacity-20 pointer-events-none text-[#D49942] group-hover:scale-110 transition-transform duration-500">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 15L15 45V85H85V45L50 15Z" />
                <rect x="40" y="55" width="20" height="30" fill="#fff" />
              </svg>
            </div>

            <div className="space-y-3.5 relative z-10">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#D49942] shadow-2xs">
                <Home className="w-5 h-5 fill-[#D49942]/20 text-[#D49942]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2314]">
                Homemade in Small Batches
              </h3>
              <p className="text-xs sm:text-[13px] text-[#6E5A4E] leading-relaxed font-light">
                Every order is prepared with care in our home kitchen and made fresh in small batches.
              </p>
            </div>

            {/* Bottom Accent Pill */}
            <div className="h-1 w-7 bg-[#D49942] rounded-full mt-6" />
          </div>

          {/* Card 4: Thoughtfully Selected Ingredients (Mint Pastel) */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-[#F0F5EB]/90 hover:bg-[#EAF1E4] border border-[#DEE7D7] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Top Right Seedling Branch Watermark */}
            <div className="absolute top-2 right-2 w-20 h-20 opacity-20 pointer-events-none text-[#586E3C] group-hover:scale-110 transition-transform duration-500">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M20 80Q50 70 60 40Q75 20 85 15Q75 35 55 50Q40 60 20 80Z" />
                <circle cx="70" cy="30" r="10" opacity="0.6" />
              </svg>
            </div>

            <div className="space-y-3.5 relative z-10">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#586E3C] shadow-2xs">
                <Sprout className="w-5 h-5 fill-[#586E3C]/20 text-[#586E3C]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2314]">
                Thoughtfully Selected Ingredients
              </h3>
              <p className="text-xs sm:text-[13px] text-[#6E5A4E] leading-relaxed font-light">
                We carefully choose ingredients for our recipes, bringing together taste, texture and wholesome goodness.
              </p>
            </div>

            {/* Bottom Accent Pill */}
            <div className="h-1 w-7 bg-[#586E3C] rounded-full mt-6" />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM VALUE PILLARS STRIP                                             */}
        {/* ========================================================================= */}
        <div className="pt-4 sm:pt-6 space-y-4">
          
          {/* Main 4 Pillars Banner Bar */}
          <div className="rounded-2xl sm:rounded-full bg-[#FAF3EA]/95 backdrop-blur-md border border-[#EADBCA] p-4 sm:p-5 shadow-xs max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#EADBCA]">
              
              {/* Pillar 1 */}
              <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3">
                <div className="w-9 h-9 rounded-full bg-[#6B804E]/15 flex items-center justify-center text-[#586E3C] shrink-0">
                  <Leaf className="w-4 h-4 fill-[#586E3C]/30 text-[#586E3C]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#3D2314]">
                    Wholesome Ingredients
                  </h4>
                  <p className="text-[11px] text-[#7C6B5E]">Carefully Chosen</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-3">
                <div className="w-9 h-9 rounded-full bg-[#B85843]/15 flex items-center justify-center text-[#B85843] shrink-0">
                  <Heart className="w-4 h-4 text-[#B85843]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#3D2314]">
                    Made with Love
                  </h4>
                  <p className="text-[11px] text-[#7C6B5E]">For Families Like Yours</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-3">
                <div className="w-9 h-9 rounded-full bg-[#D49942]/15 flex items-center justify-center text-[#D49942] shrink-0">
                  <Users className="w-4 h-4 text-[#D49942]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#3D2314]">
                    500+ Happy Customers
                  </h4>
                  <p className="text-[11px] text-[#7C6B5E]">And Counting</p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-3">
                <div className="w-9 h-9 rounded-full bg-[#8C6D53]/15 flex items-center justify-center text-[#8C6D53] shrink-0">
                  <Star className="w-4 h-4 fill-[#8C6D53] text-[#8C6D53]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#3D2314]">
                    Snacks You Can Trust
                  </h4>
                  <p className="text-[11px] text-[#7C6B5E]">Simple. Honest. Delicious.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Centered Script Tagline */}
          <div className="text-center pt-2">
            <p className="font-script text-xl sm:text-2xl font-bold text-[#5A3825] inline-flex items-center gap-2">
              <span>Small Treats Big Smiles</span>
              <span className="text-[#B85843]">♡</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
