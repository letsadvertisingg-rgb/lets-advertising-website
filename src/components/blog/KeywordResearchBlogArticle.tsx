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
  { id: "what-are-keywords", label: "What Are Keywords?" },
  { id: "why-keyword-research", label: "Why Keyword Research Matters" },
  { id: "step-1", label: "Step 1: Business Goals" },
  { id: "step-2", label: "Step 2: Think Like Customers" },
  { id: "step-3", label: "Step 3: Seed Keywords" },
  { id: "step-4", label: "Step 4: Search Intent" },
  { id: "step-5", label: "Step 5: Long-Tail Keywords" },
  { id: "step-6", label: "Step 6: Competitor Analysis" },
  { id: "step-7", label: "Step 7: Keyword Difficulty" },
  { id: "step-8", label: "Step 8: Keyword Variations" },
  { id: "step-9", label: "Step 9: Topic Clusters" },
  { id: "step-10", label: "Step 10: Match Keywords to Pages" },
  { id: "keyword-placement", label: "Keyword Placement" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "research-tools", label: "Research Tools" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const SEARCH_INTENT_TYPES = [
  {
    title: "Informational",
    description: "Users want to learn something.",
    examples: [
      { text: "What is SEO?", href: "/blog/what-is-seo-why-business-needs-it" },
      { text: "How does Google Ads work?", href: "/blog/seo-vs-google-ads" },
      { text: "SEO checklist", href: "/blog/on-page-seo-checklist-2026" },
    ],
  },
  {
    title: "Navigational",
    description: "Users are looking for a specific website or brand.",
    examples: [
      { text: "Let's Advertising", href: "/" },
      { text: "Google Search Console", href: null },
    ],
  },
  {
    title: "Commercial Investigation",
    description: "Users are comparing options before making a decision.",
    examples: [
      { text: "Best SEO agency", href: "/#services" },
      { text: "SEO vs Google Ads", href: "/blog/seo-vs-google-ads" },
      { text: "Top digital marketing companies", href: null },
    ],
  },
  {
    title: "Transactional",
    description: "Users are ready to take action.",
    examples: [
      { text: "Hire SEO company", href: "/#services" },
      { text: "SEO services in Delhi", href: "/#services" },
      { text: "Buy website SEO package", href: "/#services" },
    ],
  },
];

const TOPIC_CLUSTER_LINKS = [
  { label: "What is SEO?", href: "/blog/what-is-seo-why-business-needs-it" },
  { label: "On-Page SEO Checklist", href: "/blog/on-page-seo-checklist-2026" },
  { label: "Technical SEO Guide", href: "/blog/technical-seo-checklist-2026" },
  { label: "Local SEO Guide", href: "/blog/local-seo-guide-small-businesses" },
  { label: "Keyword Research Guide", href: "/blog/how-to-find-right-keywords-for-business" },
  { label: "SEO vs Google Ads", href: "/blog/seo-vs-google-ads" },
  { label: "Common SEO Mistakes", href: "/blog/common-seo-mistakes-stop-ranking" },
  { label: "Increase Organic Traffic", href: "/blog/how-to-increase-organic-traffic-without-ads" },
];

const RELATED_LINKS = [
  {
    label: "How AI is Transforming SEO: The Future of Search in 2026",
    href: "/blog/how-ai-is-transforming-seo-2026",
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
  {
    label: "SEO vs Google Ads: Which One Should You Choose?",
    href: "/blog/seo-vs-google-ads",
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
    label: "AEO Best Practices for Local Businesses",
    href: "/blog/aeo-best-practices-for-local-businesses",
  },
  { label: "Content Marketing Services", href: "/content-marketing" },
  { label: "SEO Services", href: "/#services" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["how-to-find-right-keywords-for-business"];

function StepSection({
  id,
  step,
  title,
  children,
  alt = false,
}: {
  id: string;
  step: string;
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[7rem] py-[var(--size--3xl)] max-[767px]:py-[var(--size--2xl)] ${alt ? "rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--2xl)] -mx-[var(--size--2xl)] max-[767px]:mx-0 max-[767px]:px-[var(--size--l)]" : "border-t border-[var(--border)]"}`}
    >
      <h2 className="mb-[var(--size--xl)] font-semibold text-[length:var(--typography--h3)] max-[991px]:text-[length:var(--typography--h3-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
        <span className="text-[var(--brand--brand-electric-blue)]">{step}:</span> {title}
      </h2>
      <div className="flex flex-col gap-[var(--size--l)]">{children}</div>
    </section>
  );
}

export function KeywordResearchBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="How to Find the Right Keywords for Your Business"
        category="SEO"
        date="July 11, 2026"
        readTime="14 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Every successful SEO strategy begins with one essential step: choosing the right
              keywords.
            </ArticleParagraph>
            <ArticleParagraph>
              You can have an attractive website, valuable content, and excellent products or
              services, but if you&apos;re targeting the wrong keywords, your ideal customers may
              never find you.
            </ArticleParagraph>
            <ArticleParagraph>
              Keyword research is more than simply identifying popular search terms. It&apos;s about
              understanding your audience, their search intent, and the language they use when
              looking for solutions online.
            </ArticleParagraph>
            <ArticleParagraph>
              In this guide, you&apos;ll learn how to find the right keywords for your business,
              avoid common mistakes, and build an SEO strategy that attracts qualified traffic and
              drives business growth. AI tools are also changing how keyword research works—see our{" "}
              <Link href="/blog/how-ai-is-transforming-seo-2026" className={INLINE_LINK}>
                guide to AI-powered SEO
              </Link>{" "}
              for the full picture.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-are-keywords" title="What Are Keywords?">
            <ArticleParagraph>
              Keywords are the words and phrases people type into search engines like Google when
              looking for information, products, or services.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              For example, if someone owns a bakery, potential keywords might include:
            </p>
            <BulletList
              items={[
                "Best bakery near me",
                "Birthday cake delivery",
                "Custom wedding cakes",
                "Fresh bread shop",
                "Bakery in Delhi",
              ]}
            />
            <ArticleParagraph>
              When your website is optimized for relevant keywords, search engines can better
              understand your content and display it to users searching for those terms.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="why-keyword-research" title="Why Keyword Research Is Important" alt>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Choosing the right keywords helps you:
            </p>
            <BulletList
              items={[
                "Reach your ideal audience",
                "Increase organic website traffic",
                "Improve search engine rankings",
                "Generate higher-quality leads",
                "Understand customer needs",
                "Create more relevant content",
                "Increase conversions",
              ]}
            />
            <ArticleParagraph>
              Without proper keyword research, even well-written content may fail to attract the
              right visitors.
            </ArticleParagraph>
          </ArticleSection>

          <StepSection id="step-1" step="Step 1" title="Understand Your Business Goals">
            <ArticleParagraph>
              Before researching keywords, define what you want your website to achieve.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Ask yourself:
            </p>
            <BulletList
              items={[
                "What products or services do we offer?",
                "Who are our ideal customers?",
                "What problems do we solve?",
                "Which services generate the most revenue?",
                "Which locations do we serve?",
              ]}
            />
            <ArticleParagraph>
              Your SEO strategy should support your business objectives, not just increase traffic.
            </ArticleParagraph>
          </StepSection>

          <StepSection id="step-2" step="Step 2" title="Think Like Your Customers" alt>
            <ArticleParagraph>
              Instead of focusing on industry jargon, think about the phrases your customers
              actually use.
            </ArticleParagraph>
            <div className="grid grid-cols-1 gap-[var(--size--l)] md:grid-cols-2">
              <div className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]">
                <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                  Instead of:
                </p>
                <p className="text-[length:var(--typography--text-m)] italic text-[var(--brand--brand-charcoal)]">
                  Enterprise Digital Transformation Solutions
                </p>
              </div>
              <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--brand--brand-electric-blue)] p-[var(--size--xl)]">
                <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-white/70">
                  People may search for:
                </p>
                <ul className="flex flex-col gap-[var(--size--s)]">
                  {[
                    "Digital marketing company",
                    "Website development services",
                    "SEO agency near me",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-[var(--size--s)]">
                      <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-white" />
                      <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-white">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ArticleParagraph>Use language your audience understands.</ArticleParagraph>
          </StepSection>

          <StepSection id="step-3" step="Step 3" title="Create a List of Seed Keywords">
            <ArticleParagraph>
              Seed keywords are broad topics related to your business.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              For a digital marketing agency, examples include:
            </p>
            <BulletList
              items={[
                "SEO Services",
                "Google Ads",
                "Website Development",
                "Local SEO",
                "Technical SEO",
                "Social Media Marketing",
                "Content Marketing",
                "AI Marketing",
                "E-commerce SEO",
              ]}
            />
            <ArticleParagraph>
              These broad terms become the starting point for discovering more specific keyword
              opportunities.
            </ArticleParagraph>
          </StepSection>

          <StepSection id="step-4" step="Step 4" title="Focus on Search Intent" alt>
            <ArticleParagraph>
              One of the biggest SEO mistakes is targeting keywords without understanding why someone
              is searching.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              There are four main types of search intent:
            </p>
            <div className="grid grid-cols-1 gap-[var(--size--l)] sm:grid-cols-2">
              {SEARCH_INTENT_TYPES.map((type) => (
                <div
                  key={type.title}
                  className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]"
                >
                  <h3 className="mb-[var(--size--s)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] text-[var(--brand--brand-electric-blue)]">
                    {type.title}
                  </h3>
                  <p className="mb-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    {type.description}
                  </p>
                  <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-medium text-[var(--brand--brand-charcoal)]">
                    Examples:
                  </p>
                  <ul className="flex flex-col gap-[var(--size--xs)]">
                    {type.examples.map((example) => (
                      <li key={example.text} className="text-[length:var(--typography--text-m)] text-[var(--brand--brand-charcoal)]">
                        {example.href ? (
                          <Link href={example.href} className={INLINE_LINK}>
                            {example.text}
                          </Link>
                        ) : (
                          example.text
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <ArticleParagraph>
              Targeting keywords that match user intent improves both rankings and conversions.
            </ArticleParagraph>
          </StepSection>

          <StepSection id="step-5" step="Step 5" title="Find Long-Tail Keywords">
            <ArticleParagraph>
              Long-tail keywords are longer, more specific search phrases.
            </ArticleParagraph>
            <div className="grid grid-cols-1 gap-[var(--size--l)] md:grid-cols-2">
              <div className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]">
                <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                  Instead of targeting:
                </p>
                <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                  SEO
                </p>
              </div>
              <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--xl)]">
                <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                  Target:
                </p>
                <BulletList
                  items={[
                    "Affordable SEO services for small businesses",
                    "Best SEO company in Delhi",
                    "How to improve website SEO",
                    "Local SEO services for restaurants",
                  ]}
                />
              </div>
            </div>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Long-tail keywords typically have:
            </p>
            <BulletList
              items={[
                "Lower competition",
                "Higher conversion rates",
                "Better user intent",
                "Easier ranking opportunities",
              ]}
            />
            <ArticleParagraph>
              They are especially valuable for new websites and niche businesses.
            </ArticleParagraph>
          </StepSection>

          <StepSection id="step-6" step="Step 6" title="Analyze Your Competitors" alt>
            <ArticleParagraph>
              Your competitors can provide valuable insights into keyword opportunities.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Review:
            </p>
            <BulletList
              items={[
                "Which keywords they rank for",
                "Their blog topics",
                "Their service pages",
                "Frequently asked questions",
                "Content gaps you can address",
              ]}
            />
            <ArticleParagraph>
              The goal isn&apos;t to copy competitors but to identify opportunities where you can
              provide more comprehensive and helpful content.
            </ArticleParagraph>
          </StepSection>

          <StepSection id="step-7" step="Step 7" title="Evaluate Keyword Difficulty">
            <ArticleParagraph>Not every keyword is worth targeting.</ArticleParagraph>
            <div className="flex flex-col gap-[var(--size--l)]">
              {[
                {
                  title: "Search Volume",
                  body: "How many people search for the keyword each month? Higher search volume can mean more potential traffic, but often comes with greater competition.",
                },
                {
                  title: "Keyword Difficulty",
                  body: "How challenging is it to rank for the keyword? New websites may benefit from targeting lower-competition terms before pursuing highly competitive keywords.",
                },
                {
                  title: "Relevance",
                  body: 'Ask yourself: "Does this keyword accurately reflect what my business offers?" A highly relevant keyword with moderate search volume often delivers better results than a popular but unrelated term.',
                },
              ].map((item) => (
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
          </StepSection>

          <StepSection id="step-8" step="Step 8" title="Use Keyword Variations" alt>
            <ArticleParagraph>
              Modern search engines understand related concepts and synonyms.
            </ArticleParagraph>
            <ArticleParagraph>
              Instead of repeating the same keyword over and over, naturally include related phrases
              such as:
            </ArticleParagraph>
            <BulletList
              items={[
                "SEO Services",
                "Search Engine Optimization",
                "Organic SEO",
                "Website SEO",
                "SEO Consultant",
                "SEO Agency",
                "Technical SEO",
                "Local SEO",
                "SEO Strategy",
              ]}
            />
            <ArticleParagraph>
              This approach makes your content more natural and comprehensive. See our{" "}
              <Link href="/blog/on-page-seo-checklist-2026" className={INLINE_LINK}>
                On-Page SEO Checklist
              </Link>{" "}
              for placement best practices.
            </ArticleParagraph>
          </StepSection>

          <StepSection id="step-9" step="Step 9" title="Organize Keywords by Topic">
            <ArticleParagraph>
              Rather than creating multiple pages targeting nearly identical keywords, group related
              terms into content clusters.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <p className="mb-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-charcoal)]">
                Main Topic: SEO
              </p>
              <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                Supporting Articles:
              </p>
              <div className="flex flex-wrap gap-[var(--size--s)]">
                {TOPIC_CLUSTER_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-[99999px] bg-white px-[var(--size--l)] py-[var(--size--s)] text-[length:var(--typography--text-s)] font-medium text-[var(--brand--brand-charcoal)] no-underline hover:bg-[var(--brand--brand-electric-blue)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <ArticleParagraph>
              This structure helps establish topical authority and improves internal linking.
            </ArticleParagraph>
          </StepSection>

          <StepSection id="step-10" step="Step 10" title="Match Keywords to the Right Pages" alt>
            <ArticleParagraph>Assign keywords based on the purpose of each page.</ArticleParagraph>
            <div className="overflow-x-auto rounded-[var(--radius--radius-xxl)] border border-[var(--border)]">
              <table className="w-full min-w-[28rem] border-collapse text-left">
                <thead>
                  <tr className="bg-[var(--neutral--neutral-grey-200)]">
                    <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold">
                      Page Type
                    </th>
                    <th className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold">
                      Example Keywords
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Homepage", "Digital Marketing Agency"],
                    ["Service Page", "SEO Services, Local SEO Services"],
                    ["Blog", "How to Find the Right Keywords, SEO Tips, Technical SEO Checklist"],
                  ].map(([page, keywords]) => (
                    <tr key={page} className="bg-white even:bg-[var(--neutral--neutral-grey-200)]">
                      <td className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                        {page}
                      </td>
                      <td className="border-b border-[var(--border)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                        {keywords}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ArticleParagraph>
              Avoid targeting the same primary keyword on multiple pages, as this can create keyword
              cannibalization.
            </ArticleParagraph>
          </StepSection>

          <ArticleSection id="keyword-placement" title="Best Practices for Keyword Placement">
            <ArticleParagraph>
              Once you&apos;ve selected your keywords, use them naturally in:
            </ArticleParagraph>
            <BulletList
              items={[
                "Page title",
                "Meta description",
                "URL",
                "H1 heading",
                "First paragraph",
                "H2 and H3 headings (where relevant)",
                "Image alt text",
                "Internal links",
                "Conclusion",
              ]}
            />
            <ArticleParagraph>
              Remember: prioritize readability over keyword repetition. Our{" "}
              <Link href="/blog/on-page-seo-checklist-2026" className={INLINE_LINK}>
                On-Page SEO Checklist
              </Link>{" "}
              covers each of these elements in detail.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="common-mistakes" title="Common Keyword Research Mistakes" alt>
            <ArticleParagraph>Avoid these common pitfalls:</ArticleParagraph>
            <BulletList
              items={[
                "Choosing keywords based only on search volume",
                "Ignoring search intent",
                "Targeting keywords unrelated to your services",
                "Overusing the same keyword",
                "Forgetting local keywords",
                "Creating duplicate content for similar terms",
                "Not updating keyword research regularly",
              ]}
            />
            <ArticleParagraph>
              Keyword research should evolve alongside your business and audience.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="research-tools" title="Free and Paid Keyword Research Tools">
            <ArticleParagraph>
              To identify valuable keyword opportunities, consider using trusted SEO tools such as:
            </ArticleParagraph>
            <div className="grid grid-cols-1 gap-[var(--size--l)] md:grid-cols-2">
              <div className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]">
                <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                  Free Tools
                </h3>
                <BulletList
                  items={[
                    "Google Keyword Planner",
                    "Google Search Console",
                    "Google Autocomplete",
                    "Google Trends",
                    'Google "People Also Ask"',
                  ]}
                />
              </div>
              <div className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--xl)]">
                <h3 className="mb-[var(--size--m)] font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                  Paid Tools
                </h3>
                <BulletList
                  items={["Ahrefs", "SEMrush", "Moz Pro", "Ubersuggest", "SE Ranking"]}
                />
              </div>
            </div>
            <ArticleParagraph>
              These tools can help you discover keyword ideas, estimate search demand, analyze
              competition, and monitor performance. Pair your research with{" "}
              <Link href="/analytics-tracking" className={INLINE_LINK}>
                analytics and tracking
              </Link>{" "}
              to measure results over time.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="Why Choose Let's Advertising for Keyword Research?" alt>
            <ArticleParagraph>
              At Let&apos;s Advertising, we believe successful SEO begins with a well-planned keyword
              strategy.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our keyword research services include:
            </p>
            <BulletList
              items={[
                "Business-focused keyword research",
                "Competitor analysis",
                "Search intent mapping",
                "Local keyword targeting",
                "Content strategy planning",
                "Keyword clustering",
                "SEO content optimization",
                "Ongoing performance tracking",
              ]}
            />
            <ArticleParagraph>
              Instead of focusing only on traffic, we identify keywords that align with your business
              goals and attract visitors who are most likely to become customers.
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
              Finding the right keywords isn&apos;t about chasing the highest search volume. It&apos;s
              about understanding your audience and creating content that answers their questions and
              meets their needs.
            </ArticleParagraph>
            <ArticleParagraph>
              By focusing on search intent, relevance, long-tail opportunities, and a well-organized
              content strategy, you can improve your website&apos;s visibility, attract qualified
              traffic, and build long-term authority in your industry.
            </ArticleParagraph>
            <ArticleParagraph>
              Whether you&apos;re launching a new website or refining an existing SEO strategy,
              effective keyword research is one of the most valuable investments you can make.
            </ArticleParagraph>
            <ArticleParagraph>
              At Let&apos;s Advertising, we help businesses uncover the keywords that matter most,
              turning search traffic into meaningful business growth through data-driven SEO
              strategies.
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
        title="Ready to Find the Right Keywords for Your Business?"
        body="Great SEO starts with the right keywords. At Let's Advertising, we research, map, and prioritize keywords that align with your business goals and attract customers ready to buy."
        subtext="Contact us today for a free keyword research consultation and discover which search terms can drive real growth for your business."
        ctaLabel="Get a Free Keyword Research Consultation"
      />
    </>
  );
}
