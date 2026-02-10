# Allied Outdoor Solutions — AI Strategy Showcase

## What This Is

A polished, animated showcase website and downloadable PDF presenting the top 10 AI use cases for Allied Outdoor Solutions — a luxury outdoor living company in Texas. Built as the final deliverable for an AI & Marketing Automation Specialist interview, demonstrating both strategic thinking and hands-on execution capability. Deployed at alliedoutdoorsolutions.vercel.app.

## Core Value

Convince Allied Outdoor Solutions leadership that hiring Gerhard means immediate, tangible AI-driven improvements to their business — from quick wins they'll see in weeks to transformative systems that compound over months.

## Requirements

### Validated

- ✓ Research Allied Outdoor Solutions deeply (services, markets, competitors, online presence, pain points) — v1.0
- ✓ Identify and finalize 10 AI use cases — mix of quick wins (days/weeks to deploy) and long-term plays (months) — v1.0
- ✓ Build animated showcase website with Next.js + Tailwind, deployed on Vercel — v1.0
- ✓ Each solution card shows: what it does, animated process visual, specific tech stack/tools, estimated ROI, timeline category — v1.0
- ✓ Exportable PDF version of the showcase (same content, print-friendly format) — v1.0
- ✓ Create GitHub repo and deploy pipeline to Vercel — v1.0
- ✓ Hero messaging: "Name the problem, I build the solution" positioning — v1.0
- ✓ Solutions categorized as: Quick Wins (1-2 weeks), Medium-term (1-3 months), Strategic (3-6 months) — v1.0
- ✓ Each solution specifies implementation approach with real tools (OpenAI, LangChain, Apify, n8n, Make, Pinecone, etc.) — v1.0
- ✓ Include ROI estimates for each solution (time saved, revenue potential, cost reduction) — v1.0

### Active

(None — project complete)

### Out of Scope

- Working prototypes or live demos — concept showcase only, timeline too tight
- Actual implementation of any AI system — this is the pitch, not the build
- Internal company data or proprietary information — all based on public research
- Complex backend systems — static/SSG site with animations only

## Context

Shipped v1.0 with 1,394 LOC TypeScript/CSS across 53 files.
Tech stack: Next.js 16, React 19, Tailwind CSS v4, Motion 12, @react-pdf/renderer.
Deployed to Vercel at alliedoutdoorsolutions.vercel.app with 1.28s load time.
Dynamic OG image for social sharing. PDF download via client-side generation.

**The Company:** Allied Outdoor Solutions — luxury outdoor living (patios, pergolas, outdoor kitchens, fire features, pools, landscaping). Operates in Austin, Dallas, Fort Worth, Houston, and San Antonio. High-ticket residential projects.

**The Interview:** Gerhard is interviewing for AI & Marketing Automation Specialist. This is the final task after 2 interviews — "come up with your top 10 AI use cases without knowing anything about the company." The deliverable IS the differentiator.

## Constraints

- **Timeline**: 24-48 hours to research, build, and deploy — speed over perfection
- **Tech Stack (website)**: Next.js + Tailwind CSS + Motion — deployed on Vercel
- **No Demos**: Animated concept showcases and mockups only — no working AI prototypes
- **Public Info Only**: All research from publicly available sources (website, social media, reviews)
- **Tone**: Strategic advisor who also builds — authoritative but practical, not salesy

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static showcase site, no working demos | 24-48hr timeline; concept clarity > half-built prototypes | ✓ Good |
| Next.js + Tailwind + Motion | Fast to build, great animations, Vercel-native deployment | ✓ Good |
| Website + PDF dual deliverable | Website for wow factor, PDF for internal circulation at Allied | ✓ Good |
| Include ROI estimates per solution | Shows business thinking, not just tech thinking | ✓ Good |
| Mix quick wins + long-term plays | Demonstrates immediate value AND strategic vision | ✓ Good |
| Research company first, then finalize use cases | Use cases should address real pain points, not generic AI hype | ✓ Good |
| Tailwind CSS v4 @theme inline | create-next-app scaffolds v4 natively, no config file needed | ✓ Good |
| System fonts (Georgia + system-ui) | Fast loading, no Google Fonts dependency for web | ✓ Good |
| Single-column card layout | Cards are content-heavy; grid would cramp readability | ✓ Good |
| Motion 12 via motion/react | SSR-safe, not legacy framer-motion | ✓ Good |
| Client-only dynamic import for PDF | Turbopack compatibility, no esmExternals workaround needed | ✓ Good |
| Libre Baskerville for PDF headings | System Georgia unavailable in PDF rendering | ✓ Good |
| File-based opengraph-image.tsx | Dynamic generation, no static asset to maintain | ✓ Good |

---
*Last updated: 2026-02-11 after v1.0 milestone*
