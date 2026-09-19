# Tiny Treats — Skill Orchestration Guide

> Rules for which AI skills to load, when, and why, while building the Tiny Treats website. Use this alongside the [Master AI Development Prompt](./MASTER-PROMPT.md) — that document defines *what* to build; this one defines *which tools to reach for* while building it.

Before implementing anything, inspect the available AI skills and select the **minimum relevant skills** for the current task. Do **NOT** blindly use every installed skill.

The project is a premium Next.js ecommerce/brand website, so use the following skill hierarchy.

---

## 📌 Table of Contents

1. [Design Foundation](#1-design-foundation)
2. [Component System](#2-component-system)
3. [React / Next.js Engineering](#3-react--nextjs-engineering)
4. [Motion / Animation](#4-motion--animation)
5. [Mobile / Responsive](#5-mobile--responsive)
6. [Quality / Review](#6-quality--review)
7. [Prototyping](#7-prototyping)
8. [Currently Not Required](#8-currently-not-required)
9. [Skill Decision Process](#9-skill-decision-process)
10. [Tiny Treats Priority Order](#10-tiny-treats-priority-order)

---

## 1. Design Foundation

**Primary skills:**

- `frontend-design`
- `ui-ux-pro-max`
- `design-taste-frontend`

**Use these for:**

- Visual direction
- Layout
- Typography
- Color
- Spacing
- Hierarchy
- Responsive design
- Premium visual composition
- Avoiding generic AI-generated UI
- Design-system consistency

> ⚠️ **Important:** Tiny Treats must **not** look like a generic bakery template. Follow the [UI/UX Design System](./DESIGN-SYSTEM.md) and [Technical README](./README.md) as the source of truth.

---

## 2. Component System

**Use when relevant:**

- `shadcn-ui-mcp-server`
- `21st.dev Magic MCP`

**Use these for:**

- Reusable UI components
- Dialogs
- Sheets
- Buttons
- Inputs
- Menus
- Product UI
- Cart UI
- Interactive components

Do not introduce unnecessary libraries merely because a skill recommends them.

**Prefer, in order:**

1. Existing project components
2. shadcn/ui
3. Tailwind
4. Lucide
5. Reusable custom components

---

## 3. React / Next.js Engineering

**Mandatory for all React/Next.js implementation:**

- `vercel-react-best-practices`

**Apply the performance rules when:**

- Creating components
- Creating pages
- Fetching data
- Optimizing images
- Handling client/server components
- Managing bundle size
- Implementing interactions
- Refactoring code

**Pay particular attention to:**

- Avoiding request waterfalls
- Minimizing unnecessary client JavaScript
- Bundle size
- Server/client boundaries
- Unnecessary re-renders
- Rendering performance
- Image optimization
- Caching where appropriate

---

## 4. Motion / Animation

Use animation skills **only** where animation adds genuine value.

**Primary options:**

- `emil-design-eng`
- `animate`
- `review-animations`
- `improve-animations`
- `find-animation-opportunities`
- `gsap-master`
- `motion-framer`

Do **NOT** automatically use GSAP everywhere. Choose the simplest appropriate animation technology.

**Preferred hierarchy:**

1. CSS transition
2. Motion / Framer Motion
3. GSAP
4. Other animation solution — only when genuinely necessary

Use **GSAP** for complex/high-value animation sequences.

**Use Motion for:**

- Component transitions
- Hover interactions
- Dialogs
- Sheets
- Layout transitions
- Subtle entrance animations

Use Emil animation skills to review:

- Easing
- Duration
- Sequencing
- Interaction feedback
- Animation restraint

**Every animation must have a purpose.**

**Avoid:**

- Excessive parallax
- Constant floating elements
- Unnecessary text animations
- Animation on every section
- Slow page transitions
- Distracting effects

Respect `prefers-reduced-motion`.

---

## 5. Mobile / Responsive

**When relevant, use:**

- `mobile-native`

The website must feel intentionally designed for mobile, tablet, and desktop. Do not simply shrink the desktop design.

**Check:**

- Touch targets
- Sticky elements
- Mobile navigation
- Cart drawer
- Bottom sheets
- Viewport behavior
- Input behavior
- Safe-area issues
- Mobile performance

---

## 6. Quality / Review

Before considering a section complete:

1. Review visual hierarchy.
2. Review spacing.
3. Review typography.
4. Review responsive behavior.
5. Review accessibility.
6. Review animation.
7. Review performance.
8. Check console errors.
9. Check TypeScript errors.
10. Check production build.

If animation exists → use `review-animations` where appropriate.

If the UI feels generic → use `design-taste-frontend` / `frontend-design` principles and **redesign the section** rather than adding random visual effects.

---

## 7. Prototyping

**Use:**

- `prototype`

**Only** when exploring multiple substantially different design directions.

**For example:**

- Hero A: editorial
- Hero B: cinematic
- Hero C: minimal luxury

Do not create multiple versions unnecessarily.

---

## 8. Currently Not Required

**Do NOT use:**

- `convex-create-component` — unless the project actually adopts Convex.
- `vercel-react-native-skills` — because Tiny Treats is currently a web application built with Next.js/React, not React Native.

**Do NOT** add backend/database architecture unless the project requirements actually require it.

---

## 9. Skill Decision Process

Before every major task:

```text
TASK
 ↓
IDENTIFY REQUIRED SKILL
 ↓
CHECK SKILL PREREQUISITES
 ↓
LOAD REQUIRED SKILL
 ↓
READ ITS INSTRUCTIONS
 ↓
IMPLEMENT
 ↓
REVIEW
 ↓
TEST
 ↓
SHIP
```

- Never assume a skill's instructions.
- Never claim to have used a skill unless it was actually loaded/available and used according to its instructions.

---

## 10. Tiny Treats Priority Order

1. Brand/design quality
2. UX
3. Responsive behavior
4. Accessibility
5. Performance
6. Motion
7. Code quality
8. Maintainability

**The goal is not to demonstrate how many skills are being used. The goal is to produce an exceptional Tiny Treats website.**
