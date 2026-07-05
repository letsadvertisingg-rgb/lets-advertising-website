export interface BlogPostMeta {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  publishedDate: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "common-aeo-mistakes-businesses-make",
    title: "Common AEO Mistakes Businesses Make (And How to Avoid Them)",
    seoTitle: "10 Common AEO Mistakes Businesses Make (And How to Avoid Them)",
    description:
      "Discover the most common Answer Engine Optimization (AEO) mistakes businesses make and learn practical strategies to improve visibility in AI-powered search. Optimize your content for AI search with expert tips from Let's Advertising.",
    category: "Answer Engine Optimization",
    author: "Let's Advertising",
    date: "July 6, 2026",
    readTime: "12 min read",
    publishedDate: "2026-07-06",
  },
  {
    slug: "how-to-structure-content-for-ai-search-engines",
    title: "How to Structure Content for AI Search Engines: A Complete Guide for Better Visibility",
    seoTitle: "How to Structure Content for AI Search Engines | AI SEO Guide 2026",
    description:
      "Learn how to structure your content for AI search engines with proven AI SEO and AEO strategies. Discover best practices for headings, FAQs, topic clusters, and technical optimization to improve visibility in AI-powered search with Let's Advertising.",
    category: "AI Search & SEO",
    author: "Let's Advertising",
    date: "July 6, 2026",
    readTime: "11 min read",
    publishedDate: "2026-07-06",
  },
  {
    slug: "future-of-ai-search-2026",
    title: "The Future of AI Search in 2026: What Businesses Need to Know",
    seoTitle: "The Future of AI Search in 2026: Trends, SEO & Business Strategies",
    description:
      "Explore the future of AI search in 2026 and learn how businesses can adapt with AI SEO, AEO, high-quality content, and technical optimization. Stay ahead of changing search trends with expert insights from Let's Advertising.",
    category: "AI Search & SEO",
    author: "Let's Advertising",
    date: "July 6, 2026",
    readTime: "12 min read",
    publishedDate: "2026-07-06",
  },
  {
    slug: "aeo-best-practices-for-local-businesses",
    title: "AEO Best Practices for Local Businesses: How to Get Found in AI Search",
    seoTitle: "AEO Best Practices for Local Businesses: Get Found in AI Search",
    description:
      "Learn how Answer Engine Optimization (AEO) helps local businesses appear in AI-powered search results. Discover practical strategies to improve visibility, attract more local customers, and prepare for the future of search with Let's Advertising.",
    category: "Answer Engine Optimization",
    author: "Let's Advertising",
    date: "July 6, 2026",
    readTime: "11 min read",
    publishedDate: "2026-07-06",
  },
  {
    slug: "how-to-get-your-business-featured-in-ai-search-results",
    title: "How to Get Your Business Featured in AI Search Results",
    seoTitle: "How to Get Your Business Featured in AI Search Results (2026 Guide)",
    description:
      "Learn how to optimize your website for AI-powered search engines. Discover practical strategies to improve visibility, build authority, and increase your chances of being featured in AI search results with insights from Let's Advertising.",
    category: "AI Search & SEO",
    author: "Let's Advertising",
    date: "July 6, 2026",
    readTime: "11 min read",
    publishedDate: "2026-07-06",
  },
  {
    slug: "how-ai-search-is-changing-digital-marketing",
    title: "How AI Search Is Changing Digital Marketing: What Every Business Needs to Know",
    seoTitle: "How AI Search Is Changing Digital Marketing in 2026",
    description:
      "Discover how AI-powered search is transforming digital marketing, SEO, and content strategy. Learn practical tips to help your business stay visible and competitive with expert insights from Let's Advertising.",
    category: "AI Search & SEO",
    author: "Let's Advertising",
    date: "July 6, 2026",
    readTime: "10 min read",
    publishedDate: "2026-07-06",
  },
  {
    slug: "will-ai-replace-traditional-seo",
    title: "Will AI Replace Traditional SEO? The Truth Every Business Should Know",
    seoTitle: "Will AI Replace Traditional SEO? Here's What Businesses Need to Know (2026)",
    description:
      "Will AI replace SEO? Discover how AI is changing search, why traditional SEO is still essential, and how combining SEO with AEO can future-proof your digital marketing strategy.",
    category: "AI Search & SEO",
    author: "Let's Advertising",
    date: "July 6, 2026",
    readTime: "11 min read",
    publishedDate: "2026-07-06",
  },
  {
    slug: "optimize-website-for-chatgpt-google-ai-overviews",
    title: "How to Optimize Your Website for ChatGPT and Google AI Overviews",
    seoTitle: "How to Optimize Your Website for ChatGPT & Google AI Overviews (2026 Guide)",
    description:
      "Learn how to optimize your website for ChatGPT, Google AI Overviews, Gemini, and other AI search engines with proven AEO and SEO strategies to increase visibility and authority.",
    category: "AI Search & SEO",
    author: "Let's Advertising",
    date: "July 6, 2026",
    readTime: "12 min read",
    publishedDate: "2026-07-06",
  },
  {
    slug: "seo-vs-aeo-difference",
    title: "SEO vs AEO: What's the Difference?",
    seoTitle: "SEO vs AEO: Key Differences & Why Your Business Needs Both in 2026",
    description:
      "Discover the key differences between SEO and Answer Engine Optimization (AEO). Learn how both strategies work together to improve your visibility on Google, ChatGPT, AI search engines, and beyond.",
    category: "AI Search & SEO",
    author: "Let's Advertising",
    date: "July 6, 2026",
    readTime: "10 min read",
    publishedDate: "2026-07-06",
  },
  {
    slug: "what-is-answer-engine-optimization-aeo",
    title: "What Is Answer Engine Optimization (AEO)?",
    seoTitle: "What Is Answer Engine Optimization (AEO)? | Complete Guide",
    description:
      "Learn what Answer Engine Optimization (AEO) is, how it works, why it's important, and how to optimize your website for ChatGPT, Google AI Overviews, Gemini, and other AI search engines.",
    category: "Answer Engine Optimization",
    author: "Let's Advertising",
    date: "July 6, 2026",
    readTime: "12 min read",
    publishedDate: "2026-07-06",
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
