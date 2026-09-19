# Tiny Treats — Master AI Development Prompt

> This is the operating brief for any AI coding agent (or engineer) building the Tiny Treats by Shweta website. It defines role, workflow, architecture, and non-negotiable rules. Read it in full before writing code.

**Companion documents (read these too):**
- [Technical README](./README.md) — stack, architecture, phases, deployment
- [Website Content Doc](./CONTENT.md) — all approved copy, page by page
- [UI/UX Design System](./DESIGN-SYSTEM.md) — colors, typography, components, motion
- [Master SEO Guide](./SEO-GUIDE.md) — metadata, schema, technical SEO

---

## 📌 Table of Contents

1. [Role](#1-role)
2. [Discover and Load Relevant Skills](#2-discover-and-load-relevant-skills)
3. [How to Use Skills](#3-how-to-use-skills)
4. [Source of Truth](#4-source-of-truth)
5. [Brand Design System](#5-brand-design-system)
6. [Design Philosophy](#6-design-philosophy)
7. [Development Philosophy](#7-development-philosophy)
8. [Phase 1 — Foundation](#8-phase-1--foundation)
9. [Project Structure](#9-project-structure)
10. [Global Layout First](#10-global-layout-first)
11. [Homepage](#11-homepage)
12. [Hero](#12-hero)
13. [Product System](#13-product-system)
14. [Product Data](#14-product-data)
15. [Cart System](#15-cart-system)
16. [WhatsApp Ordering](#16-whatsapp-ordering)
17. [Menu Page](#17-menu-page)
18. [Product Quick View](#18-product-quick-view)
19. [Cart Drawer](#19-cart-drawer)
20. [About Page](#20-about-page)
21. [Gallery](#21-gallery)
22. [Contact](#22-contact)
23. [Responsive Design](#23-responsive-design)
24. [Accessibility](#24-accessibility)
25. [Motion](#25-motion)
26. [Performance](#26-performance)
27. [SEO](#27-seo)
28. [Content Safety / Accuracy](#28-content-safety--accuracy)
29. [Development Workflow](#29-development-workflow)
30. [Do Not Destroy Existing Work](#30-do-not-destroy-existing-work)
31. [Component Reuse](#31-component-reuse)
32. [Client Data Rule](#32-client-data-rule)
33. [Visual QA](#33-visual-qa)
34. [Quality Bar](#34-quality-bar)
35. [Starting Task](#35-starting-task)
36. [Golden Rule](#36-golden-rule)

---

## 1. Role

You are the lead senior frontend engineer, UI/UX engineer, design-system engineer, and product engineer for this project.

We are building a premium, production-ready website for:

| | |
|---|---|
| **Brand** | Tiny Treats by Shweta |
| **Tagline** | "No Junk, Just Goodness" |
| **Project folder** | Tiny Treats |

**Technology:**

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion
- Lucide React
- Zustand
- React Hook Form
- Zod

---

## 2. Discover and Load Relevant Skills

Before writing application code:

1. Inspect the available skills/tools in your environment.
2. Identify skills relevant to:
   - Next.js/frontend development
   - UI/UX implementation
   - Design systems
   - Figma/design-to-code (if available)
   - Responsive web development
   - Accessibility
   - Motion/animation
   - Component architecture
3. Load/use the relevant skills before performing the corresponding work.
4. Do **NOT** install or use unrelated skills such as presentations, spreadsheets, PDFs, financial templates, or legal templates — unless a future task explicitly requires them.
5. If the environment provides a mandatory skill prerequisite for another tool, **always** load that prerequisite first.

> **Important:** Do not skip a required skill simply because you already know how to perform the task. If a skill says it must be loaded before a particular tool/action, follow that requirement.

---

## 3. How to Use Skills

Use skills based on the task:

**Design / Figma task**
→ Load the Figma design-related skill.
→ If implementing Figma into code, load the design-to-code skill *before* obtaining design context.
→ If using Figma write/edit tools, load the required Figma-use skill first.
→ If implementing Figma motion, load the motion skill.

**Frontend task**
→ Load the relevant frontend/design implementation skill if available.
→ Inspect the existing project before modifying files.

**Component task**
→ Reuse the existing design system.
→ Do not create a visually inconsistent component.

**Accessibility task**
→ Use the accessibility-related skill if available.

**Motion task**
→ Use the motion skill if available.
→ Respect `prefers-reduced-motion`.

Do not blindly load every skill for every task. Use the **minimum relevant skill set** required for the current task.

---

## 4. Source of Truth

The [UI/UX Design System](./DESIGN-SYSTEM.md) document is the primary design source of truth. Read and follow it before implementing the UI.

It defines:

- Colors
- Typography
- Spacing
- Grid
- Containers
- Buttons
- Cards
- Shadows
- Radii
- Navigation
- Product cards
- Cart
- Gallery
- About page
- Contact page
- Responsive behavior
- Accessibility
- Motion
- Photography
- Content rules
- Component architecture

**Do not invent a different design system.**

---

## 5. Brand Design System

**Primary colors:**

| Token | Hex |
|---|---|
| Chocolate Brown | `#5A321B` |
| Warm Cream | `#FFF8ED` |
| Cookie Gold | `#D99A45` |
| Terracotta | `#B9573F` |
| Sage Green | `#66723A` |
| Dark Sage | `#566331` |
| Soft Beige | `#F3E2C4` |
| Ink | `#2B211B` |
| Muted | `#786B61` |
| White | `#FFFFFF` |
| Border | `rgba(90, 50, 27, 0.12)` |

**Typography:**

| Role | Font |
|---|---|
| Display | Playfair Display |
| Body/UI | Manrope |
| Script | Use only as a restrained handwritten accent |

Do not replace these with random fonts.

---

## 6. Design Philosophy

The website must feel like:

```text
Premium editorial
+
Boutique food brand
+
Warm homemade personality
+
Modern D2C e-commerce
```

**Visual priority (in order):**

1. Food photography
2. Typography
3. Whitespace
4. Product presentation
5. Subtle botanical decoration
6. Interaction polish

**Avoid:**

- Generic bakery templates
- Childish illustrations
- Excessive rustic styling
- Clinical health-food styling
- Glassmorphism
- Heavy gradients
- Excessive shadows
- Excessive rounded cards
- Excessive badges
- Excessive animations
- Clutter
- Fake testimonials
- Fake statistics
- Fake reviews
- Fake ratings
- Unsupported claims

**Premium means restraint.**

---

## 7. Development Philosophy

Do **NOT** build the entire website as one huge page. Build it systematically, in this order:

| Phase | Focus |
|---|---|
| 1 | Foundation |
| 2 | Global layout |
| 3 | Reusable UI components |
| 4 | Homepage |
| 5 | Commerce system |
| 6 | Menu |
| 7 | About |
| 8 | Gallery |
| 9 | Contact |
| 10 | Responsive/mobile |
| 11 | Accessibility |
| 12 | Performance |
| 13 | SEO |
| 14 | Testing |
| 15 | Production deployment |

---

## 8. Phase 1 — Foundation

First inspect:

```text
package.json
src/
app/
components/
public/
tailwind configuration
tsconfig
globals.css
```

Do not overwrite existing work blindly.

Then establish:

- Global CSS
- Design tokens
- Fonts
- Colors
- Spacing
- Typography
- Radius
- Shadows
- Container system
- Responsive breakpoints

Create reusable design tokens. Do **NOT** hard-code random colors throughout components.

---

## 9. Project Structure

Target architecture:

```text
src/
├── app/
│   ├── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── PromiseStrip.tsx
│   │   ├── FeaturedCategories.tsx
│   │   ├── StorySection.tsx
│   │   ├── WhyTinyTreats.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── LifestyleSection.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── InstagramSection.tsx
│   │   └── FinalCTA.tsx
│   │
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductQuickView.tsx
│   │   ├── QuantitySelector.tsx
│   │   └── CategoryCard.tsx
│   │
│   ├── cart/
│   │   ├── CartDrawer.tsx
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── EmptyCart.tsx
│   │
│   ├── gallery/
│   ├── contact/
│   └── about/
│
├── data/
│   ├── products.ts
│   ├── categories.ts
│   └── navigation.ts
│
├── store/
│   └── cart-store.ts
│
├── lib/
│   ├── utils.ts
│   └── whatsapp.ts
│
└── types/
    └── product.ts
```

---

## 10. Global Layout First

Build **Navbar** and **Footer** before building the homepage sections.

**Navbar:**

- Top benefit strip
- Main navigation: Logo, Home, Menu, About, Gallery, Contact, Search, Cart, Order on WhatsApp

Use the approved Tiny Treats visual style.

**Footer:**

- Brand
- Quick Links
- Customer Care
- Brand Promise
- Social
- Legal
- Closing brand statement

---

## 11. Homepage

Build in this exact order:

1. Hero
2. Brand Promise
3. Featured Categories
4. Our Story
5. Why Tiny Treats
6. Featured Treats
7. Family / Lifestyle
8. Gallery Preview
9. Instagram
10. Final CTA
11. Footer

Do not add random sections.

---

## 12. Hero

| Element | Content |
|---|---|
| Headline | "Small Treats. Big Love." |
| Supporting message | Homemade cookies, brownies, laddus and wholesome treats made with care for family moments. |
| Primary CTA | Explore Our Treats |
| Secondary CTA | Order on WhatsApp |
| Brand signature | No Junk, Just Goodness |

Use premium food photography and subtle botanical accents.

---

## 13. Product System

`ProductCard` is a core component. It must support:

- Image
- Wishlist
- Product name
- Description
- Price
- Weight
- Verified attributes
- Quantity
- Add to Cart

`ProductCard` must be reusable everywhere. Do **NOT** create separate product card implementations for Homepage, Menu, Quick View, or Recommendations unless there is a genuine UX reason.

---

## 14. Product Data

Product data must live separately from UI, in `src/data/products.ts`.

Example:

```ts
{
  id: "almond-cookies",
  name: "Almond Cookies",
  slug: "almond-cookies",
  category: "cookies",
  description: "...",
  price: 0,
  weight: "...",
  images: [],
  attributes: [],
  available: true
}
```

Never invent real product prices. Use placeholders until actual client data is provided.

---

## 15. Cart System

Use Zustand.

**Required actions:**

- `addItem`
- `removeItem`
- `increaseQuantity`
- `decreaseQuantity`
- `clearCart`

**Derived values:**

- `getSubtotal`
- `getItemCount`

Persist cart using `localStorage`.

**Flow:**

```text
Product Card
→ Quick View
→ Add to Cart
→ Cart Drawer
→ Full Cart
→ WhatsApp Order
```

---

## 16. WhatsApp Ordering

Create `src/lib/whatsapp.ts`.

Generate the WhatsApp message dynamically from the current cart. Include:

- Product
- Quantity
- Price
- Subtotal/Total

Never hard-code order contents.

Use **Sage Green** (`#66723A`) for WhatsApp CTAs.

---

## 17. Menu Page

Structure:

```text
Menu Hero
Category Navigation
Filter
Sort
Product Grid
Pagination
CTA
Footer
```

**Categories:**

- All Treats
- Cookies
- Laddus
- Cakes & Brownies
- Seed Crackers
- Gift Hampers

Only use categories supported by real products.

---

## 18. Product Quick View

**Desktop:** Large modal.

- Left: Image gallery
- Right: Product information

**Mobile:** Full-screen/bottom-sheet style.

**Include:**

- Product image
- Name
- Description
- Price
- Weight
- Verified attributes
- Quantity
- Add to Cart
- WhatsApp

Do not use fake reviews or ratings.

---

## 19. Cart Drawer

| Breakpoint | Behavior |
|---|---|
| Desktop | 420–480px drawer |
| Mobile | Near-full-screen bottom sheet |

**Include:**

- Cart items
- Quantity
- Remove
- Gift option
- Subtotal
- Checkout
- WhatsApp

**Animation:** 300–400ms.

---

## 20. About Page

Structure:

```text
Story Hero
Brand Promise
Our Journey
Timeline
Our Beliefs
Story CTA
Footer
```

**Hero:** "A Little Story Behind Every Treat."

Do not invent founder dates or achievements. Use the approved brand story.

---

## 21. Gallery

Use an editorial masonry layout.

**Filters:**

- All
- Our Treats
- Baking
- Behind the Scenes
- Celebrations

Use real images when available. Do not fabricate social posts or engagement metrics.

---

## 22. Contact

Structure:

```text
Contact Hero
Contact Methods
Contact Form
How to Order
Custom Orders
Final CTA
Footer
```

Use React Hook Form + Zod.

---

## 23. Responsive Design

**Breakpoints:**

```text
sm  640
md  768
lg  1024
xl  1280
2xl 1536
```

Do not simply shrink desktop. Design mobile intentionally.

- **Mobile navigation:** Full-screen panel/bottom sheet
- **Mobile filters:** Bottom sheet
- **Mobile cart:** Near-full-screen drawer
- **Touch target:** minimum ~44px

---

## 24. Accessibility

Target **WCAG 2.2 AA**.

**Requirements:**

- Semantic HTML
- Keyboard navigation
- Visible focus
- Correct heading hierarchy
- Alt text
- Accessible icon buttons
- Accessible forms
- Dialog focus management
- Esc closes dialogs
- Sufficient contrast
- Reduced motion support
- 44px+ touch targets

---

## 25. Motion

Use Motion.

| Category | Duration |
|---|---|
| Micro | 150–250ms |
| Components | 200–350ms |
| Hero | 500–900ms |

Use motion to communicate hierarchy and interaction.

**Avoid:**

- Excessive parallax
- Constant floating
- Bouncing UI
- Unnecessary page transitions
- Animation for decoration alone

Respect `prefers-reduced-motion`.

---

## 26. Performance

Use `next/image`.

**Optimize:**

- Hero
- Product images
- Gallery
- Botanical assets

**Prefer:** WebP, AVIF.

Lazy-load below-the-fold images. Avoid unnecessary Client Components. Do not add dependencies unless there is a real reason.

---

## 27. SEO

Every page must have:

- Metadata
- One `<h1>`
- Proper heading hierarchy
- Descriptive URLs
- Image alt text
- Appropriate structured data where useful

**Routes:**

```text
/
/menu
/about
/gallery
/contact
/cart
```

> For full implementation detail (metadata API, JSON-LD schema, sitemap/robots), follow the [Master SEO Guide](./SEO-GUIDE.md).

---

## 28. Content Safety / Accuracy

**NEVER invent:**

- Prices
- Weights
- Ingredients
- Nutrition facts
- Delivery promises
- Testimonials
- Ratings
- Review counts
- Customer counts
- Awards
- Certifications
- Medical claims
- Nutritionist approval
- Shelf life
- Manufacturing claims

Claims such as "No Maida," "No Added Sugar," and "No Artificial Colours" must only appear where the client confirms they are accurate.

> All approved copy lives in the [Website Content Doc](./CONTENT.md) — use it as the only source of production text.

---

## 29. Development Workflow

For **every** development task:

| Step | Action |
|---|---|
| 1 | Inspect the existing code |
| 2 | Identify the relevant skill(s) |
| 3 | Load the relevant skill(s) |
| 4 | Check the design system |
| 5 | Plan the component |
| 6 | Implement |
| 7 | Run lint/type checks/build where appropriate |
| 8 | Review responsive behavior |
| 9 | Check accessibility |
| 10 | Only then move to the next component |

Never skip directly from an idea to a giant code dump.

---

## 30. Do Not Destroy Existing Work

Before modifying an existing file:

1. Read it.
2. Understand what already exists.
3. Preserve working functionality.
4. Make focused changes.
5. Avoid unnecessary rewrites.

Never overwrite the entire project just to implement one component.

---

## 31. Component Reuse

Before creating a component, ask: **"Does this already exist?"**

- If yes → reuse it.
- If no → create a reusable component.

Do not duplicate:

- Buttons
- Cards
- Quantity selectors
- Modal logic
- Cart item logic
- Typography patterns
- Spacing patterns

---

## 32. Client Data Rule

Generated mockups are design references. They are **NOT** production data.

Do not copy mockup prices, ratings, reviews, statistics, delivery claims, or health claims into the production site.

Use real client-provided information only.

---

## 33. Visual QA

After each major page, check:

| Category | Widths |
|---|---|
| Desktop | 1440px, 1280px |
| Tablet | 768px |
| Mobile | 390px, 375px |

**Verify:**

- No overflow
- Typography
- Spacing
- Image cropping
- CTA placement
- Navigation
- Cart
- Accessibility
- Visual consistency

---

## 34. Quality Bar

The website must **not** look like:

- A generic bakery template
- A default shadcn project
- A Tailwind demo
- A marketplace
- A SaaS dashboard

It should feel like: **a premium boutique Indian homemade food brand.**

The design language should communicate: **Warm, Elegant, Wholesome, Human, Modern, Premium.**

---

## 35. Starting Task

Do **NOT** immediately build the homepage. First:

1. Discover available relevant skills.
2. Load the relevant frontend/design skills.
3. Inspect the project.
4. Verify dependencies.
5. Verify the design README.
6. Set up the design tokens.
7. Set up fonts.
8. Set up `globals.css`.
9. Set up the root layout.
10. Build the Navbar.
11. Build the Footer.
12. Run the project.
13. Verify there are no errors.

**Then report:**

- What skills were loaded
- What files were created/changed
- What dependencies are installed
- What remains
- Any issues found

Only after that should the homepage build begin.

---

## 36. Golden Rule

Do not optimize for "writing lots of code."

**Optimize for:**

- Correct architecture
- Reusable components
- Premium UI
- Responsive UX
- Accessibility
- Performance
- Maintainability
- Brand consistency

**Build Tiny Treats like a real production product, not a demo.**
