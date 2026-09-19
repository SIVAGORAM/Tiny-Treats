"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ProtectedImage } from "@/components/ui/ProtectedImage";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cart-store";
import { MobileMenu } from "./MobileMenu";
import { SearchModal } from "./SearchModal";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartNotificationToast } from "@/components/cart/CartNotificationToast";
import logoImg from "@/../public/logo.png";
import { getWhatsAppUrl, BRAND_SOCIALS } from "@/lib/whatsapp";
import {
  InstagramIcon,
  FacebookIcon,
  XTwitterIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";
import {
  ShoppingBag,
  Menu,
  MessageCircle,
  Wheat,
  Heart,
  Search,
  ChevronDown,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Star,
  Coffee,
} from "lucide-react";

const menuCategories = [
  {
    name: "Signature Cookies",
    desc: "Almond & Ragi homemade crunchies",
    icon: Sparkles,
    iconColor: "text-[#B9573F]",
    bgColor: "bg-[#FAF0EC]",
    href: "/menu?category=cookies",
  },
  {
    name: "Nourishing Laddus",
    desc: "High protein, roasted nuts & seeds",
    icon: Heart,
    iconColor: "text-[#D99A45]",
    bgColor: "bg-[#FAF4E8]",
    href: "/menu?category=laddus",
  },
  {
    name: "Artisan Breads",
    desc: "100% Millet & multi-seed loaves",
    icon: Wheat,
    iconColor: "text-[#66723A]",
    bgColor: "bg-[#F0F5EB]",
    href: "/menu?category=breads",
  },
  {
    name: "Wholesome Cakes & Brownies",
    desc: "Date-sweetened, no refined sugar",
    icon: Star,
    iconColor: "text-[#B9573F]",
    bgColor: "bg-[#FAF0EC]",
    href: "/menu?category=cakes",
  },
  {
    name: "Crispy Seed Crackers",
    desc: "5-Seed savory blend, gluten-conscious",
    icon: ShieldCheck,
    iconColor: "text-[#66723A]",
    bgColor: "bg-[#F0F5EB]",
    href: "/menu?category=seed-crackers",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openCart, getItemCount } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setMenuDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setMenuDropdownOpen(false);
    }, 150);
  };

  const itemCount = mounted ? getItemCount() : 0;

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. TOP ANNOUNCEMENT RIBBON — FULLY RESPONSIVE & PREMIUM SOCIALS          */}
      {/* ========================================================================= */}
      <div className="w-full bg-gradient-to-r from-[#341A0B] via-[#2A1408] to-[#341A0B] text-[#FFF6EB] text-xs py-1.5 px-3 sm:px-6 lg:px-8 select-none relative z-50 font-sans border-b border-[#D99A45]/30 overflow-hidden shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-[11px] sm:text-[12px]">

          {/* Left Brand Values: Responsive Badges */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 overflow-hidden font-medium">
            <div className="flex items-center gap-1.5 shrink-0 text-[#FFF3E0]">
              <Sparkles className="w-3.5 h-3.5 text-[#E5B56E]" />
              <span className="hidden sm:inline">
                Freshly baked homemade treats in small batches
              </span>
              <span className="inline sm:hidden">
                Freshly baked treats
              </span>
            </div>

            <span className="hidden md:inline text-[#D99A45]/40 select-none">|</span>

            <div className="hidden md:flex items-center gap-1.5 shrink-0 text-[#FFF3E0]">
              <Wheat className="w-3.5 h-3.5 text-[#E5B56E]" />
              <span>No Maida</span>
            </div>

            <span className="hidden lg:inline text-[#D99A45]/40 select-none">|</span>

            <div className="hidden lg:flex items-center gap-1.5 shrink-0 text-[#FFF3E0]">
              <Heart className="w-3.5 h-3.5 text-[#E5B56E] fill-[#E5B56E]/20" />
              <span>No Added Sugar</span>
            </div>

            <span className="hidden xl:inline text-[#D99A45]/40 select-none">|</span>

            <div className="hidden xl:flex items-center gap-1.5 shrink-0 text-[#FFF3E0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E5B56E]" />
              <span>No Artificial Colours</span>
            </div>
          </div>

          {/* Right Script Tagline & Premium Social Media Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="font-script text-[12.5px] xs:text-[13.5px] sm:text-[14.5px] text-[#F3C47A] font-bold tracking-wide whitespace-nowrap drop-shadow-sm flex items-center gap-1">
              <span>Good Food, Brighter Days</span>
              <span className="text-[#F6957E] animate-pulse">♡</span>
            </span>

            <span className="inline-block w-px h-3.5 bg-white/20 select-none" />

            {/* Social Media Interactive Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href={BRAND_SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiny Treats on Instagram"
                title="Instagram"
                className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-white/[0.08] hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-[#F3E2C4] hover:text-white flex items-center justify-center border border-white/[0.14] hover:border-transparent transition-all duration-200 shadow-2xs hover:scale-115 active:scale-95"
              >
                <InstagramIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>

              <a
                href={BRAND_SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiny Treats on Facebook"
                title="Facebook"
                className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-white/[0.08] hover:bg-[#1877F2] text-[#F3E2C4] hover:text-white flex items-center justify-center border border-white/[0.14] hover:border-transparent transition-all duration-200 shadow-2xs hover:scale-115 active:scale-95"
              >
                <FacebookIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>

              <a
                href={BRAND_SOCIALS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiny Treats on X"
                title="X (Twitter)"
                className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-white/[0.08] hover:bg-black/90 text-[#F3E2C4] hover:text-white flex items-center justify-center border border-white/[0.14] hover:border-transparent transition-all duration-200 shadow-2xs hover:scale-115 active:scale-95"
              >
                <XTwitterIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </a>

              <a
                href={BRAND_SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiny Treats on LinkedIn"
                title="LinkedIn"
                className="hidden xs:flex w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-white/[0.08] hover:bg-[#0A66C2] text-[#F3E2C4] hover:text-white items-center justify-center border border-white/[0.14] hover:border-transparent transition-all duration-200 shadow-2xs hover:scale-115 active:scale-95"
              >
                <LinkedInIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>

              <a
                href={getWhatsAppUrl("Hello Tiny Treats! 👋 I'm contacting you from your website top bar.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Baker on WhatsApp"
                title="WhatsApp Direct"
                className="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-full bg-[#66723A]/80 hover:bg-[#25D366] text-white flex items-center justify-center border border-[#66723A]/50 hover:border-transparent transition-all duration-200 shadow-2xs hover:scale-115 active:scale-95"
              >
                <WhatsAppIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN STICKY NAVBAR                                                     */}
      {/* ========================================================================= */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 relative ${isScrolled
            ? "bg-[#FFF9F0]/95 backdrop-blur-md shadow-sm border-b border-[#EADBCA] py-2 sm:py-2.5"
            : "bg-[#FFF9F0] border-b border-[#EADBCA]/80 py-2.5 sm:py-3.5"
          }`}
      >
        {/* Decorative corner botanical flourish */}
        <div
          className="absolute top-0 right-0 h-full w-24 sm:w-32 pointer-events-none opacity-25 select-none overflow-hidden hidden xl:block"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 120 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-contain object-right"
          >
            <path
              d="M120 10C95 18 85 42 75 75C88 65 105 50 120 10Z"
              fill="#526A3A"
              fillOpacity="0.4"
            />
            <path
              d="M100 5C82 15 70 38 60 68C72 58 88 45 100 5Z"
              fill="#748E54"
              fillOpacity="0.3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 relative">

          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center focus-visible:outline-ring rounded-lg shrink-0 py-0.5"
          >
            <div className="relative h-11 xs:h-12 sm:h-14 md:h-15 lg:h-16 w-auto flex items-center">
              <ProtectedImage
                src={logoImg}
                alt="Tiny Treats by Swetha - No Junk, Just Goodness"
                priority
                className="h-10 xs:h-11 sm:h-13 md:h-14 lg:h-15.5 w-auto object-contain mix-blend-multiply group-hover:scale-103 transition-transform duration-300"
              />
              <span className="sr-only">Tiny Treats by Swetha</span>
            </div>
          </Link>

          {/* Desktop & Tablet Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-4 lg:gap-7 xl:gap-9 text-[14px] lg:text-[15px]"
            aria-label="Main Navigation"
          >
            {/* Home */}
            <Link
              href="/"
              className={`font-medium transition-all relative py-1 focus-visible:outline-ring rounded tracking-normal ${pathname === "/"
                  ? "text-[#B9573F] font-semibold"
                  : "text-[#4A2E1C]/90 hover:text-[#B9573F]"
                }`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#B9573F] rounded-full animate-in fade-in" />
              )}
            </Link>

            {/* Menu with Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/menu"
                className={`flex items-center gap-1 font-medium transition-all relative py-1 focus-visible:outline-ring rounded tracking-normal group ${pathname?.startsWith("/menu")
                    ? "text-[#B9573F] font-semibold"
                    : "text-[#4A2E1C]/90 hover:text-[#B9573F]"
                  }`}
              >
                <span>Menu</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 text-[#4A2E1C]/70 group-hover:text-[#B9573F] ${menuDropdownOpen ? "rotate-180 text-[#B9573F]" : ""
                    }`}
                />
                {pathname?.startsWith("/menu") && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#B9573F] rounded-full animate-in fade-in" />
                )}
              </Link>

              {/* Mega Dropdown Menu */}
              {menuDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-72 sm:w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[#EADBCA] shadow-xl space-y-1">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-[#8C6D53] uppercase tracking-wider flex items-center justify-between border-b border-[#F0E4D4] pb-2">
                      <span>Treat Categories</span>
                      <span className="text-[#B9573F] text-[10px] font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> 100% Wholesome
                      </span>
                    </div>

                    <div className="pt-1 space-y-1">
                      {menuCategories.map((cat) => (
                        <Link
                          key={cat.name}
                          href={cat.href}
                          onClick={() => setMenuDropdownOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FFF8ED] transition-colors group/item"
                        >
                          <div className={`w-8 h-8 rounded-lg ${cat.bgColor} flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform shadow-2xs`}>
                            <cat.icon className={`w-4 h-4 ${cat.iconColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-[#4A2E1C] group-hover/item:text-[#B9573F] transition-colors">
                              {cat.name}
                            </p>
                            <p className="text-[11px] text-[#8C6D53] truncate">
                              {cat.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-[#F0E4D4] px-2">
                      <Link
                        href="/menu"
                        onClick={() => setMenuDropdownOpen(false)}
                        className="flex items-center justify-between text-xs font-bold text-[#B9573F] hover:text-[#97412C] py-1 transition-colors"
                      >
                        <span>Explore All 17+ Treats</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Our Story */}
            <Link
              href="/about"
              className={`font-medium transition-all relative py-1 focus-visible:outline-ring rounded tracking-normal ${pathname === "/about"
                  ? "text-[#B9573F] font-semibold"
                  : "text-[#4A2E1C]/90 hover:text-[#B9573F]"
                }`}
            >
              Our Story
              {pathname === "/about" && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#B9573F] rounded-full animate-in fade-in" />
              )}
            </Link>

            {/* Gallery */}
            <Link
              href="/gallery"
              className={`font-medium transition-all relative py-1 focus-visible:outline-ring rounded tracking-normal ${pathname === "/gallery"
                  ? "text-[#B9573F] font-semibold"
                  : "text-[#4A2E1C]/90 hover:text-[#B9573F]"
                }`}
            >
              Gallery
              {pathname === "/gallery" && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#B9573F] rounded-full animate-in fade-in" />
              )}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`font-medium transition-all relative py-1 focus-visible:outline-ring rounded tracking-normal ${pathname === "/contact"
                  ? "text-[#B9573F] font-semibold"
                  : "text-[#4A2E1C]/90 hover:text-[#B9573F]"
                }`}
            >
              Contact
              {pathname === "/contact" && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#B9573F] rounded-full animate-in fade-in" />
              )}
            </Link>
          </nav>

          {/* Right Action Cluster: Search, Cart & WhatsApp */}
          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 shrink-0">

            {/* 1. Large Search Bar Pill (Desktop Only) */}
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search treats"
              className="hidden lg:flex items-center gap-2 h-9 sm:h-10 px-3.5 rounded-full bg-[#F4EBE0]/80 hover:bg-[#EFE3D3] border border-[#E3D3C0] hover:border-[#CCA88C] text-[#846D5B] hover:text-[#4A2E1C] transition-all cursor-pointer shadow-2xs group w-36 xl:w-48 text-left"
            >
              <Search className="w-3.5 h-3.5 text-[#A0826C] group-hover:text-[#5A321B] shrink-0" />
              <span className="text-xs font-normal truncate">Search treats...</span>
            </button>

            {/* Compact Search Button (Mobile & Tablet) */}
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search treats"
              className="lg:hidden w-8.5 h-8.5 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-[#F4EBE0]/80 border border-[#E3D3C0] text-[#4A2E1C] hover:bg-[#EFE3D3] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#5A321B]" />
            </button>

            {/* 2. Shopping Bag Cart Button */}
            <button
              onClick={openCart}
              aria-label={`Open shopping cart with ${itemCount} items`}
              className="relative flex items-center justify-center w-8.5 h-8.5 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-[#F4EBE0]/80 hover:bg-[#EFE3D3] border border-[#E3D3C0] hover:border-[#CCA88C] text-[#4A2E1C] hover:text-[#B9573F] transition-all cursor-pointer shadow-2xs group"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110 text-[#4A2E1C]" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[17px] h-[17px] px-1 rounded-full bg-[#B9573F] text-white text-[9.5px] sm:text-[10px] font-bold shadow-xs ring-2 ring-[#FFF9F0] animate-in zoom-in-75">
                {itemCount}
              </span>
            </button>

            {/* 3. WhatsApp CTA Button */}
            <a
              href={getWhatsAppUrl(
                "Hello Tiny Treats! 👋 I would like to check availability and place an order."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 h-8.5 xs:h-9 sm:h-10 px-2.5 xs:px-3 sm:px-4.5 lg:px-5 rounded-full bg-[#526A3A] hover:bg-[#43592D] text-white text-xs sm:text-[13px] font-semibold shadow-sm hover:shadow-md transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-white" />
              <span className="hidden sm:inline">Order on WhatsApp</span>
              <span className="hidden xs:inline sm:hidden">Order</span>
              <ArrowRight className="w-3 h-3 hidden lg:inline text-white/80" />
            </a>

            {/* 4. Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="md:hidden w-8.5 h-8.5 xs:w-9 xs:h-9 flex items-center justify-center rounded-full bg-[#F4EBE0]/80 border border-[#E3D3C0] text-[#4A2E1C] hover:bg-[#EFE3D3] transition-colors cursor-pointer"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Global Product Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />

      {/* Global Slide-in Cart Drawer */}
      <CartDrawer />

      {/* Global Added-to-Cart Toast Notification with Dual Actions */}
      <CartNotificationToast />

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />
    </>
  );
}


