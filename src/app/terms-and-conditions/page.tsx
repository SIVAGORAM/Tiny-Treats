import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ChevronRight, Clock, Sparkles, CheckCircle2, Phone, Mail } from "lucide-react";
import { BRAND_PHONE, BRAND_EMAIL } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Review the Terms and Conditions for ordering small-batch homemade cookies, laddus, and artisanal treats from Tiny Treats by Shweta.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="py-8 sm:py-12 bg-[#FFF8ED] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#5A321B]/70">
          <Link href="/" className="hover:text-[#B9573F] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="font-semibold text-[#5A321B]">Terms and Conditions</span>
        </nav>

        {/* Header Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EA] to-[#FDF8F0] border border-[#D99A45]/30 p-6 sm:p-8 shadow-[0_4px_20px_rgba(90,50,27,0.05)] space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D99A45]/40 text-[#B9573F] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <FileText className="w-4 h-4 text-[#D99A45]" />
            <span>Ordering & Service Policy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A321B]">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed max-w-2xl">
            Welcome to Tiny Treats by Shweta. By browsing our website and placing direct orders, you acknowledge and agree to the following artisanal terms of service.
          </p>
          <div className="p-3 rounded-xl bg-[#FAF0EC] border border-[#B9573F]/20 text-[11px] text-[#863B28] leading-relaxed">
            <strong>Note for Legal Review:</strong> These terms govern custom made-to-order baked goods, perishables, and artisanal delivery policies. This draft is subject to formal business and legal review.
          </div>
        </div>

        {/* Terms Sections */}
        <div className="bg-white rounded-3xl border border-[#D99A45]/25 p-6 sm:p-10 shadow-sm space-y-8 text-[#5A321B]">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF0EC] text-[#B9573F] text-xs flex items-center justify-center font-sans font-bold">1</span>
              Small-Batch Fresh Baking Lead Times
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              Every item on Tiny Treats is prepared fresh from scratch without industrial preservatives or freezing. As such:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-[#786B61] space-y-1.5 leading-relaxed">
              <li>Orders require an advance baking notice of <strong>24 to 48 hours</strong> depending on batch size and dietary customization.</li>
              <li>Large celebration gift hampers or bulk corporate boxes require a minimum of <strong>3 to 5 days</strong> advance scheduling.</li>
              <li>Actual baking time will be confirmed directly during your WhatsApp consultation.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF0EC] text-[#B9573F] text-xs flex items-center justify-center font-sans font-bold">2</span>
              Perishability & Ingredient Transparency
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              Our recipes celebrate real unrefined ingredients including 100% butter, whole grains, seeds, dates, and jaggery.
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-[#786B61] space-y-1.5 leading-relaxed">
              <li>Dry cookies, seed crackers, and laddus remain fresh for <strong>15 to 30 days</strong> when stored in their sealed airtight container in a cool, dry place.</li>
              <li>Fresh tea cakes, brownies, and bread should be consumed within <strong>3 to 5 days</strong> or refrigerated.</li>
              <li>Customers with severe food allergies (nuts, dairy, seeds) must notify us during order confirmation. While we follow meticulous kitchen hygiene, our kitchen also processes almonds, cashews, and dairy.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF0EC] text-[#B9573F] text-xs flex items-center justify-center font-sans font-bold">3</span>
              Order Confirmation & Cancellation Policy
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              Because all treats are prepared fresh specifically for your order, once raw artisanal ingredients are prepared and baking begins, orders cannot be cancelled or refunded. If you need to modify your order schedule, please notify us at least 24 hours prior to the scheduled baking day.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#FAF0EC] text-[#B9573F] text-xs flex items-center justify-center font-sans font-bold">4</span>
              Delivery & Safe Packaging
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              Local deliveries within Hyderabad are dispatched fresh via reliable courier partners. Pan-India deliveries are shipped in reinforced eco-friendly, food-grade airtight containers. Tiny Treats ensures careful packaging to maintain peak crunch and shape during transit.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#D99A45]/20">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#3A1E0E]">
              Questions or Special Requests?
            </h2>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              We take pride in personal hospitality. Please reach out to discuss any aspect of our terms or your custom order requirements.
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
