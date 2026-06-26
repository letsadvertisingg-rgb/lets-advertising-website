"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { ServiceHeroImage } from "@/components/ServiceHeroImage";
import type { FaqItem } from "@/types";

const WHY_AEO = [
  "AI-powered search is growing faster than traditional search.",
  "Users expect instant answers instead of browsing multiple websites.",
  "Google AI Overviews now appear for a large percentage of searches.",
  "Voice search and conversational AI continue to increase.",
  "Businesses that appear in AI-generated answers gain more visibility and trust.",
  "Companies that invest in AEO today gain a significant competitive advantage before the market becomes saturated.",
];

const SERVICES = [
  {
    title: "AI Search Visibility Audit",
    intro: "We analyze how AI platforms currently perceive your brand.",
    body: "Our audit includes:",
    items: [
      "Brand mention analysis",
      "AI search visibility assessment",
      "Content structure evaluation",
      "Entity recognition review",
      "Competitor comparison",
    ],
  },
  {
    title: "Content Optimization for AI",
    intro: "We create content that AI systems can easily understand and reference.",
    body: "This includes:",
    items: [
      "FAQ optimization",
      "Question-based content creation",
      "Topic clustering",
      "Conversational content development",
      "Featured snippet optimization",
      "Knowledge graph enhancement",
    ],
  },
  {
    title: "Structured Data Implementation",
    intro: "Structured data helps search engines understand your content.",
    body: "We implement:",
    items: [
      "FAQ Schema",
      "Organization Schema",
      "Local Business Schema",
      "Article Schema",
      "Product Schema",
      "Service Schema",
    ],
  },
  {
    title: "Authority Building",
    intro: "AI systems prioritize trusted sources.",
    body: "Our authority-building strategy includes:",
    items: [
      "Digital PR campaigns",
      "High-authority backlinks",
      "Brand mention generation",
      "Citation management",
      "Industry publication outreach",
    ],
  },
  {
    title: "Local AEO Optimization",
    intro: "Perfect for local businesses wanting visibility in AI-powered local searches.",
    body: "Services include:",
    items: [
      "Google Business Profile optimization",
      "Local citations",
      "Review management",
      "Local schema implementation",
      "Geographic content optimization",
    ],
  },
];

const PLATFORMS = [
  "Google AI Overviews",
  "ChatGPT Search",
  "Microsoft Copilot",
  "Gemini",
  "Perplexity AI",
  "Voice Assistants",
  "Future AI Search Platforms",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    body: "We evaluate your website, content, competitors, and AI visibility.",
  },
  {
    step: "02",
    title: "Strategy Development",
    body: "Our experts create a customized AEO roadmap based on your industry and goals.",
  },
  {
    step: "03",
    title: "Implementation",
    body: "We optimize technical elements, content, structured data, and authority signals.",
  },
  {
    step: "04",
    title: "Monitoring & Improvement",
    body: "AEO is continuously evolving. We monitor AI search performance and refine strategies accordingly.",
  },
];

const BENEFITS = [
  {
    title: "Increased Brand Visibility",
    body: "Appear in AI-generated answers and recommendations.",
  },
  {
    title: "Higher Trust",
    body: "AI systems prioritize authoritative brands.",
  },
  {
    title: "More Qualified Leads",
    body: "Reach users who are actively seeking solutions.",
  },
  {
    title: "Future-Proof Marketing",
    body: "Prepare your business for the next generation of search.",
  },
  {
    title: "Competitive Advantage",
    body: "Stay ahead of competitors who are still focused solely on traditional SEO.",
  },
];

const INDUSTRIES = [
  "Digital Marketing",
  "Real Estate",
  "Healthcare",
  "Education",
  "E-commerce",
  "SaaS",
  "Finance",
  "Legal Services",
  "Hospitality",
  "Local Businesses",
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is the difference between SEO and AEO?",
    answer:
      "SEO focuses on improving rankings in search results, while AEO focuses on helping AI systems understand and recommend your business directly in answers.",
  },
  {
    question: "Does AEO replace SEO?",
    answer:
      "No. AEO works alongside SEO. Both strategies complement each other and create stronger visibility across search platforms.",
  },
  {
    question: "How long does AEO take to show results?",
    answer:
      "Most businesses begin seeing improvements within 2-4 months, depending on competition, authority, and website quality.",
  },
  {
    question: "Which AI platforms can AEO help with?",
    answer:
      "AEO can improve visibility across ChatGPT, Google AI Overviews, Gemini, Perplexity, Copilot, and emerging AI search platforms.",
  },
  {
    question: "Is AEO suitable for small businesses?",
    answer:
      "Absolutely. AEO can help small businesses compete more effectively by increasing their chances of appearing in AI-generated recommendations.",
  },
];

const CTA_BENEFITS = [
  "Free AEO Visibility Audit",
  "AI Search Optimization Strategy",
  "Structured Data Implementation",
  "Authority & Content Optimization",
];

function SectionHeading({
  title,
  subtitle,
  dark = false,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex max-w-[48rem] flex-col gap-[var(--size--m)] ${centered ? "mx-auto text-center" : ""}`}
    >
      <h2
        className={`font-semibold text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] ${dark ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)] ${dark ? "text-white/80" : "text-[var(--brand--brand-charcoal)]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function ServiceFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-wrapper mx-auto mb-[4rem] min-w-[56rem] max-w-[56rem] max-[991px]:min-w-0 max-[991px]:max-w-full cursor-pointer">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="faq-item-wrapper">
            <div
              className={`${i === 0 ? "faq-item---first " : ""}faq-item cursor-pointer border-t border-b border-[#ececec] pt-[1.5rem] pb-[1.5rem]${isOpen ? " is-open" : ""}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="faq-heading-wrapper flex items-center justify-between">
                <div className="text-[length:var(--typography--h6)] font-semibold tracking-[-0.02em] leading-[140%]">
                  {item.question}
                </div>
                <div className="faq-circle relative flex h-[3.5rem] w-[3.5rem] shrink-0 items-center justify-center ml-[1rem] rounded-[100px] bg-[var(--neutral--neutral-grey-200)]">
                  <div className="faq-plus-vertical absolute h-[0.875rem] w-[2px] bg-black" />
                  <div className="faq-plus-horizontal h-[2px] w-[0.875rem] bg-black" />
                </div>
              </div>
              <div className={`faq-paragraph-wrapper max-w-[55rem]${isOpen ? " is-active" : ""}`}>
                <div className="faq-paragraph max-w-[81ch] max-[991px]:max-w-[68ch] max-[767px]:max-w-[55ch]">
                  <div className="text-[length:var(--typography--text-m)]">
                    <p className="text-[var(--brand--brand-charcoal)] leading-[var(--typography--line-height-l)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function AeoServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center bg-black pt-[9.85rem] pb-[var(--size--8xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#57e5b222,transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(#fff0,#000)]" />
        </div>

        <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 items-center gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <div className="flex flex-col gap-[var(--size--xl)]">
              <div className="text-[length:var(--typography--text-m)] font-medium uppercase tracking-[0.12em] text-white/60">
                Let&apos;s Advertising AEO Services
              </div>
              <h1 className="font-semibold text-white text-[length:var(--typography--h1)] max-[991px]:text-[length:var(--typography--h1-tablet)] max-[767px]:text-[length:var(--typography--h1-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                Get Your Business Recommended by AI Search Engines
              </h1>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                Traditional SEO helps your website rank on search engines. AEO (Answer Engine
                Optimization) helps your business become the answer that AI platforms recommend.
              </p>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                At Let&apos;s Advertising, we optimize your website, content, and brand authority so
                that AI-powered search tools such as ChatGPT, Google AI Overviews, Gemini,
                Perplexity, and voice assistants can confidently reference and recommend your business
                to potential customers.
              </p>
              <div className="flex flex-wrap gap-[1rem] pt-[var(--size--m)]">
                <Link
                  href="/#contact"
                  aria-label="Book a Free AEO Consultation"
                  className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer rounded-[9999px] px-[2rem] py-[1rem] no-underline"
                >
                  <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] bg-white" />
                  <span className="relative z-[1] text-black text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                    <StaggerText text="Book a Free AEO Consultation" />
                  </span>
                </Link>
                <Link
                  href="/#services"
                  aria-label="All Services"
                  className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer px-[2rem] py-[1rem] no-underline"
                >
                  <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] border border-white bg-transparent" />
                  <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                    <StaggerText text="All Services" />
                  </span>
                </Link>
              </div>
            </div>

            <ServiceHeroImage
              src="/seo/aeo.png"
              alt="Answer engine optimization services illustration"
            />
          </div>
        </div>
      </section>

      {/* What is AEO */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="What is Answer Engine Optimization (AEO)?"
              subtitle="Answer Engine Optimization (AEO) is the process of structuring and optimizing your digital presence so AI systems can easily understand, trust, and recommend your business when users ask questions."
            />
            <div className="flex flex-col gap-[var(--size--l)]">
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                Instead of simply ranking for keywords, AEO focuses on becoming the direct answer to
                customer queries.
              </p>
              <div className="rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--2xl)]">
                <p className="mb-[var(--size--m)] text-[length:var(--typography--text-s)] font-semibold uppercase tracking-[0.08em] text-[var(--neutral--neutral-500)]">
                  Example
                </p>
                <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                  Instead of searching:
                </p>
                <p className="mb-[var(--size--l)] rounded-[var(--radius--radius-lg)] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] italic">
                  &ldquo;Best digital marketing agency in Delhi&rdquo;
                </p>
                <p className="mb-[var(--size--s)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                  Users are now asking AI:
                </p>
                <p className="rounded-[var(--radius--radius-lg)] bg-[var(--brand--brand-electric-blue)] px-[var(--size--l)] py-[var(--size--m)] text-[length:var(--typography--text-m)] text-white">
                  &ldquo;What is the best digital marketing agency for small businesses in
                  Delhi?&rdquo;
                </p>
              </div>
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                AEO helps AI engines recognize your business as a relevant and trustworthy answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AEO Matters */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="Why AEO Matters in 2026"
              subtitle="Search behavior is changing rapidly."
            />
            <ul className="flex flex-col gap-[var(--size--s)]">
              {WHY_AEO.map((point) => (
                <li key={point} className="flex items-start gap-[var(--size--s)]">
                  <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                  <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="flex flex-col items-center bg-black pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Our AEO Services" dark />
          </div>
          <div className="grid grid-cols-2 gap-[var(--size--xl)] max-[991px]:grid-cols-1">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className="flex flex-col gap-[var(--size--l)] rounded-[var(--radius--radius-xxl)] border border-white/10 bg-white/5 p-[var(--size--2xl)]"
              >
                <div>
                  <h3 className="font-semibold text-white text-[length:var(--typography--h5)] max-[991px]:text-[length:var(--typography--h5-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                    {service.title}
                  </h3>
                  <p className="mt-[var(--size--s)] text-white/80 text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                    {service.intro}
                  </p>
                </div>
                <p className="text-white/70 text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                  {service.body}
                </p>
                <ul className="flex flex-col gap-[var(--size--xs)]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-[var(--size--s)]">
                      <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                      <span className="text-white/80 text-[length:var(--typography--text-s)] leading-[var(--typography--line-height-l)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Platforms We Optimize For" subtitle="We help businesses increase visibility across:" centered />
          </div>
          <div className="flex w-full flex-wrap justify-center gap-[var(--size--m)]">
            {PLATFORMS.map((platform) => (
              <span
                key={platform}
                className="rounded-[99999px] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--xl)] py-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="flex flex-col items-center bg-[var(--brand--brand-sky)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)] text-center">
            <SectionHeading title="How Our AEO Process Works" centered />
          </div>
          <div className="grid grid-cols-4 gap-[var(--size--l)] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-[var(--size--m)] rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--xl)]"
              >
                <div className="font-semibold text-[var(--brand--brand-electric-blue)] text-[length:var(--typography--h4)] leading-none">
                  {step.step}
                </div>
                <h3 className="font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-[length:var(--typography--text-s)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Benefits of AEO" centered />
          </div>
          <div className="grid grid-cols-3 gap-[var(--size--xl)] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
            {BENEFITS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-[var(--size--m)] rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--2xl)]"
              >
                <h3 className="font-semibold text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Industries We Serve" centered />
          </div>
          <div className="flex w-full flex-wrap justify-center gap-[var(--size--m)]">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="rounded-[99999px] bg-white px-[var(--size--xl)] py-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mx-auto mb-[var(--size--5xl)] max-w-[29.25rem] text-center">
            <h2 className="font-semibold text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] tracking-[-0.02em] leading-[1.1]">
              Frequently Asked Questions
            </h2>
          </div>
          <ServiceFaq items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative flex flex-col items-center justify-center bg-black pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mx-auto flex max-w-[48rem] flex-col items-center gap-[var(--size--2xl)] text-center">
            <h2 className="font-semibold text-white text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
              Ready to Get Recommended by AI?
            </h2>
            <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
              The future of search is driven by AI. Let Let&apos;s Advertising position your business
              where customers are increasingly finding answers. Contact us today for a free AEO
              visibility audit and discover how your brand can become the answer customers see first.
            </p>
            <ul className="flex flex-col gap-[var(--size--s)] text-left">
              {CTA_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-[var(--size--s)] text-white/90">
                  <span className="text-[var(--brand--brand-mint)]">✓</span>
                  <span className="text-[length:var(--typography--text-m)]">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-center gap-[1rem]">
              <Link
                href="/#contact"
                aria-label="Book a Free AEO Consultation"
                className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer rounded-[9999px] px-[2rem] py-[1rem] no-underline"
              >
                <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] bg-[var(--brand--brand-electric-blue)]" />
                <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                  <StaggerText text="Book a Free AEO Consultation" />
                </span>
              </Link>
              <Link
                href="/#contact"
                aria-label="Get an AI Visibility Audit"
                className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer px-[2rem] py-[1rem] no-underline"
              >
                <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] border border-white bg-transparent" />
                <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                  <StaggerText text="Get an AI Visibility Audit" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
