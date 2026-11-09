import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type ExperienceContent = {
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

export function ExperienceSection({ content }: { content: ExperienceContent }) {
  return (
    <section className="section-anchor px-6 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-18" id="experience">
      <div className="mx-auto max-w-7xl">
        <Reveal mode="immediate">
          <SectionHeading
            id="experience-heading"
            label="EXPERIENCE"
            title="IMPLEMENTATION, TECHNOLOGY, AND PEOPLE."
            description={content.profileSummary}
          />
        </Reveal>

        <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
          <div className="min-w-0 space-y-5">
            {content.timeline.map((entry, index) => (
              <Reveal
                key={`${entry.role}-${entry.company}-${entry.period}`}
                delay={0.04 * index}
                className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 shadow-[var(--shadow-soft)] sm:p-8"
              >
                <div className="flex flex-col gap-2 border-b border-[color:var(--border)] pb-4">
                  <div className="min-w-0">
                    <h3 className="break-words font-[family-name:var(--font-display)] text-[clamp(1.25rem,2.3vw,1.65rem)] font-bold leading-tight text-[color:var(--accent)]">
                      {entry.role}
                    </h3>
                    <p className="text-base text-[color:var(--text)]">{entry.company}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.1em] text-[color:var(--text-secondary)]">{entry.period}</p>
                </div>
                <ul className="mt-6 space-y-3 text-[color:var(--text)]">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="grid grid-cols-[0.5rem_1fr] items-start gap-x-4 leading-7">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      <span className="min-w-0">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="space-y-6">
            {content.skills.map((group, index) => (
              <Reveal
                key={group.category}
                delay={0.08 * index}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6 sm:p-8"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                  {group.category}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-[color:var(--border)] bg-white/65 px-3 py-2 text-sm text-[color:var(--text)]">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 sm:p-8">
              <p className="mb-6 text-base leading-7 text-[color:var(--text-secondary)]">
                Teaching strengthened my ability to explain difficult ideas clearly, support different needs, and guide people through structured processes with confidence.
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                Education
              </p>
              <div className="mt-6 space-y-4">
                {content.education.map((item) => (
                  <p key={item} className="border-b border-[color:var(--border)] pb-4 text-[color:var(--text)] last:border-b-0 last:pb-0">
                    {item}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--accent)] p-6 text-[color:var(--button-light-text)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-white">Curriculum vitae</p>
              <p className="mt-4 text-lg leading-8 text-white">
                Download my CV for AI transformation at Aptem, cross-platform automation, software delivery, and the UX and teaching experience behind my approach.
              </p>
              <Link
                href="/cv/cory-fox-cv.pdf"
                className="btn-light mt-6 inline-flex rounded-full border-white/40 px-6 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Download CV
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
