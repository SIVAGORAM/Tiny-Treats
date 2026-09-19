import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope, Caveat } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
  metadataBase: new URL("https://www.tinytreats.in"),
  title: {
    default: "Tiny Treats by Shweta | Homemade Cookies, Laddus & Treats",
    template: "%s | Tiny Treats by Shweta",
  },
  description:
    "Discover Tiny Treats by Shweta — homemade cookies, laddus, brownies, cakes and seed crackers prepared in small batches with care and thoughtfully selected ingredients.",
  keywords: [
    "Tiny Treats",
    "Tiny Treats by Shweta",
    "homemade cookies",
    "dry fruit laddu",
    "ragi cookies",
    "seed crackers",
    "homemade brownies",
    "wholesome snacks",
    "no maida cookies",
  ],
  authors: [{ name: "Shweta", url: "https://www.tinytreats.in" }],
  creator: "Tiny Treats by Shweta",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tiny Treats by Shweta",
    title: "Tiny Treats by Shweta | Homemade Cookies, Laddus & Treats",
    description:
      "Homemade cookies, laddus, brownies, cakes and seed crackers made in small batches with love and wholesome ingredients.",
    url: "https://www.tinytreats.in",
    images: [
      {
        url: "/og/tiny-treats-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tiny Treats by Shweta — homemade treats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Treats by Shweta",
    description:
      "Homemade cookies, laddus, brownies, cakes and seed crackers made in small batches with love.",
    images: ["/og/tiny-treats-og.jpg"],
    creator: "@tinytreatsbys",
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
      <body className="min-h-full flex flex-col font-sans bg-[#FFF8ED] text-[#2B211B]">
        <OrganizationSchema />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
