import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type LinkedInContent = {
  title: string;
  description: string;
  href: string;
};

export function LinkedInSection({ content }: { content: LinkedInContent }) {
  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="rounded-[32px] border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.68),rgba(239,234,226,0.9))] p-8 shadow-[var(--shadow-soft)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">LinkedIn</p>
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-none sm:text-5xl lg:text-6xl">
                {content.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
                {content.description}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[color:var(--border)] bg-white/65 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">Focus</p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-3xl">Product, UX, systems, EdTech</p>
              </div>
              <div className="rounded-[24px] border border-[color:var(--border)] bg-white/65 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">Best for</p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-3xl">Roles, referrals, smart conversations</p>
              </div>
              <div className="sm:col-span-2">
                <Link
                  href={content.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-[color:var(--button-dark)] px-6 py-3 text-sm text-[color:var(--button-light-text)] transition hover:bg-[color:var(--accent)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--button-dark)]"
                >
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
