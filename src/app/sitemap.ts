import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/data/projects";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/enquire`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...getAllProjectSlugs().map((slug) => ({
      url: `${siteUrl}/projects/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
