"use client";

import React, { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FFF8ED] text-[#2B211B] flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white rounded-3xl border-2 border-[#B9573F]/30 p-8 shadow-xl text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-[#FDF0EC] text-[#B9573F] flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-serif font-bold text-[#5A321B]">
              Application Error
            </h1>
            <p className="text-xs sm:text-sm text-[#786B61] leading-relaxed">
              An unexpected system error occurred. Please click below to reload the application.
            </p>
          </div>

          <button
            type="button"
            onClick={() => reset()}
            className="w-full h-12 rounded-xl bg-[#B9573F] hover:bg-[#A34B35] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reload Application</span>
          </button>
        </div>
      </body>
    </html>
  );
}
