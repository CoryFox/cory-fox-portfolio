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
      <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">{label}</p>
      <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-none text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-lg leading-8 text-[color:var(--text-secondary)]">{description}</p>
      ) : null}
    </div>
  );
}
