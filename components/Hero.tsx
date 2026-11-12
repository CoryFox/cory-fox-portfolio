import Link from "next/link";
import type { HomeContent } from "@/lib/content";

export function Hero({ content }: { content: HomeContent["hero"] }) {
  return <section className="portfolio-hero">
    <div className="portfolio-container hero-grid">
      <div>
        <p className="eyebrow">Cory Fox · Sheffield, UK</p>
        <h1 className="positioning-title">{content.headline}</h1>
        <p className="specialisms">AI, automation and user adoption</p>
        <p className="hero-intro">{content.description}</p>
        <div className="action-row"><Link className="action-primary" href={content.primaryCta.href}>{content.primaryCta.label}<span aria-hidden="true">↓</span></Link><a className="action-secondary" href={content.secondaryCta.href}>{content.secondaryCta.label}<span aria-hidden="true">↓</span></a></div>
      </div>
      <aside className="hero-evidence" aria-label="Experience at a glance">
        <p className="eyebrow">Technical delivery. People in mind.</p>
        {content.cards.map((card,i)=><div className="evidence-row" key={card.title}><span className="evidence-index">0{i+1}</span><div><h2>{card.title}</h2><p>{card.body}</p></div></div>)}
        <a className="text-link" href="#experience">Explore my background <span aria-hidden="true">↓</span></a>
      </aside>
    </div>
  </section>;
}
