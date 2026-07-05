"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";
import type { TocItem } from "@/components/blog/TableOfContents";
import { StaggerText } from "@/components/StaggerButton";
import type { FaqItem } from "@/types";
import { bookingLinkProps } from "@/lib/site";

const TOC_ITEMS: TocItem[] = [
  { id: "what-is-aeo", label: "What Is AEO?" },
  { id: "why-important", label: "Why AEO Is Important" },
  { id: "how-aeo-works", label: "How AEO Works" },
  { id: "seo-vs-aeo", label: "SEO vs AEO" },
  { id: "why-invest", label: "Why Invest in AEO" },
  { id: "key-elements", label: "Key Elements of AEO" },
  { id: "best-practices", label: "Best Practices" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "future-of-search", label: "Future of Search" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What does AEO stand for?",
    answer:
      "AEO stands for Answer Engine Optimization, a strategy that helps websites become trusted sources for AI-generated answers.",
  },
  {
    question: "Is AEO replacing SEO?",
    answer:
      "No. AEO complements SEO. SEO helps your website rank in search results, while AEO increases the likelihood of your content being used in AI-generated responses.",
  },
  {
    question: "Which AI platforms benefit from AEO?",
    answer:
      "AEO can improve visibility on platforms such as Google AI Overviews, ChatGPT, Gemini, Microsoft Copilot, and Perplexity AI.",
  },
  {
    question: "Is AEO only for large businesses?",
    answer:
      "No. Small businesses can benefit significantly from AEO by creating high-quality, well-structured content that answers customer questions.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Like SEO, AEO is a long-term strategy. Results depend on your content quality, website authority, and consistency, but businesses often see improvements over several months.",
  },
];

const RELATED_SERVICES = [
  { label: "AEO Services", href: "/aeo-services" },
  { label: "SEO Services", href: "/#services" },
  { label: "Content Marketing Services", href: "/content-marketing" },
  { label: "Analytics Services", href: "/analytics-tracking" },
  { label: "Social Media Marketing Services", href: "/social-media-marketing" },
  { label: "Paid Advertising Services", href: "/paid-advertising" },
];

function ArticleFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-wrapper mx-auto min-w-0 max-w-full cursor-pointer">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="faq-item-wrapper">
            <div
              className={`${i === 0 ? "faq-item---first " : ""}faq-item cursor-pointer border-t border-b border-[#ececec] pt-[1.5rem] pb-[1.5rem]${isOpen ? " is-open" : ""}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="faq-heading-wrapper flex items-center justify-between">
                <div className="text-[length:var(--typography--h6)] font-semibold tracking-[-0.02em] leading-[140%]">
                  {item.question}
                </div>
                <div className="faq-circle relative flex h-[3.5rem] w-[3.5rem] shrink-0 items-center justify-center ml-[1rem] rounded-[100px] bg-[var(--neutral--neutral-grey-200)]">
                  <div className="faq-plus-vertical absolute h-[0.875rem] w-[2px] bg-black" />
                  <div className="faq-plus-horizontal h-[2px] w-[0.875rem] bg-black" />
                </div>
              </div>
              <div className={`faq-paragraph-wrapper max-w-[55rem]${isOpen ? " is-active" : ""}`}>
                <div className="faq-paragraph max-w-[81ch]">
                  <div className="text-[length:var(--typography--text-m)]">
                    <p className="text-[var(--brand--brand-charcoal)] leading-[var(--typography--line-height-l)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[var(--size--s)]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-[var(--size--s)]">
          <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
          <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[var(--size--s)]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-[var(--size--s)]">
          <span className="text-[var(--brand--brand-mint)]">✔</span>
          <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ArticleSection({
  id,
  title,
  children,
  alt = false,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[7rem] py-[var(--size--3xl)] max-[767px]:py-[var(--size--2xl)] ${alt ? "rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--2xl)] -mx-[var(--size--2xl)] max-[767px]:mx-0 max-[767px]:px-[var(--size--l)]" : "border-t border-[var(--border)] first:border-t-0"}`}
    >
      <h2 className="mb-[var(--size--xl)] font-semibold text-[length:var(--typography--h3)] max-[991px]:text-[length:var(--typography--h3-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
        {title}
      </h2>
      <div className="flex flex-col gap-[var(--size--l)]">{children}</div>
    </section>
  );
}

function ArticleParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
      {children}
    </p>
  );
}

export function AeoBlogArticle() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center bg-black pt-[9.85rem] pb-[var(--size--5xl)] max-[767px]:pb-[var(--size--3xl)]">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#57e5b222,transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(#fff0,#000)]" />
        </div>

        <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <Link
            href="/blog"
            className="mb-[var(--size--xl)] inline-flex items-center gap-[0.5rem] text-[length:var(--typography--text-s)] font-medium text-white/60 no-underline hover:text-white transition-colors"
          >
            ← Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-[var(--size--s)] mb-[var(--size--l)]">
            <span className="rounded-[99999px] bg-white/10 px-[var(--size--m)] py-[var(--size--xs)] text-[length:var(--typography--text-xs)] font-semibold uppercase tracking-[0.08em] text-[var(--brand--brand-mint)]">
              Answer Engine Optimization
            </span>
            <span className="text-[length:var(--typography--text-s)] text-white/50">
              July 6, 2026 · 12 min read
            </span>
          </div>
          <h1 className="font-semibold text-white text-[length:var(--typography--h1)] max-[991px]:text-[length:var(--typography--h1-tablet)] max-[767px]:text-[length:var(--typography--h1-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
            What Is Answer Engine Optimization (AEO)?
          </h1>
        </div>
      </section>

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              The way people search for information online is evolving rapidly. Instead of typing
              short keywords into search engines, users are increasingly asking conversational
              questions to AI-powered platforms like ChatGPT, Google AI Overviews, Gemini, Microsoft
              Copilot, and Perplexity AI.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                For example, instead of searching:
              </p>
              <p className="mb-[var(--size--l)] rounded-[var(--radius--radius-lg)] bg-white px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] italic text-[var(--brand--brand-charcoal)]">
                &ldquo;Best digital marketing agency&rdquo;
              </p>
              <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                Users now ask:
              </p>
              <p className="rounded-[var(--radius--radius-lg)] bg-[var(--brand--brand-electric-blue)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] text-white">
                &ldquo;Which digital marketing agency is best for small businesses with a limited
                budget?&rdquo;
              </p>
            </div>
            <ArticleParagraph>
              Rather than displaying a list of blue links, AI search engines generate a direct answer
              by analyzing content from trusted and authoritative websites.
            </ArticleParagraph>
            <ArticleParagraph>
              This shift has introduced a new digital marketing strategy known as Answer Engine
              Optimization (AEO).
            </ArticleParagraph>
            <ArticleParagraph>
              At Let&apos;s Advertising, we help businesses optimize their websites not only for
              traditional search engines but also for AI-powered answer engines that are shaping the
              future of online discovery.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-aeo" title="What Is Answer Engine Optimization (AEO)?">
        <ArticleParagraph>
          Answer Engine Optimization (AEO) is the process of creating and structuring website
          content so that AI-powered search engines can easily understand, trust, and use it when
          generating answers to user queries.
        </ArticleParagraph>
        <ArticleParagraph>
          Unlike traditional SEO, which focuses on improving rankings in search results, AEO
          focuses on making your content the answer that AI platforms present directly to users.
        </ArticleParagraph>
        <div className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--2xl)]">
          <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-semibold">
            In simple terms:
          </p>
          <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
            <strong>SEO</strong> helps people find your website.
          </p>
          <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
            <strong>AEO</strong> helps AI recommend your website as the answer.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="why-important" title="Why Is AEO Becoming So Important?" alt>
        <ArticleParagraph>AI is transforming how people search for information.</ArticleParagraph>
        <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
          Today, users expect:
        </p>
        <BulletList
          items={[
            "Instant answers",
            "Personalized recommendations",
            "Conversational interactions",
            "Accurate information without visiting multiple websites",
          ]}
        />
        <ArticleParagraph>
          Search platforms like Google AI Overviews and ChatGPT are designed to provide exactly that.
        </ArticleParagraph>
        <ArticleParagraph>
          Businesses that optimize their websites for AI search now have an opportunity to reach
          customers before their competitors adapt.
        </ArticleParagraph>
      </ArticleSection>

      <ArticleSection id="how-aeo-works" title="How Does AEO Work?">
        <ArticleParagraph>
          When someone asks an AI-powered search engine a question, the system analyzes information
          from trusted websites and looks for content that is:
        </ArticleParagraph>
        <BulletList
          items={[
            "Relevant",
            "Accurate",
            "Well-structured",
            "Easy to understand",
            "Authoritative",
            "Up to date",
          ]}
        />
        <ArticleParagraph>
          AI then summarizes that information into a direct response.
        </ArticleParagraph>
        <ArticleParagraph>
          If your content is optimized correctly, it has a higher chance of being referenced or
          influencing those AI-generated answers.
        </ArticleParagraph>
      </ArticleSection>

      <ArticleSection id="seo-vs-aeo" title="SEO vs AEO" alt>
        <ArticleParagraph>
          Although SEO and AEO are closely related, they serve different purposes.
        </ArticleParagraph>
        <div className="overflow-x-auto rounded-[var(--radius--radius-xxl)] border border-[var(--border)]">
          <table className="w-full min-w-[32rem] border-collapse text-left">
            <thead>
              <tr className="bg-white">
                <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold">
                  SEO
                </th>
                <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold">
                  AEO
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Focuses on search rankings", "Focuses on becoming the answer"],
                ["Targets keywords", "Targets user questions"],
                ["Optimizes for search engines", "Optimizes for AI systems"],
                ["Encourages clicks", "Provides direct answers"],
                ["Uses backlinks for authority", "Uses authority, structure, and clarity"],
              ].map(([seo, aeo]) => (
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
          The best digital marketing strategy today combines SEO and AEO rather than choosing one
          over the other.
        </ArticleParagraph>
      </ArticleSection>

      <ArticleSection id="why-invest" title="Why Businesses Should Invest in AEO">
        <div className="grid grid-cols-1 gap-[var(--size--l)] sm:grid-cols-2">
          {[
            {
              title: "Increased Visibility",
              body: "Being featured in AI-generated answers increases your brand's exposure even if users don't browse traditional search results.",
            },
            {
              title: "Higher Brand Authority",
              body: "AI systems tend to reference trusted and authoritative sources. Strong AEO helps position your business as an industry expert.",
            },
            {
              title: "Better User Experience",
              body: "Well-structured content answers customer questions quickly and clearly.",
            },
            {
              title: "Future-Proof Marketing",
              body: "AI-powered search continues to grow rapidly. Businesses investing in AEO today are preparing for the future of search.",
            },
            {
              title: "Higher Quality Leads",
              body: "Users asking detailed questions often have stronger purchase intent. Appearing in AI-generated answers helps attract qualified prospects.",
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
      </ArticleSection>

      <ArticleSection id="key-elements" title="Key Elements of Answer Engine Optimization" alt>
        {[
          {
            num: "1",
            title: "Answer Real Customer Questions",
            intro: "Think about the questions your customers ask every day.",
            examples: [
              "What is digital marketing?",
              "How much does SEO cost?",
              "Is Google Ads better than Facebook Ads?",
              "What is programmatic advertising?",
            ],
            closing: "Each question represents an opportunity to create valuable content.",
          },
          {
            num: "2",
            title: "Create High-Quality Content",
            intro: "AI prioritizes helpful content over keyword-stuffed articles.",
            examples: [
              "Original insights",
              "Practical examples",
              "Accurate information",
              "Easy-to-read language",
              "Updated content",
            ],
            closing: null,
          },
          {
            num: "3",
            title: "Use Clear Headings",
            intro: "Organize your content with descriptive headings such as:",
            examples: ["What Is AEO?", "Benefits of AEO", "How AEO Works", "Common Mistakes"],
            closing: "Clear structure helps both users and AI understand your content.",
          },
          {
            num: "4",
            title: "Add FAQ Sections",
            intro: "FAQs are one of the easiest ways to optimize for answer engines.",
            examples: null,
            closing: null,
            faqExample: {
              q: "What is AEO?",
              a: "AEO is the process of optimizing website content so AI-powered search engines can understand and recommend it as a direct answer to user questions.",
            },
          },
          {
            num: "5",
            title: "Implement Structured Data",
            intro: "Schema markup helps search engines understand your content.",
            examples: [
              "FAQ Schema",
              "Organization Schema",
              "Local Business Schema",
              "Article Schema",
              "Product Schema",
              "Service Schema",
            ],
            closing: null,
          },
          {
            num: "6",
            title: "Demonstrate Experience and Expertise",
            intro: "AI systems increasingly value content created by knowledgeable professionals.",
            examples: [
              "Real-world examples",
              "Case studies",
              "Industry insights",
              "Practical tips",
              "Original research",
            ],
            closing: null,
          },
          {
            num: "7",
            title: "Keep Content Updated",
            intro: "Outdated content is less likely to be trusted.",
            examples: [
              "Statistics",
              "Examples",
              "Screenshots",
              "Industry trends",
              "Best practices",
            ],
            closing: "Regularly review and update your content to maintain trust.",
          },
        ].map((element) => (
          <div
            key={element.num}
            className="rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--2xl)] border border-[var(--border)]"
          >
            <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
              {element.num}. {element.title}
            </h3>
            <p className="mb-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
              {element.intro}
            </p>
            {element.examples && <BulletList items={element.examples} />}
            {"faqExample" in element && element.faqExample && (
              <div className="mt-[var(--size--m)] rounded-[var(--radius--radius-lg)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--l)]">
                <p className="mb-[var(--size--s)] font-semibold text-[length:var(--typography--text-m)]">
                  {element.faqExample.q}
                </p>
                <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                  {element.faqExample.a}
                </p>
              </div>
            )}
            {element.closing && (
              <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                {element.closing}
              </p>
            )}
          </div>
        ))}
      </ArticleSection>

      <ArticleSection id="best-practices" title="Best Practices for AEO">
        <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
          To improve your chances of appearing in AI-generated answers:
        </p>
        <CheckList
          items={[
            "Write conversationally.",
            "Answer questions directly.",
            "Use bullet points where appropriate.",
            "Keep paragraphs concise.",
            "Include examples.",
            "Add visuals such as infographics.",
            "Build topical authority by publishing related articles.",
            "Improve page speed.",
            "Ensure your website is mobile-friendly.",
            "Maintain consistent branding across your website.",
          ]}
        />
      </ArticleSection>

      <ArticleSection id="common-mistakes" title="Common AEO Mistakes" alt>
        <ArticleParagraph>
          Many businesses make avoidable mistakes when trying to optimize for AI search. These
          include:
        </ArticleParagraph>
        <BulletList
          items={[
            "Writing only for search engines",
            "Ignoring user intent",
            "Publishing thin or generic content",
            "Using outdated information",
            "Skipping FAQ sections",
            "Neglecting structured data",
            "Poor website navigation",
            "Slow-loading pages",
          ]}
        />
        <ArticleParagraph>
          Avoiding these issues improves both user experience and AI visibility.
        </ArticleParagraph>
      </ArticleSection>

      <ArticleSection id="future-of-search" title="The Future of Search Is AI-Powered">
        <ArticleParagraph>
          Search engines are becoming answer engines. Instead of presenting a list of websites, AI
          platforms increasingly provide complete responses within the search experience.
        </ArticleParagraph>
        <ArticleParagraph>
          Businesses that adapt their content strategy today will be better positioned to succeed
          tomorrow.
        </ArticleParagraph>
        <ArticleParagraph>
          AEO is not replacing SEO—it is enhancing it. Companies that combine strong SEO
          fundamentals with AI-focused optimization will have the greatest competitive advantage in
          the years ahead.
        </ArticleParagraph>
      </ArticleSection>

      <ArticleSection id="lets-advertising" title="How Let's Advertising Can Help" alt>
        <ArticleParagraph>
          At Let&apos;s Advertising, we help businesses prepare for the future of search by
          combining traditional SEO with advanced Answer Engine Optimization strategies.
        </ArticleParagraph>
        <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
          Our AEO services include:
        </p>
        <BulletList
          items={[
            "AI Search Visibility Audits",
            "Content Strategy & Optimization",
            "FAQ Development",
            "Structured Data Implementation",
            "Technical SEO",
            "Local AEO Optimization",
            "Content Marketing",
            "Website Performance Optimization",
            "AI Search Readiness Assessments",
          ]}
        />
        <ArticleParagraph>
          Whether you&apos;re a startup or an established business, we can help your brand become
          more visible across both traditional search engines and AI-powered platforms.
        </ArticleParagraph>
        <Link
          href="/aeo-services"
          className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
        >
          Explore our AEO services →
        </Link>
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
          Artificial intelligence is reshaping the way people search for information online.
          Businesses that create helpful, trustworthy, and well-structured content are more likely
          to be recognized by both search engines and AI-powered answer engines.
        </ArticleParagraph>
        <ArticleParagraph>
          By investing in Answer Engine Optimization today, you can increase your visibility, build
          brand authority, and position your business for the future of digital marketing.
        </ArticleParagraph>
        <ArticleParagraph>
          If you&apos;re ready to make your website AI-ready, Let&apos;s Advertising is here to
          help.
        </ArticleParagraph>
          </ArticleSection>

          <section className="border-t border-[var(--border)] py-[var(--size--3xl)] max-[767px]:py-[var(--size--2xl)]">
            <h2 className="mb-[var(--size--xl)] font-semibold text-[length:var(--typography--h5)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-[var(--size--s)]">
              {RELATED_SERVICES.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="rounded-[99999px] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--l)] py-[var(--size--s)] text-[length:var(--typography--text-s)] font-medium text-[var(--brand--brand-charcoal)] no-underline hover:bg-[var(--brand--brand-electric-blue)] hover:text-white transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </section>
        </BlogArticleLayout>
      </section>

      {/* CTA */}
      <section className="relative flex flex-col items-center justify-center bg-black py-[var(--size--8xl)] max-[767px]:py-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mx-auto flex flex-col items-center gap-[var(--size--2xl)] text-center">
            <h2 className="font-semibold text-white text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
              Ready to Rank in AI Search Results?
            </h2>
            <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
              The future of search is already here. Let Let&apos;s Advertising help you optimize
              your website for Google AI Overviews, ChatGPT, Gemini, and other AI-powered search
              platforms.
            </p>
            <p className="text-white/80 text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
              Contact us today for a Free AEO Audit and discover how your business can become the
              answer your customers are looking for.
            </p>
            <Link
              {...bookingLinkProps}
              aria-label="Contact us for a Free AEO Audit"
              className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer rounded-[9999px] px-[2rem] py-[1rem] no-underline"
            >
              <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] bg-[var(--brand--brand-electric-blue)]" />
              <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                <StaggerText text="Get a Free AEO Audit" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
