---
phase: 04-pdf-export
plan: 01
subsystem: ui
tags: [react-pdf, pdf-generation, dynamic-import, usePDF]

# Dependency graph
requires:
  - phase: 02-content-cards
    provides: USE_CASES and CATEGORY_SECTIONS data model, UseCase types
provides:
  - Downloadable branded PDF with cover page + 10 use case cards
  - PDFDocument component for @react-pdf/renderer
  - PDFDownloadButton with client-only dynamic import pattern
affects: [05-polish-deploy]

# Tech tracking
tech-stack:
  added: ["@react-pdf/renderer"]
  patterns: ["Client-only dynamic import with ssr:false for PDF generation", "usePDF hook for blob URL generation"]

key-files:
  created:
    - src/components/pdf/PDFDocument.tsx
    - src/components/pdf/PDFDownloadButton.tsx
    - src/components/pdf/PDFButtonInner.tsx
  modified:
    - src/components/layout/Hero.tsx
    - package.json

key-decisions:
  - "Skipped esmExternals: 'loose' — not supported by Turbopack in Next.js 16; client-only dynamic import handles ESM compatibility"
  - "Split PDF button into outer (PDFDownloadButton) and inner (PDFButtonInner) components for clean ssr:false boundary"
  - "Used Libre Baskerville from Google Fonts CDN for PDF serif headings (system Georgia not available in PDF rendering)"

patterns-established:
  - "Client-only PDF pattern: dynamic(() => import(...), { ssr: false }) wrapping usePDF hook"

# Metrics
duration: 3min
completed: 2026-02-10
---

# Phase 4 Plan 1: PDF Export Summary

**Downloadable branded PDF with cover page, 3 category sections, and all 10 Allied AI use case cards via @react-pdf/renderer with client-only dynamic import**

## Performance

- **Duration:** 3 min
- **Started:** 2026-02-10T17:28:09Z
- **Completed:** 2026-02-10T17:31:20Z
- **Tasks:** 2 (+ 1 checkpoint skipped)
- **Files modified:** 5

## Accomplishments

- Installed @react-pdf/renderer and created full PDF document with navy cover page, gold accents, and Libre Baskerville serif headings
- Built all 10 use case cards in PDF format with title, timeline badge, description, Allied context, process flow dots, tools badges, and ROI box
- Created download button with loading/error/ready states, wired into Hero section above "Explore Solutions" arrow
- Build passes cleanly on Next.js 16 with Turbopack

## Task Commits

Each task was committed atomically:

1. **Task 1: Install @react-pdf/renderer and build PDF document component** - `fc84a18` (feat)
2. **Task 2: Create PDF download button and wire into site** - `ae808d6` (feat)

## Files Created/Modified

- `src/components/pdf/PDFDocument.tsx` - Full PDF document with cover page + 3 category sections + 10 use case cards
- `src/components/pdf/PDFDownloadButton.tsx` - Outer component with dynamic import (ssr: false) and loading placeholder
- `src/components/pdf/PDFButtonInner.tsx` - Inner component using usePDF hook for blob URL generation
- `src/components/layout/Hero.tsx` - Added PDFDownloadButton import and placement above bounce arrow
- `package.json` - Added @react-pdf/renderer dependency

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| Skipped esmExternals: "loose" config | Turbopack in Next.js 16 doesn't support it; client-only dynamic import handles ESM compatibility without it |
| Split button into outer/inner components | Clean SSR boundary — outer uses next/dynamic with ssr:false, inner uses usePDF hook that requires browser APIs |
| Libre Baskerville from Google Fonts CDN | System Georgia not available in PDF rendering; Libre Baskerville closest serif match registered via Font.register() |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Removed esmExternals: "loose" from next.config.ts**
- **Found during:** Task 1 (build verification)
- **Issue:** Plan specified adding `experimental: { esmExternals: 'loose' }` but Turbopack in Next.js 16 does not support this option and crashes with a fatal error
- **Fix:** Removed the config option entirely; @react-pdf/renderer works correctly when loaded client-only via dynamic import with ssr: false
- **Files modified:** next.config.ts (reverted to original)
- **Verification:** `npm run build` passes successfully
- **Committed in:** fc84a18 (part of Task 1 commit — config left unchanged)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Minimal — the esmExternals config was unnecessary given the client-only import strategy. No scope creep.

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- PDF export complete, ready for Phase 5 (Polish & Deploy)
- PDF generates client-side with no server dependencies
- Download button cleanly integrated into hero section layout
- No blockers for next phase

---
*Phase: 04-pdf-export*
*Completed: 2026-02-10*
