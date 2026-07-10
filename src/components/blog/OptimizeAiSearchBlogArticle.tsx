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
  CheckList,
} from "@/components/blog/BlogArticleParts";
import type { TocItem } from "@/components/blog/TableOfContents";
import { BLOG_FAQ_BY_SLUG } from "@/lib/blog/faq";

const TOC_ITEMS: TocItem[] = [
  { id: "why-ai-search", label: "Why AI Search Is Changing SEO" },
  { id: "how-ai-selects", label: "How AI Selects Content" },
  { id: "helpful-content", label: "1. People-First Content" },
  { id: "answer-questions", label: "2. Answer Questions Clearly" },
  { id: "clear-headings", label: "3. Clear Headings" },
  { id: "topical-authority", label: "4. Topical Authority" },
  { id: "faq-sections", label: "5. FAQ Sections" },
  { id: "structured-data", label: "6. Structured Data" },
  { id: "website-experience", label: "7. Website Experience" },
  { id: "eeat", label: "8. E-E-A-T" },
  { id: "fresh-content", label: "9. Keep Content Fresh" },
  { id: "internal-linking", label: "10. Internal Linking" },
  { id: "conversational-search", label: "11. Conversational Search" },
  { id: "original-insights", label: "12. Original Insights" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "checklist", label: "Optimization Checklist" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const OPTIMIZATION_TIPS = [
  {
    id: "helpful-content",
    num: "1",
    title: "Create Helpful, People-First Content",
    intro: "The foundation of AI optimization is quality content.",
    body: "Instead of writing only for search engines, create content that genuinely answers your audience's questions.",
    focusLabel: "Focus on:",
    items: [
      "Solving real problems",
      "Sharing practical advice",
      "Explaining complex topics simply",
      "Providing original insights",
      "Using examples and case studies",
    ],
    closing: "AI platforms reward content that demonstrates expertise and usefulness.",
  },
  {
    id: "answer-questions",
    num: "2",
    title: "Answer Questions Clearly",
    intro: "AI models are designed to answer questions. Structure your content around the questions your customers are asking.",
    body: "Instead of generic headings, use question-based headings like:",
    items: [
      "What is AEO?",
      "How does Google AI Overviews work?",
      "Why is AI search important?",
      "How can businesses optimize for ChatGPT?",
    ],
    closing:
      "Immediately answer the question in the first paragraph before expanding on the topic. This makes it easier for AI systems to identify concise answers.",
  },
  {
    id: "clear-headings",
    num: "3",
    title: "Organize Content with Clear Headings",
    intro: "A logical structure improves readability for both users and AI.",
    body: "Use a hierarchy such as:",
    items: [
      "H1 for the page title",
      "H2 for major sections",
      "H3 for supporting points",
    ],
    closing:
      "Break long sections into smaller paragraphs and use bullet points where appropriate. Well-organized content is easier for AI to interpret and summarize.",
  },
  {
    id: "topical-authority",
    num: "4",
    title: "Build Topical Authority",
    intro: "Publishing one article isn't enough.",
    body: "AI platforms are more likely to trust websites that consistently publish in-depth content on a specific subject. For example, if you offer SEO services, create related articles such as:",
    items: [
      "What Is SEO?",
      "Technical SEO Guide",
      "Local SEO Checklist",
      "SEO vs AEO",
      "AI Search Optimization",
      "Keyword Research Guide",
      "Core Web Vitals Explained",
    ],
    closing: "Together, these articles demonstrate subject expertise.",
  },
  {
    id: "faq-sections",
    num: "5",
    title: "Add FAQ Sections",
    intro: "Frequently Asked Questions help AI understand your content and address common user queries.",
    body: null,
    items: null,
    faqExample: [
      {
        q: "What is Google AI Overviews?",
        a: "Google AI Overviews is a search feature that uses generative AI to provide summarized answers directly within Google Search results.",
      },
      {
        q: "Can ChatGPT recommend websites?",
        a: "Yes. ChatGPT can reference or recommend websites when they are relevant, authoritative, and contain high-quality information.",
      },
    ],
    closing:
      "FAQ sections also improve user experience and may support rich search features.",
  },
  {
    id: "structured-data",
    num: "6",
    title: "Implement Structured Data (Schema Markup)",
    intro: "Schema markup provides additional context about your content.",
    body: "Important schema types include:",
    items: [
      "Article Schema",
      "FAQ Schema",
      "Organization Schema",
      "Local Business Schema",
      "Product Schema",
      "Service Schema",
      "Breadcrumb Schema",
    ],
    closing:
      "Structured data helps search engines better understand your website, which can indirectly improve AI discoverability.",
  },
  {
    id: "website-experience",
    num: "7",
    title: "Improve Website Experience",
    intro: "AI platforms favor websites that provide a positive user experience.",
    body: "Focus on:",
    items: [
      "Fast loading times",
      "Mobile responsiveness",
      "Secure HTTPS connections",
      "Simple navigation",
      "Readable typography",
      "Accessible design",
    ],
    closing: "A technically optimized website supports both SEO and AEO efforts.",
  },
  {
    id: "eeat",
    num: "8",
    title: "Demonstrate Experience, Expertise, Authority, and Trust (E-E-A-T)",
    intro:
      "Google emphasizes Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) when evaluating content quality.",
    body: "Strengthen your credibility by:",
    items: [
      "Publishing expert-written content",
      "Showcasing author profiles",
      "Sharing case studies",
      "Including client testimonials",
      "Keeping information current",
      "Citing reliable sources where appropriate",
    ],
    closing: "Trustworthy websites are more likely to influence AI-generated answers.",
  },
  {
    id: "fresh-content",
    num: "9",
    title: "Keep Your Content Fresh",
    intro: "AI systems prefer up-to-date information.",
    body: "Review and refresh your content regularly by:",
    items: [
      "Updating statistics",
      "Replacing outdated examples",
      "Adding new industry trends",
      "Improving visuals",
      "Expanding sections with new insights",
    ],
    closing: "Fresh content signals ongoing expertise and relevance.",
  },
  {
    id: "internal-linking",
    num: "10",
    title: "Use Internal Linking",
    intro: "Help both users and AI understand the relationship between your content.",
    body: "For example, if you publish a blog about AEO, link to:",
    items: [
      "SEO Services",
      "Content Marketing Services",
      "Analytics Services",
      "AI Search Guides",
      "Related blog posts",
    ],
    closing: "Internal linking strengthens topical authority and improves navigation.",
  },
  {
    id: "conversational-search",
    num: "11",
    title: "Optimize for Conversational Search",
    intro: "People now search using natural language.",
    body: "Instead of targeting only short keywords like \"SEO Agency\", create content that answers conversational queries such as:",
    items: [
      "Which SEO agency is best for small businesses?",
      "How much does SEO cost?",
      "Is SEO still worth it in 2026?",
    ],
    closing: "This aligns with how users interact with AI assistants.",
  },
  {
    id: "original-insights",
    num: "12",
    title: "Publish Original Insights",
    intro: "AI platforms value unique perspectives.",
    body: "Differentiate your content by including:",
    items: [
      "Original research",
      "Industry observations",
      "Client success stories",
      "Practical frameworks",
      "Personal experience",
      "Data-driven insights",
    ],
    closing: "Original content builds authority and provides more value than generic summaries.",
  },
];

const RELATED_LINKS = [
  {
    label: "How AI is Transforming SEO: The Future of Search in 2026",
    href: "/blog/how-ai-is-transforming-seo-2026",
  },
  {
    label: "What Is Answer Engine Optimization (AEO)?",
    href: "/blog/what-is-answer-engine-optimization-aeo",
  },
  {
    label: "SEO vs AEO: What's the Difference?",
    href: "/blog/seo-vs-aeo-difference",
  },
  { label: "SEO Services", href: "/#services" },
  { label: "AEO Services", href: "/aeo-services" },
  { label: "Content Marketing Services", href: "/content-marketing" },
  { label: "Analytics Services", href: "/analytics-tracking" },
];

const CHECKLIST_ITEMS = [
  "Does the article answer a real customer question?",
  "Is the content original and valuable?",
  "Are headings clear and descriptive?",
  "Have I included FAQs?",
  "Is schema markup implemented?",
  "Is the website fast and mobile-friendly?",
  "Have I added internal links?",
  "Is the information current?",
  "Does the content demonstrate expertise?",
  "Would I confidently recommend this article to a customer?",
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["optimize-website-for-chatgpt-google-ai-overviews"];

export function OptimizeAiSearchBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="How to Optimize Your Website for ChatGPT and Google AI Overviews"
        category="AI Search & SEO"
        date="July 6, 2026"
        readTime="12 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Search is evolving faster than ever before. For years, businesses focused on ranking
              on the first page of Google using traditional Search Engine Optimization (SEO). Today,
              users are increasingly turning to ChatGPT, Google AI Overviews, Gemini, Microsoft
              Copilot, and Perplexity AI for direct, conversational answers instead of scrolling
              through search results.
            </ArticleParagraph>
            <ArticleParagraph>This shift means businesses need to think beyond traditional SEO.</ArticleParagraph>
            <ArticleParagraph>
              To remain visible in the age of AI, your website must be optimized so that AI systems
              can understand, trust, and reference your content. This approach is known as Answer
              Engine Optimization (AEO) or Generative Engine Optimization (GEO).
            </ArticleParagraph>
            <ArticleParagraph>
              In this guide, we&apos;ll explain how to optimize your website for AI-powered search
              and improve your chances of appearing in ChatGPT responses and Google AI Overviews.
            </ArticleParagraph>
          </div>

          <ArticleSection id="why-ai-search" title="Why AI Search Is Changing SEO">
            <ArticleParagraph>
              Traditional search displays a list of websites and lets users choose where to click.
              AI search works differently.
            </ArticleParagraph>
            <ArticleParagraph>
              Instead of showing multiple links, AI platforms analyze trusted sources and generate a
              summarized answer.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                For example, instead of searching:
              </p>
              <p className="mb-[var(--size--l)] rounded-[var(--radius--radius-lg)] bg-white px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] italic text-[var(--brand--brand-charcoal)]">
                &ldquo;Best SEO agency&rdquo;
              </p>
              <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                A user might ask:
              </p>
              <p className="mb-[var(--size--l)] rounded-[var(--radius--radius-lg)] bg-[var(--brand--brand-electric-blue)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] text-white">
                &ldquo;Which SEO agency is best for a startup with a limited marketing budget?&rdquo;
              </p>
              <ArticleParagraph>
                AI responds with a detailed answer, often citing or drawing from authoritative
                websites.
              </ArticleParagraph>
            </div>
            <ArticleParagraph>
              The businesses that create clear, trustworthy, and well-structured content have the
              greatest chance of being featured.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="how-ai-selects" title="How ChatGPT and Google AI Overviews Select Content" alt>
            <ArticleParagraph>
              Although each AI platform has its own methods, they generally prioritize content that
              is:
            </ArticleParagraph>
            <BulletList
              items={[
                "Accurate and factual",
                "Well-structured",
                "Easy to understand",
                "Helpful and comprehensive",
                "Up-to-date",
                "Written by credible sources",
                "Supported by strong website authority",
              ]}
            />
            <ArticleParagraph>
              Your goal is to make your website the most reliable source on the topics you cover.
            </ArticleParagraph>
          </ArticleSection>

          {OPTIMIZATION_TIPS.map((tip, index) => (
            <ArticleSection
              key={tip.id}
              id={tip.id}
              title={`${tip.num}. ${tip.title}`}
              alt={index % 2 === 1}
            >
              <ArticleParagraph>{tip.intro}</ArticleParagraph>
              {tip.body && (
                <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                  {tip.body}
                </p>
              )}
              {tip.focusLabel && (
                <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                  {tip.focusLabel}
                </p>
              )}
              {tip.items && <BulletList items={tip.items} />}
              {tip.faqExample && (
                <div className="flex flex-col gap-[var(--size--m)]">
                  {tip.faqExample.map((example) => (
                    <div
                      key={example.q}
                      className="rounded-[var(--radius--radius-lg)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--l)]"
                    >
                      <p className="mb-[var(--size--s)] font-semibold text-[length:var(--typography--text-m)]">
                        {example.q}
                      </p>
                      <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                        {example.a}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {tip.closing && <ArticleParagraph>{tip.closing}</ArticleParagraph>}
            </ArticleSection>
          ))}

          <ArticleSection id="common-mistakes" title="Common Mistakes to Avoid">
            <ArticleParagraph>
              Many businesses reduce their chances of appearing in AI search by:
            </ArticleParagraph>
            <BulletList
              items={[
                "Keyword stuffing",
                "Publishing duplicate content",
                "Ignoring user intent",
                "Writing thin articles",
                "Failing to update content",
                "Using poor website structure",
                "Neglecting mobile optimization",
                "Skipping schema markup",
                "Creating content solely for search engines",
              ]}
            />
            <ArticleParagraph>
              Avoiding these issues improves both traditional SEO and AI visibility.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="checklist" title="AI Search Optimization Checklist" alt>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Before publishing any page, ask yourself:
            </p>
            <CheckList items={CHECKLIST_ITEMS} />
            <ArticleParagraph>
              If the answer is yes, your content is well-positioned for both search engines and AI
              platforms.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="How Let's Advertising Helps Businesses Prepare for AI Search">
            <ArticleParagraph>
              At Let&apos;s Advertising, we help businesses stay ahead of the rapidly evolving search
              landscape.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our AI Search Optimization services include:
            </p>
            <BulletList
              items={[
                "Answer Engine Optimization (AEO)",
                "SEO Strategy & Technical SEO",
                "AI-Optimized Content Creation",
                "Content Clustering",
                "Schema Markup Implementation",
                "Website Performance Optimization",
                "Local SEO",
                "AI Search Visibility Audits",
                "Analytics & Performance Tracking",
              ]}
            />
            <ArticleParagraph>
              We combine proven SEO strategies with modern AI optimization techniques to help
              businesses increase visibility across traditional and AI-powered search platforms.
            </ArticleParagraph>
            <Link
              href="/aeo-services"
              className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
            >
              Explore our AI search optimization services →
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
              The rise of ChatGPT and Google AI Overviews marks a major shift in how people discover
              information online.
            </ArticleParagraph>
            <ArticleParagraph>
              Success is no longer just about ranking #1 on Google—it&apos;s about becoming the
              trusted source AI platforms rely on to answer user questions.
            </ArticleParagraph>
            <ArticleParagraph>
              By combining strong SEO fundamentals with Answer Engine Optimization, clear content
              structure, technical excellence, and genuine expertise, your business can remain visible
              in both traditional search results and the next generation of AI-powered search.
            </ArticleParagraph>
            <ArticleParagraph>
              The future of search belongs to businesses that educate, inform, and build trust.
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
        title="Ready to Make Your Website AI-Ready?"
        body="At Let's Advertising, we help businesses optimize for today's search engines and tomorrow's AI-powered experiences."
        subtext="Book a Free AI Search Audit and discover how your website can improve its visibility across Google Search, Google AI Overviews, ChatGPT, Gemini, and other leading AI platforms."
        ctaLabel="Book a Free AI Search Audit"
      />
    </>
  );
}
