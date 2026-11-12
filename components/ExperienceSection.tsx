import type { ExperienceContent } from "@/lib/content";
export function ExperienceSection({ content }: {content:ExperienceContent}) {
  return <section className="portfolio-section section-anchor" id="experience"><div className="portfolio-container experience-grid">
    <div id="about" className="section-anchor"><p className="eyebrow">Experience & qualifications</p><h2>A technical background.<br />A human perspective.</h2><p className="experience-intro">I’ve worked across SaaS development, UX leadership, implementation and education. That combination shapes how I build solutions and help people understand them.</p>
    <div className="qualifications"><h3>Qualifications</h3>{content.education.map(e=><p key={e}>{e}</p>)}</div><p className="experience-note">Teaching and eLearning strengthened my ability to structure guidance and adapt explanations to different needs.</p><a className="text-link" href="/cv/cory-fox-cv.pdf">Download my full CV <span aria-hidden="true">↓</span></a></div>
    <div className="career-list">{content.timeline.map((entry)=><article className="career-row" key={`${entry.company}-${entry.period}`}><div className="career-meta"><p>{entry.company}</p><span>{entry.period}</span></div><h3>{entry.role.replace(' -> ', ' → ')}</h3><p>{entry.bullets[0]}</p></article>)}</div>
  </div></section>;
}
