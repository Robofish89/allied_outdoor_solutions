# Requirements: Allied Outdoor Solutions — AI Strategy Showcase

**Defined:** 2026-02-10
**Core Value:** Convince Allied Outdoor Solutions leadership that hiring Gerhard means immediate, tangible AI-driven improvements to their business — from quick wins they'll see in weeks to transformative systems that compound over months.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Website Structure

- [x] **SITE-01**: Site is responsive and mobile-first (works on phone, tablet, desktop)
- [ ] **SITE-02**: Site loads in under 2 seconds on Vercel
- [x] **SITE-03**: Site uses luxury aesthetic (earth tones, generous whitespace, serif/sans-serif pairing)
- [ ] **SITE-04**: Hero section displays "Name the problem, I build the solution" messaging above the fold
- [x] **SITE-05**: Site is a single-page scroll with sections (Hero → Quick Wins → Medium-term → Strategic → Footer)
- [ ] **SITE-06**: Site is deployed on Vercel with clean custom URL
- [ ] **SITE-07**: Footer includes contact/CTA section for reaching Gerhard
- [ ] **SITE-08**: OG meta tags configured for social sharing preview

### Solution Cards

- [ ] **CARD-01**: Each of the 10 solutions displayed as a card with consistent structure
- [ ] **CARD-02**: Each card shows title, description, implementation tools/tech badges, ROI estimate, and timeline category badge
- [ ] **CARD-03**: Cards are organized into three sections: Quick Wins (1-2 weeks), Medium-term (1-3 months), Strategic (3-6 months)
- [ ] **CARD-04**: Each card includes Allied-specific references (Carvestone, their markets, competitors by name)
- [ ] **CARD-05**: Each card includes an animated process visual showing input → AI → output flow

### Animations

- [ ] **ANIM-01**: Cards have scroll-triggered entrance animations (staggered reveal)
- [ ] **ANIM-02**: Hero section has entrance animation
- [ ] **ANIM-03**: Animations are subtle and professional (not flashy or distracting)

### PDF Export

- [ ] **PDF-01**: User can download a PDF version of the showcase via a download button
- [ ] **PDF-02**: PDF has a professional layout matching brand aesthetic (not a browser print screenshot)
- [ ] **PDF-03**: PDF includes cover page and all 10 use case pages with content matching web version
- [ ] **PDF-04**: PDF download works correctly on Vercel deployment

### AI Use Cases (Content)

- [ ] **UC-01**: RAG-powered website chatbot — answers questions about Carvestone and services, books consultations, available 24/7 across all 5 markets
- [ ] **UC-02**: Internal sales assistant RAG — process/service knowledge base, new reps productive in days not months
- [ ] **UC-03**: AI-powered project status alerts — automatic delay detection, client communication triggers, multi-market coordination
- [ ] **UC-04**: Sales process automation — automatic follow-up sequences, consultation scheduling, proposal generation
- [ ] **UC-05**: Automated review solicitation — turn every completed project into 5-star Google reviews on autopilot
- [ ] **UC-06**: Contact list reengagement — research dormant CRM leads, find new opportunities from old contacts
- [ ] **UC-07**: Lead scoring & CRM enrichment — identify high-value leads (pool + outdoor kitchen combo vs. simple patio), prioritize across 5 markets
- [ ] **UC-08**: Competitor social media & ad research — analyze high-performing competitor content, know what they're promoting before launch
- [ ] **UC-09**: Lead gen via prospect scraping + personalized outreach — find homeowners in luxury neighborhoods with outdated outdoor spaces
- [ ] **UC-10**: AI Visual Project Estimator / "Backyard Vision" — homeowner uploads photo, AI generates Carvestone/pergola/kitchen concept overlay + rough estimate

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Enhanced Visuals

- **EVIS-01**: Interactive project estimator mockup (clickable demo)
- **EVIS-02**: Detailed implementation timeline/Gantt per solution
- **EVIS-03**: Integration architecture diagrams per solution

### Extended Content

- **ECNT-01**: Case studies from similar implementations
- **ECNT-02**: Cost analysis / TCO calculations per solution

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Working AI prototypes/demos | 24-48hr timeline; concept showcase only |
| Dark mode toggle | Doubles design work; pick one theme and nail it |
| Complex page transitions | Unreliable with Next.js App Router SSR; high risk |
| Video backgrounds | Slow loading, mobile issues, sourcing overhead |
| Interactive chatbot demo | Needs backend, API keys, error handling; outside scope |
| Multiple pages/routes | More pages = more things to break; single-page scroll |
| Blog/content section | Not the point; distracts from the 10 solutions |
| Actual implementation of any AI system | This is the pitch, not the build |

## Traceability

Which phases cover which requirements. Updated by create-roadmap.

| Requirement | Phase | Status |
|-------------|-------|--------|
| SITE-01 | Phase 1 | Complete |
| SITE-02 | Phase 5 | Pending |
| SITE-03 | Phase 1 | Complete |
| SITE-04 | Phase 2 | Pending |
| SITE-05 | Phase 1 | Complete |
| SITE-06 | Phase 5 | Pending |
| SITE-07 | Phase 2 | Pending |
| SITE-08 | Phase 5 | Pending |
| CARD-01 | Phase 2 | Pending |
| CARD-02 | Phase 2 | Pending |
| CARD-03 | Phase 2 | Pending |
| CARD-04 | Phase 2 | Pending |
| CARD-05 | Phase 3 | Pending |
| ANIM-01 | Phase 3 | Pending |
| ANIM-02 | Phase 3 | Pending |
| ANIM-03 | Phase 3 | Pending |
| PDF-01 | Phase 4 | Pending |
| PDF-02 | Phase 4 | Pending |
| PDF-03 | Phase 4 | Pending |
| PDF-04 | Phase 4 | Pending |
| UC-01 | Phase 2 | Pending |
| UC-02 | Phase 2 | Pending |
| UC-03 | Phase 2 | Pending |
| UC-04 | Phase 2 | Pending |
| UC-05 | Phase 2 | Pending |
| UC-06 | Phase 2 | Pending |
| UC-07 | Phase 2 | Pending |
| UC-08 | Phase 2 | Pending |
| UC-09 | Phase 2 | Pending |
| UC-10 | Phase 2 | Pending |

**Coverage:**
- v1 requirements: 30 total
- Mapped to phases: 30
- Unmapped: 0 ✓

---
*Requirements defined: 2026-02-10*
*Last updated: 2026-02-10 after Phase 1 completion*
