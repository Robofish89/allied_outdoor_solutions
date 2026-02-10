import { UseCase, ProcessStep } from "@/types/use-case";

interface UseCaseCardProps {
  useCase: UseCase;
}

function StepDot({ type }: { type: ProcessStep["type"] }) {
  const colors: Record<ProcessStep["type"], string> = {
    input: "bg-allied-slate",
    ai: "bg-allied-gold",
    output: "bg-allied-navy",
  };

  return (
    <span
      className={`inline-block h-3 w-3 rounded-full ${colors[type]}`}
      aria-hidden="true"
    />
  );
}

function ProcessFlowArrow() {
  return (
    <svg
      width="32"
      height="16"
      viewBox="0 0 32 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-allied-slate/40"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="8"
        x2="24"
        y2="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <polyline
        points="20,3 26,8 20,13"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProcessFlow({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="mt-6">
      <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-allied-slate/60">
        How It Works
      </p>
      <div className="flex items-start gap-2 md:gap-4">
        {steps.map((step, index) => (
          <div key={index} className="contents">
            <div className="flex min-w-0 flex-1 flex-col items-center gap-2 text-center">
              <StepDot type={step.type} />
              <span className="font-sans text-xs leading-snug text-allied-charcoal/80 md:text-sm">
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="mt-1 flex shrink-0 items-start pt-0.5">
                <ProcessFlowArrow />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
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
      <ProcessFlow steps={useCase.processSteps} />

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
