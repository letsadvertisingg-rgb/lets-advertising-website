import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

/** All crawlers — search engines, social previews, and AI answer engines. */
const USER_AGENTS = [
  
  "*",
  "Googlebot",
  "Bingbot",
  "Slurp",
  "DuckDuckBot",
  "Applebot",
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "FacebookBot",
  "facebookexternalhit",
  "Twitterbot",
  "LinkedInBot",
  "WhatsApp",
  "Slackbot",
  "Discordbot",
  "ia_archiver",
  "SemrushBot",
  "AhrefsBot",
  "MJ12bot",
  "DotBot",
];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  return {
    rules: USER_AGENTS.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: ["/api/"],
    })),
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
