"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset on route change completion
    setIsNavigating(false);
    setProgress(100);
    const resetTimer = setTimeout(() => setProgress(0), 200);
    return () => clearTimeout(resetTimer);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target || !target.href) return;
      
      const currentUrl = new URL(window.location.href);
      const targetUrl = new URL(target.href, window.location.href);

      // Only trigger for internal, same-origin page navigations
      if (
        targetUrl.origin === currentUrl.origin &&
        targetUrl.pathname !== currentUrl.pathname &&
        !target.hasAttribute("download") &&
        target.target !== "_blank"
      ) {
        setIsNavigating(true);
        setProgress(30);
        setTimeout(() => setProgress(70), 150);
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  if (progress === 0) return null;

  return (
    <div
      role="progressbar"
      aria-label="Page navigation progress"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-[#D99A45] via-[#B9573F] to-[#526A3A] transition-all duration-200 ease-out shadow-[0_0_10px_rgba(217,154,69,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
