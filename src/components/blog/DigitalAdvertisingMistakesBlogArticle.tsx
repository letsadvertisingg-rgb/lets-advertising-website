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
  { id: "mistake-1", label: "1. No Clear Objective" },
  { id: "mistake-2", label: "2. Targeting Everyone" },
  { id: "mistake-3", label: "3. Ignoring Creative" },
  { id: "mistake-4", label: "4. Poor Tracking" },
  { id: "mistake-5", label: "5. Wrong Metric" },
  { id: "mistake-6", label: "6. Poor Landing Pages" },
  { id: "mistake-7", label: "7. Changing Too Often" },
  { id: "mistake-8", label: "8. No Segmentation" },
  { id: "mistake-9", label: "9. Failing to Test" },
  { id: "mistake-10", label: "10. Short-Term Only" },
  { id: "how-to-avoid", label: "How to Avoid Them" },
  { id: "professional-support", label: "Professional Support" },
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
  { label: "CPM vs CPC vs CPA", href: "/blog/cpm-vs-cpc-vs-cpa" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["common-digital-advertising-mistakes"];

export function DigitalAdvertisingMistakesBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="10 Common Digital Advertising Mistakes Businesses Should Avoid"
        category="Digital Advertising"
        date="August 29, 2026"
        readTime="10 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Digital advertising can generate significant results, but poor campaign decisions can quickly waste budget.
            </ArticleParagraph>
            <ArticleParagraph>
              Many advertising problems are not caused by the platform itself. They are caused by unclear objectives, weak targeting, poor tracking, ineffective creative, or insufficient optimization.
            </ArticleParagraph>
          </div>

          <ArticleSection id="mistake-1" title="1. Launching Without a Clear Objective">
            <ArticleParagraph>
              Every campaign should have a defined purpose. Is the goal awareness, traffic, leads, sales, registrations, or something else?
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="mistake-2" title="2. Targeting Everyone" alt>
            <ArticleParagraph>
              Trying to reach everyone can make campaigns inefficient. Businesses should understand their ideal customers and build targeting around relevant characteristics and behaviors.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="mistake-3" title="3. Ignoring Creative">
            <ArticleParagraph>
              Creative is one of the most visible parts of advertising. Weak messaging can limit performance even when targeting is strong.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="mistake-4" title="4. Poor Tracking" alt>
            <ArticleParagraph>
              If conversions are not tracked correctly, businesses cannot confidently evaluate campaign performance. Tracking should be tested before campaigns launch.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="mistake-5" title="5. Optimizing for the Wrong Metric">
            <ArticleParagraph>
              A campaign may generate thousands of clicks but few customers. Another may generate fewer clicks but significantly more revenue. Businesses should optimize toward meaningful business outcomes.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="mistake-6" title="6. Sending Traffic to Poor Landing Pages" alt>
            <ArticleParagraph>
              An advertisement cannot compensate for a confusing landing page. Landing pages should load quickly, match the advertisement, communicate the value proposition, make the next action obvious, and work well on mobile devices.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="mistake-7" title="7. Changing Campaigns Too Frequently">
            <ArticleParagraph>
              Campaigns need enough time and data to produce useful insights. Constantly changing campaigns can make it difficult to determine what is actually working.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="mistake-8" title="8. Ignoring Audience Segmentation" alt>
            <ArticleParagraph>
              Different customers may have different needs. New prospects, returning visitors, existing customers, and high-intent users should not always receive the same message.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="mistake-9" title="9. Failing to Test">
            <ArticleParagraph>
              The first campaign setup is rarely perfect. Businesses can test creative, messaging, audiences, landing pages, offers, and platforms.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection id="mistake-10" title="10. Focusing Only on Short-Term Results" alt>
            <ArticleParagraph>
              Some advertising campaigns influence customers long before a purchase occurs. Brand awareness and consideration can play an important role in long-term growth.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="how-to-avoid" title="How to Avoid These Mistakes">
            <ArticleParagraph>
              A strong advertising process typically includes Strategy → Audience Research → Media Planning → Creative → Tracking → Launch → Measurement → Optimization.
            </ArticleParagraph>
            <ArticleParagraph>
              Each stage contributes to campaign performance.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="professional-support" title="Why Professional Support Can Help" alt>
            <ArticleParagraph>
              Managing advertising across multiple platforms can become complex. An experienced advertising team can help businesses develop strategy, select channels, build campaigns, manage budgets, test creative, implement tracking, analyze performance, optimize campaigns, and report results.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              Digital advertising provides businesses with powerful tools, but tools alone do not guarantee success.
            </ArticleParagraph>
            <ArticleParagraph>
              Avoiding common mistakes and following a disciplined strategy can improve campaign efficiency and decision-making.
            </ArticleParagraph>
            <ArticleParagraph>
              The most successful advertisers continuously learn from data, test new approaches, and adapt to changing customer behavior.
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
        title="Ads Not Delivering the Results You Expect?"
        body="Our team can review your current strategy and identify opportunities for improvement."
        ctaLabel="Request an Advertising Audit"
      />
    </>
  );
}
