const steps = [
  {title:"Understand the work", body:"Clarify requirements, map the current process and identify where people lose time or confidence."},
  {title:"Build the right solution", body:"Connect systems, configure workflows and use code or AI where it serves the task."},
  {title:"Check what matters", body:"Validate data and outputs against requirements, with human review where judgement is needed."},
  {title:"Make it usable", body:"Apply UX judgement, explain the process clearly and create guidance for the people using it."}
];
export function HowIWorkSection() {
  return <section className="portfolio-section approach-section section-anchor" id="approach"><div className="portfolio-container"><div className="section-intro"><p className="eyebrow">How I work</p><h2>From the first question<br />to everyday use.</h2><p>Technical implementation brings together the process, the system and the people who depend on it.</p></div><div className="approach-grid">{steps.map((s,i)=><div key={s.title}><span className="step-index">0{i+1}</span><h3>{s.title}</h3><p>{s.body}</p></div>)}</div></div></section>;
}
