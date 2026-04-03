import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type HomeContent = {
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    framing: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    titles: string[];
    cards: Array<{
      title: string;
      body: string;
    }>;
  };
  implementation: {
    label: string;
    title: string;
    intro: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  workIntro: string;
  demosIntro: string;
  writingIntro: string;
  linkedin: {
    label: string;
    title: string;
    description: string;
    focusTitle: string;
    focusBody: string;
    bestForTitle: string;
    bestForBody: string;
    buttonLabel: string;
    href: string;
  };
  idealRoles: {
    label: string;
    title: string;
    description: string;
    themes: Array<{
      title: string;
      body: string;
    }>;
    supportingText: string;
  };
  contact: {
    label: string;
    title: string;
    description: string[];
    helperText: string;
    email: string;
  };
};

export type AboutContent = {
  label: string;
  title: string;
  principles: string[];
  body: string;
};

export type ExperienceContent = {
  profileSummary: string;
  timeline: Array<{
    role: string;
    company: string;
    period: string;
    bullets: string[];
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  education: string[];
};

export type WorkCaseStudy = {
  title: string;
  slug: string;
  summary: string;
  role: string;
  focus: string;
  technologies: string[];
  responsibilities: string[];
  year: string;
  status: string;
  tags: string[];
  heroImage: string;
  cardImage: string;
  featured: boolean;
  order: number;
  challenge: string;
  approach: string;
  outcome: string;
  gallery: string[];
  nextSlug?: string;
  content: string;
};

export type DemoProject = {
  key: string;
  category: string;
  title: string;
  subtitle: string;
  tags: string[];
  tech: string[];
  desktopImage: string;
  detailImage: string;
  mobileImage: string;
  url: string;
  overview: string;
  notes: string[];
  order: number;
};

const contentDirectory = path.join(process.cwd(), "content");

export const getHomeContent = cache(async (): Promise<HomeContent> => {
  const file = await fs.readFile(path.join(contentDirectory, "site", "home.json"), "utf8");
  return JSON.parse(file) as HomeContent;
});

export const getAboutContent = cache(async (): Promise<AboutContent> => {
  const file = await fs.readFile(path.join(contentDirectory, "site", "about.md"), "utf8");
  const { data, content } = matter(file);
  return {
    label: data.label,
    title: data.title,
    principles: data.principles,
    body: content.trim()
  };
});

export const getExperienceContent = cache(async (): Promise<ExperienceContent> => {
  const file = await fs.readFile(path.join(contentDirectory, "site", "experience.json"), "utf8");
  return JSON.parse(file) as ExperienceContent;
});

export const getAllWork = cache(async (): Promise<WorkCaseStudy[]> => {
  const workDirectory = path.join(contentDirectory, "work");
  const files = await fs.readdir(workDirectory);
  const workItems = await Promise.all(
    files.filter((file) => file.endsWith(".md")).map(async (file) => {
      const source = await fs.readFile(path.join(workDirectory, file), "utf8");
      const { data, content } = matter(source);
      return {
        ...(data as Omit<WorkCaseStudy, "content">),
        content: content.trim()
      };
    })
  );

  return workItems.sort((a, b) => a.order - b.order);
});

export const getFeaturedWork = cache(async (): Promise<WorkCaseStudy[]> => {
  const workItems = await getAllWork();
  return workItems.filter((item) => item.featured).slice(0, 4);
});

export const getAllDemos = cache(async (): Promise<DemoProject[]> => {
  const file = await fs.readFile(path.join(contentDirectory, "site", "demos.json"), "utf8");
  const demos = JSON.parse(file) as DemoProject[];
  return demos.sort((a, b) => a.order - b.order);
});

export const getWorkBySlug = cache(async (slug: string): Promise<WorkCaseStudy | undefined> => {
  const workItems = await getAllWork();
  return workItems.find((item) => item.slug === slug);
});
