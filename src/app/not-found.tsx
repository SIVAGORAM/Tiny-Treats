import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Sparkles, Home, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for could not be found. Explore our fresh homemade treats menu.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] py-20 lg:py-32 bg-[#FFF8ED] text-center flex flex-col items-center justify-center px-4">
      <div className="w-20 h-20 rounded-3xl bg-[#FAF0EC] border-2 border-[#D99A45]/30 flex items-center justify-center text-[#B9573F] mb-6 shadow-sm">
        <Sparkles className="w-10 h-10 text-[#B9573F]" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-[#B9573F] mb-2 px-3 py-1 rounded-full bg-[#FAF0EC] border border-[#B9573F]/20">
        404 Error
      </span>

      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5A321B] mb-4">
        Oops! This Little Treat Got Lost.
      </h1>

      <p className="text-sm sm:text-base text-[#786B61] max-w-md mx-auto font-light mb-8 leading-relaxed">
        The page you&apos;re looking for isn&apos;t here — but there are plenty of delicious homemade cookies, laddus, and brownies waiting for you.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-md">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#B9573F] text-white font-semibold text-sm shadow-subtle hover:bg-[#A34B35] transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <Link
          href="/menu"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#5A321B] text-white font-semibold text-sm shadow-subtle hover:bg-[#3D2114] transition-all"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Explore Menu</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
