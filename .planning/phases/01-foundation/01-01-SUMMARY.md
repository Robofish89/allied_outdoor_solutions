---
phase: 01-foundation
plan: 01
subsystem: infra
tags: [next.js, tailwind-v4, typescript, design-tokens, data-model]

# Dependency graph
requires:
  - phase: none
    provides: first phase, no dependencies
provides:
  - Next.js 15 project scaffolding with App Router
  - Allied brand design tokens (Tailwind CSS v4 @theme)
  - Typed UseCase/ProcessStep/CategorySection interfaces
  - All 10 Allied-specific use cases with content
  - Allied logo in public/
affects: [02-content-cards, 03-animations, 04-pdf-export, 05-polish-deploy]

# Tech tracking
tech-stack:
  added: [next.js 16.1.6, react 19.2.3, tailwindcss 4, typescript 5, eslint 9]
  patterns: [app-router, tailwind-v4-css-theme, system-fonts, typed-data-model]

key-files:
  created: [src/app/globals.css, src/app/layout.tsx, src/app/page.tsx, src/types/use-case.ts, src/data/use-cases.ts, public/allied-logo.svg, package.json, tsconfig.json, tailwind via globals.css @theme]
  modified: []

key-decisions:
  - "Tailwind CSS v4 with @theme inline instead of tailwind.config.ts — create-next-app scaffolds v4 natively"
  - "System fonts only (Georgia serif + system-ui sans) — no Google Fonts for fast loading"
  - "10 use cases split 3/4/3 across quick-win/medium-term/strategic categories"

patterns-established:
  - "Design tokens in globals.css @theme block (Tailwind v4 pattern)"
  - "Typed data model: UseCase interface with ProcessStep[] for animated visuals"
  - "Allied brand colors: navy (#0F2B46), cream (#F5F0EB), gold (#C4A35A), charcoal (#2D2D2D), slate (#64748B)"

# Metrics
duration: 6min
completed: 2026-02-10
---

# Phase 1 Plan 01: Foundation & Design System Summary

**Next.js 16.1.6 scaffolded with Tailwind v4 Allied design tokens, typed data model with all 10 Allied-specific AI use cases across 3 timeline categories**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-10T07:57:27Z
- **Completed:** 2026-02-10T08:03:05Z
- **Tasks:** 2
- **Files modified:** 20

## Accomplishments
- Next.js 16.1.6 project with App Router, TypeScript, Tailwind CSS v4, ESLint
- Allied brand design tokens configured via Tailwind v4 @theme inline (navy, cream, gold, charcoal, slate, white)
- System font stack (Georgia serif for headings, system-ui sans for body) for fast loading
- Typed data model with UseCase, ProcessStep, CategorySection interfaces
- All 10 AI use cases populated with Allied-specific content referencing Carvestone, 5 Texas markets, real competitors, and actual services

## Task Commits

Each task was committed atomically:

1. **Task 1: Scaffold Next.js 15 project with Allied design tokens** - `3af334f` (feat)
2. **Task 2: Create typed use case data model with all 10 use cases** - `8d81c5e` (feat)

## Files Created/Modified
- `package.json` - Next.js 16.1.6 project with React 19, Tailwind v4
- `tsconfig.json` - TypeScript config with path aliases
- `postcss.config.mjs` - PostCSS with @tailwindcss/postcss plugin
- `next.config.ts` - Next.js config (minimal)
- `eslint.config.mjs` - ESLint with next config
- `src/app/globals.css` - Allied design tokens via @theme, CSS custom properties, base styles
- `src/app/layout.tsx` - Root layout with Allied metadata
- `src/app/page.tsx` - Placeholder page with Allied navy background and serif heading
- `src/types/use-case.ts` - TypeScript interfaces (UseCase, ProcessStep, CategorySection, TimelineCategory)
- `src/data/use-cases.ts` - All 10 use cases with Allied-specific content + CATEGORY_SECTIONS
- `public/allied-logo.svg` - Allied Outdoor Solutions logo
- `.gitignore` - Next.js gitignore

## Decisions Made
- **Tailwind CSS v4 instead of v3**: `create-next-app@latest` now scaffolds Tailwind v4 which uses `@theme inline` in CSS rather than `tailwind.config.ts`. Adapted design token approach accordingly.
- **System fonts only**: Georgia for serif headings, system-ui stack for body. No Google Fonts dependency — keeps loading fast per project constraints.
- **Use case distribution**: 3 quick-win, 4 medium-term, 3 strategic — matching plan specification exactly.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Adapted to Tailwind CSS v4 configuration pattern**
- **Found during:** Task 1 (Project scaffolding)
- **Issue:** Plan specified `tailwind.config.ts` for design tokens, but `create-next-app@latest` now scaffolds Tailwind CSS v4 which uses CSS-based `@theme` blocks instead of JS config files
- **Fix:** Configured all Allied design tokens via `@theme inline` in `globals.css` instead of `tailwind.config.ts`. Same colors, fonts, and utilities — different configuration mechanism.
- **Files modified:** src/app/globals.css
- **Verification:** `npm run build` succeeds, all Tailwind classes using Allied tokens work correctly
- **Committed in:** 3af334f (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Necessary adaptation to current toolchain. No scope creep. All design tokens work identically.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Foundation complete: Next.js builds, design tokens work, data model is typed and complete
- Ready for 01-02-PLAN.md or Phase 2 content work
- All 10 use cases available for card components in Phase 2

---
*Phase: 01-foundation*
*Completed: 2026-02-10*
