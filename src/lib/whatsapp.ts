import { CartItem } from "@/types/cart";

export const BRAND_PHONE = "+91 93953 24365";
export const BRAND_PHONE_CLEAN = "919395324365";
export const BRAND_EMAIL = "hello@tinytreats.com";
export const BRAND_WEBSITE = "https://www.tinytreats.in";

export const BRAND_SOCIALS = {
  instagram: "https://www.instagram.com/tinytreatsbyswetha",
  facebook: "https://www.facebook.com/profile.php?id=61592823341135",
  linkedin: "https://www.linkedin.com/in/tinay-treats-by-swetha-a09202383/",
  twitter: "https://x.com/tinytreatsbys",
};

export const DEFAULT_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || BRAND_PHONE_CLEAN;

export function generateCartWhatsAppMessage(items: CartItem[], total: number): string {
  if (!items.length) {
    return encodeURIComponent(
      "Hello Tiny Treats! 👋\n\nI'd like to check today's available freshly baked treats and order details. Thank you! ❤️"
    );
  }

  let message = "Hello Tiny Treats! 👋\n\nI'd like to place an order for:\n\n";

  items.forEach((item) => {
    const itemEmoji =
      item.product.category === "cookies"
        ? "🍪"
        : item.product.category === "laddus"
        ? "🥜"
        : item.product.category === "seed-crackers"
        ? "🌱"
        : item.product.category === "breads"
        ? "🍞"
        : item.product.category === "cakes"
        ? "🍰"
        : "🍫";

    const variantName = item.variant ? ` (${item.variant.name})` : "";
    const priceText =
      item.variant?.price || item.product.price
        ? `₹${((item.variant?.price || item.product.price) * item.quantity).toLocaleString("en-IN")}`
        : "Price: On Request (Fresh Batch)";

    message += `${itemEmoji} ${item.product.name}${variantName} × ${item.quantity} — ${priceText}\n`;
  });

  if (total > 0) {
    message += `\nEstimated Subtotal: ₹${total.toLocaleString("en-IN")}\n`;
  }

  message +=
    "\nPlease let me know the availability, baking lead time, and next steps.\n\nThank you! ❤️";

  return encodeURIComponent(message);
}

export function getWhatsAppUrl(customMessage?: string): string {
  const number = DEFAULT_WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const encodedMsg = customMessage
    ? encodeURIComponent(customMessage)
    : encodeURIComponent(
        "Hello Tiny Treats! 👋\n\nI'd like to ask about your homemade treats and place an order. Thank you! ❤️"
      );
  return `https://wa.me/${number}?text=${encodedMsg}`;
}

export function getCartWhatsAppUrl(items: CartItem[], total: number): string {
  const number = DEFAULT_WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const encodedMsg = generateCartWhatsAppMessage(items, total);
  return `https://wa.me/${number}?text=${encodedMsg}`;
}
