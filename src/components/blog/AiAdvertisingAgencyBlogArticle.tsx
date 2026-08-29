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
  { id: "what-is", label: "What Is an AI Advertising Agency?" },
  { id: "objectives", label: "Business Objectives" },
  { id: "capabilities", label: "Evaluate AI Capabilities" },
  { id: "measurement", label: "Measurement & Data" },
  { id: "expertise", label: "Human Expertise" },
  { id: "transparency", label: "Transparency" },
  { id: "red-flags", label: "Red Flags" },
  { id: "questions", label: "Questions to Ask" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Conclusion" },
];

const RELATED_LINKS = [
  { label: "AI Advertising Complete Guide", href: "/blog/ai-advertising-complete-guide" },
  { label: "AI Transforming Digital Ads 2026", href: "/blog/how-ai-is-transforming-digital-advertising-2026" },
  { label: "AI-Powered PPC Advertising", href: "/blog/ai-powered-ppc-advertising" },
  { label: "AI Ad Targeting", href: "/blog/ai-ad-targeting" },
  { label: "AI Programmatic Advertising", href: "/blog/ai-programmatic-advertising" },
  { label: "AI-Powered Ad Creative", href: "/blog/ai-powered-ad-creative" },
  { label: "AI Advertising Automation", href: "/blog/ai-advertising-automation" },
  { label: "AI Ad Optimization & ROAS", href: "/blog/ai-ad-optimization-roas" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["ai-advertising-agency"];

export function AiAdvertisingAgencyBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="AI Advertising Agency: How to Choose the Right AI-Powered Advertising Partner"
        category="AI Advertising"
        date="August 29, 2026"
        readTime="10 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              As artificial intelligence becomes a bigger part of advertising, businesses are looking for agencies that understand both AI and media performance.
            </ArticleParagraph>
            <ArticleParagraph>
              Choosing an AI advertising agency should involve more than asking whether the agency uses AI. The important question is whether AI is being used to create measurable business value.
            </ArticleParagraph>
          </div>
          <ArticleSection id="what-is" title="What Is an AI Advertising Agency?">
            <ArticleParagraph>
              An AI advertising agency combines advertising strategy with artificial intelligence, automation, machine learning, analytics, and creative technology.
            </ArticleParagraph>
            <ArticleParagraph>
              Services may include AI audience targeting, AI PPC, programmatic advertising, creative automation, predictive analytics, campaign optimization, and reporting.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="objectives" title="Start With Business Objectives" alt>
            <ArticleParagraph>
              A strong agency begins with the business problem. The objective might be more qualified leads, lower acquisition costs, higher online revenue, stronger brand awareness, or improved operational efficiency.
            </ArticleParagraph>
            <ArticleParagraph>
              AI should be selected because it supports that objective.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="capabilities" title="Evaluate AI Capabilities">
            <ArticleParagraph>
              Ask how the agency uses AI for audience analysis, creative development, bidding, optimization, reporting, and automation. The agency should be able to explain what is automated and what remains under human control.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="measurement" title="Measurement and Data" alt>
            <ArticleParagraph>
              AI requires reliable data. A capable agency should have a clear approach to conversion tracking, data quality, attribution, reporting, and privacy.
            </ArticleParagraph>
            <ArticleParagraph>
              If the inputs are poor, advanced technology will not produce reliable conclusions.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="expertise" title="Human Expertise">
            <ArticleParagraph>
              AI can analyze data and generate content, but experienced professionals provide strategic judgment. The right agency combines AI capabilities with media expertise, creative thinking, customer psychology, brand knowledge, and business understanding.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="transparency" title="Transparency" alt>
            <ArticleParagraph>
              Businesses should understand how campaigns are managed, how performance is measured, what data is used, and how automated decisions are reviewed. Transparency helps build a stronger long-term partnership.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="red-flags" title="Red Flags">
            <ArticleParagraph>
              Be cautious of agencies that promise guaranteed AI results, describe AI as a magic solution, cannot explain their measurement process, or use automation without meaningful strategic oversight.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="questions" title="Questions to Ask Before Hiring" alt>
            <ArticleParagraph>
              Ask which AI tools and workflows are used, which campaign activities are automated, how results are measured, how creative is reviewed, how privacy is handled, and how the agency responds when automated performance declines.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="final-thoughts" title="Conclusion">
            <ArticleParagraph>
              The right AI advertising agency does more than add AI tools to traditional advertising. It builds practical workflows in which artificial intelligence improves targeting, creative, optimization, automation, and analysis while experienced professionals remain responsible for strategy and accountability.
            </ArticleParagraph>
            <ArticleParagraph>
              Our AI advertising services are designed around that balance.
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
        title="Looking for an AI-Powered Advertising Partner?"
        body="We build practical AI workflows for targeting, creative, optimization, and analysis—while experienced professionals stay accountable for strategy."
        ctaLabel="Talk to Let's Advertising"
      />
    </>
  );
}
