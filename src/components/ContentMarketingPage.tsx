"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { ServiceHeroImage } from "@/components/ServiceHeroImage";
import type { FaqItem } from "@/types";
import { bookingLinkProps } from "@/lib/site";

const BENEFITS = [
  "Increase organic website traffic",
  "Build brand authority and trust",
  "Generate high-quality leads",
  "Improve search engine visibility",
  "Support social media and paid advertising efforts",
  "Educate potential customers",
  "Improve conversion rates",
  "Create long-term digital assets",
];

const SERVICES = [
  {
    title: "Content Strategy Development",
    intro: "Successful content starts with a clear strategy.",
    body: "Our strategies ensure every piece of content serves a specific purpose and contributes to measurable business outcomes.",
    items: [
      "Business goals",
      "Audience research",
      "Competitor analysis",
      "Industry trends",
      "Search intent",
      "Customer journey mapping",
    ],
  },
  {
    title: "SEO Content Creation",
    intro: "Create content that attracts both users and search engines.",
    body: "We focus on creating content that ranks, educates, and converts.",
    items: [
      "Blog articles",
      "Landing pages",
      "Service pages",
      "Industry guides",
      "Resource pages",
      "Pillar content",
      "Topic clusters",
    ],
  },
  {
    title: "Website Content Writing",
    intro: "Your website is often the first impression customers have of your business.",
    body: "Every page is designed to communicate value clearly and encourage action.",
    items: [
      "Homepages",
      "Service pages",
      "About Us pages",
      "Product descriptions",
      "Industry-specific pages",
      "Location pages",
    ],
  },
  {
    title: "AI Search & AEO Content Optimization",
    intro: "Search is evolving beyond traditional rankings.",
    body: "Our Answer Engine Optimization (AEO) approach helps position your content to appear in AI-generated answers and recommendations.",
    items: [
      "AI Search Platforms",
      "Google AI Overviews",
      "ChatGPT Search",
      "Gemini",
      "Perplexity",
      "Voice Search",
    ],
  },
  {
    title: "Blog Marketing Services",
    intro: "Consistent blogging remains one of the most effective ways to attract qualified traffic.",
    body: "We create informative, engaging articles that establish authority and support lead generation.",
    items: [
      "Topic research",
      "Content planning",
      "Article writing",
      "SEO optimization",
      "Internal linking",
      "Performance tracking",
    ],
  },
  {
    title: "Video Content Strategy",
    intro: "Video continues to dominate online engagement.",
    body: "Video content helps brands connect with audiences more effectively and improve engagement.",
    items: [
      "Video topic planning",
      "Script writing",
      "Short-form content strategy",
      "YouTube content planning",
      "Educational video concepts",
      "Product demonstration content",
    ],
  },
  {
    title: "Case Studies & Success Stories",
    intro: "Show potential customers how you've delivered results.",
    body: "These assets build trust and support sales efforts.",
    items: [
      "Customer success stories",
      "Business case studies",
      "Project showcases",
      "Industry-specific examples",
    ],
  },
  {
    title: "Email Content Marketing",
    intro: "Stay connected with prospects and customers through valuable email campaigns.",
    body: "Our email strategies focus on engagement, relationship building, and conversions.",
    items: [
      "Newsletter content",
      "Lead nurturing sequences",
      "Promotional campaigns",
      "Customer retention emails",
      "Product announcements",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Research & Discovery",
    body: "We analyze your audience, competitors, industry trends, and content opportunities.",
  },
  {
    step: "02",
    title: "Strategy Development",
    body: "A customized content roadmap is created based on your goals and target audience.",
  },
  {
    step: "03",
    title: "Content Creation",
    body: "Our content specialists produce high-quality, original, and engaging content aligned with your brand voice.",
  },
  {
    step: "04",
    title: "Optimization & Distribution",
    body: "Content is optimized for search engines, AI search platforms, and user engagement before publication.",
  },
  {
    step: "05",
    title: "Performance Analysis",
    body: "We monitor key metrics and continuously refine strategies to improve results.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Strategic Content Experts",
    body: "Our team combines creativity, SEO expertise, and marketing strategy to deliver content that performs.",
  },
  {
    title: "AI & Search-Ready Content",
    body: "We create content optimized for both traditional search engines and emerging AI-driven platforms.",
  },
  {
    title: "Industry-Specific Expertise",
    body: "We tailor content strategies to your industry, audience, and business goals.",
  },
  {
    title: "Results-Focused Approach",
    body: "Every content asset is designed to support traffic growth, lead generation, and customer acquisition.",
  },
  {
    title: "Consistent Quality",
    body: "We maintain high editorial standards to ensure your brand is represented professionally across all channels.",
  },
];

const CONTENT_TYPES = [
  "Blog Articles",
  "Website Content",
  "Landing Pages",
  "Service Pages",
  "Industry Guides",
  "Whitepapers",
  "E-books",
  "Case Studies",
  "Email Campaigns",
  "Video Scripts",
  "Social Media Content",
  "Product Descriptions",
  "Press Releases",
  "Thought Leadership Articles",
  "AI-Optimized Content",
];

const INDUSTRIES = [
  "Technology",
  "SaaS",
  "Healthcare",
  "Real Estate",
  "Finance",
  "Education",
  "E-commerce",
  "Hospitality",
  "Professional Services",
  "Manufacturing",
  "Automotive",
  "Local Businesses",
];

const OUTCOMES = [
  "Increase website traffic",
  "Improve search rankings",
  "Generate more leads",
  "Build brand authority",
  "Increase customer engagement",
  "Support sales efforts",
  "Strengthen customer trust",
  "Improve marketing ROI",
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is content marketing?",
    answer:
      "Content marketing is the creation and distribution of valuable content designed to attract, engage, and convert potential customers.",
  },
  {
    question: "How long does content marketing take to show results?",
    answer:
      "Content marketing is a long-term strategy. While some improvements may be seen within a few months, significant growth typically occurs over time as content gains visibility and authority.",
  },
  {
    question: "Is content marketing important for SEO?",
    answer:
      "Yes. High-quality content is a key factor in improving search engine visibility and attracting organic traffic.",
  },
  {
    question: "Can content marketing generate leads?",
    answer:
      "Absolutely. Well-planned content helps educate potential customers and guides them toward taking action.",
  },
  {
    question: "Do you create content for AI search platforms?",
    answer:
      "Yes. We develop content optimized for AI-powered search experiences, including Google AI Overviews, ChatGPT Search, Gemini, and other emerging answer engines.",
  },
];

const CTA_BENEFITS = [
  "Free Content Audit",
  "Custom Content Strategy",
  "SEO & AI-Optimized Content",
  "Expert Writers & Strategists",
  "Transparent Reporting & Performance Tracking",
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

export function ContentMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center bg-black pt-[9.85rem] pb-[var(--size--8xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#57e5b233,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(#fff0,#000)]" />
        </div>

        <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 items-center gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <div className="flex flex-col gap-[var(--size--xl)]">
              <div className="text-[length:var(--typography--text-m)] font-medium uppercase tracking-[0.12em] text-white/60">
                Content Marketing Services
              </div>
              <h1 className="font-semibold text-white text-[length:var(--typography--h1)] max-[991px]:text-[length:var(--typography--h1-tablet)] max-[767px]:text-[length:var(--typography--h1-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                Turn Content Into Customers with Strategic Content Marketing
              </h1>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                In today&apos;s digital world, customers don&apos;t want to be sold to. They want
                valuable information, solutions, and experiences. Content marketing helps businesses
                attract, engage, and convert potential customers by delivering the right message at
                the right time.
              </p>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                At Let&apos;s Advertising, we create high-impact content marketing strategies that
                increase brand awareness, build trust, generate qualified leads, and drive long-term
                business growth. From blogs and website content to videos, case studies, and
                AI-optimized content, we help brands become industry authorities.
              </p>
              <div className="flex flex-wrap gap-[1rem] pt-[var(--size--m)]">
                <Link
                  {...bookingLinkProps}
                  aria-label="Get Started Today"
                  className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer rounded-[9999px] px-[2rem] py-[1rem] no-underline"
                >
                  <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] bg-white" />
                  <span className="relative z-[1] text-black text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                    <StaggerText text="Get Started Today" />
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
              src="/seo/content-marketing.png"
              alt="Content marketing services illustration"
            />
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="Why Content Marketing Matters"
              subtitle="Modern buyers research extensively before making a purchase decision. Quality content helps position your brand as a trusted source of information throughout the customer journey."
            />
            <div className="flex flex-col gap-[var(--size--m)]">
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)] font-medium">
                Benefits of Content Marketing:
              </p>
              <ul className="grid grid-cols-1 gap-[var(--size--s)] sm:grid-cols-2">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-[var(--size--s)]">
                    <span className="mt-[0.15rem] shrink-0 text-[var(--brand--brand-electric-blue)]">
                      ✓
                    </span>
                    <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                Businesses that consistently publish valuable content often see stronger customer
                relationships and higher marketing ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Our Content Marketing Services" />
          </div>
          <div className="grid grid-cols-2 gap-[var(--size--xl)] max-[991px]:grid-cols-1">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className={`flex flex-col gap-[var(--size--l)] rounded-[var(--radius--radius-xxl)] p-[var(--size--2xl)] ${
                  i % 3 === 1
                    ? "bg-[var(--brand--brand-electric-blue)] text-white"
                    : "bg-[var(--neutral--neutral-grey-200)]"
                }`}
              >
                <div>
                  <h3
                    className={`font-semibold text-[length:var(--typography--h5)] max-[991px]:text-[length:var(--typography--h5-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] ${i % 3 === 1 ? "text-white" : ""}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-[var(--size--s)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] ${i % 3 === 1 ? "text-white/90" : "text-[var(--brand--brand-charcoal)]"}`}
                  >
                    {service.intro}
                  </p>
                </div>
                {i === 0 && (
                  <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                    We develop customized content plans based on:
                  </p>
                )}
                <p
                  className={`text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] ${i % 3 === 1 ? "text-white/80" : "text-black"}`}
                >
                  {service.body}
                </p>
                <ul className="flex flex-col gap-[var(--size--xs)]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-[var(--size--s)]">
                      <span
                        className={`mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full ${i % 3 === 1 ? "bg-[var(--brand--brand-mint)]" : "bg-[var(--brand--brand-electric-blue)]"}`}
                      />
                      <span
                        className={`text-[length:var(--typography--text-s)] leading-[var(--typography--line-height-l)] ${i % 3 === 1 ? "text-white/90" : ""}`}
                      >
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

      {/* Process */}
      <section className="flex flex-col items-center bg-black pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Our Content Marketing Process" dark />
          </div>
          <div className="grid grid-cols-5 gap-[var(--size--l)] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-[var(--size--m)] rounded-[var(--radius--radius-xxl)] border border-white/10 bg-white/5 p-[var(--size--xl)]"
              >
                <div className="font-semibold text-[var(--brand--brand-mint)] text-[length:var(--typography--h4)] leading-none">
                  {step.step}
                </div>
                <h3 className="font-semibold text-white text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-white/70 text-[length:var(--typography--text-s)] leading-[var(--typography--line-height-l)]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="flex flex-col items-center bg-[var(--brand--brand-sky)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Why Choose Let's Advertising?" centered />
          </div>
          <div className="grid grid-cols-3 gap-[var(--size--xl)] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-[var(--size--m)] rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--2xl)]"
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

      {/* Content Types */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Content Types We Create" subtitle="We help businesses create:" centered />
          </div>
          <div className="flex w-full flex-wrap justify-center gap-[var(--size--m)]">
            {CONTENT_TYPES.map((type) => (
              <span
                key={type}
                className="rounded-[99999px] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--xl)] py-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading
              title="Industries We Serve"
              subtitle="Our content marketing solutions support businesses across industries including:"
              centered
            />
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

      {/* Outcomes */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="Expected Outcomes from Content Marketing"
              subtitle="Our content marketing strategies are designed to help businesses:"
            />
            <ul className="grid grid-cols-1 gap-[var(--size--s)] sm:grid-cols-2">
              {OUTCOMES.map((outcome) => (
                <li key={outcome} className="flex items-start gap-[var(--size--s)]">
                  <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                  <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
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
              Ready to Grow with Content Marketing?
            </h2>
            <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
              Your audience is searching for answers, insights, and solutions every day. Let Let&apos;s
              Advertising help you create content that attracts attention, builds trust, and drives
              measurable business growth.
            </p>
            <ul className="flex flex-col gap-[var(--size--s)] text-left">
              {CTA_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-[var(--size--s)] text-white/90">
                  <span className="text-[var(--brand--brand-mint)]">✓</span>
                  <span className="text-[length:var(--typography--text-m)]">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link
              {...bookingLinkProps}
              aria-label="Contact Let's Advertising"
              className="btn-animate-chars relative mt-[var(--size--m)] inline-flex items-center justify-center gap-[0.5rem] cursor-pointer rounded-[9999px] px-[2rem] py-[1rem] no-underline"
            >
              <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] bg-[var(--brand--brand-electric-blue)]" />
              <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                <StaggerText text="Contact Let's Advertising" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
