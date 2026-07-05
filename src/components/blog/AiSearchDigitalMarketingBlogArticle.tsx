"use client";

import Link from "next/link";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";
import {
  ArticleParagraph,
  ArticleSection,
  BlogArticleCta,
  BlogArticleHero,
  BulletList,
} from "@/components/blog/BlogArticleParts";
import type { TocItem } from "@/components/blog/TableOfContents";
import { bookingLinkProps } from "@/lib/site";

const TOC_ITEMS: TocItem[] = [
  { id: "what-is-ai-search", label: "What Is AI Search?" },
  { id: "why-ai-search-matters", label: "Why AI Search Matters" },
  { id: "rise-of-ai-seo", label: "The Rise of AI SEO" },
  { id: "changing-content-marketing", label: "Changing Content Marketing" },
  { id: "what-to-do-now", label: "What Businesses Should Do" },
  { id: "why-partner", label: "Why Partner with an Agency" },
  { id: "conclusion", label: "Conclusion" },
];

const WHY_IT_MATTERS = [
  {
    num: "1",
    title: "Search Intent Matters More Than Keywords",
    body: "Traditional SEO focused heavily on ranking for specific keywords. While keywords still play an important role, AI search places much greater emphasis on understanding what users actually want.",
    itemsLabel: null,
    items: null,
    closing:
      "Businesses should create content that answers real customer questions instead of writing solely for search engines. Articles, guides, FAQs, and case studies that solve problems are more likely to earn visibility in AI-generated responses.",
  },
  {
    num: "2",
    title: "High-Quality Content Wins",
    body: "AI systems are designed to prioritize content that is informative, trustworthy, and easy to understand.",
    itemsLabel: "Businesses should focus on creating content that is:",
    items: [
      "Original and well researched",
      "Written by knowledgeable professionals",
      "Updated regularly",
      "Easy to read and navigate",
      "Focused on providing genuine value",
    ],
    closing:
      "Publishing dozens of short, keyword-focused articles is becoming less effective than producing fewer, high-quality resources that demonstrate expertise.",
  },
  {
    num: "3",
    title: "Brand Authority Is Becoming a Competitive Advantage",
    body: "AI search doesn't just evaluate webpages—it also considers the credibility of the brand behind the content.",
    itemsLabel: "Building authority now involves:",
    items: [
      "Publishing expert insights",
      "Sharing original research",
      "Earning quality backlinks",
      "Maintaining consistent branding",
      "Collecting positive customer reviews",
      "Demonstrating industry experience",
    ],
    closing:
      "Businesses with a strong online reputation are more likely to be referenced by AI-powered search platforms.",
  },
  {
    num: "4",
    title: "Zero-Click Searches Are Changing Website Traffic",
    body: "Many AI search tools provide complete answers directly within the search experience. This means users may not always click through to a website before making a decision.",
    itemsLabel: null,
    items: null,
    closing:
      "While this can reduce traditional organic traffic, it also increases the importance of building a recognizable and trustworthy brand. If your business consistently appears in AI-generated answers, customers are more likely to remember your name when they need your products or services.",
  },
  {
    num: "5",
    title: "User Experience Is More Important Than Ever",
    body: "Even the best content won't perform well if visitors have a poor experience on your website.",
    itemsLabel: "Businesses should ensure their websites offer:",
    items: [
      "Fast loading speeds",
      "Mobile-friendly design",
      "Secure browsing (HTTPS)",
      "Simple navigation",
      "Clear calls to action",
      "Helpful and organized content",
    ],
    closing:
      "A strong user experience not only improves SEO but also increases conversions and customer satisfaction.",
  },
];

const RELATED_LINKS = [
  {
    label: "What Is Answer Engine Optimization (AEO)?",
    href: "/blog/what-is-answer-engine-optimization-aeo",
  },
  {
    label: "SEO vs AEO: What's the Difference?",
    href: "/blog/seo-vs-aeo-difference",
  },
  {
    label: "How to Optimize for ChatGPT & Google AI Overviews",
    href: "/blog/optimize-website-for-chatgpt-google-ai-overviews",
  },
  {
    label: "Will AI Replace Traditional SEO?",
    href: "/blog/will-ai-replace-traditional-seo",
  },
  { label: "SEO Services", href: "/#services" },
  { label: "AEO Services", href: "/aeo-services" },
  { label: "Content Marketing Services", href: "/content-marketing" },
];

export function AiSearchDigitalMarketingBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="How AI Search Is Changing Digital Marketing: What Every Business Needs to Know"
        category="AI Search & SEO"
        date="July 6, 2026"
        readTime="10 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              The digital marketing landscape is evolving faster than ever, and one of the biggest
              drivers of this transformation is AI-powered search. Search is no longer limited to
              typing a few keywords into a search engine and scrolling through pages of results.
              Today, users are turning to AI tools that deliver direct, conversational answers in
              seconds.
            </ArticleParagraph>
            <ArticleParagraph>
              From Google&apos;s AI-generated summaries to conversational AI assistants, the way
              people discover brands, products, and services is changing dramatically. For
              businesses, this means that traditional SEO strategies alone are no longer enough.
              Staying visible in AI-powered search requires a new approach to content, user
              experience, and brand authority.
            </ArticleParagraph>
            <ArticleParagraph>
              At Let&apos;s Advertising, we believe businesses that adapt early will be the ones that
              lead the future of digital marketing. Here&apos;s how AI search is reshaping the industry
              and what you can do to stay ahead.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-ai-search" title="What Is AI Search?">
            <ArticleParagraph>
              AI search uses artificial intelligence and advanced language models to understand the
              meaning behind a user&apos;s question instead of simply matching keywords. Rather than
              displaying a list of links, AI-powered search tools generate clear, conversational
              responses by analyzing information from multiple trusted sources.
            </ArticleParagraph>
            <ArticleParagraph>
              This creates a faster, more intuitive search experience. Whether someone is looking for
              the best digital marketing strategy, comparing software, or researching local services,
              AI aims to provide accurate answers without requiring users to visit multiple websites.
            </ArticleParagraph>
            <ArticleParagraph>
              For marketers, this shift changes the way content needs to be created and optimized.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="why-ai-search-matters" title="Why AI Search Matters for Digital Marketing" alt>
            <ArticleParagraph>
              As AI becomes a core part of online search, businesses must rethink how they attract
              and engage potential customers. Here are the biggest changes already shaping digital
              marketing.
            </ArticleParagraph>
            {WHY_IT_MATTERS.map((item) => (
              <div
                key={item.num}
                className="rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--xl)] border border-[var(--border)]"
              >
                <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                  {item.num}. {item.title}
                </h3>
                <ArticleParagraph>{item.body}</ArticleParagraph>
                {item.itemsLabel && item.items && (
                  <>
                    <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                      {item.itemsLabel}
                    </p>
                    <BulletList items={item.items} />
                  </>
                )}
                <ArticleParagraph>{item.closing}</ArticleParagraph>
              </div>
            ))}
          </ArticleSection>

          <ArticleSection id="rise-of-ai-seo" title="The Rise of AI SEO">
            <ArticleParagraph>
              As search evolves, marketers are embracing a new strategy often referred to as AI SEO
              or Generative Engine Optimization (GEO).
            </ArticleParagraph>
            <ArticleParagraph>
              Instead of optimizing only for search engine rankings, businesses now optimize their
              content so AI systems can understand, trust, and reference it.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Effective AI SEO includes:
            </p>
            <BulletList
              items={[
                "Answering customer questions directly",
                "Using clear headings and logical content structure",
                "Demonstrating expertise through practical examples",
                "Keeping content fresh and accurate",
                "Covering topics in depth instead of superficially",
              ]}
            />
            <ArticleParagraph>
              The goal is to become a trusted source of information rather than simply ranking for
              keywords.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="changing-content-marketing" title="How AI Is Changing Content Marketing" alt>
            <ArticleParagraph>
              Content remains the foundation of digital marketing, but expectations have changed.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Successful content strategies now prioritize:
            </p>
            <BulletList
              items={[
                "Comprehensive blog articles",
                "Industry insights",
                "Step-by-step tutorials",
                "Customer success stories",
                "Educational videos",
                "Interactive tools",
                "Frequently asked questions",
              ]}
            />
            <ArticleParagraph>
              Businesses that consistently publish valuable, original content are better positioned
              for long-term visibility in both traditional and AI-powered search.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="what-to-do-now" title="What Businesses Should Do Now">
            <ArticleParagraph>
              To stay competitive in the age of AI search, businesses should focus on the following
              priorities:
            </ArticleParagraph>
            {[
              {
                title: "Understand Your Audience",
                body: "Create content around the questions your customers are actually asking instead of relying only on keyword research.",
              },
              {
                title: "Build Topical Authority",
                body: "Develop comprehensive content clusters around your core services to establish expertise in your niche.",
              },
              {
                title: "Improve Technical SEO",
                body: "Optimize page speed, mobile usability, structured data, and website performance to support both search engines and AI systems.",
              },
              {
                title: "Keep Content Updated",
                body: "Review and refresh your content regularly with new statistics, examples, and industry developments.",
              },
              {
                title: "Invest in Brand Building",
                body: "Strong brands earn more trust from both customers and AI search platforms. Consistent messaging, quality service, and positive customer experiences all contribute to long-term visibility.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--xl)]"
              >
                <h3 className="mb-[var(--size--s)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                  {item.body}
                </p>
              </div>
            ))}
          </ArticleSection>

          <ArticleSection id="why-partner" title="Why Partner with a Digital Marketing Agency?" alt>
            <ArticleParagraph>
              Keeping up with AI-driven changes requires ongoing strategy, technical expertise, and
              continuous optimization. Many businesses simply don&apos;t have the time or resources to
              monitor every algorithm update or emerging trend.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              A digital marketing partner can help by:
            </p>
            <BulletList
              items={[
                "Developing an AI-ready SEO strategy",
                "Creating high-quality, customer-focused content",
                "Improving website performance",
                "Building long-term brand authority",
                "Tracking performance and adapting to search changes",
              ]}
            />
            <ArticleParagraph>
              At Let&apos;s Advertising, we help businesses navigate the evolving digital landscape with
              data-driven marketing strategies designed for today&apos;s search environment—and
              tomorrow&apos;s.
            </ArticleParagraph>
            <Link
              {...bookingLinkProps}
              className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
            >
              Talk to our team →
            </Link>
          </ArticleSection>

          <ArticleSection id="conclusion" title="Conclusion">
            <ArticleParagraph>
              AI search is transforming digital marketing in ways that were unimaginable just a few
              years ago. Businesses that continue relying solely on traditional SEO techniques risk
              losing visibility as search becomes more conversational, intelligent, and intent-driven.
            </ArticleParagraph>
            <ArticleParagraph>
              The future belongs to brands that create valuable content, build trust, deliver
              exceptional user experiences, and embrace innovation. By adapting your digital marketing
              strategy today, you can position your business for sustained growth in the AI era.
            </ArticleParagraph>
            <ArticleParagraph>
              Whether you&apos;re looking to improve your SEO, strengthen your online presence, or prepare
              your business for the future of search, now is the time to act.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <p className="text-[length:var(--typography--text-m)] font-semibold leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                The future of digital marketing isn&apos;t just about ranking higher—it&apos;s about becoming
                the trusted answer your customers are looking for.
              </p>
            </div>
          </ArticleSection>

          <section className="border-t border-[var(--border)] py-[var(--size--3xl)] max-[767px]:py-[var(--size--2xl)]">
            <h2 className="mb-[var(--size--xl)] font-semibold text-[length:var(--typography--h5)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
              Related Reading
            </h2>
            <div className="flex flex-wrap gap-[var(--size--s)]">
              {RELATED_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-[99999px] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--l)] py-[var(--size--s)] text-[length:var(--typography--text-s)] font-medium text-[var(--brand--brand-charcoal)] no-underline hover:bg-[var(--brand--brand-electric-blue)] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </BlogArticleLayout>
      </section>

      <BlogArticleCta
        title="Ready to Adapt Your Digital Marketing for AI Search?"
        body="Let's Advertising helps businesses build marketing strategies that work in today's AI-powered search landscape."
        subtext="Contact us today for a free consultation and discover how to stay visible, competitive, and trusted across Google, ChatGPT, and the next generation of search."
        ctaLabel="Get a Free Consultation"
      />
    </>
  );
}
