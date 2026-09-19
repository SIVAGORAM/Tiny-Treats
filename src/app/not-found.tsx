import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 lg:py-36 bg-[#FFF8ED] text-center flex flex-col items-center justify-center px-4">
      <div className="w-20 h-20 rounded-3xl bg-[#FAF0EC] border border-[#EADBCA] flex items-center justify-center text-[#B9573F] mb-6 shadow-sm">
        <Sparkles className="w-10 h-10 text-[#B9573F]" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-brand-terracotta mb-2">
        404 — Page Not Found
      </span>

      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-brown mb-4">
        Oops! This Little Treat Got Lost.
      </h1>

      <p className="text-sm sm:text-base text-brand-muted max-w-md mx-auto font-light mb-8 leading-relaxed">
        The page you&apos;re looking for isn&apos;t here — but there are plenty of delicious homemade treats waiting for you.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-terracotta text-white font-semibold text-sm shadow-subtle hover:bg-[#A34B35] transition-all"
      >
        <span>Back to Home</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
