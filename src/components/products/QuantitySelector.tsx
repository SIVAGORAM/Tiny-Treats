import React from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
  size = "md",
  className,
}: QuantitySelectorProps) {
  const sizeClasses = {
    sm: "h-7 px-1.5 text-xs",
    md: "h-9 px-2 text-sm",
    lg: "h-11 px-3 text-base",
  };

  const btnSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-8 h-8",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-brown/15 shadow-2xs",
        sizeClasses[size],
        className
      )}
    >
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
        className={cn(
          "rounded-full flex items-center justify-center text-brand-brown hover:bg-brand-beige/50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors",
          btnSizes[size]
        )}
      >
        <Minus className="w-3.5 h-3.5" />
      </button>

      <span className="w-6 text-center font-semibold text-brand-brown select-none">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className={cn(
          "rounded-full flex items-center justify-center text-brand-brown hover:bg-brand-beige/50 transition-colors",
          btnSizes[size]
        )}
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
