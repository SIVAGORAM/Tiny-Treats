"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X, Check, SlidersHorizontal } from "lucide-react";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

const STORAGE_KEY = "tinytreats_cookie_consent_v1";

export function getStoredCookieConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveCookieConsent(prefs: Omit<CookiePreferences, "timestamp">) {
  if (typeof window === "undefined") return;
  const payload: CookiePreferences = {
    ...prefs,
    timestamp: Date.now(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    window.dispatchEvent(new CustomEvent("cookie_consent_updated", { detail: payload }));
  } catch (err) {
    console.error("Failed to save cookie consent:", err);
  }
}

export function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);

  useEffect(() => {
    setMounted(true);
    const stored = getStoredCookieConsent();
    if (!stored) {
      // Delay showing banner by 300ms for smooth initial paint
      const timer = setTimeout(() => setIsOpen(true), 300);
      return () => clearTimeout(timer);
    }

    // Listen for custom trigger to reopen preferences
    const handleOpenPreferences = () => {
      const current = getStoredCookieConsent();
      setAnalyticsAllowed(current ? current.analytics : true);
      setShowPreferences(true);
      setIsOpen(true);
    };

    window.addEventListener("open_cookie_preferences", handleOpenPreferences);
    return () => window.removeEventListener("open_cookie_preferences", handleOpenPreferences);
  }, []);

  if (!mounted || !isOpen) return null;

  const handleAcceptAll = () => {
    saveCookieConsent({ necessary: true, analytics: true });
    setIsOpen(false);
    setShowPreferences(false);
  };

  const handleRejectNonEssential = () => {
    saveCookieConsent({ necessary: true, analytics: false });
    setIsOpen(false);
    setShowPreferences(false);
  };

  const handleSaveCustom = () => {
    saveCookieConsent({ necessary: true, analytics: analyticsAllowed });
    setIsOpen(false);
    setShowPreferences(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-3 sm:bottom-4 left-3 right-3 sm:left-auto sm:right-4 sm:max-w-md md:max-w-lg z-50 animate-in fade-in slide-in-from-bottom-5 duration-300 select-none"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-[#D99A45]/40 p-5 sm:p-6 shadow-[0_12px_36px_rgba(90,50,27,0.18)] text-[#5A321B] space-y-4">
        
        {/* Banner Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF8ED] border border-[#D99A45]/30 text-[#D99A45] flex items-center justify-center shrink-0 shadow-2xs">
              <Cookie className="w-5 h-5 text-[#B9573F]" />
            </div>
            <div>
              <h2 className="font-serif text-sm sm:text-base font-bold text-[#3A1E0E]">
                {showPreferences ? "Customize Cookie Choices" : "Fresh Baked & Privacy Minded"}
              </h2>
              <p className="text-[11px] text-[#786B61]">Tiny Treats Privacy & Storage</p>
            </div>
          </div>
        </div>

        {/* Banner Body */}
        {!showPreferences ? (
          <>
            <p className="text-xs text-[#5A321B]/85 font-light leading-relaxed">
              We use essential cookies to keep items fresh in your cart and optional anonymous metrics to improve our recipes and website speed. Read our{" "}
              <Link
                href="/cookie-policy"
                className="font-semibold text-[#B9573F] underline hover:text-[#A34B35]"
              >
                Cookie Policy
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 h-10 px-4 rounded-xl bg-[#526A3A] hover:bg-[#43592D] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Accept All</span>
              </button>

              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="flex-1 h-10 px-4 rounded-xl bg-[#FAF0EC] hover:bg-[#F3E2C4] text-[#5A321B] text-xs font-semibold border border-[#EADBCA] transition-all cursor-pointer"
              >
                <span>Reject Optional</span>
              </button>

              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="h-10 px-3 rounded-xl bg-white hover:bg-[#FFF8ED] text-[#5A321B] text-xs font-medium border border-[#D99A45]/30 transition-all cursor-pointer flex items-center justify-center gap-1"
                aria-label="Manage cookie preferences"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#D99A45]" />
                <span className="sm:hidden">Settings</span>
              </button>
            </div>
          </>
        ) : (
          /* Preferences Panel */
          <div className="space-y-3.5">
            <div className="space-y-2 text-xs">
              {/* Essential */}
              <div className="p-3 rounded-2xl bg-[#FFF8ED] border border-[#D99A45]/20 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="font-bold text-[#3A1E0E] block">Strictly Necessary</span>
                  <span className="text-[11px] text-[#786B61] block leading-tight">
                    Preserves cart selections and secure session data.
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#526A3A] bg-[#66723A]/15 px-2 py-0.5 rounded-full shrink-0">
                  Required
                </span>
              </div>

              {/* Analytics */}
              <div className="p-3 rounded-2xl bg-white border border-[#D99A45]/25 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="font-bold text-[#3A1E0E] block">Analytics & Performance</span>
                  <span className="text-[11px] text-[#786B61] block leading-tight">
                    Helps us understand recipe popularity and optimize speed.
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#526A3A]" />
                </label>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={handleSaveCustom}
                className="flex-1 h-10 px-4 rounded-xl bg-[#5A321B] hover:bg-[#3D2114] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="h-10 px-4 rounded-xl bg-white hover:bg-[#FAF0EC] text-[#786B61] text-xs font-medium border border-[#EADBCA] transition-all cursor-pointer"
              >
                Back
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
