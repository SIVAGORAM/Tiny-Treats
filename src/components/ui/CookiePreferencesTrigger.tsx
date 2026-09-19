"use client";

import React from "react";
import { SlidersHorizontal } from "lucide-react";

interface CookiePreferencesTriggerProps {
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
  onClick?: () => void;
}

export function CookiePreferencesTrigger({
  className,
  children,
  showIcon = false,
  onClick,
}: CookiePreferencesTriggerProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open_cookie_preferences"));
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        className ||
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D99A45]/40 text-[#5A321B] hover:text-[#B9573F] text-xs font-semibold shadow-2xs hover:shadow-xs transition-all cursor-pointer"
      }
    >
      {showIcon && <SlidersHorizontal className="w-3.5 h-3.5 text-[#D99A45] shrink-0" />}
      <span>{children || "Manage Cookie Preferences"}</span>
    </button>
  );
}
