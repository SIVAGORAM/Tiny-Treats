import React from "react";

interface SocialIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function InstagramIcon({ className, ...props }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-4 h-4"}
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className, ...props }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "w-4 h-4"}
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function XTwitterIcon({ className, ...props }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "w-4 h-4"}
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedInIcon({ className, ...props }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "w-4 h-4"}
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function WhatsAppIcon({ className, ...props }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "w-4 h-4"}
      aria-hidden="true"
      {...props}
    >
      <path d="M12.042 2C6.518 2 2.03 6.484 2.03 12.008c0 1.765.46 3.486 1.334 5.002L2 22l5.133-1.347a9.96 9.96 0 0 0 4.909 1.28h.004c5.523 0 10.011-4.485 10.011-10.01 0-2.67-1.04-5.18-2.93-7.07A9.948 9.948 0 0 0 12.042 2zm0 18.334h-.003a8.28 8.28 0 0 1-4.22-1.151l-.303-.18-3.136.822.837-3.056-.197-.314a8.28 8.28 0 0 1-1.272-4.447c0-4.577 3.724-8.301 8.304-8.301 2.217 0 4.302.864 5.87 2.433a8.243 8.243 0 0 1 2.43 5.868c0 4.579-3.725 8.306-8.309 8.306zm4.555-6.22c-.25-.125-1.477-.729-1.706-.812-.229-.083-.396-.125-.563.125s-.646.812-.792.979-.292.188-.542.063c-.25-.125-1.054-.388-2.008-1.238-.742-.662-1.243-1.48-1.389-1.73-.146-.25-.016-.385.11-.51.112-.112.25-.292.375-.438s.167-.25.25-.417c.083-.167.042-.313-.021-.438s-.563-1.354-.771-1.854c-.203-.487-.409-.42-.563-.428l-.48-.008c-.167 0-.438.063-.667.313s-.875.854-.875 2.083c0 1.229.896 2.417 1.021 2.583.125.167 1.763 2.692 4.271 3.775.597.258 1.063.412 1.426.527.6.191 1.146.164 1.578.1.481-.072 1.477-.604 1.685-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.167-.479-.292z" />
    </svg>
  );
}
