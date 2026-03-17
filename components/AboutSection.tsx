import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { splitMarkdownParagraphs } from "@/lib/utils";

type AboutContent = {
  label: string;
  title: string;
  principles: string[];
  body: string;
};

const principleIcons: Record<string, ReactNode> = {
  "Clarity before cleverness": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M4 12h16" strokeLinecap="round" />
      <path d="M12 4v16" strokeLinecap="round" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),
  "Design for real behaviour, not ideal users": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M7 20v-2a5 5 0 0 1 10 0v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  ),
  "Systems that scale": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <rect x="3" y="4" width="7" height="7" rx="1.5" />
      <rect x="14" y="4" width="7" height="7" rx="1.5" />
      <rect x="8.5" y="13" width="7" height="7" rx="1.5" />
      <path d="M10 7.5h4M12 11v2" strokeLinecap="round" />
    </svg>
  ),
  "Accessibility from the start": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
};

export function AboutSection({ content }: { content: AboutContent }) {
  const paragraphs = splitMarkdownParagraphs(content.body);

  return (
    <section className="section-anchor px-6 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-24" id="about">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading id="about-heading" label={content.label} title={content.title} />
        </Reveal>
        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          <Reveal className="rounded-3xl border border-[color:var(--border)] bg-white/58 p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <div className="space-y-5 text-lg leading-8 text-[color:var(--text)]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-6">
            <Reveal className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                Principles
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:grid-rows-2">
                {content.principles.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[156px] flex-col items-start justify-between rounded-2xl border border-[color:var(--border)] bg-white/60 px-5 py-5 text-left"
                  >
                    <span className="inline-flex rounded-full border border-[color:var(--border)] bg-white p-3 text-[color:var(--accent)]">
                      {principleIcons[item]}
                    </span>
                    <p className="mt-6 font-[family-name:var(--font-display)] text-[1.35rem] leading-tight">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
