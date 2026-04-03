import Parser from "rss-parser";

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail?: string;
};

type RawMediumItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  content?: string;
  contentSnippet?: string;
  description?: string;
  encodedContent?: string;
};

const parser = new Parser<Record<string, never>, RawMediumItem>({
  customFields: {
    item: [
      ["content:encoded", "encodedContent"],
      ["description", "description"]
    ]
  }
});

const fallbackPosts: MediumPost[] = [
  {
    title: "Designing for clarity in complex products",
    link: "https://medium.com/@coryowenfox",
    pubDate: "2026-01-10T00:00:00.000Z",
    excerpt: "A fallback article card used when the Medium feed is unavailable during build or runtime.",
    thumbnail: "/images/writing/clarity-complex-products.jpg"
  },
  {
    title: "What teaching sharpened in my UX practice",
    link: "https://medium.com/@coryowenfox",
    pubDate: "2025-12-02T00:00:00.000Z",
    excerpt: "Notes on accessibility, cognitive load, and why communication quality matters in product design.",
    thumbnail: "/images/writing/teaching-ux-practice.jpg"
  },
  {
    title: "Making adoption gains through smaller UX decisions",
    link: "https://medium.com/@coryowenfox",
    pubDate: "2025-10-18T00:00:00.000Z",
    excerpt: "A short fallback summary covering iterative improvement, support reduction, and design system thinking.",
    thumbnail: "/images/writing/adoption-ux-decisions.jpg"
  }
];

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
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

function buildExcerpt(item: RawMediumItem) {
  const source = item.contentSnippet ?? item.encodedContent ?? item.content ?? item.description ?? "";
  const plain = stripHtml(source);

  if (plain.length <= 160) {
    return plain;
  }

  return `${plain.slice(0, 160).trim()}...`;
}

export async function getLatestMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch("https://medium.com/feed/@coryowenfox", {
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
      },
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Medium feed request failed with ${response.status}`);
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    return (feed.items ?? []).slice(0, 3).map((item) => ({
      title: item.title ?? "Untitled post",
      link: item.link ?? "https://medium.com/@coryowenfox",
      pubDate: item.pubDate ?? new Date().toISOString(),
      excerpt: buildExcerpt(item),
      thumbnail: extractThumbnail(
        item.encodedContent,
        item.content,
        item.description
      )
    }));
  } catch {
    return fallbackPosts;
  }
}
