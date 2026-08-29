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
  { id: "how-it-works", label: "How It Works" },
  { id: "types", label: "Major Types" },
  { id: "why-matters", label: "Why It Matters" },
  { id: "targeting", label: "Targeting" },
  { id: "creative", label: "Creative" },
  { id: "measuring", label: "Measuring Performance" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const RELATED_LINKS = [
  { label: "Google Ads vs Meta Ads", href: "/blog/google-ads-vs-meta-ads" },
  { label: "Programmatic Advertising Guide", href: "/blog/how-programmatic-advertising-works" },
  { label: "Performance Marketing Guide", href: "/blog/what-is-performance-marketing" },
  { label: "Display Advertising Guide", href: "/blog/beginners-guide-to-display-advertising" },
  { label: "CTV Advertising Guide", href: "/blog/ctv-advertising-guide" },
  { label: "Digital Advertising Strategy", href: "/blog/how-to-build-digital-advertising-strategy" },
  { label: "CPM vs CPC vs CPA", href: "/blog/cpm-vs-cpc-vs-cpa" },
  { label: "Retargeting Guide", href: "/blog/what-is-retargeting-increase-conversions" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["what-is-digital-advertising-complete-guide"];

export function DigitalAdvertisingGuideBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="What Is Digital Advertising? A Complete Guide for Businesses"
        category="Digital Advertising"
        date="August 29, 2026"
        readTime="12 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Digital advertising has become one of the most effective ways for businesses to reach potential customers. Whether you operate a small local business, an e-commerce store, a technology company, or a global brand, digital advertising can help you reach the right audience at the right time.
            </ArticleParagraph>
            <ArticleParagraph>
              Digital advertising refers to promotional messages delivered through digital channels such as search engines, social media platforms, websites, mobile applications, streaming services, and connected television.
            </ArticleParagraph>
            <ArticleParagraph>
              Examples include Google Search Ads, display advertising, social media advertising, video advertising, programmatic advertising, connected TV advertising, retargeting campaigns, shopping advertisements, and sponsored content.
            </ArticleParagraph>
            <ArticleParagraph>
              The major advantage of digital advertising is measurability. Advertisers can monitor impressions, clicks, conversions, revenue, cost per acquisition, return on ad spend, and many other performance indicators.
            </ArticleParagraph>
          </div>

          <ArticleSection id="how-it-works" title="How Digital Advertising Works">
            <ArticleParagraph>
              Most digital advertising campaigns follow a simple process: define an objective, identify the target audience, select appropriate channels, create the campaign, launch it, measure performance, and optimize continuously.
            </ArticleParagraph>
            <ArticleParagraph>
              Campaign objectives might include increasing website traffic, generating leads, driving online purchases, increasing app installations, or building brand awareness.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="types" title="Major Types of Digital Advertising" alt>
            <ArticleParagraph>
              Search advertising allows businesses to appear when users actively search for relevant products or services. It is particularly valuable for capturing users with strong purchase intent.
            </ArticleParagraph>
            <ArticleParagraph>
              Display advertising uses visual advertisements that appear across websites, applications, and digital properties. Formats include banners, responsive ads, rich media, and interactive placements.
            </ArticleParagraph>
            <ArticleParagraph>
              Social media advertising allows brands to reach audiences based on demographics, interests, behaviors, engagement, and other signals. It can support awareness, lead generation, e-commerce, app promotion, and retargeting.
            </ArticleParagraph>
            <ArticleParagraph>
              Video advertising gives brands an opportunity to communicate visually and emotionally across online video and streaming environments.
            </ArticleParagraph>
            <ArticleParagraph>
              Programmatic advertising uses automated technology to purchase digital advertising inventory based on predefined targeting and campaign requirements.
            </ArticleParagraph>
            <ArticleParagraph>
              Connected TV advertising allows advertisers to reach audiences watching content through internet-connected televisions and streaming devices while retaining many digital targeting and measurement capabilities.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="why-matters" title="Why Digital Advertising Matters">
            <ArticleParagraph>
              Digital advertising gives businesses detailed information about campaign performance. Advertisers can determine how many people saw an advertisement, how many clicked, which audiences performed best, which creative generated the strongest response, and which placements contributed to results.
            </ArticleParagraph>
            <ArticleParagraph>
              This allows businesses to make decisions based on data rather than assumptions.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="targeting" title="The Importance of Targeting" alt>
            <ArticleParagraph>
              Effective advertising starts with understanding the ideal customer. Targeting can consider age, location, interests, search behavior, website activity, purchase behavior, professional characteristics, previous engagement, and other relevant signals.
            </ArticleParagraph>
            <ArticleParagraph>
              The goal is not simply to reach more people. It is to reach people who are most likely to be valuable to the business.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="creative" title="Why Creative Matters">
            <ArticleParagraph>
              Even a highly targeted campaign can underperform if the advertisement does not capture attention. Strong creative should communicate what is being offered, why the customer should care, and what they should do next.
            </ArticleParagraph>
            <ArticleParagraph>
              Testing headlines, images, videos, calls to action, and offers can reveal which messages resonate most strongly.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="measuring" title="Measuring Performance" alt>
            <ArticleParagraph>
              Important metrics include impressions, click-through rate, cost per click, conversion rate, cost per acquisition, and return on ad spend. Different campaigns require different success metrics.
            </ArticleParagraph>
            <ArticleParagraph>
              An awareness campaign should not necessarily be evaluated using the same criteria as an e-commerce conversion campaign.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Learn more about pricing models in our guide to 
              <Link href="/blog/cpm-vs-cpc-vs-cpa" className="font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline">
                CPM vs. CPC vs. CPA
              </Link>
              .
            </p>
          </ArticleSection>


          <ArticleSection id="mistakes" title="Common Mistakes">
            <ArticleParagraph>
              Common mistakes include launching campaigns without clear objectives, targeting audiences that are too broad, making decisions based on limited data, stopping campaigns before enough information has been collected, and failing to implement accurate conversion tracking.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              For a deeper look, see 
              <Link href="/blog/common-digital-advertising-mistakes" className="font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline">
                10 common digital advertising mistakes
              </Link>
              .
            </p>
          </ArticleSection>


          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              Digital advertising gives businesses an opportunity to reach highly relevant audiences while measuring campaign performance in detail. Successful advertising requires strategy, testing, accurate measurement, and continuous optimization.
            </ArticleParagraph>
            <ArticleParagraph>
              Whether the goal is generating leads, increasing online sales, building brand awareness, or reaching new audiences, a well-planned digital advertising strategy can help turn advertising investment into measurable business growth.
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
        title="Ready to Improve Your Digital Advertising Strategy?"
        body="Contact our team to discuss your goals, audience, and campaign opportunities."
        ctaLabel="Book a Free Advertising Consultation"
      />
    </>
  );
}
