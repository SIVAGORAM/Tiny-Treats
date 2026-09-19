import type { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { constructMetadata, ROUTES_SEO } from "@/lib/seo";

export const metadata: Metadata = constructMetadata(ROUTES_SEO.gallery);

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Gallery", url: "/gallery" }]} />
      <GalleryClient />
    </>
  );
}
