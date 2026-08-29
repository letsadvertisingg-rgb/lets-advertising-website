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
  { id: "what-is", label: "What Is CTV Advertising?" },
  { id: "why-different", label: "Why CTV Is Different" },
  { id: "why-brands", label: "Why Brands Use CTV" },
  { id: "vs-traditional", label: "CTV vs. Traditional TV" },
  { id: "creative", label: "Video Creative" },
  { id: "measuring", label: "Measuring CTV" },
  { id: "customer-journey", label: "Customer Journey" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "is-right", label: "Is CTV Right for You?" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const RELATED_LINKS = [
  { label: "What Is Digital Advertising?", href: "/blog/what-is-digital-advertising-complete-guide" },
  { label: "Google Ads vs Meta Ads", href: "/blog/google-ads-vs-meta-ads" },
  { label: "Programmatic Advertising Guide", href: "/blog/how-programmatic-advertising-works" },
  { label: "Performance Marketing Guide", href: "/blog/what-is-performance-marketing" },
  { label: "Display Advertising Guide", href: "/blog/beginners-guide-to-display-advertising" },
  { label: "Digital Advertising Strategy", href: "/blog/how-to-build-digital-advertising-strategy" },
  { label: "CPM vs CPC vs CPA", href: "/blog/cpm-vs-cpc-vs-cpa" },
  { label: "Retargeting Guide", href: "/blog/what-is-retargeting-increase-conversions" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["ctv-advertising-guide"];

export function CtvAdvertisingBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="CTV Advertising: What It Is and Why Brands Are Investing in It"
        category="Digital Advertising"
        date="August 29, 2026"
        readTime="9 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Television advertising has changed dramatically. Consumers are increasingly watching content through internet-connected televisions, streaming devices, and digital platforms. This has created a major opportunity for advertisers: Connected TV advertising.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is" title="What Is CTV Advertising?">
            <ArticleParagraph>
              Connected TV, or CTV, refers to television content delivered through an internet-connected device, including smart televisions and connected streaming devices.
            </ArticleParagraph>
            <ArticleParagraph>
              CTV advertising allows brands to deliver video advertisements within streaming environments.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="why-different" title="Why CTV Is Different" alt>
            <ArticleParagraph>
              Traditional television advertising has historically focused on broad audiences. CTV can combine the large-screen experience of television with many digital advertising capabilities.
            </ArticleParagraph>
            <ArticleParagraph>
              Depending on the platform and campaign setup, advertisers can use audience and geographic targeting and measure campaign delivery using digital advertising metrics.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="why-brands" title="Why Brands Use CTV">
            <ArticleParagraph>
              CTV can help brands achieve brand awareness, audience reach, targeted campaigns, and cross-channel marketing objectives.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="vs-traditional" title="CTV vs. Traditional TV" alt>
            <ArticleParagraph>
              Traditional TV campaigns often rely heavily on broad programming and audience estimates. CTV provides more flexibility in audience targeting and digital measurement.
            </ArticleParagraph>
            <ArticleParagraph>
              The two approaches can also be used together as part of an integrated media strategy.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="creative" title="Video Creative">
            <ArticleParagraph>
              CTV is a video-first environment. Strong creative should establish the brand quickly, communicate one clear message, maintain viewer attention, use strong visual storytelling, and include an appropriate call to action.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="measuring" title="Measuring CTV" alt>
            <ArticleParagraph>
              Depending on the campaign, advertisers may evaluate impressions, reach, frequency, video completion rate, viewability, website visits, conversions, and brand lift.
            </ArticleParagraph>
            <ArticleParagraph>
              Measurement should reflect the campaign objective.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="customer-journey" title="CTV and the Customer Journey">
            <ArticleParagraph>
              CTV can be useful during awareness and consideration. A brand may introduce a new product through CTV, while the same audience later encounters display or social advertising. Search advertising can capture users who actively search for the brand or product.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="mistakes" title="Common Mistakes" alt>
            <ArticleParagraph>
              Mistakes include treating CTV exactly like traditional television, using weak creative, failing to establish measurement before launch, and ignoring audience overlap and frequency.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="is-right" title="Is CTV Right for Your Business?">
            <ArticleParagraph>
              CTV may be valuable for brands that want to build awareness, reach specific audiences, launch a product, support a major campaign, complement other digital channels, or reach streaming audiences.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              CTV is helping reshape television advertising by combining premium video environments with digital targeting and measurement capabilities.
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
        title="Is CTV Part of Your Media Mix?"
        body="Our team can help evaluate whether CTV fits your campaign objectives and build a media strategy that connects television, digital video, display, search, and other channels."
        ctaLabel="Evaluate CTV for Your Brand"
      />
    </>
  );
}
