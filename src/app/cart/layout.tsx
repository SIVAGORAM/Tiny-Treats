import type { Metadata } from "next";
import React from "react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { constructMetadata, ROUTES_SEO } from "@/lib/seo";

export const metadata: Metadata = constructMetadata(ROUTES_SEO.cart);

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Cart", url: "/cart" }]} />
      {children}
    </>
  );
}
