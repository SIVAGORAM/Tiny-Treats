import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/* ────────────────────────────────────────────────────────────
   STORY PREVIEW — DARK CINEMATIC PREMIUM SECTION
   ──────────────────────────────────────────────────────────── */

export function StoryPreview() {
  return (
    <section className="relative overflow-hidden select-none bg-[#1C1410]">
      {/* ── Radial Spotlight ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,153,66,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_100%,rgba(184,88,67,0.06),transparent_60%)] pointer-events-none" />

      {/* ── Grain / Noise Texture ── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Subtle Dot Grid Pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #D49942 0.7px, transparent 0.7px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Diagonal Fine Lines ── */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(212,153,66,0.3) 40px,
            rgba(212,153,66,0.3) 41px
          )`,
        }}
      />

      {/* ── Ambient Glow Effects ── */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#B85843]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#D49942]/8 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#D49942]/[0.03] blur-[100px] pointer-events-none" />

      {/* ── Decorative Corner Arcs ── */}
      <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none opacity-[0.06]">
        <div className="absolute top-0 left-0 w-full h-full border-b-2 border-r-2 border-[#D49942] rounded-br-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-[0.06]">
        <div className="absolute bottom-0 right-0 w-full h-full border-t-2 border-l-2 border-[#D49942] rounded-tl-full" />
      </div>

      {/* ── Top Gold Line ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D49942]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        {/* ── HEADER ROW ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-8 h-px bg-[#D49942]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D49942]">
                Our Story
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-white tracking-tight leading-[1.1]">
              Small Kitchen.
              <br />
              <span className="bg-gradient-to-r from-[#D49942] via-[#F0C674] to-[#D49942] bg-clip-text text-transparent">
                Big Heart.
              </span>
            </h2>
          </div>

          {/* Description — right aligned on desktop */}
          <p className="text-sm sm:text-[15px] text-white/50 leading-relaxed max-w-md lg:text-right">
            What started as a mother&apos;s mission to give her kids
            preservative-free snacks — turned into a brand families trust and
            love.
          </p>
        </div>

        {/* ── IMAGE MOSAIC + CONTENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {/* Left — Tall Image */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden group">
              <Image
                src="/story/story-hands-dough.jpg"
                alt="Hands lovingly kneading fresh whole wheat dough"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D49942] font-bold block mb-1">
                  Handcrafted
                </span>
                <p className="font-serif text-white text-lg font-bold leading-tight">
                  Every treat shaped
                  <br />
                  by hand, with love
                </p>
              </div>
            </div>
          </div>

          {/* Center — Main Image + Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative flex-1 min-h-[260px] sm:min-h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden group">
              <Image
                src="/story/story-kitchen-warmth.jpg"
                alt="Freshly baked cookies cooling on a rack with honey and almonds"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-white/15 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20">
                <span className="text-[10px] text-white font-bold uppercase tracking-[0.15em]">
                  ✦ Fresh batch daily
                </span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: "17+", label: "Artisan Treats" },
                { value: "500+", label: "Happy Families" },
                { value: "100%", label: "Homemade" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center py-4 sm:py-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.07] transition-colors duration-300"
                >
                  <p className="font-serif text-xl sm:text-2xl font-bold bg-gradient-to-b from-[#F0C674] to-[#D49942] bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-white/40 uppercase tracking-wider font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Quote + Promises */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Quote Card */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#B85843] to-[#8B3A2A] relative overflow-hidden flex-1 flex flex-col justify-center">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

              <span className="text-4xl text-white/20 font-serif leading-none block mb-3 relative z-10">
                &ldquo;
              </span>
              <blockquote className="font-serif text-[15px] sm:text-base text-white/90 italic leading-relaxed mb-4 relative z-10">
                Would I happily serve this to my own children every single day?
              </blockquote>
              <div className="flex items-center gap-2 relative z-10">
                <span className="w-5 h-px bg-[#F0C674]/50" />
                <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wider">
                  Our Founding Promise
                </p>
              </div>
            </div>

            {/* Promise Pills */}
            <div className="space-y-3">
              {[
                { emoji: "🌾", text: "100% Maida Free" },
                { emoji: "🛡️", text: "Zero Preservatives" },
                { emoji: "🏅", text: "Premium Nuts & Seeds" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] transition-colors duration-300"
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="text-xs sm:text-[13px] text-white/70 font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ROW ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2.5 h-13 sm:h-14 px-9 rounded-full bg-gradient-to-r from-[#D49942] to-[#C08530] hover:from-[#C08530] hover:to-[#A87228] text-white font-semibold text-sm shadow-lg shadow-[#D49942]/20 hover:shadow-xl hover:shadow-[#D49942]/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] group w-full sm:w-auto"
          >
            <span>Read Our Full Story</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={getWhatsAppUrl(
              "Hello Tiny Treats! 👋 I would like to learn more about your homemade treats."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 h-13 sm:h-14 px-8 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-white/80 hover:text-white font-semibold text-sm border border-white/[0.12] hover:border-white/[0.2] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ── Bottom Gold Line ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D49942]/40 to-transparent" />
    </section>
  );
}
