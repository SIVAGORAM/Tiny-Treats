import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Sparkles,
  MessageCircle,
  Star,
  Leaf,
  ShieldCheck,
  Award,
  CheckCircle2,
  Clock,
  Home,
} from "lucide-react";
import { BrandPromiseSection } from "@/components/story/BrandPromiseSection";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the story behind Tiny Treats — a home-baking journey that began with a mother's desire to make wholesome homemade treats for her children.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Our Story | Tiny Treats by Shweta",
    description:
      "A home-baking journey inspired by family, wholesome ingredients, and motherly care.",
    url: "https://www.tinytreats.in/about",
  },
};

const timelineSteps = [
  {
    step: "01",
    year: "2023",
    title: "Made for Our Kids",
    subtitle: "The Kitchen Experiment",
    description:
      "It started in our home kitchen with a mother's desire to create mindful, nutritious snack alternatives for her own children's lunchboxes.",
    icon: "🍪",
    badge: "Home Kitchen",
  },
  {
    step: "02",
    year: "2024",
    title: "Loved by Family & Friends",
    subtitle: "Word of Mouth Spread",
    description:
      "Encouragement from loved ones and school parents who tasted the treats gave us the confidence to turn family recipes into a dedicated venture.",
    icon: "💛",
    badge: "Community Love",
  },
  {
    step: "03",
    year: "Today",
    title: "Shared with Your Family",
    subtitle: "17+ Handcrafted Treats",
    description:
      "Today, Tiny Treats brings homemade cookies, nutrient-dense laddus, artisan breads and crispy seed crackers to over 500+ happy homes.",
    icon: "🌿",
    badge: "500+ Happy Families",
  },
];

const craftsmanshipPillars = [
  {
    image: "/gallery/almond-cookies-bowl.jpg",
    tag: "PURE INGREDIENTS",
    title: "Thoughtfully Selected Nuts & Seeds",
    description:
      "Whole California almonds, Kashmiri walnuts, pumpkin and flax seeds. Zero artificial essence, no industrial additives.",
  },
  {
    image: "/story/kitchen-baking-artisan.jpg",
    tag: "SLOW ROASTED",
    title: "Handcrafted in Small Batches",
    description:
      "Slowly roasted to lock in natural aroma, crunch, and wholesome nutrition. Prepared by hand in a clean home kitchen.",
  },
  {
    image: "/story/story-packaging-artisan.jpg",
    tag: "ZERO PRE-PACKED",
    title: "Baked Fresh to Order",
    description:
      "We never store boxes on warehouse shelves. Every order is baked fresh and packaged thoughtfully just for you.",
  },
];

const customerStories = [
  {
    name: "Priya Raghavan",
    role: "Mother of two, Financial Analyst",
    city: "Hyderabad",
    stars: 5,
    avatar: "👩",
    quote:
      "Tiny Treats completely solved our 4 PM snack dilemma. My kids adore the Almond Cookies and Protein Laddus, and I love having complete peace of mind knowing there is zero maida or chemical preservatives.",
    favorite: "Almond Cookies & Calcium Laddu",
  },
  {
    name: "Ananya Deshmukh",
    role: "Wellness Coach & Baker Enthusiast",
    city: "Hyderabad",
    stars: 5,
    avatar: "👩‍🏫",
    quote:
      "The Seed Crackers and Banana Bread are simply outstanding. You can literally taste the authenticity and care in every single bite. It feels like treats baked by your own family.",
    favorite: "Crispy Seed Crackers & Banana Bread",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFF8ED] text-[#2B211B] min-h-screen">

      {/* ========================================================================= */}
      {/* 1. TOP BRAND PROMISE HERO (EXACT REFERENCE UI)                            */}
      {/* ========================================================================= */}
      <BrandPromiseSection />

      {/* ========================================================================= */}
      {/* 2. THE ARTISAN KITCHEN STORY (LAYERED COLLAGE & EMOTIONAL NARRATIVE)       */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white/70 border-y border-[#EADBCA]/80 relative overflow-hidden">

        {/* Soft Ambient Background Elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FAF3EA]/80 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#F3E2C4]/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Layered Artisan Collage */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-md lg:max-w-none">

                {/* Main Artisan Photo Card */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#FAF3EA] shadow-xl border-2 border-[#EADBCA] z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/story/kitchen-baking-artisan.jpg"
                    alt="Shweta handcrafting wholesome treats in her home kitchen"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Photo Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <span className="font-serif text-sm font-bold drop-shadow-md">
                      Handcrafted with Love
                    </span>
                    <span className="text-xs bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-medium">
                      Small Batch
                    </span>
                  </div>
                </div>

                {/* Overlapping Polaroid Card */}
                <div className="absolute -bottom-8 -left-4 sm:-left-8 w-44 sm:w-52 bg-white p-3 pb-4 rounded-2xl shadow-2xl border border-[#EADBCA] z-20 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#FAF3EA]">
                    <Image
                      src="/gallery/banana-bread-fresh.jpg"
                      alt="Freshly baked banana bread loaf"
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                  <p className="font-script text-base text-center text-[#5A3825] mt-2 font-bold leading-tight">
                    Where it all began... ♡
                  </p>
                </div>

                {/* Golden Seal Stamp */}
                <div className="absolute -top-5 -right-4 sm:-right-6 w-24 h-24 rounded-full bg-[#FAF3EA] border-2 border-dashed border-[#D49942] shadow-lg flex flex-col items-center justify-center text-center p-2 z-20 transform rotate-12 select-none">
                  <Sparkles className="w-4 h-4 text-[#D49942] mb-0.5" />
                  <span className="font-script text-[11.5px] font-bold text-[#5A3825] leading-tight">
                    100% Mother <br /> Crafted
                  </span>
                  <span className="text-[#B85843] text-[11px]">♡</span>
                </div>

              </div>
            </div>

            {/* Right Column: Narrative Copy & Signature Quote */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-center lg:text-left">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3EA] border border-[#EADBCA] text-xs font-bold uppercase tracking-widest text-[#B85843] shadow-2xs">
                <Heart className="w-3.5 h-3.5 fill-[#B85843] text-[#B85843]" />
                <span>A MOTHER&apos;S PASSION</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#3D2314] tracking-tight leading-[1.15]">
                It Started in Our Kitchen. <br />
                <span className="text-[#B85843] font-serif italic font-normal">
                  It Grew from the Heart.
                </span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#5A3825]/90 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  Tiny Treats didn&apos;t begin in a commercial industrial bakery. It began right at home in a mother&apos;s kitchen.
                </p>
                <p>
                  Like many parents, I found myself constantly reading grocery store labels and wondering: <span className="font-medium text-[#3D2314]">why do everyday snacks have to be loaded with refined maida, artificial emulsifiers, and hidden sugars?</span>
                </p>
                <p>
                  So I began baking. Using whole almonds, kashmiri walnuts, ragi, oats, dates, and roasted seeds, I experimented until our children loved the taste even more than store-bought treats. Soon, family, friends, and school moms began asking for batches — and Tiny Treats was born.
                </p>
              </div>

              {/* Luxury Quote Box */}
              <div className="p-5 sm:p-6 rounded-3xl bg-[#FFF9F0] border border-[#EADBCA] shadow-sm relative overflow-hidden text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#B85843]/15 flex items-center justify-center text-[#B85843] shrink-0 font-serif text-2xl font-bold">
                    “
                  </div>
                  <div>
                    <blockquote className="font-serif text-base sm:text-lg text-[#3D2314] italic font-bold leading-snug">
                      &ldquo;Would I happily serve this to my own children every single day?&rdquo;
                    </blockquote>
                    <p className="text-xs sm:text-[13px] text-[#8C6D53] mt-2 font-medium">
                      If the answer is anything less than an absolute yes, the recipe never leaves our kitchen.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INSIDE OUR CRAFT: 3 ARTISAN QUALITY SHOWCASE CARDS                     */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFF8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

          <div className="max-w-2xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF3EA] border border-[#EADBCA] text-[11px] font-bold uppercase tracking-widest text-[#8C6D53]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#586E3C]" />
              <span>THE TINY TREATS STANDARD</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314]">
              Inside Shweta&apos;s Kitchen
            </h2>
            <p className="text-sm sm:text-base text-[#7C6B5E] font-light leading-relaxed">
              Every single treat is made with uncompromised attention to purity, texture, and taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {craftsmanshipPillars.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white border border-[#EADBCA] shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF3EA]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#3D2314]/85 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2314] group-hover:text-[#B85843] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6E5A4E] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="h-1 w-8 bg-[#586E3C] rounded-full group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. VISUAL ROADMAP TIMELINE (CONNECTING MILESTONES 01, 02, 03)             */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white/70 border-y border-[#EADBCA]/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

          <div className="max-w-2xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF3EA] border border-[#EADBCA] text-[11px] font-bold uppercase tracking-widest text-[#8C6D53]">
              <Clock className="w-3.5 h-3.5 text-[#D49942]" />
              <span>THE JOURNEY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314]">
              Our Journey Timeline
            </h2>
            <p className="text-sm sm:text-base text-[#7C6B5E] font-light leading-relaxed">
              From our small family kitchen to hundreds of happy homes across the city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-[#FFF9F0] border border-[#EADBCA] shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-5 relative group"
              >
                <div className="space-y-4">
                  {/* Top Step Number & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#D49942]/70 group-hover:text-[#D49942] transition-colors">
                        {step.step}
                      </span>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white text-[#B85843] border border-[#EADBCA] shadow-2xs">
                      {step.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2314]">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#8C6D53] mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] text-[#6E5A4E] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="h-1 w-8 bg-[#D49942] rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Sweet Script Signature */}
          <div className="text-center pt-2">
            <p className="font-script text-2xl sm:text-3xl text-[#5A3825] font-bold">
              From our little kitchen to your home, every Tiny Treat carries a piece of our story. ♡
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VERIFIED MOTHER & CUSTOMER EXPERIENCES                                 */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFF8ED]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

          <div className="max-w-2xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF3EA] border border-[#EADBCA] text-[11px] font-bold uppercase tracking-widest text-[#B85843]">
              <Star className="w-3.5 h-3.5 fill-[#D49942] text-[#D49942]" />
              <span>LOVED BY FAMILIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314]">
              What Families Say
            </h2>
            <p className="text-sm sm:text-base text-[#7C6B5E] font-light leading-relaxed">
              Real feedback from mothers, parents, and snack lovers who enjoy Tiny Treats daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {customerStories.map((cust, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-9 rounded-3xl bg-white border border-[#EADBCA] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                {/* 5 Stars & Quote Mark */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#D49942] gap-1">
                      {[...Array(cust.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D49942] text-[#D49942]" />
                      ))}
                    </div>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FAF3EA] text-[#586E3C] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Verified Order
                    </span>
                  </div>

                  <blockquote className="font-serif text-base sm:text-lg text-[#3D2314] italic leading-relaxed">
                    &ldquo;{cust.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Customer Info Footer */}
                <div className="pt-4 border-t border-[#F0E4D4] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF3EA] border border-[#EADBCA] flex items-center justify-center text-lg">
                      {cust.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#3D2314]">{cust.name}</h4>
                      <p className="text-[11px] text-[#8C6D53]">{cust.role} · {cust.city}</p>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="text-[10px] uppercase font-bold text-[#8C6D53] block">Favorite</span>
                    <span className="text-xs font-semibold text-[#B85843]">{cust.favorite}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. GRAND EMOTIONAL BANNER (THE GOLDEN MOTHER'S PROMISE)                   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FFF8ED]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#3D2314] text-[#FFF8ED] p-8 sm:p-14 lg:p-16 text-center space-y-7 shadow-2xl relative overflow-hidden">

            {/* Background Texture & Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D49942]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#B85843]/15 blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto space-y-5 relative z-10">

              <span className="font-script text-xl sm:text-2xl text-[#E7CA9F] font-bold block">
                Good Food, Happier Families ♡
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFF6EB] leading-tight">
                &ldquo;If we wouldn&apos;t compromise on what we give our own children, why should we compromise on what we make for yours?&rdquo;
              </h2>

              <p className="text-xs sm:text-sm text-[#EADBCA] font-light leading-relaxed max-w-xl mx-auto">
                Tiny Treats is more than a home-baking venture. It is a mother&apos;s passion that grew from love, shared with families who value mindful, wholesome everyday snacking.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-12 sm:h-13 px-8 rounded-full bg-[#B85843] hover:bg-[#A34B35] text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Our Full Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl("Hello Shweta! 👋 I read your story and would love to place an order for fresh homemade treats.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-12 sm:h-13 px-8 rounded-full bg-[#526A3A] hover:bg-[#43592D] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
