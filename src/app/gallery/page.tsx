import type { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a glimpse into the Tiny Treats kitchen, homemade creations and freshly prepared treats.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Tiny Treats by Shweta",
    description:
      "A glimpse into the Tiny Treats kitchen, homemade creations and freshly prepared treats.",
    url: "https://www.tinytreats.in/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
