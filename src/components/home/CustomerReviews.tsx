"use client";

import React from "react";
import { Star, Heart, Sparkles, MessageCircle, Quote, CheckCircle2 } from "lucide-react";
import { REVIEWS, REVIEW_PILLARS, ReviewItem } from "@/data/reviews";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function CustomerReviews() {
  // Split reviews into two balanced tracks for staggered dual-row continuous marquee
  const track1Reviews = [REVIEWS[0], REVIEWS[1], REVIEWS[2], REVIEWS[3]];
  const track2Reviews = [REVIEWS[4], REVIEWS[5], REVIEWS[6], REVIEWS[0], REVIEWS[2]];

  // Duplicate for seamless 50% loop translation
  const track1 = [...track1Reviews, ...track1Reviews, ...track1Reviews];
  const track2 = [...track2Reviews, ...track2Reviews, ...track2Reviews];

  const renderReviewCard = (rev: ReviewItem, keyPrefix: string, idx: number) => (
    <div
      key={`${keyPrefix}-${rev.id}-${idx}`}
      className="w-[290px] sm:w-[340px] shrink-0 p-5 sm:p-5.5 rounded-2xl bg-white border border-brand-brown/10 shadow-subtle hover:shadow-hover hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between text-left group hover:scale-[1.01]"
    >
      <div className="space-y-2.5">
        {/* Card Header: 5 Stars + Product Pill */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-0.5 text-brand-gold">
            {[...Array(rev.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            ))}
          </div>

          <span className="px-2.5 py-0.5 rounded-full bg-brand-cream text-brand-terracotta border border-brand-brown/10 text-[11px] font-semibold tracking-wide truncate max-w-[150px]">
            {rev.product}
          </span>
        </div>

        {/* Compact Quote */}
        <div className="relative pt-0.5">
          <p className="text-[13px] sm:text-[13.5px] text-brand-brown/90 leading-snug font-medium line-clamp-3">
            &ldquo;{rev.quote}&rdquo;
          </p>
        </div>
      </div>

      {/* Author & Verified Tag */}
      <div className="pt-3 mt-3 border-t border-brand-brown/10 flex items-center justify-between">
        <div>
          <h4 className="text-[11px] sm:text-xs font-bold text-brand-brown">
            {rev.author}
          </h4>
          <span className="text-[10px] text-brand-muted font-light">
            {rev.tag}
          </span>
        </div>

        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-sage/15 text-brand-sage text-[10px] font-semibold shrink-0">
          <CheckCircle2 className="w-2.5 h-2.5 text-brand-sage" />
          Verified
        </span>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-[#FFF8ED] relative overflow-hidden border-t border-brand-brown/10">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-brand-terracotta/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-brown/10 shadow-2xs text-[11px] font-semibold uppercase tracking-widest text-brand-terracotta">
            <Heart className="w-3 h-3 text-brand-terracotta fill-brand-terracotta" />
            <span>Loved by Our Customers</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-brown tracking-tight">
            Real Stories. <span className="text-brand-terracotta italic font-normal">Homemade Happiness.</span>
          </h2>

          <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed max-w-xl mx-auto">
            At Tiny Treats, every order is prepared with care in small batches. Here are some of the lovely experiences shared by our customers.
          </p>
        </div>
      </div>

      {/* Infinite Moving Carousel Tracks with Gradient Side Fades */}
      <div className="relative w-full overflow-hidden mt-8 space-y-4">
        {/* Left & Right Smooth Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FFF8ED] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FFF8ED] to-transparent z-20" />

        {/* Row 1: Scrolling Left Continuously */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee-slow gap-4 pr-4">
            {track1.map((rev, idx) => renderReviewCard(rev, "t1", idx))}
          </div>
        </div>

        {/* Row 2: Scrolling Right Continuously */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee-slow-reverse gap-4 pr-4">
            {track2.map((rev, idx) => renderReviewCard(rev, "t2", idx))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-12">
        {/* Why Customers Love Tiny Treats Pillars */}
        <div className="space-y-8">
          <div className="text-center space-y-1.5 max-w-xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold">
              The Tiny Treats Difference
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-brown">
              Why Customers Love Tiny Treats
            </h3>
            <p className="text-xs text-brand-muted font-light">
              Simple choices that bring healthy smiles and comforting satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {REVIEW_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-brand-brown/10 shadow-2xs hover:shadow-subtle transition-all duration-300 space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-brown/10 flex items-center justify-center text-xl shadow-2xs">
                  {pillar.icon}
                </div>
                <h4 className="font-serif text-base font-bold text-brand-brown">
                  {pillar.title}
                </h4>
                <p className="text-[12px] text-brand-muted leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Real People. Real Feedback. Closing Tribute Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#5A321B] via-[#4A2613] to-[#3B1C0B] text-[#FFF8ED] p-6 sm:p-10 text-center space-y-5 shadow-hover relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold text-brand-gold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Real People. Real Feedback.
            </span>

            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-brand-cream">
              Thank you for being part of the Tiny Treats family. ❤️
            </h3>

            <p className="text-xs text-brand-cream/80 font-light leading-relaxed max-w-lg mx-auto">
              Every review represents someone&apos;s personal experience with our homemade treats. We are grateful for every review and recommendation.
            </p>

            <div className="pt-2">
              <span className="font-script text-lg sm:text-xl text-brand-gold block">
                Healthy Choices. Homemade Happiness. ♡
              </span>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hello Tiny Treats! 👋 I was reading customer reviews and would love to order fresh treats.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-sage text-white font-semibold text-xs sm:text-sm shadow-subtle hover:bg-brand-sage-dark transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

