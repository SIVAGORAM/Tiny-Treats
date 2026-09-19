import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ChevronRight, CheckCircle2, ShieldCheck, Settings2, Sparkles } from "lucide-react";
import { CookiePreferencesTrigger } from "@/components/ui/CookiePreferencesTrigger";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about the cookies and storage technologies used on Tiny Treats by Shweta to enhance your browsing experience and store your cart preferences.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="py-8 sm:py-12 bg-[#FFF8ED] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5A321B]/70">
          <Link href="/" className="hover:text-[#B9573F] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="font-semibold text-[#5A321B]">Cookie Policy</span>
        </nav>

        {/* Header Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EA] to-[#FDF8F0] border border-[#D99A45]/30 p-6 sm:p-8 shadow-[0_4px_20px_rgba(90,50,27,0.05)] space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D99A45]/40 text-[#B9573F] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Cookie className="w-4 h-4 text-[#D99A45]" />
            <span>Browser Storage & Transparency</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A321B]">
            Cookie Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed max-w-2xl">
            This Cookie Policy explains how Tiny Treats uses cookies, local storage, and related technologies to provide you with a fast, secure, and reliable shopping experience.
          </p>
          <div className="pt-2">
            <CookiePreferencesTrigger />
          </div>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-3xl border border-[#D99A45]/25 p-6 sm:p-10 shadow-sm space-y-8 text-[#5A321B]">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF0EC] text-[#B9573F] text-xs flex items-center justify-center font-sans font-bold">1</span>
              What Are Cookies?
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              Cookies and web storage technologies are small data files placed on your device by your browser. They allow websites to remember your selections (such as items added to your treat cart) and maintain smooth navigation as you explore our kitchen creations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF0EC] text-[#B9573F] text-xs flex items-center justify-center font-sans font-bold">2</span>
              Categories of Cookies We Use
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FFF8ED] border border-[#D99A45]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-sm font-bold text-[#3A1E0E]">Strictly Necessary</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#66723A]/15 text-[#526A3A] border border-[#66723A]/25">Always Active</span>
                </div>
                <p className="text-xs text-[#786B61] leading-relaxed">
                  Required for essential website functionality, including preserving items in your shopping drawer, persisting consent choices, and securing page transitions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF8ED] border border-[#D99A45]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-sm font-bold text-[#3A1E0E]">Analytics & Performance</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF0EC] text-[#B9573F] border border-[#B9573F]/25">Optional</span>
                </div>
                <p className="text-xs text-[#786B61] leading-relaxed">
                  Helps us understand which wholesome treats are most loved and monitor page speed without recording personal or identifying details.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF0EC] text-[#B9573F] text-xs flex items-center justify-center font-sans font-bold">3</span>
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              You maintain full control over your cookie settings. You can review or adjust your preferences at any time by clicking the &ldquo;Manage Cookie Preferences&rdquo; button above or via the link located in our footer.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
