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
  { id: "what-is", label: "What Is Retargeting?" },
  { id: "why-works", label: "Why It Works" },
  { id: "example", label: "Example" },
  { id: "audiences", label: "Common Audiences" },
  { id: "segmentation", label: "Segmentation" },
  { id: "creative", label: "Creative" },
  { id: "frequency", label: "Frequency Management" },
  { id: "across-channels", label: "Across Channels" },
  { id: "privacy", label: "Privacy" },
  { id: "measuring", label: "Measuring" },
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

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["what-is-retargeting-increase-conversions"];

export function RetargetingGuideBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="What Is Retargeting and How Can It Increase Conversions?"
        category="Digital Advertising"
        date="August 29, 2026"
        readTime="10 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Not every website visitor becomes a customer on their first visit. Someone might browse a product, compare options, leave the website, and return days later.
            </ArticleParagraph>
            <ArticleParagraph>
              Retargeting helps businesses reconnect with people who have previously interacted with their brand.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is" title="What Is Retargeting?">
            <ArticleParagraph>
              Retargeting is an advertising strategy used to reach people who have previously interacted with a business's website, application, advertisements, or other digital properties.
            </ArticleParagraph>
            <ArticleParagraph>
              The objective is to encourage them to return and complete a desired action.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="why-works" title="Why Retargeting Works" alt>
            <ArticleParagraph>
              Retargeting audiences have already demonstrated interest. They may have visited your website, viewed a product, started a form, added something to a cart, watched a video, or engaged with an advertisement.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="example" title="Example">
            <ArticleParagraph>
              Imagine someone visits an online store and looks at a pair of shoes. They leave without purchasing. Later, they see an advertisement featuring the same product.
            </ArticleParagraph>
            <ArticleParagraph>
              That advertisement reminds them about the product and may encourage them to return.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="audiences" title="Common Audiences" alt>
            <ArticleParagraph>
              Businesses can create audience segments for website visitors, product viewers, cart abandoners, video viewers, and customer audiences.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="segmentation" title="Why Segmentation Matters">
            <ArticleParagraph>
              Not every visitor should receive the same advertisement. Someone who visited the homepage may require a general brand message. Someone who viewed a specific product may respond better to product-focused messaging.
            </ArticleParagraph>
            <ArticleParagraph>
              Segmentation makes retargeting more relevant.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="creative" title="Retargeting Creative" alt>
            <ArticleParagraph>
              Creative can include product reminders, customer testimonials, product benefits, educational content, special offers, and new product announcements.
            </ArticleParagraph>
            <ArticleParagraph>
              Avoid showing the same advertisement repeatedly.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="frequency" title="Frequency Management">
            <ArticleParagraph>
              Too much retargeting can become annoying. Frequency controls can help prevent audiences from seeing advertisements excessively.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="across-channels" title="Retargeting Across Channels" alt>
            <ArticleParagraph>
              A user may visit your website, later see a display advertisement, then see a social advertisement, and eventually search for your brand. A coordinated approach can create a connected experience.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="privacy" title="Privacy and Responsible Advertising">
            <ArticleParagraph>
              Modern advertising requires careful consideration of privacy, consent, platform policies, and applicable regulations. Businesses should ensure tracking and audience strategies are implemented appropriately.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="measuring" title="Measuring Retargeting" alt>
            <ArticleParagraph>
              Key metrics may include conversion rate, CPA, revenue, ROAS, click-through rate, and frequency.
            </ArticleParagraph>
            <ArticleParagraph>
              Retargeting should be evaluated against incremental business value rather than assuming every conversion was caused by the advertisement.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              Retargeting can help businesses reconnect with valuable prospects who are not ready to convert immediately.
            </ArticleParagraph>
            <ArticleParagraph>
              When combined with thoughtful segmentation, relevant creative, appropriate frequency, and accurate measurement, retargeting can become an important part of a broader advertising strategy.
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
        title="Want to Turn More Visitors Into Customers?"
        body="Our team can build a retargeting strategy designed around your customer journey and conversion goals."
        ctaLabel="Build a Retargeting Strategy"
      />
    </>
  );
}
