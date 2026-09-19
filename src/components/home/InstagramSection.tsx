"use client";

import React from "react";
import Image from "next/image";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { BRAND_SOCIALS } from "@/lib/whatsapp";
import { Heart, MessageCircle, ArrowUpRight } from "lucide-react";

const instagramPosts = [
  {
    image: "/gallery/insta-oven-tray.jpg",
    caption: "Hot baking tray straight out of our home oven! Fresh oatmeal lactation cookies cooling in the morning breeze 🍪✨",
    likes: "348",
    comments: "28",
    tag: "#FreshFromOven #NoMaida",
  },
  {
    image: "/gallery/insta-gift-hamper.jpg",
    caption: "Custom handcrafted gift hamper packed with love! Assorted dry fruit laddus & savoury seed crackers in glass jars 🎁💛",
    likes: "426",
    comments: "39",
    tag: "#ArtisanGifting #CleanSnacks",
  },
  {
    image: "/gallery/insta-banana-bread.jpg",
    caption: "Warm afternoon tea companion: Sliced banana walnut loaf made with 100% whole wheat & dark chocolate chips 🍞☕",
    likes: "392",
    comments: "34",
    tag: "#BananaBread #NoRefinedSugar",
  },
  {
    image: "/gallery/insta-walnut-brownie.jpg",
    caption: "Fudgy, rich dark cocoa walnut brownies cut into thick squares. Naturally sweetened indulgence without guilt 🍫❤️",
    likes: "512",
    comments: "53",
    tag: "#WalnutBrownie #HomemadeWithLove",
  },
];

export function InstagramSection() {
  return (
    <section className="pt-2.5 sm:pt-3 pb-3 sm:pb-4 bg-[#FFF8ED] border-t border-[#EADBCA]/80 relative overflow-hidden select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#FAF0EC]/60 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-[#F0F5EB]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3.5 sm:space-y-4">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EADBCA] text-xs font-bold uppercase tracking-widest text-[#B85843] shadow-2xs">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@TINYTREATSBYSWETHA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3D2314] tracking-tight leading-[1.15]">
            Follow Our Kitchen Journey on <br />
            <span className="text-[#B85843] font-serif italic font-normal">
              Instagram ♡
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#7C6B5E] font-light leading-relaxed">
            Follow us for fresh oven bakes, new creations, wholesome ingredient tips, and little moments from our home kitchen.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. INSTAGRAM PHOTO GRID WITH HOVER GLASS OVERLAYS                        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
          {instagramPosts.map((post, idx) => (
            <a
              key={idx}
              href={BRAND_SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FAF3EA] border border-[#EADBCA] shadow-2xs hover:shadow-xl transition-all duration-500 cursor-pointer block"
            >
              {/* Photo */}
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 768px) 50vw, 280px"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />

              {/* Instagram Floating Icon on Corner */}
              <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:bg-[#B85843] transition-all">
                <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Hover Overlay with Likes, Comments & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-5 flex flex-col justify-between text-white z-20">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-white/80 text-white/80" />
                    {post.comments}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] sm:text-xs text-white/95 leading-snug line-clamp-3 font-light">
                    {post.caption}
                  </p>
                  <span className="text-[10px] font-semibold text-[#E7CA9F] block">
                    {post.tag}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM INSTAGRAM PROFILE CTA BUTTON                                    */}
        {/* ========================================================================= */}
        <div className="text-center pt-1">
          <a
            href={BRAND_SOCIALS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-6 sm:px-7 rounded-full bg-gradient-to-r from-[#B85843] via-[#9F4833] to-[#B85843] hover:from-[#A34B35] hover:to-[#8E3B27] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @tinytreatsbyswetha on Instagram</span>
            <ArrowUpRight className="w-4 h-4 text-white/80" />
          </a>
          <p className="text-xs text-[#8C6D53] mt-1.5 font-medium">
            Join 2,400+ food lovers enjoying clean homemade treats ♡
          </p>
        </div>

      </div>
    </section>
  );
}
