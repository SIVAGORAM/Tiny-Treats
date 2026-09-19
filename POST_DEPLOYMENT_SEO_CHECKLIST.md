# Post-Deployment SEO & Performance Verification Guide
**Tiny Treats by Swetha (`https://www.tinytreats.in`)**  
*Next.js 16 App Router Production Audit & Action Checklist*

---

## 1. Live Terminal & `curl` Verification Commands

Run these automated terminal commands immediately after deploying to your production host (Vercel, AWS Amplify, Cloudflare, or custom VPS).

### A. Test HTTP to HTTPS Redirection
```bash
curl -IL -s http://tinytreats.in | grep -E "HTTP\/|Location:"
# Expected: 301/308 Moved Permanently -> https://www.tinytreats.in/
```

### B. Test Strict Trailing Slash 308 Redirection
```bash
curl -IL -s https://www.tinytreats.in/menu | grep -E "HTTP\/|Location:"
# Expected:
# HTTP/2 308 Permanent Redirect
# Location: https://www.tinytreats.in/menu/
```

### C. Test `robots.txt` Availability & Directives
```bash
curl -s https://www.tinytreats.in/robots.txt
# Expected Directives:
# User-agent: *
# Allow: /
# Disallow: /api/
# Disallow: /wp-admin/
# Disallow: /wp-includes/
# Disallow: /wp-content/
# Disallow: /wp-json/
# Disallow: /xmlrpc.php
# Disallow: /*.php$
# Disallow: /category/
# Disallow: /tag/
# Disallow: /author/
# Disallow: /cart/
# Disallow: /thank-you/
# Disallow: /admin/
# Disallow: /feed/
# Disallow: /*.json$
# Sitemap: https://www.tinytreats.in/sitemap.xml
# Host: https://www.tinytreats.in
```

### D. Test `sitemap.xml` Route Discovery & HTTP 200 Status
```bash
curl -s -I https://www.tinytreats.in/sitemap.xml | grep "HTTP/"
# Expected: HTTP/2 200 OK
# Content-Type: application/xml or text/xml
```

### E. Test Legacy WordPress 301 Permanent Redirects
```bash
# 1. Legacy About page
curl -IL -s https://www.tinytreats.in/about-us | grep -E "HTTP\/|Location:"
# Expected: Location: https://www.tinytreats.in/about/

# 2. Legacy Contact page
curl -IL -s https://www.tinytreats.in/contact-us | grep -E "HTTP\/|Location:"
# Expected: Location: https://www.tinytreats.in/contact/

# 3. Legacy Category archive
curl -IL -s https://www.tinytreats.in/category/healthy-cookies | grep -E "HTTP\/|Location:"
# Expected: Location: https://www.tinytreats.in/menu/

# 4. Legacy Media uploads
curl -IL -s https://www.tinytreats.in/wp-content/uploads/2023/10/cookie.jpg | grep -E "HTTP\/|Location:"
# Expected: Location: https://www.tinytreats.in/gallery/

# 5. Legacy RSS Feeds
curl -IL -s https://www.tinytreats.in/feed | grep -E "HTTP\/|Location:"
# Expected: Location: https://www.tinytreats.in/
```

### F. Verify Immutable Cache-Control Headers
```bash
curl -s -I https://www.tinytreats.in/logo.png | grep -i "cache-control"
# Expected: cache-control: public, max-age=31536000, immutable
```

---

## 2. Google Search Console (GSC) Setup & Indexation

### Step 1: Domain Property DNS Verification
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Select **Add Property** -> Choose **Domain** (e.g. `tinytreats.in`).
3. Copy the `google-site-verification` TXT token provided by Google.
4. Add the TXT record to your DNS management console (Cloudflare, GoDaddy, Namecheap, Route53):
   - **Type**: `TXT`
   - **Host / Name**: `@`
   - **Value**: `google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
   - **TTL**: `Auto` or `300`
5. Click **Verify** in Search Console.

### Step 2: Submit Dynamic Sitemap
1. Go to **Indexing** -> **Sitemaps**.
2. Under "Add a new sitemap", enter:
   `sitemap.xml`
3. Click **Submit**.
4. Confirm Status reports **Success** and that all 11+ public indexable pages are discovered.

### Step 3: Manual Priority URL Inspection & Forced Indexation
For instant indexing of priority pages, use the **URL Inspection** tool (top search bar in GSC):
1. Test and request indexing for:
   - `https://www.tinytreats.in/`
   - `https://www.tinytreats.in/menu/`
   - `https://www.tinytreats.in/about/`
   - `https://www.tinytreats.in/gallery/`
   - `https://www.tinytreats.in/contact/`
2. Click **Test Live URL**.
3. Once the live test passes with green checks, click **Request Indexing**.

---

## 3. Schema.org & Google Rich Results Validation

Validate structured data using [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/).

### Schemas to Test & Verification Targets

| Schema Type | Location | Target Rich Snippet |
| :--- | :--- | :--- |
| **`Organization` / `Corporation`** | `app/layout.tsx` (Global) | Google Knowledge Graph card, official logo, brand contact, social profiles |
| **`SoftwareApplication` / `WebApplication`** | `app/layout.tsx` (Global) | Web app store snippet, shopping catalog integration |
| **`Bakery` / `LocalBusiness`** | `app/layout.tsx` (Global) | Google Local 3-Pack, address, Hyderabad opening hours, price range `₹₹` |
| **`ItemList` + `Product`** | `app/menu/page.tsx` | Rich Product cards with prices in INR, availability badges |
| **`BreadcrumbList`** | `app/about/`, `app/menu/`, `app/gallery/`, etc. | Navigational breadcrumbs in Google Search SERP snippets |
| **`FAQPage`** | `app/menu/page.tsx` | Collapsible FAQ rich accordion dropdowns directly under search results |

---

## 4. Core Web Vitals (CWV) Target Thresholds

Run audits using [PageSpeed Insights](https://pagespeed.web.dev/) and Chrome DevTools Lighthouse.

| Metric | Google "Good" Threshold | Tiny Treats Target | Optimization Implemented |
| :--- | :--- | :--- | :--- |
| **LCP** (Largest Contentful Paint) | `< 2.5s` | **`< 1.5s`** | Hero slide `priority={true}`, responsive `sizes`, AVIF/WebP next-gen format |
| **CLS** (Cumulative Layout Shift) | `< 0.10` | **`0.00`** | Explicit aspect ratio wrappers (`aspect-4/3`, `aspect-[16/11]`) on all images |
| **INP** (Interaction to Next Paint) | `< 200ms` | **`< 60ms`** | Zero heavy blocking scripts, lightweight React 19 UI transitions |
| **FCP** (First Contentful Paint) | `< 1.8s` | **`< 0.8s`** | Static pre-rendering (`○ Static`), font subset preloading with `swap` |
| **Performance Score** | `> 90` | **`95 - 100`** | Non-blocking GA4 (`afterInteractive`), immutable caching, 0 client-side bloat |

---

## 5. Security & Pre-Launch Sanity Checklist

- [x] **Canonical URLs**: Strict trailing slash normalization across all routes.
- [x] **Meta Titles & Descriptions**: Unique, keyword-targeted, within standard character limits.
- [x] **Heading Hierarchy**: Strict single `<h1>` on every route followed by logical `<h2>` and `<h3>`.
- [x] **Image Protection**: Casual scraping and right-click downloading disabled while retaining 100% Googlebot crawlability via `ProtectedImage`.
- [x] **Security Headers**: HSTS, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, and Referrer-Policy configured in `next.config.ts`.
- [x] **Analytics**: GA4 script loaded non-blockingly with `strategy="afterInteractive"`.
- [x] **TypeScript & Production Build**: 0 type errors, all 17 routes pre-rendered statically.
