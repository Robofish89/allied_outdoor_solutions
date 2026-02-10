export type TimelineCategory = "quick-win" | "medium-term" | "strategic";

export interface ProcessStep {
  label: string;
  type: "input" | "ai" | "output";
}

export interface UseCase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  alliedContext: string;
  tools: string[];
  timeline: TimelineCategory;
  timelineLabel: string;
  roi: string;
  processSteps: ProcessStep[];
}

export interface CategorySection {
  category: TimelineCategory;
  label: string;
  tagline: string;
}
