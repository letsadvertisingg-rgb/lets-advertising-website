"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { ServiceHeroImage } from "@/components/ServiceHeroImage";
import type { FaqItem } from "@/types";

const BENEFITS = [
  "Increase brand awareness",
  "Generate high-quality leads",
  "Improve customer engagement",
  "Build trust and credibility",
  "Drive website traffic",
  "Increase sales and conversions",
  "Create loyal brand advocates",
];

const SERVICES = [
  {
    title: "Social Media Strategy Development",
    intro: "Every successful campaign starts with a strategy.",
    body: "Our team develops customized social media plans based on your business goals, target audience, industry trends, and competitor analysis.",
    items: [
      "Audience research",
      "Competitor analysis",
      "Content planning",
      "Platform selection",
      "Growth roadmap",
      "Performance KPIs",
    ],
  },
  {
    title: "Social Media Management",
    intro: "Managing social media consistently requires time and expertise.",
    body: "We handle everything from content planning to publishing and engagement.",
    items: [
      "Content scheduling",
      "Profile management",
      "Community engagement",
      "Comment moderation",
      "Message management",
      "Monthly performance reporting",
    ],
  },
  {
    title: "Content Creation",
    intro: "Great content drives engagement and builds brand authority.",
    body: "Our creative team develops content tailored to your audience and business objectives.",
    items: [
      "Social media posts",
      "Carousel designs",
      "Reels and short-form videos",
      "Infographics",
      "Promotional creatives",
      "Brand storytelling content",
      "Educational content",
    ],
  },
  {
    title: "Paid Social Media Advertising",
    intro: "Reach the right audience faster with targeted advertising campaigns.",
    body: "Our campaigns focus on maximizing return on ad spend (ROAS) while generating measurable business outcomes.",
    items: [
      "Facebook Ads",
      "Instagram Ads",
      "LinkedIn Ads",
      "YouTube Ads",
      "TikTok Ads",
      "Remarketing Campaigns",
      "Lead Generation Campaigns",
    ],
  },
  {
    title: "Social Media Growth Services",
    intro: "Grow your audience organically with proven engagement strategies.",
    body: "Our approach focuses on attracting genuine users who are interested in your products and services.",
    items: [
      "Followers",
      "Reach",
      "Engagement",
      "Brand mentions",
      "Website visits",
      "Customer inquiries",
    ],
  },
  {
    title: "Influencer Marketing",
    intro: "Partner with trusted voices in your industry to expand your reach.",
    body: "We connect your brand with influencers who align with your goals and audience.",
    items: [
      "Influencer identification",
      "Campaign planning",
      "Outreach management",
      "Content collaboration",
      "Performance tracking",
    ],
  },
];

const PLATFORMS = [
  {
    title: "Facebook Marketing",
    body: "Build communities, generate leads, and drive conversions through strategic Facebook campaigns.",
  },
  {
    title: "Instagram Marketing",
    body: "Increase brand visibility with engaging visuals, reels, stories, and influencer collaborations.",
  },
  {
    title: "LinkedIn Marketing",
    body: "Connect with professionals, decision-makers, and B2B audiences through targeted LinkedIn strategies.",
  },
  {
    title: "YouTube Marketing",
    body: "Reach customers through video content, YouTube advertising, and channel optimization.",
  },
  {
    title: "TikTok Marketing",
    body: "Leverage short-form video content to engage younger audiences and drive viral reach.",
  },
  {
    title: "X (Twitter) Marketing",
    body: "Strengthen brand conversations, customer engagement, and industry presence.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Research",
    body: "We understand your business, audience, goals, and competitors.",
  },
  {
    step: "02",
    title: "Strategy Planning",
    body: "Our experts create a tailored social media roadmap designed for growth.",
  },
  {
    step: "03",
    title: "Content Creation",
    body: "We develop high-quality content that aligns with your brand voice and objectives.",
  },
  {
    step: "04",
    title: "Campaign Execution",
    body: "Content is published, optimized, and promoted across relevant platforms.",
  },
  {
    step: "05",
    title: "Performance Analysis",
    body: "We track key metrics and continuously improve campaign performance.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Experienced Social Media Experts",
    body: "Our team stays ahead of the latest social media trends, algorithms, and best practices.",
  },
  {
    title: "Data-Driven Approach",
    body: "Every decision is backed by analytics and performance insights.",
  },
  {
    title: "Customized Strategies",
    body: "No generic plans. Every campaign is built around your unique business goals.",
  },
  {
    title: "Transparent Reporting",
    body: "Receive detailed reports that clearly show campaign performance and ROI.",
  },
  {
    title: "Focus on Business Growth",
    body: "We don't just grow followers. We help grow your business.",
  },
];

const INDUSTRIES = [
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Education",
  "Hospitality",
  "Technology",
  "Finance",
  "Professional Services",
  "Startups",
  "Local Businesses",
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How often should my business post on social media?",
    answer:
      "The ideal posting frequency depends on your industry, audience, and platform. Most businesses benefit from posting consistently several times per week.",
  },
  {
    question: "Which social media platform is best for my business?",
    answer:
      "It depends on your target audience. B2B businesses often perform well on LinkedIn, while B2C brands may see better results on Facebook, Instagram, or TikTok.",
  },
  {
    question: "Can social media generate leads and sales?",
    answer:
      "Yes. A well-planned social media strategy can drive traffic, generate qualified leads, and increase sales.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Organic growth typically takes a few months, while paid advertising can generate results much faster.",
  },
  {
    question: "Do I need paid ads to succeed on social media?",
    answer:
      "Not necessarily. Organic strategies can be effective, but combining organic and paid efforts often produces the best results.",
  },
];

const CTA_BENEFITS = [
  "Free Social Media Audit",
  "Custom Growth Strategy",
  "Performance-Driven Campaigns",
  "Dedicated Social Media Experts",
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

function ServiceFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-wrapper mx-auto mb-[4rem] min-w-[56rem] max-w-[56rem] max-[991px]:min-w-0 max-[991px]:max-w-full cursor-pointer">
      {FAQ_ITEMS.map((item, i) => {
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

export function SocialMediaMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center bg-black pt-[9.85rem] pb-[var(--size--8xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0053ef33,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(#fff0,#000)]" />
        </div>

        <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 items-center gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <div className="flex flex-col gap-[var(--size--xl)]">
              <div className="text-[length:var(--typography--text-m)] font-medium uppercase tracking-[0.12em] text-white/60">
                Social Media Marketing Services
              </div>
              <h1 className="font-semibold text-white text-[length:var(--typography--h1)] max-[991px]:text-[length:var(--typography--h1-tablet)] max-[767px]:text-[length:var(--typography--h1-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                Grow Your Brand, Engage Your Audience &amp; Drive Real Business Results
              </h1>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                Social media is no longer just about posting content. It&apos;s about building
                relationships, increasing brand visibility, generating leads, and driving revenue.
              </p>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                At Let&apos;s Advertising, we create data-driven social media strategies that help
                businesses connect with their ideal audience across platforms like Facebook,
                Instagram, LinkedIn, X (Twitter), YouTube, TikTok, and Pinterest.
              </p>
              <div className="flex flex-wrap gap-[1rem] pt-[var(--size--m)]">
                <Link
                  href="/#contact"
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
              src="/seo/social-media.png"
              alt="Social media marketing illustration"
            />
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="Why Social Media Marketing Matters"
              subtitle="Your customers spend hours every day on social media. The question is: Are they finding your business?"
            />
            <div className="flex flex-col gap-[var(--size--m)]">
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                An effective social media strategy can help you:
              </p>
              <ul className="grid grid-cols-1 gap-[var(--size--s)] max-[767px]:grid-cols-1 sm:grid-cols-2">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-[var(--size--s)]">
                    <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                    <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                With billions of active users worldwide, social media has become one of the most
                powerful marketing channels available today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Our Social Media Marketing Services" />
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

      {/* Platforms */}
      <section className="flex flex-col items-center bg-black pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Platforms We Manage" dark />
          </div>
          <div className="grid grid-cols-3 gap-[var(--size--xl)] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
            {PLATFORMS.map((platform) => (
              <div
                key={platform.title}
                className="flex flex-col gap-[var(--size--m)] rounded-[var(--radius--radius-xxl)] border border-white/10 bg-white/5 p-[var(--size--2xl)]"
              >
                <h3 className="font-semibold text-white text-[length:var(--typography--h6)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                  {platform.title}
                </h3>
                <p className="text-white/70 text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                  {platform.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Our Social Media Process" />
          </div>
          <div className="grid grid-cols-5 gap-[var(--size--l)] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-[var(--size--m)] rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[var(--size--xl)]"
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

      {/* Industries */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Industries We Serve" centered />
          </div>
          <div className="flex w-full flex-wrap justify-center gap-[var(--size--m)]">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="rounded-[99999px] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--xl)] py-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium"
              >
                {industry}
              </span>
            ))}
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
          <ServiceFaq />
        </div>
      </section>

      {/* CTA */}
      <section className="relative flex flex-col items-center justify-center bg-black pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mx-auto flex max-w-[48rem] flex-col items-center gap-[var(--size--2xl)] text-center">
            <h2 className="font-semibold text-white text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
              Ready to Grow Your Brand on Social Media?
            </h2>
            <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
              Your customers are already spending time on social media. Let Let&apos;s Advertising
              help you reach them with strategies that drive engagement, leads, and revenue.
            </p>
            <ul className="flex flex-col gap-[var(--size--s)] text-left">
              {CTA_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-[var(--size--s)] text-white/90">
                  <span className="text-[var(--brand--brand-mint)]">✔</span>
                  <span className="text-[length:var(--typography--text-m)]">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
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
