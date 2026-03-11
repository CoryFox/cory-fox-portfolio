import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MediumPost } from "@/lib/medium";
import { formatDate } from "@/lib/utils";

export function WritingSection({ intro, posts }: { intro: string; posts: MediumPost[] }) {
  return (
    <section className="section-anchor px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-24" id="writing">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            id="writing-heading"
            label="Writing"
            title="I write about clarity, UX, accessibility, and the decisions behind better product work."
            description={intro}
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal
              key={post.link}
              delay={0.06 * index}
              className="h-full rounded-[24px] border border-[color:var(--border)] bg-white/58 p-8 shadow-[var(--shadow-soft)]"
            >
              <article className="flex h-full flex-col">
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  {formatDate(post.pubDate)}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-[color:var(--text-secondary)]">
                  {post.excerpt}
                </p>
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm text-[color:var(--accent)] underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                >
                  Read on Medium
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
