"use client";

import {
  HeroHeading,
  HeroSubtitle,
  HeroCTA,
} from "@/components/animated/HeroEntrance";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-allied-navy px-6 text-center">
      <div className="max-w-3xl">
        <HeroHeading>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-allied-cream md:text-5xl lg:text-6xl xl:text-7xl">
            10 AI-powered strategies to transform{" "}
            <span className="text-allied-gold">Allied Outdoor Solutions&apos;</span>{" "}
            sales, marketing, and operations
          </h1>
        </HeroHeading>

        <HeroCTA>
          <div className="mt-12 flex flex-col items-center gap-2 text-allied-cream/60">
            <span className="text-sm font-sans tracking-widest uppercase">
              Explore Solutions
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
        </HeroCTA>
      </div>
    </section>
  );
}
