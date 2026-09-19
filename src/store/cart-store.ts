import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, CartStore } from "@/types/cart";
import { Product, ProductVariant } from "@/types/product";

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      lastAddedItem: null,
      showAddedToast: false,

      openCart: () => set({ isOpen: true, showAddedToast: false }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen, showAddedToast: false })),
      dismissToast: () => set({ showAddedToast: false }),

      addItem: (product: Product, quantity = 1, variant?: ProductVariant, openImmediately = false) => {
        const variantId = variant?.id || "default";
        const itemId = `${product.id}-${variantId}`;
        const newItem: CartItem = {
          id: itemId,
          product,
          variant,
          quantity,
        };

        set((state) => {
          const existingItemIndex = state.items.findIndex((item) => item.id === itemId);

          let updatedItems: CartItem[];
          if (existingItemIndex > -1) {
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = {
              ...updatedItems[existingItemIndex],
              quantity: updatedItems[existingItemIndex].quantity + quantity,
            };
          } else {
            updatedItems = [...state.items, newItem];
          }

          return {
            items: updatedItems,
            isOpen: openImmediately ? true : state.isOpen,
            lastAddedItem: newItem,
            showAddedToast: !openImmediately,
          };
        });
      },

      removeItem: (itemId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [], lastAddedItem: null, showAddedToast: false });
      },

      getItemCount: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        const { items } = get();
        return items.reduce((total, item) => {
          const itemPrice = item.variant?.price || item.product.price || 0;
          return total + itemPrice * item.quantity;
        }, 0);
      },
    }),
    {
      name: "tiny-treats-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
