import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { WorkCaseStudy } from "@/lib/content";

export function WorkCard({ project, priority = false }: { project: WorkCaseStudy; priority?: boolean }) {
  return (
    <Reveal className="group">
      <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white/70 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(17,17,17,0.12)]">
        <div className="overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--bg-alt)]">
          <Image
            src={project.heroImage}
            alt={`${project.title} hero artwork`}
            width={1400}
            height={960}
            className="aspect-[5/4] w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
            priority={priority}
          />
        </div>
        <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
              {project.role}
            </p>
            <p className="shrink-0 text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
              {project.year}
            </p>
          </div>
          <div>
            <h3 className="card-title title-two-line min-h-[2.2em] font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.045em] text-[color:var(--accent)]">
              {project.title}
            </h3>
            <p className="mt-2 min-h-[7rem] text-[0.98rem] leading-7 text-[color:var(--text)]">
              {project.summary}
            </p>
          </div>
          <div className="rounded-[1.35rem] border border-[color:var(--border)] bg-[color:var(--bg-alt)]/72 p-3.5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-muted)]">Focus</p>
            <p className="mt-2 min-h-[3.75rem] text-sm leading-6 text-[color:var(--text)]">{project.focus}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[color:var(--border)] bg-white px-3 py-1 text-xs text-[color:var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between gap-4 border-t border-[color:var(--border)] pt-4">
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
              {project.status}
            </p>
            <Link
              href={`/work/${project.slug}`}
              className="btn-dark inline-flex shrink-0 items-center justify-center rounded-full px-5 py-3.5 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
            >
              View case study
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
