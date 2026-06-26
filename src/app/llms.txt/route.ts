import { getSiteUrl, SITE_ROUTES } from "@/lib/site";

function buildLlmsTxt(): string {
  const baseUrl = getSiteUrl();

  return `# Let's Advertising

> Let's Advertising is a digital marketing agency that helps businesses attract the right audience, generate quality leads, and turn visitors into paying customers. Services include website design, SEO, social media marketing, paid advertising, content marketing, analytics, and Answer Engine Optimization (AEO).

## Primary pages

- [Home](${baseUrl}/): Overview of digital marketing services, process, industries, FAQs, and contact.
- [Social Media Marketing](${baseUrl}/social-media-marketing): Strategy, management, content, paid social, growth, and influencer marketing across major platforms.
- [Paid Advertising](${baseUrl}/paid-advertising): Google Ads, Meta, LinkedIn, YouTube, remarketing, and performance-focused campaign management.
- [Content Marketing](${baseUrl}/content-marketing): SEO content, blogs, website copy, video strategy, email content, and AI-optimized content.
- [Analytics & Tracking](${baseUrl}/analytics-tracking): GA4, Google Tag Manager, dashboards, attribution, CRO analytics, and ecommerce measurement.
- [AEO Services](${baseUrl}/aeo-services): Answer Engine Optimization for ChatGPT, Google AI Overviews, Gemini, Perplexity, and voice search visibility.

## Services summary

- Website design and development
- Search engine optimization (SEO)
- Answer Engine Optimization (AEO)
- Social media marketing
- Google and paid advertising
- Content marketing
- Analytics and performance tracking

## Contact

- [Free consultation](${baseUrl}/#contact): Contact form on the homepage for inquiries and strategy calls.

## Crawling

- [Sitemap](${baseUrl}/sitemap.xml)
- [Robots](${baseUrl}/robots.txt)

## Optional

- Preferred name: Let's Advertising
- Industry focus: Digital marketing for startups, local businesses, and established brands
- Geography: Global services; content references India and international markets
`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
