import React from "react";
import { cn } from "@/lib/utils";

interface BotanicalProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function BotanicalSprig({ className, ...props }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6 text-brand-sage", className)}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M24 44C24 44 24 28 32 18C40 8 44 4 44 4C44 4 38 12 28 20C18 28 24 44 24 44Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
      <path
        d="M24 44C24 44 22 26 12 20C2 14 4 4 4 4C4 4 12 8 18 18C24 28 24 44 24 44Z"
        fill="currentColor"
        fillOpacity="0.65"
      />
      <path
        d="M24 44V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BotanicalDivider({ className, ...props }: BotanicalProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3 my-4", className)}>
      <div className="h-px bg-brand-brown/15 w-12 sm:w-20" />
      <svg
        viewBox="0 0 32 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-4 text-brand-sage"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M16 8C12 4 4 6 0 8C4 10 12 12 16 8Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <path
          d="M16 8C20 4 28 6 32 8C28 10 20 12 16 8Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <circle cx="16" cy="8" r="2" fill="#D99A45" />
      </svg>
      <div className="h-px bg-brand-brown/15 w-12 sm:w-20" />
    </div>
  );
}

export function HeartFlourish({ className, ...props }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-4 h-4 text-brand-terracotta inline-block", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
