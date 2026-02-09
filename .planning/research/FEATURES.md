# Feature Research

**Domain:** Interview showcase / AI strategy pitch website
**Researched:** 2026-02-09
**Confidence:** HIGH

---

## Allied Outdoor Solutions — Company Research

### Company Profile

**Name:** Allied Outdoor Solutions
**Domain:** Luxury outdoor living — patios, pergolas, outdoor kitchens, fire features, pools, landscaping, concrete overlays
**Markets:** Austin, Dallas, Fort Worth, Houston, San Antonio (all major Texas metros)
**Target Customer:** High-income homeowners wanting luxury outdoor spaces
**Website:** alliedoutdoorsolutions.com

### Services Offered

1. **Carvestone** (PROPRIETARY — key differentiator)
   - Decorative limestone and quartz overlay surface
   - Only Allied offers this product
   - Rated at 5,800 PSI (vs. standard concrete at 3,000 PSI)
   - Can overlay existing concrete, pea gravel, pool coping, decorative concrete
   - Each stone hand-troweled, carved, colored, and grouted
   - Sealed for UV/weather protection
   - Available across all 5 Texas markets

2. **Patios & Pool Decks** — concrete patios, overlays
3. **Pergolas & Patio Covers**
4. **Outdoor Kitchens**
5. **Fire Features**
6. **Pools**
7. **Landscaping**

### Competitor Landscape

| Competitor | Markets | Differentiator |
|---|---|---|
| Heavenly Outdoors | Houston | Voted Top 3 nationally for million-dollar pool design. Since 2003. |
| Texas Pools & Patios | Austin, San Antonio | Award-winning, 3rd generation, thousands of projects since 2006. |
| TCP Custom Outdoor Living | Houston, Dallas-Fort Worth | 3,000+ projects, started as Texas Custom Patios in 2009. |
| Texas Outdoor Oasis | Dallas-Fort Worth (Wylie, TX) | Custom pools, patio covers, landscaping. |
| Cody Pools | Houston, Austin, San Antonio, Phoenix, Tampa | Multi-state operation, high volume. |

### Key Insight for AI Use Cases

Allied's differentiators are:
- **Carvestone** — proprietary product, no competitor has this
- **Multi-market presence** — 5 major Texas metros
- **High-ticket residential** — luxury segment, long sales cycles
- **Consultative sales** — in-home consultations, design process

Pain points likely include:
- Long sales cycles with high-value leads going cold
- Coordinating across 5 markets
- Manual follow-up processes
- Reputation management across multiple metro areas
- Competitive pressure from well-established local players
- Showcasing Carvestone's unique value vs. commodity alternatives

---

## Feature Landscape

### Table Stakes (Users Expect These)

Features the showcase website MUST have to feel professional.

| Feature | Why Expected | Complexity | Notes |
|---|---|---|---|
| Responsive design (mobile-first) | Executives will likely view on phone first | MEDIUM | Tailwind handles this well. Test on actual devices. |
| Fast load time (<2s) | Slow = amateur. First impression is speed. | LOW | SSG on Vercel is inherently fast. |
| Clean, luxury aesthetic | Must match Allied's brand positioning | MEDIUM | Earth tones, generous whitespace, serif/sans-serif pairing. |
| Clear hero messaging | "Name the problem, I build the solution" | LOW | One sentence above the fold. No walls of text. |
| 10 solution cards with clear structure | The core deliverable — each card needs: what, how, ROI, timeline | MEDIUM | Consistent card design with category badges. |
| PDF download button | Explicitly required. For internal circulation. | MEDIUM | @react-pdf/renderer or html2canvas+jsPDF. |
| Working deployment (no broken links/images) | Broken anything = instant credibility loss | LOW | Test thoroughly on Vercel before sharing. |
| Contact/CTA section | They need to know how to reach Gerhard | LOW | Simple footer or end section. |

### Differentiators (What Will Make This Stand Out)

Features that separate this from a typical pitch deck or PDF.

| Feature | Value Proposition | Complexity | Notes |
|---|---|---|---|
| Scroll-triggered card animations | Shows technical execution capability, not just strategy | MEDIUM | Motion (Framer Motion) stagger + scroll reveal. Subtle, not flashy. |
| Category-based organization (Quick Win / Medium / Strategic) | Shows business thinking — not just "here are 10 ideas" | LOW | Section headers with visual timeline/roadmap feel. |
| ROI estimates per solution | Shows business impact thinking, not just tech enthusiasm | LOW | Time saved, revenue potential, cost reduction. Specific numbers. |
| Implementation tech stack per solution | Proves these aren't hypothetical — "I know exactly how to build this" | LOW | Badges showing OpenAI, LangChain, n8n, Apify, etc. |
| Company-specific research visible | Shows Gerhard actually researched Allied, not generic AI pitch | LOW | Reference Carvestone, their markets, their competitors by name. |
| Animated process visuals per card | Visual > text for explaining AI workflows to non-technical audience | HIGH | Simple flow diagrams showing input → AI → output. |
| Professional PDF that matches web quality | PDF for internal sharing proves attention to detail | MEDIUM | Must not look like a browser print screenshot. |
| Custom domain or polished URL | gerhard-allied-ai.vercel.app > random-hash.vercel.app | LOW | Set up in Vercel project settings. |

### Anti-Features (Skip These)

| Feature | Why Tempting | Why Problematic | Alternative |
|---|---|---|---|
| Working AI demo/prototype | "Show, don't tell" instinct | 24-48hr timeline makes quality impossible. Half-working demo = worse than no demo. | Animated mockup showing the concept. More impressive than a buggy prototype. |
| Dark mode toggle | Seems polished/modern | Doubles design work. Pick one theme and nail it. | Single cohesive theme (light with dark accents matches luxury outdoor aesthetic). |
| Complex page transitions | "Wow factor" | Unreliable with Next.js App Router SSR. High risk of flicker/bugs. Time sink. | Subtle scroll-triggered reveals. Same impact, 10x easier. |
| Video backgrounds | Luxury feel | Slow loading, mobile issues, requires sourcing/editing video. | High-quality static gradients or subtle CSS animations. |
| Interactive chatbot demo | Shows RAG capability | Needs backend, API keys, error handling. Way outside 24-48hr scope. | Animated mockup of chatbot interface with sample conversation. |
| Multiple pages/routes | "Full website" feel | More pages = more things to break. Splits attention. | Single-page scroll with sections. One URL to share. |
| Blog/content section | Shows thought leadership | Not the point of this deliverable. Distracts from the 10 use cases. | Focus entirely on the 10 solutions. |

---

## AI Use Case Validation

Reviewing the 10 proposed use cases against Allied's actual business.

| # | Use Case | Relevance to Allied | Leadership Would Care? | Refinement |
|---|---|---|---|---|
| 1 | RAG-powered website chatbot | HIGH — Their site has lots of service pages. Chatbot could answer "what is Carvestone?" and book consultations. | YES — Direct lead capture. | Emphasize: answers questions about Carvestone (proprietary), books consultations, available 24/7 across all 5 markets. |
| 2 | Internal sales assistant RAG | HIGH — Sales team needs to know Carvestone specs, installation process, pricing across markets. | YES — Faster onboarding, consistent info. | Frame as: "New sales rep productive in days, not months." |
| 3 | Project management dashboard with AI | MEDIUM — Relevant for multi-market coordination but less exciting for C-suite. | MAYBE — Depends on current pain. | Reframe as: "AI-powered project status alerts" — automatic delay detection, client communication triggers. |
| 4 | Sales process automation | HIGH — High-ticket sales with long cycles = lots of manual follow-up. | YES — Revenue impact. | Emphasize: automatic follow-up sequences, consultation scheduling, proposal generation. |
| 5 | Automated follow-up + review solicitation | HIGH — Reviews are critical in home services. Google reviews drive local SEO. | YES — Direct reputation impact. | Frame as: "Turn every completed project into 5-star reviews on autopilot." |
| 6 | Contact list reengagement | HIGH — Old leads in a CRM that went cold. In home services, people delay 1-2 years. | YES — Revenue from existing data. | Frame as: "Your CRM has $X million in dormant leads. Wake them up." |
| 7 | Lead scoring & CRM enrichment | HIGH — They get inquiries across 5 markets, need to prioritize. | YES — Efficiency. | Emphasize: identify high-value leads (pool + outdoor kitchen combo vs. simple patio). |
| 8 | Competitor social media & ad research | MEDIUM — Useful but not immediately revenue-driving. | MAYBE — More interesting to marketing team than C-suite. | Reframe as: "Know what competitors are promoting before they launch." |
| 9 | Lead gen via scraping + outreach | HIGH — New construction permits, home purchases in luxury neighborhoods. | YES — New pipeline. | Frame as: "Find homeowners in luxury neighborhoods who just bought homes with outdated outdoor spaces." |
| 10 | TBD | — | — | Suggest: **AI-powered visual project estimator** — homeowner uploads photo of backyard, AI generates concept overlay showing Carvestone/pergola/kitchen + rough estimate. This is the "wow" use case that ties directly to their proprietary Carvestone product. |

### Recommended Use Case #10

**AI Visual Project Estimator / "Backyard Vision" Tool**
- Homeowner uploads photo of their backyard
- AI generates a concept visualization showing Carvestone overlay, pergola, outdoor kitchen
- Rough estimate range provided
- Books consultation automatically
- This is the highest-wow use case because it's visual, tied to their proprietary product, and directly drives leads

---

## Feature Dependencies

```
[Responsive Layout]
    └──requires──> [Design System / Color Tokens]

[Solution Cards]
    └──requires──> [Use Case Data Model]
    └──requires──> [Design System]

[Scroll Animations]
    └──requires──> [Solution Cards built first]
    └──enhances──> [Hero Section]

[PDF Export]
    └──requires──> [Use Case Data Model]
    └──requires──> [Separate PDF Component Tree]

[Category Organization]
    └──enhances──> [Solution Cards]
```

### Dependency Notes

- **Solution Cards require Data Model:** Define use case data structure first (title, description, tools, ROI, timeline, category). Everything else consumes this.
- **PDF requires separate component tree:** @react-pdf/renderer can't reuse Tailwind components. Plan for this duplication.
- **Animations require cards first:** Build static cards, then add Motion wrappers. Don't animate during construction.

---

## MVP Definition

### Launch With (The Interview Deliverable)

- [x] Hero section with "Name the problem, I build the solution" messaging
- [x] 10 solution cards organized by Quick Win / Medium-term / Strategic
- [x] Each card: title, description, tools/tech, ROI estimate, timeline badge
- [x] Scroll-triggered entrance animations (subtle, professional)
- [x] PDF download button (even if PDF is simpler than web version)
- [x] Responsive design (desktop + mobile)
- [x] Deployed on Vercel with clean URL
- [x] Allied-specific references (Carvestone, their markets, their competitors)

### Future Consideration (If Hired)

- [ ] Interactive project estimator mockup
- [ ] Detailed implementation timeline/Gantt per solution
- [ ] Case studies from similar implementations
- [ ] Cost analysis / TCO calculations
- [ ] Integration architecture diagrams per solution

---

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---|---|---|---|
| 10 Solution Cards with content | HIGH | MEDIUM | P1 |
| Hero section | HIGH | LOW | P1 |
| Category organization | HIGH | LOW | P1 |
| Responsive design | HIGH | LOW | P1 |
| ROI estimates per card | HIGH | LOW | P1 |
| Scroll animations | MEDIUM | MEDIUM | P1 |
| PDF download | HIGH | MEDIUM | P1 |
| Allied-specific research references | HIGH | LOW | P1 |
| Animated process visuals per card | MEDIUM | HIGH | P2 |
| Custom Vercel URL | LOW | LOW | P2 |
| OG meta tags for social sharing | LOW | LOW | P2 |

**Priority key:**
- P1: Must have for interview delivery
- P2: Add if time permits, nice polish

---

## Sources

### HIGH Confidence
- Allied Outdoor Solutions website (alliedoutdoorsolutions.com) — services, Carvestone details, locations
- Carvestone product page — proprietary product specs (5,800 PSI, limestone + quartz)
- Competitor websites (codypools.com, texascustompatios.com, texaspoolsandpatios.com, heavenlyoutdoor.com)

### MEDIUM Confidence
- Web animation best practices surveys (Framer vs GSAP comparisons, 2025 guides)
- Luxury web design best practices (HubSpot, CXL, 99designs)
- PDF generation library comparisons (dev.to, nutrient.io)

### LOW Confidence
- Specific competitor market share / revenue estimates (inferred from public presence)
- Allied's internal pain points (inferred from business model, not confirmed)

---
*Feature research for: Interview showcase / AI strategy pitch website*
*Researched: 2026-02-09*
