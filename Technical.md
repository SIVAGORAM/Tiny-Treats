# 🍪 Tiny Treats by Shweta

> **No Junk, Just Goodness.**

A premium, modern, responsive frontend website for **Tiny Treats by Shweta**, a homemade wholesome treats brand offering cookies, brownies, nutritious laddus, seed crackers and other homemade snacks.

The website is designed as a **premium digital storefront and brand experience**, allowing customers to:

- Discover the Tiny Treats brand
- Explore the complete product menu
- Filter products by category
- View product details
- Add products to a shopping cart
- Update quantities
- Persist the cart locally
- Review the complete order
- Place the order through WhatsApp
- Learn about the brand and Shweta
- Explore the gallery
- Contact the business
- Access Instagram and other social channels

The application is intentionally kept **simple, lightweight and maintainable**.

---

## 📌 Table of Contents

1. [Project Overview](#-project-overview)
2. [Live Links](#-live-links)
3. [Project Goals](#-project-goals)
4. [Core User Journey](#-core-user-journey)
5. [Website Sitemap](#-website-sitemap)
6. [Technology Stack](#-technology-stack)
7. [Development Skills](#-development-skills)
8. [Architecture](#-architecture)
9. [Frontend Architecture](#-frontend-architecture)
10. [Backend Architecture](#-backend-architecture)
11. [Product Data Architecture](#-product-data-architecture)
12. [Cart Architecture](#-cart-architecture)
13. [WhatsApp Ordering Architecture](#-whatsapp-ordering-architecture)
14. [Design System](#-design-system)
15. [Typography](#-typography)
16. [Responsive Design](#-responsive-design)
17. [Animation Strategy](#-animation-strategy)
18. [Accessibility](#-accessibility)
19. [SEO](#-seo)
20. [Performance](#-performance)
21. [Image Strategy](#-image-strategy)
22. [Project Structure](#-project-structure)
23. [Component Architecture](#-component-architecture)
24. [State Management](#-state-management)
25. [Vibe Coding Development Workflow](#-vibe-coding-development-workflow)
26. [AI Coding Rules](#-ai-coding-rules)
27. [Development Phases](#-development-phases)
28. [Environment Variables](#-environment-variables)
29. [Installation](#-installation)
30. [Local Development](#-local-development)
31. [Build and Production](#-build-and-production)
32. [Testing and QA](#-testing-and-qa)
33. [Git Workflow](#-git-workflow)
34. [Deployment](#-deployment)
35. [Security](#-security)
36. [Content Management](#-content-management)
37. [Future Backend Expansion](#-future-backend-expansion)
38. [Coding Standards](#-coding-standards)
39. [Definition of Done](#-definition-of-done)
40. [Final Architecture](#-final-architecture)

---

## 🍪 Project Overview

### Brand

**Tiny Treats by Shweta**

#### Primary Tagline

> No Junk, Just Goodness.

#### Brand Positioning

Tiny Treats is positioned around homemade, wholesome and thoughtfully prepared treats for families.

The website should communicate:

- Homemade warmth
- Quality
- Trust
- Wholesome choices
- Premium presentation
- Family-oriented values
- Personal touch

The website must feel like a **premium boutique food brand**, not a generic ecommerce template.

---

## 🔗 Live Links

| Channel   | Link |
|-----------|------|
| Website   | [www.tinytreats.in](https://www.tinytreats.in) |
| Instagram | [@tinytreatsbyswetha](https://www.instagram.com/tinytreatsbyswetha?igsh=eXIyaWo2MmZsbndj) |
| Facebook  | [Tiny Treats by Swetha](https://www.facebook.com/profile.php?id=61592823341135) |
| LinkedIn  | [Tiny Treats by Swetha](https://www.linkedin.com/in/tinay-treats-by-swetha-a09202383/) |
| X (Twitter) | [@tinytreatsbys](https://x.com/tinytreatsbys) |

These are the brand's live/official channels and supersede any placeholder URLs referenced elsewhere in this document (e.g. in the Domain and Environment Variables sections).

---

## 🎯 Project Goals

The website must achieve the following goals:

### Brand Goals

- Establish a premium online presence
- Communicate the Tiny Treats story
- Build trust
- Showcase product quality
- Present the brand professionally

### Business Goals

- Display all available products
- Generate customer enquiries
- Make ordering easy
- Drive WhatsApp orders
- Drive Instagram engagement

### Technical Goals

- Fast
- Responsive
- SEO-friendly
- Accessible
- Maintainable
- Lightweight
- Easy to update
- Easy to deploy
- No unnecessary backend infrastructure

---

## 👤 Core User Journey

The primary customer journey is:

```text
Landing Page
     ↓
Explore Brand
     ↓
Open Menu
     ↓
Browse Products
     ↓
Filter Category
     ↓
View Product
     ↓
Add to Cart
     ↓
Increase / Decrease Quantity
     ↓
Open Cart
     ↓
Review Order
     ↓
Order on WhatsApp
     ↓
WhatsApp Opens
     ↓
Customer Sends Order
     ↓
Shweta Receives Order
```

Secondary journeys:

```text
Home
 ↓
About Us
 ↓
Learn Brand Story
```

```text
Home
 ↓
Gallery
 ↓
Explore Products / Baking
```

```text
Home
 ↓
Contact
 ↓
WhatsApp / Phone / Instagram
```

---

## 🗺️ Website Sitemap

The website contains six primary destinations.

```text
/
├── Home
│
├── /menu
│   └── Product Catalogue
│
├── /about
│   └── Brand Story
│
├── /gallery
│   └── Brand & Product Gallery
│
├── /contact
│   └── Contact Information
│
└── Cart
    └── Client-side Cart
```

### Primary Navigation

- Home
- Menu
- About Us
- Gallery
- Contact
- Cart

---

## 🛠️ Technology Stack

### Core Framework

**Next.js**

Next.js is the primary application framework.

Responsibilities:

- Frontend rendering
- Routing
- Server Components
- Client Components
- Metadata
- SEO
- Image optimization
- API/Route Handlers if backend functionality is required
- Server Actions if required
- Production build
- Deployment

We will use the App Router.

### Language

**TypeScript**

Used throughout the entire application.

Responsibilities:

- Product types
- Cart types
- Component props
- Utility functions
- API types
- Configuration types

Strict TypeScript should be enabled.

### 🎨 Styling

**Tailwind CSS**

Tailwind CSS is the primary styling system.

Used for:

- Layout
- Spacing
- Typography
- Responsive design
- Colors
- Borders
- Shadows
- Grid
- Flexbox
- States
- Responsive breakpoints

We should avoid large amounts of custom CSS unless there is a clear reason.

### 🧩 UI Components

**shadcn/ui**

shadcn/ui will be used selectively.

Primary use cases:

- Sheet
- Dialog
- Button
- Separator

Examples:

- Sheet → Cart Drawer
- Dialog → Product Quick View
- Button → Primary / Secondary Actions

shadcn/ui must not dictate the visual identity of the website. The Tiny Treats design system remains custom.

### 🎯 Icons

**Lucide React**

Used for interface icons.

Examples:

- Shopping Cart
- Menu
- X
- Plus
- Minus
- ArrowRight
- ChevronDown
- Phone
- Instagram
- Heart
- Search
- MapPin

Avoid mixing multiple icon libraries unnecessarily.

### ✨ Animation

**Motion**

Motion is the primary animation library.

Used for:

- Hero animations
- Product interactions
- Product filtering
- Cart interactions
- Modal transitions
- Image transitions
- Scroll reveals
- Micro-interactions
- Navigation transitions

Animations must be subtle and intentional.

### 🎬 GSAP

GSAP is optional.

It should **NOT** be introduced initially.

Use GSAP only if a future design genuinely requires:

- Complex timelines
- Scroll-driven storytelling
- Advanced sequencing
- Cinematic animation
- Advanced interaction choreography

Default: **Motion**
Advanced: **GSAP**

### 🛒 State Management

**Zustand**

Zustand manages the client-side shopping cart.

Responsibilities:

- Add product
- Remove product
- Increase quantity
- Decrease quantity
- Clear cart
- Calculate subtotal
- Calculate item count

### 💾 Client Storage

**localStorage**

The cart will be persisted using localStorage.

```text
Customer adds product
        ↓
Zustand Store
        ↓
localStorage
        ↓
Page refresh
        ↓
Cart restored
```

No database is required for the cart.

---

## 🍪 Product Data Architecture

Products are maintained using structured TypeScript data.

```ts
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
  ingredients?: string[];
  variants?: ProductVariant[];
  available?: boolean;
}
```

Example product:

```ts
{
  id: "almond-cookies",
  name: "Almond Cookies",
  category: "Cookies",
  description: "Homemade almond cookies made with wholesome ingredients.",
  price: 250,
  image: "/products/almond-cookies.webp",
  tags: ["Homemade", "Wholesome"],
  available: true
}
```

### 🧁 Product Variants

If products have different sizes or quantities, variants will be supported.

```ts
variants: [
  {
    id: "100g",
    name: "100g",
    price: 150
  },
  {
    id: "250g",
    name: "250g",
    price: 300
  },
  {
    id: "500g",
    name: "500g",
    price: 550
  }
]
```

The UI should display the available variants before adding the product to the cart.

---

## 📱 WhatsApp Ordering Architecture

WhatsApp is the primary ordering mechanism.

There is no traditional checkout system in V1.

Customer flow:

```text
Menu
 ↓
Add to Cart
 ↓
Cart
 ↓
Order on WhatsApp
 ↓
WhatsApp
```

### 💬 WhatsApp Message Generation

The application dynamically generates a message.

Example:

```text
Hello Tiny Treats! 👋

I'd like to place an order:

🍪 Almond Cookies × 2 — ₹500
🥜 Dry Fruit Laddu × 1 — ₹300
🌱 Seed Crackers × 2 — ₹400

Total: ₹1,200

Please let me know the availability
and next steps.

Thank you! ❤️
```

The WhatsApp utility should be isolated:

```text
lib/
└── whatsapp.ts
```

This keeps ordering logic independent from UI components.

---

## 🎨 Design System

The website should use a consistent Tiny Treats design system.

### Brand Colors

| Color | Hex | Role |
|---|---|---|
| Chocolate Brown | `#5A321B` | Primary brand color |
| Warm Cream | `#FFF8ED` | Primary background |
| Cookie Gold | `#D99A45` | Accent color |
| Terracotta | `#B9573F` | Secondary accent |
| Sage Green | `#66723A` | Natural/wholesome accent |
| Soft Beige | `#F3E2C4` | Supporting background |

### 🎨 Design Principles

The visual direction is:

```text
Premium
+
Warm
+
Natural
+
Modern
+
Elegant
+
Human
```

Avoid:

- Generic SaaS UI
- Childish bakery UI
- Overly colorful UI
- Excessive gradients
- Excessive shadows
- Excessive animation
- Crowded layouts
- Generic ecommerce templates

---

## 🔤 Typography

Primary heading font:

- **Playfair Display**

Alternative:

- DM Serif Display
- Cormorant Garamond

Body font:

- **Manrope**

Alternative:

- Inter
- DM Sans

Script fonts should be used sparingly.

Primary use: **By Shweta**

Typography must create a strong hierarchy:

```text
Display
↓
H1
↓
H2
↓
H3
↓
Body
↓
Caption
```

---

## 🖼️ Image Strategy

Images are one of the most important parts of the brand experience.

Use high-quality:

- Product photography
- Baking photography
- Lifestyle photography
- Family-oriented imagery
- Behind-the-scenes images

Preferred formats:

- WebP
- AVIF

Use Next.js Image:

```tsx
<Image
  src="/products/almond-cookies.webp"
  alt="Almond Cookies"
  fill
/>
```

Avoid unnecessary large images.

---

## 📱 Responsive Design

The website must be designed mobile-first.

Target:

- Mobile
- Tablet
- Laptop
- Desktop
- Large Desktop

Primary responsive considerations:

- Mobile navigation
- Mobile product grid
- Sticky cart
- Full-screen mobile cart
- Touch-friendly buttons
- Responsive typography
- Responsive images
- Gallery layout
- Hero composition

The mobile version must not simply be a compressed desktop layout.

### 🛒 Cart UX

**Desktop**

Use a floating cart trigger or header cart.

```text
┌──────────────────┐
│ 🛒 Cart     3    │
│ ₹850             │
└──────────────────┘
```

Clicking opens a cart drawer.

**Mobile**

Use a sticky bottom cart.

```text
┌────────────────────────────────────┐
│ 🛒 3 items     ₹850     View Cart │
└────────────────────────────────────┘
```

This should remain easily accessible while browsing products.

### 🛍️ Product Card

Product cards should contain:

- Product Image
- Product Name
- Short Description
- Price
- Tags
- Add to Cart
- Quantity Controls

Example:

```text
┌─────────────────────────┐
│                         │
│      PRODUCT IMAGE      │
│                         │
└─────────────────────────┘

Almond Cookies

Homemade • Wholesome

₹250

[ Add to Cart ]
```

After adding:

```text
−     2     +
```

### 🔎 Product Quick View

Product Quick View may use a shadcn Dialog.

Information:

- Product Image
- Product Name
- Description
- Price
- Variants
- Tags
- Ingredients
- Quantity
- Add to Cart

Avoid unnecessary product complexity.

---

## 🏠 Home Page

Recommended sections:

```text
Navbar
↓
Hero
↓
Brand Promise
↓
Featured Treats
↓
Why Tiny Treats
↓
Our Story Preview
↓
For Little Ones & Families
↓
Testimonials
↓
Gallery Preview
↓
Instagram
↓
Order CTA
↓
Footer
```

## 🍪 Menu Page

Structure:

```text
Menu Hero
↓
Category Filter
↓
Product Grid
↓
Product Quick View
↓
Cart
```

Categories may include:

- All
- Cookies
- Brownies
- Laddus
- Seed Crackers
- Savoury

Actual categories must be based on the client's final product list.

## ❤️ About Us

The About page communicates:

- Shweta's story
- Why Tiny Treats started
- Homemade philosophy
- Family inspiration
- Brand values

The page should feel personal rather than corporate.

## 📸 Gallery

The Gallery should use an editorial/masonry-style layout.

Possible categories:

- All
- Products
- Baking
- Behind the Scenes
- Family

Gallery images should have:

- Proper alt text
- Optimized dimensions
- Lazy loading where appropriate
- Lightbox/quick view only if useful

## 📞 Contact

Contact page should contain:

- WhatsApp
- Phone
- Instagram ([@tinytreatsbyswetha](https://www.instagram.com/tinytreatsbyswetha?igsh=eXIyaWo2MmZsbndj))
- Facebook ([Tiny Treats by Swetha](https://www.facebook.com/profile.php?id=61592823341135))
- X / Twitter ([@tinytreatsbys](https://x.com/tinytreatsbys))
- Business Information
- Optional Contact Form

Primary CTA: **Chat on WhatsApp**

A contact form is optional. If required, it can be implemented using a Next.js Route Handler and an email provider.

---

## 🧱 Backend Architecture

### V1

The website does not require a traditional backend.

The application is primarily:

```text
Next.js
+
Static Product Data
+
Zustand
+
localStorage
+
WhatsApp
```

### 🔧 If Backend Functionality Is Required

If future requirements introduce backend functionality, we will continue using Next.js.

We will **NOT** introduce:

- Express
- FastAPI
- Separate Node API
- Separate backend application

Instead:

```text
Next.js
├── Frontend
├── Route Handlers
├── Server Actions
└── Server-side utilities
```

Possible future backend functionality:

- `/api/contact`
- `/api/newsletter`
- `/api/order`
- `/api/products`

or Server Actions where appropriate.

### 🗄️ Database Policy

**V1**

No database.

- Products: `data/products.ts`
- Cart: Zustand + localStorage
- Orders: WhatsApp

### 🔮 Future Database

If business requirements change and the client needs:

- Order history
- Inventory
- Customer accounts
- Admin panel
- Product management
- Online payment
- Order tracking

then a database can be introduced.

Preferred future architecture:

```text
Next.js
      ↓
Database
      ↓
Admin Dashboard
      ↓
Orders
```

The V1 architecture should remain clean enough to evolve later.

---

## 📁 Project Structure

```text
tiny-treats/
│
├── app/
│   ├── page.tsx
│   │
│   ├── menu/
│   │   └── page.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── gallery/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   │
│   ├── layout.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── BrandPromise.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── WhyTinyTreats.tsx
│   │   ├── StoryPreview.tsx
│   │   ├── FamilySection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── InstagramSection.tsx
│   │   └── FinalCTA.tsx
│   │
│   ├── menu/
│   │   ├── MenuHeader.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductQuickView.tsx
│   │
│   ├── cart/
│   │   ├── CartButton.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── WhatsAppOrderButton.tsx
│   │
│   ├── contact/
│   │   ├── ContactCards.tsx
│   │   ├── ContactInfo.tsx
│   │   └── ContactForm.tsx
│   │
│   └── ui/
│
├── data/
│   ├── products.ts
│   ├── categories.ts
│   ├── testimonials.ts
│   └── gallery.ts
│
├── lib/
│   ├── whatsapp.ts
│   └── utils.ts
│
├── store/
│   └── cart-store.ts
│
├── types/
│   ├── product.ts
│   └── cart.ts
│
├── public/
│   ├── logo/
│   │   ├── tiny-treats-logo.svg
│   │   └── tiny-treats-icon.svg
│   │
│   ├── products/
│   │
│   ├── gallery/
│   │
│   ├── hero/
│   │
│   └── brand/
│
├── components.json
├── next.config.ts
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

> `app/api/contact` is only required if the client chooses to use a contact form or another server-side feature. It does not mean the project requires a backend by default.

---

## 🧩 Component Architecture

Components should follow a clear responsibility model.

**Page** — Responsible for composition.

```tsx
<HomePage>
  <Hero />
  <BrandPromise />
  <FeaturedProducts />
  <StoryPreview />
</HomePage>
```

**Section** — Responsible for one major visual section.

**Component** — Responsible for one reusable UI element.

**Utility** — Responsible for pure functionality.

```text
components/ → UI
lib/        → Logic
data/       → Content
store/      → State
types/      → Type Definitions
```

### 🧠 Server vs Client Components

Default: **Server Component**

Use Client Components only when required.

Client Components will primarily be used for:

- Cart
- Product interactions
- Category filtering
- Dialogs
- Mobile menu
- Interactive animations

Avoid marking entire pages as `"use client";` unless genuinely necessary.

---

## 🛒 Cart Architecture

```text
Product Data
     ↓
ProductCard
     ↓
addItem()
     ↓
Zustand Store
     ↓
localStorage
     ↓
CartButton
     ↓
CartDrawer
     ↓
CartSummary
     ↓
WhatsAppOrder
```

Cart store responsibilities:

- items
- addItem
- removeItem
- updateQuantity
- clearCart
- getItemCount
- getSubtotal

---

## 🎨 Development Skills

The project will use a curated collection of development/design skills.

### 🎯 Design Skills

- **frontend-design** — Overall frontend design, layout, composition, responsive UI, visual hierarchy, component design, avoiding generic interfaces
- **ui-ux-pro-max** — UX planning, design systems, typography, color selection, responsive UX, accessibility, interaction design
- **design-taste-frontend** — Premium visual direction, composition, typography, spacing, visual refinement, avoiding generic AI-generated design

### 🧑‍🎨 Design Engineering

- **emil-design-eng** — Design-engineering decisions, UI refinement, interaction quality, visual polish, production-quality implementation

### ✨ Animation Skills

- **animate** — Used whenever animations are implemented
- **find-animation-opportunities** — Used to determine where motion genuinely improves UX
- **animation-vocabulary** — Used for selecting appropriate motion patterns
- **review-animations** — Used to audit animations after implementation
- **improve-animations** — Used to refine existing animations

### ⚡ React / Next.js Engineering

- **vercel-react-best-practices** — React architecture, Next.js architecture, rendering strategy, Server/Client components, performance, bundle optimization, image optimization, avoiding unnecessary JavaScript

### 📱 Mobile

- **mobile-native** — Mobile interaction, touch targets, mobile navigation, safe-area considerations, mobile UX

### ♿ Accessibility

- **better-accessibility** — Keyboard navigation, focus management, ARIA, contrast, semantic HTML, accessible controls

### 🎨 UI Quality Skills

- **better-interface** — Overall interface refinement
- **better-layout** — Spacing, alignment, responsive layout, composition
- **better-typography** — Font hierarchy, typography pairing, readability, visual rhythm
- **beautiful-shadows** — Product cards, floating elements, cart, UI elevation

### 🔍 Review Skills

- **design-review** — Final visual review (visual hierarchy, typography, spacing, color, consistency, responsiveness, interaction, accessibility, brand consistency)
- **core-web-vitals** — Used during final performance review

### 🧩 Optional Component Skills

- **shadcn-ui-mcp-server** — Use when generating or working with shadcn/ui components
- **21st.dev Magic MCP** — Use selectively for component exploration, UI prototyping, component ideas, rapid iteration. Generated components must be adapted to the Tiny Treats design system.

### 🎬 Optional GSAP

Only introduce GSAP for advanced animation requirements. Do not add GSAP merely because it is available.

### 🚫 Skills Not Required

The following are intentionally excluded:

- Convex
- React Native
- React Native-specific skills
- Database skills
- Authentication skills
- Enterprise backend skills

Reason: The V1 website does not require them.

---

## 🧑‍💻 Vibe Coding Development Workflow

This project will be developed using a Vibe Coding workflow, but with engineering discipline.

Vibe Coding does **NOT** mean:

```text
Generate everything
↓
Copy
↓
Deploy
```

Instead:

```text
Understand
↓
Plan
↓
Design
↓
Generate
↓
Inspect
↓
Test
↓
Refine
↓
Review
↓
Ship
```

### 🤖 AI-Assisted Development Workflow

Every major feature follows:

```text
1. Requirement
      ↓
2. UX Plan
      ↓
3. Visual Design
      ↓
4. Component Plan
      ↓
5. Implementation
      ↓
6. Browser Test
      ↓
7. Visual Review
      ↓
8. Accessibility Review
      ↓
9. Performance Review
      ↓
10. Refactor
```

---

## 🧠 AI Coding Rules

When using AI to generate code:

1. Never blindly accept generated code.
2. Understand the component before keeping it.
3. Do not duplicate components unnecessarily.
4. Do not install dependencies without a reason.
5. Do not introduce a backend unless there is an actual requirement.
6. Do not turn every component into a Client Component.
7. Do not add animations everywhere.
8. Do not use placeholder content in production.
9. Do not invent product claims.
10. Do not expose sensitive information in client-side code.

### 🎨 AI Design Rules

AI-generated UI must follow:

```text
Tiny Treats Brand
      ↓
Design Tokens
      ↓
Typography
      ↓
Spacing
      ↓
Component System
      ↓
Page Composition
```

Never allow individual AI prompts to randomly introduce:

- New colors
- New fonts
- Different border radii
- Different button styles
- Random shadows
- Random animation styles

---

## 🚦 Development Phases

### Phase 0 — Project Planning

Deliverables:

- Project Requirements
- Sitemap
- User Journey
- Technology Stack
- Design System
- Component Architecture

### Phase 1 — Project Setup

Install:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion
- Lucide React
- Zustand

Configure:

- ESLint
- TypeScript
- Tailwind
- Fonts
- Path aliases
- Git

### Phase 2 — Design System

Implement:

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Buttons
- Cards
- Containers
- Section headings

### Phase 3 — Global Layout

Build:

- Navbar
- Mobile Navigation
- Footer
- Global Container
- Global Buttons

### Phase 4 — Homepage

Implement:

- Hero
- Brand Promise
- Featured Products
- Why Tiny Treats
- Story
- Family Section
- Testimonials
- Gallery Preview
- Instagram
- Final CTA

### Phase 5 — Menu

Implement:

- Menu Header
- Category Filters
- Product Grid
- Product Card
- Product Quick View
- Add to Cart
- Quantity Controls

### Phase 6 — Cart

Implement:

- Zustand Store
- localStorage
- Cart Button
- Cart Drawer
- Cart Item
- Quantity Controls
- Subtotal
- Clear Cart

### Phase 7 — WhatsApp Ordering

Implement:

- WhatsApp utility
- Message generation
- Order summary
- WhatsApp redirect
- Empty-cart protection

### Phase 8 — About Us

Implement:

- Brand story
- Shweta story
- Brand philosophy
- Values
- CTA

### Phase 9 — Gallery

Implement:

- Gallery grid
- Responsive layout
- Image optimization
- Optional lightbox

### Phase 10 — Contact

Implement:

- WhatsApp
- Phone
- Instagram
- Business details
- Optional contact form

### Phase 11 — Motion

Use:

- find-animation-opportunities
- animate
- animation-vocabulary

Then:

- review-animations
- improve-animations

### Phase 12 — Mobile Optimization

Review:

- Mobile navigation
- Product grid
- Cart
- Buttons
- Typography
- Images
- Gallery
- Touch interactions

### Phase 13 — Accessibility

Review:

- Keyboard
- Focus
- ARIA
- Contrast
- Semantic HTML
- Forms
- Dialogs
- Cart
- Mobile navigation

### Phase 14 — SEO

Implement:

- Metadata
- OpenGraph
- Canonical URLs
- robots.txt
- sitemap.xml
- Structured data
- Alt text
- Semantic HTML

### Phase 15 — Performance

Review:

- Core Web Vitals
- Image sizes
- JavaScript
- Client Components
- Fonts
- Lazy loading
- Bundle size
- Third-party scripts

### Phase 16 — Final Design Review

Use:

- design-review
- review-animations
- core-web-vitals

Perform final QA.

---

## 🔐 Environment Variables

For V1, the website may require very few environment variables.

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/tinytreatsbyswetha
NEXT_PUBLIC_SITE_URL=https://www.tinytreats.in
```

If analytics is enabled:

```env
NEXT_PUBLIC_GA_ID=
```

If a contact email service is introduced:

```env
BREVO_API_KEY=
CONTACT_EMAIL=
```

Server-only secrets must **NEVER** use `NEXT_PUBLIC_` unless they are intentionally public.

---

## 📦 Installation

Create the project:

```bash
npx create-next-app@latest tiny-treats
```

Recommended selections:

| Option | Selection |
|---|---|
| TypeScript | Yes |
| ESLint | Yes |
| Tailwind CSS | Yes |
| `src/` directory | Yes |
| App Router | Yes |
| Import alias | Yes |

Install required dependencies:

```bash
npm install zustand motion lucide-react
```

Initialize shadcn/ui:

```bash
npx shadcn@latest init
```

Add components as needed:

```bash
npx shadcn@latest add button
npx shadcn@latest add sheet
npx shadcn@latest add dialog
npx shadcn@latest add separator
```

---

## ▶️ Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Build and Production

Build:

```bash
npm run build
```

Start production:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

---

## 🧪 Testing and QA

Before deployment, test:

**Functional**

- Navigation
- Menu
- Category filter
- Product quick view
- Add to cart
- Remove from cart
- Quantity changes
- Subtotal
- Cart persistence
- Clear cart
- WhatsApp ordering
- Empty cart

### 📱 Responsive QA

Test at minimum:

- 320px
- 375px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

### 🌐 Browser QA

Test:

- Chrome
- Edge
- Safari
- Firefox
- Mobile Safari
- Mobile Chrome

### ♿ Accessibility QA

Check:

- Keyboard navigation
- Tab order
- Focus states
- Color contrast
- Screen reader labels
- Buttons
- Forms
- Dialogs
- Navigation

### ⚡ Performance QA

Check:

- LCP
- CLS
- INP
- Image loading
- Font loading
- JavaScript bundle
- Third-party scripts

---

## 🔀 Git Workflow

Recommended branch strategy:

```text
main
│
├── develop
│
├── feature/home
├── feature/menu
├── feature/cart
├── feature/whatsapp
├── feature/about
├── feature/gallery
└── feature/contact
```

Commit examples:

```bash
git commit -m "feat: create homepage hero"
git commit -m "feat: add product menu"
git commit -m "feat: implement cart store"
git commit -m "feat: add WhatsApp ordering"
git commit -m "style: refine product cards"
git commit -m "perf: optimize product images"
git commit -m "fix: restore cart from local storage"
```

---

## 🚀 Deployment

Primary deployment platform: **Vercel**

Deployment flow:

```text
Developer
   ↓
Git
   ↓
GitHub
   ↓
Vercel
   ↓
Production
```

Recommended production flow:

```text
Local Development
       ↓
Feature Branch
       ↓
Pull Request
       ↓
Review
       ↓
Merge
       ↓
Vercel Deployment
```

### 🌐 Domain

Production domain: **[www.tinytreats.in](https://www.tinytreats.in)**

---

## 🔒 Security

Even though this is primarily a frontend application, security rules apply.

Never expose:

- API secrets
- Private keys
- Email credentials
- Server tokens
- Third-party secret keys

Do not put secrets inside `NEXT_PUBLIC_*` unless the value is explicitly intended to be public.

### 🍯 Product Claims

Product/brand claims must come from the client.

Examples:

- No Maida
- No Added Sugar
- No Artificial Colors

These should only be displayed where the claim is factually applicable. Never invent ingredients, nutritional information or health claims.

---

## 📝 Content Management

There is no CMS in V1.

Content is maintained in code.

- Products: `data/products.ts`
- Testimonials: `data/testimonials.ts`
- Gallery: `data/gallery.ts`
- Categories: `data/categories.ts`

This is intentional because the client requested a simple frontend website.

---

## 🔮 Future Backend Expansion

The current architecture is intentionally lightweight but can evolve.

If the business later requires:

- Admin Dashboard
- Product Management
- Inventory
- Customer Accounts
- Order Management
- Online Payments
- Order Tracking
- Coupons
- Delivery Management

we can evolve the architecture.

Potential future:

```text
Next.js
    ↓
Next.js Route Handlers / Server Actions
    ↓
Database
    ↓
Admin Dashboard
```

Payment gateway can be introduced later if required.

The V1 architecture should not prematurely implement these features.

---

## 🧹 Coding Standards

### Components

Use PascalCase:

```text
ProductCard.tsx
CartDrawer.tsx
Navbar.tsx
```

### Functions

Use camelCase:

```text
addToCart()
getSubtotal()
generateWhatsAppMessage()
```

### Constants

Use `UPPER_SNAKE_CASE` when appropriate.

### 📐 Component Rules

Prefer:

- Small
- Reusable
- Focused
- Composable
- Typed
- Accessible

Avoid:

- Huge components
- Duplicated code
- Deep prop drilling
- Unnecessary abstractions
- Premature architecture

### 🧠 State Management Rules

Use local React state for:

- Temporary UI state
- Modal state
- Hover state
- Menu state

Use Zustand for:

- Cart state

Do not use Zustand for every piece of application state.

### 🎬 Animation Rules

Animation must have a purpose.

Good:

- Hover feedback
- Page entrance
- Cart feedback
- Product transitions
- Navigation
- Scroll storytelling

Avoid:

- Everything moving
- Long animations
- Distracting effects
- Excessive parallax
- Animation on every scroll

Respect `prefers-reduced-motion`.

### 🎨 Design Quality Rules

Every page must maintain:

- Same typography
- Same colors
- Same spacing system
- Same button system
- Same radius
- Same shadows
- Same animation language
- Same image treatment

No page should look like it was designed independently.

### 🚫 Dependency Rules

Before installing a dependency ask:

- Do we actually need it?
- Can Next.js handle it?
- Can Tailwind handle it?
- Can a small utility handle it?
- Will it increase bundle size?
- Does it create unnecessary complexity?

Avoid dependency creep.

---

## 🏁 Definition of Done

A feature is considered complete only when:

- ✓ Functional
- ✓ Responsive
- ✓ Accessible
- ✓ Visually polished
- ✓ Brand consistent
- ✓ TypeScript-safe
- ✓ Linted
- ✓ Tested
- ✓ Performance reviewed
- ✓ No console errors
- ✓ No broken links
- ✓ No layout overflow
- ✓ No unnecessary dependencies

---

## 🏆 Final Architecture

The final V1 architecture is:

```text
                         CUSTOMER
                            │
                            ▼
                   ┌─────────────────┐
                   │     VERCEL      │
                   │                 │
                   │    Next.js      │
                   │   App Router    │
                   └────────┬────────┘
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
         Home/Menu      About/Gallery    Contact
             │
             ▼
       Product Data
       TypeScript
             │
             ▼
        Product Cards
             │
             ▼
         Add to Cart
             │
             ▼
          Zustand
             │
             ▼
        localStorage
             │
             ▼
       Cart Drawer
             │
             ▼
      WhatsApp Message
             │
             ▼
          WhatsApp
             │
             ▼
          CUSTOMER
```

### 🧰 Final Technology Stack

```text
┌──────────────────────────────────────┐
│          CORE TECHNOLOGY             │
├──────────────────────────────────────┤
│ Next.js                              │
│ TypeScript                           │
│ Tailwind CSS                         │
│ shadcn/ui                            │
│ Motion                               │
│ Lucide React                         │
│ Zustand                              │
│ localStorage                         │
│ Next/Image                           │
│ WhatsApp                             │
│ Git                                  │
│ GitHub                               │
│ Vercel                               │
└──────────────────────────────────────┘
```

### 🎨 Final Development Skills

```text
┌────────────────────────────────────────────┐
│             DESIGN & ENGINEERING           │
├────────────────────────────────────────────┤
│ frontend-design                            │
│ ui-ux-pro-max                              │
│ design-taste-frontend                      │
│ emil-design-eng                            │
│                                             │
│ ANIMATION                                  │
│ animate                                    │
│ find-animation-opportunities               │
│ animation-vocabulary                       │
│ review-animations                          │
│ improve-animations                         │
│                                             │
│ REACT / NEXT.JS                            │
│ vercel-react-best-practices                │
│                                             │
│ UI QUALITY                                 │
│ better-interface                           │
│ better-layout                              │
│ better-typography                          │
│ beautiful-shadows                          │
│                                             │
│ MOBILE / ACCESSIBILITY                     │
│ mobile-native                              │
│ better-accessibility                       │
│                                             │
│ REVIEW                                     │
│ design-review                              │
│ core-web-vitals                            │
│                                             │
│ OPTIONAL                                   │
│ shadcn-ui-mcp-server                       │
│ 21st.dev Magic MCP                         │
│ GSAP                                       │
└────────────────────────────────────────────┘
```

### 🚫 Final V1 Exclusions

The following are intentionally **not** part of V1:

- PostgreSQL
- Supabase
- Prisma
- Express
- FastAPI
- Redis
- Convex
- Authentication
- Admin Panel
- CMS
- Customer Accounts
- Payment Gateway
- Order Database
- Inventory System
- React Native

If a genuine business requirement appears later, backend functionality will be implemented inside the same Next.js application before introducing a separate backend service.

---

## 💎 Product Philosophy

Tiny Treats is not being built as a complicated ecommerce application.

It is being built as:

```text
        PREMIUM BRAND EXPERIENCE
                  +
          SIMPLE SHOPPING
                  +
         WHATSAPP ORDERING
```

The technical philosophy is:

> Simple architecture underneath. Exceptional experience on top.

The customer should be able to:

```text
Discover
   ↓
Explore
   ↓
Choose
   ↓
Add to Cart
   ↓
Review
   ↓
Order on WhatsApp
```

in the fewest possible steps.

---

## 🚀 Final Project Principle

Don't over-engineer the business.

Don't under-design the experience.

Tiny Treats V1 should remain:

**Fast. Simple. Elegant. Premium. Accessible. Responsive. Maintainable.**

---

## 📌 Project Status

```text
Planning        ████████████████████ 100%
Tech Stack      ████████████████████ 100%
Architecture    ████████████████████ 100%
Design System   ████████████████████ 100%
Development     ░░░░░░░░░░░░░░░░░░░░   0%
Testing         ░░░░░░░░░░░░░░░░░░░░   0%
Deployment      ░░░░░░░░░░░░░░░░░░░░   0%
```

---

## 🍪 Tiny Treats by Shweta

**No Junk, Just Goodness.**

Built with ❤️ using modern web technologies.
