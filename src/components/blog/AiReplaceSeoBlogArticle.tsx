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

const INLINE_LINK =
  "font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline";

const TOC_ITEMS: TocItem[] = [
  { id: "what-is-seo", label: "What Is Traditional SEO?" },
  { id: "what-is-ai-search", label: "What Is AI Search?" },
  { id: "why-people-think", label: "Why People Think AI Will Replace SEO" },
  { id: "why-seo-essential", label: "Why SEO Is Still Essential" },
  { id: "how-ai-changing", label: "How AI Is Changing SEO" },
  { id: "seo-vs-aeo", label: "SEO vs AEO" },
  { id: "how-to-adapt", label: "How Businesses Should Adapt" },
  { id: "common-myths", label: "Common Myths" },
  { id: "future-of-seo", label: "The Future of SEO" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const SEO_ESSENTIAL_REASONS = [
  {
    title: "AI Depends on High-Quality Content",
    intro: "AI models prioritize content that is:",
    items: ["Helpful", "Accurate", "Well-structured", "Trustworthy", "Comprehensive"],
    closing: "Creating this type of content is a core principle of SEO.",
  },
  {
    title: "Website Authority Still Matters",
    intro: "AI platforms are more likely to reference websites that have built authority over time. Authority comes from:",
    items: [
      "Consistent publishing",
      "Strong backlinks",
      "Positive user experience",
      "Brand recognition",
      "Expertise within a topic",
    ],
    closing: "These are all outcomes of effective SEO.",
  },
  {
    title: "Technical SEO Supports Discoverability",
    intro:
      "If search engines cannot properly crawl and index your website, AI systems may also struggle to understand your content. Technical SEO remains critical for:",
    items: [
      "Crawlability",
      "Site speed",
      "Mobile responsiveness",
      "Structured data",
      "Internal linking",
      "Secure HTTPS",
    ],
    closing: null,
  },
  {
    title: "Transactional Searches Still Need Websites",
    intro: "AI may answer informational questions, but users still visit websites when they want to:",
    items: [
      "Buy a product",
      "Request a quote",
      "Book a service",
      "Contact a business",
      "Compare pricing",
      "Read reviews",
    ],
    closing: "Strong SEO ensures your business is visible during these high-intent moments.",
  },
];

const COMPARISON_ROWS = [
  ["Improves rankings in search results", "Helps content appear in AI-generated answers"],
  ["Targets keywords", "Targets user questions"],
  ["Drives organic traffic", "Builds AI visibility"],
  ["Optimizes for search engines", "Optimizes for AI assistants"],
  ["Encourages website visits", "Encourages brand recognition and trust"],
];

const MYTHS = [
  {
    myth: "Myth 1: SEO Is Dead",
    truth: "False. SEO continues to drive organic traffic and remains the foundation of online visibility.",
  },
  {
    myth: "Myth 2: AI Replaces Websites",
    truth: "False. AI relies on websites as information sources. Without quality websites, AI would have little trustworthy content to summarize.",
  },
  {
    myth: "Myth 3: Keywords No Longer Matter",
    truth: "False. Keywords remain important, but they should reflect user intent and be used naturally within valuable content.",
  },
  {
    myth: "Myth 4: AI Will Eliminate Organic Traffic",
    truth: "Not entirely. While some informational searches may result in fewer clicks, businesses with authoritative content can still gain visibility, trust, and qualified traffic.",
  },
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
  {
    label: "SEO vs AEO: What's the Difference?",
    href: "/blog/seo-vs-aeo-difference",
  },
  {
    label: "How to Optimize for ChatGPT & Google AI Overviews",
    href: "/blog/optimize-website-for-chatgpt-google-ai-overviews",
  },
  { label: "SEO Services", href: "/#services" },
  { label: "AEO Services", href: "/aeo-services" },
  { label: "Content Marketing Services", href: "/content-marketing" },
  { label: "Analytics Services", href: "/analytics-tracking" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["will-ai-replace-traditional-seo"];

export function AiReplaceSeoBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="Will AI Replace Traditional SEO? The Truth Every Business Should Know"
        category="AI Search & SEO"
        date="July 6, 2026"
        readTime="11 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Artificial Intelligence is transforming the way people search for information online.
              With the rise of ChatGPT, Google AI Overviews, Gemini, Microsoft Copilot, and Perplexity
              AI, users are increasingly receiving instant answers instead of scrolling through pages
              of search results.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <p className="mb-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-charcoal)]">
                This has led many business owners and marketers to ask:
              </p>
              <BulletList
                items={[
                  "Is SEO becoming obsolete?",
                  "Will AI replace Google Search?",
                  "Should businesses stop investing in SEO?",
                  "Is AEO the new SEO?",
                ]}
              />
              <p className="mt-[var(--size--l)] text-[length:var(--typography--text-m)] font-semibold leading-[var(--typography--line-height-l)] text-[var(--brand--brand-electric-blue)]">
                The answer is no.
              </p>
            </div>
            <ArticleParagraph>
              AI is not replacing traditional SEO—it is changing how SEO works. Businesses that adapt
              by combining SEO, Answer Engine Optimization (AEO), and high-quality content will
              continue to succeed.
            </ArticleParagraph>
            <ArticleParagraph>
              In this article, we&apos;ll explain why SEO remains critical, how AI is reshaping search,
              and what businesses should do to stay ahead.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-seo" title="What Is Traditional SEO?">
            <ArticleParagraph>
              Search Engine Optimization (SEO) is the process of improving a website so it ranks higher
              in search engine results for relevant keywords.
            </ArticleParagraph>
            <ArticleParagraph>
              SEO focuses on helping users discover your website through search engines such as Google
              and Bing.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Key elements of SEO include:
            </p>
            <BulletList
              items={[
                "Keyword research",
                "High-quality content",
                "Technical SEO",
                "On-page optimization",
                "Backlink building",
                "Internal linking",
                "Mobile optimization",
                "Core Web Vitals",
                "User experience (UX)",
              ]}
            />
            <ArticleParagraph>
              The ultimate goal is to increase organic traffic, generate qualified leads, and improve
              conversions.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="what-is-ai-search" title="What Is AI Search?" alt>
            <ArticleParagraph>
              AI search uses artificial intelligence to understand user intent and generate direct,
              conversational answers.
            </ArticleParagraph>
            <ArticleParagraph>
              Instead of simply displaying a list of links, AI-powered platforms analyze trusted
              sources and provide a summarized response.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Popular AI search experiences include:
            </p>
            <BulletList
              items={[
                "Google AI Overviews",
                "ChatGPT",
                "Google Gemini",
                "Microsoft Copilot",
                "Perplexity AI",
              ]}
            />
            <div className="rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--2xl)] border border-[var(--border)]">
              <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                Traditional Search Query:
              </p>
              <p className="mb-[var(--size--l)] rounded-[var(--radius--radius-lg)] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] italic text-[var(--brand--brand-charcoal)]">
                Best digital marketing agency
              </p>
              <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                AI Search Query:
              </p>
              <p className="mb-[var(--size--l)] rounded-[var(--radius--radius-lg)] bg-[var(--brand--brand-electric-blue)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] text-white">
                Which digital marketing agency is best for a startup with a limited budget?
              </p>
              <ArticleParagraph>
                The AI provides a direct answer, often referencing information from authoritative
                websites.
              </ArticleParagraph>
            </div>
          </ArticleSection>

          <ArticleSection id="why-people-think" title="Why People Think AI Will Replace SEO">
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              There are several reasons behind this belief:
            </p>
            <div className="flex flex-col gap-[var(--size--l)]">
              {[
                {
                  title: "AI Gives Instant Answers",
                  body: "Users can often find the information they need without visiting multiple websites.",
                },
                {
                  title: "Conversational Search Is Growing",
                  body: "Instead of typing keywords, people ask complete questions in natural language.",
                },
                {
                  title: "AI Reduces the Need to Browse",
                  body: "Many informational queries are answered directly, reducing the number of clicks on traditional search results.",
                },
                {
                  title: "Search Engines Are Evolving",
                  body: "Google is increasingly integrating AI-generated responses into its search experience.",
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
            </div>
            <ArticleParagraph>
              While these changes are significant, they don&apos;t eliminate the need for SEO.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="why-seo-essential" title="Why SEO Is Still Essential" alt>
            <ArticleParagraph>
              Even AI systems need reliable sources of information. They don&apos;t invent accurate
              business information—they rely on high-quality content published across the web.
            </ArticleParagraph>
            <ArticleParagraph>
              Without SEO, your content may never become visible enough to influence AI-generated
              answers.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Here are the key reasons SEO remains important.
            </p>
            {SEO_ESSENTIAL_REASONS.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--xl)] border border-[var(--border)]"
              >
                <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                  {index + 1}. {reason.title}
                </h3>
                <p className="mb-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                  {reason.intro}
                </p>
                <BulletList items={reason.items} />
                {reason.closing && (
                  <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    {reason.closing}
                  </p>
                )}
              </div>
            ))}
          </ArticleSection>

          <ArticleSection id="how-ai-changing" title="How AI Is Changing SEO">
            <ArticleParagraph>
              Rather than replacing SEO, AI is expanding it. Successful businesses are now optimizing
              for both traditional search engines and AI-powered answer engines.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              This evolution has introduced new priorities:
            </p>
            <div className="flex flex-col gap-[var(--size--l)]">
              {[
                {
                  title: "Greater Focus on User Intent",
                  body: "Content should answer real customer questions instead of targeting keywords alone.",
                },
                {
                  title: "Conversational Content",
                  body: "Write naturally, as if you're speaking directly to your audience.",
                },
                {
                  title: "Topical Authority",
                  body: "Publish comprehensive content covering an entire subject rather than isolated articles.",
                },
                {
                  title: "Structured Information",
                  body: "Use headings, bullet points, tables, and FAQs to make content easier for AI to understand.",
                },
                {
                  title: "Better User Experience",
                  body: "Fast, mobile-friendly websites continue to perform better in both traditional and AI-driven search.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-[var(--size--s)] rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--xl)]"
                >
                  <h3 className="font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/blog/how-ai-is-transforming-seo-2026" className={`mt-[var(--size--m)] inline-flex ${INLINE_LINK}`}>
              Read our complete guide on how AI is transforming SEO →
            </Link>
          </ArticleSection>

          <ArticleSection id="seo-vs-aeo" title="SEO vs AEO: Why You Need Both" alt>
            <ArticleParagraph>
              Think of SEO and AEO as complementary strategies.
            </ArticleParagraph>
            <div className="overflow-x-auto rounded-[var(--radius--radius-xxl)] border border-[var(--border)]">
              <table className="w-full min-w-[32rem] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--neutral--neutral-grey-200)]">
                    <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold">
                      SEO
                    </th>
                    <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold">
                      AEO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map(([seo, aeo]) => (
                    <tr key={seo} className="bg-white even:bg-[var(--neutral--neutral-grey-200)]">
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
            <ArticleParagraph>
              The most effective digital marketing strategy combines both approaches.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="how-to-adapt" title="How Businesses Should Adapt">
            <ArticleParagraph>
              To remain competitive in the AI era, businesses should focus on the following:
            </ArticleParagraph>
            {[
              {
                title: "Create Helpful Content",
                body: "Publish articles that genuinely solve customer problems.",
              },
              {
                title: "Build Topic Clusters",
                body: "Instead of writing one article about SEO, create related content covering Technical SEO, Local SEO, AEO, AI Search, Content Marketing, and Analytics. This demonstrates expertise.",
              },
              {
                title: "Answer Questions Clearly",
                body: "Use question-based headings and provide concise answers before expanding on the topic.",
              },
              {
                title: "Add FAQ Sections",
                body: "FAQs help users and AI systems quickly understand your content.",
              },
              {
                title: "Implement Structured Data",
                body: "Schema markup provides additional context for search engines.",
              },
              {
                title: "Keep Content Updated",
                body: "Refresh articles regularly with new insights, examples, and industry trends.",
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

          <ArticleSection id="common-myths" title="Common Myths About AI and SEO" alt>
            <div className="flex flex-col gap-[var(--size--l)]">
              {MYTHS.map((item) => (
                <div
                  key={item.myth}
                  className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]"
                >
                  <h3 className="mb-[var(--size--s)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] text-[var(--brand--brand-electric-blue)]">
                    {item.myth}
                  </h3>
                  <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    {item.truth}
                  </p>
                </div>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection id="future-of-seo" title="The Future of SEO">
            <ArticleParagraph>SEO is evolving—not disappearing.</ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Over the next few years, successful businesses will focus on:
            </p>
            <BulletList
              items={[
                "SEO",
                "Answer Engine Optimization (AEO)",
                "AI Search Optimization",
                "High-quality content",
                "User experience",
                "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)",
                "Structured data",
                "First-party data strategies",
              ]}
            />
            <ArticleParagraph>
              The companies that adapt early will be better positioned for long-term success.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="How Let's Advertising Helps Businesses Stay Ahead" alt>
            <ArticleParagraph>
              At Let&apos;s Advertising, we combine traditional SEO expertise with modern AI
              optimization strategies.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our services include:
            </p>
            <BulletList
              items={[
                "SEO Strategy",
                "Technical SEO",
                "Answer Engine Optimization (AEO)",
                "AI Search Optimization",
                "Content Marketing",
                "Local SEO",
                "Schema Markup",
                "Website Performance Optimization",
                "Analytics & Reporting",
              ]}
            />
            <ArticleParagraph>
              Whether your goal is to improve Google rankings or increase visibility in AI-generated
              answers, our team can help you build a future-ready search strategy.
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
              Artificial Intelligence is transforming search, but it is not replacing SEO. Instead,
              it&apos;s raising the standard for what great content looks like.
            </ArticleParagraph>
            <ArticleParagraph>
              Businesses that focus on expertise, trust, user experience, and clear, helpful content
              will continue to perform well—whether customers find them through Google Search, Google
              AI Overviews, ChatGPT, or the next generation of AI-powered search tools.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--2xl)]">
              <p className="text-[length:var(--typography--text-m)] font-semibold leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                The future belongs to businesses that combine SEO + AEO + exceptional content.
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
        title="Ready to Future-Proof Your Search Strategy?"
        body="AI is changing how customers discover businesses—but you can stay ahead. At Let's Advertising, we help businesses build search strategies that work today and adapt for tomorrow."
        subtext="Contact us today for a free SEO & AI Search consultation and discover how your business can thrive in the age of AI."
        ctaLabel="Get a Free SEO & AI Search Consultation"
      />
    </>
  );
}
