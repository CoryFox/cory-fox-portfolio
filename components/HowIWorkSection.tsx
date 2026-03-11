import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type HowIWorkContent = {
  title: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
};

type WhatIEnjoyContent = {
  title: string;
  items: string[];
};

export function HowIWorkSection({
  content,
  whatIEnjoy
}: {
  content: HowIWorkContent;
  whatIEnjoy: WhatIEnjoyContent;
}) {
  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            id="how-i-work-heading"
            label="How I Work"
            title={content.title}
            description="A simple product design approach shaped by research, systems thinking, and close collaboration."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {content.steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={0.05 * index}
              className="rounded-[24px] border border-[color:var(--border)] bg-white/58 p-8 shadow-[var(--shadow-soft)]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--text-secondary)]">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-[32px] border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
            {whatIEnjoy.title}
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {whatIEnjoy.items.map((item) => (
              <div key={item} className="rounded-[24px] border border-[color:var(--border)] bg-white/65 p-6">
                <p className="text-base leading-7 text-[color:var(--text-secondary)]">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
