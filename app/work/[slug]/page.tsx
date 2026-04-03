import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { getAllWork, getWorkBySlug } from "@/lib/content";

function MarkdownBlock({
  content,
  className
}: {
  content: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <ReactMarkdown
        components={{
          p: ({ children }) => <p>{children}</p>,
          strong: ({ children }) => <strong className="font-semibold text-[color:var(--accent)]">{children}</strong>
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

function CaseStudyImage({
  src,
  alt,
  priority = false
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] shadow-[var(--shadow-soft)] self-start sm:min-h-[24rem]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(239,234,226,0.92))]" />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/78 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)] [animation-delay:0ms]" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)] [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)] [animation-delay:300ms]" />
        </div>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={1100}
        className="relative z-20 h-auto w-full"
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}

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

  const nextProject =
    projects.find((item) => item.slug === project.nextSlug) ??
    projects.find((item) => item.slug !== slug) ??
    projects[0];
  const detailImages = Array.from(new Set(project.gallery.filter((image) => image !== project.heroImage)));
  const hasImageOne = Boolean(detailImages[0]);
  const hasImageTwo = Boolean(detailImages[1]);
  const hasImageThree = Boolean(detailImages[2]);

  return (
    <div className="editorial-shell min-h-screen">
      <Header />
      <main className="px-6 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10">
        <article className="mx-auto max-w-6xl">
          <Reveal mode="immediate" className="grid gap-6 border-b border-[color:var(--border)] pb-10 sm:gap-8 sm:pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                {project.role}
              </p>
              <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[2.9rem] leading-[0.94] uppercase tracking-[0.04em] sm:text-6xl lg:text-8xl">
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
            </div>
          </Reveal>

          <Reveal mode="immediate" className="mt-6 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] shadow-[var(--shadow-soft)] sm:mt-8">
            <div className="relative min-h-[20rem] sm:min-h-[28rem]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(239,234,226,0.92))]" />
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/78 px-4 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)] [animation-delay:0ms]" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)] [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)] [animation-delay:300ms]" />
                </div>
              </div>
              <Image
                src={project.heroImage}
                alt={`${project.title} hero artwork`}
                width={1600}
                height={960}
                className="relative z-20 h-auto w-full"
                priority
                sizes="100vw"
              />
            </div>
          </Reveal>

          <div
            className={`mt-6 grid gap-5 sm:mt-8 sm:gap-6 ${
              hasImageOne ? "lg:grid-cols-2" : ""
            }`}
          >
            <Reveal mode="immediate" className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                Technologies
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-[color:var(--text)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                Responsibilities
              </p>
              <div className="mt-4 space-y-3">
                {project.responsibilities.map((item) => (
                  <div key={item} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-alt)]/72 p-4">
                    <MarkdownBlock
                      content={item}
                      className="text-sm leading-6 text-[color:var(--text)] [&_p]:m-0"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
            {hasImageOne ? (
              <Reveal mode="immediate">
                <CaseStudyImage
                  src={detailImages[0]!}
                  alt={`${project.title} product detail`}
                  priority
                />
              </Reveal>
            ) : null}
          </div>

          <div
            className={`mt-10 grid gap-6 sm:mt-14 sm:gap-8 ${
              hasImageTwo ? "lg:grid-cols-2" : ""
            }`}
          >
            <div className="grid gap-6">
              <Reveal mode="immediate" className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                  Problem
                </p>
                <MarkdownBlock
                  content={project.challenge}
                  className="mt-4 text-base leading-7 text-[color:var(--text-secondary)] [&_p]:m-0"
                />
              </Reveal>
              <Reveal mode="immediate" className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                  Focus
                </p>
                <MarkdownBlock
                  content={project.focus}
                  className="mt-4 text-base leading-7 text-[color:var(--text-secondary)] [&_p]:m-0"
                />
              </Reveal>
              <Reveal mode="immediate" className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--accent)] p-6 text-[color:var(--button-light-text)] sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-white">Outcome</p>
                <MarkdownBlock
                  content={project.outcome}
                  className="mt-4 text-base leading-7 text-white [&_p]:m-0 [&_strong]:text-white"
                />
              </Reveal>
            </div>

            {hasImageTwo ? (
              <Reveal mode="immediate">
                <CaseStudyImage
                  src={detailImages[1]!}
                  alt={`${project.title} interface preview`}
                />
              </Reveal>
            ) : null}
          </div>

          <div
            className={`mt-10 grid gap-6 sm:mt-14 sm:gap-8 ${
              hasImageThree ? "lg:grid-cols-2" : ""
            }`}
          >
            {hasImageThree ? (
              <Reveal mode="immediate">
                <CaseStudyImage
                  src={detailImages[2]!}
                  alt={`${project.title} supporting workflow`}
                />
              </Reveal>
            ) : null}

            <div className="grid gap-6">
              <Reveal mode="immediate" className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                  Approach
                </p>
                <MarkdownBlock
                  content={project.approach}
                  className="mt-4 text-base leading-7 text-[color:var(--text-secondary)] [&_p]:m-0"
                />
              </Reveal>
              <Reveal mode="immediate" className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                  Project notes
                </p>
                <div className="prose-markdown mt-4 max-w-none text-[color:var(--text-secondary)]">
                  <ReactMarkdown>{project.content}</ReactMarkdown>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal mode="immediate" className="mt-14 rounded-3xl border border-[color:var(--border)] bg-white/65 px-6 py-6 sm:mt-20 sm:px-10 sm:py-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
              Next case study
            </p>
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[2.2rem] leading-[0.96] uppercase tracking-[0.04em] sm:text-5xl">
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
