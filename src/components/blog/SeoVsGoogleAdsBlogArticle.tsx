"use client";

import Link from "next/link";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";
import {
  ArticleFaq,
  ArticleParagraph,
  ArticleSection,
  BlogArticleCta,
  BlogArticleHero,
  BulletList,
} from "@/components/blog/BlogArticleParts";
import type { TocItem } from "@/components/blog/TableOfContents";
import { BLOG_FAQ_BY_SLUG } from "@/lib/blog/faq";

const INLINE_LINK =
  "font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline";

const TOC_ITEMS: TocItem[] = [
  { id: "what-is-seo", label: "What is SEO?" },
  { id: "what-is-google-ads", label: "What is Google Ads?" },
  { id: "key-differences", label: "Key Differences" },
  { id: "advantages-seo", label: "Advantages of SEO" },
  { id: "advantages-google-ads", label: "Advantages of Google Ads" },
  { id: "when-choose-seo", label: "When to Choose SEO" },
  { id: "when-choose-google-ads", label: "When to Choose Google Ads" },
  { id: "which-to-choose", label: "Which Should You Choose?" },
  { id: "common-misconceptions", label: "Common Misconceptions" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const COMPARISON_ROWS = [
  ["Cost", "Organic traffic (ongoing optimization investment)", "Pay for every click"],
  ["Results", "Takes time (typically several months)", "Immediate visibility"],
  ["Traffic", "Organic", "Paid"],
  ["Duration", "Long-term", "Stops when ad budget ends"],
  ["Trust", "Higher user trust", 'Marked as "Sponsored"'],
  ["ROI", "Strong long-term ROI", "Strong short-term ROI"],
  ["Click-Through Rate", "Often higher for organic results", "Depends on ad quality and competition"],
  ["Sustainability", "High", "Budget-dependent"],
];

const SEO_ADVANTAGES = [
  {
    title: "1. Long-Term Growth",
    body: "One of SEO's greatest strengths is its ability to deliver consistent traffic over time. Once your pages rank well, they can continue attracting visitors without paying for every click.",
  },
  {
    title: "2. Higher Credibility",
    body: "Many users trust organic search results more than paid advertisements because they are earned through relevance and quality rather than advertising spend. Strong rankings can also enhance your brand's reputation.",
  },
  {
    title: "3. Better Return on Investment",
    body: "Although SEO requires ongoing effort, the long-term cost per lead is often lower than paid advertising. Businesses that invest in quality SEO frequently benefit from sustained traffic and reduced acquisition costs over time.",
  },
  {
    title: "4. Increased Brand Awareness",
    body: "Even if users don't click your website immediately, appearing consistently in search results builds familiarity and trust with your brand.",
  },
];

const GOOGLE_ADS_ADVANTAGES = [
  {
    title: "1. Instant Visibility",
    intro: "Google Ads allows your business to appear at the top of search results almost immediately after your campaign launches.",
    body: "This makes it especially useful for:",
    items: ["New businesses", "Product launches", "Seasonal promotions", "Limited-time offers"],
  },
  {
    title: "2. Highly Targeted Advertising",
    intro: "Google Ads gives you precise control over who sees your ads. You can target users by:",
    items: ["Keywords", "Location", "Language", "Device", "Time of day", "Audience interests"],
    closing: "This level of targeting helps maximize campaign effectiveness.",
  },
  {
    title: "3. Fast Lead Generation",
    body: "Because your ads are shown to users actively searching for related products or services, Google Ads can generate leads quickly. For businesses needing immediate enquiries or sales, this can be a significant advantage.",
  },
  {
    title: "4. Measurable Performance",
    intro: "Google Ads provides detailed reporting on:",
    items: [
      "Clicks",
      "Impressions",
      "Cost per click (CPC)",
      "Conversion rate",
      "Cost per conversion",
      "Return on ad spend (ROAS)",
    ],
    closing: "These insights make it easier to refine campaigns and optimize your marketing budget.",
  },
];

const MISCONCEPTIONS = [
  {
    title: '"SEO is Free"',
    body: "While organic clicks don't incur a per-click cost, effective SEO requires investment in strategy, content creation, technical improvements, and ongoing optimization.",
  },
  {
    title: '"Google Ads Guarantees Sales"',
    body: "Google Ads can increase traffic, but success depends on factors such as targeting, ad quality, landing page experience, pricing, and the value of your offer.",
  },
  {
    title: '"SEO Takes Too Long"',
    body: "SEO is a long-term strategy, but businesses often begin seeing meaningful improvements within a few months when optimization is consistent and aligned with search intent.",
  },
];

const RELATED_LINKS = [
  {
    label: "How to Increase Organic Traffic Without Paying for Ads",
    href: "/blog/how-to-increase-organic-traffic-without-ads",
  },
  {
    label: "Complete On-Page SEO Checklist for 2026",
    href: "/blog/on-page-seo-checklist-2026",
  },
  {
    label: "What is SEO and Why Does Your Business Need It?",
    href: "/blog/what-is-seo-why-business-needs-it",
  },
  {
    label: "SEO vs AEO: What's the Difference?",
    href: "/blog/seo-vs-aeo-difference",
  },
  {
    label: "How AI Search Is Changing Digital Marketing",
    href: "/blog/how-ai-search-is-changing-digital-marketing",
  },
  { label: "Paid Advertising Services", href: "/paid-advertising" },
  { label: "SEO Services", href: "/#services" },
  { label: "Content Marketing Services", href: "/content-marketing" },
  { label: "Analytics & Tracking", href: "/analytics-tracking" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["seo-vs-google-ads"];

export function SeoVsGoogleAdsBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="SEO vs Google Ads: Which One Should You Choose?"
        category="SEO"
        date="July 11, 2026"
        readTime="12 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              When businesses decide to invest in digital marketing, one of the first questions they
              ask is:
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <p className="text-[length:var(--typography--text-m)] font-semibold leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                Should we focus on SEO or Google Ads?
              </p>
            </div>
            <ArticleParagraph>
              Both strategies can help you attract customers, increase website traffic, and generate
              leads, but they work in very different ways.
            </ArticleParagraph>
            <ArticleParagraph>
              Google Ads can put your business at the top of search results almost instantly, while
              SEO builds long-term visibility by improving your website&apos;s organic rankings.
              Choosing the right approach depends on your goals, budget, competition, and timeline.
            </ArticleParagraph>
            <ArticleParagraph>
              In this guide, we&apos;ll compare SEO and Google Ads, explain their advantages and
              limitations, and help you decide which strategy is best for your business.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-seo" title="What is SEO?">
            <ArticleParagraph>
              Search Engine Optimization (SEO) is the process of improving your website so it ranks
              higher in the organic (non-paid) results on search engines like Google.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              SEO involves optimizing:
            </p>
            <BulletList
              items={[
                "Website content",
                "Keywords",
                "Page speed",
                "Technical performance",
                "Mobile usability",
                "Internal linking",
                "Backlinks",
                "User experience",
              ]}
            />
            <ArticleParagraph>
              The goal is to earn free, consistent traffic from people actively searching for your
              products or services.
            </ArticleParagraph>
            <ArticleParagraph>
              Although SEO takes time, it creates long-term value and sustainable growth. For a
              deeper overview, read our guide on{" "}
              <Link href="/blog/what-is-seo-why-business-needs-it" className={INLINE_LINK}>
                what SEO is and why your business needs it
              </Link>
              .
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="what-is-google-ads" title="What is Google Ads?" alt>
            <ArticleParagraph>
              Google Ads is Google&apos;s online advertising platform that allows businesses to
              display paid advertisements on search results and across Google&apos;s network.
            </ArticleParagraph>
            <ArticleParagraph>
              With Google Ads, you bid on keywords related to your business. When users search for
              those keywords, your advertisement can appear at the top of the search results.
            </ArticleParagraph>
            <ArticleParagraph>
              You pay only when someone clicks on your ad. This is known as Pay-Per-Click (PPC)
              advertising.
            </ArticleParagraph>
            <ArticleParagraph>
              Google Ads is ideal for businesses looking for immediate visibility and quick lead
              generation. Learn more about our{" "}
              <Link href="/paid-advertising" className={INLINE_LINK}>
                paid advertising services
              </Link>
              .
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="key-differences" title="SEO vs Google Ads: Key Differences">
            <div className="overflow-x-auto rounded-[var(--radius--radius-xxl)] border border-[var(--border)]">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--neutral--neutral-grey-200)]">
                    <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.06em]">
                      Feature
                    </th>
                    <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold">
                      SEO
                    </th>
                    <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold">
                      Google Ads
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map(([feature, seo, googleAds]) => (
                    <tr key={feature} className="bg-white even:bg-[var(--neutral--neutral-grey-200)]">
                      <td className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-s)] font-semibold text-[var(--brand--brand-charcoal)]">
                        {feature}
                      </td>
                      <td className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                        {seo}
                      </td>
                      <td className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                        {googleAds}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ArticleSection>

          <ArticleSection id="advantages-seo" title="Advantages of SEO" alt>
            <div className="flex flex-col gap-[var(--size--l)]">
              {SEO_ADVANTAGES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]"
                >
                  <h3 className="mb-[var(--size--s)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection id="advantages-google-ads" title="Advantages of Google Ads">
            <div className="flex flex-col gap-[var(--size--l)]">
              {GOOGLE_ADS_ADVANTAGES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]"
                >
                  <h3 className="mb-[var(--size--s)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  {item.intro && (
                    <p className="mb-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                      {item.intro}
                    </p>
                  )}
                  {item.body && !item.items && (
                    <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                      {item.body}
                    </p>
                  )}
                  {item.body && item.items && (
                    <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                      {item.body}
                    </p>
                  )}
                  {item.items && <BulletList items={item.items} />}
                  {item.closing && (
                    <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                      {item.closing}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection id="when-choose-seo" title="When Should You Choose SEO?" alt>
            <ArticleParagraph>SEO is a strong choice if you:</ArticleParagraph>
            <BulletList
              items={[
                "Want long-term business growth",
                "Prefer sustainable organic traffic",
                "Have time to build online authority",
                "Want to reduce dependence on paid advertising",
                "Regularly publish valuable content",
                "Aim to establish trust in your industry",
              ]}
            />
            <ArticleParagraph>
              SEO is especially beneficial for businesses looking to create a lasting online presence.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="when-choose-google-ads" title="When Should You Choose Google Ads?">
            <ArticleParagraph>Google Ads may be the better option if you:</ArticleParagraph>
            <BulletList
              items={[
                "Need immediate leads or sales",
                "Are launching a new product or service",
                "Have a limited promotional window",
                "Want to test new markets or keywords",
                "Operate in a highly competitive industry",
                "Have a dedicated advertising budget",
              ]}
            />
            <ArticleParagraph>
              Google Ads is often the fastest way to reach potential customers.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="which-to-choose" title="Should You Choose SEO or Google Ads?" alt>
            <ArticleParagraph>The answer depends on your business objectives.</ArticleParagraph>
            <div className="grid grid-cols-1 gap-[var(--size--l)] md:grid-cols-2">
              <div className="rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--xl)] border border-[var(--border)]">
                <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] text-[var(--brand--brand-electric-blue)]">
                  Choose SEO if:
                </h3>
                <BulletList
                  items={[
                    "Your focus is long-term growth.",
                    "You want to build authority in your industry.",
                    "You want consistent traffic without paying for every click.",
                  ]}
                />
              </div>
              <div className="rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--xl)] border border-[var(--border)]">
                <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] text-[var(--brand--brand-electric-blue)]">
                  Choose Google Ads if:
                </h3>
                <BulletList
                  items={[
                    "You need results quickly.",
                    "You're running time-sensitive campaigns.",
                    "You're introducing a new business or product.",
                  ]}
                />
              </div>
            </div>
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--brand--brand-electric-blue)] p-[var(--size--2xl)]">
              <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] text-white">
                Choose Both if:
              </h3>
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-white/90">
                For many businesses, combining SEO and Google Ads delivers the best results. SEO
                builds a strong foundation for long-term organic growth, while Google Ads provides
                immediate visibility and helps generate leads as your SEO strategy gains momentum.
              </p>
              <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-white/90">
                Together, they create a balanced digital marketing approach that supports both
                short-term and long-term goals.
              </p>
            </div>
          </ArticleSection>

          <ArticleSection id="common-misconceptions" title="Common Misconceptions">
            <div className="flex flex-col gap-[var(--size--l)]">
              {MISCONCEPTIONS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]"
                >
                  <h3 className="mb-[var(--size--s)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] text-[var(--brand--brand-electric-blue)]">
                    {item.title}
                  </h3>
                  <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="How Let's Advertising Can Help" alt>
            <ArticleParagraph>
              At Let&apos;s Advertising, we help businesses choose and implement the digital
              marketing strategies that best align with their goals.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our services include:
            </p>
            <BulletList
              items={[
                "Search Engine Optimization (SEO)",
                "Google Ads campaign management",
                "Keyword research",
                "Technical SEO",
                "Landing page optimization",
                "Local SEO",
                "Content strategy",
                "Performance tracking and reporting",
              ]}
            />
            <ArticleParagraph>
              Whether you&apos;re looking to build long-term organic visibility, generate immediate
              leads through paid campaigns, or combine both approaches, our team develops data-driven
              strategies tailored to your business.
            </ArticleParagraph>
            <div className="flex flex-wrap gap-[var(--size--m)]">
              <Link
                href="/#services"
                className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
              >
                Explore SEO services →
              </Link>
              <Link
                href="/paid-advertising"
                className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
              >
                Explore Google Ads services →
              </Link>
            </div>
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

          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              SEO and Google Ads are not competing strategies. They&apos;re complementary tools that
              serve different purposes.
            </ArticleParagraph>
            <ArticleParagraph>
              SEO is ideal for businesses seeking sustainable growth, improved search visibility, and
              long-term return on investment. Google Ads is well suited for organizations that need
              immediate exposure, rapid lead generation, or support for short-term campaigns.
            </ArticleParagraph>
            <ArticleParagraph>
              The most effective digital marketing strategies often combine both. Google Ads can
              deliver quick wins while SEO builds lasting authority and consistent organic traffic.
            </ArticleParagraph>
            <ArticleParagraph>
              If you&apos;re unsure which approach is right for your business, Let&apos;s Advertising
              can help you evaluate your goals, audience, and budget to create a strategy that drives
              measurable results today and supports growth for the future.
            </ArticleParagraph>
          </ArticleSection>

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
        title="Not Sure Whether to Choose SEO or Google Ads?"
        body="Every business is different. At Let's Advertising, we help you evaluate your goals, budget, and timeline to build a digital marketing strategy that delivers both immediate results and long-term growth."
        subtext="Contact us today for a free consultation and discover whether SEO, Google Ads, or a combined approach is right for your business."
        ctaLabel="Get a Free Marketing Consultation"
      />
    </>
  );
}
