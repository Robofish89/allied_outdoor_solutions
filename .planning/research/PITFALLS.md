# Pitfalls Research

**Domain:** Interview showcase / AI strategy pitch website
**Researched:** 2026-02-09
**Confidence:** HIGH

---

## Critical Pitfalls

### Pitfall 1: Motion/Framer Motion SSR Hydration Mismatch

**What goes wrong:**
Animations flash, flicker, or elements jump on first page load. Motion components render differently on server vs. client, causing React hydration errors. SVG transforms are omitted in SSR and then added on client, causing visible jumps.

**Why it happens:**
Motion relies on browser APIs (window, requestAnimationFrame) unavailable during SSR. Next.js App Router server-renders by default — Motion components produce different HTML on server vs. client.

**How to avoid:**
- ALWAYS add `"use client"` directive to any file using Motion components
- Create thin wrapper components in `components/animated/` — keep animation logic isolated
- Use `initial={{ opacity: 0 }}` so invisible on server → animates in on client (no flash)
- For critical above-fold content: consider skipping animation or using CSS-only

**Warning signs:**
- Console warning: "Hydration failed because initial UI does not match server"
- Elements visible briefly then disappear and re-animate
- Layout jumps on first load

**Phase to address:** Phase 1 (Foundation) — establish animation wrapper pattern from the start.

---

### Pitfall 2: PDF Export Fails Silently on Vercel

**What goes wrong:**
PDF generation works in local dev but breaks on production. PDFDownloadLink renders as a dead button. Or the click does nothing. No error shown to user.

**Why it happens:**
- @react-pdf/renderer components imported without `ssr: false` crash during SSR
- Font files not accessible at the correct path in production
- The PDF generation happens client-side — if the component fails to mount, no PDF is generated
- `dynamic import` forgotten or misconfigured

**How to avoid:**
```tsx
// ALWAYS use dynamic import with ssr: false
const DownloadButton = dynamic(
  () => import("@/components/pdf/DownloadButton"),
  { ssr: false, loading: () => <span>Loading...</span> }
);
```
- Place font .ttf files in `/public/fonts/` and use absolute URLs
- Test PDF download on Vercel preview deployment BEFORE sharing
- Add a loading state so user knows PDF is being generated
- Have html2canvas+jsPDF as an emergency fallback

**Warning signs:**
- PDF button renders but nothing happens on click
- "window is not defined" error in build logs
- Build succeeds but component doesn't mount in production

**Phase to address:** Phase 2 (Content & PDF) — test PDF on Vercel immediately after implementing.

---

### Pitfall 3: Generic "AI Buzzword" Content That Bores Executives

**What goes wrong:**
The showcase reads like a generic "AI can do everything" pitch. Leadership sees it as hype, not a serious business proposal. No connection to Allied's specific business.

**Why it happens:**
Developer instinct is to lead with technology ("We'll use RAG with LangChain and Pinecone..."). Executives care about business outcomes, not tech stacks.

**How to avoid:**
- Lead every card with the BUSINESS OUTCOME: "3x more consultations booked"
- Reference Allied specifically: "Your Carvestone product information, available 24/7"
- Use their language: "leads", "consultations", "reviews", "close rate"
- Tech stack is secondary — show it as proof of feasibility, not the headline
- Include specific numbers: "$X saved per month", "Y hours freed up per week"
- Reference their competitors: "While Texas Custom Patios does X manually..."

**Warning signs:**
- Card descriptions start with "Using OpenAI..." instead of "Imagine if..."
- No Allied-specific references
- ROI section says "improved efficiency" instead of specific metrics

**Phase to address:** Phase 2 (Content) — review all copy through executive lens before deploying.

---

### Pitfall 4: Site Looks Terrible on Mobile

**What goes wrong:**
Presentation is viewed on a phone (common for busy executives), and cards are squished, text overflows, animations stutter, PDF button is unreachable.

**Why it happens:**
Building on a large monitor, testing only in desktop viewport. Animation performance differs drastically on mobile. Card grid doesn't collapse properly.

**How to avoid:**
- Build mobile-first with Tailwind (`text-base md:text-lg lg:text-xl`)
- Test on actual phone, not just browser responsive mode
- Use Chrome DevTools throttling (4x CPU slowdown) to test animation performance
- Reduce motion on mobile: simpler animations, no parallax
- Ensure PDF button is accessible without scrolling to the bottom
- Test with `prefers-reduced-motion` media query

**Warning signs:**
- Cards wider than viewport (horizontal scroll)
- Text smaller than 14px on mobile
- Animations janky when scrolling on phone
- PDF button hidden below fold on mobile

**Phase to address:** Phase 3 (Polish) — but build with mobile classes from the start.

---

### Pitfall 5: Over-Engineering Under 24-48hr Deadline

**What goes wrong:**
Spending 6 hours on a perfect component architecture, custom design system, or animation library when a simple implementation would've been done in 2 hours. Running out of time with half the content unfinished.

**Why it happens:**
Developer instinct to "do it right." Premature abstraction. Building reusable systems for a one-off project.

**How to avoid:**
- **Content first, polish second.** Get all 10 cards rendering with real text before any animation.
- **No custom design system.** Use Tailwind utilities directly.
- **No component library.** Build exactly the components you need, nothing more.
- **Timebox ruthlessly:** Foundation (2hr) → Content (4hr) → Animations (2hr) → PDF (3hr) → Deploy & Test (2hr) → Polish (remaining time)
- **"Good enough" is the goal.** A polished 80% beats an unfinished 100%.

**Warning signs:**
- Building an `<Icon />` abstraction for 4 icons
- Creating a theme provider for a single-theme site
- Adding TypeScript generics to components used exactly once
- Spending 45+ minutes on any single component

**Phase to address:** ALL phases — set timer boundaries for each task.

---

### Pitfall 6: Cheap/Generic Design That Undermines the Pitch

**What goes wrong:**
Site looks like every other Tailwind template. Generic gradients, default spacing, cookie-cutter card layouts. Doesn't feel "luxury" or match Allied's brand.

**Why it happens:**
Defaulting to Tailwind defaults and popular templates. Not intentionally designing for a luxury brand audience.

**How to avoid:**
- **Generous whitespace.** Luxury = breathing room. Increase padding/margins 1.5x from your instinct.
- **Restraint.** Fewer colors, fewer font weights, fewer border radii. Subtlety = premium.
- **Typography hierarchy.** Serif for headings (Playfair Display), sans-serif for body (Inter). Clear size steps.
- **Earth tones.** Match outdoor living: stone, gold, sage, cream. NOT default blue/purple gradients.
- **Photography > decoration.** If using images, high quality only. Otherwise, rely on typography and spacing.
- **No rounded-3xl on everything.** Slight rounding (rounded-lg) or sharp corners feel more editorial/premium.

**Warning signs:**
- Using Tailwind's default blue-500 as primary color
- Cards with heavy drop shadows (shadow-xl) — feels like a SaaS dashboard, not a luxury pitch
- Multiple competing accent colors
- Default 1rem padding on everything

**Phase to address:** Phase 1 (Foundation) — set design tokens in globals.css @theme first.

---

### Pitfall 7: Animations That Annoy Instead of Impress

**What goes wrong:**
Animations are too slow, too frequent, or too dramatic. Site feels like a carnival instead of a premium presentation. Executives get impatient waiting for content to appear.

**Why it happens:**
Animation is fun to build, easy to overdo. Testing repeatedly makes long animations feel fine (you're used to them), but first-time visitors are not.

**How to avoid:**
- **Durations: 0.3-0.6s maximum.** Never longer than 0.8s for any element.
- **`once: true` on all scroll triggers.** Elements animate ONCE, then stay. No re-animation on scroll back.
- **Subtle transforms only.** `y: 20px` fade-in, NOT `y: 100px` with rotation.
- **Stagger delay: 0.08-0.12s** between cards. NOT 0.3s+ (feels slow).
- **No animation on text content.** Animate containers, not individual words/letters.
- **Test at 2x speed mentally.** If it feels fast at 2x, it's the right speed at 1x.
- **Skip hero animation if it delays above-fold content more than 0.5s.**

**Warning signs:**
- Total time for all cards to appear exceeds 2 seconds
- User has to wait for animation to finish before reading
- Animation draws attention away from content
- Using spring physics with high bounce

**Phase to address:** Phase 3 (Animations) — add animations LAST, after content is finalized.

---

### Pitfall 8: Not Testing on Vercel Before Sharing

**What goes wrong:**
Gerhard shares the Vercel URL, interviewer opens it, and: images broken, fonts wrong, PDF doesn't work, 404 on refresh, console full of errors.

**Why it happens:**
Works in `next dev` ≠ works in `next build` ≠ works on Vercel. Environment differences catch you off guard.

**How to avoid:**
- **Deploy to Vercel after every major feature** (not just at the end)
- **Run `next build` locally first** — catches most SSR/SSG issues
- **Test these specifically on Vercel:**
  - [ ] Page loads without console errors
  - [ ] All images render
  - [ ] Fonts load correctly (no flash of unstyled text)
  - [ ] PDF download works (click button, PDF opens)
  - [ ] Mobile layout works
  - [ ] OG meta tags work (share URL on Slack/LinkedIn to test preview)
  - [ ] Page loads in < 3 seconds on throttled connection
- **Use Vercel preview deployments** — every push gets a unique URL

**Warning signs:**
- Never ran `next build` locally
- Only tested in `next dev`
- Deployed once at the very end with no time for fixes

**Phase to address:** Phase 1 (Foundation) — deploy skeleton to Vercel immediately. Test after every phase.

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|---|---|---|---|
| Hardcoded use case content (no CMS) | Fast, no integration complexity | Can't update without rebuild | ALWAYS for this project — it's a one-off |
| Inline styles in PDF components | Faster than building a style system | Hard to maintain/update PDF styles | ALWAYS — @react-pdf/renderer requires its own styles |
| html2canvas+jsPDF as PDF fallback | 30 min vs. 3 hrs for @react-pdf/renderer | Image-based PDF (blurry, not searchable) | Only if running out of time |
| No unit tests | Saves 2-3 hours | Can't verify changes | ALWAYS for 24-48hr build |
| No error boundaries | Saves 30 min | Unhandled errors show white screen | Add one root-level error.tsx at minimum |
| `any` types in TypeScript | Faster iteration | Lose type safety benefits | AVOID — proper types take 15 min upfront, save debugging later |

---

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|---|---|---|---|
| Unoptimized images | Slow load, poor Lighthouse score | Use `next/image` with width/height. Compress images beforehand. | > 500KB total image weight |
| Too many Motion animations on-screen | Janky scrolling, dropped frames, battery drain | Limit to 6-8 animated elements visible simultaneously. Use `once: true`. | > 12 elements animating at once |
| Large font files | Flash of unstyled text (FOUT), slow initial load | Use `next/font/google` with `display: 'swap'`. Subset fonts if possible. | > 200KB total font weight |
| @react-pdf/renderer bundle size | Slow initial page load even before user clicks PDF | Dynamic import with `ssr: false` — bundle only loads when PDF button is in view | Always — library is ~500KB |
| No image lazy loading | All images load at once on page load | `next/image` handles this by default. Verify with Network tab. | > 10 images on page |

---

## UX Pitfalls (Non-Technical Executive Perspective)

| Pitfall | User Impact | Better Approach |
|---|---|---|
| Too much text per card | Executive skims, misses the point | 2-3 sentence description max. Bold the key outcome. |
| No clear visual hierarchy | Everything looks the same importance | Hero > Section headers > Card titles > Card body > Fine print |
| Technical jargon in headlines | "RAG-Powered Retrieval-Augmented..." means nothing to non-tech | "Instant Answers From Your Website" > "RAG-Powered Chatbot" |
| ROI section buried in card body | The most important info is hardest to find | ROI in a highlighted callout box within each card |
| No "what's next" CTA | Impressive but then what? | Clear "Let's discuss" CTA with contact info |
| PDF is an afterthought | Blurry/ugly PDF undermines web quality | PDF should be its own polished deliverable, not a browser print |

---

## "Looks Done But Isn't" Checklist

- [ ] **PDF Download:** Button exists but PDF has wrong fonts, broken images, or missing content
- [ ] **Mobile Layout:** Looks fine in Chrome DevTools but broken on actual iPhone Safari
- [ ] **OG Meta Tags:** Page title is "Next.js App" instead of "AI Strategy for Allied Outdoor Solutions"
- [ ] **Favicon:** Still the default Next.js favicon instead of something custom
- [ ] **Performance:** Page loads fast on your fiber connection, laggy on 4G
- [ ] **Console Errors:** No visible bugs but console full of React warnings
- [ ] **Font Loading:** Flash of system font before custom fonts load
- [ ] **Scroll Animations:** Work perfectly on first visit, break on browser back/forward
- [ ] **Category Counts:** Cards don't add up to 10, or sections are uneven
- [ ] **ROI Numbers:** Estimates are vague ("improved efficiency") instead of specific ("save 15 hrs/week")
- [ ] **Spelling/Grammar:** Typos in hero text or card descriptions (instant credibility killer)
- [ ] **Links:** Any links in footer/CTA actually work (email:, linkedin, etc.)

---

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---|---|---|
| Hydration mismatch | LOW | Add `"use client"` to affected component. 5-minute fix. |
| PDF not working on Vercel | MEDIUM | Switch to html2canvas+jsPDF fallback. 30-60 min. |
| Site looks generic/cheap | MEDIUM | Update design tokens (colors, spacing, fonts). 1-2 hours. |
| Mobile layout broken | MEDIUM | Add responsive Tailwind classes. 1-2 hours. |
| Animations too aggressive | LOW | Reduce durations, simplify transforms. 15-30 min. |
| Content too technical | MEDIUM | Rewrite headlines and descriptions. 1-2 hours. |
| Over-engineered, out of time | HIGH | Cut scope: skip PDF, skip animations, ship content-only version. |
| Vercel deployment broken | LOW | Check build logs, fix errors, redeploy. 15-30 min. |

---

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---|---|---|
| SSR Hydration Mismatch | Foundation | `next build` succeeds, no console warnings on page load |
| PDF Fails on Vercel | Content & PDF | Click PDF button on Vercel preview URL, file downloads correctly |
| Generic AI Buzzwords | Content | Read each card aloud — does it reference Allied specifically? |
| Broken Mobile Layout | Polish | Open Vercel URL on actual phone, all cards readable |
| Over-Engineering | ALL | Timebox check: am I spending 45+ min on any one component? |
| Cheap Design | Foundation | Show to a friend: "Does this look premium?" |
| Annoying Animations | Animations | Total animation time for visible cards < 2 seconds |
| Not Testing on Vercel | ALL | Deploy after every phase, not just at the end |

---

## Sources

### HIGH Confidence
- [Next.js Hydration Error Docs](https://nextjs.org/docs/messages/react-hydration-error) — Official
- [Motion SSR Compatibility](https://github.com/framer/motion/issues/2193) — GitHub issue
- [Responsive Design Debugging](https://blog.pixelfreestudio.com/responsive-design-failures-debugging-mobile-issues/) — Technical guide

### MEDIUM Confidence
- [Luxury Website Design Best Practices](https://cxl.com/blog/optimize-luxury-brand/) — CXL
- [How to Make Website Look Expensive](https://www.paigebrunton.com/blog/high-end-website-design-tips) — Design blog
- [26 Luxury Website Examples](https://blog.hubspot.com/website/luxury-websites) — HubSpot
- [PDF Library Comparisons](https://dmitriiboikov.com/posts/2025/01/pdf-generation-comarison/) — Technical comparison
- [6 PDF Libraries for React](https://dev.to/ansonch/6-open-source-pdf-generation-and-modification-libraries-every-react-dev-should-know-in-2025-13g0) — Dev.to

### LOW Confidence
- Interview-specific advice (general hiring best practices, not domain-specific)

---
*Pitfalls research for: Interview showcase / AI strategy pitch website*
*Researched: 2026-02-09*
