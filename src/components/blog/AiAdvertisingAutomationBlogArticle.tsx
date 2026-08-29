"use client";

import Link from "next/link";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";
import {
  ArticleFaq,
  ArticleParagraph,
  ArticleSection,
  BlogArticleCta,
  BlogArticleHero,
} from "@/components/blog/BlogArticleParts";
import type { TocItem } from "@/components/blog/TableOfContents";
import { BLOG_FAQ_BY_SLUG } from "@/lib/blog/faq";

const TOC_ITEMS: TocItem[] = [
  { id: "what-is", label: "What Is Automation?" },
  { id: "why", label: "Why It Matters" },
  { id: "monitoring", label: "Automated Monitoring" },
  { id: "optimization", label: "Automated Optimization" },
  { id: "reporting", label: "Automated Reporting" },
  { id: "creative", label: "Creative Automation" },
  { id: "guardrails", label: "Guardrails" },
  { id: "oversight", label: "Human Oversight" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Conclusion" },
];

const RELATED_LINKS = [
  { label: "AI Advertising Complete Guide", href: "/blog/ai-advertising-complete-guide" },
  { label: "AI Transforming Digital Ads 2026", href: "/blog/how-ai-is-transforming-digital-advertising-2026" },
  { label: "AI-Powered PPC Advertising", href: "/blog/ai-powered-ppc-advertising" },
  { label: "AI Ad Targeting", href: "/blog/ai-ad-targeting" },
  { label: "AI Programmatic Advertising", href: "/blog/ai-programmatic-advertising" },
  { label: "AI-Powered Ad Creative", href: "/blog/ai-powered-ad-creative" },
  { label: "AI Ad Optimization & ROAS", href: "/blog/ai-ad-optimization-roas" },
  { label: "Generative AI Advertising", href: "/blog/generative-ai-advertising" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["ai-advertising-automation"];

export function AiAdvertisingAutomationBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="AI Advertising Automation: How Businesses Can Automate Campaign Management"
        category="AI Advertising"
        date="August 29, 2026"
        readTime="8 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              As advertising accounts become larger and more complex, manual campaign management can consume significant time. AI advertising automation can reduce repetitive work and help teams monitor, analyze, and optimize campaigns more efficiently.
            </ArticleParagraph>
          </div>
          <ArticleSection id="what-is" title="What Is AI Advertising Automation?">
            <ArticleParagraph>
              AI advertising automation uses artificial intelligence to assist or automate tasks such as campaign monitoring, bidding, budget management, audience analysis, creative testing, reporting, and optimization.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="why" title="Why Automation Matters" alt>
            <ArticleParagraph>
              A human team can review only a limited number of signals at once. Automated systems can monitor large numbers of campaigns and identify changes quickly.
            </ArticleParagraph>
            <ArticleParagraph>
              This can be particularly valuable for businesses running multiple platforms or large media programs.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="monitoring" title="Automated Monitoring">
            <ArticleParagraph>
              AI can detect unusual changes in spend, impressions, clicks, conversions, CPA, or revenue. Early alerts allow advertisers to investigate problems before they become larger performance issues.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="optimization" title="Automated Optimization" alt>
            <ArticleParagraph>
              AI can support adjustments to bids, budgets, audiences, and placements. Automation should operate within clearly defined limits so that business strategy remains in control.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="reporting" title="Automated Reporting">
            <ArticleParagraph>
              AI can summarize performance and surface the most important changes. This can reduce the time spent building routine reports and increase the time available for analysis and strategic planning.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="creative" title="Creative Automation" alt>
            <ArticleParagraph>
              AI can generate creative variations and help organize testing. Advertisers can use these systems to create a steady learning loop rather than relying on occasional creative refreshes.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="guardrails" title="Guardrails">
            <ArticleParagraph>
              Effective automation requires rules. These can include maximum budgets, minimum performance thresholds, brand-safety requirements, frequency limits, approval processes, and escalation rules.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="oversight" title="Human Oversight" alt>
            <ArticleParagraph>
              Automation does not remove responsibility. Humans should define objectives, review important changes, manage brand decisions, evaluate business value, and intervene when automated behavior conflicts with strategy.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="final-thoughts" title="Conclusion">
            <ArticleParagraph>
              AI advertising automation can make campaign operations more scalable and responsive.
            </ArticleParagraph>
            <ArticleParagraph>
              Businesses should automate repetitive decisions while preserving human control over strategy, brand, risk, and business priorities.
            </ArticleParagraph>
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
        title="Ready to Automate Campaign Operations?"
        body="Automate repetitive decisions while preserving human control over strategy, brand, risk, and business priorities."
        ctaLabel="Explore Advertising Automation"
      />
    </>
  );
}
