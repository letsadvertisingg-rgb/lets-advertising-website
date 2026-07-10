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
  { id: "what-is-technical-seo", label: "What is Technical SEO?" },
  { id: "why-it-matters", label: "Why Technical SEO Matters" },
  { id: "checklist", label: "Complete Checklist" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "checklist-summary", label: "Checklist Summary" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const CHECKLIST_ITEMS = [
  {
    id: "https-security",
    num: "1",
    title: "Use HTTPS Security",
    intro: "Website security is essential for both users and search engines.",
    body: "Ensure your website:",
    items: [
      "Uses HTTPS instead of HTTP",
      "Has a valid SSL certificate",
      "Redirects all HTTP traffic to HTTPS",
      "Avoids mixed-content warnings",
    ],
    closing: "A secure website builds trust and protects user data.",
  },
  {
    id: "website-speed",
    num: "2",
    title: "Improve Website Speed",
    intro: "Page speed directly affects user experience and search performance.",
    body: "To improve loading times:",
    items: [
      "Compress images",
      "Enable browser caching",
      "Minify CSS, JavaScript, and HTML",
      "Remove unnecessary plugins and scripts",
      "Use lazy loading for images and videos",
      "Choose reliable hosting",
      "Use a Content Delivery Network (CDN)",
    ],
    closing: "A faster website keeps visitors engaged and reduces abandonment.",
  },
  {
    id: "core-web-vitals",
    num: "3",
    title: "Optimize Core Web Vitals",
    intro: "Core Web Vitals measure the real-world user experience of your website.",
    body: "Focus on:",
    items: [
      "Largest Contentful Paint (LCP): Measures loading performance.",
      "Interaction to Next Paint (INP): Measures how quickly the page responds to user interactions.",
      "Cumulative Layout Shift (CLS): Measures visual stability during page load.",
    ],
    closing: "Improving these metrics contributes to a smoother browsing experience.",
  },
  {
    id: "mobile-friendly",
    num: "4",
    title: "Make Your Website Mobile-Friendly",
    intro: "Google primarily evaluates websites using their mobile version.",
    body: "Your website should:",
    items: [
      "Use responsive design",
      "Display properly on all screen sizes",
      "Have readable text without zooming",
      "Include touch-friendly buttons",
      "Load quickly on mobile devices",
    ],
    closing: "A mobile-friendly site improves usability and search visibility.",
  },
  {
    id: "xml-sitemap",
    num: "5",
    title: "Create an XML Sitemap",
    intro: "An XML sitemap helps search engines discover important pages on your website.",
    body: "Your sitemap should:",
    items: [
      "Include indexable pages",
      "Exclude duplicate or unnecessary URLs",
      "Update automatically when new content is published",
      "Be submitted through Google Search Console and Bing Webmaster Tools",
    ],
    closing: "This makes it easier for search engines to understand your site's structure.",
  },
  {
    id: "robots-txt",
    num: "6",
    title: "Optimize Your Robots.txt File",
    intro:
      "The robots.txt file tells search engine crawlers which areas of your website they can or cannot access.",
    body: "Best practices include:",
    items: [
      "Allow crawling of important pages",
      "Block private or duplicate content where appropriate",
      "Include a reference to your XML sitemap",
      "Review changes carefully to avoid accidentally blocking valuable pages",
    ],
  },
  {
    id: "crawl-errors",
    num: "7",
    title: "Fix Crawl Errors",
    intro: "Crawl errors prevent search engines from accessing certain pages.",
    body: "Common issues include:",
    items: [
      "Broken links",
      "404 errors",
      "Server errors",
      "Redirect loops",
      "DNS problems",
    ],
    closing: "Regularly reviewing crawl reports helps keep your site accessible.",
  },
  {
    id: "website-structure",
    num: "8",
    title: "Optimize Website Structure",
    intro: "A clear site architecture benefits both users and search engines.",
    body: "Aim for:",
    items: [
      "Logical navigation",
      "Organized categories",
      "Descriptive URLs",
      "Shallow page depth",
      "Strong internal linking",
    ],
    closing: "Visitors should be able to reach important pages with only a few clicks.",
  },
  {
    id: "seo-urls",
    num: "9",
    title: "Use SEO-Friendly URLs",
    intro: "URLs should be:",
    items: ["Short", "Descriptive", "Easy to read", "Keyword-relevant where appropriate"],
    example: "yourwebsite.com/technical-seo-checklist",
    closing: "Avoid long URLs with unnecessary parameters whenever possible.",
  },
  {
    id: "broken-links",
    num: "10",
    title: "Fix Broken Links",
    intro: "Broken links create a poor user experience and waste crawl resources.",
    body: "Check for:",
    items: [
      "Internal broken links",
      "External broken links",
      "Missing images",
      "Redirect chains",
    ],
    closing: "Repairing these issues keeps your website healthy.",
  },
  {
    id: "internal-linking",
    num: "11",
    title: "Optimize Internal Linking",
    intro:
      "Internal links help distribute authority throughout your website and make it easier for search engines to discover related content.",
    closing:
      "Use descriptive anchor text and link naturally between relevant pages, such as service pages and blog articles.",
    hasInternalLinks: true,
  },
  {
    id: "structured-data",
    num: "12",
    title: "Add Structured Data (Schema Markup)",
    intro:
      "Structured data helps search engines better understand your content and may improve how your pages appear in search results.",
    body: "Common schema types include:",
    items: [
      "Organization",
      "Local Business",
      "Article",
      "FAQ",
      "Product",
      "Breadcrumb",
      "Review",
    ],
    closing: "Implement schema carefully and validate it after deployment.",
    link: {
      label: "Learn how to structure content for AI search engines",
      href: "/blog/how-to-structure-content-for-ai-search-engines",
    },
  },
  {
    id: "duplicate-content",
    num: "13",
    title: "Eliminate Duplicate Content",
    intro:
      "Duplicate content can confuse search engines about which version of a page should be indexed.",
    body: "To avoid issues:",
    items: [
      "Use canonical tags",
      "Consolidate similar pages",
      "Prevent duplicate URL variations",
      "Create original, valuable content",
    ],
    closing: "A consistent content strategy helps strengthen your site's authority.",
  },
  {
    id: "optimize-images",
    num: "14",
    title: "Optimize Images",
    intro: "Image optimization improves both speed and accessibility.",
    body: "Best practices include:",
    items: [
      "Compress images",
      "Use descriptive file names",
      "Add relevant alt text",
      "Choose efficient image formats",
      "Resize images appropriately",
    ],
    closing: "Optimized images contribute to faster load times.",
  },
  {
    id: "indexing-status",
    num: "15",
    title: "Check Indexing Status",
    intro: "Not every page should be indexed, but important pages should be.",
    body: "Review:",
    items: ["Indexed pages", "Excluded pages", 'Pages marked "noindex"', "Canonical URLs"],
    closing: "Monitoring indexing helps ensure that search engines are displaying the right content.",
  },
  {
    id: "canonical-tags",
    num: "16",
    title: "Implement Canonical Tags",
    intro: "Canonical tags indicate the preferred version of a page when similar content exists.",
    body: "They help:",
    items: [
      "Prevent duplicate content issues",
      "Consolidate ranking signals",
      "Improve crawl efficiency",
    ],
    closing: "Every important page should have an appropriate canonical URL.",
  },
  {
    id: "redirects",
    num: "17",
    title: "Monitor Redirects",
    intro: "Redirects are useful when URLs change, but they should be implemented correctly.",
    body: "Use:",
    items: [
      "301 redirects for permanent moves",
      "302 redirects only for temporary changes",
    ],
    closing:
      "Avoid redirect chains and loops, which can slow crawling and impact user experience.",
  },
  {
    id: "accessibility",
    num: "18",
    title: "Improve Website Accessibility",
    intro:
      "An accessible website is easier for everyone to use and often aligns with SEO best practices.",
    body: "Consider:",
    items: [
      "Descriptive alt text",
      "Clear heading structure",
      "Keyboard navigation",
      "Sufficient color contrast",
      "Readable fonts",
    ],
    closing:
      "Accessibility improvements benefit a wider audience and contribute to a better overall experience.",
  },
  {
    id: "regular-audits",
    num: "19",
    title: "Regularly Audit Your Website",
    intro: "Technical SEO isn't a one-time task.",
    body: "Schedule regular audits to identify and resolve issues such as:",
    items: [
      "Crawl errors",
      "Slow pages",
      "Broken links",
      "Duplicate content",
      "Security concerns",
      "Indexing problems",
    ],
    closing: "Ongoing maintenance helps preserve and improve search performance.",
  },
];

const SUMMARY_ITEMS = [
  "Enabled HTTPS",
  "Improved page speed",
  "Optimized Core Web Vitals",
  "Ensured mobile responsiveness",
  "Created and submitted an XML sitemap",
  "Configured robots.txt correctly",
  "Fixed crawl errors",
  "Built a logical site structure",
  "Used SEO-friendly URLs",
  "Repaired broken links",
  "Added strong internal links",
  "Implemented structured data",
  "Eliminated duplicate content",
  "Optimized images",
  "Verified indexing",
  "Configured canonical tags",
  "Managed redirects correctly",
  "Improved accessibility",
  "Performed regular technical audits",
];

const RELATED_LINKS = [
  {
    label: "How AI is Transforming SEO: The Future of Search in 2026",
    href: "/blog/how-ai-is-transforming-seo-2026",
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
    label: "How to Structure Content for AI Search Engines",
    href: "/blog/how-to-structure-content-for-ai-search-engines",
  },
  {
    label: "SEO vs Google Ads: Which One Should You Choose?",
    href: "/blog/seo-vs-google-ads",
  },
  {
    label: "SEO vs AEO: What's the Difference?",
    href: "/blog/seo-vs-aeo-difference",
  },
  { label: "SEO Services", href: "/#services" },
  { label: "Analytics & Tracking", href: "/analytics-tracking" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["technical-seo-checklist-2026"];

function InternalLinkExample({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className={INLINE_LINK}>
      {label}
    </Link>
  );
}

export function TechnicalSeoChecklistBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="Technical SEO Checklist Every Website Needs"
        category="SEO"
        date="July 11, 2026"
        readTime="15 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              You can have outstanding content, a beautiful website, and the best products or
              services, but if search engines can&apos;t crawl, understand, or index your website
              properly, your rankings will suffer.
            </ArticleParagraph>
            <ArticleParagraph>That&apos;s where Technical SEO comes in.</ArticleParagraph>
            <ArticleParagraph>
              Technical SEO focuses on optimizing the backend structure of your website so that
              search engines can efficiently discover, crawl, index, and rank your pages. While users
              may not always notice these improvements, search engines certainly do.
            </ArticleParagraph>
            <ArticleParagraph>
              Whether you&apos;re managing a business website, an e-commerce store, or a corporate
              platform, a strong technical foundation is essential for long-term SEO success.
            </ArticleParagraph>
            <ArticleParagraph>
              In this guide, we&apos;ll walk through the complete Technical SEO Checklist every
              website should follow in 2026. As{" "}
              <Link href="/blog/how-ai-is-transforming-seo-2026" className={INLINE_LINK}>
                AI transforms SEO workflows
              </Link>
              , technical health remains essential for both traditional and AI-powered search.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-technical-seo" title="What is Technical SEO?">
            <ArticleParagraph>
              Technical SEO is the process of optimizing your website&apos;s infrastructure to help
              search engines crawl, index, and understand your content more effectively.
            </ArticleParagraph>
            <ArticleParagraph>
              Unlike{" "}
              <Link href="/blog/on-page-seo-checklist-2026" className={INLINE_LINK}>
                On-Page SEO
              </Link>
              , which focuses on content and keywords, Technical SEO deals with elements such as:
            </ArticleParagraph>
            <BulletList
              items={[
                "Website speed",
                "Mobile usability",
                "Site architecture",
                "XML sitemaps",
                "HTTPS security",
                "Structured data",
                "Crawlability",
                "Indexing",
                "Core Web Vitals",
              ]}
            />
            <ArticleParagraph>
              A technically optimized website creates a better experience for both users and search
              engines.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="why-it-matters" title="Why Technical SEO Matters" alt>
            <ArticleParagraph>
              Technical SEO is the foundation of every successful SEO strategy.
            </ArticleParagraph>
            <ArticleParagraph>
              Without it, even the best content may struggle to rank because search engines could
              encounter issues accessing or interpreting your pages.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Benefits of Technical SEO include:
            </p>
            <BulletList
              items={[
                "Better crawlability",
                "Faster indexing",
                "Improved website performance",
                "Higher search rankings",
                "Better user experience",
                "Increased organic traffic",
                "Lower bounce rates",
                "Stronger website security",
              ]}
            />
          </ArticleSection>

          <ArticleSection id="checklist" title="Complete Technical SEO Checklist">
            <div className="flex flex-col gap-[var(--size--l)]">
              {CHECKLIST_ITEMS.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="scroll-mt-[7rem] rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]"
                >
                  <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h5)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    <span className="text-[var(--brand--brand-electric-blue)]">{item.num}.</span>{" "}
                    {item.title}
                  </h3>
                  {item.intro && !item.hasInternalLinks && (
                    <p className="mb-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                      {item.intro}
                    </p>
                  )}
                  {item.body && (
                    <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                      {item.body}
                    </p>
                  )}
                  {item.items && !item.hasInternalLinks && <BulletList items={item.items} />}
                  {item.hasInternalLinks && (
                    <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                      {item.intro} Link to relevant pages such as our{" "}
                      <InternalLinkExample
                        label="On-Page SEO Checklist"
                        href="/blog/on-page-seo-checklist-2026"
                      />
                      ,{" "}
                      <InternalLinkExample
                        label="SEO fundamentals guide"
                        href="/blog/what-is-seo-why-business-needs-it"
                      />
                      , and{" "}
                      <InternalLinkExample
                        label="content marketing services"
                        href="/content-marketing"
                      />
                      .
                    </p>
                  )}
                  {item.example && (
                    <p className="mb-[var(--size--m)] rounded-[var(--radius--radius-lg)] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] text-[var(--brand--brand-charcoal)]">
                      <span className="font-semibold">Example: </span>
                      {item.example}
                    </p>
                  )}
                  {item.closing && !item.hasInternalLinks && (
                    <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                      {item.closing}
                    </p>
                  )}
                  {item.closing && item.hasInternalLinks && (
                    <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                      {item.closing}
                    </p>
                  )}
                  {item.link && (
                    <Link href={item.link.href} className={`mt-[var(--size--m)] inline-flex ${INLINE_LINK}`}>
                      {item.link.label} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection id="common-mistakes" title="Common Technical SEO Mistakes" alt>
            <ArticleParagraph>Avoid these common issues:</ArticleParagraph>
            <BulletList
              items={[
                "Slow-loading pages",
                "Missing HTTPS",
                "Broken internal links",
                "Poor mobile experience",
                "Duplicate content",
                "Missing XML sitemap",
                "Incorrect robots.txt rules",
                "Redirect chains",
                "Unoptimized images",
                "Missing structured data",
              ]}
            />
            <ArticleParagraph>
              Addressing these problems can significantly improve your website&apos;s health.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="checklist-summary" title="Technical SEO Checklist Summary">
            <ArticleParagraph>
              Before considering your website technically optimized, make sure you have:
            </ArticleParagraph>
            <CheckList items={SUMMARY_ITEMS} />
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="Why Choose Let's Advertising for Technical SEO?" alt>
            <ArticleParagraph>
              At Let&apos;s Advertising, we help businesses build websites that are technically sound,
              search-engine friendly, and designed for long-term growth.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our Technical SEO services include:
            </p>
            <BulletList
              items={[
                "Comprehensive technical SEO audits",
                "Website performance optimization",
                "Core Web Vitals improvements",
                "Crawlability and indexing analysis",
                "Structured data implementation",
                "Mobile optimization",
                "Website architecture recommendations",
                "Ongoing monitoring and reporting",
              ]}
            />
            <ArticleParagraph>
              We combine technical expertise with proven SEO strategies to help businesses improve
              search visibility and create a better experience for their users.
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

          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <ArticleParagraph>
              Technical SEO forms the backbone of every successful website. It ensures that search
              engines can efficiently crawl, index, and understand your content while providing
              visitors with a fast, secure, and seamless browsing experience.
            </ArticleParagraph>
            <ArticleParagraph>
              By following this Technical SEO Checklist, you&apos;ll create a stronger foundation
              for your overall SEO strategy and support better rankings, higher traffic, and
              long-term online growth.
            </ArticleParagraph>
            <ArticleParagraph>
              If your website hasn&apos;t had a technical SEO audit recently, now is the perfect time
              to identify opportunities for improvement. At Let&apos;s Advertising, we&apos;re
              committed to helping businesses optimize their websites for both search engines and
              users, delivering sustainable results through data-driven SEO solutions.
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
        title="Need a Technical SEO Audit?"
        body="Technical SEO is the foundation your rankings depend on. At Let's Advertising, we identify crawl issues, speed problems, and indexing gaps that may be holding your website back."
        subtext="Contact us today for a free technical SEO consultation and discover how to build a faster, more search-friendly website."
        ctaLabel="Get a Free Technical SEO Consultation"
      />
    </>
  );
}
