import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WorkflowVisual } from "@/components/WorkflowVisual";
import { getAllWork, getWorkBySlug } from "@/lib/content";

export async function generateStaticParams() { return (await getAllWork()).map(p=>({slug:p.slug})); }
export async function generateMetadata({ params }: { params: Promise<{ slug:string }> }): Promise<Metadata> {
 const {slug}=await params; const p=await getWorkBySlug(slug);
 return p ? {title:p.title,description:p.summary,alternates:{canonical:`/work/${p.slug}/`},openGraph:{title:p.title,description:p.summary,url:`/work/${p.slug}/`}} : {};
}
export default async function WorkDetailPage({ params }: { params: Promise<{ slug:string }> }) {
 const {slug}=await params; const [p,all]=await Promise.all([getWorkBySlug(slug),getAllWork()]); if(!p) notFound();
 const next=all.find(x=>x.slug===p.nextSlug) ?? all.find(x=>x.slug!==slug);
 const images=Array.from(new Set(p.gallery.filter(x=>x!==p.heroImage)));
 return <div className="editorial-shell"><Header/><main id="main-content" className="case-main"><article className="portfolio-container">
   <header className="case-header"><Link className="text-link" href="/#case-studies">← Selected work</Link><p className="eyebrow" style={{marginTop:28}}>{p.client ?? p.role}</p><h1>{p.title}</h1><p className="case-summary">{p.summary}</p></header>
   <dl className="case-context"><div><dt>My role</dt><dd>{p.role}</dd></div><div><dt>Status</dt><dd>{p.status}</dd></div><div><dt>Period</dt><dd>{p.year}</dd></div><div><dt>Tools & environment</dt><dd>{p.technologies.join(' · ')}</dd></div></dl>
   {p.metrics && <div className="case-metrics">{p.metrics.map(m=><div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}</div>}
   {p.evidenceNote && <p className="evidence-note">{p.evidenceNote}</p>}
   <div className="case-overview"><section><h2>The problem</h2><p>{p.challenge}</p><h2 style={{marginTop:28}}>My contribution</h2><ul>{p.responsibilities.map(r=><li key={r}>{r}</li>)}</ul></section>
   {p.diagram ? <WorkflowVisual kind={p.diagram}/> : <figure className="case-image"><Image src={p.heroImage} alt={`${p.client ?? p.title}: product in use`} width={1400} height={840} sizes="(min-width:800px) 50vw,100vw" priority/><figcaption>Product context for the workflow and interface work described here.</figcaption></figure>}</div>
   {!p.diagram && <div className="case-overview"><section><h2>Approach</h2><p>{p.approach}</p></section><section><h2>Delivered work</h2><p>{p.outcome}</p></section></div>}
   <div className="case-body">{!p.diagram && <h2>Project context</h2>}<ReactMarkdown>{p.content}</ReactMarkdown></div>
   {images.length>0 && <div className="case-gallery">{images.map((src,i)=><figure className="case-image" key={src}><Image src={src} alt={`${p.client ?? p.title}: supporting product view ${i+1}`} width={1000} height={700} sizes="(min-width:800px) 50vw,100vw"/><figcaption>Supporting product view · {p.client ?? p.title}</figcaption></figure>)}</div>}
   {next && <div className="case-next"><div><p className="eyebrow">Next project</p><h2>{next.title}</h2></div><Link className="action-secondary" href={`/work/${next.slug}/`}>Explore the project →</Link></div>}
 </article></main><Footer/></div>;
}
