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
    <section className="section-anchor px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-24" id="about">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading id="about-heading" label={content.label} title={content.title} />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-[32px] border border-[color:var(--border)] bg-white/58 p-8 shadow-[var(--shadow-soft)]">
            <div className="space-y-5 text-lg leading-8 text-[color:var(--text-secondary)]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-6">
            <Reveal className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                Principles
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {content.principles.map((item) => (
                  <div key={item} className="rounded-[24px] border border-[color:var(--border)] bg-white/60 px-4 py-6">
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
