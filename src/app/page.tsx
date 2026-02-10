import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Footer from "@/components/layout/Footer";
import { CATEGORY_SECTIONS } from "@/data/use-cases";

const sectionIds: Record<string, string> = {
  "quick-win": "quick-wins",
  "medium-term": "medium-term",
  strategic: "strategic",
};

const sectionPlaceholders: Record<string, string> = {
  "quick-win": "3 solutions coming in Phase 2",
  "medium-term": "4 solutions coming in Phase 2",
  strategic: "3 solutions coming in Phase 2",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      {CATEGORY_SECTIONS.map((section) => (
        <SectionWrapper
          key={section.category}
          id={sectionIds[section.category]}
          title={section.label}
          subtitle={section.tagline}
          category={section.category}
        >
          <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-allied-slate/20 py-20">
            <p className="font-sans text-lg text-allied-slate/60">
              {sectionPlaceholders[section.category]}
            </p>
          </div>
        </SectionWrapper>
      ))}

      <Footer />
    </>
  );
}
