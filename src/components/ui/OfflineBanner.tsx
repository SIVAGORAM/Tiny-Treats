"use client";

import React, { useState, useEffect } from "react";
import { WifiOff, Wifi } from "lucide-react";

export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);
  const [justReconnected, setJustReconnected] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleOffline = () => {
      setIsOffline(true);
      setJustReconnected(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setJustReconnected(true);
      const timer = setTimeout(() => setJustReconnected(false), 3000);
      return () => clearTimeout(timer);
    };

    if (!navigator.onLine) {
      setIsOffline(true);
    }

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!isOffline && !justReconnected) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-14 left-1/2 -translate-x-1/2 z-[90] max-w-sm w-[90%] pointer-events-auto select-none animate-in fade-in slide-in-from-top-3 duration-300"
    >
      {isOffline ? (
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#5A321B] text-[#FFF8ED] border border-[#D99A45]/40 shadow-lg text-xs">
          <WifiOff className="w-4 h-4 text-[#B9573F] shrink-0 animate-pulse" />
          <div className="leading-tight">
            <span className="font-semibold block">You are currently offline</span>
            <span className="text-[11px] text-[#FFF8ED]/75">Cached pages remain browsable.</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#526A3A] text-white border border-emerald-400/40 shadow-lg text-xs">
          <Wifi className="w-4 h-4 text-emerald-200 shrink-0" />
          <div className="leading-tight">
            <span className="font-semibold block">Connection restored</span>
            <span className="text-[11px] text-white/80">You are back online.</span>
          </div>
        </div>
      )}
    </div>
  );
}
