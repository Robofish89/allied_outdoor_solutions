# Project Research Summary

**Project:** Allied Outdoor Solutions — AI Strategy Showcase
**Domain:** Interview showcase website (animated pitch site with PDF export)
**Researched:** 2026-02-09
**Confidence:** HIGH

---

## Executive Summary

This project is a polished, animated single-page showcase website presenting 10 AI use cases for Allied Outdoor Solutions — a luxury outdoor living company operating across 5 major Texas metros. The site serves as Gerhard's final interview deliverable for an AI & Marketing Automation Specialist role, accompanied by a downloadable PDF version for internal circulation.

The recommended approach is a Next.js 15.5 App Router site with Tailwind CSS v4 + Motion (formerly Framer Motion) deployed on Vercel, using a single-page scroll architecture with staggered card animations. The PDF export uses @react-pdf/renderer as a parallel component tree consuming the same typed data. The entire build is scoped to 24-48 hours with aggressive timeboxing — content quality matters far more than technical sophistication.

The single biggest risk is spending too long on architecture/animations and running out of time for content and testing. Allied's leadership will judge on: (1) Does this person understand our business? (2) Are these AI ideas specific and practical? (3) Does this feel premium? Technical execution is secondary — the site exists to showcase strategic thinking.

---

## Key Findings

### Recommended Stack

Next.js 15.5.x (App Router) + React 19 + Tailwind CSS v4.1 + Motion 12.x + TypeScript, deployed on Vercel. PDF via @react-pdf/renderer 4.3.x (client-side, dynamic import with `ssr: false`).

**Core technologies:**
- **Next.js 15.5.x (App Router):** Mature, Vercel-native, SSG auto-detected. Avoid Next.js 16 for stability.
- **Tailwind CSS v4.1:** CSS-first config via `@theme` in globals.css. No tailwind.config.js needed.
- **Motion 12.x:** Rebranded from Framer Motion. Import from `motion/react`. Staggered cards, scroll reveals.
- **@react-pdf/renderer 4.3.x:** React 19 compatible. Vector PDFs with searchable text. Requires separate component tree.

### Expected Features

**Must have (table stakes):**
- 10 solution cards with title, description, tools, ROI, timeline category
- Responsive design (mobile-first — executives will view on phone)
- PDF download button that actually works on Vercel
- Clean, luxury aesthetic matching outdoor living brand
- Allied-specific references (Carvestone, their 5 markets, competitors)

**Should have (differentiators):**
- Scroll-triggered staggered card animations
- ROI estimates with specific numbers per solution
- Category organization (Quick Win / Medium-term / Strategic)
- Company-specific research visible in each card

**Defer (not for this build):**
- Working AI prototypes or demos
- Dark mode toggle
- Complex page transitions
- Video backgrounds

### Architecture Approach

Single-page scroll architecture with one route (`/`). Content organized in sections: Hero → Quick Wins → Medium-term → Strategic → Footer. Static data in `data/use-cases.ts` consumed by both web components and PDF components. Animation wrappers isolated in `components/animated/` with `"use client"` directives.

**Major components:**
1. **Data Layer** (`data/use-cases.ts`) — Single source of truth for all 10 use cases, typed
2. **Web Presentation** (`components/sections/`, `components/cards/`) — Server + Client components
3. **Animation Layer** (`components/animated/`) — Motion wrappers for scroll reveals and stagger
4. **PDF Export** (`components/pdf/`) — Parallel component tree using @react-pdf/renderer primitives

### Critical Pitfalls

1. **Over-engineering under deadline** — The #1 risk. Content-first, polish second. Timebox ruthlessly.
2. **Generic AI buzzwords** — Lead with business outcomes for Allied, not tech jargon. Reference Carvestone, their markets, their competitors by name.
3. **Motion SSR hydration mismatch** — Always use `"use client"`, `initial={{ opacity: 0 }}` pattern.
4. **PDF breaks on Vercel** — Dynamic import with `ssr: false` is mandatory. Test on Vercel preview URL before sharing.
5. **Cheap/generic design** — Generous whitespace, earth tones, serif/sans-serif pairing. Luxury = restraint.

---

## Allied Outdoor Solutions — Key Business Intel

**Proprietary Product:** Carvestone — decorative limestone + quartz overlay, 5,800 PSI (vs. 3,000 for standard concrete), hand-crafted, only Allied offers it. This is their biggest differentiator.

**Markets:** Austin, Dallas, Fort Worth, Houston, San Antonio.

**Competitors:** Heavenly Outdoors (Houston), Texas Pools & Patios (Austin/SA), TCP Custom Outdoor Living (Houston/DFW), Texas Outdoor Oasis (DFW), Cody Pools (multi-state).

**Suggested Use Case #10:** AI Visual Project Estimator / "Backyard Vision" — homeowner uploads photo, AI generates concept visualization with Carvestone/pergola/kitchen + rough estimate. Ties directly to their proprietary product.

---

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation & Design System
**Rationale:** Everything depends on project scaffolding, design tokens, and the data model. Get this right first.
**Delivers:** Working Next.js project deployed to Vercel (skeleton), design tokens in globals.css, typed data model, `cn()` utility, basic page structure.
**Addresses:** Responsive layout (FEATURES), design tokens (ARCHITECTURE)
**Avoids:** Over-engineering (PITFALLS #5), cheap design (PITFALLS #6)

### Phase 2: Content & Cards
**Rationale:** Content is the deliverable. Cards with real text, ROI, and Allied-specific references must be complete before any polish.
**Delivers:** All 10 use case cards with real content, organized by category (Quick Win / Medium / Strategic), hero section with messaging.
**Addresses:** Table stakes features (FEATURES), business-specific content (PITFALLS #3)
**Uses:** Typed data model from Phase 1 (ARCHITECTURE)

### Phase 3: Animations & Interactions
**Rationale:** Animations add polish but only if content is finalized. Adding Motion wrappers to existing cards is fast if the wrapper pattern is established.
**Delivers:** Scroll-triggered card entrances, staggered grid, hero animation, subtle hover effects.
**Addresses:** Differentiator features (FEATURES), animation wrapper pattern (ARCHITECTURE)
**Avoids:** Animation annoyance (PITFALLS #7), SSR hydration (PITFALLS #1)

### Phase 4: PDF Export
**Rationale:** PDF is a required deliverable but depends on finalized content. Build parallel component tree consuming same data.
**Delivers:** Downloadable PDF with cover page + 10 use case pages, matching brand aesthetic.
**Addresses:** PDF download feature (FEATURES), PDF architecture (ARCHITECTURE)
**Avoids:** PDF Vercel failures (PITFALLS #2)

### Phase 5: Polish & Deploy
**Rationale:** Final testing, mobile verification, Lighthouse check, OG tags, spelling review.
**Delivers:** Production-ready site on Vercel with clean URL, verified on mobile, PDF confirmed working.
**Addresses:** "Looks done but isn't" checklist (PITFALLS), mobile responsiveness (PITFALLS #4)
**Avoids:** Not testing on Vercel (PITFALLS #8)

### Phase Ordering Rationale

- **Foundation first** because everything depends on scaffolding and design tokens — wrong design tokens cascade through every component
- **Content before animation** because animations wrap content — building animated empty cards is wasted effort
- **PDF after content** because PDF consumes the same data — no point building PDF template until content is finalized
- **Polish last** because it requires everything else to be in place for meaningful testing
- **Deploy early, deploy often** — push to Vercel after Phase 1, test after every subsequent phase

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 4 (PDF):** @react-pdf/renderer has a non-trivial learning curve. May need phase-specific research on font registration, image handling, page breaks.

Phases with standard patterns (skip research-phase):
- **Phase 1 (Foundation):** Well-documented Next.js + Tailwind patterns. STACK.md has exact commands.
- **Phase 2 (Content):** Content writing, not technical. No research needed.
- **Phase 3 (Animations):** STACK.md has exact Motion patterns with code examples.
- **Phase 5 (Polish):** Checklist-driven, no research needed.

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Verified with official docs: Next.js 15.5, Tailwind v4, Motion 12.x, @react-pdf/renderer 4.3.x all confirmed compatible |
| Features | HIGH | Based on Allied's actual website, competitor research, and luxury web design best practices |
| Architecture | HIGH | Standard Next.js App Router patterns, well-documented single-page scroll architecture |
| Pitfalls | HIGH | SSR hydration, PDF export, and mobile responsiveness are well-documented failure modes |

**Overall confidence:** HIGH

### Gaps to Address

- **Allied's exact CRM and current tech stack:** Unknown — use cases should be tool-agnostic enough to adapt
- **Exact card count per category:** Suggested 3/4/3 split (Quick Win/Medium/Strategic) but may adjust after finalizing use case #10
- **PDF font rendering quality:** @react-pdf/renderer font registration needs testing — font files must be in /public/fonts/
- **Motion 12.x specific API changes:** Verify `motion/react` import path works with Next.js 15.5 (should, based on docs)

---

## Sources

### Primary (HIGH confidence)
- Allied Outdoor Solutions website — services, Carvestone, locations
- Next.js 15.5 official docs — App Router, static exports, project structure
- Tailwind CSS v4 official docs — CSS-first configuration, Next.js integration
- Motion official docs — React integration, stagger API
- @react-pdf/renderer npm registry — v4.3.2, React 19 compatibility

### Secondary (MEDIUM confidence)
- Competitor websites (Cody Pools, TCP, Texas Pools & Patios, Heavenly Outdoors)
- Luxury web design best practices (CXL, HubSpot, 99designs)
- PDF library comparisons (dev.to, nutrient.io)
- Animation best practices (Framer vs GSAP comparisons)

### Tertiary (LOW confidence)
- Allied's internal pain points (inferred from business model)
- Specific competitor market positioning (inferred from public web presence)

---
*Research completed: 2026-02-09*
*Ready for roadmap: yes*
