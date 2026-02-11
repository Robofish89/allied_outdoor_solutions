import { UseCase } from "@/types/use-case";
import AnimatedProcessFlow from "@/components/animated/AnimatedProcessFlow";

interface UseCaseCardProps {
  useCase: UseCase;
  className?: string;
}

export default function UseCaseCard({ useCase, className }: UseCaseCardProps) {
  return (
    <article className={`rounded-2xl p-6 shadow-sm md:p-8 ${className ?? "bg-white"}`}>
      {/* Header: Title + Subtitle + Timeline Badge */}
      <div className="mb-5">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold tracking-tight text-allied-navy md:text-2xl">
            {useCase.title}
          </h3>
          <span className="inline-flex items-center rounded-full bg-allied-gold/15 px-3 py-1 text-xs font-medium text-allied-gold">
            {useCase.timelineLabel}
          </span>
        </div>
        <p className="font-sans text-base text-allied-slate">
          {useCase.subtitle}
        </p>
      </div>

      {/* Description */}
      <div className="mb-6 space-y-3">
        <p className="font-sans text-sm leading-relaxed text-allied-charcoal/90 md:text-base">
          {useCase.description}
        </p>
        <p className="border-l-2 border-allied-gold/40 pl-4 font-sans text-sm italic leading-relaxed text-allied-charcoal/70 md:text-base">
          {useCase.alliedContext}
        </p>
      </div>

      {/* Process Flow Visual */}
      <AnimatedProcessFlow steps={useCase.processSteps} />

      {/* Tools/Tech Badges */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {useCase.tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center rounded-full bg-allied-navy/5 px-3 py-1 font-sans text-xs font-medium text-allied-navy"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* ROI Estimate */}
      <div className="mt-6 flex items-start gap-2 rounded-lg bg-allied-gold/5 px-4 py-3">
        <span className="shrink-0 font-sans text-xs font-bold uppercase tracking-wider text-allied-gold">
          Expected Impact:
        </span>
        <span className="font-sans text-sm text-allied-charcoal/80">
          {useCase.roi}
        </span>
      </div>
    </article>
  );
}
