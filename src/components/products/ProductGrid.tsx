import React from "react";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ProductGrid({ products, columns = 4, className = "" }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white/60 rounded-3xl border border-brand-brown/10">
        <p className="font-serif text-xl font-semibold text-brand-brown mb-1">
          No treats found
        </p>
        <p className="text-sm text-brand-muted">
          Try selecting another category or check back soon for fresh small-batch baking.
        </p>
      </div>
    );
  }

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]} ${className}`}>
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          priorityImage={idx < 4}
        />
      ))}
    </div>
  );
}
