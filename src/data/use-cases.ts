import { CategorySection, UseCase } from "@/types/use-case";

export const CATEGORY_SECTIONS: CategorySection[] = [
  {
    category: "quick-win",
    label: "Quick Wins",
    tagline: "Deploy in 1-4 weeks — immediate impact on leads, reviews, and response time",
  },
  {
    category: "medium-term",
    label: "Medium-Term Plays",
    tagline: "Build over 1-2 months — smarter sales, deeper CRM intelligence, competitive edge",
  },
  {
    category: "strategic",
    label: "Strategic Initiatives",
    tagline: "Transform over 2-4 months — AI systems that compound value across all 5 markets",
  },
];

export const USE_CASES: UseCase[] = [
  // ─── Quick Wins (1-4 Weeks) ────────────────────────────────────────
  {
    id: "contact-reengagement",
    title: "Contact List Reengagement",
    subtitle: "Mine dormant CRM leads for hidden revenue",
    description:
      "An AI agent that researches Allied's dormant CRM contacts — checking if they've moved, renovated, bought a pool, or changed life circumstances. Identifies warm reengagement opportunities and crafts personalized outreach explaining what's new since they last spoke with Allied.",
    alliedContext:
      "Allied's CRM likely has thousands of contacts across Austin, Dallas, Houston, Fort Worth, and San Antonio who inquired but never converted — or converted years ago and are due for an upgrade. Homeowners who added a pool may now want a surrounding Carvestone patio. This AI finds those signals.",
    tools: ["n8n", "Apify", "OpenAI", "Clay", "HubSpot/CRM API"],
    timeline: "quick-win",
    timelineLabel: "1-4 Weeks",
    roi: "Reactivate 10-15% of dormant leads, revenue from existing database without new ad spend",
    processSteps: [
      { label: "Dormant CRM contacts exported for analysis", type: "input" },
      { label: "AI researches each contact for life changes and new opportunities", type: "ai" },
      { label: "Prioritized list with personalized reengagement messages", type: "output" },
    ],
  },
  {
    id: "prospect-scraping",
    title: "Lead Gen via Prospect Scraping",
    subtitle: "Scrape local business owners and luxury homeowners for direct outreach",
    description:
      "A lightweight scraping workflow that pulls business owner contact details from Google Maps across Allied's 5 Texas markets, plus identifies homeowners in luxury estates and gated communities. Outputs clean contact lists ready for personalized messaging campaigns.",
    alliedContext:
      "Allied's best customers are business owners who want impressive storefronts and luxury homeowners investing in outdoor living. This scraper targets both — pulling restaurant owners, boutique hotels, and retail shops from Google Maps, plus residents in Highland Park, River Oaks, Westlake Hills, and Southlake estates. Each contact gets a personalized message referencing their property or business.",
    tools: ["n8n", "Apify", "Google Maps API", "OpenAI", "Clay"],
    timeline: "quick-win",
    timelineLabel: "1-4 Weeks",
    roi: "Net-new pipeline from local businesses and luxury neighborhoods, 40-50 qualified leads per week per market",
    processSteps: [
      { label: "Google Maps and luxury estate directories scraped for contacts", type: "input" },
      { label: "AI crafts personalized outreach for each prospect", type: "ai" },
      { label: "Ready-to-send contact list with tailored messages", type: "output" },
    ],
  },
  {
    id: "rag-chatbot",
    title: "RAG-Powered Website Chatbot",
    subtitle: "24/7 AI concierge for Carvestone and outdoor living inquiries",
    description:
      "An AI chatbot trained on Allied's full product catalog, service areas, and project portfolio. Answers questions about Carvestone pavers, pergola options, outdoor kitchen packages, and fire features — then books consultations directly into Allied's calendar across all 5 Texas markets.",
    alliedContext:
      "Allied's website gets traffic from homeowners across Austin, Dallas, Houston, Fort Worth, and San Antonio — but most visit after hours. This chatbot captures leads at 2 AM the same way a top sales rep does at 2 PM, with deep knowledge of Carvestone's exclusive advantages over Belgard or Tremron alternatives.",
    tools: ["n8n", "OpenAI", "LangChain", "Pinecone", "Next.js API Routes"],
    timeline: "medium-term",
    timelineLabel: "1-2 Months",
    roi: "24/7 lead capture, 3x consultation bookings, zero added headcount",
    processSteps: [
      { label: "Homeowner asks about Carvestone patios", type: "input" },
      { label: "AI retrieves product specs, pricing tiers, and availability", type: "ai" },
      { label: "Personalized answer + consultation booking link", type: "output" },
    ],
  },
  {
    id: "review-solicitation",
    title: "Automated Review Solicitation",
    subtitle: "Turn every completed project into a 5-star Google review",
    description:
      "An automated workflow that triggers after project completion — sends personalized thank-you messages, times the review request perfectly, and follows up with non-responders. Makes it effortless for happy homeowners to leave detailed reviews mentioning specific work done.",
    alliedContext:
      "Allied completes hundreds of patio, pergola, and outdoor kitchen projects annually across 5 markets. Each one is a missed review opportunity. This system ensures every completed Carvestone patio installation or custom pergola build generates social proof that drives the next sale.",
    tools: ["n8n", "OpenAI", "Google Business API", "Twilio"],
    timeline: "quick-win",
    timelineLabel: "1-4 Weeks",
    roi: "2-3x review volume, higher Google Maps ranking, stronger local SEO",
    processSteps: [
      { label: "Project marked complete in CRM", type: "input" },
      { label: "AI crafts personalized review request with project details", type: "ai" },
      { label: "Homeowner receives timed message + direct review link", type: "output" },
    ],
  },
  {
    id: "sales-automation",
    title: "Sales Process Automation",
    subtitle: "Automatic follow-ups that never let a hot lead go cold",
    description:
      "An intelligent drip sequence that activates the moment a consultation request comes in. Sends confirmation, pre-visit inspiration content, post-visit follow-ups, and proposal reminders — all personalized to the homeowner's specific project interest and market.",
    alliedContext:
      "Allied's sales team juggles leads across 5 metros. A homeowner in River Oaks requesting a pool-and-patio combo gets different follow-up than a Westlake Hills customer asking about a simple Carvestone walkway. This automation ensures no lead falls through the cracks regardless of market volume.",
    tools: ["n8n", "OpenAI", "HubSpot/CRM API", "SendGrid"],
    timeline: "quick-win",
    timelineLabel: "1-4 Weeks",
    roi: "40% faster response time, 25% higher close rate, zero manual follow-up work",
    processSteps: [
      { label: "New consultation request submitted", type: "input" },
      { label: "AI personalizes sequence based on project type and market", type: "ai" },
      { label: "Automated emails, SMS, and proposal reminders triggered", type: "output" },
    ],
  },
  {
    id: "competitor-research",
    title: "Competitor Social & Ad Research",
    subtitle: "Know what Belgard and Tremron are pushing before they launch",
    description:
      "An automated intelligence system that monitors competitor social media, ad creatives, pricing changes, and promotional campaigns. Delivers weekly digests showing what's working for competitors and where Allied has whitespace opportunities.",
    alliedContext:
      "Allied competes with Belgard dealers, Tremron installers, and regional players like Tex Sun Pavers across Texas. This agent tracks their Facebook/Instagram ads, Google Ads messaging, seasonal promotions, and new product launches — giving Allied's marketing team a permanent competitive edge.",
    tools: ["Apify", "OpenAI", "Meta Ad Library API", "n8n"],
    timeline: "quick-win",
    timelineLabel: "1-4 Weeks",
    roi: "Real-time competitive intelligence, faster campaign pivots, identify market gaps before competitors",
    processSteps: [
      { label: "Competitor social accounts and ad libraries scanned", type: "input" },
      { label: "AI analyzes trends, top performers, and messaging patterns", type: "ai" },
      { label: "Weekly competitive digest with actionable recommendations", type: "output" },
    ],
  },

  // ─── Medium-Term (1-2 Months) ──────────────────────────────────────
  {
    id: "internal-sales-rag",
    title: "Internal Sales Assistant RAG",
    subtitle: "Every rep becomes a Carvestone expert on day one",
    description:
      "A private AI knowledge base trained on Allied's complete product catalog, installation specs, pricing structures, and competitive positioning. New sales reps ask questions in natural language and get instant, accurate answers — reducing ramp-up time from months to days.",
    alliedContext:
      "Allied carries exclusive Carvestone pavers alongside pergola systems, outdoor kitchens, and fire features. New reps need to know thickness options, color palettes, Carvestone vs. Belgard comparisons, installation requirements, and pricing tiers across markets. This AI assistant makes that knowledge instantly accessible.",
    tools: ["n8n", "OpenAI", "LangChain", "Pinecone", "Slack Integration"],
    timeline: "medium-term",
    timelineLabel: "1-2 Months",
    roi: "50% faster rep onboarding, consistent messaging across 5 markets, fewer lost deals from knowledge gaps",
    processSteps: [
      { label: "Sales rep asks about Carvestone specs or pricing", type: "input" },
      { label: "AI searches product docs, install guides, and past proposals", type: "ai" },
      { label: "Accurate answer with source references and comparison data", type: "output" },
    ],
  },
  {
    id: "lead-scoring",
    title: "Lead Scoring & CRM Enrichment",
    subtitle: "Know which leads are worth $100K before the first call",
    description:
      "An AI system that enriches every incoming lead with property data, social signals, and behavioral scoring. Automatically identifies high-value opportunities (pool + outdoor kitchen combos, large properties, recent home purchases) and routes them to senior reps.",
    alliedContext:
      "Not all Allied leads are equal — a homeowner in Highland Park wanting a full outdoor living suite (Carvestone patio, pergola, outdoor kitchen, fire pit) is worth 10x a simple walkway inquiry. This system automatically scores leads across all 5 markets so the sales team focuses energy where revenue potential is highest.",
    tools: ["n8n", "OpenAI", "Clay", "Clearbit", "HubSpot/CRM API"],
    timeline: "medium-term",
    timelineLabel: "1-2 Months",
    roi: "30% higher average deal size, sales team focused on best opportunities, faster pipeline velocity",
    processSteps: [
      { label: "New lead enters CRM with basic inquiry info", type: "input" },
      { label: "AI enriches with property data, social signals, and intent scoring", type: "ai" },
      { label: "Lead scored, tagged, and routed to appropriate rep", type: "output" },
    ],
  },

  // ─── Strategic (2-4 Months) ────────────────────────────────────────
  {
    id: "project-status-alerts",
    title: "AI Project Status Alerts",
    subtitle: "Catch delays before clients do — across all 5 markets",
    description:
      "An AI monitoring system that tracks project timelines, weather impacts, material delivery schedules, and crew availability across Allied's active projects. Automatically detects potential delays and triggers proactive client communication before problems escalate.",
    alliedContext:
      "Allied manages concurrent projects across Austin, Dallas, Houston, Fort Worth, and San Antonio. A weather delay in Houston shouldn't blindside the client — and a material shortage affecting Carvestone supply should trigger rescheduling before crews show up with nothing to install. This system makes multi-market coordination effortless.",
    tools: ["OpenAI", "n8n", "Weather API", "Project Management API", "Twilio"],
    timeline: "strategic",
    timelineLabel: "2-4 Months",
    roi: "50% fewer client complaints, proactive vs. reactive communication, better crew utilization",
    processSteps: [
      { label: "Project timelines, weather, and material status monitored", type: "input" },
      { label: "AI detects delay risks and generates client-ready updates", type: "ai" },
      { label: "Proactive alerts sent to clients and project managers", type: "output" },
    ],
  },
  {
    id: "backyard-vision",
    title: 'AI Visual Project Estimator "Backyard Vision"',
    subtitle: "Upload a photo, see your dream outdoor space with Carvestone",
    description:
      "A customer-facing tool where homeowners upload a photo of their backyard and AI generates a realistic visualization of what it could look like with Carvestone pavers, a pergola, outdoor kitchen, or fire feature. Includes a rough cost estimate based on visible square footage and selected options.",
    alliedContext:
      "Allied's biggest conversion barrier is imagination — homeowners can't visualize what a $80K outdoor living project looks like in their specific backyard. This tool lets them see Carvestone pavers on their actual patio, a pergola over their existing deck, and an outdoor kitchen where their old grill sits. It turns browsers into believers.",
    tools: ["n8n", "OpenAI Vision", "Stability AI", "Next.js", "Vercel AI SDK"],
    timeline: "strategic",
    timelineLabel: "2-4 Months",
    roi: "3x consultation requests, viral sharing potential, massive competitive differentiator",
    processSteps: [
      { label: "Homeowner uploads backyard photo and selects options", type: "input" },
      { label: "AI generates photorealistic Carvestone/pergola overlay", type: "ai" },
      { label: "Visualization + rough estimate + consultation CTA", type: "output" },
    ],
  },
];
