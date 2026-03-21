import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { DemosSection } from "@/components/DemosSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowIWorkSection } from "@/components/HowIWorkSection";
import { LinkedInSection } from "@/components/LinkedInSection";
import { WorkSection } from "@/components/WorkSection";
import { WritingSection } from "@/components/WritingSection";
import {
  getAboutContent,
  getAllDemos,
  getExperienceContent,
  getFeaturedWork,
  getHomeContent
} from "@/lib/content";
import { getLatestMediumPosts } from "@/lib/medium";

export default async function HomePage() {
  const [home, about, experience, work, demos, posts] = await Promise.all([
    getHomeContent(),
    getAboutContent(),
    getExperienceContent(),
    getFeaturedWork(),
    getAllDemos(),
    getLatestMediumPosts()
  ]);

  return (
    <div className="editorial-shell overflow-x-clip">
      <Header />
      <main>
        <Hero content={home.hero} />
        <AboutSection content={about} />
        <WorkSection intro={home.workIntro} work={work} />
        <ExperienceSection content={experience} />
        <HowIWorkSection content={home.howIWork} whatIEnjoy={home.whatIEnjoy} />
        <DemosSection intro={home.demosIntro} demos={demos} />
        <WritingSection intro={home.writingIntro} posts={posts} />
        <LinkedInSection content={home.linkedin} />
        <ContactSection content={home.contact} />
      </main>
      <Footer />
    </div>
  );
}
