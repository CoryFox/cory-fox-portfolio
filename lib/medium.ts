import Parser from "rss-parser";

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail?: string;
};

const parser = new Parser();

const fallbackPosts: MediumPost[] = [
  {
    title: "Designing for clarity in complex products",
    link: "https://medium.com/@coryowenfox",
    pubDate: "2026-01-10T00:00:00.000Z",
    excerpt: "A fallback article card used when the Medium feed is unavailable during build or runtime."
  },
  {
    title: "What teaching sharpened in my UX practice",
    link: "https://medium.com/@coryowenfox",
    pubDate: "2025-12-02T00:00:00.000Z",
    excerpt: "Notes on accessibility, cognitive load, and why communication quality matters in product design."
  },
  {
    title: "Making adoption gains through smaller UX decisions",
    link: "https://medium.com/@coryowenfox",
    pubDate: "2025-10-18T00:00:00.000Z",
    excerpt: "A short fallback summary covering iterative improvement, support reduction, and design system thinking."
  }
];

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function extractThumbnail(content?: string) {
  const match = content?.match(/<img[^>]+src="([^"]+)"/i);
  return match?.[1];
}

export async function getLatestMediumPosts(): Promise<MediumPost[]> {
  try {
    const feed = await parser.parseURL("https://medium.com/feed/@coryowenfox");

    return (feed.items ?? []).slice(0, 3).map((item) => ({
      title: item.title ?? "Untitled post",
      link: item.link ?? "https://medium.com/@coryowenfox",
      pubDate: item.pubDate ?? new Date().toISOString(),
      excerpt: stripHtml(item.contentSnippet ?? item.content ?? "").slice(0, 160).trim() + "...",
      thumbnail: extractThumbnail(item.content ?? undefined)
    }));
  } catch {
    return fallbackPosts;
  }
}
