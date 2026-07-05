"use client";

import Link from "next/link";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";
import {
  ArticleParagraph,
  ArticleSection,
  BlogArticleCta,
  BlogArticleHero,
  BulletList,
} from "@/components/blog/BlogArticleParts";
import type { TocItem } from "@/components/blog/TableOfContents";

const TOC_ITEMS: TocItem[] = [
  { id: "what-is-aeo", label: "What Is AEO?" },
  { id: "why-aeo-matters", label: "Why AEO Matters Locally" },
  { id: "answer-questions", label: "1. Answer Customer Questions" },
  { id: "conversational-language", label: "2. Conversational Language" },
  { id: "faq-section", label: "3. Create an FAQ Section" },
  { id: "local-info", label: "4. Local Business Info" },
  { id: "location-content", label: "5. Location Content" },
  { id: "credibility", label: "6. Experience & Credibility" },
  { id: "website-performance", label: "7. Website Performance" },
  { id: "structured-data", label: "8. Structured Data" },
  { id: "customer-reviews", label: "9. Customer Reviews" },
  { id: "keep-updated", label: "10. Keep Content Updated" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "future-local-search", label: "Future of Local Search" },
  { id: "lets-advertising", label: "How We Can Help" },
  { id: "conclusion", label: "Conclusion" },
];

const BEST_PRACTICES = [
  {
    id: "answer-questions",
    num: "1",
    title: "Answer Real Customer Questions",
    intro: "The foundation of AEO is answering the questions your customers are already asking.",
    body: "Think about the conversations you have every day. Examples include:",
    items: [
      "What services do you offer?",
      "How much does it cost?",
      "Do you provide free consultations?",
      "What areas do you serve?",
      "How long does the project take?",
      "Why should customers choose your business?",
    ],
    closing:
      "Create dedicated pages or blog posts that answer these questions clearly and thoroughly.",
  },
  {
    id: "conversational-language",
    num: "2",
    title: "Write in Natural, Conversational Language",
    intro:
      "AI search is designed to understand how people naturally speak. Instead of writing only for search engines, write the way you would explain something to a customer.",
    example: {
      instead: "Best SEO Company Delhi Affordable SEO Services",
      write: "Looking for affordable SEO services in Delhi? Here's how to choose the right digital marketing agency for your business.",
    },
    closing: "Natural language makes your content more useful for both readers and AI systems.",
  },
  {
    id: "faq-section",
    num: "3",
    title: "Create an FAQ Section",
    intro:
      "Frequently Asked Questions are one of the easiest ways to improve AEO. A strong FAQ page should answer common customer questions using clear, direct language.",
    body: "Include questions like:",
    items: [
      "What industries do you serve?",
      "What are your business hours?",
      "How can customers contact you?",
      "Do you offer online consultations?",
      "How long have you been in business?",
    ],
    closing: "Each answer should be concise, accurate, and easy to understand.",
  },
  {
    id: "local-info",
    num: "4",
    title: "Optimize Your Local Business Information",
    intro:
      "AI systems rely on accurate business information to recommend local companies. Ensure your website clearly displays:",
    items: [
      "Business name",
      "Address",
      "Phone number",
      "Email address",
      "Service areas",
      "Business hours",
      "Contact page",
      "Maps and directions",
    ],
    closing:
      "Keep this information consistent across your website and online business listings.",
  },
  {
    id: "location-content",
    num: "5",
    title: "Publish Location-Specific Content",
    intro:
      "If your business serves multiple cities or regions, create dedicated pages for each service area. For example:",
    items: [
      "SEO Services in Dehradun",
      "Website Design in Haridwar",
      "Digital Marketing Agency in Rishikesh",
      "Local SEO Services in Roorkee",
    ],
    closing:
      "Location-specific content helps AI understand where your business operates and improves your visibility for local searches.",
  },
  {
    id: "credibility",
    num: "6",
    title: "Demonstrate Experience and Credibility",
    intro: "AI-powered search platforms prefer content from trustworthy businesses.",
    body: "Strengthen your credibility by including:",
    items: [
      "Customer testimonials",
      "Case studies",
      "Success stories",
      "Team introductions",
      "Certifications",
      "Awards",
      "Years of experience",
    ],
    closing: "Real examples build confidence for both users and AI systems.",
  },
  {
    id: "website-performance",
    num: "7",
    title: "Improve Website Performance",
    intro: "Website performance remains an important ranking factor. Make sure your website:",
    items: [
      "Loads quickly",
      "Works well on mobile devices",
      "Uses HTTPS security",
      "Has clear navigation",
      "Includes descriptive page titles",
      "Avoids broken links",
    ],
    closing:
      "A fast, user-friendly website improves both customer experience and search visibility.",
  },
  {
    id: "structured-data",
    num: "8",
    title: "Use Structured Data (Schema Markup)",
    intro:
      "Structured data helps search engines understand your website more effectively. Local businesses should consider implementing schema for:",
    items: [
      "Local Business",
      "Organization",
      "FAQs",
      "Reviews",
      "Services",
      "Products",
      "Contact Information",
    ],
    closing:
      "Schema markup increases the chances of your content being used in rich search results and AI-generated answers.",
  },
  {
    id: "customer-reviews",
    num: "9",
    title: "Encourage Customer Reviews",
    intro:
      "Customer reviews are one of the strongest trust signals for local businesses. Encourage satisfied customers to leave honest reviews and respond professionally to feedback.",
    closing:
      "Positive reviews help establish credibility and can influence how your business is perceived by both users and search platforms.",
  },
  {
    id: "keep-updated",
    num: "10",
    title: "Keep Your Content Updated",
    intro: "Outdated information reduces trust. Review your website regularly to update:",
    items: [
      "Service information",
      "Pricing",
      "Contact details",
      "Business hours",
      "Industry trends",
      "Blog articles",
    ],
    closing: "Fresh content signals that your business is active and reliable.",
  },
];

const RELATED_LINKS = [
  {
    label: "What Is Answer Engine Optimization (AEO)?",
    href: "/blog/what-is-answer-engine-optimization-aeo",
  },
  {
    label: "How to Get Featured in AI Search Results",
    href: "/blog/how-to-get-your-business-featured-in-ai-search-results",
  },
  {
    label: "How to Optimize for ChatGPT & Google AI Overviews",
    href: "/blog/optimize-website-for-chatgpt-google-ai-overviews",
  },
  { label: "AEO Services", href: "/aeo-services" },
  { label: "SEO Services", href: "/#services" },
  { label: "Content Marketing Services", href: "/content-marketing" },
];

export function LocalAeoBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="AEO Best Practices for Local Businesses: How to Get Found in AI Search"
        category="Answer Engine Optimization"
        date="July 6, 2026"
        readTime="11 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              The way customers search for local businesses is changing. Instead of typing simple
              keywords into search engines, people are asking conversational questions like:
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <BulletList
                items={[
                  "Which is the best digital marketing agency near me?",
                  "Who offers affordable website design in my city?",
                  "What is the best restaurant open right now?",
                ]}
              />
            </div>
            <ArticleParagraph>
              AI-powered search engines and virtual assistants now provide direct answers instead
              of just a list of websites. This shift has introduced a new digital marketing strategy
              called Answer Engine Optimization (AEO).
            </ArticleParagraph>
            <ArticleParagraph>
              For local businesses, AEO is becoming just as important as traditional SEO. If your
              business can provide clear, trustworthy answers to customer questions, you&apos;re more
              likely to appear in AI-generated responses and voice search results.
            </ArticleParagraph>
            <ArticleParagraph>
              In this guide, we&apos;ll explain what AEO is, why it matters, and the best practices
              local businesses can use to improve their visibility.
            </ArticleParagraph>
          </div>

          <ArticleSection id="what-is-aeo" title="What Is Answer Engine Optimization (AEO)?">
            <ArticleParagraph>
              Answer Engine Optimization (AEO) is the process of creating and structuring content
              so AI-powered search engines, voice assistants, and answer engines can easily
              understand and present your information.
            </ArticleParagraph>
            <ArticleParagraph>
              Unlike traditional SEO, which focuses on improving rankings in search results, AEO
              focuses on helping your content become the answer users receive when they ask a
              question.
            </ArticleParagraph>
            <ArticleParagraph>
              As AI search becomes more common, businesses that optimize for answers—not just
              rankings—will gain a competitive advantage.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="why-aeo-matters" title="Why AEO Matters for Local Businesses" alt>
            <ArticleParagraph>
              Local customers often have immediate needs. They want quick answers about nearby
              products and services, including:
            </ArticleParagraph>
            <BulletList
              items={[
                "Business hours",
                "Contact information",
                "Pricing",
                "Service availability",
                "Customer reviews",
                "Directions",
                "Frequently asked questions",
              ]}
            />
            <ArticleParagraph>
              If AI search engines can easily find and understand this information on your website,
              your business has a better chance of being recommended.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              For local businesses, this can lead to:
            </p>
            <BulletList
              items={[
                "More qualified leads",
                "Higher local visibility",
                "Increased website traffic",
                "Better customer trust",
                "More phone calls and inquiries",
                "Higher conversion rates",
              ]}
            />
          </ArticleSection>

          {BEST_PRACTICES.map((practice, index) => (
            <ArticleSection
              key={practice.id}
              id={practice.id}
              title={`${practice.num}. ${practice.title}`}
              alt={index % 2 === 0}
            >
              <ArticleParagraph>{practice.intro}</ArticleParagraph>
              {practice.body && (
                <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
                  {practice.body}
                </p>
              )}
              {practice.example && (
                <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
                  <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                    Instead of:
                  </p>
                  <p className="mb-[var(--size--l)] rounded-[var(--radius--radius-lg)] bg-white px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] italic text-[var(--brand--brand-charcoal)]">
                    &ldquo;{practice.example.instead}&rdquo;
                  </p>
                  <p className="mb-[var(--size--s)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                    Write:
                  </p>
                  <p className="rounded-[var(--radius--radius-lg)] bg-[var(--brand--brand-electric-blue)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] text-white">
                    &ldquo;{practice.example.write}&rdquo;
                  </p>
                </div>
              )}
              {practice.items && <BulletList items={practice.items} />}
              <ArticleParagraph>{practice.closing}</ArticleParagraph>
            </ArticleSection>
          ))}

          <ArticleSection id="common-mistakes" title="Common AEO Mistakes to Avoid">
            <ArticleParagraph>
              Many businesses still focus only on traditional SEO. Avoid these common mistakes:
            </ArticleParagraph>
            <BulletList
              items={[
                "Keyword stuffing",
                "Publishing thin or duplicate content",
                "Ignoring customer questions",
                "Using outdated business information",
                "Neglecting mobile optimization",
                "Forgetting to update old content",
                "Creating content only for search engines instead of users",
              ]}
            />
            <ArticleParagraph>
              The best AEO strategy is to provide clear, accurate, and genuinely helpful information.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="future-local-search" title="The Future of Local Search" alt>
            <ArticleParagraph>
              As AI-powered search continues to evolve, customers will increasingly rely on
              conversational search and direct answers. Businesses that invest in AEO today will be
              better prepared for this shift.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] border border-[var(--border)] bg-white p-[var(--size--2xl)]">
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                Instead of asking, &ldquo;How do I rank first on Google?&rdquo; businesses should
                ask, &ldquo;How can I become the most trusted answer for my customers?&rdquo;
              </p>
              <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] font-semibold leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                That mindset will shape the future of digital marketing.
              </p>
            </div>
          </ArticleSection>

          <ArticleSection id="lets-advertising" title="How Let's Advertising Can Help">
            <ArticleParagraph>
              At Let&apos;s Advertising, we help local businesses adapt to the changing world of
              search through modern digital marketing strategies.
            </ArticleParagraph>
            <p className="text-[length:var(--typography--text-m)] font-medium text-[var(--brand--brand-charcoal)]">
              Our services include:
            </p>
            <BulletList
              items={[
                "Local SEO",
                "Answer Engine Optimization (AEO)",
                "AI Search Optimization",
                "Content Marketing",
                "Website Development",
                "Technical SEO",
                "Google Business Profile Optimization",
                "Performance Analytics",
              ]}
            />
            <ArticleParagraph>
              We create strategies that help businesses improve visibility, build trust, and connect
              with customers across both traditional search engines and AI-powered search platforms.
            </ArticleParagraph>
            <Link
              href="/aeo-services"
              className="inline-flex text-[length:var(--typography--text-m)] font-semibold text-[var(--brand--brand-electric-blue)] no-underline hover:underline"
            >
              Explore our local AEO services →
            </Link>
          </ArticleSection>

          <ArticleSection id="conclusion" title="Conclusion" alt>
            <ArticleParagraph>
              Answer Engine Optimization is no longer just a trend—it&apos;s becoming an essential
              part of digital marketing for local businesses. As more people use AI assistants and
              conversational search, businesses that provide clear, trustworthy, and well-structured
              information will have a better chance of being discovered.
            </ArticleParagraph>
            <ArticleParagraph>
              By answering real customer questions, optimizing your website, strengthening your local
              presence, and consistently publishing valuable content, you can improve your visibility
              in both traditional search results and AI-generated answers.
            </ArticleParagraph>
            <div className="rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]">
              <p className="text-[length:var(--typography--text-m)] font-semibold leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                The future of local search belongs to businesses that focus on helping customers
                first. When you become the best answer to their questions, better visibility,
                stronger trust, and sustainable growth naturally follow.
              </p>
            </div>
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
        title="Ready to Get Your Local Business Found in AI Search?"
        body="Let's Advertising helps local businesses optimize for AI-powered search, voice assistants, and traditional local SEO."
        subtext="Contact us today for a free consultation and discover how AEO can help your business attract more local customers."
        ctaLabel="Get a Free Local AEO Consultation"
      />
    </>
  );
}
