import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  CheckCircle2,
  Clock,
  Heart,
  ChevronRight,
  Gift,
  ShieldCheck,
  Package,
  Calendar,
  Leaf,
  ArrowRight,
} from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  XTwitterIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";
import { getWhatsAppUrl, BRAND_PHONE, BRAND_EMAIL, BRAND_SOCIALS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact & Direct Orders",
  description:
    "Get in touch with Tiny Treats by Shweta through WhatsApp or phone (+91 93953 24365) or email for fresh homemade treats, bespoke gift hampers, and dietary custom orders.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Tiny Treats | Order Fresh Homemade Treats",
    description:
      "Get in touch with Tiny Treats by Shweta through WhatsApp (+91 93953 24365) for fresh small-batch cookies, laddus, brownies, and cakes.",
    url: "https://www.tinytreats.in/contact",
  },
};

const orderSteps = [
  {
    num: "01",
    title: "Choose Your Treats",
    description: "Browse our authentic menu of cookies, laddus, breads, brownies, and tea cakes.",
  },
  {
    num: "02",
    title: "Direct WhatsApp Message",
    description: "No online payment required now. You will chat directly with our Tiny Treats for personal confirmation.",
  },
  {
    num: "03",
    title: "Scheduled & Baked Fresh",
    description: "Every batch is prepared from scratch in our home kitchen with pure butter and real grains.",
  },
  {
    num: "04",
    title: "Local Delivery & Dispatch",
    description: "Hand-delivered fresh in Hyderabad or carefully packaged for express dispatch across India.",
  },
];

const dietaryAssurances = [
  {
    icon: Leaf,
    title: "Dietary Customization",
    desc: "100% No-maida, dates/jaggery-sweetened, and gluten-conscious millet options crafted on request.",
  },
  {
    icon: Clock,
    title: "Freshness Notice",
    desc: "24 to 48 hours notice helps us bake your treats fresh to order without any prior freezing or preservatives.",
  },
  {
    icon: Package,
    title: "Safe Artisan Packaging",
    desc: "Sealed in food-grade, airtight eco-packaging to lock in natural aroma and crunch for 15-30 days.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-3 sm:pt-4 pb-6 sm:pb-8 bg-[#FFF8ED] min-h-screen select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5 sm:space-y-4">
        
        {/* ── 1. Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5A321B]/70">
          <Link href="/" className="hover:text-[#B9573F] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="font-semibold text-[#5A321B]">Contact & Direct Orders</span>
        </nav>

        {/* ── 2. Compact Artisan Header ── */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF2E4] to-[#FFF8ED] border border-[#D99A45]/35 p-4 sm:p-5 shadow-[0_4px_20px_rgba(90,50,27,0.05)] overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-40 bg-[radial-gradient(ellipse_at_top_right,rgba(217,154,69,0.12),transparent_70%)] pointer-events-none" />

          <div className="max-w-2xl space-y-1.5 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFF8ED] border border-[#D99A45]/40 text-[#5A321B] text-[11px] font-bold uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D99A45]" />
              <span>Baker Concierge • Direct Ordering</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3A1E0E] tracking-tight leading-snug">
              Let&apos;s Connect. <span className="text-[#B9573F] italic font-normal">Baked Fresh for You.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#5A321B]/80 font-light leading-relaxed">
              Reach out directly on WhatsApp or phone for today&apos;s baking schedule, dietary customizations, and bespoke gift hampers.
            </p>
          </div>
        </div>

        {/* ── 3. 4 Direct Contact Cards (Luxury Artisanal Cards) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* WhatsApp Direct */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#FAF8F2] to-[#F1F6EC] border-2 border-[#66723A]/30 shadow-[0_8px_25px_rgba(90,50,27,0.06)] hover:shadow-[0_16px_36px_rgba(102,114,58,0.14)] hover:border-[#66723A]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#66723A]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#66723A]/15 text-[#66723A] border border-[#66723A]/25 flex items-center justify-center relative shadow-2xs group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-5 h-5" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5 animate-ping" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#66723A]/15 text-[#526A3A] border border-[#66723A]/25">
                  Instant Chat
                </span>
              </div>

              <div>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#3A1E0E] group-hover:text-[#526A3A] transition-colors">
                  WhatsApp Concierge
                </h2>
                <p className="text-xs text-[#5A321B]/75 font-light leading-relaxed mt-1">
                  Fastest response for fresh daily batches, menu prices, and custom orders.
                </p>
              </div>

              <div className="p-2 rounded-xl bg-white/80 border border-[#66723A]/20">
                <p className="text-xs font-bold text-[#3A1E0E] tracking-wide">{BRAND_PHONE}</p>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hello Tiny Treats! 👋 I would like to place a fresh treat order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-gradient-to-r from-[#66723A] to-[#526A3A] hover:from-[#526A3A] hover:to-[#43592D] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all relative z-10"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Direct Phone Call */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#FCF7F4] to-[#FDF0EC] border-2 border-[#B9573F]/25 shadow-[0_8px_25px_rgba(90,50,27,0.06)] hover:shadow-[0_16px_36px_rgba(185,87,63,0.14)] hover:border-[#B9573F]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B9573F]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#B9573F]/15 text-[#B9573F] border border-[#B9573F]/25 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#B9573F]/15 text-[#9F4833] border border-[#B9573F]/25">
                  Voice Call
                </span>
              </div>

              <div>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#3A1E0E] group-hover:text-[#B9573F] transition-colors">
                  Call Tiny Treats Directly
                </h2>
                <p className="text-xs text-[#5A321B]/75 font-light leading-relaxed mt-1">
                  Speak directly with Tiny Treats for celebration orders, dietary advice, and bulk boxes.
                </p>
              </div>

              <div className="p-2 rounded-xl bg-white/80 border border-[#B9573F]/20">
                <p className="text-xs font-bold text-[#3A1E0E] tracking-wide">{BRAND_PHONE}</p>
              </div>
            </div>

            <a
              href={`tel:${BRAND_PHONE.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-gradient-to-r from-[#B9573F] to-[#9F4833] hover:from-[#9F4833] hover:to-[#863B28] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all relative z-10"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Email Enquiry */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#FFFDF9] to-[#FAF3E8] border-2 border-[#D99A45]/30 shadow-[0_8px_25px_rgba(90,50,27,0.06)] hover:shadow-[0_16px_36px_rgba(217,154,69,0.14)] hover:border-[#D99A45]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D99A45]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#D99A45]/15 text-[#D99A45] border border-[#D99A45]/25 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D99A45]/15 text-[#A26D23] border border-[#D99A45]/25">
                  Formal Enquiries
                </span>
              </div>

              <div>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#3A1E0E] group-hover:text-[#D99A45] transition-colors">
                  Email Support
                </h2>
                <p className="text-xs text-[#5A321B]/75 font-light leading-relaxed mt-1">
                  For corporate gifting catalogs, large event catering, or collaboration inquiries.
                </p>
              </div>

              <div className="p-2 rounded-xl bg-white/80 border border-[#D99A45]/20">
                <p className="text-xs font-bold text-[#3A1E0E] truncate">{BRAND_EMAIL}</p>
              </div>
            </div>

            <a
              href={`mailto:${BRAND_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-gradient-to-r from-[#5A321B] to-[#432311] hover:from-[#432311] hover:to-[#2B1408] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all relative z-10"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send an Email</span>
            </a>
          </div>

          {/* Home Kitchen & Social */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#FAF4ED] to-[#F5ECE1] border-2 border-[#5A321B]/20 shadow-[0_8px_25px_rgba(90,50,27,0.06)] hover:shadow-[0_16px_36px_rgba(90,50,27,0.12)] hover:border-[#5A321B]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A321B]/08 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#5A321B]/15 text-[#5A321B] border border-[#5A321B]/25 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#5A321B]/15 text-[#5A321B] border border-[#5A321B]/25">
                  Kitchen Location
                </span>
              </div>

              <div>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#3A1E0E]">
                  Hyderabad Kitchen
                </h2>
                <p className="text-xs text-[#5A321B]/75 font-light leading-relaxed mt-1">
                  Home kitchen in Hyderabad, Telangana. Small batch baking, dispatched pan-India.
                </p>
              </div>

              {/* Social Icons Strip */}
              <div className="flex items-center justify-between p-1.5 rounded-xl bg-white/80 border border-[#5A321B]/15">
                <span className="text-[11px] font-semibold text-[#5A321B] pl-1">Follow:</span>
                <div className="flex items-center gap-1.5">
                  <a
                    href={BRAND_SOCIALS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-6 h-6 rounded-lg bg-[#FAF3EA] hover:bg-[#B9573F] hover:text-white text-[#5A321B] flex items-center justify-center transition-colors shadow-2xs"
                  >
                    <InstagramIcon className="w-3 h-3" />
                  </a>
                  <a
                    href={BRAND_SOCIALS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-6 h-6 rounded-lg bg-[#FAF3EA] hover:bg-[#B9573F] hover:text-white text-[#5A321B] flex items-center justify-center transition-colors shadow-2xs"
                  >
                    <FacebookIcon className="w-3 h-3" />
                  </a>
                  <a
                    href={BRAND_SOCIALS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="w-6 h-6 rounded-lg bg-[#FAF3EA] hover:bg-[#B9573F] hover:text-white text-[#5A321B] flex items-center justify-center transition-colors shadow-2xs"
                  >
                    <XTwitterIcon className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href={BRAND_SOCIALS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-6 h-6 rounded-lg bg-[#FAF3EA] hover:bg-[#B9573F] hover:text-white text-[#5A321B] flex items-center justify-center transition-colors shadow-2xs"
                  >
                    <LinkedInIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <a
              href={BRAND_SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full h-11 rounded-xl bg-gradient-to-r from-[#B9573F] to-[#9F4833] hover:from-[#9F4833] hover:to-[#863B28] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all relative z-10"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@tinytreatsbyswetha</span>
            </a>
          </div>

        </div>

        {/* ── 4. Balanced 2-Column: Ordering Process & Custom Celebrations (Artisan Showcase) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          
          {/* Left: How Fresh Ordering Works */}
          <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EA] to-[#FDF8F0] border-2 border-[#D99A45]/35 shadow-[0_8px_30px_rgba(90,50,27,0.06)] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#D99A45]/40 text-[10px] font-bold uppercase tracking-widest text-[#B9573F] shadow-2xs">
                  <Clock className="w-3 h-3 text-[#D99A45]" />
                  <span>Simple & Seamless Process</span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] mt-2">
                  How Fresh Ordering Works
                </h2>
                <p className="text-xs text-[#5A321B]/75 font-light leading-relaxed mt-1">
                  From selecting recipes to fresh home oven baking and doorstep delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {orderSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/90 border border-[#D99A45]/25 hover:border-[#B9573F]/40 shadow-2xs transition-all space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#FAF3EA] border border-[#D99A45]/40 text-[#B9573F] font-serif font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                        {step.num}
                      </span>
                      <h3 className="font-serif text-xs font-bold text-[#3A1E0E]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-[#5A321B]/75 font-light leading-relaxed pl-8">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[#5A321B]/12 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#5A321B]/80 font-medium">
                Ready to choose your homemade treats?
              </span>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5A321B] hover:bg-[#3D2114] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all group"
              >
                <span>Browse Menu</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D99A45] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Custom Celebration & Gift Hamper Studio */}
          <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF0EC] to-[#F7E5DE] border-2 border-[#B9573F]/35 shadow-[0_8px_30px_rgba(185,87,63,0.08)] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#B9573F]/35 text-[10px] font-bold uppercase tracking-widest text-[#B9573F] shadow-2xs">
                  <Gift className="w-3 h-3 text-[#D99A45]" />
                  <span>Bespoke Gifting Studio</span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] mt-2">
                  Celebration Hampers & Gift Boxes
                </h2>
                <p className="text-xs text-[#5A321B]/80 font-light leading-relaxed mt-1">
                  We craft personalized treat assortments for birthdays, family visits, festive celebrations, baby showers, and corporate gifting.
                </p>
              </div>

              {/* 3 Structured Benefit Mini-Cards */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/85 border border-[#B9573F]/20 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF0EC] flex items-center justify-center text-[#B9573F] shrink-0 border border-[#B9573F]/25">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3A1E0E]">Curated Assortments</h4>
                    <p className="text-[11px] text-[#5A321B]/75 font-light">Custom mix of almond cookies, protein laddus, and brownies.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/85 border border-[#B9573F]/20 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF3EA] flex items-center justify-center text-[#D99A45] shrink-0 border border-[#D99A45]/25">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3A1E0E]">Keepsake Gift Presentation</h4>
                    <p className="text-[11px] text-[#5A321B]/75 font-light">Bespoke satin ribbons, festive airtight tins & personalized note cards.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/85 border border-[#B9573F]/20 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#F0F5EB] flex items-center justify-center text-[#66723A] shrink-0 border border-[#66723A]/25">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3A1E0E]">Mindful Dietary Selection</h4>
                    <p className="text-[11px] text-[#5A321B]/75 font-light">100% Maida-free, unrefined jaggery, and nut-rich wellness options.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#B9573F]/15">
              <a
                href={getWhatsAppUrl("Hello Tiny Treats! 👋 I would like to curate a custom gift hamper / celebration order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-gradient-to-r from-[#B9573F] to-[#A34B35] hover:from-[#A34B35] hover:to-[#8E3B27] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire About Custom Hampers on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* ── 5. Dietary & Freshness Assurance Strip (3 Cards) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {dietaryAssurances.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#D99A45]/25 shadow-[0_2px_12px_rgba(90,50,27,0.03)] space-y-2"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF8ED] border border-[#D99A45]/30 text-[#B9573F] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-sm font-bold text-[#3A1E0E]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#5A321B]/75 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── 6. Bottom Warm Banner ── */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#5A321B] via-[#4A2816] to-[#381F12] text-[#FFF8ED] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(90,50,27,0.15)] border border-[#D99A45]/30 relative overflow-hidden">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="font-script text-lg text-[#D99A45] block">
              From Our Kitchen to Yours ♡
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF8ED]">
              Ready to enjoy fresh, wholesome homemade treats?
            </h2>
            <p className="text-xs text-[#FFF8ED]/75 font-light max-w-xl">
              Every single batch is baked fresh upon your order confirmation. Text us directly to get started!
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello Tiny Treats! 👋 I'm ready to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#66723A] hover:bg-[#566331] text-white font-semibold text-xs shadow-sm hover:scale-102 transition-all shrink-0 w-full md:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
