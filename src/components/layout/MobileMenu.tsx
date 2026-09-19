"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MessageCircle, X, ChevronRight, Phone, Search, Sparkles } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch?: () => void;
}

const navLinks = [
  { href: "/", label: "Home", description: "Welcome & signature treats" },
  { href: "/menu", label: "Our Menu", description: "17+ wholesome homemade treats" },
  { href: "/about", label: "Our Story", description: "Shweta's artisan baking journey" },
  { href: "/gallery", label: "Gallery", description: "Kitchen moments & customer smiles" },
  { href: "/contact", label: "Contact", description: "Custom gifting & orders" },
];

export function MobileMenu({ isOpen, onClose, onOpenSearch }: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-[#FFF9F0] text-[#2B211B] animate-in fade-in duration-200">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EADBCA] bg-[#FFF9F0]">
        <Link href="/" onClick={onClose} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Tiny Treats by Shweta"
            width={240}
            height={75}
            className="h-11 w-auto object-contain mix-blend-multiply"
          />
          <span className="sr-only">Tiny Treats by Shweta</span>
        </Link>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F4EBE0] text-[#4A2E1C] hover:bg-[#EFE3D3] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Nav Content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
        {/* Search Bar in Mobile Menu */}
        {onOpenSearch && (
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#EADBCA] text-left text-xs text-[#8C6D53] hover:border-[#CCA88C] transition-all shadow-2xs cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#A0826C]" />
            <span>Search cookies, laddus, artisan bread...</span>
          </button>
        )}

        <div>
          <p className="text-[11px] font-bold tracking-wider text-[#8C6D53] uppercase mb-2.5 px-1">
            Navigation
          </p>
          <div className="space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                    isActive
                      ? "bg-[#B9573F] text-white shadow-sm"
                      : "bg-white border border-[#EADBCA]/70 hover:bg-[#FFF8ED] text-[#4A2E1C]"
                  }`}
                >
                  <div>
                    <span
                      className={`block font-serif text-base font-bold ${
                        isActive ? "text-white" : "text-[#4A2E1C]"
                      }`}
                    >
                      {link.label}
                    </span>
                    <span
                      className={`block text-[11px] mt-0.5 ${
                        isActive ? "text-white/85" : "text-[#8C6D53]"
                      }`}
                    >
                      {link.description}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 ${isActive ? "text-white" : "text-[#D99A45]"}`}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Categories Quick Jump */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <p className="text-[11px] font-bold tracking-wider text-[#8C6D53] uppercase">
              Treat Categories
            </p>
            <span className="text-[10px] text-[#B9573F] font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> No Preservatives
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            <Link
              href="/menu?category=cookies"
              onClick={onClose}
              className="p-3 bg-white border border-[#EADBCA]/70 rounded-xl text-[#4A2E1C] hover:bg-[#FFF8ED] flex items-center gap-2"
            >
              <span>🍪</span> Cookies
            </Link>
            <Link
              href="/menu?category=laddus"
              onClick={onClose}
              className="p-3 bg-white border border-[#EADBCA]/70 rounded-xl text-[#4A2E1C] hover:bg-[#FFF8ED] flex items-center gap-2"
            >
              <span>🥜</span> Laddus
            </Link>
            <Link
              href="/menu?category=breads"
              onClick={onClose}
              className="p-3 bg-white border border-[#EADBCA]/70 rounded-xl text-[#4A2E1C] hover:bg-[#FFF8ED] flex items-center gap-2"
            >
              <span>🍞</span> Breads
            </Link>
            <Link
              href="/menu?category=cakes"
              onClick={onClose}
              className="p-3 bg-white border border-[#EADBCA]/70 rounded-xl text-[#4A2E1C] hover:bg-[#FFF8ED] flex items-center gap-2"
            >
              <span>🍰</span> Cakes & Brownies
            </Link>
            <Link
              href="/menu?category=seed-crackers"
              onClick={onClose}
              className="p-3 bg-white border border-[#EADBCA]/70 rounded-xl text-[#4A2E1C] hover:bg-[#FFF8ED] flex items-center gap-2 col-span-2"
            >
              <span>🌱</span> Crispy Seed Crackers
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-[#EADBCA] bg-white space-y-3">
        <a
          href={getWhatsAppUrl("Hello Tiny Treats! 👋 I would like to check availability and place an order.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full h-11 rounded-full bg-[#526A3A] hover:bg-[#43592D] text-white font-semibold shadow-sm transition-all text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Order on WhatsApp</span>
        </a>

        <div className="flex items-center justify-between text-xs text-[#8C6D53] pt-0.5">
          <a
            href="tel:+919395324365"
            className="flex items-center gap-1.5 text-[#4A2E1C] hover:text-[#B9573F] font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-[#D99A45]" /> +91 93953 24365
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/tinytreatsbyswetha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#4A2E1C] hover:text-[#B9573F]"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#4A2E1C] hover:text-[#B9573F]"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

