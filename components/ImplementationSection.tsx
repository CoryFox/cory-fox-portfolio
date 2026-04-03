import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type ImplementationContent = {
  label: string;
  title: string;
  intro: string;
  items: Array<{
    title: string;
    description: string;
  }>;
};

export function ImplementationSection({ content }: { content: ImplementationContent }) {
  return (
    <section className="px-6 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal mode="immediate">
          <SectionHeading
            id="implementation-heading"
            label={content.label}
            title={content.title}
            description={content.intro}
          />
        </Reveal>

        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {content.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.05 * index}
              className="rounded-2xl border border-[color:var(--border)] bg-white/58 p-6 shadow-[var(--shadow-soft)] sm:p-7"
            >
              <h3 className="font-[family-name:var(--font-display)] text-[1.45rem] leading-tight text-[color:var(--accent)] sm:text-[1.6rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-[color:var(--text)]">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
