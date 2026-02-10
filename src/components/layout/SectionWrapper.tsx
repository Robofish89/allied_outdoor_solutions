import { ReactNode } from "react";
import { TimelineCategory } from "@/types/use-case";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle: string;
  category: TimelineCategory;
  children: ReactNode;
}

const categoryTimelines: Record<TimelineCategory, string> = {
  "quick-win": "1-2 Weeks",
  "medium-term": "1-3 Months",
  strategic: "3-6 Months",
};

const categoryBackgrounds: Record<TimelineCategory, string> = {
  "quick-win": "bg-allied-cream",
  "medium-term": "bg-allied-white",
  strategic: "bg-allied-cream",
};

export default function SectionWrapper({
  id,
  title,
  subtitle,
  category,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding ${categoryBackgrounds[category]}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 md:mb-16">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-bold tracking-tight text-allied-navy md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <span className="inline-flex items-center rounded-full bg-allied-gold/15 px-4 py-1.5 text-sm font-medium text-allied-gold">
              {categoryTimelines[category]}
            </span>
          </div>
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-allied-slate">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </section>
  );
}
