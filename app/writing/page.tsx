import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WritingSection } from "@/components/WritingSection";
import { getLatestMediumPosts } from "@/lib/medium";
export const metadata:Metadata={title:"Writing",description:"Notes on systems, UX and practical delivery by Cory Fox.",alternates:{canonical:"/writing/"}};
export default async function WritingPage(){const posts=await getLatestMediumPosts();return <div className="editorial-shell"><Header/><main id="main-content"><div className="portfolio-container archive-heading"><p className="eyebrow">Notes & perspectives</p><h1>Writing.</h1><p>Thoughts on digital products, implementation and making systems easier to use.</p></div><WritingSection intro="Selected articles from Medium." posts={posts}/></main><Footer/></div>}
