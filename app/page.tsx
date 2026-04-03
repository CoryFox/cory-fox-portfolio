import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { DemosSection } from "@/components/DemosSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IdealRolesSection } from "@/components/IdealRolesSection";
import { ImplementationSection } from "@/components/ImplementationSection";
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
        <ImplementationSection content={home.implementation} />
        <AboutSection content={about} />
        <WorkSection intro={home.workIntro} work={work} />
        <ExperienceSection content={experience} />
        <DemosSection intro={home.demosIntro} demos={demos} />
        <WritingSection intro={home.writingIntro} posts={posts} />
        <LinkedInSection content={home.linkedin} />
        <IdealRolesSection content={home.idealRoles} />
        <ContactSection content={home.contact} />
      </main>
      <Footer />
    </div>
  );
}
