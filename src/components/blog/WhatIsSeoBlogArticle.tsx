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
  CheckList,
} from "@/components/blog/BlogArticleParts";
import type { TocItem } from "@/components/blog/TableOfContents";
import { BLOG_FAQ_BY_SLUG } from "@/lib/blog/faq";

const INLINE_LINK =
  "font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline";

const TOC_ITEMS: TocItem[] = [
  { id: "what-is-seo", label: "What Is SEO?" },
  { id: "how-seo-works", label: "How Does SEO Work?" },
  { id: "types-of-seo", label: "Types of SEO" },
  { id: "why-need-seo", label: "Why Your Business Needs SEO" },
  { id: "benefits", label: "Benefits of SEO" },
  { id: "common-mistakes", label: "Common SEO Mistakes" },
  { id: "seo-vs-paid", label: "SEO vs. Paid Advertising" },
  { id: "lets-advertising", label: "Why Choose Let's Advertising" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const SEO_TYPES = [
  {
    id: "on-page-seo",
    title: "1. On-Page SEO",
    intro:
      "On-page SEO involves optimizing the content and structure of individual web pages.",
    body: "This includes:",
    items: [
      "Keyword research and placement",
      "Optimized page titles",
      "Meta descriptions",
      "Header tags (H1, H2, H3)",
      "Internal linking",
      "Image optimization",
      "User-friendly URLs",
      "High-quality content",
    ],
    closing:
      "Strong on-page SEO helps search engines understand your content while making it easier for visitors to find the information they need.",
    link: {
      label: "Complete On-Page SEO Checklist for 2026",
      href: "/blog/on-page-seo-checklist-2026",
    },
  },
  {
    id: "off-page-seo",
    title: "2. Off-Page SEO",
    intro:
      "Off-page SEO focuses on building your website's authority and credibility through external signals.",
    body: "Examples include:",
    items: [
      "High-quality backlinks",
      "Guest posting",
      "Brand mentions",
      "Digital PR",
      "Social media engagement",
    ],
    closing:
      "Search engines often view backlinks from reputable websites as votes of confidence, which can positively influence rankings.",
  },
  {
    id: "technical-seo",
    title: "3. Technical SEO",
    intro:
      "Technical SEO ensures that your website performs well behind the scenes and is easy for search engines to crawl and index.",
    body: "Key elements include:",
    items: [
      "Website speed optimization",
      "Mobile responsiveness",
      "XML sitemaps",
      "Robots.txt configuration",
      "Structured data (Schema Markup)",
      "Core Web Vitals optimization",
      "Fixing broken links and crawl errors",
    ],
    closing:
      "A technically sound website provides a better experience for both users and search engines.",
    link: {
      label: "Technical SEO Checklist Every Website Needs",
      href: "/blog/technical-seo-checklist-2026",
    },
  },
  {
    id: "local-seo",
    title: "4. Local SEO",
    intro:
      "If your business serves a specific city or region, Local SEO helps you appear in location-based searches.",
    body: "Examples include:",
    items: [
      '"SEO company in Delhi"',
      '"Digital marketing agency near me"',
      '"Best web development company in Delhi"',
    ],
    closing:
      "Local SEO includes optimizing your Google Business Profile, earning customer reviews, maintaining consistent business information, and creating location-specific content.",
    link: {
      label: "Local SEO Guide for Small Businesses",
      href: "/blog/local-seo-guide-small-businesses",
    },
  },
];

const WHY_SEO_REASONS = [
  {
    title: "1. Increase Organic Website Traffic",
    body: "SEO helps your website attract people who are already searching for your products or services. This means the traffic you receive is highly targeted and more likely to convert into customers.",
  },
  {
    title: "2. Build Trust and Credibility",
    body: "Most users trust businesses that appear on the first page of Google. Higher rankings create a positive impression and position your business as a trusted authority within your industry.",
  },
  {
    title: "3. Generate High-Quality Leads",
    body: "SEO targets users based on their search intent, bringing in visitors who are actively looking for solutions. These users are often much closer to making a purchase than audiences reached through traditional advertising.",
  },
  {
    title: "4. Deliver Long-Term Results",
    body: "Unlike paid advertising, where visibility ends when your budget is exhausted, SEO can continue driving traffic and leads long after content is published and optimized. Although SEO requires consistent effort, its long-term return on investment is one of its greatest strengths.",
  },
  {
    title: "5. Improve User Experience",
    body: "Modern SEO goes beyond keywords. Google rewards websites that provide fast loading speeds, mobile-friendly design, clear navigation, helpful content, secure browsing, and easy-to-read pages. These improvements benefit both your rankings and your customers.",
  },
  {
    title: "6. Stay Ahead of Your Competition",
    body: "If your competitors are investing in SEO and your business isn't, they are more likely to attract the customers searching for your services. A strong SEO strategy helps you remain visible, competitive, and relevant in an increasingly crowded digital marketplace.",
  },
];

const RELATED_LINKS = [
  {
    label: "How AI is Transforming SEO: The Future of Search in 2026",
    href: "/blog/how-ai-is-transforming-seo-2026",
  },
  {
    label: "The Ultimate SEO Guide for Beginners",
    href: "/blog/ultimate-seo-guide-for-beginners",
  },
  {
    label: "How to Increase Organic Traffic Without Paying for Ads",
    href: "/blog/how-to-increase-organic-traffic-without-ads",
  },
  {
    label: "Common SEO Mistakes That Stop Your Website from Ranking",
    href: "/blog/common-seo-mistakes-stop-ranking",
  },
  {
    label: "Local SEO Guide for Small Businesses",
    href: "/blog/local-seo-guide-small-businesses",
  },
  {
    label: "How to Find the Right Keywords for Your Business",
    href: "/blog/how-to-find-right-keywords-for-business",
  },
  {
    label: "Technical SEO Checklist Every Website Needs",
    href: "/blog/technical-seo-checklist-2026",
  },
  {
    label: "Complete On-Page SEO Checklist for 2026",
    href: "/blog/on-page-seo-checklist-2026",
  },
  {
    label: "SEO vs Google Ads: Which One Should You Choose?",
    href: "/blog/seo-vs-google-ads",
  },
  {
    label: "What Is Answer Engine Optimization (AEO)?",
    href: "/blog/what-is-answer-engine-optimization-aeo",
  },
  {
    label: "SEO vs AEO: What's the Difference?",
    href: "/blog/seo-vs-aeo-difference",
  },
  {
    label: "Will AI Replace Traditional SEO?",
    href: "/blog/will-ai-replace-traditional-seo",
  },
  {
    label: "How AI Search Is Changing Digital Marketing",
    href: "/blog/how-ai-search-is-changing-digital-marketing",
  },
  {
    label: "How to Structure Content for AI Search Engines",
    href: "/blog/how-to-structure-content-for-ai-search-engines",
  },
  {
    label: "AEO Best Practices for Local Businesses",
    href: "/blog/aeo-best-practices-for-local-businesses",
  },
  { label: "SEO Services", href: "/#services" },
  { label: "Content Marketing Services", href: "/content-marketing" },
  { label: "Paid Advertising Services", href: "/paid-advertising" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["what-is-seo-why-business-needs-it"];

export function WhatIsSeoBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="What is SEO and Why Does Your Business Need It?"
        category="SEO"
        date="July 11, 2026"
        readTime="11 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              In today&apos;s digital-first world, your customers are searching online before making
              almost every buying decision. Whether they&apos;re looking for a product, a local
              service, or expert advice, their journey often begins with a search engine like Google.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <p className="text-[length:var(--typography--text-m)] font-semibold leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                The question is: Will they find your business, or your competitors&apos;?
              </p>
            </div>
            <ArticleParagraph>
              This is where Search Engine Optimization (SEO) becomes essential.
            </ArticleParagraph>
            <ArticleParagraph>
              SEO is one of the most effective digital marketing strategies for increasing your
              website&apos;s visibility, attracting qualified visitors, and generating consistent
              business growth. Unlike paid advertising, SEO helps your website earn organic traffic
              that can continue delivering results over the long term.
            </ArticleParagraph>
            <ArticleParagraph>
              In this guide, we&apos;ll explain what SEO is, how it works, and why it should be a
              core part of your business growth strategy.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-seo" title="What is SEO?">
            <ArticleParagraph>
              Search Engine Optimization (SEO) is the process of improving your website so that it
              ranks higher on search engines like Google, Bing, and Yahoo for keywords that are
              relevant to your business.
            </ArticleParagraph>
            <ArticleParagraph>
              When people search for products or services related to your industry, SEO helps your
              website appear among the top search results, increasing the chances that users will
              visit your site instead of a competitor&apos;s.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              For example, if you own a digital marketing agency and someone searches for:
            </p>
            <BulletList
              items={[
                "SEO agency near me",
                "Best digital marketing company",
                "Website SEO services",
                "Local SEO expert",
              ]}
            />
            <ArticleParagraph>
              A well-optimized website has a much better chance of appearing in those search results.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="how-seo-works" title="How Does SEO Work?" alt>
            <ArticleParagraph>
              Search engines use automated bots, often called crawlers or spiders, to discover and
              analyze websites across the internet.
            </ArticleParagraph>
            <ArticleParagraph>
              These bots evaluate hundreds of factors before deciding where a webpage should rank.
              Their goal is simple: provide users with the most relevant, trustworthy, and helpful
              results.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Some of the most important ranking factors include:
            </p>
            <BulletList
              items={[
                "High-quality, original content",
                "Relevant keywords",
                "Fast-loading pages",
                "Mobile-friendly website design",
                "Secure HTTPS connection",
                "Easy website navigation",
                "Strong backlink profile",
                "Positive user experience",
                "Helpful and trustworthy information",
              ]}
            />
            <ArticleParagraph>
              SEO focuses on improving these elements so search engines view your website as a
              valuable resource. As search evolves with{" "}
              <Link href="/blog/future-of-ai-search-2026" className={INLINE_LINK}>
                AI-powered platforms
              </Link>
              , businesses are also adopting{" "}
              <Link
                href="/blog/what-is-answer-engine-optimization-aeo"
                className={INLINE_LINK}
              >
                Answer Engine Optimization (AEO)
              </Link>{" "}
              alongside traditional SEO.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="types-of-seo" title="The Four Main Types of SEO">
            <div className="flex flex-col gap-[var(--size--l)]">
              {SEO_TYPES.map((type) => (
                <div
                  key={type.id}
                  id={type.id}
                  className="scroll-mt-[7rem] rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]"
                >
                  <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h5)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    {type.title}
                  </h3>
                  <p className="mb-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    {type.intro}
                  </p>
                  <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                    {type.body}
                  </p>
                  <BulletList items={type.items} />
                  <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    {type.closing}
                  </p>
                  {type.link && (
                    <Link href={type.link.href} className={`mt-[var(--size--m)] inline-flex ${INLINE_LINK}`}>
                      {type.link.label} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection id="why-need-seo" title="Why Does Your Business Need SEO?" alt>
            <div className="flex flex-col gap-[var(--size--l)]">
              {WHY_SEO_REASONS.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]"
                >
                  <h3 className="mb-[var(--size--s)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    {reason.title}
                  </h3>
                  <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    {reason.body}
                  </p>
                </div>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection id="benefits" title="Benefits of SEO for Businesses">
            <ArticleParagraph>
              Investing in SEO offers several long-term advantages:
            </ArticleParagraph>
            <CheckList
              items={[
                "Increased website traffic",
                "Better search engine rankings",
                "Higher-quality leads",
                "Improved brand awareness",
                "Greater online credibility",
                "Better customer experience",
                "Higher conversion rates",
                "Lower customer acquisition costs over time",
                "Sustainable business growth",
              ]}
            />
          </ArticleSection>

          <ArticleSection id="common-mistakes" title="Common SEO Mistakes Businesses Should Avoid" alt>
            <ArticleParagraph>
              Many businesses struggle to achieve results because they overlook key SEO practices.
              Some common mistakes include:
            </ArticleParagraph>
            <BulletList
              items={[
                "Ignoring keyword research",
                "Publishing duplicate or low-quality content",
                "Neglecting mobile optimization",
                "Slow website performance",
                "Broken internal links",
                "Poor website structure",
                "Buying low-quality backlinks",
                "Not updating existing content",
                "Forgetting technical SEO",
              ]}
            />
            <ArticleParagraph>
              Avoiding these issues can significantly improve your website&apos;s performance and
              search visibility. Read our full guide on{" "}
              <Link href="/blog/common-seo-mistakes-stop-ranking" className={INLINE_LINK}>
                common SEO mistakes that stop your website from ranking
              </Link>
              , or see our guide on{" "}
              <Link
                href="/blog/common-aeo-mistakes-businesses-make"
                className={INLINE_LINK}
              >
                common AEO mistakes businesses make
              </Link>
              .
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="seo-vs-paid" title="SEO vs. Paid Advertising">
            <ArticleParagraph>
              SEO and paid advertising each play an important role in digital marketing.
            </ArticleParagraph>
            <ArticleParagraph>
              <Link href="/paid-advertising" className={INLINE_LINK}>
                Paid advertising
              </Link>{" "}
              can generate immediate traffic, making it useful for short-term campaigns and product
              launches.
            </ArticleParagraph>
            <ArticleParagraph>
              SEO, on the other hand, builds lasting visibility by helping your website rank
              organically. While results take time, they often continue long after the initial
              optimization work is complete.
            </ArticleParagraph>
            <ArticleParagraph>
              Many successful businesses use a combination of both strategies to balance immediate
              visibility with long-term growth. For a detailed comparison, read our guide on{" "}
              <Link href="/blog/seo-vs-google-ads" className={INLINE_LINK}>
                SEO vs Google Ads
              </Link>
              . To understand how SEO fits alongside newer search strategies, read our comparison of{" "}
              <Link href="/blog/seo-vs-aeo-difference" className={INLINE_LINK}>
                SEO vs AEO
              </Link>
              .
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="Why Choose Let's Advertising for SEO?" alt>
            <ArticleParagraph>
              At Let&apos;s Advertising, we help businesses improve their online visibility through
              data-driven SEO strategies tailored to their goals.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our SEO services focus on:
            </p>
            <BulletList
              items={[
                "Comprehensive website audits",
                "Keyword research and strategy",
                "On-page optimization",
                "Technical SEO improvements",
                "High-quality content optimization",
                "Local SEO",
                "Performance tracking and reporting",
                "Ethical, white-hat SEO practices",
              ]}
            />
            <ArticleParagraph>
              Our objective is not just to improve rankings but to help businesses attract qualified
              traffic, generate leads, and achieve measurable growth.
            </ArticleParagraph>
            <div className="flex flex-wrap gap-[var(--size--m)]">
              <Link
                href="/#services"
                className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
              >
                Explore SEO services →
              </Link>
              <Link
                href="/content-marketing"
                className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
              >
                Explore content marketing →
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
              SEO is no longer optional. It&apos;s an essential part of building a successful online
              presence. As more customers rely on search engines to discover products and services,
              businesses that invest in SEO are better positioned to reach their audience, earn trust,
              and grow sustainably.
            </ArticleParagraph>
            <ArticleParagraph>
              Whether you&apos;re a startup looking to build visibility or an established company
              aiming to increase organic traffic, a well-planned SEO strategy can deliver long-term
              value. As{" "}
              <Link href="/blog/how-ai-search-is-changing-digital-marketing" className={INLINE_LINK}>
                AI search reshapes digital marketing
              </Link>{" "}
              and{" "}
              <Link href="/blog/how-ai-is-transforming-seo-2026" className={INLINE_LINK}>
                AI is transforming SEO
              </Link>
              , combining SEO with modern strategies like AEO ensures your business stays visible
              across every search experience.
            </ArticleParagraph>
            <ArticleParagraph>
              If you&apos;re ready to strengthen your search presence, the team at Let&apos;s
              Advertising can help you create an SEO strategy tailored to your business objectives.
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
        title="Ready to Grow Your Organic Traffic?"
        body="SEO is one of the most powerful ways to attract qualified customers and build long-term visibility. At Let's Advertising, we create data-driven SEO strategies tailored to your business goals."
        subtext="Contact us today for a free SEO consultation and discover how your business can rank higher, generate more leads, and grow sustainably."
        ctaLabel="Get a Free SEO Consultation"
      />
    </>
  );
}
