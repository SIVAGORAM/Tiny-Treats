import React, { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope, Caveat } from "next/font/google";
import "./globals.css";
import { BakerySchema } from "@/components/seo/BakerySchema";
import { JsonLd, getOrganizationSchema, getHcmSoftwareSchema } from "@/components/seo/json-ld";
import { GoogleAnalytics } from "@/components/seo/google-analytics";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NavigationProgressBar } from "@/components/ui/NavigationProgressBar";
import { OfflineBanner } from "@/components/ui/OfflineBanner";
import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

import { SITE_CONFIG, getCanonicalUrl } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5A321B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: SITE_CONFIG.defaultTitle,
    template: SITE_CONFIG.titleTemplate,
  },
  description: SITE_CONFIG.defaultDescription,
  keywords: SITE_CONFIG.defaultKeywords,
  authors: [{ name: SITE_CONFIG.siteName, url: SITE_CONFIG.siteUrl }],
  creator: SITE_CONFIG.siteName,
  publisher: SITE_CONFIG.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: getCanonicalUrl(""),
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    siteName: SITE_CONFIG.siteName,
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    url: getCanonicalUrl(""),
    images: [
      {
        url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.siteName} — Fresh Homemade Wholesome Treats`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    images: [`${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultOgImage}`],
    creator: SITE_CONFIG.twitterHandle,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FFF8ED] text-[#2B211B] relative">
        {/* Accessible Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#5A321B] focus:text-[#FFF8ED] focus:rounded-xl focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D99A45] text-xs font-bold"
        >
          Skip to main content
        </a>

        {/* Global Progress Bar for Route Transitions */}
        <Suspense fallback={null}>
          <NavigationProgressBar />
        </Suspense>

        {/* Offline Connectivity Detector Banner */}
        <OfflineBanner />

        {/* Google Analytics 4 (GA4) Non-blocking Script */}
        <GoogleAnalytics />

        {/* Global Organization & Software Application JSON-LD Schemas */}
        <JsonLd data={[getOrganizationSchema(), getHcmSoftwareSchema()]} />
        <BakerySchema />
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col pb-16 md:pb-0 outline-none">
          {children}
        </main>

        <Footer />

        {/* Sticky Mobile CTA & Action Bar */}
        <StickyMobileCTA />

        {/* Cookie Consent & Preference Center Banner */}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
