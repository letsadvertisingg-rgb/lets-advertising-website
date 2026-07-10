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
  { id: "what-is-local-seo", label: "What is Local SEO?" },
  { id: "why-it-matters", label: "Why Local SEO Matters" },
  { id: "how-it-works", label: "How Local SEO Works" },
  { id: "checklist", label: "Complete Checklist" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "checklist-summary", label: "Checklist Summary" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const LOCAL_RANKING_FACTORS = [
  {
    title: "Relevance",
    body: "How closely your business matches the user's search.",
  },
  {
    title: "Distance",
    body: "How close your business is to the searcher's location or the location specified in the search.",
  },
  {
    title: "Prominence",
    body: "How well-known and trusted your business appears online. This can be influenced by customer reviews, backlinks, citations, and your overall online presence.",
  },
];

const CHECKLIST_ITEMS = [
  {
    id: "google-business-profile",
    num: "1",
    title: "Optimize Your Google Business Profile",
    intro: "Your Google Business Profile is one of the most important components of Local SEO.",
    body: "Make sure your profile includes:",
    items: [
      "Accurate business name",
      "Complete address",
      "Phone number",
      "Website URL",
      "Business hours",
      "Primary and secondary categories",
      "High-quality photos",
      "Business description",
      "Services and products",
      "Regular updates and posts",
    ],
    closing:
      "A complete and accurate profile makes it easier for customers to find and trust your business.",
  },
  {
    id: "consistent-info",
    num: "2",
    title: "Keep Your Business Information Consistent",
    intro:
      "Your business information should be identical across your website, directories, and social media profiles.",
    body: "Ensure consistency in your:",
    items: [
      "Business name",
      "Address",
      "Phone number",
      "Website",
      "Email address",
      "Business hours",
    ],
    closing:
      "Consistent information helps search engines verify your business and reduces customer confusion.",
  },
  {
    id: "local-keywords",
    num: "3",
    title: "Target Local Keywords",
    intro: "Use keywords that include the locations you serve.",
    examples: [
      "SEO services in Delhi",
      "Website development company in Noida",
      "Digital marketing agency in Gurugram",
      "Local SEO services in Faridabad",
    ],
    body: "Include these naturally in:",
    items: [
      "Page titles",
      "Meta descriptions",
      "Headings",
      "Website content",
      "Image alt text",
      "URLs",
    ],
    closing: "Avoid overusing location-based keywords unnaturally.",
    link: {
      label: "How to Find the Right Keywords for Your Business",
      href: "/blog/how-to-find-right-keywords-for-business",
    },
  },
  {
    id: "location-pages",
    num: "4",
    title: "Create Location-Specific Pages",
    intro:
      "If your business serves multiple cities or regions, create dedicated pages for each location.",
    examples: [
      "SEO Services in Delhi",
      "SEO Services in Gurugram",
      "SEO Services in Noida",
      "Website Development in Ghaziabad",
    ],
    closing:
      "Each page should contain unique, valuable content relevant to that location rather than duplicated text.",
  },
  {
    id: "customer-reviews",
    num: "5",
    title: "Encourage Customer Reviews",
    body: "Customer reviews influence both rankings and purchasing decisions.",
    closing:
      "Ask satisfied clients to leave honest reviews and respond professionally to all feedback, whether positive or negative. Strong reviews build trust and demonstrate that your business values customer experiences.",
  },
  {
    id: "local-citations",
    num: "6",
    title: "Build Local Citations",
    intro: "A citation is any online mention of your business information.",
    body: "Examples include:",
    items: [
      "Local business directories",
      "Industry-specific directories",
      "Chamber of Commerce listings",
      "Professional associations",
    ],
    closing:
      "Ensure that your business information remains accurate and consistent across all listings.",
  },
  {
    id: "mobile-optimization",
    num: "7",
    title: "Optimize Your Website for Mobile Users",
    intro: "Many local searches happen on smartphones.",
    body: "Your website should:",
    items: [
      "Load quickly",
      "Display correctly on all screen sizes",
      "Offer simple navigation",
      "Include clickable phone numbers",
      "Make it easy to contact your business",
    ],
    closing: "A positive mobile experience encourages users to take action.",
    link: {
      label: "Technical SEO Checklist",
      href: "/blog/technical-seo-checklist-2026",
    },
  },
  {
    id: "website-speed",
    num: "8",
    title: "Improve Website Speed",
    intro: "Slow websites can discourage visitors and reduce engagement.",
    body: "Improve performance by:",
    items: [
      "Compressing images",
      "Using modern image formats",
      "Minimizing unnecessary scripts",
      "Enabling browser caching",
      "Choosing reliable hosting",
    ],
    closing: "A faster website supports both SEO and user satisfaction.",
  },
  {
    id: "local-content",
    num: "9",
    title: "Create Helpful Local Content",
    intro:
      "Publishing locally relevant content helps establish your authority within your community.",
    body: "Consider topics such as:",
    items: [
      "Industry news in your city",
      "Local business tips",
      "Community events",
      "Regional market trends",
      "Customer success stories",
    ],
    closing:
      "Useful local content can attract nearby audiences and strengthen your online presence.",
    link: {
      label: "Content Marketing Services",
      href: "/content-marketing",
    },
  },
  {
    id: "local-schema",
    num: "10",
    title: "Add Local Business Schema",
    intro: "Structured data helps search engines better understand your business.",
    body: "Local Business schema can include:",
    items: [
      "Business name",
      "Address",
      "Phone number",
      "Website",
      "Business hours",
      "Service area",
    ],
    closing:
      "Implementing schema can improve how your business information appears in search results.",
    link: {
      label: "On-Page SEO Checklist",
      href: "/blog/on-page-seo-checklist-2026",
    },
  },
  {
    id: "local-backlinks",
    num: "11",
    title: "Build High-Quality Local Backlinks",
    intro: "Links from reputable local organizations can strengthen your authority.",
    body: "Potential sources include:",
    items: [
      "Local news websites",
      "Community organizations",
      "Business associations",
      "Educational institutions",
      "Industry partners",
      "Event sponsorships",
    ],
    closing:
      "Focus on earning relevant, trustworthy links rather than acquiring large quantities of low-quality backlinks.",
  },
  {
    id: "internal-linking",
    num: "12",
    title: "Use Internal Linking",
    intro:
      "Help visitors and search engines navigate your website by linking related pages together.",
    hasInternalLinks: true,
    closing:
      "A strong internal linking structure improves crawlability and user experience.",
  },
  {
    id: "track-performance",
    num: "13",
    title: "Track Your Local SEO Performance",
    intro: "Measure the effectiveness of your Local SEO strategy by monitoring:",
    items: [
      "Organic traffic",
      "Local keyword rankings",
      "Website enquiries",
      "Phone calls",
      "Form submissions",
      "Customer reviews",
      "Google Business Profile interactions",
    ],
    closing: "Regular analysis helps you identify opportunities for improvement.",
    link: {
      label: "Analytics & Tracking Services",
      href: "/analytics-tracking",
    },
  },
];

const SUMMARY_ITEMS = [
  "Optimized your Google Business Profile",
  "Maintained consistent business information",
  "Targeted relevant local keywords",
  "Created location-specific landing pages",
  "Collected and responded to customer reviews",
  "Built local citations",
  "Optimized for mobile devices",
  "Improved website speed",
  "Published local content",
  "Added Local Business schema",
  "Earned quality local backlinks",
  "Strengthened internal linking",
  "Monitored key performance metrics",
];

const INTERNAL_LINK_ITEMS = [
  { label: "What is SEO?", href: "/blog/what-is-seo-why-business-needs-it" },
  { label: "On-Page SEO Checklist", href: "/blog/on-page-seo-checklist-2026" },
  { label: "SEO vs Google Ads", href: "/blog/seo-vs-google-ads" },
  { label: "AEO Best Practices for Local Businesses", href: "/blog/aeo-best-practices-for-local-businesses" },
  { label: "Content Marketing", href: "/content-marketing" },
  { label: "SEO Services", href: "/#services" },
];

const RELATED_LINKS = [
  {
    label: "AEO Best Practices for Local Businesses",
    href: "/blog/aeo-best-practices-for-local-businesses",
  },
  {
    label: "How to Find the Right Keywords for Your Business",
    href: "/blog/how-to-find-right-keywords-for-business",
  },
  {
    label: "What is SEO and Why Does Your Business Need It?",
    href: "/blog/what-is-seo-why-business-needs-it",
  },
  {
    label: "Complete On-Page SEO Checklist for 2026",
    href: "/blog/on-page-seo-checklist-2026",
  },
  {
    label: "Technical SEO Checklist Every Website Needs",
    href: "/blog/technical-seo-checklist-2026",
  },
  { label: "SEO Services", href: "/#services" },
  { label: "Content Marketing Services", href: "/content-marketing" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["local-seo-guide-small-businesses"];

export function LocalSeoGuideBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="Local SEO Guide for Small Businesses: How to Rank Higher and Attract More Local Customers"
        category="SEO"
        date="July 11, 2026"
        readTime="14 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>Imagine someone in your city searches for:</ArticleParagraph>
            <BulletList
              items={[
                "Digital marketing agency near me",
                "Best SEO company in Delhi",
                "Website designer nearby",
                "Marketing agency open now",
              ]}
            />
            <ArticleParagraph>
              If your business doesn&apos;t appear in the search results, you&apos;re missing
              valuable opportunities to connect with customers who are actively looking for your
              services.
            </ArticleParagraph>
            <ArticleParagraph>
              This is where Local SEO (Local Search Engine Optimization) becomes essential.
            </ArticleParagraph>
            <ArticleParagraph>
              Local SEO helps businesses improve their visibility in location-based searches, making
              it easier for nearby customers to discover, contact, and visit them. Whether you&apos;re
              a local service provider, retailer, restaurant, healthcare clinic, or digital marketing
              agency, an effective Local SEO strategy can drive more traffic, enquiries, and sales.
            </ArticleParagraph>
            <ArticleParagraph>
              In this guide, you&apos;ll learn what Local SEO is, why it matters, and the practical
              steps you can take to improve your local search rankings.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-local-seo" title="What is Local SEO?">
            <ArticleParagraph>
              Local SEO is the process of optimizing your online presence so your business appears
              in search results when people look for products or services in a specific location.
            </ArticleParagraph>
            <ArticleParagraph>
              Unlike traditional SEO, which focuses on broader search visibility, Local SEO targets
              customers in your service area. Learn more in our{" "}
              <Link href="/blog/what-is-seo-why-business-needs-it" className={INLINE_LINK}>
                SEO fundamentals guide
              </Link>
              .
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              For example:
            </p>
            <BulletList
              items={[
                "SEO company in Delhi",
                "Web development services in Gurugram",
                "Digital marketing agency near me",
                "Best advertising agency in Noida",
              ]}
            />
            <ArticleParagraph>
              The goal is to help your business appear where local customers are searching.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="why-it-matters" title="Why Local SEO Matters for Small Businesses" alt>
            <ArticleParagraph>
              Today, most customers search online before contacting a business.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              A strong Local SEO strategy can help you:
            </p>
            <BulletList
              items={[
                "Increase visibility in local search results",
                "Attract nearby customers",
                "Generate qualified leads",
                "Build trust through reviews",
                "Increase website traffic",
                "Improve phone calls and enquiries",
                "Drive more visits to your office or store",
                "Compete effectively with larger businesses",
              ]}
            />
            <ArticleParagraph>
              For many small businesses, Local SEO provides one of the highest returns on digital
              marketing investment because it targets people who are already looking for relevant
              services.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="how-it-works" title="How Local SEO Works">
            <ArticleParagraph>
              Search engines evaluate several factors when deciding which businesses appear in local
              search results.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              The most important include:
            </p>
            <div className="grid grid-cols-1 gap-[var(--size--l)] sm:grid-cols-3">
              {LOCAL_RANKING_FACTORS.map((factor) => (
                <div
                  key={factor.title}
                  className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]"
                >
                  <h3 className="mb-[var(--size--s)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] text-[var(--brand--brand-electric-blue)]">
                    {factor.title}
                  </h3>
                  <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    {factor.body}
                  </p>
                </div>
              ))}
            </div>
            <ArticleParagraph>
              Optimizing these factors improves your chances of appearing in local search results.
              As AI search grows, also consider{" "}
              <Link
                href="/blog/aeo-best-practices-for-local-businesses"
                className={INLINE_LINK}
              >
                AEO best practices for local businesses
              </Link>
              .
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="checklist" title="Complete Local SEO Checklist" alt>
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
                  {item.body && !item.hasInternalLinks && (
                    <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                      {item.body}
                    </p>
                  )}
                  {item.examples && (
                    <>
                      <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                        Examples:
                      </p>
                      <BulletList items={item.examples} />
                    </>
                  )}
                  {item.items && !item.hasInternalLinks && <BulletList items={item.items} />}
                  {item.hasInternalLinks && (
                    <>
                      <p className="mb-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                        {item.intro}
                      </p>
                      <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                        For example:
                      </p>
                      <div className="flex flex-wrap gap-[var(--size--s)]">
                        {INTERNAL_LINK_ITEMS.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="rounded-[99999px] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--l)] py-[var(--size--s)] text-[length:var(--typography--text-s)] font-medium text-[var(--brand--brand-charcoal)] no-underline hover:bg-[var(--brand--brand-electric-blue)] hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                  {item.closing && (
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

          <ArticleSection id="common-mistakes" title="Common Local SEO Mistakes">
            <ArticleParagraph>Avoid these common issues:</ArticleParagraph>
            <BulletList
              items={[
                "Incomplete Google Business Profile",
                "Inconsistent business information",
                "Ignoring customer reviews",
                "Duplicate location pages",
                "Poor mobile experience",
                "Slow website performance",
                "Targeting overly broad keywords",
                "Neglecting local content",
                "Missing structured data",
              ]}
            />
            <ArticleParagraph>
              Correcting these mistakes can improve both visibility and user trust.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="checklist-summary" title="Local SEO Checklist Summary" alt>
            <ArticleParagraph>
              Before considering your Local SEO strategy complete, ensure you have:
            </ArticleParagraph>
            <CheckList items={SUMMARY_ITEMS} />
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="Why Choose Let's Advertising for Local SEO?">
            <ArticleParagraph>
              At Let&apos;s Advertising, we help businesses connect with customers in the locations
              that matter most.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our Local SEO services include:
            </p>
            <BulletList
              items={[
                "Local SEO audits",
                "Google Business Profile optimization",
                "Local keyword research",
                "Location-specific content strategy",
                "Citation management",
                "On-page optimization",
                "Technical SEO improvements",
                "Performance tracking and reporting",
              ]}
            />
            <ArticleParagraph>
              Our approach focuses on increasing visibility, attracting qualified local traffic, and
              helping businesses generate measurable growth through ethical, long-term SEO strategies.
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
              Local SEO has become an essential part of digital marketing for businesses that rely
              on customers within a specific geographic area. By optimizing your website, maintaining
              accurate business information, building trust through customer reviews, and creating
              locally relevant content, you can improve your visibility where it matters most.
            </ArticleParagraph>
            <ArticleParagraph>
              Unlike traditional advertising, Local SEO helps you reach people who are already
              searching for your products or services, making it one of the most effective ways to
              generate qualified leads and build lasting customer relationships.
            </ArticleParagraph>
            <ArticleParagraph>
              Whether you&apos;re just beginning your Local SEO journey or looking to strengthen your
              existing strategy, Let&apos;s Advertising can help you create a customized plan that
              supports long-term success and sustainable business growth.
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
        title="Ready to Attract More Local Customers?"
        body="Local SEO puts your business in front of customers who are already searching nearby. At Let's Advertising, we help small businesses improve local rankings, optimize Google Business Profiles, and generate more qualified enquiries."
        subtext="Contact us today for a free Local SEO consultation and discover how to grow your business in your service area."
        ctaLabel="Get a Free Local SEO Consultation"
      />
    </>
  );
}
