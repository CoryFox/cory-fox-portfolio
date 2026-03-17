import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { getAllWork, getWorkBySlug } from "@/lib/content";

export async function generateStaticParams() {
  const work = await getAllWork();
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getWorkBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary
  };
}

export default async function WorkDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [project, projects] = await Promise.all([getWorkBySlug(slug), getAllWork()]);

  if (!project) {
    notFound();
  }

  const nextProject = projects.find((item) => item.slug !== slug) ?? projects[0];

  return (
    <div className="editorial-shell min-h-screen">
      <Header />
      <main className="px-6 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10">
        <article className="mx-auto max-w-6xl">
          <Reveal className="grid gap-6 border-b border-[color:var(--border)] pb-10 sm:gap-8 sm:pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                {project.role}
              </p>
              <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[2.9rem] leading-[0.94] sm:text-6xl lg:text-8xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[color:var(--text-secondary)] sm:text-lg sm:leading-8">
                {project.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <span className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm">
                {project.year}
              </span>
              <span className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm">
                {project.status}
              </span>
            </div>
          </Reveal>

          <Reveal className="mt-6 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] shadow-[var(--shadow-soft)] sm:mt-8">
            <Image
              src={project.heroImage}
              alt={`${project.title} hero artwork`}
              width={1600}
              height={960}
              className="h-auto w-full"
              priority
            />
          </Reveal>

          <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6 lg:grid-cols-2">
            <Reveal className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                Project snapshot
              </p>
              <div className="mt-6 grid gap-5 text-[color:var(--text-secondary)] sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em]">Problem</p>
                  <p className="mt-2 leading-7">{project.challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em]">Role</p>
                  <p className="mt-2 leading-7">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em]">Approach</p>
                  <p className="mt-2 leading-7">{project.approach}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em]">Outcome</p>
                  <p className="mt-2 leading-7">{project.outcome}</p>
                </div>
              </div>
            </Reveal>
            <Reveal className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                Focus
              </p>
              <p className="mt-4 text-lg leading-8 text-[color:var(--text-secondary)]">{project.focus}</p>
              <p className="mt-6 text-sm leading-6 text-[color:var(--text-secondary)]">
                This project is framed to show the problem, the thinking behind the approach, and the product outcome as quickly as possible.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                Solution
              </p>
              <div className="prose-markdown mt-4 max-w-none text-[color:var(--text-secondary)]">
                <ReactMarkdown>{project.content}</ReactMarkdown>
              </div>
            </Reveal>

            <div className="grid gap-6">
              <Reveal className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                  Problem
                </p>
                <p className="mt-4 text-lg leading-8 text-[color:var(--text-secondary)]">{project.challenge}</p>
              </Reveal>
              <Reveal className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                  Thinking
                </p>
                <p className="mt-4 text-lg leading-8 text-[color:var(--text-secondary)]">{project.approach}</p>
              </Reveal>
              <Reveal className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--accent)] p-6 text-[color:var(--button-light-text)] sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-white">Result</p>
                <p className="mt-4 text-lg leading-8 text-white">{project.outcome}</p>
              </Reveal>
            </div>
          </div>

          <section className="mt-12 sm:mt-16">
            <Reveal className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                  Gallery
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-[2.2rem] leading-[0.96] sm:text-5xl">
                  Screens and flows from the shipped product work.
                </h2>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {project.gallery.map((image, index) => (
                <Reveal
                  key={image}
                  delay={0.08 * index}
                  className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] shadow-[var(--shadow-soft)]"
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery placeholder ${index + 1}`}
                    width={1200}
                    height={900}
                    className="h-auto w-full"
                  />
                </Reveal>
              ))}
            </div>
          </section>

          <Reveal className="mt-14 rounded-3xl border border-[color:var(--border)] bg-white/65 px-6 py-6 sm:mt-20 sm:px-10 sm:py-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
              Next project
            </p>
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[2.2rem] leading-[0.96] sm:text-5xl">
                  {nextProject.title}
                </h2>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
                  {nextProject.summary}
                </p>
              </div>
              <Link
                href={`/work/${nextProject.slug}`}
                className="btn-light inline-flex items-center justify-center rounded-full px-6 py-3 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
              >
                View next case study
              </Link>
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </div>
  );
}
