import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommonAeoMistakesBlogArticle } from "@/components/blog/CommonAeoMistakesBlogArticle";
import { StructureContentAiSearchBlogArticle } from "@/components/blog/StructureContentAiSearchBlogArticle";
import { FutureOfAiSearchBlogArticle } from "@/components/blog/FutureOfAiSearchBlogArticle";
import { LocalAeoBlogArticle } from "@/components/blog/LocalAeoBlogArticle";
import { FeaturedInAiSearchBlogArticle } from "@/components/blog/FeaturedInAiSearchBlogArticle";
import { AiReplaceSeoBlogArticle } from "@/components/blog/AiReplaceSeoBlogArticle";
import { AiSearchDigitalMarketingBlogArticle } from "@/components/blog/AiSearchDigitalMarketingBlogArticle";
import { AeoBlogArticle } from "@/components/blog/AeoBlogArticle";
import { OptimizeAiSearchBlogArticle } from "@/components/blog/OptimizeAiSearchBlogArticle";
import { SeoVsAeoBlogArticle } from "@/components/blog/SeoVsAeoBlogArticle";
import { WhatIsSeoBlogArticle } from "@/components/blog/WhatIsSeoBlogArticle";
import { SeoVsGoogleAdsBlogArticle } from "@/components/blog/SeoVsGoogleAdsBlogArticle";
import { OnPageSeoChecklistBlogArticle } from "@/components/blog/OnPageSeoChecklistBlogArticle";
import { TechnicalSeoChecklistBlogArticle } from "@/components/blog/TechnicalSeoChecklistBlogArticle";
import { KeywordResearchBlogArticle } from "@/components/blog/KeywordResearchBlogArticle";
import { LocalSeoGuideBlogArticle } from "@/components/blog/LocalSeoGuideBlogArticle";
import { CommonSeoMistakesBlogArticle } from "@/components/blog/CommonSeoMistakesBlogArticle";
import { IncreaseOrganicTrafficBlogArticle } from "@/components/blog/IncreaseOrganicTrafficBlogArticle";
import { UltimateSeoGuideForBeginnersBlogArticle } from "@/components/blog/UltimateSeoGuideForBeginnersBlogArticle";
import { AiTransformingSeoBlogArticle } from "@/components/blog/AiTransformingSeoBlogArticle";
import { DigitalAdvertisingGuideBlogArticle } from "@/components/blog/DigitalAdvertisingGuideBlogArticle";
import { GoogleAdsVsMetaAdsBlogArticle } from "@/components/blog/GoogleAdsVsMetaAdsBlogArticle";
import { ProgrammaticAdvertisingBlogArticle } from "@/components/blog/ProgrammaticAdvertisingBlogArticle";
import { PerformanceMarketingBlogArticle } from "@/components/blog/PerformanceMarketingBlogArticle";
import { DisplayAdvertisingBlogArticle } from "@/components/blog/DisplayAdvertisingBlogArticle";
import { CtvAdvertisingBlogArticle } from "@/components/blog/CtvAdvertisingBlogArticle";
import { DigitalAdvertisingStrategyBlogArticle } from "@/components/blog/DigitalAdvertisingStrategyBlogArticle";
import { CpmCpcCpaBlogArticle } from "@/components/blog/CpmCpcCpaBlogArticle";
import { RetargetingGuideBlogArticle } from "@/components/blog/RetargetingGuideBlogArticle";
import { DigitalAdvertisingMistakesBlogArticle } from "@/components/blog/DigitalAdvertisingMistakesBlogArticle";
import { AiAdvertisingCompleteGuideBlogArticle } from "@/components/blog/AiAdvertisingCompleteGuideBlogArticle";
import { AiTransformingDigitalAdvertisingBlogArticle } from "@/components/blog/AiTransformingDigitalAdvertisingBlogArticle";
import { AiPpcAdvertisingBlogArticle } from "@/components/blog/AiPpcAdvertisingBlogArticle";
import { AiAdTargetingBlogArticle } from "@/components/blog/AiAdTargetingBlogArticle";
import { AiProgrammaticAdvertisingBlogArticle } from "@/components/blog/AiProgrammaticAdvertisingBlogArticle";
import { AiAdCreativeBlogArticle } from "@/components/blog/AiAdCreativeBlogArticle";
import { AiAdvertisingAutomationBlogArticle } from "@/components/blog/AiAdvertisingAutomationBlogArticle";
import { AiAdOptimizationRoasBlogArticle } from "@/components/blog/AiAdOptimizationRoasBlogArticle";
import { GenerativeAiAdvertisingBlogArticle } from "@/components/blog/GenerativeAiAdvertisingBlogArticle";
import { AiAdvertisingAgencyBlogArticle } from "@/components/blog/AiAdvertisingAgencyBlogArticle";
import { BLOG_FAQ_BY_SLUG } from "@/lib/blog/faq";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog/posts";
import { getSiteUrl } from "@/lib/site";

const ARTICLE_COMPONENTS: Record<string, React.ComponentType> = {
  "ai-advertising-complete-guide": AiAdvertisingCompleteGuideBlogArticle,
  "how-ai-is-transforming-digital-advertising-2026": AiTransformingDigitalAdvertisingBlogArticle,
  "ai-powered-ppc-advertising": AiPpcAdvertisingBlogArticle,
  "ai-ad-targeting": AiAdTargetingBlogArticle,
  "ai-programmatic-advertising": AiProgrammaticAdvertisingBlogArticle,
  "ai-powered-ad-creative": AiAdCreativeBlogArticle,
  "ai-advertising-automation": AiAdvertisingAutomationBlogArticle,
  "ai-ad-optimization-roas": AiAdOptimizationRoasBlogArticle,
  "generative-ai-advertising": GenerativeAiAdvertisingBlogArticle,
  "ai-advertising-agency": AiAdvertisingAgencyBlogArticle,
  "what-is-digital-advertising-complete-guide": DigitalAdvertisingGuideBlogArticle,
  "google-ads-vs-meta-ads": GoogleAdsVsMetaAdsBlogArticle,
  "how-programmatic-advertising-works": ProgrammaticAdvertisingBlogArticle,
  "what-is-performance-marketing": PerformanceMarketingBlogArticle,
  "beginners-guide-to-display-advertising": DisplayAdvertisingBlogArticle,
  "ctv-advertising-guide": CtvAdvertisingBlogArticle,
  "how-to-build-digital-advertising-strategy": DigitalAdvertisingStrategyBlogArticle,
  "cpm-vs-cpc-vs-cpa": CpmCpcCpaBlogArticle,
  "what-is-retargeting-increase-conversions": RetargetingGuideBlogArticle,
  "common-digital-advertising-mistakes": DigitalAdvertisingMistakesBlogArticle,
  "how-ai-is-transforming-seo-2026": AiTransformingSeoBlogArticle,
  "ultimate-seo-guide-for-beginners": UltimateSeoGuideForBeginnersBlogArticle,
  "how-to-increase-organic-traffic-without-ads": IncreaseOrganicTrafficBlogArticle,
  "common-seo-mistakes-stop-ranking": CommonSeoMistakesBlogArticle,
  "local-seo-guide-small-businesses": LocalSeoGuideBlogArticle,
  "how-to-find-right-keywords-for-business": KeywordResearchBlogArticle,
  "technical-seo-checklist-2026": TechnicalSeoChecklistBlogArticle,
  "on-page-seo-checklist-2026": OnPageSeoChecklistBlogArticle,
  "seo-vs-google-ads": SeoVsGoogleAdsBlogArticle,
  "what-is-seo-why-business-needs-it": WhatIsSeoBlogArticle,
  "what-is-answer-engine-optimization-aeo": AeoBlogArticle,
  "seo-vs-aeo-difference": SeoVsAeoBlogArticle,
  "optimize-website-for-chatgpt-google-ai-overviews": OptimizeAiSearchBlogArticle,
  "will-ai-replace-traditional-seo": AiReplaceSeoBlogArticle,
  "how-ai-search-is-changing-digital-marketing": AiSearchDigitalMarketingBlogArticle,
  "how-to-get-your-business-featured-in-ai-search-results": FeaturedInAiSearchBlogArticle,
  "aeo-best-practices-for-local-businesses": LocalAeoBlogArticle,
  "future-of-ai-search-2026": FutureOfAiSearchBlogArticle,
  "how-to-structure-content-for-ai-search-engines": StructureContentAiSearchBlogArticle,
  "common-aeo-mistakes-businesses-make": CommonAeoMistakesBlogArticle,
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}


export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Blog Post Not Found | Let's Advertising" };
  }

  return {
    title: `${post.seoTitle} | Let's Advertising Blog`,
    description: post.description,
    openGraph: {
      title: `${post.seoTitle} | Let's Advertising Blog`,
      description: post.description,
      type: "article",
      publishedTime: post.publishedDate,
    },
  };
}

function buildArticleSchema(slug: string) {
  const post = getBlogPost(slug);
  if (!post) return null;

  const baseUrl = getSiteUrl();
  const url = `${baseUrl}/blog/${slug}`;
  const faqItems = BLOG_FAQ_BY_SLUG[slug] ?? [];

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedDate,
      dateModified: post.publishedDate,
      author: {
        "@type": "Organization",
        name: post.author,
        url: baseUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "Let's Advertising",
        url: baseUrl,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
    },
  ];

  if (faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export default async function BlogPostRoute({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const ArticleComponent = ARTICLE_COMPONENTS[slug];

  if (!post || !ArticleComponent) {
    notFound();
  }

  const schema = buildArticleSchema(slug);

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <Navbar />
      <main className="w-full">
        <ArticleComponent />
      </main>
      <Footer />
    </>
  );
}
