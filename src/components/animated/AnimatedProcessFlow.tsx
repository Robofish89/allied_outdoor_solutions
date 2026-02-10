"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ProcessStep } from "@/types/use-case";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35 },
  },
};

const arrowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
};

const dotColors: Record<ProcessStep["type"], string> = {
  input: "bg-allied-slate",
  ai: "bg-allied-gold",
  output: "bg-allied-navy",
};

interface AnimatedProcessFlowProps {
  steps: ProcessStep[];
}

export default function AnimatedProcessFlow({ steps }: AnimatedProcessFlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div className="mt-6" ref={ref}>
      <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-allied-slate/60">
        How It Works
      </p>
      <motion.div
        className="flex items-start gap-2 md:gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {steps.map((step, index) => (
          <div key={index} className="contents">
            <motion.div
              className="flex min-w-0 flex-1 flex-col items-center gap-2 text-center"
              variants={stepVariants}
            >
              <span
                className={`inline-block h-3 w-3 rounded-full ${dotColors[step.type]}`}
                aria-hidden="true"
              />
              <span className="font-sans text-xs leading-snug text-allied-charcoal/80 md:text-sm">
                {step.label}
              </span>
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                className="mt-1 flex shrink-0 items-start pt-0.5"
                variants={arrowVariants}
              >
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
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
