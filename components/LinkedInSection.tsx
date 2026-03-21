import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type LinkedInContent = {
  title: string;
  description: string;
  href: string;
};

export function LinkedInSection({ content }: { content: LinkedInContent }) {
  return (
    <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal mode="immediate" className="rounded-3xl border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.68),rgba(239,234,226,0.9))] p-6 shadow-[var(--shadow-soft)] sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">LinkedIn</p>
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[2rem] font-bold uppercase tracking-[0.05em] leading-[0.98] text-[color:var(--accent)] sm:text-[2.6rem] lg:text-[3rem]">
                {content.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--text)] sm:mt-6 sm:text-lg sm:leading-8">
                {content.description}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[color:var(--border)] bg-white/65 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-muted)]">Focus</p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">SaaS, UX, design systems, frontend</p>
              </div>
              <div className="rounded-2xl border border-[color:var(--border)] bg-white/65 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-muted)]">Best for</p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">Roles, referrals, smart conversations</p>
              </div>
              <div className="sm:col-span-2">
                <Link
                  href={content.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-dark inline-flex rounded-full px-6 py-3 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--button-dark)]"
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
