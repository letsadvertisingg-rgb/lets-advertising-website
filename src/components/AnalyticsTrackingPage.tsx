"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { ServiceHeroImage } from "@/components/ServiceHeroImage";
import type { FaqItem } from "@/types";

const BENEFITS = [
  "Understand customer behavior",
  "Measure marketing performance",
  "Identify growth opportunities",
  "Improve conversion rates",
  "Reduce wasted ad spend",
  "Track ROI across channels",
  "Make data-driven decisions",
  "Scale marketing efforts with confidence",
];

const SERVICES = [
  {
    title: "Google Analytics 4 (GA4) Setup & Management",
    intro: "Gain complete visibility into how users interact with your website and digital properties.",
    body: "We ensure your analytics implementation captures accurate and actionable data.",
    items: [
      "GA4 Property Setup",
      "Event Tracking Configuration",
      "Conversion Tracking",
      "Enhanced Ecommerce Tracking",
      "Cross-Domain Tracking",
      "Audience Creation",
      "Custom Reporting",
      "Data Validation & Audits",
    ],
  },
  {
    title: "Tag Management Solutions",
    intro: "Proper tracking starts with proper tag implementation.",
    body: "We create scalable tracking frameworks that support current and future marketing needs.",
    items: [
      "Google Tag Manager Setup",
      "Event Tracking Configuration",
      "Pixel Deployment",
      "Conversion Tracking Setup",
      "Form Tracking",
      "Scroll Tracking",
      "Video Tracking",
      "Custom Event Development",
    ],
  },
  {
    title: "Marketing Attribution & Customer Journey Analysis",
    intro: "Understand how different marketing channels contribute to conversions.",
    body: "This enables smarter budget allocation and improved marketing efficiency.",
    items: [
      "Top-performing channels",
      "Customer acquisition paths",
      "Conversion touchpoints",
      "Campaign effectiveness",
      "Revenue contribution by source",
    ],
  },
  {
    title: "Dashboard Development & Reporting",
    intro: "Access critical business insights through easy-to-understand dashboards.",
    body: "Get real-time visibility into your business performance without manually compiling reports.",
    items: [
      "Looker Studio",
      "GA4 Reports",
      "Marketing Dashboards",
      "Executive Performance Reports",
      "Multi-Channel Reporting",
      "KPI Dashboards",
    ],
  },
  {
    title: "Conversion Rate Optimization (CRO) Analytics",
    intro: "Traffic alone does not drive growth. Conversions do.",
    body: "We help improve website effectiveness and maximize existing traffic.",
    items: [
      "Funnel Analysis",
      "User Behavior Tracking",
      "Landing Page Analysis",
      "Heatmap Review",
      "Form Performance Analysis",
      "Conversion Opportunity Identification",
    ],
  },
  {
    title: "Advertising Analytics & Campaign Measurement",
    intro: "Track and measure advertising performance across multiple platforms.",
    body: "We connect advertising data with business outcomes to provide a complete performance picture.",
    items: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "YouTube Ads",
      "Programmatic Advertising",
      "Display Advertising",
    ],
  },
  {
    title: "Ecommerce Analytics",
    intro: "Understand what drives online sales and customer retention.",
    body: "Gain insights that help improve sales performance and customer experience.",
    items: [
      "Purchase Tracking",
      "Product Performance Analysis",
      "Cart Abandonment Analysis",
      "Revenue Attribution",
      "Customer Lifetime Value Reporting",
      "Shopping Funnel Analysis",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Audit & Discovery",
    body: "We assess your current analytics setup, tracking systems, and reporting capabilities.",
  },
  {
    step: "02",
    title: "Tracking Strategy Development",
    body: "A customized measurement framework is created based on your business objectives and KPIs.",
  },
  {
    step: "03",
    title: "Implementation & Configuration",
    body: "We deploy tracking solutions, analytics platforms, tags, and reporting systems.",
  },
  {
    step: "04",
    title: "Data Validation",
    body: "Our team thoroughly tests and verifies tracking accuracy to ensure reliable reporting.",
  },
  {
    step: "05",
    title: "Reporting & Insights",
    body: "Receive actionable reports that highlight performance trends, opportunities, and recommendations.",
  },
  {
    step: "06",
    title: "Continuous Optimization",
    body: "Analytics is an ongoing process. We continuously monitor data quality and identify new optimization opportunities.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Analytics Experts",
    body: "Our team specializes in marketing analytics, attribution modeling, and performance measurement.",
  },
  {
    title: "Accurate Data Collection",
    body: "We ensure data integrity through rigorous implementation and validation processes.",
  },
  {
    title: "Actionable Insights",
    body: "We go beyond reporting by providing strategic recommendations that drive business growth.",
  },
  {
    title: "Custom Dashboards",
    body: "Access real-time performance data through dashboards tailored to your business goals.",
  },
  {
    title: "Privacy-First Measurement",
    body: "We implement analytics solutions that align with modern privacy regulations and best practices.",
  },
];

const PLATFORMS = [
  "Google Analytics 4 (GA4)",
  "Google Tag Manager (GTM)",
  "Looker Studio",
  "Google Ads",
  "Meta Ads Manager",
  "LinkedIn Campaign Manager",
  "YouTube Analytics",
  "Search Console",
  "CRM Integrations",
  "Ecommerce Platforms",
];

const INDUSTRIES = [
  "E-commerce",
  "SaaS",
  "Technology",
  "Healthcare",
  "Education",
  "Real Estate",
  "Finance",
  "Hospitality",
  "Manufacturing",
  "Professional Services",
  "Automotive",
  "Local Businesses",
];

const KEY_METRICS = [
  "Website Traffic",
  "Lead Generation",
  "Conversion Rate",
  "Customer Acquisition Cost (CAC)",
  "Return on Ad Spend (ROAS)",
  "Revenue Growth",
  "Customer Lifetime Value (CLV)",
  "Engagement Metrics",
  "Marketing ROI",
  "Sales Funnel Performance",
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Why is analytics important for my business?",
    answer:
      "Analytics provides visibility into customer behavior and marketing performance, helping businesses make informed decisions and improve ROI.",
  },
  {
    question: "What is GA4?",
    answer:
      "Google Analytics 4 (GA4) is Google's latest analytics platform that tracks user interactions across websites and apps while providing advanced reporting capabilities.",
  },
  {
    question: "Can you fix inaccurate tracking?",
    answer:
      "Yes. We audit existing implementations, identify tracking issues, and ensure accurate data collection across all platforms.",
  },
  {
    question: "Do I need Google Tag Manager?",
    answer:
      "Google Tag Manager simplifies tracking management and allows businesses to deploy and update tracking codes efficiently.",
  },
  {
    question: "Can analytics improve marketing performance?",
    answer:
      "Absolutely. Analytics helps identify high-performing channels, optimize campaigns, improve user experiences, and increase conversions.",
  },
];

const CTA_BENEFITS = [
  "Free Analytics Audit",
  "GA4 & Tag Manager Setup",
  "Custom Dashboards & Reporting",
  "Conversion Tracking Solutions",
  "Ongoing Analytics Support",
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

export function AnalyticsTrackingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center bg-black pt-[9.85rem] pb-[var(--size--8xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#6281fd33,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(#fff0,#000)]" />
        </div>

        <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 items-center gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <div className="flex flex-col gap-[var(--size--xl)]">
              <div className="text-[length:var(--typography--text-m)] font-medium uppercase tracking-[0.12em] text-white/60">
                Analytics &amp; Marketing Measurement Services
              </div>
              <h1 className="font-semibold text-white text-[length:var(--typography--h1)] max-[991px]:text-[length:var(--typography--h1-tablet)] max-[767px]:text-[length:var(--typography--h1-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                Transform Data Into Growth with Advanced Analytics Solutions
              </h1>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                Data is the foundation of every successful marketing strategy. Without accurate
                tracking and measurement, businesses struggle to understand what&apos;s working,
                where customers are coming from, and how marketing investments impact revenue.
              </p>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                At Let&apos;s Advertising, we help businesses unlock the full potential of their
                data through advanced analytics, conversion tracking, reporting dashboards, and
                performance measurement solutions. Our analytics services provide the insights
                needed to make smarter decisions, optimize campaigns, and maximize return on
                investment.
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
              src="/seo/analytics.png"
              alt="Analytics and marketing measurement illustration"
            />
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="Why Analytics Matters"
              subtitle="Every click, visit, form submission, and purchase tells a story about your customers."
            />
            <div className="flex flex-col gap-[var(--size--m)]">
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)] font-medium">
                With a strong analytics foundation, businesses can:
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
                Instead of relying on assumptions, analytics provides clear insights that drive
                measurable business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Our Analytics Services" />
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
                {i === 2 && (
                  <p
                    className={`text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] ${i % 3 === 1 ? "text-white/90" : "text-[var(--brand--brand-charcoal)]"}`}
                  >
                    Our attribution solutions help businesses identify:
                  </p>
                )}
                {i === 3 && (
                  <p
                    className={`text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] ${i % 3 === 1 ? "text-white/90" : "text-[var(--brand--brand-charcoal)]"}`}
                  >
                    We create custom reporting solutions using:
                  </p>
                )}
                {i === 4 && (
                  <p
                    className={`text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] ${i % 3 === 1 ? "text-white/90" : "text-[var(--brand--brand-charcoal)]"}`}
                  >
                    Our analytics team identifies barriers affecting user experience and conversion
                    performance.
                  </p>
                )}
                {i === 5 && (
                  <p
                    className={`text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] ${i % 3 === 1 ? "text-white/90" : "text-[var(--brand--brand-charcoal)]"}`}
                  >
                    Supported platforms include:
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
            <SectionHeading title="Our Analytics Process" dark />
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

      {/* Platforms */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading
              title="Analytics Platforms We Support"
              subtitle="We work with leading analytics and reporting tools, including:"
              centered
            />
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

      {/* Industries */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading
              title="Industries We Serve"
              subtitle="Our analytics solutions help businesses across various industries, including:"
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

      {/* Key Metrics */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="Key Metrics We Help You Track"
              subtitle="We help businesses monitor critical KPIs such as:"
            />
            <ul className="grid grid-cols-1 gap-[var(--size--s)] sm:grid-cols-2">
              {KEY_METRICS.map((metric) => (
                <li key={metric} className="flex items-start gap-[var(--size--s)]">
                  <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                  <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                    {metric}
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
              Ready to Make Better Decisions with Data?
            </h2>
            <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
              Your business generates valuable data every day. Let Let&apos;s Advertising help you
              transform that data into actionable insights that drive growth, improve performance,
              and maximize marketing ROI.
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
