# Tiny Treats — Client Data Checklist

> Every other project doc says, in some form, "do not invent this — get it from Shweta." This document collects all of those placeholders into one list. Send this to the client; nothing on it should be guessed or estimated.

---

## 📌 How to use this doc

- [ ] Send this checklist to Shweta as-is, or turn it into a shared form/spreadsheet.
- [ ] As each item is confirmed, update the relevant file (`data/products.ts`, `.env`, footer component, schema, etc.) and check it off here.
- [ ] Nothing in this list should be filled in with a guess "to keep moving" — every doc in this project (Content, Design System, SEO Guide, Master Prompt) repeats the same rule: placeholder facts never reach production.

---

## 1. Business Contact Details

| Field | Status | Notes |
|---|---|---|
| Public WhatsApp number (for `NEXT_PUBLIC_WHATSAPP_NUMBER` and the WhatsApp CTA) | ☐ Needed | Must be the number Shweta actually monitors for orders |
| Public phone number (if different from WhatsApp) | ☐ Needed | Used in Contact page "Call Us" and LocalBusiness schema |
| Business email (if a contact form/email routing is added) | ☐ Needed | Only required if the optional contact form ships |
| Business address | ☐ Needed — confirm privacy preference | Home-based businesses can register as a "service area business" on Google and keep the exact address hidden; confirm what Shweta is comfortable publishing |
| Service area / delivery city or radius | ☐ Needed | Drives local SEO keywords and the Contact page's delivery info |

## 2. Product Data (per product)

For **every** product in the menu (Almond Cookies, Ragi Cookies, Dry Fruit Laddu, Calcium Laddu, Protein Laddu, Homemade Cakes, Brownies, Seed Crackers — plus any not yet listed):

| Field | Status |
|---|---|
| Final price (per size/variant, if applicable) | ☐ Needed |
| Weight/size options (e.g. 100g / 250g / 500g) | ☐ Needed |
| Ingredient list | ☐ Needed |
| Allergen information | ☐ Needed |
| Whether "No Maida" / "No Added Sugar" / "No Artificial Colours" genuinely applies to *this specific product* | ☐ Needed — confirm per product, not brand-wide |
| Availability (in stock / made-to-order / seasonal) | ☐ Needed |
| Shelf life / storage instructions (if to be displayed) | ☐ Needed |
| Final product photo(s) | ☐ Needed — see [ASSET-CHECKLIST.md](./ASSET-CHECKLIST.md) |

> If any product's ingredients or claims are still being finalized, launch with that product marked "Coming Soon" rather than publishing estimated details.

## 3. Delivery & Ordering

| Field | Status |
|---|---|
| Delivery charges (flat rate, free above a threshold, or none — pickup only?) | ☐ Needed |
| Delivery areas/cities covered | ☐ Needed |
| Typical preparation/baking lead time (referenced in the "How to Order" steps) | ☐ Needed |
| Minimum order value or quantity, if any | ☐ Needed |
| Custom/bulk order policy specifics (minimum notice, minimum quantity for events) | ☐ Needed |

## 4. Brand & Legal

| Field | Status |
|---|---|
| Registered business name (for footer copyright and legal pages) — confirm if different from "Tiny Treats by Shweta" | ☐ Needed |
| GST number, FSSAI license number, or other food-business registration details, if the client wants them displayed | ☐ Optional — only if Shweta has them and wants them public |
| Final say on Privacy Policy / Terms / Cookie Policy wording (drafted in [LEGAL-PAGES.md](./LEGAL-PAGES.md)) | ☐ Needed — client sign-off, ideally reviewed by a professional before publishing |

## 5. Social Proof (only if it becomes real)

| Field | Status |
|---|---|
| Genuine customer testimonials (name + quote, with permission) | ☐ Optional — do not publish until real ones exist |
| Google Business Profile reviews (once the profile is live) | ☐ Optional |
| Follower/customer counts, if ever displayed | ☐ Optional — must be a real, current number, not an estimate |

> Every content and design doc in this project explicitly forbids fabricated testimonials, ratings, review counts, or customer counts. Leave these sections out entirely until real data exists — do not use filler numbers "for now."

## 6. Assets Not Yet Covered Elsewhere

| Field | Status |
|---|---|
| Final logo files (SVG preferred) — wordmark + icon | ☐ Needed |
| Favicon | ☐ Needed |
| Brand signature/script asset for "By Shweta," if not typeset | ☐ Optional |
| Analytics/Search Console access (or confirmation to set up under Shweta's Google account) | ☐ Needed before launch |

---

## ✅ Already Confirmed (no longer placeholders)

| Field | Value |
|---|---|
| Domain | www.tinytreats.in |
| Instagram | [@tinytreatsbyswetha](https://www.instagram.com/tinytreatsbyswetha) |
| Facebook | [Tiny Treats by Swetha](https://www.facebook.com/profile.php?id=61592823341135) |
| X (Twitter) | [@tinytreatsbys](https://x.com/tinytreatsbys) |
| LinkedIn | [Tiny Treats by Swetha](https://www.linkedin.com/in/tinay-treats-by-swetha-a09202383/) |
| Product line-up (names, categories) | Confirmed in [CONTENT.md](./CONTENT.md) |
| Brand voice, tagline, and visual identity | Confirmed in [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) |
