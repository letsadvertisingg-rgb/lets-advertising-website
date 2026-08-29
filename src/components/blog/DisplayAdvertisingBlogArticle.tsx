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
  { id: "what-is", label: "What Is Display Advertising?" },
  { id: "why-use", label: "Why Use Display" },
  { id: "display-vs-search", label: "Display vs. Search" },
  { id: "targeting", label: "Targeting Options" },
  { id: "creative", label: "Creative" },
  { id: "retargeting", label: "Retargeting" },
  { id: "measuring", label: "Measuring Campaigns" },
  { id: "mistakes", label: "Mistakes & Improvement" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const RELATED_LINKS = [
  { label: "What Is Digital Advertising?", href: "/blog/what-is-digital-advertising-complete-guide" },
  { label: "Google Ads vs Meta Ads", href: "/blog/google-ads-vs-meta-ads" },
  { label: "Programmatic Advertising Guide", href: "/blog/how-programmatic-advertising-works" },
  { label: "Performance Marketing Guide", href: "/blog/what-is-performance-marketing" },
  { label: "CTV Advertising Guide", href: "/blog/ctv-advertising-guide" },
  { label: "Digital Advertising Strategy", href: "/blog/how-to-build-digital-advertising-strategy" },
  { label: "CPM vs CPC vs CPA", href: "/blog/cpm-vs-cpc-vs-cpa" },
  { label: "Retargeting Guide", href: "/blog/what-is-retargeting-increase-conversions" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["beginners-guide-to-display-advertising"];

export function DisplayAdvertisingBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="A Beginner's Guide to Display Advertising"
        category="Digital Advertising"
        date="August 29, 2026"
        readTime="9 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Display advertising remains one of the most versatile tools in digital marketing. From traditional banner advertisements to rich media and responsive formats, display advertising allows businesses to reach audiences across a wide range of digital environments.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is" title="What Is Display Advertising?">
            <ArticleParagraph>
              Display advertising refers to visual advertisements that appear across websites, applications, and digital platforms.
            </ArticleParagraph>
            <ArticleParagraph>
              Common formats include banner ads, responsive ads, rich media, native display, interactive advertisements, and video display formats.
            </ArticleParagraph>
            <ArticleParagraph>
              Display campaigns can support both brand awareness and performance objectives.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="why-use" title="Why Use Display Advertising?" alt>
            <ArticleParagraph>
              One major advantage is reach. Search advertising generally requires someone to actively search. Display advertising can introduce a brand while people browse content online.
            </ArticleParagraph>
            <ArticleParagraph>
              This makes display particularly useful for awareness and consideration campaigns.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="display-vs-search" title="Display vs. Search">
            <ArticleParagraph>
              Search advertising is usually driven by intent. Display advertising is often driven by audience and context.
            </ArticleParagraph>
            <ArticleParagraph>
              Someone searching for "best business insurance" has demonstrated intent. Someone reading an article about starting a business may not be searching for insurance, but they could still be a relevant prospect.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="targeting" title="Targeting Options" alt>
            <ArticleParagraph>
              Display advertising can use demographic targeting, geographic targeting, contextual targeting, behavioral signals, and retargeting.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="creative" title="The Importance of Creative">
            <ArticleParagraph>
              Display advertisements compete for attention. Effective creative generally includes clear branding, a strong headline, simple messaging, relevant imagery, and a clear call to action.
            </ArticleParagraph>
            <ArticleParagraph>
              Avoid overcrowding the advertisement with too much information.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="retargeting" title="Retargeting" alt>
            <ArticleParagraph>
              Retargeting is one of the most common applications of display advertising. Suppose someone visits an online store and views a product but leaves without purchasing. A retargeting campaign can remind that person about the product later.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Read more in our 
              <Link href="/blog/what-is-retargeting-increase-conversions" className="font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline">
                retargeting guide
              </Link>
              .
            </p>
          </ArticleSection>


          <ArticleSection id="measuring" title="Measuring Display Campaigns">
            <ArticleParagraph>
              Important metrics include impressions, reach, frequency, click-through rate, viewability, conversions, cost per conversion, and revenue.
            </ArticleParagraph>
            <ArticleParagraph>
              The right metrics depend on campaign objectives.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="mistakes" title="Common Mistakes & Improving Performance" alt>
            <ArticleParagraph>
              Common mistakes include poor creative, excessive frequency, weak targeting, poor tracking, and ignoring landing pages.
            </ArticleParagraph>
            <ArticleParagraph>
              Start with a clear objective, define the audience, develop creative specifically for that audience, launch with appropriate measurement, monitor performance, test different creative and targeting approaches, and scale what works.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              Display advertising can help businesses build awareness, reach new audiences, and reconnect with existing prospects.
            </ArticleParagraph>
            <ArticleParagraph>
              The key is to treat display as a strategic advertising channel rather than simply buying banner impressions.
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
        title="Need Help Planning a Display Campaign?"
        body="Our team can develop audience, creative, media, tracking, and optimization strategies aligned with your business goals."
        ctaLabel="Plan Your Display Strategy"
      />
    </>
  );
}
