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
  { id: "step-1", label: "1. Define Objective" },
  { id: "step-2", label: "2. Understand Audience" },
  { id: "step-3", label: "3. Customer Journey" },
  { id: "step-4", label: "4. Choose Channels" },
  { id: "step-5", label: "5. Establish Budget" },
  { id: "step-6", label: "6. Creative Strategy" },
  { id: "step-7", label: "7. Set Up Tracking" },
  { id: "step-8", label: "8. Launch and Test" },
  { id: "step-9", label: "9. Optimize" },
  { id: "step-10", label: "10. Scale" },
  { id: "integration", label: "Integration" },
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
  { label: "CPM vs CPC vs CPA", href: "/blog/cpm-vs-cpc-vs-cpa" },
  { label: "Retargeting Guide", href: "/blog/what-is-retargeting-increase-conversions" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["how-to-build-digital-advertising-strategy"];

export function DigitalAdvertisingStrategyBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="How to Build an Effective Digital Advertising Strategy"
        category="Digital Advertising"
        date="August 29, 2026"
        readTime="11 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Successful advertising rarely happens by accident. Before launching campaigns, businesses need to understand their objectives, audiences, customer journey, budget, channels, creative requirements, and measurement strategy.
            </ArticleParagraph>
          </div>

          <ArticleSection id="step-1" title="Step 1: Define Your Business Objective">
            <ArticleParagraph>
              Start with the business outcome. Do you want to generate leads, increase online sales, build brand awareness, launch a product, increase website traffic, acquire customers, or retain existing customers? Your advertising strategy should support a specific objective.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="step-2" title="Step 2: Understand Your Audience" alt>
            <ArticleParagraph>
              Consider who your customers are, what problem they are solving, what motivates them, what objections they have, where they spend time online, how they research products, and what influences purchase decisions.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="step-3" title="Step 3: Understand the Customer Journey">
            <ArticleParagraph>
              Not every customer is ready to purchase immediately. A potential customer may first discover your brand, research your offering, compare alternatives, and eventually convert. Advertising should support these stages.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="step-4" title="Step 4: Choose the Right Channels" alt>
            <ArticleParagraph>
              Potential channels include search, social, display, programmatic, video, CTV, and retargeting. Do not select channels simply because they are popular. Select them because they make sense for your audience and objectives.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="step-5" title="Step 5: Establish Your Budget">
            <ArticleParagraph>
              Your budget should reflect your goals, market competition, audience size, and expected customer value. A small test budget can help validate assumptions before significant investment.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="step-6" title="Step 6: Develop Your Creative Strategy" alt>
            <ArticleParagraph>
              Creative should be aligned with the audience and platform. A social video may require a different approach from a display banner, while a CTV advertisement may need a different message from a search ad.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="step-7" title="Step 7: Set Up Tracking">
            <ArticleParagraph>
              Determine which actions matter and how they will be measured. These may include form submissions, purchases, phone calls, registrations, downloads, and revenue.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="step-8" title="Step 8: Launch and Test" alt>
            <ArticleParagraph>
              Do not expect the first version of a campaign to be perfect. Test creative, audiences, messaging, offers, landing pages, bids, and placements.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="step-9" title="Step 9: Optimize">
            <ArticleParagraph>
              Review performance regularly. Look for high-performing audiences, strong creative, weak placements, expensive conversions, conversion trends, and budget opportunities.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="step-10" title="Step 10: Scale" alt>
            <ArticleParagraph>
              Once a campaign demonstrates consistent performance, consider increasing investment. Scaling should be controlled because rapidly increasing budgets can affect efficiency.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="integration" title="The Importance of Integration">
            <ArticleParagraph>
              Modern advertising works best when channels work together. Search, social, programmatic, video, and CTV can each contribute to different stages of the customer journey.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              A strong advertising strategy starts with business objectives and ends with measurable results.
            </ArticleParagraph>
            <ArticleParagraph>
              Objective → Audience → Channels → Creative → Tracking → Testing → Optimization → Growth.
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
        title="Need a Strategy Built Around Your Goals?"
        body="Our advertising specialists can help evaluate your audience, channels, budget, creative, and measurement approach."
        ctaLabel="Build Your Advertising Strategy"
      />
    </>
  );
}
