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
import { BLOG_FAQ_BY_SLUG } from "@/lib/blog/faq";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog/posts";
import { getSiteUrl } from "@/lib/site";

const ARTICLE_COMPONENTS: Record<string, React.ComponentType> = {
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
