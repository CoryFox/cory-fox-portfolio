"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MediumPost } from "@/lib/medium";
import { formatDate } from "@/lib/utils";

type RssToJsonResponse = {
  status?: string;
  items?: Array<{
    title?: string;
    link?: string;
    pubDate?: string;
    description?: string;
    content?: string;
    thumbnail?: string;
  }>;
};

function byNewest(a: { pubDate?: string }, b: { pubDate?: string }) {
  const aTime = a.pubDate ? new Date(a.pubDate).getTime() : 0;
  const bTime = b.pubDate ? new Date(b.pubDate).getTime() : 0;
  return bTime - aTime;
}

function normalisePosts(posts: MediumPost[]) {
  const seen = new Set<string>();

  return [...posts]
    .sort(byNewest)
    .filter((post) => {
      if (seen.has(post.link)) {
        return false;
      }

      seen.add(post.link);
      return true;
    })
    .slice(0, 3);
}

function extractThumbnail(...sources: Array<string | undefined>) {
  for (const source of sources) {
    const matches = source?.matchAll(/<img[^>]+src="([^"]+)"/gi);

    if (!matches) {
      continue;
    }

    for (const match of matches) {
      const src = match[1];

      if (src && !src.includes("/_/stat?event=")) {
        return src;
      }
    }
  }

  return undefined;
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function buildExcerpt(value: string) {
  const text = stripHtml(value);

  if (text.length <= 160) {
    return text;
  }

  return `${text.slice(0, 160).trim()}...`;
}

function getPositionedExcerpt(post: MediumPost) {
  const title = post.title.toLowerCase();

  if (title.includes("clarity")) {
    return "Thoughts on making products easier to use through better structure and implementation-aware UX.";
  }

  if (title.includes("teaching")) {
    return "Reflections on explaining difficult ideas clearly, reducing cognitive overload, and supporting confidence.";
  }

  if (title.includes("adoption")) {
    return "Notes on the smaller UX decisions that improve adoption and support better day-to-day delivery.";
  }

  return post.excerpt;
}

export function WritingSection({ intro, posts }: { intro: string; posts: MediumPost[] }) {
  const [livePosts, setLivePosts] = useState(() => normalisePosts(posts));

  useEffect(() => {
    let cancelled = false;

    async function loadLivePosts() {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@coryowenfox",
          {
            cache: "no-store"
          }
        );

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as RssToJsonResponse;

        if (data.status !== "ok" || !data.items?.length) {
          return;
        }

        const nextPosts = data.items
          .sort(byNewest)
          .slice(0, 3)
          .map((item) => ({
            title: item.title ?? "Untitled post",
            link: item.link ?? "https://medium.com/@coryowenfox",
            pubDate: item.pubDate ?? new Date().toISOString(),
            excerpt: buildExcerpt(item.description ?? item.content ?? ""),
            thumbnail: item.thumbnail ?? extractThumbnail(item.content, item.description)
          }));

        if (!cancelled && nextPosts.length) {
          startTransition(() => {
            setLivePosts(normalisePosts(nextPosts));
          });
        }
      } catch {
        // Keep the statically rendered posts as the fallback for export/runtime failures.
      }
    }

    void loadLivePosts();

    return () => {
      cancelled = true;
    };
  }, [posts]);

  return (
    <section className="section-anchor px-6 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-24" id="writing">
      <div className="mx-auto max-w-7xl">
        <Reveal mode="immediate">
          <SectionHeading
            id="writing-heading"
            label="WRITING"
            title="WRITING ON SYSTEMS, UX, AND DELIVERY."
            description={intro}
          />
        </Reveal>
        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {normalisePosts(livePosts).map((post, index) => (
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
                    {getPositionedExcerpt(post)}
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
