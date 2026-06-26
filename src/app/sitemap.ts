import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

type SitemapRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/** All public, indexable routes in the app. */
const SITEMAP_ROUTES: SitemapRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/social-media-marketing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/paid-advertising", changeFrequency: "monthly", priority: 0.9 },
  { path: "/content-marketing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/analytics-tracking", changeFrequency: "monthly", priority: 0.9 },
  { path: "/aeo-services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/llms.txt", changeFrequency: "monthly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return SITEMAP_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

export { SITEMAP_ROUTES };
