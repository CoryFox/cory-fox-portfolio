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
    <section className="section-anchor px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-24" id="experience">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            id="experience-heading"
            label="Experience"
            title="What I’ve built, led, and sharpened across product, frontend, and teaching."
            description={content.profileSummary}
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            {content.timeline.map((entry, index) => (
              <Reveal
                key={`${entry.role}-${entry.company}`}
                delay={0.04 * index}
                className="rounded-[24px] border border-[color:var(--border)] bg-white/58 p-8 shadow-[var(--shadow-soft)]"
              >
                <div className="flex flex-col gap-4 border-b border-[color:var(--border)] pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl">{entry.role}</h3>
                    <p className="text-base text-[color:var(--text-secondary)]">{entry.company}</p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">{entry.period}</p>
                </div>
                <ul className="mt-6 space-y-4 text-[color:var(--text-secondary)]">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-4 leading-7">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      <span>{bullet}</span>
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
                className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-8"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                  {group.category}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-[color:var(--border)] bg-white/65 px-3 py-2 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal className="rounded-[24px] border border-[color:var(--border)] bg-white/58 p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                Education
              </p>
              <div className="mt-6 space-y-4">
                {content.education.map((item) => (
                  <p key={item} className="border-b border-[color:var(--border)] pb-4 last:border-b-0 last:pb-0">
                    {item}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--accent)] p-8 text-[color:var(--button-light-text)]">
              <p className="text-xs uppercase tracking-[0.28em] text-white">Curriculum vitae</p>
              <p className="mt-4 text-lg leading-8 text-white">
                Download the full CV if you want the formal version, but the short version is simple: I design clearly, work commercially, and understand users beyond the idealised version in a deck.
              </p>
              <Link
                href="/cv/cory-fox-cv.pdf"
                className="mt-6 inline-flex rounded-full border border-white/40 px-6 py-3 text-sm text-white transition hover:border-white hover:bg-white hover:text-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
