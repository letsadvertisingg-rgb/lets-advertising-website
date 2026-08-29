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
  { id: "what-is", label: "What Is AI Ad Creative?" },
  { id: "copywriting", label: "AI Copywriting" },
  { id: "images", label: "AI Images" },
  { id: "video", label: "AI Video" },
  { id: "personalization", label: "Personalization" },
  { id: "testing", label: "Creative Testing" },
  { id: "governance", label: "Brand Governance" },
  { id: "human", label: "Human Creativity" },
  { id: "faq", label: "FAQ" },
  { id: "final-thoughts", label: "Conclusion" },
];

const RELATED_LINKS = [
  { label: "AI Advertising Complete Guide", href: "/blog/ai-advertising-complete-guide" },
  { label: "AI Transforming Digital Ads 2026", href: "/blog/how-ai-is-transforming-digital-advertising-2026" },
  { label: "AI-Powered PPC Advertising", href: "/blog/ai-powered-ppc-advertising" },
  { label: "AI Ad Targeting", href: "/blog/ai-ad-targeting" },
  { label: "AI Programmatic Advertising", href: "/blog/ai-programmatic-advertising" },
  { label: "AI Advertising Automation", href: "/blog/ai-advertising-automation" },
  { label: "AI Ad Optimization & ROAS", href: "/blog/ai-ad-optimization-roas" },
  { label: "Generative AI Advertising", href: "/blog/generative-ai-advertising" },
];

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["ai-powered-ad-creative"];

export function AiAdCreativeBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="AI-Powered Ad Creative: How to Create Better Ads With Artificial Intelligence"
        category="AI Advertising"
        date="August 29, 2026"
        readTime="9 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Creative can determine whether an advertisement is noticed, understood, and remembered. AI-powered ad creative is changing how advertisers brainstorm concepts, develop copy, produce variations, and analyze performance.
            </ArticleParagraph>
            <ArticleParagraph>
              The biggest benefit is creative speed: teams can explore more ideas and test them systematically.
            </ArticleParagraph>
          </div>
          <ArticleSection id="what-is" title="What Is AI Ad Creative?">
            <ArticleParagraph>
              AI ad creative refers to advertising content created or optimized with artificial intelligence. It can include headlines, descriptions, scripts, storyboards, image concepts, video ideas, layouts, and variations.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="copywriting" title="AI Copywriting" alt>
            <ArticleParagraph>
              Generative AI can produce multiple versions of a message in seconds. Advertisers can ask for different tones, value propositions, audience angles, or calls to action. Human review should always verify claims and maintain brand voice.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="images" title="AI Images">
            <ArticleParagraph>
              AI image generation can help teams explore visual directions quickly. It is useful for concepting and experimentation, but final assets should meet brand, platform, rights, and quality requirements.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="video" title="AI Video Advertising" alt>
            <ArticleParagraph>
              AI can support scripts, storyboards, scene concepts, voiceover drafts, and editing workflows. This can reduce production time and create more options for testing.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="personalization" title="Creative Personalization">
            <ArticleParagraph>
              AI can help tailor creative messages to different audience groups. A new prospect may need a problem-focused message, while an existing customer may respond to a product update or loyalty offer.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="testing" title="Creative Testing" alt>
            <ArticleParagraph>
              AI increases the number of creative variations available for testing. Testing should remain structured. Advertisers need to know what variable is changing and which business outcome is being evaluated.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="governance" title="Brand Governance">
            <ArticleParagraph>
              AI-generated content can sometimes be inaccurate, inconsistent, or unsuitable for a brand. Establishing brand guidelines, approval workflows, factual review, and compliance checks is essential.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="human" title="Human Creativity" alt>
            <ArticleParagraph>
              AI is an accelerator, not a substitute for creative strategy. Humans provide emotional insight, cultural understanding, positioning, storytelling, and judgment. AI works best when creative professionals direct the system.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="final-thoughts" title="Conclusion">
            <ArticleParagraph>
              AI ad creative can help businesses produce and test more advertising ideas at greater speed.
            </ArticleParagraph>
            <ArticleParagraph>
              The winning formula is AI-assisted production combined with human strategy, brand discipline, testing, and performance analysis.
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
        title="Want Faster, Stronger Ad Creative?"
        body="Combine AI-assisted production with human strategy, brand discipline, testing, and performance analysis."
        ctaLabel="Accelerate Your Ad Creative"
      />
    </>
  );
}
