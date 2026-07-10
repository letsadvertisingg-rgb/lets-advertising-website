"use client";

import Link from "next/link";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";
import {
  ArticleFaq,
  ArticleParagraph,
  ArticleSection,
  BlogArticleCta,
  BlogArticleHero,
  BulletList,
} from "@/components/blog/BlogArticleParts";
import type { TocItem } from "@/components/blog/TableOfContents";
import { BLOG_FAQ_BY_SLUG } from "@/lib/blog/faq";

const TOC_ITEMS: TocItem[] = [
  { id: "what-is-seo", label: "What Is SEO?" },
  { id: "what-is-aeo", label: "What Is AEO?" },
  { id: "key-differences", label: "Key Differences" },
  { id: "search-behavior", label: "How Search Has Changed" },
  { id: "is-seo-dead", label: "Is SEO Dead?" },
  { id: "why-aeo-matters", label: "Why AEO Matters" },
  { id: "when-focus-seo", label: "When to Focus on SEO" },
  { id: "when-focus-aeo", label: "When to Focus on AEO" },
  { id: "why-both", label: "Why You Need Both" },
  { id: "best-practices", label: "Best Practices" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "future-of-search", label: "Future of Search" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const COMPARISON_ROWS = [
  ["Primary Goal", "Rank higher in search results", "Become the direct answer in AI-generated responses"],
  ["Focus", "Keywords and rankings", "User intent and questions"],
  ["Platform", "Google, Bing, Yahoo", "ChatGPT, Google AI Overviews, Gemini, Copilot, Perplexity"],
  ["Content Style", "Keyword-focused", "Conversational and question-based"],
  ["Success Metric", "Organic traffic", "AI visibility and answer inclusion"],
  ["Search Experience", "Users click website links", "Users receive direct answers"],
  [
    "Optimization",
    "Technical SEO, backlinks, content",
    "Structured content, FAQs, schema, topical authority",
  ],
];

const RELATED_LINKS = [
  {
    label: "How AI is Transforming SEO: The Future of Search in 2026",
    href: "/blog/how-ai-is-transforming-seo-2026",
  },
  {
    label: "What is SEO and Why Does Your Business Need It?",
    href: "/blog/what-is-seo-why-business-needs-it",
  },
  {
    label: "What Is Answer Engine Optimization (AEO)?",
    href: "/blog/what-is-answer-engine-optimization-aeo",
  },
  { label: "SEO Services", href: "/#services" },
  { label: "AEO Services", href: "/aeo-services" },
  { label: "Content Marketing Services", href: "/content-marketing" },
  { label: "Analytics Services", href: "/analytics-tracking" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["seo-vs-aeo-difference"];

export function SeoVsAeoBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="SEO vs AEO: What's the Difference?"
        category="AI Search & SEO"
        date="July 6, 2026"
        readTime="10 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Search has changed dramatically over the last few years. Traditional search engines
              like Google are no longer the only place people look for answers. Today, users are
              increasingly relying on AI-powered platforms such as ChatGPT, Google AI Overviews,
              Microsoft Copilot, Gemini, and Perplexity AI to get quick, conversational answers.
            </ArticleParagraph>
            <ArticleParagraph>
              This shift has introduced a new digital marketing strategy called Answer Engine
              Optimization (AEO).
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <p className="mb-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-charcoal)]">
                Many business owners now ask:
              </p>
              <BulletList
                items={[
                  "Is SEO still important?",
                  "Is AEO replacing SEO?",
                  "Should I invest in SEO or AEO?",
                ]}
              />
              <p className="mt-[var(--size--l)] text-[length:var(--typography--text-m)] font-semibold leading-[var(--typography--line-height-l)] text-[var(--brand--brand-electric-blue)]">
                The short answer is you need both.
              </p>
            </div>
            <ArticleParagraph>
              In this guide, we&apos;ll explain the differences between SEO and AEO, how they work
              together, and why combining both is the smartest strategy for long-term online success.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-seo" title="What Is SEO?">
            <ArticleParagraph>
              Search Engine Optimization (SEO) is the process of improving your website so it ranks
              higher in traditional search engine results.
            </ArticleParagraph>
            <ArticleParagraph>
              The primary goal of SEO is to increase organic traffic by making your website more
              visible for relevant searches.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              SEO focuses on:
            </p>
            <BulletList
              items={[
                "Keyword optimization",
                "Technical website improvements",
                "Content creation",
                "Backlink building",
                "User experience",
                "Website speed",
                "Mobile optimization",
              ]}
            />
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                For example, if someone searches:
              </p>
              <p className="mb-[var(--size--l)] rounded-[var(--radius--radius-lg)] bg-white px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] italic text-[var(--brand--brand-charcoal)]">
                &ldquo;Best digital marketing agency in Delhi&rdquo;
              </p>
              <ArticleParagraph>
                Google displays a list of websites based on relevance and authority. SEO helps your
                website rank higher in those search results.
              </ArticleParagraph>
            </div>
          </ArticleSection>

          <ArticleSection id="what-is-aeo" title="What Is AEO?" alt>
            <ArticleParagraph>
              Answer Engine Optimization (AEO) focuses on optimizing content so AI-powered search
              engines can understand, trust, and use it to generate direct answers.
            </ArticleParagraph>
            <ArticleParagraph>
              Instead of simply ranking your website, AEO aims to make your content the answer users
              receive.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--2xl)] border border-[var(--border)]">
              <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                For example, a user might ask:
              </p>
              <p className="mb-[var(--size--l)] rounded-[var(--radius--radius-lg)] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] italic text-[var(--brand--brand-charcoal)]">
                &ldquo;Which digital marketing agency is best for a startup with a small budget?&rdquo;
              </p>
              <ArticleParagraph>
                Instead of showing ten blue links, an AI platform generates a summarized response
                using information from trusted websites.
              </ArticleParagraph>
              <ArticleParagraph>
                If your content is clear, authoritative, and well-structured, it has a greater chance
                of being included in that response.
              </ArticleParagraph>
            </div>
          </ArticleSection>

          <ArticleSection id="key-differences" title="SEO vs AEO: The Key Differences">
            <div className="overflow-x-auto rounded-[var(--radius--radius-xxl)] border border-[var(--border)]">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--neutral--neutral-grey-200)]">
                    <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.06em]">
                      Feature
                    </th>
                    <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold">
                      SEO
                    </th>
                    <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold">
                      AEO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map(([feature, seo, aeo]) => (
                    <tr key={feature} className="bg-white even:bg-[var(--neutral--neutral-grey-200)]">
                      <td className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-s)] font-semibold text-[var(--brand--brand-charcoal)]">
                        {feature}
                      </td>
                      <td className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                        {seo}
                      </td>
                      <td className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                        {aeo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ArticleSection>

          <ArticleSection id="search-behavior" title="How Search Behavior Has Changed" alt>
            <div className="grid grid-cols-1 gap-[var(--size--l)] md:grid-cols-2">
              <div className="rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--xl)] border border-[var(--border)]">
                <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                  Traditional Search
                </h3>
                <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] italic text-[var(--brand--brand-charcoal)]">
                  User: &ldquo;SEO agency&rdquo;
                </p>
                <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium">
                  Google shows:
                </p>
                <BulletList items={["Website 1", "Website 2", "Website 3"]} />
                <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                  The user clicks one of the results.
                </p>
              </div>
              <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--brand--brand-electric-blue)] p-[var(--size--xl)]">
                <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] text-white">
                  AI Search
                </h3>
                <p className="mb-[var(--size--m)] text-[length:var(--typography--text-m)] italic text-white/90">
                  User: &ldquo;Which SEO agency is best for small businesses?&rdquo;
                </p>
                <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-white/90">
                  AI generates a complete answer, often highlighting a few trusted brands and
                  summarizing the information without requiring users to browse multiple websites.
                </p>
              </div>
            </div>
            <ArticleParagraph>This is why AEO has become increasingly important.</ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="is-seo-dead" title="Is SEO Dead?">
            <p className="text-[length:var(--typography--text-m)] font-semibold leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
              Absolutely not.
            </p>
            <ArticleParagraph>
              Despite the growth of AI search, SEO remains the foundation of online visibility.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Without strong SEO, your website may struggle to:
            </p>
            <BulletList
              items={[
                "Get indexed",
                "Build authority",
                "Earn backlinks",
                "Generate organic traffic",
              ]}
            />
            <ArticleParagraph>
              In fact, AI systems often rely on high-quality SEO content when generating answers.
              AEO builds upon SEO—it doesn&apos;t replace it.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="why-aeo-matters" title="Why AEO Matters More Than Ever" alt>
            <ArticleParagraph>
              AI-powered search is changing how people discover businesses. Instead of reading
              multiple articles, users expect instant, reliable answers.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Businesses that optimize for AEO can benefit from:
            </p>
            <BulletList
              items={[
                "Increased brand visibility",
                "Greater trust and authority",
                "Higher-quality leads",
                "More exposure across AI platforms",
                "Future-ready search presence",
              ]}
            />
          </ArticleSection>

          <ArticleSection id="when-focus-seo" title="When Should You Focus on SEO?">
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              SEO is essential if your goal is to:
            </p>
            <BulletList
              items={[
                "Improve Google rankings",
                "Increase organic traffic",
                "Rank for competitive keywords",
                "Generate website visitors",
                "Build domain authority",
                "Grow long-term search visibility",
              ]}
            />
            <ArticleParagraph>
              SEO should be part of every digital marketing strategy.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="when-focus-aeo" title="When Should You Focus on AEO?" alt>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              AEO is especially valuable if you want to:
            </p>
            <BulletList
              items={[
                "Appear in Google AI Overviews",
                "Increase visibility in ChatGPT and AI search",
                "Capture conversational search queries",
                "Improve voice search performance",
                "Become a trusted information source",
                "Prepare for the future of search",
              ]}
            />
          </ArticleSection>

          <ArticleSection id="why-both" title="Why Businesses Need Both SEO and AEO">
            <ArticleParagraph>
              The most successful businesses don&apos;t choose between SEO and AEO—they combine them.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--2xl)]">
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                <strong>SEO</strong> brings users to your website.
              </p>
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                <strong>AEO</strong> helps AI platforms recognize your expertise and recommend your
                content.
              </p>
              <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                Together, they create a stronger online presence.
              </p>
            </div>
            <ArticleParagraph>
              Think of SEO as building a strong foundation, while AEO helps you stand out in the
              next generation of search experiences.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="best-practices" title="Best Practices for Combining SEO and AEO" alt>
            {[
              {
                title: "Create Helpful Content",
                body: "Focus on solving real customer problems rather than simply targeting keywords.",
              },
              {
                title: "Answer Questions Clearly",
                body: "Use headings such as What is SEO?, How does AEO work?, and Why is SEO important? Direct answers improve your chances of appearing in AI-generated responses.",
              },
              {
                title: "Use Structured Data",
                body: "Implement FAQ Schema, Article Schema, Organization Schema, and Local Business Schema. Structured data helps search engines better understand your content.",
              },
              {
                title: "Build Topical Authority",
                body: "Publish multiple articles around related subjects such as SEO Basics, Technical SEO, Local SEO, AEO, AI Search, and Content Marketing. This demonstrates expertise to both search engines and AI systems.",
              },
              {
                title: "Optimize for User Experience",
                body: "Ensure your website loads quickly, is mobile-friendly, has clear navigation, uses readable formatting, and includes internal links. A positive user experience benefits both SEO and AEO.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--xl)] border border-[var(--border)]"
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

          <ArticleSection id="common-mistakes" title="Common Mistakes to Avoid">
            <ArticleParagraph>
              Many businesses focus only on traditional SEO and ignore AI search. Common mistakes
              include:
            </ArticleParagraph>
            <BulletList
              items={[
                "Keyword stuffing",
                "Thin or duplicate content",
                "Ignoring FAQs",
                "Not using structured data",
                "Publishing outdated information",
                "Failing to answer user intent",
                "Neglecting website performance",
              ]}
            />
            <ArticleParagraph>
              Avoiding these issues helps improve visibility across both traditional and AI-powered
              search platforms.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="future-of-search" title="The Future of Search" alt>
            <ArticleParagraph>
              Search is becoming more conversational, personalized, and AI-driven.
            </ArticleParagraph>
            <ArticleParagraph>
              While traditional search engines will continue to play a major role, AI-generated
              answers are becoming a standard part of the search experience.
            </ArticleParagraph>
            <ArticleParagraph>
              Businesses that combine SEO with AEO today will be better prepared for the future of
              digital marketing.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="How Let's Advertising Can Help">
            <ArticleParagraph>
              At Let&apos;s Advertising, we combine proven SEO strategies with modern AEO techniques
              to help businesses grow in both traditional and AI-powered search.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our services include:
            </p>
            <BulletList
              items={[
                "SEO Audits",
                "Technical SEO",
                "Keyword Research",
                "Content Marketing",
                "Answer Engine Optimization (AEO)",
                "AI Search Visibility Audits",
                "Local SEO",
                "Structured Data Implementation",
                "Analytics & Performance Tracking",
              ]}
            />
            <ArticleParagraph>
              Whether you&apos;re looking to increase website traffic or improve your visibility in
              AI-generated answers, our team can help you stay ahead of the competition.
            </ArticleParagraph>
            <div className="flex flex-wrap gap-[var(--size--m)]">
              <Link
                href="/aeo-services"
                className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
              >
                Explore AEO services →
              </Link>
              <Link
                href="/#services"
                className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
              >
                Explore SEO services →
              </Link>
            </div>
          </ArticleSection>

          <section
            id="faq"
            className="scroll-mt-[7rem] rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--2xl)] py-[var(--size--3xl)] -mx-[var(--size--2xl)] max-[767px]:mx-0 max-[767px]:px-[var(--size--l)] max-[767px]:py-[var(--size--2xl)]"
          >
            <h2 className="mb-[var(--size--xl)] font-semibold text-[length:var(--typography--h3)] max-[991px]:text-[length:var(--typography--h3-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
              Frequently Asked Questions
            </h2>
            <ArticleFaq items={FAQ_ITEMS} />
          </section>

          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              SEO and AEO are not competitors—they are complementary strategies.
            </ArticleParagraph>
            <ArticleParagraph>
              SEO helps people discover your website through traditional search engines, while AEO
              helps AI-powered platforms understand, trust, and recommend your content.
            </ArticleParagraph>
            <ArticleParagraph>
              As search continues to evolve, businesses that embrace both approaches will have a
              significant advantage in reaching customers wherever they search.
            </ArticleParagraph>
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
        title="Ready to Future-Proof Your Search Strategy?"
        body="Whether you want to improve your Google rankings or become more visible in AI-generated answers, Let's Advertising can help."
        subtext="Contact us today for a free SEO & AEO consultation and discover how we can grow your online presence in the age of AI."
        ctaLabel="Get a Free SEO & AEO Consultation"
      />
    </>
  );
}
