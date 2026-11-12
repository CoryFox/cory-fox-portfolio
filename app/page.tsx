import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowIWorkSection } from "@/components/HowIWorkSection";
import { WorkSection } from "@/components/WorkSection";
import { getExperienceContent, getFeaturedWork, getHomeContent } from "@/lib/content";
import Link from "next/link";
export default async function HomePage() {
 const [home,experience,work] = await Promise.all([getHomeContent(),getExperienceContent(),getFeaturedWork()]);
 return <div className="editorial-shell"><Header /><main id="main-content"><Hero content={home.hero}/><WorkSection intro={home.workIntro} work={work}/><HowIWorkSection/><ExperienceSection content={experience}/><div className="portfolio-container writing-link section-anchor" id="writing"><Link className="text-link" href="/writing/">Writing on systems, UX and delivery <span aria-hidden="true">→</span></Link></div><ContactSection content={home.contact}/></main><Footer/></div>;
}
