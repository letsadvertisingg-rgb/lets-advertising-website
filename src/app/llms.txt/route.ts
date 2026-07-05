import { getSiteUrl } from "@/lib/site";

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
- [Blog](${baseUrl}/blog): Digital marketing and Answer Engine Optimization guides.
- [Common AEO Mistakes Businesses Make](${baseUrl}/blog/common-aeo-mistakes-businesses-make): 10 AEO mistakes to avoid and practical fixes for AI search visibility.
- [How to Structure Content for AI Search Engines](${baseUrl}/blog/how-to-structure-content-for-ai-search-engines): AI SEO and AEO content structure guide for headings, FAQs, topic clusters, and technical optimization.
- [The Future of AI Search in 2026](${baseUrl}/blog/future-of-ai-search-2026): AI search trends, AEO strategies, and what businesses need to know in 2026.
- [AEO Best Practices for Local Businesses](${baseUrl}/blog/aeo-best-practices-for-local-businesses): How local businesses can get found in AI search and voice search results.
- [How to Get Your Business Featured in AI Search Results](${baseUrl}/blog/how-to-get-your-business-featured-in-ai-search-results): Practical strategies to improve AI search visibility and build authority.
- [How AI Search Is Changing Digital Marketing](${baseUrl}/blog/how-ai-search-is-changing-digital-marketing): How AI-powered search is reshaping SEO, content strategy, and digital marketing in 2026.
- [Will AI Replace Traditional SEO?](${baseUrl}/blog/will-ai-replace-traditional-seo): Why SEO remains essential and how to combine SEO with AEO in the age of AI search.
- [How to Optimize Your Website for ChatGPT & Google AI Overviews](${baseUrl}/blog/optimize-website-for-chatgpt-google-ai-overviews): AEO and GEO strategies for ChatGPT, Google AI Overviews, Gemini, and AI search visibility.
- [SEO vs AEO: What's the Difference?](${baseUrl}/blog/seo-vs-aeo-difference): Key differences between SEO and Answer Engine Optimization and why businesses need both.
- [What Is Answer Engine Optimization (AEO)?](${baseUrl}/blog/what-is-answer-engine-optimization-aeo): Comprehensive guide to AEO for ChatGPT, Google AI Overviews, Gemini, and other AI search platforms.

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
