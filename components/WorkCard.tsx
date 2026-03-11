import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { WorkCaseStudy } from "@/lib/content";

export function WorkCard({ project, priority = false }: { project: WorkCaseStudy; priority?: boolean }) {
  return (
    <Reveal className="group">
      <article className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white/62 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(17,17,17,0.12)]">
        <div className="overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--bg-alt)]">
          <Image
            src={project.cardImage}
            alt={`${project.title} card artwork`}
            width={1400}
            height={1080}
            className="h-auto w-full transition duration-700 group-hover:scale-[1.03]"
            priority={priority}
          />
        </div>
        <div className="space-y-5 p-6 sm:p-7">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs text-[color:var(--text-secondary)]">
                {tag}
              </span>
            ))}
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-4xl leading-none">{project.title}</h3>
            <p className="mt-3 max-w-xl text-base leading-7 text-[color:var(--text-secondary)]">
              {project.summary}
            </p>
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm text-[color:var(--accent)] transition group-hover:gap-3"
          >
            View project <span aria-hidden="true">/</span>
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
