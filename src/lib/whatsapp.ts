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
      "*ORDER INQUIRY — Tiny Treats*\n" +
      "────────────────────────────\n" +
      "Hello Tiny Treats! 👋\n\n" +
      "I would like to check today's freshly baked treats availability and place an order.\n\n" +
      "Thank you!"
    );
  }

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  let message =
    "*ORDER INQUIRY — Tiny Treats*\n" +
    "────────────────────────────\n" +
    "Hello Tiny Treats! 👋\n\n" +
    "I would like to place an order for the following treats:\n\n";

  items.forEach((item, index) => {
    const sNo = `${index + 1}.`;
    const variantName = item.variant ? ` (${item.variant.name})` : "";
    const weightInfo = item.product.weight ? ` [${item.product.weight}]` : "";
    const itemPrice = item.variant?.price || item.product.price;
    const priceText = itemPrice
      ? `₹${(itemPrice * item.quantity).toLocaleString("en-IN")}`
      : "Price on Request (Fresh Batch)";

    message += `${sNo} *${item.product.name}*${variantName}${weightInfo}\n`;
    message += `   • Quantity: *${item.quantity}*\n`;
    message += `   • Price: *${priceText}*\n\n`;
  });

  message += "────────────────────────────\n";
  message += `*Total Items:* ${totalQuantity} ${totalQuantity === 1 ? "treat" : "treats"}\n`;
  if (total > 0) {
    message += `*Estimated Subtotal:* ₹${total.toLocaleString("en-IN")}\n`;
  }

  message +=
    "\nPlease let me know the availability, baking schedule, and dispatch details.\n\n" +
    "Thank you!";

  return encodeURIComponent(message);
}

export function getWhatsAppUrl(customMessage?: string): string {
  const number = DEFAULT_WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const encodedMsg = customMessage
    ? encodeURIComponent(customMessage)
    : encodeURIComponent(
        "*ORDER INQUIRY — Tiny Treats*\n" +
        "────────────────────────────\n" +
        "Hello Tiny Treats! 👋\n\n" +
        "I would like to ask about your homemade treats and place an order.\n\n" +
        "Thank you!"
      );
  return `https://api.whatsapp.com/send/?phone=${number}&text=${encodedMsg}`;
}

export function getCartWhatsAppUrl(items: CartItem[], total: number): string {
  const number = DEFAULT_WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const encodedMsg = generateCartWhatsAppMessage(items, total);
  return `https://api.whatsapp.com/send/?phone=${number}&text=${encodedMsg}`;
}
