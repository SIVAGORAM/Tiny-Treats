import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Sparkles,
  Leaf,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { BotanicalDivider, BotanicalSprig } from "@/components/ui/BotanicalFlourish";
import {
  InstagramIcon,
  FacebookIcon,
  XTwitterIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";
import { CookiePreferencesTrigger } from "@/components/ui/CookiePreferencesTrigger";
import {
  BRAND_PHONE,
  BRAND_EMAIL,
  BRAND_SOCIALS,
  getWhatsAppUrl,
} from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#341A0B] via-[#2A1408] to-[#1C0D05] text-[#FFF8ED] pt-5 sm:pt-7 pb-5 sm:pb-6 overflow-hidden border-t-2 border-[#D99A45]/40 font-sans select-none">
      
      {/* ── Warm Background Radial Glows & Textures ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[320px] bg-[radial-gradient(ellipse_at_top,rgba(217,154,69,0.2),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#B9573F]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D99A45]/08 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Top Gold Accent Shimmer Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D99A45]/70 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ========================================================================= */}
        {/* 1. TOP VALUE PILLARS (4 LUXURY GLASS TRUST CARDS)                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pb-5 sm:pb-6 border-b border-white/[0.12]">
          
          {/* Card 1 */}
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.08] hover:border-[#66723A]/50 transition-all duration-300 shadow-sm group">
            <div className="w-10 h-10 rounded-xl bg-[#66723A]/25 border border-[#66723A]/40 flex items-center justify-center text-[#9FD468] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#FFF8ED] group-hover:text-[#9FD468] transition-colors">
                100% Clean & Pure
              </h4>
              <p className="text-[11px] text-[#FFF8ED]/70 font-light mt-0.5">
                No maida, artificial colours or chemical additives
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.08] hover:border-[#D99A45]/50 transition-all duration-300 shadow-sm group">
            <div className="w-10 h-10 rounded-xl bg-[#D99A45]/25 border border-[#D99A45]/40 flex items-center justify-center text-[#F3C47A] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#FFF8ED] group-hover:text-[#F3C47A] transition-colors">
                Small Batch Love
              </h4>
              <p className="text-[11px] text-[#FFF8ED]/70 font-light mt-0.5">
                Handcrafted in our clean home kitchen with care
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.08] hover:border-[#B9573F]/50 transition-all duration-300 shadow-sm group">
            <div className="w-10 h-10 rounded-xl bg-[#B9573F]/25 border border-[#B9573F]/40 flex items-center justify-center text-[#F6957E] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#FFF8ED] group-hover:text-[#F6957E] transition-colors">
                Baked Fresh to Order
              </h4>
              <p className="text-[11px] text-[#FFF8ED]/70 font-light mt-0.5">
                Prepared fresh upon your order for peak aroma
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.08] hover:border-[#D99A45]/50 transition-all duration-300 shadow-sm group">
            <div className="w-10 h-10 rounded-xl bg-[#D99A45]/25 border border-[#D99A45]/40 flex items-center justify-center text-[#F3C47A] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#FFF8ED] group-hover:text-[#F3C47A] transition-colors">
                Family Approved
              </h4>
              <p className="text-[11px] text-[#FFF8ED]/70 font-light mt-0.5">
                Wholesome goodness to share with peace of mind
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN FOOTER NAVIGATION & BRAND IDENTITY GRID                           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 py-5 sm:py-6 border-b border-white/[0.12]">
          
          {/* Column 1: Brand Info & Direct Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Logo Badge with Illuminated Card Backing */}
            <Link
              href="/"
              className="inline-flex items-center bg-gradient-to-br from-[#FFFDF9] via-[#FFF8ED] to-[#F5EAD6] rounded-2xl px-4 py-1.5 sm:px-5 sm:py-2 shadow-md border-2 border-[#D99A45]/50 hover:border-[#D99A45] hover:scale-[1.02] transition-all duration-300 group"
            >
              <Image
                src="/logo.png"
                alt="Tiny Treats by Shweta"
                width={260}
                height={70}
                className="w-auto h-8 sm:h-10 md:h-11 max-w-[200px] sm:max-w-[240px] object-contain group-hover:brightness-105 transition-all"
              />
            </Link>

            <p className="text-xs sm:text-[13px] text-[#FFF8ED]/85 leading-relaxed font-light">
              Crafting honest, wholesome homemade treats with unrefined flours, pure butter, premium nuts, and lots of love.
            </p>

            {/* Direct Contact Pills */}
            <div className="space-y-1.5 pt-0.5 text-xs text-[#FFF8ED]/90">
              <a
                href="tel:+919395324365"
                className="flex items-center gap-2.5 p-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-[#D99A45]/20 flex items-center justify-center text-[#D99A45] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D99A45] text-[10px] uppercase font-bold tracking-wider">Phone:</span>
                  <span className="font-medium text-[#FFF8ED]">{BRAND_PHONE}</span>
                </div>
              </a>

              <a
                href="mailto:hello@tinytreats.com"
                className="flex items-center gap-2.5 p-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-[#B9573F]/25 flex items-center justify-center text-[#F3E2C4] shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D99A45] text-[10px] uppercase font-bold tracking-wider">Email:</span>
                  <span className="font-medium text-[#FFF8ED]">{BRAND_EMAIL}</span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-1.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div className="w-6 h-6 rounded-lg bg-[#66723A]/25 flex items-center justify-center text-[#C0D880] shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#D99A45] text-[10px] uppercase font-bold tracking-wider">Location:</span>
                  <span className="font-medium text-[#FFF8ED]">Hyderabad, India</span>
                </div>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-1">
              <div className="flex items-center gap-2">
                <a
                  href={BRAND_SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiny Treats on Instagram"
                  className="w-8 h-8 rounded-xl bg-white/[0.08] hover:bg-[#B9573F] text-white flex items-center justify-center border border-white/[0.1] hover:border-transparent transition-all shadow-2xs hover:scale-105"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={BRAND_SOCIALS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiny Treats on Facebook"
                  className="w-8 h-8 rounded-xl bg-white/[0.08] hover:bg-[#B9573F] text-white flex items-center justify-center border border-white/[0.1] hover:border-transparent transition-all shadow-2xs hover:scale-105"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={BRAND_SOCIALS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiny Treats on X"
                  className="w-8 h-8 rounded-xl bg-white/[0.08] hover:bg-[#B9573F] text-white flex items-center justify-center border border-white/[0.1] hover:border-transparent transition-all shadow-2xs hover:scale-105"
                >
                  <XTwitterIcon className="w-3" />
                </a>
                <a
                  href={BRAND_SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiny Treats on LinkedIn"
                  className="w-8 h-8 rounded-xl bg-white/[0.08] hover:bg-[#B9573F] text-white flex items-center justify-center border border-white/[0.1] hover:border-transparent transition-all shadow-2xs hover:scale-105"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={getWhatsAppUrl("Hello Tiny Treats! 👋 I'm contacting from your website footer.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiny Treats on WhatsApp"
                  className="w-8 h-8 rounded-xl bg-[#66723A] hover:bg-[#526A3A] text-white flex items-center justify-center border border-[#66723A]/40 hover:border-transparent transition-all shadow-2xs hover:scale-105"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Explore Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-sm sm:text-base font-bold text-[#FFF8ED] flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#D99A45] rounded-full" />
              <span>Explore</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#FFF8ED]/80">
              {[
                { name: "Home", href: "/" },
                { name: "Our Menu", href: "/menu" },
                { name: "Our Story", href: "/about" },
                { name: "Kitchen Gallery", href: "/gallery" },
                { name: "Contact & Orders", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 hover:text-[#D99A45] hover:translate-x-1 transition-all"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D99A45]/60" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Signature Treats Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-sm sm:text-base font-bold text-[#FFF8ED] flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#B9573F] rounded-full" />
              <span>Our Treats</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#FFF8ED]/80">
              {[
                { name: "Cookies & Biscuits", href: "/menu?category=cookies" },
                { name: "Nutritious Laddus", href: "/menu?category=laddus" },
                { name: "Seed Crackers", href: "/menu?category=seed-crackers" },
                { name: "Homemade Breads", href: "/menu?category=breads" },
                { name: "Cakes (Whole Wheat)", href: "/menu?category=cakes" },
                { name: "Walnut & Chocolate Brownies", href: "/menu?category=brownies" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 hover:text-[#D99A45] hover:translate-x-1 transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B9573F]/80" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: The Tiny Promise & Direct WhatsApp Box (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-sm sm:text-base font-bold text-[#FFF8ED] flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#66723A] rounded-full" />
              <span>Our Tiny Promise</span>
            </h3>
            
            {/* Guarantee Box */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent border border-[#D99A45]/30 space-y-2.5 shadow-lg">
              <p className="text-[11px] text-[#FFF8ED]/85 leading-relaxed font-light">
                Every order is prepared with care in small batches in our home kitchen. We make treats we are proud to serve our own family.
              </p>
              
              <div className="space-y-1 text-[11px] text-[#D99A45]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D99A45] shrink-0" />
                  <span>No Maida (Selected Range)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D99A45] shrink-0" />
                  <span>No Added Sugar (Selected Range)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D99A45] shrink-0" />
                  <span>No Artificial Food Colours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D99A45] shrink-0" />
                  <span>Fresh Small-Batch Preparation</span>
                </div>
              </div>

              {/* Direct Baker WhatsApp Concierge Button */}
              <div className="pt-1">
                <a
                  href={getWhatsAppUrl("Hello Tiny Treats! 👋 I'd like to ask a question or place an order.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#66723A] to-[#526A3A] hover:from-[#526A3A] hover:to-[#43592D] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all group"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Ask Baker on WhatsApp</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. BOTANICAL DIVIDER & SCRIPT BRANDING                                    */}
        {/* ========================================================================= */}
        <div className="py-3 sm:py-3.5 flex flex-col items-center justify-center gap-1">
          <BotanicalDivider className="text-[#D99A45]/60 scale-90" />
        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM SIGNATURE & LEGAL BAR                                           */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#FFF8ED]/75 pt-1">
          <p className="text-center md:text-left">
            © 2026 Tiny Treats by Shweta. All rights reserved.
          </p>

          <div className="flex items-center gap-2 font-script text-base sm:text-lg text-[#D99A45]">
            <span>Small Treats. Big Love.</span>
            <Heart className="w-3.5 h-3.5 text-[#B9573F] fill-[#B9573F] inline" />
            <span className="font-sans text-xs text-[#FFF8ED]/60">• Made with love in Hyderabad</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-[#FFF8ED]/60">
            <Link href="/privacy-policy" className="hover:text-[#FFF8ED] transition-colors underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms-and-conditions" className="hover:text-[#FFF8ED] transition-colors underline-offset-2 hover:underline">
              Terms & Conditions
            </Link>
            <span>·</span>
            <Link href="/cookie-policy" className="hover:text-[#FFF8ED] transition-colors underline-offset-2 hover:underline">
              Cookie Policy
            </Link>
            <span>·</span>
            <CookiePreferencesTrigger className="hover:text-[#FFF8ED] transition-colors underline-offset-2 hover:underline cursor-pointer bg-transparent border-0 p-0 text-[11px] font-normal shadow-none text-[#FFF8ED]/60" />
          </div>
        </div>

      </div>
    </footer>
  );
}
