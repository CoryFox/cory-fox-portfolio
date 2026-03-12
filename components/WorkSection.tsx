import { ShowcaseProject } from "@/components/ShowcaseProject";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCaseStudy } from "@/lib/content";

export function WorkSection({ intro, work }: { intro: string; work: WorkCaseStudy[] }) {
  return (
    <section className="section-anchor overflow-hidden px-6 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-24" id="work">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            id="work-heading"
            label="Work"
            title="A few examples of how I approach product design."
            description={intro}
          />
        </Reveal>

        <Reveal className="mt-6 flex flex-wrap gap-x-3 gap-y-2 border-y border-[color:var(--border)] py-4 text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--text-secondary)] sm:mt-8 sm:gap-4 sm:text-xs sm:tracking-[0.26em]">
          <span>Product design</span>
          <span>/</span>
          <span>UX systems</span>
          <span>/</span>
          <span>Editorial presentation</span>
          <span>/</span>
          <span>Interaction detail</span>
        </Reveal>

        <div className="mt-10 space-y-16 sm:mt-14 sm:space-y-20 lg:mt-16 lg:space-y-36">
          {work.map((project, index) => (
            <ShowcaseProject key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
