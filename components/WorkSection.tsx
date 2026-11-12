import Image from "next/image";
import Link from "next/link";
import type { WorkCaseStudy } from "@/lib/content";
import { WorkflowVisual } from "@/components/WorkflowVisual";

export function WorkSection({ intro, work }: { intro: string; work: WorkCaseStudy[] }) {
  const [featured, ...supporting] = work;
  if (!featured) return null;
  return <section className="portfolio-section section-anchor" id="case-studies">
    <div className="portfolio-container">
      <div className="section-intro"><p className="eyebrow">Selected work</p><h2>Practical solutions.<br />Evidence of delivery.</h2><p>{intro}</p></div>
      <article className="featured-project">
        <div className="featured-copy"><p className="eyebrow">Featured project</p><h3><Link href={`/work/${featured.slug}/`}>{featured.title}</Link></h3><p>{featured.summary}</p>
          <div className="project-result"><strong>~50%</strong><span>less time preparing emails<br /><small>Used by all 10 consultants</small></span></div>
          <p className="project-stack">{featured.technologies.join(" · ")}</p><Link className="text-link" href={`/work/${featured.slug}/`}>Read the implementation story <span aria-hidden="true">→</span></Link>
        </div>
        <WorkflowVisual compact />
      </article>
      <div className="supporting-grid">{supporting.map(project=><article className="supporting-project" key={project.slug}>
        <div className="supporting-media">{project.diagram ? <WorkflowVisual kind={project.diagram} compact /> : <Image src={project.cardImage} alt="FourJaw manufacturing software in use" width={800} height={450} sizes="(min-width: 800px) 50vw, 100vw" />}</div>
        <div className="supporting-copy"><p className="eyebrow">{project.client ?? project.role}</p><h3><Link href={`/work/${project.slug}/`}>{project.title}</Link></h3><p>{project.summary}</p><Link className="text-link" href={`/work/${project.slug}/`}>Explore the project <span aria-hidden="true">→</span></Link></div>
      </article>)}</div>
      <div className="archive-links"><span id="additional-work" className="section-anchor" /><Link className="text-link" href="/archive/">Earlier SaaS projects and web work <span aria-hidden="true">→</span></Link></div>
    </div>
  </section>;
}
