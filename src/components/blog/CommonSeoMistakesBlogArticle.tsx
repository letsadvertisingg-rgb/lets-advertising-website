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
  { id: "why-mistakes-matter", label: "Why SEO Mistakes Matter" },
  { id: "mistakes", label: "15 Common Mistakes" },
  { id: "health-checklist", label: "Quick SEO Health Checklist" },
  { id: "regular-audits", label: "Why Regular Audits Matter" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const SEO_MISTAKES = [
  {
    id: "ignoring-keyword-research",
    num: "1",
    title: "Ignoring Keyword Research",
    problem:
      "One of the biggest SEO mistakes is creating content without understanding what your audience is searching for. Many businesses write about topics they find interesting instead of answering the questions potential customers are asking.",
    fixIntro: "How to Fix It",
    fixItems: [
      "Research keywords before creating content.",
      "Focus on topics relevant to your business.",
      "Target keywords with clear search intent.",
      "Include long-tail keywords where appropriate.",
    ],
    closing: "Effective keyword research helps ensure your content matches real user searches.",
    link: {
      label: "How to Find the Right Keywords for Your Business",
      href: "/blog/how-to-find-right-keywords-for-business",
    },
  },
  {
    id: "wrong-keywords",
    num: "2",
    title: "Targeting the Wrong Keywords",
    problem:
      "Choosing keywords solely because they have high search volume can be a costly mistake. Highly competitive keywords may be difficult to rank for, while broad keywords often attract visitors who aren't looking for your services.",
    fixIntro: "How to Fix It",
    fixBody: "Focus on keywords that are:",
    fixItems: [
      "Relevant to your business",
      "Aligned with user intent",
      "Realistic for your website's authority",
      "Valuable for generating leads",
    ],
  },
  {
    id: "thin-content",
    num: "3",
    title: "Publishing Thin or Low-Quality Content",
    problem:
      "Search engines prioritize content that is helpful, informative, and original. Short pages with little value or duplicated information are less likely to perform well.",
    fixIntro: "How to Fix It",
    fixBody: "Create content that:",
    fixItems: [
      "Answers users' questions thoroughly",
      "Provides practical insights",
      "Uses clear headings",
      "Includes examples where relevant",
      "Is updated regularly",
    ],
    closing: "Quality should always take priority over quantity.",
    link: { label: "Content Marketing Services", href: "/content-marketing" },
  },
  {
    id: "keyword-stuffing",
    num: "4",
    title: "Keyword Stuffing",
    problem:
      "Repeating the same keyword excessively makes content difficult to read and can negatively affect user experience. Modern search engines understand related terms and context, so excessive repetition is unnecessary.",
    fixIntro: "How to Fix It",
    fixItems: [
      "Use keywords naturally.",
      "Include related phrases and synonyms.",
      "Write primarily for readers, not search engines.",
    ],
  },
  {
    id: "title-tags",
    num: "5",
    title: "Poor Title Tags and Meta Descriptions",
    problem:
      "Your title tag is one of the first things users see in search results. Generic or missing titles can reduce click-through rates.",
    fixIntro: "How to Fix It",
    fixBody: "Every page should include:",
    fixItems: [
      "A unique title tag",
      "A compelling meta description",
      "Relevant keywords used naturally",
      "Clear messaging about the page's purpose",
    ],
    link: { label: "On-Page SEO Checklist", href: "/blog/on-page-seo-checklist-2026" },
  },
  {
    id: "heading-structure",
    num: "6",
    title: "Missing Heading Structure",
    problem:
      "A page without a logical heading hierarchy is harder for users and search engines to understand.",
    fixIntro: "How to Fix It",
    fixBody: "Use:",
    fixItems: [
      "One H1 heading",
      "Descriptive H2 headings",
      "Supporting H3 headings where needed",
    ],
    closing: "A clear structure improves readability and organization.",
  },
  {
    id: "slow-speed",
    num: "7",
    title: "Slow Website Speed",
    problem:
      "Visitors expect websites to load quickly. Slow pages can lead to higher bounce rates and lower engagement.",
    fixIntro: "How to Fix It",
    fixBody: "Improve performance by:",
    fixItems: [
      "Compressing images",
      "Reducing unnecessary scripts",
      "Using browser caching",
      "Optimizing code",
      "Choosing reliable hosting",
    ],
    closing: "A faster website creates a better user experience.",
    link: { label: "Technical SEO Checklist", href: "/blog/technical-seo-checklist-2026" },
  },
  {
    id: "mobile-experience",
    num: "8",
    title: "Poor Mobile Experience",
    problem:
      "Most searches now happen on mobile devices. If your website is difficult to use on smaller screens, visitors may leave quickly.",
    fixIntro: "How to Fix It",
    fixBody: "Ensure your website:",
    fixItems: [
      "Uses responsive design",
      "Has readable text",
      "Includes touch-friendly buttons",
      "Loads efficiently on mobile devices",
    ],
  },
  {
    id: "broken-links",
    num: "9",
    title: "Broken Links",
    problem:
      "Broken internal or external links frustrate users and make it harder for search engines to crawl your website.",
    fixIntro: "How to Fix It",
    fixBody: "Regularly check for:",
    fixItems: [
      "Broken pages (404 errors)",
      "Incorrect internal links",
      "Outdated external links",
    ],
    closing: "Repair or remove broken links as needed.",
  },
  {
    id: "internal-linking",
    num: "10",
    title: "Weak Internal Linking",
    problem:
      "Internal links help search engines understand the relationship between your pages. Without them, valuable content may remain difficult to discover.",
    fixIntro: "How to Fix It",
    fixBody: "Link naturally between related:",
    fixItems: ["Blog posts", "Service pages", "Case studies", "Contact pages"],
    closing: 'Use descriptive anchor text rather than generic phrases like "click here."',
    hasInternalLinks: true,
  },
  {
    id: "technical-seo",
    num: "11",
    title: "Ignoring Technical SEO",
    problem:
      "Even excellent content may struggle if technical issues prevent search engines from crawling or indexing your website.",
    fixIntro: "How to Fix It",
    fixBody: "Regularly review:",
    fixItems: [
      "XML sitemap",
      "Robots.txt",
      "Crawl errors",
      "HTTPS security",
      "Structured data",
      "Core Web Vitals",
    ],
    closing: "A technically healthy website supports stronger search performance.",
    link: { label: "Technical SEO Checklist", href: "/blog/technical-seo-checklist-2026" },
  },
  {
    id: "duplicate-content",
    num: "12",
    title: "Duplicate Content",
    problem:
      "Publishing identical or very similar content across multiple pages can confuse search engines.",
    fixIntro: "How to Fix It",
    fixItems: [
      "Create unique content.",
      "Use canonical tags where appropriate.",
      "Consolidate overlapping pages.",
    ],
    closing: "Each page should provide distinct value.",
  },
  {
    id: "image-optimization",
    num: "13",
    title: "Not Optimizing Images",
    problem:
      "Large image files can slow your website, while missing alt text reduces accessibility.",
    fixIntro: "How to Fix It",
    fixItems: [
      "Compress images.",
      "Use descriptive filenames.",
      "Add relevant alt text.",
      "Choose modern image formats when possible.",
    ],
    link: { label: "On-Page SEO Checklist", href: "/blog/on-page-seo-checklist-2026" },
  },
  {
    id: "ignoring-local-seo",
    num: "14",
    title: "Ignoring Local SEO",
    problem:
      "Businesses serving specific cities or regions often overlook local optimization. This can reduce visibility for nearby customers.",
    fixIntro: "How to Fix It",
    fixItems: [
      "Optimize your Google Business Profile.",
      "Target location-specific keywords.",
      "Collect customer reviews.",
      "Maintain consistent business information across online directories.",
    ],
    link: { label: "Local SEO Guide for Small Businesses", href: "/blog/local-seo-guide-small-businesses" },
  },
  {
    id: "immediate-results",
    num: "15",
    title: "Expecting Immediate Results",
    problem:
      "SEO is a long-term investment. Unlike paid advertising, rankings typically improve gradually as search engines evaluate your content and website quality.",
    fixIntro: "How to Fix It",
    fixItems: [
      "Publish consistently.",
      "Monitor performance.",
      "Update existing content.",
      "Continue improving your website over time.",
    ],
    closing: "Patience and consistency are key to long-term SEO success.",
    link: { label: "SEO vs Google Ads", href: "/blog/seo-vs-google-ads" },
  },
];

const HEALTH_CHECKLIST = [
  "Conduct keyword research",
  "Write unique, helpful content",
  "Optimize title tags and meta descriptions",
  "Use a clear heading structure",
  "Improve page speed",
  "Ensure mobile responsiveness",
  "Add internal links",
  "Optimize images",
  "Fix broken links",
  "Maintain technical SEO",
  "Target local keywords when relevant",
  "Monitor website performance",
];

const INTERNAL_LINK_ITEMS = [
  { label: "What is SEO?", href: "/blog/what-is-seo-why-business-needs-it" },
  { label: "Keyword Research Guide", href: "/blog/how-to-find-right-keywords-for-business" },
  { label: "On-Page SEO Checklist", href: "/blog/on-page-seo-checklist-2026" },
  { label: "Technical SEO Checklist", href: "/blog/technical-seo-checklist-2026" },
  { label: "Local SEO Guide", href: "/blog/local-seo-guide-small-businesses" },
  { label: "SEO Services", href: "/#services" },
];

const RELATED_LINKS = [
  {
    label: "What is SEO and Why Does Your Business Need It?",
    href: "/blog/what-is-seo-why-business-needs-it",
  },
  {
    label: "How to Find the Right Keywords for Your Business",
    href: "/blog/how-to-find-right-keywords-for-business",
  },
  {
    label: "Complete On-Page SEO Checklist for 2026",
    href: "/blog/on-page-seo-checklist-2026",
  },
  {
    label: "Technical SEO Checklist Every Website Needs",
    href: "/blog/technical-seo-checklist-2026",
  },
  {
    label: "Local SEO Guide for Small Businesses",
    href: "/blog/local-seo-guide-small-businesses",
  },
  {
    label: "Common AEO Mistakes Businesses Make",
    href: "/blog/common-aeo-mistakes-businesses-make",
  },
  { label: "SEO Services", href: "/#services" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["common-seo-mistakes-stop-ranking"];

export function CommonSeoMistakesBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="Common SEO Mistakes That Stop Your Website from Ranking"
        category="SEO"
        date="July 11, 2026"
        readTime="15 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              You&apos;ve launched a professional website, published quality content, and invested
              time into your online presence, but your website still isn&apos;t ranking on Google.
            </ArticleParagraph>
            <ArticleParagraph>This is a challenge many businesses face.</ArticleParagraph>
            <ArticleParagraph>
              Search engine optimization (SEO) is about much more than adding a few keywords to a
              page. Google&apos;s ranking systems evaluate hundreds of signals, including content
              quality, user experience, technical performance, and website authority.
            </ArticleParagraph>
            <ArticleParagraph>
              Even small SEO mistakes can limit your visibility and reduce your chances of reaching
              potential customers.
            </ArticleParagraph>
            <ArticleParagraph>
              In this guide, we&apos;ll explore the most common SEO mistakes that prevent websites
              from ranking, and, more importantly, how to fix them.
            </ArticleParagraph>
          </div>

          <ArticleSection id="why-mistakes-matter" title="Why SEO Mistakes Matter">
            <ArticleParagraph>
              Search engines aim to deliver the most relevant, trustworthy, and helpful results to
              users.
            </ArticleParagraph>
            <ArticleParagraph>
              If your website contains technical issues, poor-quality content, or usability problems,
              search engines may struggle to understand or recommend your pages.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Correcting these issues can lead to:
            </p>
            <BulletList
              items={[
                "Higher search rankings",
                "Increased organic traffic",
                "Better user experience",
                "Improved conversion rates",
                "Stronger online credibility",
              ]}
            />
          </ArticleSection>

          <ArticleSection id="mistakes" title="15 Common SEO Mistakes (And How to Fix Them)" alt>
            <div className="flex flex-col gap-[var(--size--l)]">
              {SEO_MISTAKES.map((mistake) => (
                <div
                  key={mistake.id}
                  id={mistake.id}
                  className="scroll-mt-[7rem] rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]"
                >
                  <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h5)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    <span className="text-[var(--brand--brand-electric-blue)]">{mistake.num}.</span>{" "}
                    {mistake.title}
                  </h3>
                  <p className="mb-[var(--size--l)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    {mistake.problem}
                  </p>
                  <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--l)]">
                    <p className="mb-[var(--size--m)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--brand--brand-electric-blue)]">
                      {mistake.fixIntro}
                    </p>
                    {mistake.fixBody && (
                      <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                        {mistake.fixBody}
                      </p>
                    )}
                    {mistake.fixItems && <BulletList items={mistake.fixItems} />}
                    {mistake.hasInternalLinks && (
                      <div className="mt-[var(--size--m)] flex flex-wrap gap-[var(--size--s)]">
                        {INTERNAL_LINK_ITEMS.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="rounded-[99999px] bg-white px-[var(--size--l)] py-[var(--size--s)] text-[length:var(--typography--text-s)] font-medium text-[var(--brand--brand-charcoal)] no-underline hover:bg-[var(--brand--brand-electric-blue)] hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  {mistake.closing && (
                    <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                      {mistake.closing}
                    </p>
                  )}
                  {mistake.link && (
                    <Link href={mistake.link.href} className={`mt-[var(--size--m)] inline-flex ${INLINE_LINK}`}>
                      {mistake.link.label} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection id="health-checklist" title="Quick SEO Health Checklist">
            <ArticleParagraph>
              Before publishing or updating your website, make sure you:
            </ArticleParagraph>
            <CheckList items={HEALTH_CHECKLIST} />
          </ArticleSection>

          <ArticleSection id="regular-audits" title="Why Regular SEO Audits Are Important" alt>
            <ArticleParagraph>SEO is not a one-time project.</ArticleParagraph>
            <ArticleParagraph>
              Search engines evolve, competitors update their websites, and customer behavior changes
              over time.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Regular SEO audits help identify:
            </p>
            <BulletList
              items={[
                "Technical issues",
                "Content gaps",
                "Keyword opportunities",
                "User experience improvements",
                "Broken links",
                "Performance trends",
              ]}
            />
            <ArticleParagraph>
              Ongoing optimization keeps your website competitive. Use our{" "}
              <Link href="/blog/technical-seo-checklist-2026" className={INLINE_LINK}>
                Technical SEO Checklist
              </Link>{" "}
              and{" "}
              <Link href="/blog/on-page-seo-checklist-2026" className={INLINE_LINK}>
                On-Page SEO Checklist
              </Link>{" "}
              as starting points for your audits.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="Why Choose Let's Advertising for SEO?">
            <ArticleParagraph>
              At Let&apos;s Advertising, we help businesses identify and resolve the issues that
              prevent websites from reaching their full potential.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our SEO services include:
            </p>
            <BulletList
              items={[
                "Comprehensive SEO audits",
                "Keyword research and strategy",
                "On-page optimization",
                "Technical SEO improvements",
                "Local SEO",
                "Content optimization",
                "Performance tracking and reporting",
              ]}
            />
            <ArticleParagraph>
              Our focus is on creating sustainable, data-driven SEO strategies that increase
              visibility, attract qualified traffic, and support long-term business growth.
            </ArticleParagraph>
            <Link
              href="/#services"
              className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
            >
              Explore SEO services →
            </Link>
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

          <ArticleSection id="final-thoughts" title="Final Thoughts" alt>
            <ArticleParagraph>
              Many websites fail to rank not because they lack potential, but because avoidable SEO
              mistakes limit their performance.
            </ArticleParagraph>
            <ArticleParagraph>
              By addressing issues such as poor keyword targeting, low-quality content, slow page
              speed, weak internal linking, and technical SEO problems, you create a stronger
              foundation for better search visibility.
            </ArticleParagraph>
            <ArticleParagraph>
              Remember that SEO is an ongoing process. Search engines reward websites that
              consistently provide valuable content, maintain a positive user experience, and adapt
              to evolving best practices.
            </ArticleParagraph>
            <ArticleParagraph>
              If you&apos;re unsure why your website isn&apos;t performing as expected, Let&apos;s
              Advertising can help you identify opportunities, fix technical and content-related
              issues, and build an SEO strategy that drives lasting results.
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
        title="Is Your Website Making These SEO Mistakes?"
        body="Avoidable SEO errors could be holding your rankings back. At Let's Advertising, we audit your website, identify what's stopping you from ranking, and build a strategy to fix it."
        subtext="Contact us today for a free SEO audit consultation and discover how to improve your search visibility."
        ctaLabel="Get a Free SEO Audit Consultation"
      />
    </>
  );
}
