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
  { id: "what-is-on-page-seo", label: "What is On-Page SEO?" },
  { id: "why-it-matters", label: "Why It Matters in 2026" },
  { id: "checklist", label: "Complete Checklist" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "checklist-summary", label: "Checklist Summary" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const CHECKLIST_ITEMS = [
  {
    id: "keyword-research",
    num: "1",
    title: "Perform Proper Keyword Research",
    intro: "Every successful SEO strategy begins with keyword research.",
    body: "Choose keywords that:",
    items: [
      "Match your audience's search intent",
      "Have realistic competition",
      "Are relevant to your products or services",
      "Include long-tail keyword opportunities",
    ],
    closing:
      "Rather than targeting a single keyword repeatedly, use related phrases naturally throughout your content.",
    link: {
      label: "How to Find the Right Keywords for Your Business",
      href: "/blog/how-to-find-right-keywords-for-business",
    },
    example: {
      label: "Example",
      primary: "On-Page SEO Checklist",
      related: [
        "On-Page SEO Guide",
        "SEO Optimization Tips",
        "Website SEO Checklist",
        "SEO Best Practices",
        "How to Optimize Website Pages",
      ],
    },
  },
  {
    id: "title-tag",
    num: "2",
    title: "Write an SEO-Friendly Title Tag",
    intro: "Your title tag is one of the most important ranking factors.",
    body: "Best practices include:",
    items: [
      "Keep it under 60 characters",
      "Include your primary keyword near the beginning",
      "Make it compelling for users",
      "Avoid keyword stuffing",
    ],
    example: {
      label: "Example",
      primary: "Complete On-Page SEO Checklist for 2026 | Let's Advertising",
    },
  },
  {
    id: "meta-description",
    num: "3",
    title: "Create an Engaging Meta Description",
    intro:
      "Although meta descriptions are not a direct ranking factor, they influence click-through rates.",
    body: "A strong meta description should:",
    items: [
      "Be 150–160 characters",
      "Include the primary keyword naturally",
      "Explain the page's value",
      "Encourage users to click",
    ],
  },
  {
    id: "url-structure",
    num: "4",
    title: "Optimize Your URL Structure",
    intro: "Short, descriptive URLs are easier for users and search engines to understand.",
    good: "yourwebsite.com/on-page-seo-checklist",
    bad: "yourwebsite.com/post?id=56784&page=seo2026",
    closing: "Use lowercase letters and hyphens to separate words.",
  },
  {
    id: "h1-heading",
    num: "5",
    title: "Use One Clear H1 Heading",
    intro: "Every page should have one H1 heading that clearly describes the topic.",
    body: "It should:",
    items: [
      "Include the primary keyword",
      "Match the page's intent",
      "Be easy to read",
    ],
    closing: "Use H2 and H3 headings to organize the rest of the content logically.",
  },
  {
    id: "search-intent",
    num: "6",
    title: "Focus on Search Intent",
    intro:
      "One of the biggest SEO mistakes is creating content that doesn't match what users are looking for.",
    body: "Ask yourself:",
    items: [
      "Is the user seeking information?",
      "Are they comparing products?",
      "Do they want to make a purchase?",
      "Are they looking for a local service?",
    ],
    closing: "Your content should directly answer those needs.",
  },
  {
    id: "quality-content",
    num: "7",
    title: "Create Helpful, High-Quality Content",
    intro:
      "Google rewards content that demonstrates expertise, provides original insights, and fully answers the user's questions.",
    body: "Aim to:",
    items: [
      "Explain concepts clearly",
      "Use real examples",
      "Keep information accurate and up to date",
      "Avoid duplicate or thin content",
    ],
    closing: "Instead of writing for search engines, write for your audience first.",
  },
  {
    id: "keywords-naturally",
    num: "8",
    title: "Use Keywords Naturally",
    intro: "Include your primary keyword in:",
    items: [
      "Title tag",
      "H1 heading",
      "First paragraph",
      "At least one H2 heading (where appropriate)",
      "Meta description",
      "URL",
      "Image alt text (when relevant)",
    ],
    closing:
      "Use related terms naturally throughout the article instead of repeating the same keyword excessively.",
  },
  {
    id: "optimize-images",
    num: "9",
    title: "Optimize Images",
    intro: "Images improve readability but should also be optimized for SEO.",
    body: "Checklist:",
    items: [
      "Use descriptive file names",
      "Compress images to reduce file size",
      "Add meaningful alt text",
      "Choose modern formats like WebP where possible",
      "Ensure images load quickly",
    ],
    closing: "Optimized images contribute to better page speed and accessibility.",
  },
  {
    id: "internal-links",
    num: "10",
    title: "Add Internal Links",
    intro:
      "Internal links help users navigate your website and allow search engines to discover related content.",
    body: "For example, if you're writing about On-Page SEO, link to articles about:",
    items: [
      "Technical SEO",
      "Keyword Research",
      "Local SEO",
      "SEO vs Google Ads",
      "Content Marketing",
    ],
    closing: 'Use descriptive anchor text instead of generic phrases like "Click Here."',
    hasInternalLinks: true,
  },
  {
    id: "external-links",
    num: "11",
    title: "Link to Trusted External Sources",
    body: "Linking to reputable, relevant resources can improve the usefulness of your content and provide additional context for readers.",
    closing: "Ensure external links are current, credible, and genuinely helpful.",
  },
  {
    id: "page-speed",
    num: "12",
    title: "Improve Page Speed",
    intro: "Slow websites negatively affect user experience and can impact search performance.",
    body: "Ways to improve speed:",
    items: [
      "Compress images",
      "Enable browser caching",
      "Minify CSS and JavaScript",
      "Reduce unnecessary plugins",
      "Use a Content Delivery Network (CDN)",
      "Upgrade your hosting if needed",
    ],
    closing: "Fast-loading pages encourage visitors to stay longer and engage more.",
  },
  {
    id: "mobile-friendly",
    num: "13",
    title: "Ensure Mobile Friendliness",
    intro: "Most users now browse on mobile devices.",
    body: "Your website should:",
    items: [
      "Display correctly on all screen sizes",
      "Have readable text",
      "Use responsive layouts",
      "Feature buttons that are easy to tap",
      "Load quickly on mobile networks",
    ],
    closing: "A mobile-friendly site is essential for both users and search engines.",
  },
  {
    id: "readability",
    num: "14",
    title: "Improve Readability",
    intro: "Well-structured content is easier to read and understand.",
    body: "Tips:",
    items: [
      "Use short paragraphs",
      "Break up text with headings",
      "Include bullet points where helpful",
      "Write in simple, conversational language",
      "Avoid unnecessary jargon",
    ],
    closing: "Clear formatting keeps readers engaged.",
  },
  {
    id: "featured-snippets",
    num: "15",
    title: "Optimize for Featured Snippets",
    intro: "Featured snippets often appear above regular search results.",
    body: "To increase your chances:",
    items: [
      "Answer common questions directly",
      "Use numbered steps",
      "Create concise definitions",
      "Include comparison tables where relevant",
      "Organize content with descriptive headings",
    ],
  },
  {
    id: "structured-data",
    num: "16",
    title: "Add Structured Data (Schema Markup)",
    intro:
      "Schema helps search engines understand your content and can enhance search listings with rich results.",
    body: "Common schema types include:",
    items: ["Article", "FAQ", "Organization", "Breadcrumb", "Product", "Local Business"],
    closing:
      "Implementing the appropriate schema can improve visibility in search results.",
    link: {
      label: "Learn how to structure content for AI search engines",
      href: "/blog/how-to-structure-content-for-ai-search-engines",
    },
  },
  {
    id: "cta",
    num: "17",
    title: "Include a Strong Call-to-Action (CTA)",
    intro: "Every page should guide users toward the next step.",
    body: "Examples:",
    items: [
      "Request a consultation",
      "Contact your team",
      "Explore related services",
      "Read another blog",
      "Download a guide",
    ],
    closing: "A clear CTA helps turn visitors into leads or customers.",
  },
];

const SUMMARY_ITEMS = [
  "Conducted keyword research",
  "Written a compelling title tag",
  "Added an optimized meta description",
  "Created a clean URL",
  "Used one H1 heading",
  "Structured content with H2 and H3 headings",
  "Written high-quality, user-focused content",
  "Optimized images",
  "Added internal and external links",
  "Improved page speed",
  "Ensured mobile responsiveness",
  "Enhanced readability",
  "Added structured data where appropriate",
  "Included a relevant call-to-action",
];

const RELATED_LINKS = [
  {
    label: "How to Find the Right Keywords for Your Business",
    href: "/blog/how-to-find-right-keywords-for-business",
  },
  {
    label: "Technical SEO Checklist Every Website Needs",
    href: "/blog/technical-seo-checklist-2026",
  },
  {
    label: "What is SEO and Why Does Your Business Need It?",
    href: "/blog/what-is-seo-why-business-needs-it",
  },
  {
    label: "SEO vs Google Ads: Which One Should You Choose?",
    href: "/blog/seo-vs-google-ads",
  },
  {
    label: "How to Structure Content for AI Search Engines",
    href: "/blog/how-to-structure-content-for-ai-search-engines",
  },
  {
    label: "AEO Best Practices for Local Businesses",
    href: "/blog/aeo-best-practices-for-local-businesses",
  },
  {
    label: "SEO vs AEO: What's the Difference?",
    href: "/blog/seo-vs-aeo-difference",
  },
  { label: "SEO Services", href: "/#services" },
  { label: "Content Marketing Services", href: "/content-marketing" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["on-page-seo-checklist-2026"];

function InternalLinkExample({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className={INLINE_LINK}>
      {label}
    </Link>
  );
}

export function OnPageSeoChecklistBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="Complete On-Page SEO Checklist for 2026"
        category="SEO"
        date="July 11, 2026"
        readTime="14 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Ranking on Google has become more competitive than ever. With search engines
              prioritizing helpful, user-focused content and AI-enhanced search experiences, simply
              adding keywords to a page is no longer enough.
            </ArticleParagraph>
            <ArticleParagraph>
              Today&apos;s On-Page SEO is about creating pages that are easy for both users and
              search engines to understand. Every element, from your page title to image
              optimization, plays a role in determining how your content performs in search results.
            </ArticleParagraph>
            <ArticleParagraph>
              Whether you&apos;re a business owner, blogger, or digital marketer, this complete
              On-Page SEO checklist will help you optimize your website for better visibility,
              improved user experience, and sustainable organic growth.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-on-page-seo" title="What is On-Page SEO?">
            <ArticleParagraph>
              On-Page SEO is the process of optimizing the content and HTML elements of individual
              web pages to improve their rankings in search engines.
            </ArticleParagraph>
            <ArticleParagraph>
              Unlike Off-Page SEO, which focuses on backlinks and external signals, On-Page SEO is
              entirely under your control. It includes optimizing your content, keywords, headings,
              images, URLs, internal links, and technical page elements.
            </ArticleParagraph>
            <ArticleParagraph>
              Done correctly, On-Page SEO helps search engines understand your content while making
              it more useful for visitors. For a broader overview, read our guide on{" "}
              <Link href="/blog/what-is-seo-why-business-needs-it" className={INLINE_LINK}>
                what SEO is and why your business needs it
              </Link>
              .
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="why-it-matters" title="Why On-Page SEO Matters in 2026" alt>
            <ArticleParagraph>
              Search engines have evolved significantly. Modern algorithms evaluate not only keywords
              but also user intent, content quality, page experience, and overall usefulness.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              A well-optimized page can:
            </p>
            <BulletList
              items={[
                "Improve search rankings",
                "Increase organic traffic",
                "Reduce bounce rates",
                "Improve user engagement",
                "Increase conversions",
                "Help search engines better understand your content",
              ]}
            />
            <ArticleParagraph>
              Strong On-Page SEO also supports{" "}
              <Link
                href="/blog/what-is-answer-engine-optimization-aeo"
                className={INLINE_LINK}
              >
                AI-powered search features
              </Link>{" "}
              by making your content clear, well-structured, and trustworthy.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="checklist" title="Complete On-Page SEO Checklist">
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
                  {item.intro && (
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
                    <ul className="flex flex-col gap-[var(--size--s)]">
                      <li className="flex items-start gap-[var(--size--s)]">
                        <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                        <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                          <InternalLinkExample
                            label="Technical SEO Checklist"
                            href="/blog/technical-seo-checklist-2026"
                          />{" "}
                          for speed, crawlability, and indexing
                        </span>
                      </li>
                      <li className="flex items-start gap-[var(--size--s)]">
                        <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                        <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                          Keyword Research, covered in our{" "}
                          <InternalLinkExample
                            label="keyword research guide"
                            href="/blog/how-to-find-right-keywords-for-business"
                          />
                        </span>
                      </li>
                      <li className="flex items-start gap-[var(--size--s)]">
                        <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                        <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                          <InternalLinkExample
                            label="Local SEO Guide"
                            href="/blog/local-seo-guide-small-businesses"
                          />{" "}
                          for local businesses
                        </span>
                      </li>
                      <li className="flex items-start gap-[var(--size--s)]">
                        <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                        <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                          <InternalLinkExample
                            label="SEO vs Google Ads"
                            href="/blog/seo-vs-google-ads"
                          />
                        </span>
                      </li>
                      <li className="flex items-start gap-[var(--size--s)]">
                        <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                        <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                          <InternalLinkExample
                            label="Content Marketing"
                            href="/content-marketing"
                          />{" "}
                          services
                        </span>
                      </li>
                    </ul>
                  )}
                  {item.good && item.bad && (
                    <div className="mb-[var(--size--m)] flex flex-col gap-[var(--size--s)]">
                      <p className="rounded-[var(--radius--radius-lg)] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] text-[var(--brand--brand-charcoal)]">
                        <span className="font-semibold text-[var(--brand--brand-mint)]">
                          Good:{" "}
                        </span>
                        {item.good}
                      </p>
                      <p className="rounded-[var(--radius--radius-lg)] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] text-[var(--brand--brand-charcoal)]">
                        <span className="font-semibold text-red-500">Avoid: </span>
                        {item.bad}
                      </p>
                    </div>
                  )}
                  {item.example && (
                    <div className="mt-[var(--size--m)] rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--l)]">
                      <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                        {item.example.label}
                      </p>
                      {item.example.primary && (
                        <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                          Primary Keyword: {item.example.primary}
                        </p>
                      )}
                      {item.example.related && (
                        <>
                          <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                            Related Keywords:
                          </p>
                          <BulletList items={item.example.related} />
                        </>
                      )}
                      {!item.example.related && item.example.primary && (
                        <p className="text-[length:var(--typography--text-m)] italic text-[var(--brand--brand-charcoal)]">
                          {item.example.primary}
                        </p>
                      )}
                    </div>
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

          <ArticleSection id="common-mistakes" title="Common On-Page SEO Mistakes" alt>
            <ArticleParagraph>Avoid these common issues:</ArticleParagraph>
            <BulletList
              items={[
                "Keyword stuffing",
                "Duplicate content",
                "Missing title tags",
                "Multiple H1 headings",
                "Broken internal links",
                "Large, unoptimized images",
                "Thin or outdated content",
                "Slow page speed",
                "Ignoring mobile users",
                "Poor navigation",
              ]}
            />
            <ArticleParagraph>
              Regular audits can help identify and fix these problems. See our guide on{" "}
              <Link href="/blog/common-seo-mistakes-stop-ranking" className={INLINE_LINK}>
                common SEO mistakes that stop your website from ranking
              </Link>{" "}
              and{" "}
              <Link
                href="/blog/common-aeo-mistakes-businesses-make"
                className={INLINE_LINK}
              >
                common AEO mistakes businesses make
              </Link>
              .
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="checklist-summary" title="On-Page SEO Checklist Summary">
            <ArticleParagraph>
              Before publishing any page, confirm that you&apos;ve:
            </ArticleParagraph>
            <CheckList items={SUMMARY_ITEMS} />
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="Why Choose Let's Advertising for On-Page SEO?" alt>
            <ArticleParagraph>
              At Let&apos;s Advertising, we help businesses create websites and content that perform
              well in search engines and provide value to users.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our On-Page SEO services include:
            </p>
            <BulletList
              items={[
                "Comprehensive website audits",
                "Keyword research and content planning",
                "Title and meta optimization",
                "Content optimization",
                "Technical SEO recommendations",
                "Internal linking strategies",
                "Image optimization",
                "Performance monitoring and reporting",
              ]}
            />
            <ArticleParagraph>
              We focus on ethical, data-driven SEO strategies that support long-term growth and help
              businesses improve their online visibility.
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
              On-Page SEO remains one of the most important foundations of a successful digital
              marketing strategy. While search algorithms continue to evolve, the core principle
              remains the same: create content that is relevant, useful, well-structured, and easy
              to access.
            </ArticleParagraph>
            <ArticleParagraph>
              By following this checklist, you can improve your website&apos;s search performance,
              provide a better experience for your visitors, and build a stronger foundation for
              long-term organic growth.
            </ArticleParagraph>
            <ArticleParagraph>
              If you&apos;re looking to optimize your website or develop an SEO strategy tailored to
              your business, Let&apos;s Advertising is here to help you achieve measurable,
              sustainable results.
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
        title="Ready to Optimize Your Website for Search?"
        body="On-Page SEO is the foundation of every successful search strategy. At Let's Advertising, we help businesses audit, optimize, and improve their pages for better rankings and more organic traffic."
        subtext="Contact us today for a free SEO consultation and discover how our On-Page SEO services can help your business grow."
        ctaLabel="Get a Free SEO Consultation"
      />
    </>
  );
}
