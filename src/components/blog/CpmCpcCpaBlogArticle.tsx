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
  { id: "what-is-cpm", label: "What Is CPM?" },
  { id: "what-is-cpc", label: "What Is CPC?" },
  { id: "what-is-cpa", label: "What Is CPA?" },
  { id: "which-metric", label: "Which Metric Matters?" },
  { id: "cheap-not-better", label: "Cheap Isn't Always Better" },
  { id: "roas", label: "Understanding ROAS" },
  { id: "metrics-together", label: "How Metrics Work Together" },
  { id: "context", label: "Context Matters" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const RELATED_LINKS = [
  { label: "What Is Digital Advertising?", href: "/blog/what-is-digital-advertising-complete-guide" },
  { label: "Google Ads vs Meta Ads", href: "/blog/google-ads-vs-meta-ads" },
  { label: "Programmatic Advertising Guide", href: "/blog/how-programmatic-advertising-works" },
  { label: "Performance Marketing Guide", href: "/blog/what-is-performance-marketing" },
  { label: "Display Advertising Guide", href: "/blog/beginners-guide-to-display-advertising" },
  { label: "CTV Advertising Guide", href: "/blog/ctv-advertising-guide" },
  { label: "Digital Advertising Strategy", href: "/blog/how-to-build-digital-advertising-strategy" },
  { label: "Retargeting Guide", href: "/blog/what-is-retargeting-increase-conversions" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["cpm-vs-cpc-vs-cpa"];

export function CpmCpcCpaBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="CPM vs. CPC vs. CPA: Understanding Advertising Pricing Models"
        category="Digital Advertising"
        date="August 29, 2026"
        readTime="8 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Digital advertising uses several pricing and measurement models. Three of the most commonly discussed are CPM, CPC, and CPA.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-cpm" title="What Is CPM?">
            <ArticleParagraph>
              CPM stands for Cost Per Mille, meaning cost per thousand impressions. For example, if an advertiser pays $10 CPM, the approximate cost is $10 for every 1,000 impressions.
            </ArticleParagraph>
            <ArticleParagraph>
              CPM is commonly used in campaigns focused on reach and awareness.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="what-is-cpc" title="What Is CPC?" alt>
            <ArticleParagraph>
              CPC stands for Cost Per Click. It measures the average amount an advertiser pays for a click.
            </ArticleParagraph>
            <ArticleParagraph>
              If a campaign spends $500 and generates 1,000 clicks, the average CPC is $0.50.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="what-is-cpa" title="What Is CPA?">
            <ArticleParagraph>
              CPA stands for Cost Per Acquisition or Cost Per Action. It measures how much advertising spend is required to generate a desired conversion.
            </ArticleParagraph>
            <ArticleParagraph>
              If a campaign spends $1,000 and generates 50 conversions, the CPA is $20.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="which-metric" title="Which Metric Is Most Important?" alt>
            <ArticleParagraph>
              There is no universal answer. It depends on the campaign objective.
            </ArticleParagraph>
            <ArticleParagraph>
              An awareness campaign may prioritize CPM, reach, frequency, and viewability. A traffic campaign may prioritize CPC and click-through rate. A conversion campaign may prioritize CPA, conversion rate, revenue, and return on ad spend.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="cheap-not-better" title="Why Cheap Isn't Always Better">
            <ArticleParagraph>
              Suppose Campaign A produces conversions at $10 each while Campaign B produces conversions at $20 each. Campaign A appears better, but what if Campaign A generates low-quality leads while Campaign B generates customers who produce significantly more revenue?
            </ArticleParagraph>
            <ArticleParagraph>
              The lower CPA is not necessarily the better business outcome.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="roas" title="Understanding ROAS" alt>
            <ArticleParagraph>
              ROAS stands for Return on Ad Spend. If a business spends $1,000 on advertising and generates $5,000 in attributable revenue, the ROAS is 5x.
            </ArticleParagraph>
            <ArticleParagraph>
              ROAS can help e-commerce businesses evaluate advertising efficiency, but businesses should also consider margins, customer acquisition costs, and lifetime customer value.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="metrics-together" title="How Metrics Work Together">
            <ArticleParagraph>
              Advertising metrics should not be viewed in isolation.
            </ArticleParagraph>
            <ArticleParagraph>
              CPM → CPC → Conversion Rate → CPA → Revenue → ROAS.
            </ArticleParagraph>
            <ArticleParagraph>
              Each metric provides information about a different stage of the advertising process.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="context" title="Context Matters" alt>
            <ArticleParagraph>
              Advertising performance varies by industry, market, audience, platform, product, season, competition, creative, and customer journey.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              CPM, CPC, and CPA are useful tools for evaluating advertising campaigns, but they should always be connected to business objectives.
            </ArticleParagraph>
            <ArticleParagraph>
              The best advertising strategy is not necessarily the one with the lowest cost per click or acquisition. It is the strategy that produces valuable business outcomes efficiently and sustainably.
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
        title="Which Metrics Matter for Your Campaigns?"
        body="Our team can help identify the metrics that matter most for your campaigns and build reporting around meaningful business outcomes."
        ctaLabel="Get Clarity on Your Ad Metrics"
      />
    </>
  );
}
