import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Footer from "@/components/layout/Footer";
import UseCaseCard from "@/components/cards/UseCaseCard";
import { CATEGORY_SECTIONS, USE_CASES } from "@/data/use-cases";

const sectionIds: Record<string, string> = {
  "quick-win": "quick-wins",
  "medium-term": "medium-term",
  strategic: "strategic",
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
          <div className="space-y-6 md:space-y-8">
            {USE_CASES.filter(
              (uc) => uc.timeline === section.category
            ).map((uc) => (
              <UseCaseCard key={uc.id} useCase={uc} />
            ))}
          </div>
        </SectionWrapper>
      ))}

      <Footer />
    </>
  );
}
