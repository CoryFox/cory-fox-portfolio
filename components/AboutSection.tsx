import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { splitMarkdownParagraphs } from "@/lib/utils";

type AboutContent = {
  label: string;
  title: string;
  principles: string[];
  body: string;
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
            <div className="space-y-5 text-lg leading-8 text-[color:var(--text-secondary)]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-6">
            <Reveal className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                Principles
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {content.principles.map((item) => (
                  <div key={item} className="rounded-2xl border border-[color:var(--border)] bg-white/60 px-4 py-6">
                    <p className="font-[family-name:var(--font-display)] text-2xl">{item}</p>
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
