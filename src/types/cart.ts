import { Product, ProductVariant } from "./product";

export interface CartItem {
  id: string; // unique item id (e.g. `${product.id}-${variant?.id || 'default'}`)
  product: Product;
  variant?: ProductVariant;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
}
