# Tiny Treats — Launch Checklist (Sign-Off Sheet)

> The single go/no-go checklist before pointing www.tinytreats.in live. Pulls together QA criteria already defined across the [README](./README.md), [SEO Guide](./SEO-GUIDE.md), and [Design System](./DESIGN-SYSTEM.md) into one sheet. Don't launch until every box that applies to V1 is checked.

---

## 1. Content

- [ ] Every price, weight, and ingredient list on the live site comes from Swetha's confirmed data — no placeholders (`₹XXX`, `TBD`) remain in production ([CLIENT-DATA-CHECKLIST.md](./CLIENT-DATA-CHECKLIST.md))
- [ ] No invented claims anywhere (nutrition, medical, certifications, "high protein," etc.) — every dietary claim is confirmed per-product
- [ ] No fake testimonials, reviews, ratings, or customer counts
- [ ] All copy matches [CONTENT.md](./CONTENT.md) — no unapproved text substitutions
- [ ] Contact details (WhatsApp number, phone, address/service area) are real and correct
- [ ] Legal pages (Privacy Policy, Terms & Conditions, Cookie Policy) are live and reviewed — see [LEGAL-PAGES.md](./LEGAL-PAGES.md)
- [ ] Footer only links to pages that actually exist

## 2. Functional QA

- [ ] Navigation works on every page
- [ ] Menu category filters work
- [ ] Product Quick View opens/closes correctly, on desktop and mobile
- [ ] Add to Cart, remove from cart, and quantity changes all work
- [ ] Cart persists correctly after a page refresh (localStorage)
- [ ] Clear Cart works
- [ ] Empty cart state displays correctly
- [ ] WhatsApp order message generates correctly from actual cart contents (not hard-coded)
- [ ] WhatsApp CTA opens WhatsApp with the correct pre-filled message
- [ ] Contact form (if implemented) submits successfully and shows confirmation
- [ ] 404 page displays for invalid URLs

## 3. Responsive QA

Test at minimum: 320px, 375px, 390px, 414px, 768px, 1024px, 1280px, 1440px, 1920px

- [ ] No horizontal overflow at any width
- [ ] Mobile navigation opens/closes correctly
- [ ] Sticky/bottom cart doesn't overlap content on mobile
- [ ] Touch targets are ≥44×44px
- [ ] Images crop/scale correctly at every breakpoint
- [ ] Gallery masonry layout holds up on mobile (1–2 columns as designed)

## 4. Browser QA

- [ ] Chrome
- [ ] Edge
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

## 5. Accessibility

- [ ] Full keyboard navigation works (tab order is logical)
- [ ] Visible focus states on all interactive elements
- [ ] Alt text present and meaningful on every non-decorative image; decorative botanicals use `alt=""`
- [ ] Dialogs (Quick View, Cart Drawer) trap focus correctly and close on Esc
- [ ] Color contrast checked against WCAG 2.2 AA
- [ ] `prefers-reduced-motion` respected

## 6. Performance

- [ ] Lighthouse/PageSpeed run on Home, Menu, and a Quick View — Core Web Vitals (LCP, CLS, INP) in the green
- [ ] Hero image has `priority` loading; all other images lazy-load
- [ ] Images are WebP/AVIF and reasonably compressed
- [ ] No unnecessary Client Components
- [ ] No console errors in the browser
- [ ] Production build (`npm run build`) completes with no errors or warnings

## 7. SEO

- [ ] Unique title tag and meta description on every page
- [ ] `sitemap.xml` and `robots.txt` reachable and correct
- [ ] Organization/Bakery JSON-LD present (with `telephone`/`address` only if client-approved)
- [ ] Canonical URLs set
- [ ] Open Graph and Twitter Card previews tested (share a link and confirm the preview looks right)
- [ ] Google Search Console verified, sitemap submitted
- [ ] Google Analytics 4 installed with a WhatsApp-click event configured

## 8. Domain & Infrastructure

- [ ] `www.tinytreats.in` correctly pointed to the Vercel deployment
- [ ] HTTPS enforced
- [ ] `www` vs non-`www` resolves to a single canonical version (redirect the other)
- [ ] Environment variables set correctly in production (`NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`, etc.)
- [ ] No secrets exposed in client-side code or `NEXT_PUBLIC_*` variables that shouldn't be public

## 9. Brand & Design Consistency

- [ ] Every page uses the same colors, typography, spacing, radius, and shadow system — no page feels "designed separately"
- [ ] No generic bakery-template or default-shadcn look — matches the premium editorial direction in [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)
- [ ] Motion is subtle and purposeful, not decorative-only

---

## ✅ Final Sign-Off

| Reviewer | Date | Approved? |
|---|---|---|
| Developer (Siva) | | ☐ |
| Client (Swetha) | | ☐ |

Once both boxes are checked, the site is ready to go live.
