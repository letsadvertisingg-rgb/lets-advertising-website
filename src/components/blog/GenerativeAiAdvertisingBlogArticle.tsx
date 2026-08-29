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
  { id: "what-is", label: "What Is Generative AI Advertising?" },
  { id: "copy", label: "AI Ad Copywriting" },
  { id: "images", label: "AI-Generated Images" },
  { id: "video", label: "AI Video" },
  { id: "personalization", label: "Personalization" },
  { id: "testing", label: "Testing at Scale" },
  { id: "risks", label: "Risks" },
  { id: "workflow", label: "Responsible Workflow" },
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

const FAQ_ITEMS = BLOG_FAQ_BY_SLUG["generative-ai-advertising"];

export function GenerativeAiAdvertisingBlogArticle() {
  return (
    <>
      <BlogArticleHero
        title="Generative AI Advertising: How AI Is Changing Ad Copy, Images and Video"
        category="AI Advertising"
        date="August 29, 2026"
        readTime="9 min read"
        author="Let's Advertising"
      />

      <section className="pt-[var(--size--5xl)] pb-[var(--size--2xl)] max-[767px]:pt-[var(--size--3xl)]">
        <BlogArticleLayout toc={TOC_ITEMS}>
          <div className="flex flex-col gap-[var(--size--l)] pb-[var(--size--l)]">
            <ArticleParagraph>
              Generative AI is creating a major shift in advertising production. Businesses can now use artificial intelligence to develop advertising copy, images, video concepts, scripts, and creative variations much faster than traditional workflows allow.
            </ArticleParagraph>
            <ArticleParagraph>
              This creates new opportunities for experimentation and personalization.
            </ArticleParagraph>
          </div>
          <ArticleSection id="what-is" title="What Is Generative AI Advertising?">
            <ArticleParagraph>
              Generative AI advertising is the use of generative artificial intelligence to create or assist with advertising content. The technology can produce text, visual concepts, scripts, storyboards, and other creative inputs.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="copy" title="AI Ad Copywriting" alt>
            <ArticleParagraph>
              Generative AI can produce many versions of headlines, descriptions, hooks, benefits, and calls to action. This is useful when advertisers need creative variations for multiple audiences or platforms.
            </ArticleParagraph>
            <ArticleParagraph>
              Human review remains essential for accuracy and brand consistency.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="images" title="AI-Generated Images">
            <ArticleParagraph>
              AI can help generate visual concepts and explore different creative directions quickly. Brands should establish standards for visual consistency, rights, quality, and platform suitability.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="video" title="AI Video Advertising" alt>
            <ArticleParagraph>
              AI can support scripts, storyboards, scene planning, voiceover drafts, and editing. This can make video experimentation more accessible and allow teams to test different opening hooks and messages.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="personalization" title="Personalization">
            <ArticleParagraph>
              Generative AI can help adapt messages for different audience groups and stages of the customer journey. Personalization should remain useful and should not cross privacy or trust boundaries.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="testing" title="Testing at Scale" alt>
            <ArticleParagraph>
              Because AI can generate more creative variations, advertisers can run structured tests across messages, hooks, visuals, and calls to action. More variations should not mean less strategic discipline.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="risks" title="Risks">
            <ArticleParagraph>
              Generative AI may produce inaccurate claims, inconsistent language, unsuitable imagery, or content requiring additional legal and rights review. Businesses should have approval and quality-control processes.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="workflow" title="Responsible Workflow" alt>
            <ArticleParagraph>
              A strong process is: define the objective, establish brand rules, generate concepts, review outputs, refine assets, launch controlled tests, measure results, and feed learnings into the next creative cycle.
            </ArticleParagraph>
          </ArticleSection>

          <ArticleSection id="final-thoughts" title="Conclusion">
            <ArticleParagraph>
              Generative AI advertising can dramatically increase creative speed and experimentation.
            </ArticleParagraph>
            <ArticleParagraph>
              Businesses that combine AI with human creative direction can produce more relevant advertising while protecting brand quality and trust.
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
        title="Ready to Scale Creative Experimentation?"
        body="Combine generative AI with human creative direction to produce more relevant advertising while protecting brand quality and trust."
        ctaLabel="Explore Generative AI Ads"
      />
    </>
  );
}
