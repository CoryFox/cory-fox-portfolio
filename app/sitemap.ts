import type { MetadataRoute } from "next";
import { getAllWork } from "@/lib/content";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://coryfox.co.uk";
  const work = await getAllWork();

  return [
    {
      url: siteUrl,
      lastModified: new Date()
    },
    ...work.map((item) => ({
      url: `${siteUrl}/work/${item.slug}`,
      lastModified: new Date()
    }))
  ];
}
