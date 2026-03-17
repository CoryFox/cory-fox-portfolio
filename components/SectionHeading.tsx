import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  label,
  title,
  description,
  align = "left"
}: {
  id: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      id={id}
      className={cn(
        "section-anchor",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      )}
    >
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-[color:var(--text-muted)]">{label}</p>
      <h2 className="section-title title-two-line mt-4 font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.05em] text-balance text-[color:var(--accent)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-[color:var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
