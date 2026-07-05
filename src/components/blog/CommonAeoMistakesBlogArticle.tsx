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

const TOC_ITEMS: TocItem[] = [
  { id: "what-is-aeo", label: "What Is AEO?" },
  { id: "mistake-1", label: "Mistake #1: Keywords Only" },
  { id: "mistake-2", label: "Mistake #2: Thin Content" },
  { id: "mistake-3", label: "Mistake #3: Ignoring Intent" },
  { id: "mistake-4", label: "Mistake #4: Poor Structure" },
  { id: "mistake-5", label: "Mistake #5: No Expertise" },
  { id: "mistake-6", label: "Mistake #6: Technical SEO" },
  { id: "mistake-7", label: "Mistake #7: No FAQs" },
  { id: "mistake-8", label: "Mistake #8: Publish & Forget" },
  { id: "mistake-9", label: "Mistake #9: Local Search" },
  { id: "mistake-10", label: "Mistake #10: Unedited AI Content" },
  { id: "best-practices", label: "Best Practices" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "conclusion", label: "Conclusion" },
];

const MISTAKES = [
  {
    id: "mistake-1",
    num: "1",
    title: "Focusing Only on Keywords",
    problem:
      "For years, SEO strategies revolved around targeting specific keywords. While keywords are still important, AI search engines prioritize user intent over keyword density.",
    why: "Content written only to include keywords often sounds unnatural and fails to answer the user's actual question.",
    fixLabel: "Instead of writing for search engines, write for people. Focus on:",
    fixItems: [
      "Answering common customer questions",
      "Using natural language",
      "Covering topics in depth",
      "Addressing related follow-up questions",
    ],
    closing: "Think beyond keywords and concentrate on solving problems.",
  },
  {
    id: "mistake-2",
    num: "2",
    title: "Creating Thin or Low-Value Content",
    problem: "Short articles with little useful information rarely perform well in AI search.",
    why: "AI systems prefer comprehensive, accurate, and helpful content that demonstrates expertise.",
    fixLabel: "Create content that includes:",
    fixItems: [
      "Step-by-step guidance",
      "Practical examples",
      "Real-world insights",
      "FAQs",
      "Updated information",
      "Actionable advice",
    ],
    closing: "Quality consistently outperforms quantity.",
  },
  {
    id: "mistake-3",
    num: "3",
    title: "Ignoring Search Intent",
    problem:
      "Many businesses create content based on what they want to promote instead of what users actually want to know.",
    why: "If your content doesn't answer the user's question, AI search platforms are less likely to surface it.",
    fixLabel: "Before writing, ask yourself:",
    fixItems: [
      "What problem is the user trying to solve?",
      "What information do they need?",
      "What follow-up questions might they ask?",
    ],
    closing: "Build your content around those answers.",
  },
  {
    id: "mistake-4",
    num: "4",
    title: "Poor Content Structure",
    problem: "Even excellent information can be overlooked if it's difficult to understand.",
    why: "AI systems rely on clear organization to identify key information.",
    fixLabel: "Structure your content using:",
    fixItems: [
      "Descriptive headings",
      "Short paragraphs",
      "Bullet points",
      "Numbered steps",
      "Summary sections",
      "FAQ sections",
    ],
    closing: "Well-structured content benefits both users and AI.",
  },
  {
    id: "mistake-5",
    num: "5",
    title: "Not Demonstrating Expertise",
    problem: "Generic content that simply repeats information from other websites provides little value.",
    why: "AI platforms increasingly prioritize trustworthy and experience-based content.",
    fixLabel: "Strengthen your credibility by:",
    fixItems: [
      "Sharing original insights",
      "Publishing case studies",
      "Highlighting industry experience",
      "Including expert opinions",
      "Using real examples",
    ],
    closing: "Content that reflects genuine expertise is more likely to earn trust.",
  },
  {
    id: "mistake-6",
    num: "6",
    title: "Forgetting Technical SEO",
    problem: "AEO doesn't replace technical SEO—it builds upon it.",
    why: "If search engines can't properly crawl or understand your website, AI systems may struggle to use your content.",
    fixLabel: "Regularly optimize:",
    fixItems: [
      "Website speed",
      "Mobile responsiveness",
      "HTTPS security",
      "Internal linking",
      "XML sitemaps",
      "Structured data (Schema markup)",
    ],
    closing: "Technical improvements support both traditional SEO and AI visibility.",
  },
  {
    id: "mistake-7",
    num: "7",
    title: "Neglecting FAQ Content",
    problem: "Many businesses overlook FAQ sections, even though they directly answer customer questions.",
    why: "AI search engines frequently reference concise answers from FAQ pages.",
    fixLabel: "Create FAQs that address topics such as:",
    fixItems: ["Pricing", "Services", "Timelines", "Support", "Locations", "Policies"],
    closing: "Keep answers clear, direct, and easy to understand.",
  },
  {
    id: "mistake-8",
    num: "8",
    title: "Publishing and Forgetting",
    problem: "Some businesses publish content once and never update it.",
    why: "Outdated information reduces credibility and may no longer reflect current best practices.",
    fixLabel: "Review your content regularly to:",
    fixItems: [
      "Update statistics",
      "Refresh examples",
      "Add new insights",
      "Improve readability",
      "Remove outdated information",
    ],
    closing: "Keeping content current signals reliability.",
  },
  {
    id: "mistake-9",
    num: "9",
    title: "Ignoring Local Search Optimization",
    problem: "For businesses serving specific regions, local relevance is essential.",
    why: "Without clear location signals, AI systems may not understand where your business operates.",
    fixLabel: "Optimize your website by including:",
    fixItems: [
      "Business name",
      "Address",
      "Phone number",
      "Service areas",
      "Location-specific pages",
      "Customer reviews",
    ],
    closing: "This strengthens both local SEO and AEO.",
  },
  {
    id: "mistake-10",
    num: "10",
    title: "Overusing AI-Generated Content Without Human Editing",
    problem:
      "AI tools can speed up content creation, but publishing unedited AI-generated content can reduce quality.",
    why: "Generic or inaccurate content may fail to build trust with users or AI search systems.",
    fixLabel: "Use AI as a productivity tool—not a replacement for expertise. Always:",
    fixItems: [
      "Fact-check information",
      "Add original insights",
      "Improve readability",
      "Include real examples",
      "Edit for clarity and accuracy",
    ],
    closing: "Human review remains essential.",
  },
];

const RELATED_LINKS = [
  {
    label: "What Is Answer Engine Optimization (AEO)?",
    href: "/blog/what-is-answer-engine-optimization-aeo",
  },
  {
    label: "AEO Best Practices for Local Businesses",
    href: "/blog/aeo-best-practices-for-local-businesses",
  },
  {
    label: "How to Structure Content for AI Search",
    href: "/blog/how-to-structure-content-for-ai-search-engines",
  },
  {
    label: "How to Get Featured in AI Search Results",
    href: "/blog/how-to-get-your-business-featured-in-ai-search-results",
  },
  { label: "AEO Services", href: "/aeo-services" },
  { label: "SEO Services", href: "/#services" },
];

function MistakeCard({
  num,
  title,
  problem,
  why,
  fixLabel,
  fixItems,
  closing,
}: (typeof MISTAKES)[number]) {
  return (
    <div className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]">
      <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] text-[var(--brand--brand-electric-blue)]">
        Mistake #{num}: {title}
      </h3>
      <ArticleParagraph>{problem}</ArticleParagraph>
      <div className="rounded-[var(--radius--radius-lg)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--l)]">
        <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
          Why It&apos;s a Problem
        </p>
        <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
          {why}
        </p>
      </div>
      <p className="mt-[var(--size--l)] text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-charcoal)]">
        How to Fix It
      </p>
      <ArticleParagraph>{fixLabel}</ArticleParagraph>
      <BulletList items={fixItems} />
      <ArticleParagraph>{closing}</ArticleParagraph>
    </div>
  );
}

export function CommonAeoMistakesBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="Common AEO Mistakes Businesses Make (And How to Avoid Them)"
        category="Answer Engine Optimization"
        date="July 6, 2026"
        readTime="12 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Search is evolving rapidly. With the rise of AI-powered search engines, voice
              assistants, and generative AI platforms, businesses can no longer rely solely on
              traditional SEO strategies. Today, users expect direct, accurate, and conversational
              answers to their questions.
            </ArticleParagraph>
            <ArticleParagraph>
              This shift has made Answer Engine Optimization (AEO) an essential part of any modern
              digital marketing strategy. AEO focuses on creating content that AI-powered search
              platforms can easily understand and use to answer user queries.
            </ArticleParagraph>
            <ArticleParagraph>
              However, many businesses are still making mistakes that reduce their visibility in AI
              search results. From publishing low-quality content to ignoring search intent, these
              errors can prevent your website from becoming a trusted source for AI-generated
              answers.
            </ArticleParagraph>
            <ArticleParagraph>
              In this guide, we&apos;ll explore the most common AEO mistakes businesses make and how
              to avoid them.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-aeo" title="What Is Answer Engine Optimization (AEO)?">
            <ArticleParagraph>
              Answer Engine Optimization (AEO) is the process of optimizing your website and content
              to provide clear, direct, and trustworthy answers to users&apos; questions.
            </ArticleParagraph>
            <ArticleParagraph>
              Unlike traditional SEO, which aims to improve rankings in search engine results pages,
              AEO is designed to increase the likelihood that your content will be used in
              AI-generated responses, voice search, and answer engines.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <p className="text-[length:var(--typography--text-m)] font-semibold leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                The goal is simple: become the best answer to your audience&apos;s questions.
              </p>
            </div>
          </ArticleSection>

          <section className="scroll-mt-[7rem] border-t border-[var(--border)] py-[var(--size--3xl)] max-[767px]:py-[var(--size--2xl)]">
            <div className="flex flex-col gap-[var(--size--l)]">
              {MISTAKES.map((mistake) => (
                <div key={mistake.id} id={mistake.id} className="scroll-mt-[7rem]">
                  <MistakeCard {...mistake} />
                </div>
              ))}
            </div>
          </section>

          <ArticleSection id="best-practices" title="Best Practices for Strong AEO" alt>
            <ArticleParagraph>
              To improve your visibility in AI-powered search, focus on these principles:
            </ArticleParagraph>
            <BulletList
              items={[
                "Answer customer questions clearly.",
                "Write naturally and conversationally.",
                "Organize content with logical headings.",
                "Publish comprehensive, high-quality articles.",
                "Demonstrate expertise through original insights.",
                "Maintain strong technical SEO.",
                "Update content regularly.",
                "Build trust through transparency and consistency.",
              ]}
            />
            <ArticleParagraph>
              These practices help create content that serves both people and AI search systems.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="How Let's Advertising Can Help">
            <ArticleParagraph>
              At Let&apos;s Advertising, we help businesses adapt to the future of search with
              strategies designed for both traditional search engines and AI-powered platforms.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our services include:
            </p>
            <BulletList
              items={[
                "Answer Engine Optimization (AEO)",
                "AI Search Optimization",
                "Search Engine Optimization (SEO)",
                "Local SEO",
                "Content Marketing",
                "Technical SEO",
                "Website Development",
                "Performance Analytics",
              ]}
            />
            <ArticleParagraph>
              Whether you&apos;re looking to improve your online visibility or prepare for the next
              generation of search, our team develops tailored strategies that support sustainable
              growth.
            </ArticleParagraph>
            <Link
              href="/aeo-services"
              className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
            >
              Explore our AEO services →
            </Link>
          </ArticleSection>

          <ArticleSection id="conclusion" title="Conclusion" alt>
            <ArticleParagraph>
              Answer Engine Optimization is quickly becoming a key part of digital marketing.
              Businesses that continue to rely only on traditional SEO may miss opportunities to
              appear in AI-generated answers and conversational search experiences.
            </ArticleParagraph>
            <ArticleParagraph>
              Avoiding common AEO mistakes—such as focusing only on keywords, ignoring search
              intent, publishing thin content, or neglecting technical SEO—can significantly improve
              your chances of being recognized as a trusted source.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--2xl)]">
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                The goal isn&apos;t simply to rank higher; it&apos;s to provide the most useful,
                accurate, and trustworthy answers for your audience. Businesses that embrace this
                mindset will be better prepared for the future of search and better positioned to
                earn customer trust in an AI-driven world.
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
        title="Ready to Fix Your AEO Strategy?"
        body="Let's Advertising helps businesses identify and fix AEO mistakes so they can earn visibility in AI-powered search results."
        subtext="Contact us today for a free AEO audit and discover how to optimize your content for Google AI Overviews, ChatGPT, and other AI search platforms."
        ctaLabel="Get a Free AEO Audit"
      />
    </>
  );
}
