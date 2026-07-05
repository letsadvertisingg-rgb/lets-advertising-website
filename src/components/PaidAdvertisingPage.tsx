"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { ServiceHeroImage } from "@/components/ServiceHeroImage";
import type { FaqItem } from "@/types";
import { bookingLinkProps } from "@/lib/site";

const BENEFITS = [
  "Instant visibility on search engines and social media",
  "Highly targeted audience reach",
  "Faster lead generation",
  "Increased website traffic",
  "Improved brand awareness",
  "Measurable return on investment (ROI)",
  "Scalable business growth",
];

const SERVICES = [
  {
    title: "Google Ads Management",
    intro: "Appear when customers actively search for your products or services.",
    body: "We optimize campaigns to maximize conversions while minimizing unnecessary ad spend.",
    items: [
      "Search Ads",
      "Display Ads",
      "Performance Max Campaigns",
      "Shopping Ads",
      "YouTube Ads",
      "Remarketing Campaigns",
      "Local Service Campaigns",
    ],
  },
  {
    title: "Meta Ads Management (Facebook & Instagram)",
    intro: "Reach highly targeted audiences across Facebook and Instagram.",
    body: "Our team continuously monitors and optimizes campaigns to improve performance and reduce costs.",
    items: [
      "Lead Generation Campaigns",
      "Conversion Campaigns",
      "Brand Awareness Campaigns",
      "Traffic Campaigns",
      "E-commerce Sales Campaigns",
      "Retargeting Campaigns",
      "Dynamic Product Ads",
    ],
  },
  {
    title: "LinkedIn Advertising",
    intro: "Generate high-quality B2B leads and connect with decision-makers.",
    body: "Ideal for businesses targeting professionals, executives, and enterprise customers.",
    items: [
      "Lead Generation Ads",
      "Sponsored Content",
      "Message Ads",
      "Event Promotion",
      "Website Traffic Campaigns",
      "Recruitment Campaigns",
    ],
  },
  {
    title: "YouTube Advertising",
    intro: "Capture attention through engaging video campaigns.",
    body: "Video advertising helps businesses build trust and increase customer engagement.",
    items: [
      "In-Stream Ads",
      "Skippable Ads",
      "Non-Skippable Ads",
      "Video Discovery Ads",
      "Bumper Ads",
      "Brand Awareness Campaigns",
    ],
  },
  {
    title: "Remarketing & Retargeting",
    intro: "Most visitors do not convert on their first interaction.",
    body: "Our remarketing strategies help bring potential customers back and increase conversion rates through personalized advertising.",
    items: [
      "Higher conversion rates",
      "Lower acquisition costs",
      "Increased customer retention",
      "Improved return on ad spend",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Business & Audience Analysis",
    body: "We understand your business objectives, audience, industry, and competitors.",
  },
  {
    step: "02",
    title: "Strategy Development",
    body: "Our specialists create a customized advertising strategy aligned with your goals and budget.",
  },
  {
    step: "03",
    title: "Campaign Setup",
    body: "We build and configure campaigns using industry best practices, conversion tracking, and advanced targeting.",
  },
  {
    step: "04",
    title: "Creative Development",
    body: "Our team develops compelling ad copy, visuals, videos, and landing page recommendations designed to improve conversion rates.",
  },
  {
    step: "05",
    title: "Continuous Optimization",
    body: "Campaigns are constantly monitored and optimized to improve performance and maximize ROI.",
  },
  {
    step: "06",
    title: "Reporting & Insights",
    body: "Receive transparent reports showing leads generated, cost per lead, ROAS, conversion rate, CTR, and audience performance.",
    items: [
      "Leads Generated",
      "Cost Per Lead (CPL)",
      "Return on Ad Spend (ROAS)",
      "Conversion Rate",
      "Click-Through Rate (CTR)",
      "Audience Performance",
    ],
  },
];

const WHY_CHOOSE = [
  {
    title: "Certified Advertising Experts",
    body: "Our team stays updated with the latest advertising platforms, AI-driven bidding strategies, and industry trends.",
  },
  {
    title: "Data-Driven Decision Making",
    body: "Every optimization is backed by analytics, audience insights, and performance data.",
  },
  {
    title: "Transparent Reporting",
    body: "Know exactly where your budget is spent and how your campaigns are performing.",
  },
  {
    title: "Conversion-Focused Approach",
    body: "We focus on generating real business outcomes, not just clicks and impressions.",
  },
  {
    title: "Scalable Growth Strategies",
    body: "Whether you're a startup or an established enterprise, our advertising solutions are designed to scale with your business.",
  },
];

const INDUSTRIES = [
  "E-commerce",
  "Healthcare",
  "Education",
  "Real Estate",
  "SaaS",
  "Technology",
  "Finance",
  "Professional Services",
  "Hospitality",
  "Local Businesses",
  "Automotive",
  "Manufacturing",
];

const RESULTS = [
  "Increase qualified leads",
  "Improve conversion rates",
  "Lower customer acquisition costs",
  "Grow online sales",
  "Strengthen brand visibility",
  "Maximize advertising ROI",
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How much should I spend on paid advertising?",
    answer:
      "Advertising budgets vary based on industry, competition, and business goals. We help determine the optimal budget for maximum results.",
  },
  {
    question: "Which advertising platform is best for my business?",
    answer:
      "The ideal platform depends on your audience and objectives. Google Ads is excellent for intent-driven searches, while Meta and LinkedIn provide powerful audience targeting options.",
  },
  {
    question: "How quickly can I see results?",
    answer:
      "Most paid advertising campaigns begin generating traffic and leads shortly after launch. Performance typically improves as campaigns gather data and are optimized.",
  },
  {
    question: "Do you provide landing page recommendations?",
    answer:
      "Yes. Landing pages play a critical role in campaign success, and we provide optimization recommendations to improve conversions.",
  },
  {
    question: "Can you manage existing advertising accounts?",
    answer:
      "Absolutely. We can audit, optimize, and scale existing campaigns while improving overall performance.",
  },
];

const CTA_BENEFITS = [
  "Free Paid Advertising Audit",
  "Custom Campaign Strategy",
  "Multi-Platform Advertising Management",
  "Dedicated PPC & Performance Marketing Experts",
  "Transparent Reporting & Measurable Results",
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

export function PaidAdvertisingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center bg-black pt-[9.85rem] pb-[var(--size--8xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0053ef44,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(#fff0,#000)]" />
        </div>

        <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 items-center gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <div className="flex flex-col gap-[var(--size--xl)]">
              <div className="text-[length:var(--typography--text-m)] font-medium uppercase tracking-[0.12em] text-white/60">
                Paid Advertising Services
              </div>
              <h1 className="font-semibold text-white text-[length:var(--typography--h1)] max-[991px]:text-[length:var(--typography--h1-tablet)] max-[767px]:text-[length:var(--typography--h1-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                Drive More Leads, Sales &amp; Revenue with Data-Driven Paid Advertising
              </h1>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                Looking for faster business growth? Paid advertising is one of the most effective
                ways to reach your ideal customers, generate qualified leads, and increase sales.
              </p>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                At Let&apos;s Advertising, we create high-performance paid advertising campaigns
                that put your business in front of the right audience at the right time, whether
                your goal is lead generation, e-commerce sales, app installs, brand awareness, or
                customer acquisition.
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
              src="/seo/paid-ads.png"
              alt="Paid advertising services illustration"
            />
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="Why Paid Advertising Matters"
              subtitle="Organic marketing is important, but it often takes time to build momentum. Paid advertising allows businesses to achieve immediate visibility and accelerate growth."
            />
            <div className="flex flex-col gap-[var(--size--m)]">
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)] font-medium">
                Benefits of Paid Advertising:
              </p>
              <ul className="grid grid-cols-1 gap-[var(--size--s)] sm:grid-cols-2">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-[var(--size--s)]">
                    <span className="mt-[0.15rem] shrink-0 text-[var(--brand--brand-electric-blue)]">
                      ✔
                    </span>
                    <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-[var(--size--m)] text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                With advanced targeting capabilities, paid advertising ensures your marketing
                budget is spent on reaching people who are most likely to become customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Our Paid Advertising Services" />
          </div>
          <div className="grid grid-cols-2 gap-[var(--size--xl)] max-[991px]:grid-cols-1">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className={`flex flex-col gap-[var(--size--l)] rounded-[var(--radius--radius-xxl)] p-[var(--size--2xl)] ${
                  i % 3 === 1
                    ? "bg-[var(--brand--brand-electric-blue)] text-white"
                    : "bg-[var(--neutral--neutral-grey-200)]"
                } ${i === SERVICES.length - 1 ? "max-[991px]:col-span-1 lg:col-span-2 lg:max-w-[calc(50%-var(--size--xl)/2)] lg:justify-self-center" : ""}`}
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

      {/* Process */}
      <section className="flex flex-col items-center bg-black pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Our Paid Advertising Process" dark />
          </div>
          <div className="grid grid-cols-3 gap-[var(--size--l)] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
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
                {"items" in step && step.items && (
                  <ul className="flex flex-col gap-[var(--size--xs)] pt-[var(--size--xs)]">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-[var(--size--s)]">
                        <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                        <span className="text-white/80 text-[length:var(--typography--text-s)] leading-[var(--typography--line-height-l)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
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
            <SectionHeading
              title="Industries We Serve"
              subtitle="We create paid advertising campaigns for:"
              centered
            />
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

      {/* Results */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="Results You Can Expect"
              subtitle="Every campaign is customized to achieve measurable and sustainable growth."
            />
            <div className="flex flex-col gap-[var(--size--m)]">
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                Our paid advertising campaigns are designed to help businesses:
              </p>
              <ul className="grid grid-cols-1 gap-[var(--size--s)] sm:grid-cols-2">
                {RESULTS.map((result) => (
                  <li key={result} className="flex items-start gap-[var(--size--s)]">
                    <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                    <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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
              Ready to Grow with Paid Advertising?
            </h2>
            <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
              Your customers are searching, browsing, and engaging online every day. Let Let&apos;s
              Advertising help you reach them with targeted advertising campaigns that drive real
              business results.
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
