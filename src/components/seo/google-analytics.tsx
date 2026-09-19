import React from "react";
import Script from "next/script";

interface GoogleAnalyticsProps {
  gaId?: string;
}

/**
 * High-performance Google Analytics 4 (GA4) integration component.
 * - Uses Next.js `next/script` with `strategy="afterInteractive"` to prevent main-thread blocking.
 * - Safely returns `null` if no GA Measurement ID is provided in environment variables.
 * - Configures gtag with IP anonymization and modern privacy flags.
 */
export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const measurementId = gaId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Fail-safe: gracefully unmount if GA measurement ID is missing or set to placeholder
  if (!measurementId || measurementId.trim() === "" || measurementId.includes("placeholder")) {
    return null;
  }

  return (
    <>
      <Script
        id="ga4-gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="ga4-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
