import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DemosSection } from "@/components/DemosSection";
import { getAllWork, getAllDemos, getHomeContent } from "@/lib/content";
export const metadata:Metadata={title:"Earlier work",description:"Earlier SaaS projects and web demonstrations by Cory Fox.",alternates:{canonical:"/archive/"}};
export default async function ArchivePage(){const [work,demos,home]=await Promise.all([getAllWork(),getAllDemos(),getHomeContent()]);return <div className="editorial-shell"><Header/><main id="main-content"><div className="portfolio-container archive-heading"><p className="eyebrow">Earlier work</p><h1>More from my background.</h1><p>SaaS projects and web demonstrations showing the design and development experience behind my implementation work.</p><div className="supporting-grid">{work.filter(p=>!p.featured).map(p=><article className="supporting-project supporting-copy" key={p.slug}><p className="eyebrow">{p.client}</p><h2 style={{fontSize:24,fontWeight:600,margin:'12px 0'}}>{p.title}</h2><p>{p.summary}</p><Link className="text-link" href={`/work/${p.slug}/`}>Read case study →</Link></article>)}</div></div><DemosSection intro={home.demosIntro} demos={demos}/></main><Footer/></div>}
