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
  { id: "when-google", label: "When Google Ads Makes Sense" },
  { id: "when-meta", label: "When Meta Makes Sense" },
  { id: "intent-vs-discovery", label: "Intent vs. Discovery" },
  { id: "targeting-creative", label: "Targeting and Creative" },
  { id: "use-both", label: "Should You Use Both?" },
  { id: "retargeting", label: "Retargeting" },
  { id: "how-to-choose", label: "How to Choose" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const RELATED_LINKS = [
  { label: "What Is Digital Advertising?", href: "/blog/what-is-digital-advertising-complete-guide" },
  { label: "Programmatic Advertising Guide", href: "/blog/how-programmatic-advertising-works" },
  { label: "Performance Marketing Guide", href: "/blog/what-is-performance-marketing" },
  { label: "Display Advertising Guide", href: "/blog/beginners-guide-to-display-advertising" },
  { label: "CTV Advertising Guide", href: "/blog/ctv-advertising-guide" },
  { label: "Digital Advertising Strategy", href: "/blog/how-to-build-digital-advertising-strategy" },
  { label: "CPM vs CPC vs CPA", href: "/blog/cpm-vs-cpc-vs-cpa" },
  { label: "Retargeting Guide", href: "/blog/what-is-retargeting-increase-conversions" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["google-ads-vs-meta-ads"];

export function GoogleAdsVsMetaAdsBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="Google Ads vs. Meta Ads: Which Advertising Platform Is Right for Your Business?"
        category="Digital Advertising"
        date="August 29, 2026"
        readTime="10 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Choosing the right advertising platform can have a significant impact on campaign performance. Two of the most widely used platforms are Google Ads and Meta advertising. Both can generate valuable results, but they work differently and are suited to different marketing objectives.
            </ArticleParagraph>
            <ArticleParagraph>
              The biggest difference is user intent. Google Ads primarily reaches people who are actively searching for something. Meta advertising is generally focused on reaching people based on their characteristics, interests, behaviors, and interactions.
            </ArticleParagraph>
          </div>

          <ArticleSection id="when-google" title="When Google Ads Makes Sense">
            <ArticleParagraph>
              Google Ads can be particularly effective when customers actively search for products or services. Examples include legal services, insurance, home improvement, professional services, software, travel, automotive services, and other high-intent categories.
            </ArticleParagraph>
            <ArticleParagraph>
              Search advertising captures existing demand. If someone searches for a product or service related to your business, appearing at that moment can put your company directly in front of a potential customer.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="when-meta" title="When Meta Advertising Makes Sense" alt>
            <ArticleParagraph>
              Meta advertising can be particularly effective for products and services that benefit from visual storytelling, audience discovery, and brand building. Examples include fashion, beauty, food, consumer products, fitness, lifestyle brands, e-commerce, and mobile applications.
            </ArticleParagraph>
            <ArticleParagraph>
              Meta can introduce products to people who may not yet know the brand.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="intent-vs-discovery" title="Intent vs. Discovery">
            <ArticleParagraph>
              Google can help businesses capture demand, while Meta can help businesses create and stimulate demand.
            </ArticleParagraph>
            <ArticleParagraph>
              Someone searching for "running shoes" has already demonstrated interest. Someone watching an Instagram video may discover a new running shoe brand and become interested after seeing an engaging advertisement.
            </ArticleParagraph>
            <ArticleParagraph>
              Neither approach is universally better. The right choice depends on the business.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="targeting-creative" title="Targeting and Creative" alt>
            <ArticleParagraph>
              Google targeting can include keywords, search intent, locations, audiences, demographics, and remarketing. Meta targeting can include demographics, interests, behaviors, customer lists, website activity, engagement, and similar audience signals.
            </ArticleParagraph>
            <ArticleParagraph>
              Google Search campaigns often rely heavily on written messaging, while Meta advertising tends to place greater emphasis on visual creative such as short videos, product photography, carousels, testimonials, and user-generated content.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="use-both" title="Should You Use Both?">
            <ArticleParagraph>
              In many cases, yes. Google and Meta can complement one another.
            </ArticleParagraph>
            <ArticleParagraph>
              Meta can introduce a product to potential customers. Those customers may later search Google for the brand. Google can then capture that demand.
            </ArticleParagraph>
            <ArticleParagraph>
              Similarly, someone who visits a website through Google can later be retargeted through social advertising.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="retargeting" title="The Importance of Retargeting" alt>
            <ArticleParagraph>
              Retargeting allows advertisers to reconnect with people who have previously interacted with their brand. A visitor may browse a website without purchasing. Retargeting can remind that visitor about the product later through a product reminder, special offer, customer review, or educational message.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Explore our 
              <Link href="/blog/what-is-retargeting-increase-conversions" className="font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline">
                complete retargeting guide
              </Link>
              .
            </p>
          </ArticleSection>


          <ArticleSection id="how-to-choose" title="How to Choose">
            <ArticleParagraph>
              Ask how customers discover the product, whether they actively search for it, whether it requires education, whether it is visually appealing, how long the buying cycle is, and what the customer needs before purchasing.
            </ArticleParagraph>
          </ArticleSection>


          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              Google Ads and Meta advertising can work together as part of a broader advertising strategy. Google can capture active demand, while Meta can help create awareness and influence future demand.
            </ArticleParagraph>
            <ArticleParagraph>
              The best strategy depends on audience, objectives, budget, creative assets, and customer journey.
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
        title="Need Help Deciding Where to Invest?"
        body="Our advertising specialists can evaluate your goals and recommend a channel strategy built around measurable business outcomes."
        ctaLabel="Get a Free Channel Strategy Review"
      />
    </>
  );
}
