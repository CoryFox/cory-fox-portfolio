import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type IdealRolesContent = {
  label: string;
  title: string;
  description: string;
  themes: Array<{
    title: string;
    body: string;
  }>;
  supportingText: string;
};

export function IdealRolesSection({ content }: { content: IdealRolesContent }) {
  return (
    <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal
          mode="immediate"
          className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.68),rgba(239,234,226,0.92))] shadow-[var(--shadow-soft)]"
        >
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="border-b border-[color:var(--border)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <SectionHeading
                id="ideal-roles-heading"
                label={content.label}
                title={content.title}
                description={content.description}
              />
              <p className="mt-8 max-w-xl text-base leading-7 text-[color:var(--text)] sm:text-lg sm:leading-8">
                {content.supportingText}
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:p-8 lg:p-10">
              {content.themes.map((theme, index) => (
                <Reveal
                  key={theme.title}
                  delay={0.05 * index}
                  className="rounded-[1.6rem] border border-[color:var(--border)] bg-white/72 p-5 sm:p-6"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.55rem] leading-[0.96] text-[color:var(--accent)] sm:text-[1.8rem]">
                    {theme.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[0.98rem] leading-7 text-[color:var(--text)]">
                    {theme.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
