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
  { id: "what-is", label: "What Is Programmatic Advertising?" },
  { id: "why-matters", label: "Why It Matters" },
  { id: "ecosystem", label: "The Ecosystem" },
  { id: "impression", label: "How an Impression Works" },
  { id: "targeting", label: "Targeting" },
  { id: "brand-safety", label: "Frequency & Brand Safety" },
  { id: "measuring", label: "Measuring Campaigns" },
  { id: "challenges", label: "Common Challenges" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const RELATED_LINKS = [
  { label: "What Is Digital Advertising?", href: "/blog/what-is-digital-advertising-complete-guide" },
  { label: "Google Ads vs Meta Ads", href: "/blog/google-ads-vs-meta-ads" },
  { label: "Performance Marketing Guide", href: "/blog/what-is-performance-marketing" },
  { label: "Display Advertising Guide", href: "/blog/beginners-guide-to-display-advertising" },
  { label: "CTV Advertising Guide", href: "/blog/ctv-advertising-guide" },
  { label: "Digital Advertising Strategy", href: "/blog/how-to-build-digital-advertising-strategy" },
  { label: "CPM vs CPC vs CPA", href: "/blog/cpm-vs-cpc-vs-cpa" },
  { label: "Retargeting Guide", href: "/blog/what-is-retargeting-increase-conversions" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["how-programmatic-advertising-works"];

export function ProgrammaticAdvertisingBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="How Programmatic Advertising Works: A Complete Guide"
        category="Digital Advertising"
        date="August 29, 2026"
        readTime="11 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Programmatic advertising has transformed the way digital advertising inventory is purchased and managed. Instead of relying entirely on manual negotiations and direct placement agreements, programmatic technology allows advertisers to automate the buying and selling of digital advertising inventory.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is" title="What Is Programmatic Advertising?">
            <ArticleParagraph>
              Programmatic advertising is the automated buying and selling of digital advertising inventory using technology platforms.
            </ArticleParagraph>
            <ArticleParagraph>
              When a user visits a website or application containing an available advertising opportunity, technology can evaluate the impression and determine whether it matches an advertiser's campaign criteria. If it does, the advertiser can participate in the auction.
            </ArticleParagraph>
            <ArticleParagraph>
              This process happens extremely quickly.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="why-matters" title="Why It Matters" alt>
            <ArticleParagraph>
              Programmatic advertising automates many media-buying processes. Advertisers can define audience requirements, geographic targeting, budget, frequency limits, creative requirements, brand safety settings, placement preferences, and performance goals.
            </ArticleParagraph>
            <ArticleParagraph>
              Technology can then help deliver advertisements according to those requirements.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="ecosystem" title="The Programmatic Ecosystem">
            <ArticleParagraph>
              Advertisers are businesses that want to promote products or services. Demand-side platforms allow advertisers or agencies to manage programmatic campaigns. Supply-side platforms help publishers make advertising inventory available to buyers. Ad exchanges facilitate transactions between buyers and sellers, while publishers provide digital advertising inventory through websites, applications, streaming environments, and other properties.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="impression" title="How an Impression Works" alt>
            <ArticleParagraph>
              Imagine someone opens a website. The website has an advertising slot available. Information about the advertising opportunity is made available to the programmatic ecosystem. Advertisers evaluate the opportunity based on campaign criteria. Eligible advertisers may participate in an auction, and a winning advertisement is selected and delivered.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="targeting" title="Targeting">
            <ArticleParagraph>
              Programmatic advertising can use demographics, geography, interests, behavioral signals, context, device, content environment, and previous website interactions.
            </ArticleParagraph>
            <ArticleParagraph>
              Contextual targeting focuses on the content surrounding an advertisement. Retargeting can reconnect with people who have previously visited a website.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="brand-safety" title="Frequency and Brand Safety" alt>
            <ArticleParagraph>
              Showing the same advertisement too many times can create a poor user experience. Frequency management helps control exposure.
            </ArticleParagraph>
            <ArticleParagraph>
              Brand safety is another important consideration. Advertisers generally want messages to appear in appropriate environments, so campaigns can use controls and verification solutions to reduce exposure to undesirable content.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="measuring" title="Measuring Campaigns">
            <ArticleParagraph>
              Programmatic campaigns can be measured using impressions, reach, frequency, clicks, viewability, video completion rate, conversions, cost per acquisition, and return on ad spend.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="challenges" title="Common Challenges" alt>
            <ArticleParagraph>
              Challenges include poor campaign setup, weak targeting, inaccurate tracking, low-quality inventory, excessive frequency, creative fatigue, poor optimization, and incomplete reporting.
            </ArticleParagraph>
            <ArticleParagraph>
              Technology does not automatically create a successful campaign. Strategy remains essential.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              Programmatic advertising combines technology, data, automation, and media buying to help advertisers reach audiences at scale.
            </ArticleParagraph>
            <ArticleParagraph>
              Successful programmatic advertising requires strong planning, audience strategy, creative, tracking, optimization, and reporting.
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
        title="Considering Programmatic Advertising?"
        body="Our team can help develop a strategy that balances reach, relevance, efficiency, and measurable performance."
        ctaLabel="Talk to an Advertising Specialist"
      />
    </>
  );
}
