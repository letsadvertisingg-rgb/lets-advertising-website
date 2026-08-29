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
  { id: "what-is", label: "What Is AI Ad Targeting?" },
  { id: "beyond-demographics", label: "Beyond Demographics" },
  { id: "predictive", label: "Predictive Targeting" },
  { id: "contextual", label: "Contextual Targeting" },
  { id: "expansion", label: "Audience Expansion" },
  { id: "real-time", label: "Real-Time Learning" },
  { id: "privacy", label: "Privacy" },
  { id: "quality", label: "Audience Quality" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Conclusion" },
];

const RELATED_LINKS = [
  { label: "AI Advertising Complete Guide", href: "/blog/ai-advertising-complete-guide" },
  { label: "AI Transforming Digital Ads 2026", href: "/blog/how-ai-is-transforming-digital-advertising-2026" },
  { label: "AI-Powered PPC Advertising", href: "/blog/ai-powered-ppc-advertising" },
  { label: "AI Programmatic Advertising", href: "/blog/ai-programmatic-advertising" },
  { label: "AI-Powered Ad Creative", href: "/blog/ai-powered-ad-creative" },
  { label: "AI Advertising Automation", href: "/blog/ai-advertising-automation" },
  { label: "AI Ad Optimization & ROAS", href: "/blog/ai-ad-optimization-roas" },
  { label: "Generative AI Advertising", href: "/blog/generative-ai-advertising" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["ai-ad-targeting"];

export function AiAdTargetingBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="AI Ad Targeting: How Artificial Intelligence Finds the Right Audience"
        category="AI Advertising"
        date="August 29, 2026"
        readTime="9 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              The success of an advertisement depends heavily on who sees it. AI ad targeting is helping businesses identify audiences using combinations of behavioral, contextual, geographic, demographic, and campaign signals.
            </ArticleParagraph>
            <ArticleParagraph>
              Instead of relying only on broad audience definitions, advertisers can use machine learning to discover patterns associated with engagement and conversion.
            </ArticleParagraph>
          </div>
          <ArticleSection id="what-is" title="What Is AI Ad Targeting?">
            <ArticleParagraph>
              AI ad targeting uses artificial intelligence and predictive models to evaluate advertising signals and determine which users or environments are likely to be relevant. The system can learn from campaign outcomes and refine its predictions over time.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="beyond-demographics" title="Beyond Demographics" alt>
            <ArticleParagraph>
              Demographics remain useful, but they do not tell the entire story. Two people with the same age and location can have completely different purchase intent.
            </ArticleParagraph>
            <ArticleParagraph>
              AI can analyze behavior and contextual signals to create more nuanced predictions.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="predictive" title="Predictive Targeting">
            <ArticleParagraph>
              Predictive targeting estimates the likelihood of an action, such as clicking, registering, purchasing, or becoming a qualified lead. These predictions can help media systems prioritize opportunities that appear more valuable.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="contextual" title="Contextual AI Targeting" alt>
            <ArticleParagraph>
              Contextual intelligence evaluates the content surrounding an advertisement. This approach can help brands appear next to relevant topics without relying solely on individual user profiles.
            </ArticleParagraph>
            <ArticleParagraph>
              It is particularly useful for content-driven awareness campaigns.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="expansion" title="Audience Expansion">
            <ArticleParagraph>
              AI can help advertisers find new prospects who resemble high-value customers or demonstrate similar behavioral patterns.
            </ArticleParagraph>
            <ArticleParagraph>
              Expansion should be measured carefully because a larger audience is not automatically a better audience.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="real-time" title="Real-Time Learning" alt>
            <ArticleParagraph>
              Campaign conditions change continuously. AI can learn from new conversion signals and adapt delivery accordingly. This speed is one of the main advantages of machine learning over manual audience management.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="privacy" title="Privacy and Responsible Targeting">
            <ArticleParagraph>
              AI targeting should be designed around applicable privacy laws, consent requirements, platform rules, and consumer expectations. Advertisers should use appropriate data sources and avoid strategies that create unnecessary privacy risks.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="quality" title="Measuring Audience Quality" alt>
            <ArticleParagraph>
              Audience performance should be measured using business outcomes rather than clicks alone. Qualified leads, purchases, revenue, conversion rate, CPA, and customer value can provide a more accurate view of audience quality.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="final-thoughts" title="Conclusion">
            <ArticleParagraph>
              AI audience targeting can make advertising more relevant and efficient when it is supported by quality data and a clear business strategy.
            </ArticleParagraph>
            <ArticleParagraph>
              The goal is not to automate the definition of the customer. The goal is to use AI to identify valuable opportunities within a well-defined strategy.
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
        title="Want More Relevant Audiences?"
        body="Use AI to identify valuable opportunities within a well-defined audience strategy—not to replace strategic customer definition."
        ctaLabel="Improve Your Ad Targeting"
      />
    </>
  );
}
