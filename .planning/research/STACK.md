# Stack Research

**Domain:** Interview showcase / AI strategy pitch website
**Researched:** 2026-02-09
**Confidence:** HIGH

---

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|---|---|---|---|
| **Next.js** | 15.5.x (latest 15.5.9) | Framework / SSG | Mature, battle-tested for static sites. Next.js 16 (Oct 2025) exists but 15.5.x is safer for a 24-48hr build -- wider ecosystem compatibility, more tutorials/examples. Use App Router. |
| **React** | 19.x | UI library | Ships with Next.js 15. Required for Motion and @react-pdf/renderer v4. |
| **Tailwind CSS** | 4.1.x (latest 4.1.18) | Styling | CSS-first config (no tailwind.config.js needed). 5x faster builds with Oxide engine. Built-in container queries. 3D transforms. |
| **Motion** (formerly Framer Motion) | 12.x (latest 12.33.0) | Animation | Rebranded from Framer Motion. Import from `motion/react`. 120fps GPU-accelerated. Springs, layout animations, scroll-linked effects, stagger, AnimatePresence. |
| **TypeScript** | 5.x | Type safety | Ships with Next.js scaffolding. Worth the minimal overhead even on a speed build. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---|---|---|---|
| **@react-pdf/renderer** | 4.3.x (latest 4.3.2) | PDF generation | Primary PDF strategy. Build PDF from React components with full control over layout. Use with `"use client"` + dynamic import (`ssr: false`). |
| **@tailwindcss/postcss** | 4.x | PostCSS plugin | Required for Tailwind v4 + Next.js integration (replaces the old `tailwindcss` PostCSS plugin). |
| **clsx** | 2.x | Conditional classes | Cleaner conditional Tailwind class composition. Tiny footprint. |
| **tailwind-merge** | 2.x | Class merging | Prevents Tailwind class conflicts when composing components. Use with clsx via a `cn()` utility. |
| **lucide-react** | latest | Icons | Clean, consistent icon set. Tree-shakeable. |
| **@vercel/analytics** | latest | Analytics | Optional. Free tier on Vercel. Add if time permits. |

### Development Tools

| Tool | Purpose | Notes |
|---|---|---|
| **Turbopack** | Dev server bundler | Default in Next.js 15.5+. `next dev --turbo` is stable. 76.7% faster startup. |
| **ESLint** | Linting | Ships with `create-next-app`. Use default Next.js config. |
| **Prettier** | Formatting | Add `prettier-plugin-tailwindcss` for automatic class sorting. |
| **VS Code** | Editor | Extensions: Tailwind CSS IntelliSense, ES7+ React snippets, Pretty TypeScript Errors. |

---

## Installation

```bash
# 1. Scaffold Next.js project with Tailwind CSS v4
npx create-next-app@latest allied-outdoor-showcase \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

# 2. Install Motion (animation library, formerly Framer Motion)
npm install motion

# 3. Install PDF generation
npm install @react-pdf/renderer

# 4. Install utility libraries
npm install clsx tailwind-merge lucide-react

# 5. Install dev tooling
npm install -D prettier prettier-plugin-tailwindcss

# 6. Optional: Vercel analytics
npm install @vercel/analytics
```

### Post-Install Verification

```bash
# Verify key versions
npx next --version          # Should show 15.5.x
npm list motion             # Should show 12.x
npm list @react-pdf/renderer # Should show 4.3.x
npm list tailwindcss        # Should show 4.1.x
```

### Tailwind CSS v4 + Next.js Setup Notes

Tailwind v4 with Next.js uses `@tailwindcss/postcss` (NOT the old `tailwindcss` PostCSS plugin directly).

**postcss.config.mjs** (created by create-next-app):
```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

**app/globals.css** (replaces old @tailwind directives):
```css
@import "tailwindcss";

/* Design tokens go here via @theme */
@theme {
  --color-brand-gold: #c8a96e;
  --color-brand-charcoal: #2d2d2d;
  --color-brand-cream: #faf8f5;
  --font-family-display: "Playfair Display", serif;
  --font-family-body: "Inter", sans-serif;
}
```

### Motion Setup Notes

```tsx
// CORRECT (new import path)
import { motion, AnimatePresence } from "motion/react";

// WRONG (deprecated import path -- still works but not recommended)
// import { motion } from "framer-motion";
```

All Motion components that use animation require `"use client"` directive in Next.js App Router:

```tsx
"use client";
import { motion } from "motion/react";

export function AnimatedCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|---|---|---|
| Next.js 15.5.x (App Router) | Next.js 16.x | Use 16 if you need React Compiler or Turbopack for production builds. Avoid for speed build -- 15.5.x has more community examples. |
| Next.js 15.5.x (App Router) | Next.js 15.x (Pages Router) | Pages Router is simpler for pure SSG but App Router is the official recommendation and has better layout/nested route support. |
| Motion 12.x | GSAP | Use GSAP only if you need timeline-based complex sequencing. Motion is simpler for card animations and scroll effects. |
| Motion 12.x | CSS animations only | Use pure CSS if animations are trivial (hover effects only). Motion is worth it for staggered cards, page transitions, scroll reveals. |
| Tailwind CSS v4 | Tailwind CSS v3.4 | Fall back to v3.4 only if you hit v4 compatibility issues. v3 uses the old tailwind.config.js approach. |
| @react-pdf/renderer | html2canvas + jspdf | Use screenshot approach only as a last resort fallback -- faster to implement but produces blurry, non-searchable image PDFs. |
| @react-pdf/renderer | Puppeteer via API route | Use if you need pixel-perfect web-to-PDF conversion. Requires server (can't use `output: "export"`). Heavy dependency. |
| TypeScript | JavaScript | Only skip TS if you're not comfortable with it. For a speed build, TS overhead is minimal with Next.js scaffolding. |

---

## What NOT to Use

| Avoid | Why | Use Instead |
|---|---|---|
| `framer-motion` package | Deprecated package name. Still works but will stop receiving updates. | `motion` package, import from `motion/react` |
| `tailwind.config.js` / `tailwind.config.ts` | Not needed in Tailwind v4. Config is now CSS-first via `@theme` in your CSS file. | `@theme` directive in `globals.css` |
| `output: "export"` in next.config | Unnecessary for Vercel deployment. Vercel handles SSG natively without static export mode. Limits you (no API routes, no ISR). | Default Next.js build on Vercel (SSG pages are auto-detected). |
| Puppeteer for PDF | Massive dependency (~300MB+ Chrome binary). Can't run on Vercel serverless easily. Overkill for this project. | `@react-pdf/renderer` for structured PDF from React components. |
| html2canvas + jsPDF as primary PDF | Produces image-based PDFs: blurry text, not searchable, large file size, inconsistent across browsers. | `@react-pdf/renderer` for crisp, vector-based PDF output. |
| CSS Modules | Adds unnecessary complexity when Tailwind is the primary styling solution. | Tailwind CSS utility classes. |
| Styled Components / Emotion | Runtime CSS-in-JS has performance overhead and conflicts with RSC (React Server Components). | Tailwind CSS. |
| `getStaticProps` / `getServerSideProps` | Pages Router APIs. Not available in App Router. | `generateStaticParams` + React Server Components in App Router. |
| Heavy animation libraries (Three.js, Lottie) | Overkill for card-based showcase. Increases bundle size and build complexity. | Motion for scroll reveals, staggered cards, page transitions. |

---

## PDF Export Strategy

This is the critical differentiator for the project. The PDF must look polished and professional.

### Recommended: @react-pdf/renderer (PRIMARY)

**Why:**
- Build PDF layout from React components -- familiar DX
- Produces vector-based, crisp PDF with searchable/selectable text
- Full control over typography, spacing, colors, page breaks
- Works entirely client-side (no server needed)
- React 19 compatible (since v4.1.0)
- Active maintenance (v4.3.2 as of Jan 2026)

**Implementation Approach:**

```tsx
// src/components/pdf/UseCasePDF.tsx
"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Register custom fonts for brand consistency
Font.register({
  family: "Inter",
  src: "/fonts/Inter-Regular.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Inter",
    backgroundColor: "#faf8f5",
  },
  title: {
    fontSize: 28,
    fontFamily: "Playfair Display",
    color: "#2d2d2d",
    marginBottom: 20,
  },
  // ... more styles
});

const UseCasePDF = ({ useCases }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Cover page */}
      <View>
        <Text style={styles.title}>
          AI Strategy for Allied Outdoor Solutions
        </Text>
      </View>
    </Page>
    {useCases.map((useCase, i) => (
      <Page key={i} size="A4" style={styles.page}>
        <View>
          <Text>{useCase.title}</Text>
          <Text>{useCase.description}</Text>
        </View>
      </Page>
    ))}
  </Document>
);

export default UseCasePDF;
```

```tsx
// In a page or component -- dynamic import required
"use client";

import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

export function DownloadButton({ useCases }) {
  return (
    <PDFDownloadLink
      document={<UseCasePDF useCases={useCases} />}
      fileName="allied-outdoor-ai-strategy.pdf"
    >
      {({ loading }) =>
        loading ? "Generating PDF..." : "Download PDF Report"
      }
    </PDFDownloadLink>
  );
}
```

**Key Constraints:**
- @react-pdf/renderer has its OWN layout engine (not CSS/Tailwind). You must duplicate styles using its `StyleSheet.create()` API (Flexbox-based, similar to React Native).
- No HTML elements -- uses `<View>`, `<Text>`, `<Image>`, etc.
- Must register fonts explicitly (can't use Google Fonts CDN directly).
- PDFDownloadLink and PDFViewer MUST be dynamically imported with `ssr: false`.
- Images must be absolute URLs or imported as static assets.

**Time Estimate:** 3-5 hours for a polished 10-page PDF template.

### Fallback: html2canvas + jsPDF (BACKUP ONLY)

**When to use:** If @react-pdf/renderer becomes too time-consuming for the layout, this is a "screenshot" approach that captures your web page as-is.

```bash
npm install html2canvas jspdf
```

```tsx
"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

async function exportToPDF(elementId: string) {
  const element = document.getElementById(elementId);
  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const width = pdf.internal.pageSize.getWidth();
  const height = (canvas.height * width) / canvas.width;
  pdf.addImage(imgData, "PNG", 0, 0, width, height);
  pdf.save("allied-outdoor-ai-strategy.pdf");
}
```

**Pros:** Fast to implement (30 min). What-you-see-is-what-you-get.
**Cons:** Blurry text, non-searchable, large file size, single-page only (multi-page requires manual splitting), inconsistent across browsers.

### NOT Recommended: Puppeteer / Playwright

- Requires a headless Chromium instance (~300MB)
- Cannot run on Vercel Serverless (function size limits)
- Would need a separate server or service (e.g., Browserless.io)
- Overkill for a 24-48hr build
- Only use if you absolutely need pixel-perfect web-to-PDF

### Strategy Summary

| Approach | Quality | Speed to Build | Complexity | Recommendation |
|---|---|---|---|---|
| @react-pdf/renderer | HIGH (vector PDF, searchable text) | 3-5 hrs | MEDIUM (separate layout system) | **PRIMARY -- use this** |
| html2canvas + jsPDF | LOW (image-based, blurry) | 30 min | LOW | BACKUP if time runs out |
| Puppeteer/Playwright | HIGH (pixel-perfect) | 2-4 hrs + infra | HIGH (server required) | AVOID for this project |
| pdfmake | MEDIUM (JSON-based layout) | 2-3 hrs | MEDIUM | Viable alternative to @react-pdf/renderer if preferred |

---

## Animation Strategy (Motion Patterns for Card-Based Layout)

### Core Patterns for the Showcase

```tsx
"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

// 1. STAGGERED CARD ENTRANCE
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function UseCaseGrid({ useCases }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {useCases.map((uc, i) => (
        <motion.div key={i} variants={cardVariants}>
          <UseCaseCard {...uc} />
        </motion.div>
      ))}
    </motion.div>
  );
}

// 2. SCROLL-TRIGGERED FADE IN
export function ScrollReveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// 3. HERO TEXT ANIMATION
export function AnimatedHeading({ text }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-5xl font-display text-brand-charcoal"
    >
      {text}
    </motion.h1>
  );
}
```

### Animation Don'ts for Speed Build
- Do NOT over-animate. Subtle is better for a professional/luxury brand.
- Do NOT use page transitions (AnimatePresence for routes) -- complex with App Router, not worth the time.
- Do NOT animate on every scroll event -- use `once: true` on useInView.
- Keep durations between 0.3s and 0.8s. Anything longer feels sluggish.

---

## Vercel Deployment Strategy

### Approach: Standard SSG on Vercel (NOT static export)

Do NOT use `output: "export"` in `next.config.js`. Deploy as a standard Next.js app on Vercel.

**Why:**
- Vercel auto-detects static pages and serves them from CDN edge
- You retain the ability to use API routes if needed later
- ISR is available if you need to update content without rebuild
- Image optimization works out of the box
- Zero configuration needed

### next.config.ts

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Do NOT add output: "export"
  // Vercel handles SSG automatically
  images: {
    // If using external images, add domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.alliedoutdoor.com",
      },
    ],
  },
};

export default nextConfig;
```

### Deployment Steps

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main

# 2. Connect to Vercel
# - Go to vercel.com/new
# - Import your GitHub repo
# - Framework preset: Next.js (auto-detected)
# - Build command: next build (auto-detected)
# - Output directory: .next (auto-detected)
# - Click Deploy

# OR use Vercel CLI:
npm i -g vercel
vercel --prod
```

### Performance Checklist for Vercel
- [ ] All pages are SSG (no `force-dynamic` or `revalidate` needed for static content)
- [ ] Images use `next/image` with proper `width`/`height` or `fill`
- [ ] Fonts use `next/font/google` for zero-layout-shift loading
- [ ] Metadata set in `layout.tsx` for SEO/social sharing
- [ ] `<Link>` used for internal navigation (auto-prefetching)

---

## Version Compatibility

### Known Compatible Combinations (Verified)

| Package A | Package B | Status | Notes |
|---|---|---|---|
| Next.js 15.5.x | React 19.x | COMPATIBLE | Ships together via create-next-app |
| Next.js 15.5.x | Tailwind CSS 4.1.x | COMPATIBLE | Use @tailwindcss/postcss plugin |
| Next.js 15.5.x | Motion 12.x | COMPATIBLE | Use `"use client"` directive on animated components |
| Motion 12.x | React 19.x | COMPATIBLE | Import from `motion/react` |
| @react-pdf/renderer 4.3.x | React 19.x | COMPATIBLE | Supported since v4.1.0 |
| @react-pdf/renderer 4.3.x | Next.js App Router | COMPATIBLE | Requires dynamic import with `ssr: false` for PDFDownloadLink/PDFViewer |
| Tailwind CSS 4.1.x | PostCSS | COMPATIBLE | Must use `@tailwindcss/postcss`, NOT `tailwindcss` directly |

### Known Issues / Gotchas

1. **@react-pdf/renderer + SSR:** PDFDownloadLink and PDFViewer crash during server-side rendering. ALWAYS use `dynamic(() => import(...), { ssr: false })`.

2. **Motion + Server Components:** Motion components use React state/effects and must be marked `"use client"`. Create wrapper components in a `/components/animated/` directory.

3. **Tailwind v4 CSS-first config:** If you're used to `tailwind.config.js`, note that design tokens now go in your CSS file under `@theme { }`. The `@apply` directive still works.

4. **Font Registration in @react-pdf/renderer:** Google Fonts won't work via CDN in the PDF. You must download `.ttf` files and register them with `Font.register()`. Place them in `/public/fonts/`.

5. **Image Paths in @react-pdf/renderer:** Use absolute URLs or static imports. Relative paths may not resolve correctly.

---

## Project Structure Recommendation

```
src/
  app/
    layout.tsx          # Root layout: fonts, metadata, global styles
    page.tsx            # Home/landing page (server component)
    globals.css         # Tailwind @import + @theme tokens
  components/
    animated/           # Motion-powered "use client" wrappers
      ScrollReveal.tsx
      AnimatedCard.tsx
      StaggerGrid.tsx
      HeroAnimation.tsx
    ui/                 # Pure UI components (can be server components)
      Card.tsx
      Button.tsx
      Badge.tsx
      Section.tsx
    pdf/                # @react-pdf/renderer components
      UseCasePDF.tsx    # PDF document definition
      PDFStyles.ts      # Shared PDF styles
      DownloadButton.tsx # Dynamic import wrapper
    layout/             # Page sections
      Hero.tsx
      UseCaseGrid.tsx
      Footer.tsx
  lib/
    utils.ts            # cn() helper, constants
    data.ts             # Use case data (static)
  types/
    index.ts            # TypeScript interfaces
public/
  fonts/                # TTF files for PDF font registration
  images/               # Static images/logos
```

---

## Quick Start Checklist (24-48hr Build)

### Hour 0-2: Setup & Foundation
- [ ] Scaffold with create-next-app (Next.js 15.5 + Tailwind v4 + TypeScript)
- [ ] Install Motion, @react-pdf/renderer, clsx, tailwind-merge
- [ ] Set up @theme tokens in globals.css (brand colors, fonts)
- [ ] Set up next/font/google for Inter + Playfair Display
- [ ] Create `cn()` utility (clsx + tailwind-merge)
- [ ] Create project structure

### Hour 2-8: Core Website
- [ ] Build data layer (10 use cases as typed objects in data.ts)
- [ ] Build Hero section with Motion entrance animation
- [ ] Build UseCaseCard component with Tailwind
- [ ] Build StaggerGrid with Motion variants
- [ ] Build individual use case detail sections
- [ ] Add ScrollReveal wrappers

### Hour 8-14: Polish & PDF
- [ ] Build PDF template with @react-pdf/renderer
- [ ] Register fonts, add logo/images to PDF
- [ ] Style each use case page in PDF
- [ ] Add PDFDownloadLink with dynamic import
- [ ] Add responsive design tweaks
- [ ] Add metadata (OG tags, title, description)

### Hour 14-18: Deploy & Refine
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Test on mobile
- [ ] Test PDF download
- [ ] Performance check (Lighthouse)
- [ ] Final polish

---

## Sources

### HIGH Confidence (Official Documentation)
- [Next.js App Router Static Exports](https://nextjs.org/docs/app/guides/static-exports) -- Official Next.js docs
- [Next.js 16 Blog Post](https://nextjs.org/blog/next-16) -- Official release announcement
- [Next.js 15 Blog Post](https://nextjs.org/blog/next-15) -- Official release announcement
- [Next.js 15.5 Blog Post](https://nextjs.org/blog/next-15-5) -- Official release announcement
- [Tailwind CSS v4.0 Announcement](https://tailwindcss.com/blog/tailwindcss-v4) -- Official Tailwind blog
- [Tailwind CSS v4 + Next.js Installation Guide](https://tailwindcss.com/docs/guides/nextjs) -- Official Tailwind docs
- [Tailwind CSS v4 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide) -- Official Tailwind docs
- [Motion Documentation](https://motion.dev/docs) -- Official Motion docs
- [Motion Upgrade Guide (Framer Motion to Motion)](https://motion.dev/docs/react-upgrade-guide) -- Official migration guide
- [Motion Stagger API](https://motion.dev/docs/stagger) -- Official docs
- [@react-pdf/renderer npm](https://www.npmjs.com/package/@react-pdf/renderer) -- npm registry (v4.3.2)
- [React-PDF Compatibility](https://react-pdf.org/compatibility) -- Official react-pdf docs
- [Vercel Rendering Strategy Guide](https://vercel.com/blog/how-to-choose-the-best-rendering-strategy-for-your-app) -- Official Vercel blog
- [framer-motion npm](https://www.npmjs.com/package/framer-motion) -- npm registry (v12.33.0, points to motion package)

### MEDIUM Confidence (Technical Blogs & Comparisons)
- [JS PDF Generation Libraries Comparison (Jan 2025)](https://dmitriiboikov.com/posts/2025/01/pdf-generation-comarison/) -- Detailed benchmark of PDF libraries
- [Best JavaScript PDF Libraries 2025](https://www.nutrient.io/blog/javascript-pdf-libraries/) -- Comprehensive library guide
- [A Full Comparison of 6 JS Libraries for Generating PDFs](https://dev.to/handdot/generate-a-pdf-in-js-summary-and-comparison-of-libraries-3k0p) -- Dev.to comparison
- [Next.js App Router vs Pages Router Deep Guide](https://dev.to/shyam0118/app-router-vs-pages-router-in-nextjs-a-deep-practical-guide-341g) -- Dev.to analysis
- [Tailwind CSS v4 Deep Dive: Oxide Engine](https://dev.to/dataformathub/tailwind-css-v4-deep-dive-why-the-oxide-engine-changes-everything-in-2026-2595) -- Dev.to analysis
- [How to Build a High-Performance Site with Next.js and Vercel (2026)](https://finlyinsights.com/build-high-performance-site-with-next-js-and-vercel/) -- Technical guide
- [Framer Motion Scroll Animations Guide](https://jb.desishub.com/blog/framer-motion) -- Practical patterns with TypeScript + Tailwind
- [Advanced Animation Patterns with Framer Motion](https://blog.maximeheckel.com/posts/advanced-animation-patterns-with-framer-motion/) -- Maxime Heckel's blog

### LOW Confidence (Community / Discussions)
- [Next.js GitHub Discussion: @react-pdf/renderer + App Router](https://github.com/diegomura/react-pdf/issues/2460) -- Community workarounds for SSR issues
- [Next.js GitHub Discussion: Static Export + Dynamic Routes](https://github.com/vercel/next.js/discussions/55393) -- Limitations discussion

---

*Research completed 2026-02-09. Stack verified for compatibility. Optimized for 24-48hr speed build targeting Vercel deployment.*
