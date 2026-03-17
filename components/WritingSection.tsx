import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MediumPost } from "@/lib/medium";
import { formatDate } from "@/lib/utils";

export function WritingSection({ intro, posts }: { intro: string; posts: MediumPost[] }) {
  return (
    <section className="section-anchor px-6 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-24" id="writing">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            id="writing-heading"
            label="Writing"
            title="Writing on product design, UX, and accessibility."
            description={intro}
          />
        </Reveal>
        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {posts.map((post, index) => (
            <Reveal
              key={post.link}
              delay={0.06 * index}
              className="h-full overflow-hidden rounded-[24px] border border-[color:var(--border)] bg-white/58 shadow-[var(--shadow-soft)]"
            >
              <article className="flex h-full flex-col">
                {post.thumbnail ? (
                  <div className="overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--bg-alt)]">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={1200}
                      height={800}
                      className="aspect-[5/4] w-full object-cover"
                      unoptimized
                    />
                  </div>
                ) : null}
                <div className="flex h-full flex-col p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                    {formatDate(post.pubDate)}
                  </p>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-[color:var(--text)]">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-dark mt-6 inline-flex w-fit items-center justify-center rounded-full px-5 py-3 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                  >
                    Read on Medium
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
