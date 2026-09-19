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
} from "lucide-react";
import { BotanicalDivider, BotanicalSprig } from "@/components/ui/BotanicalFlourish";
import {
  InstagramIcon,
  FacebookIcon,
  XTwitterIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative bg-[#5A321B] text-[#FFF8ED] pt-5 sm:pt-7 pb-5 sm:pb-6 overflow-hidden border-t-2 border-[#D99A45]/30 font-sans select-none">
      {/* ── Background Aesthetics & Warm Ambient Lighting ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(217,154,69,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B9573F]/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ── 1. Top Value Pillars / Artisan Promise Strip ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pb-4 sm:pb-5 border-b border-white/10">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#D99A45]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#D99A45]/20 flex items-center justify-center text-[#D99A45] shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#FFF8ED]">100% Clean & Pure</h4>
              <p className="text-xs text-[#FFF8ED]/75 font-light mt-0.5">No artificial colours, flavours or preservatives</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#D99A45]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#B9573F]/25 flex items-center justify-center text-[#F3E2C4] shrink-0">
              <Sparkles className="w-5 h-5 text-[#D99A45]" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#FFF8ED]">Small Batch Love</h4>
              <p className="text-xs text-[#FFF8ED]/75 font-light mt-0.5">Handcrafted in our home kitchen with care</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#D99A45]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#66723A]/30 flex items-center justify-center text-[#C0D880] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#FFF8ED]">Freshly Baked</h4>
              <p className="text-xs text-[#FFF8ED]/75 font-light mt-0.5">Prepared fresh upon your order for peak aroma</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-[#D99A45]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#D99A45]/20 flex items-center justify-center text-[#D99A45] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#FFF8ED]">Guaranteed Delight</h4>
              <p className="text-xs text-[#FFF8ED]/75 font-light mt-0.5">Wholesome goodness to share with your family</p>
            </div>
          </div>
        </div>

        {/* ── 2. Main Footer Navigation Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 py-5 sm:py-6 border-b border-white/10">
          
          {/* Brand Info & Contact Column (5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo Badge */}
            <Link
              href="/"
              className="inline-flex items-center bg-[#FFF8ED] rounded-2xl p-2.5 shadow-sm border border-[#D99A45]/40 hover:scale-103 transition-all"
            >
              <Image
                src="/logo.png"
                alt="Tiny Treats by Shweta"
                width={190}
                height={63}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-[#FFF8ED]/85 leading-relaxed font-light">
              Crafting honest, wholesome homemade treats with unrefined flours, dry fruits, and lots of love.
            </p>

            {/* Direct Contact List */}
            <div className="space-y-2 pt-1 text-xs text-[#FFF8ED]/90">
              <a
                href="tel:+919395324365"
                className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-[#D99A45]/20 flex items-center justify-center text-[#D99A45]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[#D99A45] text-[10px] uppercase font-bold tracking-wider mr-2">Phone:</span>
                  <span className="font-medium text-[#FFF8ED]">+91 93953 24365</span>
                </div>
              </a>

              <a
                href="mailto:hello@tinytreats.com"
                className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-[#B9573F]/30 flex items-center justify-center text-[#F3E2C4]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[#D99A45] text-[10px] uppercase font-bold tracking-wider mr-2">Email:</span>
                  <span className="font-medium text-[#FFF8ED]">hello@tinytreats.com</span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-1.5 rounded-xl">
                <div className="w-6 h-6 rounded-lg bg-[#66723A]/30 flex items-center justify-center text-[#C0D880]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[#D99A45] text-[10px] uppercase font-bold tracking-wider mr-2">Location:</span>
                  <span className="font-medium text-[#FFF8ED]">Hyderabad, India</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#D99A45] mb-2.5">
                Connect with Us
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/tinytreatsbyswetha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiny Treats on Instagram"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#B9573F] flex items-center justify-center text-white hover:scale-105 transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61592823341135"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiny Treats on Facebook"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#B9573F] flex items-center justify-center text-white hover:scale-105 transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/tinytreatsbys"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiny Treats on X"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#B9573F] flex items-center justify-center text-white hover:scale-105 transition-all"
                >
                  <XTwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tinay-treats-by-swetha-a09202383/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiny Treats on LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#B9573F] flex items-center justify-center text-white hover:scale-105 transition-all"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppUrl("Hello Tiny Treats! 👋 I'm contacting from your website footer.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiny Treats on WhatsApp"
                  className="w-9 h-9 rounded-xl bg-[#66723A] hover:bg-[#566331] flex items-center justify-center text-white hover:scale-105 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Explore Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-base font-bold text-[#FFF8ED] flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#D99A45] rounded-full" />
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs text-[#FFF8ED]/85">
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
                    className="inline-flex items-center gap-2 hover:text-[#D99A45] hover:translate-x-1 transition-all"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D99A45]/60" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Signature Treats Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-base font-bold text-[#FFF8ED] flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#B9573F] rounded-full" />
              Our Treats
            </h3>
            <ul className="space-y-2.5 text-xs text-[#FFF8ED]/85">
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
                    className="inline-flex items-center gap-2 hover:text-[#D99A45] hover:translate-x-1 transition-all"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B9573F]/80" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: The Tiny Promise & Direct WhatsApp Box (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-base font-bold text-[#FFF8ED] flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#66723A] rounded-full" />
              Our Tiny Promise
            </h3>
            
            {/* Guarantee Box */}
            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 space-y-3">
              <p className="text-xs text-[#FFF8ED]/85 leading-relaxed font-light">
                Every order is prepared with care in small batches in our home kitchen. We make treats we are proud to serve our own family.
              </p>
              
              <div className="space-y-1.5 text-xs text-[#D99A45]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D99A45] shrink-0" />
                  <span>No Maida (Selected Range)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D99A45] shrink-0" />
                  <span>No Added Sugar (Selected Range)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D99A45] shrink-0" />
                  <span>No Artificial Food Colours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D99A45] shrink-0" />
                  <span>Fresh Small-Batch Preparation</span>
                </div>
              </div>

              {/* Direct Baker WhatsApp Concierge Button */}
              <div className="pt-1.5">
                <a
                  href={getWhatsAppUrl("Hello Shweta! 👋 I'd like to ask a question or place an order.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-[#66723A] hover:bg-[#566331] text-white text-xs font-semibold shadow-xs transition-all group"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Ask Baker on WhatsApp</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── 3. Botanical Divider ── */}
        <div className="py-3 sm:py-3.5">
          <BotanicalDivider className="text-[#D99A45]/60 scale-90" />
        </div>

        {/* ── 4. Bottom Signature & Legal Bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FFF8ED]/75 pt-1">
          <p>© 2026 Tiny Treats by Shweta. All rights reserved.</p>

          <div className="flex items-center gap-2 font-script text-lg sm:text-xl text-[#D99A45]">
            <span>Small Treats. Big Love.</span>
            <Heart className="w-4 h-4 text-[#B9573F] fill-[#B9573F] inline" />
            <span className="font-sans text-xs text-[#FFF8ED]/60">• Made with love in India</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#FFF8ED]/60">
            <span>Privacy Policy (Draft)</span>
            <span>·</span>
            <span>Terms (Draft)</span>
            <span>·</span>
            <span>Cookie Policy (Draft)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
