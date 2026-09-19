"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { CategoryInfo } from "@/types/product";

interface CategoryCardProps {
  category: CategoryInfo;
  emoji: string;
  image: string;
  badge: string;
  itemCount: string;
  accentColor: string;
  bgLight: string;
}

export function CategoryCard({
  category,
  emoji,
  image,
  badge,
  itemCount,
  accentColor,
  bgLight,
}: CategoryCardProps) {
  return (
    <Link
      href={`/menu?category=${category.slug}`}
      className="group relative flex flex-col justify-between rounded-3xl bg-white/95 border border-[#EADBCA] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Top Visual Photography Banner with Rounded Corners */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF3EA]">
        <Image
          src={image}
          alt={`${category.name} - Tiny Treats by Shweta`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
          className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
        {/* Soft Organic Edge Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />

        {/* Floating Category Badge Pill (Top Left) */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/40 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#D49942]" />
          <span className="text-[11px] font-bold text-[#3D2314] uppercase tracking-wider">
            {badge}
          </span>
        </div>

        {/* Floating Treat Count Pill (Top Right) */}
        <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-[#3D2314]/85 backdrop-blur-md text-[#FFF8ED] text-[10.5px] font-semibold border border-white/20 shadow-sm">
          {itemCount}
        </div>

        {/* Bottom Banner Title Overlay on Photo */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="font-serif text-2xl sm:text-[26px] font-extrabold drop-shadow-md text-white group-hover:text-[#FFF3E0] transition-colors leading-tight">
            {category.name}
          </h3>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-gradient-to-b from-white to-[#FFF9F0]/60">
        
        <div className="space-y-3">
          {/* Description */}
          <p className="text-xs sm:text-[13px] text-[#6E5A4E] leading-relaxed font-light line-clamp-2">
            {category.description}
          </p>

          {/* Subcategories Treats Chips */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {category.subcategories.map((sub, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-xl bg-[#FAF3EA] hover:bg-[#F3E5D3] text-[#4A2E1C] text-[11px] font-medium border border-[#EADBCA]/70 transition-colors"
                >
                  {sub}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 border-t border-[#EADBCA]/70 flex items-center justify-between">
          <span className="text-xs sm:text-[13px] font-bold text-[#B85843] group-hover:text-[#8F3C28] transition-colors flex items-center gap-1.5">
            <span>Explore {category.name}</span>
          </span>

          <div className="w-8 h-8 rounded-full bg-[#FAF3EA] group-hover:bg-[#B85843] text-[#4A2E1C] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

      </div>

      {/* Bottom Color Accent Strip */}
      <div
        className="h-1 w-full"
        style={{ backgroundColor: accentColor }}
      />
    </Link>
  );
}
