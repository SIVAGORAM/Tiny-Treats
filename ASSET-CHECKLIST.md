# Tiny Treats — Asset Checklist

> Every image/media slot the website needs, mapped to the file paths already defined in the [Technical README](./README.md)'s project structure. Use this to brief a photographer, organize a photo shoot, or track what Shweta still needs to send.

**Format reminder** (per the [Design System](./DESIGN-SYSTEM.md)): WebP or AVIF preferred, natural daylight, warm tones, real texture (wood/linen/ceramic), no over-saturation, no generic stock photography.

---

## 1. Brand Assets — `/public/logo/` and `/public/brand/`

| Asset | Filename (suggested) | Status | Notes |
|---|---|---|---|
| Primary logo (wordmark) | `tiny-treats-logo.svg` | ☐ Needed | Vector/SVG preferred for crisp scaling |
| Icon/mark only | `tiny-treats-icon.svg` | ☐ Needed | Used for favicon and compact spaces |
| Favicon | `favicon.ico` / `icon.png` | ☐ Needed | Derived from the icon mark |
| Open Graph share image | `/og/tiny-treats-og.jpg` | ☐ Needed | 1200×630px, used for social link previews (referenced in [SEO-GUIDE.md](./SEO-GUIDE.md)) |
| Brand signature / script asset for "By Shweta" | — | ☐ Optional | Only if not simply typeset in the script font |

## 2. Botanical Illustration Set — used throughout (per Design System §15)

| Asset | Status |
|---|---|
| 01 Large left branch | ☐ Needed |
| 02 Large right branch | ☐ Needed |
| 03 Small leafy sprig | ☐ Needed |
| 04 Horizontal botanical divider | ☐ Needed |
| 05 Individual leaf | ☐ Needed |
| 06 Botanical outline | ☐ Needed |
| 07 Small corner foliage | ☐ Needed |
| 08 Hand-drawn heart | ☐ Needed |
| 09 Brand flourish | ☐ Needed |

> These are typically commissioned once as a small illustration set (SVG) rather than photographed — flag to a designer/illustrator if not already in progress.

## 3. Hero & Homepage — `/public/hero/`

| Section | Asset needed | Status |
|---|---|---|
| Hero | Large hero food photography (the strongest image on the site) | ☐ Needed |
| Brand Introduction | Supporting lifestyle/kitchen image | ☐ Needed |
| Our Story Preview | Founder/baking-process photo | ☐ Needed |
| Family Section | Family/lifestyle photo (tea-time, sharing treats) | ☐ Needed |
| Gallery Preview | 3–4 representative images pulled from the full gallery | ☐ Depends on §5 |
| Instagram Section | Curated collage of recent Instagram posts | ☐ Needed — pull from live Instagram once active |

## 4. Product Photography — `/public/products/`

For **every** product listed in [CONTENT.md](./CONTENT.md), following the naming convention already used in the data examples (e.g. `almond-cookies.webp`):

| Product | Filename | Status |
|---|---|---|
| Almond Cookies | `almond-cookies.webp` | ☐ Needed |
| Ragi Cookies | `ragi-cookies.webp` | ☐ Needed |
| Dry Fruit Laddu | `dry-fruit-laddu.webp` | ☐ Needed |
| Calcium Laddu | `calcium-laddu.webp` | ☐ Needed |
| Protein Laddu | `protein-laddu.webp` | ☐ Needed |
| Homemade Cakes | `homemade-cakes.webp` | ☐ Needed |
| Brownies | `brownies.webp` | ☐ Needed |
| Seed Crackers | `seed-crackers.webp` | ☐ Needed |

**Per product, ideally capture:**

- [ ] One clean "hero" shot on a neutral surface (for product cards/grid)
- [ ] One close-up/texture shot (for Quick View gallery)
- [ ] One contextual/lifestyle shot (being served, packaged, or enjoyed) — optional but strengthens Quick View and product storytelling

> Composition target from the Design System: ~60% product, 20% negative space, 20% contextual props. The food stays the hero of the frame.

## 5. Gallery Page — `/public/gallery/`

Per the Gallery categories defined in Content/Design docs:

| Category | Minimum images for a real masonry layout | Status |
|---|---|---|
| Our Treats | 4–6 | ☐ Needed |
| Baking | 4–6 | ☐ Needed |
| Behind the Scenes | 4–6 | ☐ Needed |
| Celebrations | 4–6 | ☐ Optional — only if such photos exist |

> If a category doesn't have enough real images yet, don't launch it — use the "A Little More Goodness Coming Soon" state from [CONTENT.md](./CONTENT.md) §30 instead of padding with filler images.

## 6. About Page

| Asset | Status |
|---|---|
| Story hero image | ☐ Needed |
| "Founder" / kitchen photography for the Journey section | ☐ Needed |
| Optional polaroid-style supporting images (per Design System §24) | ☐ Optional |

## 7. Contact Page

| Asset | Status |
|---|---|
| Supporting contact/hero image (optional — page can work with just the form/methods) | ☐ Optional |

---

## ✅ Naming & Technical Checklist

- [ ] All final images converted to WebP (or AVIF where supported)
- [ ] Images compressed before upload (target reasonable file sizes for fast LCP — see [SEO-GUIDE.md](./SEO-GUIDE.md) §9)
- [ ] Filenames are lowercase, hyphenated, descriptive (matches the alt-text/SEO conventions already defined)
- [ ] Every image has a planned, human-written alt text (not "IMG_2093" or keyword-stuffed text)
- [ ] Hero image identified and marked for `priority` loading (only one per page — see Design/SEO docs)
