# Roadmap: Allied Outdoor Solutions — AI Strategy Showcase

## Overview

From empty repo to deployed showcase in 5 phases: scaffold the Next.js project with design tokens and data model, fill it with Allied-specific AI use case content, add scroll-triggered animations for polish, build a parallel PDF export, then verify everything works on mobile and Vercel. Content quality is the deliverable — everything else serves it.

## Domain Expertise

None

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [x] **Phase 1: Foundation & Design System** - Scaffolding, design tokens, typed data model, Vercel skeleton deploy
- [x] **Phase 2: Content & Cards** - All 10 use case cards with real Allied-specific content, hero section, categories
- [x] **Phase 3: Animations** - Scroll-triggered card entrances, staggered grid, hero animation
- [x] **Phase 4: PDF Export** - Downloadable PDF with cover page + 10 use case pages
- [ ] **Phase 5: Polish & Deploy** - Mobile verification, OG tags, performance, final Vercel deploy

## Phase Details

### Phase 1: Foundation & Design System
**Goal**: Working Next.js project deployed to Vercel (skeleton), design tokens in globals.css, typed data model for use cases, responsive single-page layout structure
**Depends on**: Nothing (first phase)
**Requirements**: SITE-01, SITE-03, SITE-05
**Research**: Unlikely (established Next.js + Tailwind patterns, research STACK.md has exact setup)
**Plans**: 2

Plans:
- [x] 01-01: Scaffold Next.js project with Allied design tokens and typed data model
- [x] 01-02: Build responsive single-page layout and deploy skeleton to Vercel

### Phase 2: Content & Cards
**Goal**: All 10 AI use case cards with real Allied-specific content (Carvestone, markets, competitors), hero messaging, category organization (Quick Win / Medium / Strategic), footer CTA
**Depends on**: Phase 1
**Requirements**: SITE-04, SITE-07, CARD-01, CARD-02, CARD-03, CARD-04, UC-01, UC-02, UC-03, UC-04, UC-05, UC-06, UC-07, UC-08, UC-09, UC-10
**Research**: Unlikely (content writing + standard component patterns)
**Plans**: 1

Plans:
- [x] 02-01: Build UseCaseCard component and wire all 10 cards into page

### Phase 3: Animations
**Goal**: Scroll-triggered staggered card entrances, hero entrance animation, animated process visuals on cards, all subtle and professional
**Depends on**: Phase 2
**Requirements**: CARD-05, ANIM-01, ANIM-02, ANIM-03
**Research**: Unlikely (Motion 12.x patterns documented in research)
**Plans**: 1

Plans:
- [x] 03-01: Install Motion, create animated wrappers, wire into Hero/cards/page

### Phase 4: PDF Export
**Goal**: Downloadable PDF via button click — cover page + 10 use case pages with professional layout matching brand aesthetic, working on Vercel
**Depends on**: Phase 2
**Requirements**: PDF-01, PDF-02, PDF-03, PDF-04
**Research**: Likely (non-trivial @react-pdf/renderer learning curve)
**Research topics**: Font registration, image handling, page breaks, dynamic import with ssr:false on Vercel, React 19 compatibility
**Plans**: TBD

Plans:
- [x] 04-01: Install @react-pdf/renderer, build PDF document and download button

### Phase 5: Polish & Deploy
**Goal**: Production-ready site — fast loading, mobile-verified, OG tags for sharing, clean Vercel URL, PDF confirmed working on deployment
**Depends on**: Phase 3, Phase 4
**Requirements**: SITE-02, SITE-06, SITE-08
**Research**: Unlikely (checklist-driven, no unknowns)
**Plans**: TBD

Plans:
- [ ] 05-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5
(Phases 3 and 4 can run in parallel — both depend on Phase 2, neither on each other)

| Phase | Plans Complete | Status | Completed |
|-------|---------------|--------|-----------|
| 1. Foundation & Design System | 2/2 | Complete | 2026-02-10 |
| 2. Content & Cards | 1/1 | Complete | 2026-02-10 |
| 3. Animations | 1/1 | Complete | 2026-02-10 |
| 4. PDF Export | 1/1 | Complete | 2026-02-10 |
| 5. Polish & Deploy | 0/TBD | Not started | - |
