import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { WorkCaseStudy } from "@/lib/content";

export function WorkSection({ intro, work }: { intro: string; work: WorkCaseStudy[] }) {
  return (
    <section className="section-anchor overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-20" id="case-studies">
      <div className="mx-auto max-w-7xl">
        <Reveal mode="immediate">
          <SectionHeading
            id="work-heading"
            label="CASE STUDIES"
            title="SELECTED CASE STUDIES."
            description={intro}
          />
        </Reveal>

        <Reveal mode="immediate" className="mt-6 flex flex-wrap gap-x-3 gap-y-2 border-y border-[color:var(--border)] py-4 text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--text-muted)] sm:mt-8 sm:gap-4 sm:text-xs sm:tracking-[0.26em]">
          <span>ONBOARDING</span>
          <span>/</span>
          <span>WORKFLOW DESIGN</span>
          <span>/</span>
          <span>OPERATIONAL UX</span>
          <span>/</span>
          <span>STRUCTURED DELIVERY</span>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {work.map((project, index) => (
            <WorkCard key={project.slug} project={project} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
