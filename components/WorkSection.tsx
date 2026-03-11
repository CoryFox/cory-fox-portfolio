import { ShowcaseProject } from "@/components/ShowcaseProject";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCaseStudy } from "@/lib/content";

export function WorkSection({ intro, work }: { intro: string; work: WorkCaseStudy[] }) {
  return (
    <section className="section-anchor overflow-hidden px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-24" id="work">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            id="work-heading"
            label="Work"
            title="A few projects that show how I shape product direction, simplify journeys, and push the visual tone further."
            description={intro}
          />
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap gap-4 border-y border-[color:var(--border)] py-4 text-xs uppercase tracking-[0.26em] text-[color:var(--text-secondary)]">
          <span>Product design</span>
          <span>/</span>
          <span>UX systems</span>
          <span>/</span>
          <span>Editorial presentation</span>
          <span>/</span>
          <span>Interaction detail</span>
        </Reveal>

        <div className="mt-16 space-y-28 lg:space-y-36">
          {work.map((project, index) => (
            <ShowcaseProject key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
