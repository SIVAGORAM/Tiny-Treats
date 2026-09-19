import type { Metadata } from "next";
import { MenuClient } from "./MenuClient";
import { MenuProductsSchema } from "@/components/seo/MenuProductsSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { constructMetadata, ROUTES_SEO } from "@/lib/seo";

export const metadata: Metadata = constructMetadata(ROUTES_SEO.menu);

export default function MenuPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Menu", url: "/menu" }]} />
      <MenuProductsSchema />
      <MenuClient />
    </>
  );
}
