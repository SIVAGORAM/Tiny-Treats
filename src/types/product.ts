export type ProductCategory =
  | "all"
  | "cookies"
  | "laddus"
  | "seed-crackers"
  | "breads"
  | "cakes"
  | "brownies"
  | "cakes-brownies"
  | "gift-hampers";

export interface ProductVariant {
  id: string;
  name: string;
  weight: string;
  price: number;
  priceLabel?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  story?: string;
  price: number;
  priceLabel?: string;
  weight?: string;
  image: string;
  galleryImages?: string[];
  tags: string[];
  attributes?: string[];
  ingredients?: string[];
  allergens?: string[];
  variants?: ProductVariant[];
  available: boolean;
  featured?: boolean;
  badge?: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  slug: string;
  description: string;
  iconName?: string;
  subcategories?: string[];
}
