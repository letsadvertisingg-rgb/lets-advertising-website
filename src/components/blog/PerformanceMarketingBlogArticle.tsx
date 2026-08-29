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
  { id: "what-is", label: "What Is Performance Marketing?" },
  { id: "why-matters", label: "Why It Matters" },
  { id: "channels", label: "Common Channels" },
  { id: "customer-journey", label: "Customer Journey" },
  { id: "metrics", label: "Important Metrics" },
  { id: "tracking", label: "Tracking" },
  { id: "testing", label: "Testing & Budget" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const RELATED_LINKS = [
  { label: "What Is Digital Advertising?", href: "/blog/what-is-digital-advertising-complete-guide" },
  { label: "Google Ads vs Meta Ads", href: "/blog/google-ads-vs-meta-ads" },
  { label: "Programmatic Advertising Guide", href: "/blog/how-programmatic-advertising-works" },
  { label: "Display Advertising Guide", href: "/blog/beginners-guide-to-display-advertising" },
  { label: "CTV Advertising Guide", href: "/blog/ctv-advertising-guide" },
  { label: "Digital Advertising Strategy", href: "/blog/how-to-build-digital-advertising-strategy" },
  { label: "CPM vs CPC vs CPA", href: "/blog/cpm-vs-cpc-vs-cpa" },
  { label: "Retargeting Guide", href: "/blog/what-is-retargeting-increase-conversions" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["what-is-performance-marketing"];

export function PerformanceMarketingBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="What Is Performance Marketing and How Does It Work?"
        category="Digital Advertising"
        date="August 29, 2026"
        readTime="10 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Businesses invest in advertising because they want results. Those results may include sales, leads, registrations, app downloads, bookings, or other measurable actions.
            </ArticleParagraph>
            <ArticleParagraph>
              Performance marketing focuses heavily on measurable outcomes and continuous optimization.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is" title="What Is Performance Marketing?">
            <ArticleParagraph>
              Performance marketing is an advertising approach where campaign success is evaluated using measurable actions and outcomes.
            </ArticleParagraph>
            <ArticleParagraph>
              Instead of focusing only on exposure, performance marketers analyze what happens after someone sees or interacts with an advertisement.
            </ArticleParagraph>
            <ArticleParagraph>
              For example, an advertisement receives 100,000 impressions, 5,000 people click, 500 submit a form, and 100 become customers. Performance marketing looks at the entire journey.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="why-matters" title="Why It Matters" alt>
            <ArticleParagraph>
              Digital advertising provides detailed data about traffic, engagement, leads, purchases, revenue, cost per acquisition, and conversion rates.
            </ArticleParagraph>
            <ArticleParagraph>
              This information allows campaigns to be continuously improved.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="channels" title="Common Channels">
            <ArticleParagraph>
              Performance marketing can use search advertising, social advertising, display advertising, programmatic advertising, affiliate marketing, and email marketing.
            </ArticleParagraph>
            <ArticleParagraph>
              Each channel can support a different part of the customer journey.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="customer-journey" title="Understanding the Customer Journey" alt>
            <ArticleParagraph>
              A typical journey may look like Awareness → Interest → Consideration → Conversion → Retention.
            </ArticleParagraph>
            <ArticleParagraph>
              Awareness campaigns introduce the brand. Consideration campaigns provide additional information. Conversion campaigns encourage action. Retention campaigns help maintain customer relationships.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="metrics" title="Important Metrics">
            <ArticleParagraph>
              Cost per acquisition measures the cost of generating a conversion. Conversion rate measures the percentage of users who complete the desired action. Return on ad spend measures revenue generated relative to advertising expenditure. Customer acquisition cost and lifetime value provide additional business context.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Dive deeper into 
              <Link href="/blog/cpm-vs-cpc-vs-cpa" className="font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline">
                CPM, CPC, and CPA
              </Link>
              .
            </p>
          </ArticleSection>


          <ArticleSection id="tracking" title="The Importance of Tracking" alt>
            <ArticleParagraph>
              Performance marketing depends on accurate data. If conversions are not tracked correctly, optimization decisions may be based on incomplete information.
            </ArticleParagraph>
            <ArticleParagraph>
              Before launching, determine what counts as a conversion, which actions matter most, how revenue will be measured, and how channels will be evaluated.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="testing" title="Testing, Creative & Budget">
            <ArticleParagraph>
              Performance marketers can test headlines, images, videos, audiences, keywords, landing pages, calls to action, offers, and budgets. Testing should be structured so that meaningful conclusions can be drawn.
            </ArticleParagraph>
            <ArticleParagraph>
              Performance advertising is not just about numbers. Creative can have a major impact on attention, engagement, and conversion rates.
            </ArticleParagraph>
            <ArticleParagraph>
              Advertising budgets should be allocated based on business objectives and performance. The lowest-cost channel is not always the best channel. A channel producing fewer leads at a higher cost may generate significantly more revenue if those leads are higher quality.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              Performance marketing provides businesses with a data-driven approach to advertising. By combining strategy, tracking, testing, creative, and optimization, businesses can make better decisions about where and how to invest their advertising budgets.
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
        title="Ready for Performance-Driven Campaigns?"
        body="Our performance marketing team can help turn advertising data into actionable insights and campaigns designed around measurable business outcomes."
        ctaLabel="Book a Performance Marketing Call"
      />
    </>
  );
}
