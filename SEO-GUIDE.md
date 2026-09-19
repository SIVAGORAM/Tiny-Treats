# 🔍 Tiny Treats — Master SEO Guide

> A complete, actionable SEO playbook for [www.tinytreats.in](https://www.tinytreats.in), covering strategy, on-page implementation, technical setup, schema markup and ongoing maintenance.

This guide is meant to be used alongside the [Technical README](./README.md) and the [Website Content Doc](./CONTENT.md). It assumes the Next.js App Router stack described in the technical README.

---

## 📌 Table of Contents

1. [SEO Goals](#1-seo-goals)
2. [Keyword Strategy](#2-keyword-strategy)
3. [Site Architecture & URLs](#3-site-architecture--urls)
4. [On-Page SEO — Page Templates](#4-on-page-seo--page-templates)
5. [Next.js Metadata Implementation](#5-nextjs-metadata-implementation)
6. [Structured Data (Schema.org / JSON-LD)](#6-structured-data-schemaorg--json-ld)
7. [sitemap.xml & robots.txt](#7-sitemapxml--robotstxt)
8. [Image SEO](#8-image-seo)
9. [Core Web Vitals & Technical Performance](#9-core-web-vitals--technical-performance)
10. [Local SEO](#10-local-seo)
11. [Content & Blog Strategy](#11-content--blog-strategy)
12. [Internal Linking](#12-internal-linking)
13. [Off-Page SEO & Social Signals](#13-off-page-seo--social-signals)
14. [Mobile SEO](#14-mobile-seo)
15. [Analytics & Search Console Setup](#15-analytics--search-console-setup)
16. [SEO Content Rules (Do Not Invent)](#16-seo-content-rules-do-not-invent)
17. [Launch Checklist](#17-launch-checklist)
18. [Ongoing SEO Maintenance Calendar](#18-ongoing-seo-maintenance-calendar)

---

## 1. SEO Goals

| Goal | Why it matters for Tiny Treats |
|---|---|
| Rank for "homemade [product] + city/area" searches | Highest-intent traffic — people ready to order |
| Rank for brand name "Tiny Treats by Swetha" | Protects brand searches from competitors |
| Drive qualified WhatsApp order clicks | The website's real conversion event is a WhatsApp chat, not a checkout — SEO should optimize for that click |
| Build long-term organic visibility without paid ads | V1 has no ad budget assumption; SEO + Instagram is the primary discovery channel |
| Keep every claim compliant with the brand's content rules | See [Section 16](#16-seo-content-rules-do-not-invent) — no invented health/medical claims, even for keyword targeting |

---

## 2. Keyword Strategy

### 2.1 Primary keyword themes (by product category)

| Category | Example primary keywords | Notes |
|---|---|---|
| Cookies | homemade almond cookies, ragi cookies, homemade cookies online | "ragi cookies" is a distinctive, lower-competition term — prioritize it |
| Laddus | dry fruit laddu, homemade laddu online, protein laddu, calcium laddu | Keep wording aligned with Section 16 — avoid "high-protein" style nutrition claims not supplied by the client |
| Cakes & Brownies | homemade cakes online, homemade brownies, birthday cake home baker | Strong local-intent category — pair with location keywords |
| Seed Crackers | homemade seed crackers, savoury snacks homemade | Smaller search volume but low competition |
| Brand / navigational | Tiny Treats by Swetha, Tiny Treats homemade snacks | Always include exact brand name in title tags |

### 2.2 Modifier keywords to combine with the above

- "homemade" / "home-baked" / "small batch"
- "order online" / "order on WhatsApp"
- "[city/area name]" — **once the client confirms the service area/delivery city**, layer this into titles, meta descriptions, and the LocalBusiness schema (see [Section 10](#10-local-seo)). Do not guess a city.
- "no maida" / "no added sugar" (only where factually true per product, matching Section 16 rules)
- "gift" / "festival" / "celebration" (for cakes, brownies, laddus around Diwali, Raksha Bandhan, birthdays)

### 2.3 Long-tail / conversational keywords

These map well to FAQ content and blog posts (see [Section 11](#11-content--blog-strategy)):

- "where to buy homemade laddus online"
- "healthy cookie options for kids"
- "how to order homemade snacks on WhatsApp"
- "best homemade brownies for birthday party"

### 2.4 Keyword mapping (page → primary keyword)

| Page | Primary keyword focus |
|---|---|
| Home | Tiny Treats by Swetha, homemade cookies laddus and treats |
| Menu | homemade cookies laddus brownies cakes seed crackers online |
| Product pages / Quick View (if given own URLs) | individual product name + "homemade" (e.g. "almond cookies homemade") |
| About | Tiny Treats story, homemade brand story |
| Gallery | Tiny Treats gallery, homemade baking photos |
| Contact | order Tiny Treats WhatsApp, contact homemade bakery |

> Keep one primary keyword focus per page. Do not target the same exact keyword phrase on two pages — this causes internal keyword cannibalization.

---

## 3. Site Architecture & URLs

Clean, descriptive, lowercase, hyphenated URLs — matching the sitemap already defined in the technical README:

```text
/               → Home
/menu           → Menu (all products, filterable by category)
/about          → About Us
/gallery        → Gallery
/contact        → Contact
```

If individual product pages are introduced later (optional, but good for SEO — each product becomes its own indexable, shareable page):

```text
/menu/almond-cookies
/menu/ragi-cookies
/menu/dry-fruit-laddu
/menu/calcium-laddu
/menu/protein-laddu
/menu/homemade-cakes
/menu/brownies
/menu/seed-crackers
```

**Guidelines:**

- No trailing slashes inconsistency — pick one convention (Next.js default: no trailing slash) and keep it consistent via `next.config.ts`.
- No query-parameter-only content pages (e.g. avoid `/menu?category=cookies` being the *only* way to reach cookie content — if category filtering is client-side only, that's fine, but make sure category names still appear as crawlable text on `/menu`).
- Avoid duplicate content across URLs (e.g. `/menu` and `/menu/` and `/Menu` all resolving separately — enforce canonical casing and redirects).

---

## 4. On-Page SEO — Page Templates

These are the production-ready title tags and meta descriptions (from the Content Doc, Section 39), each within recommended length limits (titles ≤ 60 characters, descriptions ≤ 155–160 characters).

| Page | Title Tag | Meta Description |
|---|---|---|
| Home | `Tiny Treats by Swetha \| Homemade Cookies, Laddus & Treats` | Discover Tiny Treats by Swetha — homemade cookies, laddus, brownies, cakes and seed crackers prepared in small batches with care and thoughtfully selected ingredients. |
| Menu | `Menu \| Tiny Treats by Swetha` | Explore the Tiny Treats menu featuring Almond Cookies, Ragi Cookies, Dry Fruit Laddus, Calcium Laddus, Protein Laddus, Brownies, Cakes and Seed Crackers. |
| About | `Our Story \| Tiny Treats by Swetha` | Discover the story behind Tiny Treats — a home-baking journey that began with a mother's desire to make homemade treats for her children. |
| Gallery | `Gallery \| Tiny Treats by Swetha` | Take a glimpse into the Tiny Treats kitchen, homemade creations and freshly prepared treats. |
| Contact | `Contact Tiny Treats \| Order Homemade Treats` | Get in touch with Tiny Treats by Swetha through WhatsApp or phone for orders, availability, quantities and custom orders. |

### On-page checklist per page

- [ ] One `<h1>` per page, matching the page's primary keyword intent (e.g. Home's H1: "Small Treats. Big Love.")
- [ ] Logical heading order (H1 → H2 → H3), no skipped levels
- [ ] Primary keyword appears naturally in the first 100 words of body copy
- [ ] Descriptive, unique meta description per page (never duplicated)
- [ ] Canonical URL set on every page
- [ ] Open Graph + Twitter Card tags for social sharing previews (especially important since Instagram/WhatsApp are primary channels)

---

## 5. Next.js Metadata Implementation

Using the Next.js App Router `Metadata` API (no third-party SEO package needed).

### 5.1 Root layout — shared defaults

```ts
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tinytreats.in"),
  title: {
    default: "Tiny Treats by Swetha | Homemade Cookies, Laddus & Treats",
    template: "%s | Tiny Treats by Swetha",
  },
  description:
    "Discover Tiny Treats by Swetha — homemade cookies, laddus, brownies, cakes and seed crackers prepared in small batches with care and thoughtfully selected ingredients.",
  openGraph: {
    type: "website",
    siteName: "Tiny Treats by Swetha",
    title: "Tiny Treats by Swetha | Homemade Cookies, Laddus & Treats",
    description:
      "Homemade cookies, laddus, brownies, cakes and seed crackers made in small batches with love.",
    url: "https://www.tinytreats.in",
    images: [
      {
        url: "/og/tiny-treats-og.jpg", // 1200x630, add once client supplies imagery
        width: 1200,
        height: 630,
        alt: "Tiny Treats by Swetha — homemade treats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Treats by Swetha",
    description: "Homemade cookies, laddus, brownies, cakes and seed crackers.",
    images: ["/og/tiny-treats-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### 5.2 Per-page metadata (example: Menu page)

```ts
// app/menu/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Tiny Treats menu featuring Almond Cookies, Ragi Cookies, Dry Fruit Laddus, Calcium Laddus, Protein Laddus, Brownies, Cakes and Seed Crackers.",
  alternates: {
    canonical: "/menu",
  },
};
```

Because `title.template` is set in the root layout, this automatically renders as:
`Menu | Tiny Treats by Swetha`

### 5.3 Dynamic metadata (if product pages are added later)

```ts
// app/menu/[slug]/page.tsx
import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/menu/${product.id}` },
    openGraph: {
      title: `${product.name} | Tiny Treats by Swetha`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}
```

---

## 6. Structured Data (Schema.org / JSON-LD)

Structured data helps Google understand the business, products, and pages, and can unlock rich results (business info panel, sitelinks, breadcrumbs).

### 6.1 Organization / LocalBusiness (Bakery) — site-wide, in root layout

```tsx
// components/seo/OrganizationSchema.tsx
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Tiny Treats by Swetha",
    url: "https://www.tinytreats.in",
    // logo: "https://www.tinytreats.in/logo/tiny-treats-logo.svg", // add once finalized
    sameAs: [
      "https://www.instagram.com/tinytreatsbyswetha",
      "https://www.facebook.com/profile.php?id=61592823341135",
      "https://x.com/tinytreatsbys",
      "https://www.linkedin.com/in/tinay-treats-by-swetha-a09202383/",
    ],
    // telephone: "", // add once client supplies a public business number
    // address: {
    //   "@type": "PostalAddress",
    //   streetAddress: "",
    //   addressLocality: "",
    //   addressRegion: "",
    //   postalCode: "",
    //   addressCountry: "IN",
    // },
    description:
      "Homemade cookies, laddus, cakes, brownies and seed crackers made in small batches with thoughtfully selected ingredients.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

> ⚠️ Do not fill in `telephone` or `address` until the client explicitly confirms a public phone number and business address — per the content rules in [Section 16](#16-seo-content-rules-do-not-invent). Leave commented out until supplied.

### 6.2 Product schema (per product, once product pages exist)

```tsx
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Almond Cookies",
  description:
    "Rich, nutty and satisfying homemade cookies made with the goodness of almonds.",
  image: "https://www.tinytreats.in/products/almond-cookies.webp",
  brand: {
    "@type": "Brand",
    name: "Tiny Treats by Swetha",
  },
  // offers: only include once real price + availability are supplied by the client
  // offers: {
  //   "@type": "Offer",
  //   priceCurrency: "INR",
  //   price: "250",
  //   availability: "https://schema.org/InStock",
  // },
};
```

> Never publish `Offer`/price schema with placeholder or estimated prices — inaccurate price schema can trigger Google Search Console manual actions.

### 6.3 BreadcrumbList (for Menu → Product pages)

```tsx
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tinytreats.in" },
    { "@type": "ListItem", position: 2, name: "Menu", item: "https://www.tinytreats.in/menu" },
    { "@type": "ListItem", position: 3, name: "Almond Cookies", item: "https://www.tinytreats.in/menu/almond-cookies" },
  ],
};
```

### 6.4 FAQPage (if an FAQ section is added, e.g. on Contact or Menu)

Good candidates from the Content Doc: "How to Order" steps, allergy/ingredient disclaimer, custom order info.

```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I place an order with Tiny Treats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add your favourite treats to the cart and send your order directly through WhatsApp. We'll confirm availability, quantities and preparation time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you take custom orders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we welcome enquiries for custom quantities for birthdays, baby showers, school events and family celebrations.",
      },
    },
  ],
};
```

---

## 7. sitemap.xml & robots.txt

Next.js App Router generates both natively — no extra package required.

### 7.1 `app/sitemap.ts`

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.tinytreats.in";
  const staticRoutes = ["", "/menu", "/about", "/gallery", "/contact"];

  return staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
```

If product pages are added, loop over `data/products.ts` and append `/menu/${product.id}` entries.

### 7.2 `app/robots.ts`

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.tinytreats.in/sitemap.xml",
  };
}
```

---

## 8. Image SEO

- **File naming:** descriptive, hyphenated — `almond-cookies.webp`, not `IMG_2093.jpg`.
- **Alt text:** describe the image contextually, not keyword-stuffed. Good: `alt="Freshly baked almond cookies on a wooden tray"`. Bad: `alt="cookies homemade cookies buy cookies online"`.
- **Format:** WebP/AVIF as already specified in the technical README; compress before upload.
- **Dimensions:** serve appropriately sized images per breakpoint via `next/image`'s automatic responsive `srcset` — never rely on CSS to shrink an oversized image.
- **Lazy loading:** default Next.js `<Image>` behavior lazy-loads offscreen images automatically; only mark the LCP hero image with `priority`.
- **No text-in-image for important copy** (e.g. taglines, prices) — search engines can't read text baked into images. Keep the tagline and CTAs as real HTML text overlaid on images, not flattened into the image file.

---

## 9. Core Web Vitals & Technical Performance

SEO and performance are directly linked (Core Web Vitals are a confirmed Google ranking factor).

| Metric | Target | How Tiny Treats' stack supports it |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | `next/image` with `priority` on hero image; minimal blocking JS on Home |
| CLS (Cumulative Layout Shift) | < 0.1 | Explicit width/height (or `fill` + sized container) on every image; reserve space for fonts (`font-display: swap`) |
| INP (Interaction to Next Paint) | < 200ms | Keep Client Components scoped to Cart/Dialogs/Filters only, per the technical README's Server-vs-Client rules |

Additional technical checks:

- [ ] Enable gzip/Brotli compression (Vercel default)
- [ ] Preload Google Fonts or self-host via `next/font` (avoids render-blocking font requests and an extra DNS hop)
- [ ] Avoid render-blocking third-party scripts (WhatsApp click is just a link — no SDK needed)
- [ ] Run Lighthouse / PageSpeed Insights on Home, Menu and a Product Quick View before launch
- [ ] Confirm HTTPS is enforced (Vercel default) and `www` vs non-`www` redirects to one canonical version

---

## 10. Local SEO

Tiny Treats is a home-based bakery brand, so local discovery matters even without a public storefront.

**Once the client confirms these, implement them:**

1. **Google Business Profile** — create/verify a listing under "Tiny Treats by Swetha" with category "Bakery" or "Home Bakery." Requires the client to confirm a public phone number and service area (a home address does not need to be publicly displayed — Google allows service-area businesses to hide the exact address).
2. **NAP consistency** (Name, Address, Phone) — once a public phone number exists, it must match exactly across the website footer, Google Business Profile, and social bios.
3. **LocalBusiness schema** — populate the commented-out `telephone`/`address` fields in [Section 6.1](#61-organization--localbusiness-bakery--site-wide-in-root-layout) once available.
4. **Location keywords** — layer the confirmed service area/city into the Home and Contact meta descriptions and body copy (e.g. "homemade cookies in [City]") once known.
5. **Local directories** — list the business on relevant local/home-baker directories and food-delivery-adjacent platforms if the client wants that reach (optional, evaluate case by case).

> Do not publish a Google Business Profile, phone number, or address without the client's explicit sign-off — this is public-facing business information.

---

## 11. Content & Blog Strategy

A lightweight content section (even 1–2 posts/month) helps target long-tail keywords the core pages can't naturally cover, and gives Google fresh content to crawl.

**Suggested content pillars**, all consistent with the brand voice and content rules in the Content Doc:

- **Behind-the-scenes / story content:** "How Tiny Treats Started," "A Day in the Tiny Treats Kitchen" — reinforces the mother → family → Tiny Treats narrative from the About page.
- **Occasion-based guides:** "Homemade Treats for Your Next Family Celebration," "Festive Gifting Ideas from Tiny Treats" — targets seasonal/gifting search intent.
- **Product spotlights:** short articles on one product at a time (e.g. "Why We Make Our Ragi Cookies This Way") — reuses the Product Story copy from the Content Doc and expands it slightly.
- **FAQ-style posts:** "How to Order Homemade Treats on WhatsApp," "What to Know Before Ordering Custom Treats" — captures conversational/voice-search queries.

**Rules:**

- Every post must follow the same "no invented claims" rule from Section 16 — no nutrition, medical, or certification claims not supplied by the client.
- Internally link every post back to the relevant Menu category or the Contact/WhatsApp CTA.
- If a blog is added, it needs its own sitemap entries and metadata following the same pattern as [Section 5](#5-nextjs-metadata-implementation).

> A blog is optional for V1 — only build it once the core five pages are live, indexed, and stable. Don't let content strategy delay launch.

---

## 12. Internal Linking

- Every product mentioned on Home ("Featured Treats") should link to its category on `/menu` (or its own product page, if created).
- The About page's CTA ("Explore Our Menu") should link to `/menu`.
- The Menu page's Order CTA should link directly to the Cart/WhatsApp flow.
- The Footer's Quick Links should exist on every page (already specified in Section 36 of the Content Doc) — this alone gives every page a path back to the five core pages, which is enough internal linking for a five-page V1 site.
- Avoid orphan pages — every page that exists must be linked from at least the Footer or main navigation.

---

## 13. Off-Page SEO & Social Signals

- **Consistent branding across channels** — the site's `sameAs` schema (Section 6.1) should list every active channel:
  - Instagram: [@tinytreatsbyswetha](https://www.instagram.com/tinytreatsbyswetha?igsh=eXIyaWo2MmZsbndj)
  - Facebook: [Tiny Treats by Swetha](https://www.facebook.com/profile.php?id=61592823341135)
  - X: [@tinytreatsbys](https://x.com/tinytreatsbys)
  - LinkedIn: [Tiny Treats by Swetha](https://www.linkedin.com/in/tinay-treats-by-swetha-a09202383/)
- **Instagram-to-website linking** — make sure the Instagram bio link points to the live site (or a specific high-intent page like `/menu`), and that Instagram posts occasionally drive to the site rather than only staying in-app.
- **Backlinks** — as the brand grows, local food bloggers, home-baker directories, or being featured by customers can build backlinks. No paid link-building needed at this stage; organic mentions from real orders/customers matter more.
- **Reviews** — once a Google Business Profile exists, genuine customer reviews are one of the strongest local SEO signals. Never fabricate testimonials — this is already a hard rule in the Content Doc (Section 40).

---

## 14. Mobile SEO

Google indexes mobile-first, so the mobile experience *is* the SEO experience.

- [ ] Tap targets (Add to Cart, quantity controls, nav) meet minimum touch size (~44×44px)
- [ ] No horizontal scroll on any breakpoint (320px–768px tested per the technical README's Responsive QA list)
- [ ] Sticky bottom cart doesn't overlap content or block the WhatsApp CTA
- [ ] Font sizes remain legible without zooming (16px minimum body text)
- [ ] Mobile page speed tested separately from desktop (mobile CPUs/networks are slower — this is what Google actually crawls)

---

## 15. Analytics & Search Console Setup

1. **Google Search Console** — verify `www.tinytreats.in`, submit the sitemap (`/sitemap.xml`), monitor:
   - Coverage/indexing errors
   - Core Web Vitals report
   - Search queries driving impressions/clicks
2. **Google Analytics 4** — add via the `NEXT_PUBLIC_GA_ID` environment variable already defined in the technical README; track:
   - WhatsApp CTA clicks (as a custom event, e.g. `whatsapp_order_click`)
   - Menu category filter usage
   - Add-to-cart events
3. **Google Business Profile Insights** (once set up per Section 10) — track how customers find the listing (search vs. maps) and what actions they take (calls, direction requests, website clicks).

> Set up event tracking for the WhatsApp button specifically — since there's no traditional checkout, "WhatsApp click" is the site's real conversion metric, and it's what should be reported on, not pageviews alone.

---

## 16. SEO Content Rules (Do Not Invent)

SEO copy must follow the exact same rules as the rest of the site's content (Content Doc, Section 40) — keyword optimization is never a reason to break them.

**Never write, in titles, meta descriptions, alt text, schema, or blog copy:**

- ❌ Invented prices, weights, or delivery charges
- ❌ Invented certifications, nutritionist approval, or medical/health claims (e.g. "clinically proven," "doctor recommended," "perfect for pregnant women")
- ❌ Invented nutritional percentages or specific health benefits not supplied by the client
- ❌ Fabricated customer testimonials or review snippets in schema (`AggregateRating`/`Review` schema must only be added once real, verifiable reviews exist)
- ❌ A specific city/service area in metadata or schema until the client confirms it

**Always prefer** the same toned-down language from the Content Doc's claim-substitution table — e.g. "thoughtfully prepared snack options" rather than "nutritionist-friendly" — even when a stronger phrase would technically rank better. Overclaiming risks manual review, ad platform rejections (if paid ads are added later), and trust with customers.

---

## 17. Launch Checklist

- [ ] All five pages have unique title tags and meta descriptions
- [ ] `metadataBase`, Open Graph, and Twitter Card set in root layout
- [ ] `sitemap.ts` and `robots.ts` implemented and reachable at `/sitemap.xml` and `/robots.txt`
- [ ] Organization/Bakery JSON-LD present site-wide (with `telephone`/`address` only if client-approved)
- [ ] Every image has descriptive alt text and a compressed WebP/AVIF source
- [ ] Canonical tags set on every page
- [ ] HTTPS enforced; `www`/non-`www` redirect resolved to one canonical domain
- [ ] Lighthouse/PageSpeed run on Home + Menu, Core Web Vitals in the green
- [ ] Google Search Console verified and sitemap submitted
- [ ] Google Analytics 4 installed with a WhatsApp-click event configured
- [ ] Social profile links (Instagram, Facebook, X, LinkedIn) added to `sameAs` schema and footer

---

## 18. Ongoing SEO Maintenance Calendar

| Cadence | Task |
|---|---|
| Weekly | Check Search Console for new indexing errors or manual actions |
| Weekly | Post to Instagram/Facebook linking back to the site (drives referral + brand-search signals) |
| Monthly | Review Search Console queries — identify new keyword opportunities customers are already searching |
| Monthly | Check Core Web Vitals report for regressions after any deploy |
| Monthly | Publish 1–2 pieces of fresh content (blog post, new gallery images, updated seasonal menu items) if the blog is active |
| Quarterly | Full technical SEO audit — broken links, duplicate titles/descriptions, orphan pages, sitemap accuracy |
| Quarterly | Re-check schema markup validity via [Google's Rich Results Test](https://search.google.com/test/rich-results) |
| As needed | Update metadata/schema immediately whenever the client supplies new confirmed facts (phone number, address, prices) that were previously placeholders |

---

Built for **Tiny Treats by Swetha** — No Junk, Just Goodness. 🍪
