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
    description: "Send your list or dietary requirements directly to baker Shweta for personal confirmation.",
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
    <div className="py-6 sm:py-10 bg-[#FFF8ED] min-h-screen select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* ── 1. Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5A321B]/70">
          <Link href="/" className="hover:text-[#B9573F] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="font-semibold text-[#5A321B]">Contact & Direct Orders</span>
        </nav>

        {/* ── 2. Compact Artisan Header ── */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF2E4] to-[#FFF8ED] border border-[#D99A45]/35 p-6 sm:p-8 shadow-[0_4px_20px_rgba(90,50,27,0.05)] overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-40 bg-[radial-gradient(ellipse_at_top_right,rgba(217,154,69,0.12),transparent_70%)] pointer-events-none" />

          <div className="max-w-2xl space-y-2 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF8ED] border border-[#D99A45]/40 text-[#5A321B] text-[11px] font-bold uppercase tracking-widest shadow-2xs">
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

        {/* ── 3. 4 Direct Contact Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* WhatsApp Direct */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#66723A]/30 shadow-[0_4px_20px_rgba(90,50,27,0.04)] hover:shadow-[0_16px_36px_rgba(90,50,27,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-xl bg-[#66723A]/15 text-[#66723A] flex items-center justify-center relative">
                <WhatsAppIcon className="w-5 h-5" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute top-1.5 right-1.5 animate-ping" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute top-1.5 right-1.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#66723A] block">Instant Chat</span>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#3A1E0E]">WhatsApp Concierge</h2>
              </div>
              <p className="text-xs text-[#5A321B]/70 font-light leading-relaxed">
                Fastest response for fresh daily batches, prices, and immediate order placement.
              </p>
              <p className="text-xs font-bold text-[#3A1E0E]">{BRAND_PHONE}</p>
            </div>

            <a
              href={getWhatsAppUrl("Hello Tiny Treats! 👋 I would like to place a fresh treat order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full h-10 rounded-xl bg-[#66723A] hover:bg-[#566331] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Direct Phone Call */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#5A321B]/12 shadow-[0_4px_20px_rgba(90,50,27,0.04)] hover:shadow-[0_16px_36px_rgba(90,50,27,0.1)] hover:border-[#B9573F]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-xl bg-[#B9573F]/15 text-[#B9573F] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9573F] block">Voice Call</span>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#3A1E0E]">Call Shweta Directly</h2>
              </div>
              <p className="text-xs text-[#5A321B]/70 font-light leading-relaxed">
                Speak directly with the baker for bulk celebrations, custom dietary needs, and timelines.
              </p>
              <p className="text-xs font-bold text-[#3A1E0E]">{BRAND_PHONE}</p>
            </div>

            <a
              href={`tel:${BRAND_PHONE.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 w-full h-10 rounded-xl bg-[#B9573F] hover:bg-[#A34B35] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Email Enquiry */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#5A321B]/12 shadow-[0_4px_20px_rgba(90,50,27,0.04)] hover:shadow-[0_16px_36px_rgba(90,50,27,0.1)] hover:border-[#D99A45]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-xl bg-[#D99A45]/15 text-[#D99A45] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D99A45] block">Formal Enquiries</span>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#3A1E0E]">Email Support</h2>
              </div>
              <p className="text-xs text-[#5A321B]/70 font-light leading-relaxed">
                For corporate gifting catalogs, large event catering, or collaboration inquiries.
              </p>
              <p className="text-xs font-bold text-[#3A1E0E] truncate">{BRAND_EMAIL}</p>
            </div>

            <a
              href={`mailto:${BRAND_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 w-full h-10 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/15 text-[#5A321B] hover:border-[#B9573F] hover:text-[#B9573F] text-xs font-semibold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send an Email</span>
            </a>
          </div>

          {/* Home Kitchen & Social */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#5A321B]/12 shadow-[0_4px_20px_rgba(90,50,27,0.04)] hover:shadow-[0_16px_36px_rgba(90,50,27,0.1)] hover:border-[#D99A45]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="w-11 h-11 rounded-xl bg-[#5A321B]/10 text-[#5A321B] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A321B]/70 block">Bakery Location</span>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#3A1E0E]">Hyderabad Kitchen</h2>
              </div>
              <p className="text-xs text-[#5A321B]/70 font-light leading-relaxed">
                Home kitchen based in Hyderabad, Telangana. Handcrafted in small batches and dispatched pan-India.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-0.5">
                <a
                  href={BRAND_SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-7 h-7 rounded-full bg-[#FFF8ED] hover:bg-[#B9573F] hover:text-white text-[#5A321B] flex items-center justify-center transition-colors border border-[#5A321B]/10"
                >
                  <InstagramIcon className="w-3 h-3" />
                </a>
                <a
                  href={BRAND_SOCIALS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-7 h-7 rounded-full bg-[#FFF8ED] hover:bg-[#B9573F] hover:text-white text-[#5A321B] flex items-center justify-center transition-colors border border-[#5A321B]/10"
                >
                  <FacebookIcon className="w-3 h-3" />
                </a>
                <a
                  href={BRAND_SOCIALS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-7 h-7 rounded-full bg-[#FFF8ED] hover:bg-[#B9573F] hover:text-white text-[#5A321B] flex items-center justify-center transition-colors border border-[#5A321B]/10"
                >
                  <XTwitterIcon className="w-2.5 h-2.5" />
                </a>
                <a
                  href={BRAND_SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-7 h-7 rounded-full bg-[#FFF8ED] hover:bg-[#B9573F] hover:text-white text-[#5A321B] flex items-center justify-center transition-colors border border-[#5A321B]/10"
                >
                  <LinkedInIcon className="w-3 h-3" />
                </a>
              </div>
            </div>

            <a
              href={BRAND_SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full h-10 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/15 text-[#5A321B] text-xs font-semibold hover:border-[#B9573F] hover:text-[#B9573F] transition-colors"
            >
              <span>@tinytreatsbyswetha</span>
            </a>
          </div>

        </div>

        {/* ── 4. Balanced 2-Column: Ordering Process & Custom Celebrations ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left: How Fresh Ordering Works */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D99A45]/30 shadow-[0_4px_20px_rgba(90,50,27,0.04)] flex flex-col justify-between space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#B9573F]">
                <Clock className="w-3.5 h-3.5 text-[#D99A45]" />
                <span>Simple & Seamless</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] mt-1">
                How Fresh Ordering Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {orderSteps.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#FFF8ED] border border-[#5A321B]/08 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-white border border-[#D99A45]/40 text-[#5A321B] font-serif font-bold text-[11px] flex items-center justify-center shrink-0 shadow-2xs">
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

            <div className="pt-2 border-t border-[#5A321B]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#5A321B]/75">
                Ready to choose your treats?
              </span>
              <Link
                href="/menu"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B9573F] hover:text-[#A34B35] transition-colors"
              >
                <span>Browse Complete Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Custom Celebration & Gift Hamper Studio */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FAF2E4] via-[#FFFDF9] to-[#FFF8ED] border border-[#D99A45]/40 shadow-[0_4px_20px_rgba(90,50,27,0.04)] flex flex-col justify-between space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#B9573F]">
                <Gift className="w-3.5 h-3.5 text-[#D99A45]" />
                <span>Bespoke Gifting</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] mt-1">
                Celebration Hampers & Gift Boxes
              </h2>
              <p className="text-xs text-[#5A321B]/80 font-light leading-relaxed mt-2">
                We craft customized celebration assortments for birthdays, weddings, baby showers, festive occasions, and corporate gifting.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-[#3A1E0E]">
                <CheckCircle2 className="w-4 h-4 text-[#66723A] shrink-0" />
                <span>Custom assorted cookies, laddus, and tea cakes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#3A1E0E]">
                <CheckCircle2 className="w-4 h-4 text-[#66723A] shrink-0" />
                <span>Bespoke ribbons, festive tins & handwritten note cards</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#3A1E0E]">
                <CheckCircle2 className="w-4 h-4 text-[#66723A] shrink-0" />
                <span>Dietary curation: 100% No-Maida & No-Refined Sugar available</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#5A321B]/10">
              <a
                href={getWhatsAppUrl("Hello Tiny Treats! 👋 I would like to curate a custom gift hamper / celebration order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#B9573F] hover:bg-[#A34B35] text-white text-xs font-semibold shadow-xs transition-all hover:scale-101"
              >
                <MessageCircle className="w-3.5 h-3.5" />
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
