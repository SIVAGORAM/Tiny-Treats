import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ChevronRight, Mail, Phone, Lock, Eye, FileText } from "lucide-react";
import { BRAND_PHONE, BRAND_EMAIL } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for Tiny Treats by Shweta. Learn how we handle your contact information, order details, and data with complete privacy.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-8 sm:py-12 bg-[#FFF8ED] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5A321B]/70">
          <Link href="/" className="hover:text-[#B9573F] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="font-semibold text-[#5A321B]">Privacy Policy</span>
        </nav>

        {/* Header Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EA] to-[#FDF8F0] border border-[#D99A45]/30 p-6 sm:p-8 shadow-[0_4px_20px_rgba(90,50,27,0.05)] space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D99A45]/40 text-[#B9573F] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#D99A45]" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A321B]">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed max-w-2xl">
            Last Updated: January 2026. This policy outlines how Tiny Treats by Shweta collects, utilizes, and safeguards the personal and order information you share with us.
          </p>
          <div className="p-3 rounded-xl bg-[#FAF0EC] border border-[#B9573F]/20 text-[11px] text-[#863B28] leading-relaxed">
            <strong>Note for Legal Review:</strong> This policy constitutes a preliminary operational statement of our small-batch artisanal bakery privacy practices. It is subject to review by legal counsel for statutory compliance under applicable Indian and local data protection regulations.
          </div>
        </div>

        {/* Policy Content Sections */}
        <div className="bg-white rounded-3xl border border-[#D99A45]/25 p-6 sm:p-10 shadow-sm space-y-8 text-[#5A321B]">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF0EC] text-[#B9573F] text-xs flex items-center justify-center font-sans font-bold">1</span>
              Information We Collect
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              When you interact with Tiny Treats via our website or directly via WhatsApp, we may collect the following details to fulfill your order and provide personalized service:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-[#786B61] space-y-1.5 leading-relaxed">
              <li><strong>Contact Information:</strong> Your name, phone number, delivery address, and optional email address.</li>
              <li><strong>Order Preferences:</strong> Specific treats requested, quantities, packaging options, and custom dietary instructions (e.g., gluten sensitivity, nut allergies, sugar-free preferences).</li>
              <li><strong>Technical Data:</strong> Basic browser cookies strictly necessary for storing cart items during your browsing session.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF0EC] text-[#B9573F] text-xs flex items-center justify-center font-sans font-bold">2</span>
              How We Use Your Information
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              We respect your privacy and never sell or rent your personal details. Your information is used exclusively to:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-[#786B61] space-y-1.5 leading-relaxed">
              <li>Coordinate and confirm your customized baking batch schedule via WhatsApp or phone.</li>
              <li>Deliver fresh homemade treats safely to your designated address via local courier or express shipping.</li>
              <li>Accommodate specific health and dietary requests with baking precision.</li>
              <li>Respond to inquiries, gift customization requests, and feedback.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF0EC] text-[#B9573F] text-xs flex items-center justify-center font-sans font-bold">3</span>
              Payment Security & Direct Ordering
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              Tiny Treats operates on a direct baker consultation model. We do not store, process, or capture credit card or banking PINs on this website. All payments are verified directly via secure UPI or direct bank transfer upon personal order confirmation on WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF0EC] text-[#B9573F] text-xs flex items-center justify-center font-sans font-bold">4</span>
              Data Retention & Your Rights
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              We retain contact details only for operational order tracking and repeat order convenience. You may request the deletion or correction of your contact records at any time by contacting us directly.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#D99A45]/20">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E]">
              Contacting Us Regarding Privacy
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              If you have any questions or concerns regarding your privacy or data handling, please reach out directly:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#FFF8ED] border border-[#D99A45]/25 flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B9573F]" />
                <div>
                  <div className="text-[11px] font-bold text-[#5A321B]">Direct Call / WhatsApp</div>
                  <div className="text-xs text-[#786B61]">{BRAND_PHONE}</div>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FFF8ED] border border-[#D99A45]/25 flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D99A45]" />
                <div>
                  <div className="text-[11px] font-bold text-[#5A321B]">Email Enquiries</div>
                  <div className="text-xs text-[#786B61]">{BRAND_EMAIL}</div>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
