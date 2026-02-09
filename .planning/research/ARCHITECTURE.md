# Architecture Research

**Domain:** Interview showcase / AI strategy pitch website
**Researched:** 2026-02-09
**Confidence:** HIGH

---

## Standard Architecture

### System Overview

```
┌──────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │   Hero    │  │ Solution │  │ Category │  │  Footer   │    │
│  │ Section   │  │  Cards   │  │ Sections │  │  + CTA    │    │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘    │
│       │              │              │              │          │
│  ┌────┴──────────────┴──────────────┴──────────────┴────┐    │
│  │              Animation Layer (Motion)                  │    │
│  │         ScrollReveal / Stagger / FadeIn               │    │
│  └───────────────────────┬───────────────────────────────┘    │
├──────────────────────────┼───────────────────────────────────┤
│                    DATA LAYER                                 │
│  ┌───────────────────────┴───────────────────────────────┐    │
│  │           use-cases.ts (typed static data)             │    │
│  │     10 use cases with titles, ROI, tools, etc.        │    │
│  └───────────────────────┬───────────────────────────────┘    │
├──────────────────────────┼───────────────────────────────────┤
│                    EXPORT LAYER                               │
│  ┌───────────────────────┴───────────────────────────────┐    │
│  │         PDF Components (@react-pdf/renderer)           │    │
│  │     Separate component tree consuming same data        │    │
│  └───────────────────────────────────────────────────────┘    │
├──────────────────────────────────────────────────────────────┤
│                    DEPLOYMENT                                 │
│  ┌──────────────────────────────────────────────────────┐    │
│  │              Vercel (SSG / CDN Edge)                   │    │
│  └──────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Implementation |
|---|---|---|
| `page.tsx` | Root page — Server Component, assembles sections | Imports section components, passes data |
| `Hero` | Above-the-fold messaging, first impression | Client component (animated), "Name the problem..." |
| `UseCaseCard` | Individual solution display | Reusable card with title, description, tools, ROI, timeline badge |
| `CategorySection` | Groups cards by timeline (Quick Win / Medium / Strategic) | Server component wrapping animated card grid |
| `AnimatedGrid` | Staggered card entrance animations | Client component using Motion variants |
| `ScrollReveal` | Scroll-triggered fade-in wrapper | Client component using Motion useInView |
| `PDFDocument` | PDF version of the showcase | @react-pdf/renderer Document with Pages |
| `DownloadButton` | Triggers PDF generation and download | Client component, dynamic import of PDFDownloadLink |
| `Footer` | Contact info, CTA, credits | Server component |

---

## Recommended Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, OG tags
│   ├── page.tsx                # Home page (Server Component)
│   ├── globals.css             # Tailwind @import + @theme design tokens
│   └── favicon.ico
├── components/
│   ├── sections/               # Page sections (ordered as they appear)
│   │   ├── Hero.tsx            # Hero banner with headline + subtitle
│   │   ├── QuickWins.tsx       # Quick Win solutions section
│   │   ├── MediumTerm.tsx      # Medium-term solutions section
│   │   ├── Strategic.tsx       # Strategic solutions section
│   │   └── Footer.tsx          # CTA + contact info
│   ├── cards/
│   │   ├── UseCaseCard.tsx     # Individual solution card
│   │   └── ToolBadge.tsx       # Tech stack badge (OpenAI, n8n, etc.)
│   ├── animated/               # Motion wrappers ("use client")
│   │   ├── ScrollReveal.tsx    # Scroll-triggered fade-in
│   │   ├── StaggerGrid.tsx     # Staggered card entrance
│   │   ├── FadeIn.tsx          # Simple fade-in wrapper
│   │   └── HeroAnimation.tsx   # Hero-specific entrance
│   ├── pdf/                    # PDF export components
│   │   ├── PDFDocument.tsx     # Full PDF document definition
│   │   ├── PDFUseCasePage.tsx  # Single use case as PDF page
│   │   ├── PDFCoverPage.tsx    # PDF cover page
│   │   ├── PDFStyles.ts        # @react-pdf/renderer StyleSheet
│   │   └── DownloadButton.tsx  # Dynamic import wrapper for PDFDownloadLink
│   └── ui/                     # Shared UI primitives
│       ├── Badge.tsx           # Timeline/category badge
│       ├── Section.tsx         # Section wrapper with consistent spacing
│       └── Container.tsx       # Max-width container
├── data/
│   └── use-cases.ts            # All 10 use cases as typed array
├── lib/
│   └── utils.ts                # cn() helper (clsx + tailwind-merge)
├── types/
│   └── index.ts                # UseCase, Category, Tool types
public/
├── fonts/                      # TTF files for PDF font registration
│   ├── Inter-Regular.ttf
│   ├── Inter-Bold.ttf
│   ├── PlayfairDisplay-Regular.ttf
│   └── PlayfairDisplay-Bold.ttf
├── images/
│   └── allied-logo.png         # If used (or SVG inline)
└── og-image.png                # Open Graph social preview image
```

### Structure Rationale

- **`components/sections/`** — Mirrors the visual page order. Easy to find and reorder sections.
- **`components/animated/`** — All `"use client"` animation wrappers isolated here. Keeps server components clean. Import these only where animation is needed.
- **`components/pdf/`** — Completely separate from web components. @react-pdf/renderer uses its own layout primitives (`<View>`, `<Text>`) — no Tailwind, no HTML. Shares only the data layer.
- **`data/use-cases.ts`** — Single source of truth. Both web cards and PDF pages consume the same typed data.
- **`lib/utils.ts`** — The standard `cn()` utility for conditional Tailwind classes.
- **`public/fonts/`** — TTF files required by @react-pdf/renderer (can't use Google Fonts CDN in PDF).

---

## Architectural Patterns

### Pattern 1: Single-Page Scroll Architecture

**What:** One route (`/`), content organized in scrollable sections. No client-side routing.
**When to use:** Showcase/pitch sites where the entire story should unfold in sequence.
**Trade-offs:**
- Pro: One URL to share, no navigation bugs, works perfectly with scroll animations
- Pro: SSG generates a single HTML file — maximum performance
- Con: Can't deep-link to specific sections (unless using hash anchors)

**Implementation:**
```tsx
// src/app/page.tsx (Server Component)
import { useCases } from "@/data/use-cases";
import { Hero } from "@/components/sections/Hero";
import { QuickWins } from "@/components/sections/QuickWins";
import { MediumTerm } from "@/components/sections/MediumTerm";
import { Strategic } from "@/components/sections/Strategic";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const quickWins = useCases.filter(uc => uc.category === "quick-win");
  const mediumTerm = useCases.filter(uc => uc.category === "medium-term");
  const strategic = useCases.filter(uc => uc.category === "strategic");

  return (
    <main>
      <Hero />
      <QuickWins useCases={quickWins} />
      <MediumTerm useCases={mediumTerm} />
      <Strategic useCases={strategic} />
      <Footer />
    </main>
  );
}
```

### Pattern 2: Typed Data Model

**What:** Use cases defined as a typed TypeScript array in a single file. Both web and PDF components consume this.
**When to use:** When multiple presentation layers (web, PDF) need the same content.

```typescript
// src/types/index.ts
export type Category = "quick-win" | "medium-term" | "strategic";

export type Tool = {
  name: string;       // "OpenAI GPT-4"
  icon?: string;      // Optional icon identifier
};

export interface UseCase {
  id: number;
  title: string;                // "RAG-Powered Website Chatbot"
  subtitle: string;             // "24/7 lead capture from your existing content"
  description: string;          // 2-3 sentences
  category: Category;
  timelineLabel: string;        // "1-2 weeks" | "1-3 months" | "3-6 months"
  tools: Tool[];
  roi: {
    metric: string;             // "Lead response time"
    current: string;            // "4-24 hours"
    projected: string;          // "Instant (24/7)"
    impact: string;             // "3x more consultations booked"
  };
  processSteps: string[];       // ["Ingest website content", "Build knowledge base", ...]
  alliedSpecific: string;       // "Answers Carvestone questions instantly"
}
```

```typescript
// src/data/use-cases.ts
import { UseCase } from "@/types";

export const useCases: UseCase[] = [
  {
    id: 1,
    title: "RAG-Powered Website Chatbot",
    subtitle: "24/7 lead capture from your existing content",
    description: "An AI chatbot trained on Allied's website content...",
    category: "quick-win",
    timelineLabel: "1-2 weeks",
    tools: [
      { name: "OpenAI GPT-4" },
      { name: "LangChain" },
      { name: "Pinecone" },
    ],
    roi: {
      metric: "Lead response time",
      current: "4-24 hours",
      projected: "Instant (24/7)",
      impact: "3x more consultations booked",
    },
    processSteps: [
      "Ingest website content + Carvestone specs",
      "Build vector knowledge base",
      "Deploy chatbot on alliedoutdoorsolutions.com",
      "Auto-book consultations in CRM",
    ],
    alliedSpecific: "Answers Carvestone questions instantly — your biggest differentiator, explained 24/7.",
  },
  // ... 9 more use cases
];
```

### Pattern 3: Animation Wrapper Pattern

**What:** Thin `"use client"` wrapper components that add Motion animations around server-rendered content.
**When to use:** Next.js App Router where most components should be Server Components for performance.

```tsx
// src/components/animated/ScrollReveal.tsx
"use client";
import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

export function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

### Pattern 4: PDF as Parallel Component Tree

**What:** Completely separate component tree for PDF, sharing only the data layer.
**When to use:** When using @react-pdf/renderer, which has its own primitives incompatible with HTML/Tailwind.

```tsx
// Web: uses HTML + Tailwind
<div className="bg-white rounded-xl p-6 shadow-lg">
  <h3 className="text-xl font-bold">{useCase.title}</h3>
  <p className="text-gray-600">{useCase.description}</p>
</div>

// PDF: uses @react-pdf/renderer primitives
<View style={styles.card}>
  <Text style={styles.cardTitle}>{useCase.title}</Text>
  <Text style={styles.cardDescription}>{useCase.description}</Text>
</View>
```

---

## Data Flow

### Content Flow (Web)

```
use-cases.ts (static data)
    ↓
page.tsx (Server Component — filters by category)
    ↓
CategorySection (passes filtered array)
    ↓
StaggerGrid (Client — animates entrance)
    ↓
UseCaseCard (renders individual card)
```

### Content Flow (PDF)

```
use-cases.ts (same static data)
    ↓
DownloadButton (Client — dynamic import)
    ↓
PDFDocument (wraps pages)
    ↓
PDFCoverPage + PDFUseCasePage × 10
    ↓
Browser generates PDF blob → download
```

---

## Page Layout Architecture

### Desktop Layout (1280px+)

```
┌──────────────────────────────────────────────────┐
│                    HERO                            │
│  "Name the problem, I build the solution"         │
│  [Subtitle about Allied Outdoor Solutions]         │
│  [Download PDF button]                            │
├──────────────────────────────────────────────────┤
│              QUICK WINS (1-2 weeks)               │
│  ┌────────┐  ┌────────┐  ┌────────┐              │
│  │ Card 1 │  │ Card 2 │  │ Card 3 │              │
│  └────────┘  └────────┘  └────────┘              │
├──────────────────────────────────────────────────┤
│            MEDIUM-TERM (1-3 months)               │
│  ┌────────┐  ┌────────┐  ┌────────┐              │
│  │ Card 4 │  │ Card 5 │  │ Card 6 │              │
│  └────────┘  └────────┘  └────────┘              │
│              ┌────────┐                           │
│              │ Card 7 │                           │
│              └────────┘                           │
├──────────────────────────────────────────────────┤
│             STRATEGIC (3-6 months)                │
│  ┌────────┐  ┌────────┐  ┌────────┐              │
│  │ Card 8 │  │ Card 9 │  │Card 10 │              │
│  └────────┘  └────────┘  └────────┘              │
├──────────────────────────────────────────────────┤
│                   FOOTER                          │
│  [About Gerhard] [Contact] [CTA]                  │
└──────────────────────────────────────────────────┘
```

### Mobile Layout (< 768px)

- Full-width stacked cards (1 column)
- Hero text smaller, button stacked below
- PDF download as floating action button or prominent section

### Grid Strategy

```css
/* Tailwind classes */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

---

## Color & Theme Architecture

### Design Tokens (in globals.css)

```css
@theme {
  /* Allied-inspired earth tones */
  --color-brand-charcoal: #2d2d2d;
  --color-brand-gold: #c8a96e;
  --color-brand-cream: #faf8f5;
  --color-brand-stone: #8b7e6a;
  --color-brand-sage: #7a8b6f;

  /* Functional colors */
  --color-surface: #ffffff;
  --color-surface-alt: #f5f3f0;
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #6b6b6b;
  --color-text-muted: #9a9a9a;

  /* Category accent colors */
  --color-quick-win: #22c55e;      /* Green — fast, go */
  --color-medium-term: #3b82f6;    /* Blue — steady, reliable */
  --color-strategic: #8b5cf6;      /* Purple — vision, premium */

  /* Typography */
  --font-family-display: "Playfair Display", serif;
  --font-family-body: "Inter", sans-serif;
}
```

### Theme Rationale

- **Light base** — matches luxury outdoor living aesthetic (natural, airy)
- **Earth tones** — connects to outdoor/stone/landscape brand
- **Gold accent** — premium feel without being flashy
- **Serif display font** — luxury/editorial feel for headings
- **Sans-serif body** — clean readability for content
- **Category colors** — distinct, meaningful (green=quick, blue=medium, purple=strategic)

---

## Responsive Design Strategy

| Breakpoint | Layout | Cards | Notes |
|---|---|---|---|
| < 640px (sm) | Single column | 1 per row | Full-width cards, stacked |
| 640-767px (md) | Two columns | 2 per row | Compact cards |
| 768-1023px (lg) | Two columns | 2 per row | More spacing |
| 1024px+ (xl) | Three columns | 3 per row | Full showcase layout |

**Key responsive decisions:**
- Hero text scales: `text-3xl sm:text-4xl lg:text-5xl xl:text-6xl`
- Cards maintain minimum readable width (never squeeze below 280px)
- PDF download button: fixed bottom bar on mobile, inline on desktop
- Category section headers: full-width banners at all sizes

---

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---|---|---|
| Vercel | Git push → auto-deploy | Zero config for Next.js. SSG auto-detected. |
| Google Fonts | `next/font/google` | Zero-layout-shift loading. Inter + Playfair Display. |
| @react-pdf/renderer | Client-side only, dynamic import | Must use `ssr: false`. Font files in `/public/fonts/`. |

### Internal Boundaries

| Boundary | Communication | Notes |
|---|---|---|
| Server Components ↔ Client Components | Props (serializable data only) | No functions, no classes across boundary |
| Web Components ↔ PDF Components | Shared `use-cases.ts` data | No shared UI components — different rendering engines |
| Animation Layer ↔ Content | Wrapper pattern | Animation components wrap content, don't own it |

---

## Sources

### HIGH Confidence
- [Next.js App Router Project Structure](https://nextjs.org/docs/app/getting-started/project-structure) — Official docs
- [Next.js Static Exports Guide](https://nextjs.org/docs/app/guides/static-exports) — Official docs
- [Motion Documentation](https://motion.dev) — Official docs
- [Tailwind CSS v4 Installation](https://tailwindcss.com/docs/guides/nextjs) — Official docs

### MEDIUM Confidence
- Next.js community patterns for single-page scroll sites
- @react-pdf/renderer usage patterns from npm/GitHub

### LOW Confidence
- Specific card count per category (3/4/3 split assumed, may adjust based on final use case selection)

---
*Architecture research for: Interview showcase / AI strategy pitch website*
*Researched: 2026-02-09*
