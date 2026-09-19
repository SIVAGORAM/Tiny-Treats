import type { Metadata } from "next";
import { MenuClient } from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Tiny Treats menu featuring Almond Cookies, Ragi Cookies, Dry Fruit Laddus, Calcium Laddus, Protein Laddus, Brownies, Cakes and Seed Crackers.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Menu | Tiny Treats by Shweta",
    description:
      "Explore homemade cookies, laddus, brownies, cakes and seed crackers prepared with care and thoughtfully selected ingredients.",
    url: "https://www.tinytreats.in/menu",
  },
};

export default function MenuPage() {
  return <MenuClient />;
}
