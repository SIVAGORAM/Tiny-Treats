"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors securely without leaking PII
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] bg-[#FFF8ED] py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#FDF0EC] border-2 border-[#B9573F]/30 flex items-center justify-center text-[#B9573F] mb-6 shadow-sm">
        <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-[#B9573F] mb-2 px-3 py-1 rounded-full bg-[#FAF0EC] border border-[#B9573F]/20">
        System Notice
      </span>

      <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5A321B] mb-3">
        Something Took a Tumble in the Kitchen
      </h1>

      <p className="text-sm sm:text-base text-[#786B61] max-w-md mx-auto font-light mb-8 leading-relaxed">
        We encountered an unexpected glitch while preparing this page. Don&apos;t worry, your cart and session data are intact.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#B9573F] hover:bg-[#A34B35] text-white font-semibold text-xs sm:text-sm shadow-subtle hover:shadow-md transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Try Again</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#F3E2C4] hover:bg-[#EBD8C3] text-[#5A321B] font-semibold text-xs sm:text-sm border border-[#5A321B]/15 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
