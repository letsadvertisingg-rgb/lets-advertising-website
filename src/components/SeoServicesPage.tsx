"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { ServiceHeroImage } from "@/components/ServiceHeroImage";
import type { FaqItem } from "@/types";
import { bookingLinkProps } from "@/lib/site";

const BENEFITS = [
  "Increase organic website traffic",
  "Improve Google search rankings",
  "Generate qualified leads",
  "Build brand authority",
  "Enhance user experience",
  "Increase conversions and sales",
  "Achieve long-term digital growth",
];

const SERVICES = [
  {
    title: "SEO Audit & Website Analysis",
    intro: "A successful SEO campaign starts with understanding your website's strengths and opportunities.",
    body: "We identify issues that impact your rankings and create a roadmap for improvement.",
    items: [
      "Technical SEO analysis",
      "Website health check",
      "Page speed assessment",
      "Mobile usability review",
      "Indexing and crawlability analysis",
      "Competitor benchmarking",
      "Keyword opportunity research",
    ],
  },
  {
    title: "Keyword Research & Strategy",
    intro: "Target the keywords your customers are actually searching for.",
    body: "By understanding user intent, we create strategies that attract the right audience.",
    items: [
      "High-intent keywords",
      "Long-tail keywords",
      "Local search terms",
      "Industry-specific queries",
      "Competitor keyword analysis",
      "Search intent mapping",
    ],
  },
  {
    title: "On-Page SEO",
    intro: "Optimize every page of your website for maximum visibility.",
    body: "We ensure every page is optimized for both search engines and users.",
    items: [
      "Meta title optimization",
      "Meta description writing",
      "Header tag optimization",
      "Internal linking",
      "Image optimization",
      "URL structure improvements",
      "Content optimization",
      "Schema markup implementation",
    ],
  },
  {
    title: "Technical SEO",
    intro: "A technically sound website is essential for strong search performance.",
    body: "We build a strong technical foundation that supports long-term SEO success.",
    items: [
      "Website speed optimization",
      "Core Web Vitals improvements",
      "Mobile-first optimization",
      "XML sitemap creation",
      "Robots.txt optimization",
      "HTTPS implementation",
      "Structured data (Schema)",
      "Crawl error resolution",
    ],
  },
  {
    title: "Content SEO",
    intro: "Content is the backbone of every successful SEO strategy.",
    body: "Our content is designed to answer user questions, improve rankings, and drive conversions.",
    items: [
      "Blog articles",
      "Service pages",
      "Landing pages",
      "Industry guides",
      "FAQs",
      "Pillar pages",
      "Topic clusters",
    ],
  },
  {
    title: "Local SEO",
    intro: "Help local customers find your business.",
    body: "Perfect for businesses that serve specific cities or regions.",
    items: [
      "Google Business Profile optimization",
      "Local keyword targeting",
      "Citation management",
      "Review strategy",
      "Local landing pages",
      "Location-based schema",
      "Local content optimization",
    ],
  },
  {
    title: "Link Building",
    intro: "Build authority through ethical, high-quality backlinks.",
    body: "Quality backlinks help improve your domain authority and search rankings.",
    items: [
      "Digital PR",
      "Guest posting",
      "Authority backlinks",
      "Local citations",
      "Resource page outreach",
      "Brand mentions",
    ],
  },
  {
    title: "Ecommerce SEO",
    intro: "Increase product visibility and online sales.",
    body: "Designed for businesses selling products online.",
    items: [
      "Product page optimization",
      "Category page optimization",
      "Shopping keyword strategy",
      "Product schema",
      "Internal linking",
      "Conversion-focused optimization",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Website Audit",
    body: "We evaluate your current SEO performance, technical health, and competitor landscape.",
  },
  {
    step: "02",
    title: "Strategy Development",
    body: "Our experts create a customized SEO roadmap aligned with your business goals and target audience.",
  },
  {
    step: "03",
    title: "Optimization",
    body: "We implement technical improvements, optimize content, and enhance your website structure.",
  },
  {
    step: "04",
    title: "Content & Authority Building",
    body: "We create valuable content and build quality backlinks to strengthen your online authority.",
  },
  {
    step: "05",
    title: "Performance Tracking",
    body: "We monitor rankings, traffic, conversions, and user behavior to continuously refine your strategy.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Experienced SEO Specialists",
    body: "Our team stays up to date with Google's latest algorithm updates and SEO best practices.",
  },
  {
    title: "Customized SEO Strategies",
    body: "Every business is unique, so we build personalized SEO plans tailored to your industry and goals.",
  },
  {
    title: "Ethical White-Hat SEO",
    body: "We follow search engine guidelines to deliver sustainable, long-term results without shortcuts.",
  },
  {
    title: "Transparent Reporting",
    body: "Receive clear monthly reports covering keyword rankings, traffic, conversions, and campaign performance.",
  },
  {
    title: "ROI-Focused Approach",
    body: "We focus on generating meaningful business outcomes, not just improving rankings.",
  },
];

const INDUSTRIES = [
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Education",
  "Technology",
  "SaaS",
  "Finance",
  "Hospitality",
  "Manufacturing",
  "Automotive",
  "Professional Services",
  "Local Businesses",
];

const SEO_TOOLS = [
  "Google Analytics 4 (GA4)",
  "Google Search Console",
  "Google Tag Manager",
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "Looker Studio",
];

const EXPECTED_RESULTS = [
  "Higher Google rankings",
  "Increased organic traffic",
  "Better lead quality",
  "Improved conversion rates",
  "Stronger online authority",
  "Lower customer acquisition costs",
  "Long-term business growth",
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is SEO?",
    answer:
      "SEO (Search Engine Optimization) is the process of improving your website's visibility in search engines like Google to attract more organic traffic.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. While some improvements may be visible within a few months, meaningful and lasting results typically develop over time depending on your industry and competition.",
  },
  {
    question: "Is SEO better than paid advertising?",
    answer:
      "SEO and paid advertising serve different purposes. SEO builds long-term organic visibility, while paid advertising provides immediate traffic. A combination of both often delivers the strongest results.",
  },
  {
    question: "Can you improve my existing website?",
    answer:
      "Yes. We audit your current website, identify SEO opportunities, and optimize it for better performance and rankings.",
  },
  {
    question: "Do you provide monthly SEO reports?",
    answer:
      "Yes. We provide transparent reports covering keyword rankings, traffic, technical improvements, conversions, and recommendations for continuous growth.",
  },
];

const CTA_BENEFITS = [
  "Free SEO Audit",
  "Customized SEO Strategy",
  "Technical & On-Page Optimization",
  "Content & Link Building",
  "Monthly Performance Reports",
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

export function SeoServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center bg-black pt-[9.85rem] pb-[var(--size--8xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0053ef33,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(#fff0,#000)]" />
        </div>

        <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 items-center gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <div className="flex flex-col gap-[var(--size--xl)]">
              <div className="text-[length:var(--typography--text-m)] font-medium uppercase tracking-[0.12em] text-white/60">
                Search Engine Optimization (SEO) Services
              </div>
              <h1 className="font-semibold text-white text-[length:var(--typography--h1)] max-[991px]:text-[length:var(--typography--h1-tablet)] max-[767px]:text-[length:var(--typography--h1-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                Increase Your Visibility. Drive Organic Traffic. Grow Your Business.
              </h1>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                Your customers are searching for products and services online every day. The
                question is—are they finding your business or your competitors?
              </p>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                At Let&apos;s Advertising, we help businesses improve their search engine rankings
                through strategic Search Engine Optimization (SEO). Our data-driven SEO solutions
                are designed to increase organic traffic, generate high-quality leads, and deliver
                sustainable long-term growth without relying solely on paid advertising.
              </p>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                Whether you&apos;re a local business, an e-commerce brand, or a growing enterprise,
                our SEO experts create customized strategies that help you rank higher and convert
                more visitors into customers.
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

            <ServiceHeroImage src="/seo/seo.png" alt="SEO services illustration" />
          </div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="Why SEO Matters"
              subtitle="Over 90% of online experiences begin with a search engine. If your website isn't visible on the first page of search results, you're missing valuable business opportunities."
            />
            <div className="flex flex-col gap-[var(--size--m)]">
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)] font-medium">
                Our SEO strategies help you:
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
                SEO isn&apos;t just about rankings—it&apos;s about connecting your business with
                customers who are actively searching for what you offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Our SEO Services" />
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
                  <p
                    className={`text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] ${i % 3 === 1 ? "text-white/80" : "text-[var(--brand--brand-charcoal)]"}`}
                  >
                    Our comprehensive audit includes:
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
            <SectionHeading title="Our SEO Process" dark />
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

      {/* Industries */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading
              title="Industries We Serve"
              subtitle="We provide SEO services for businesses across a wide range of industries, including:"
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

      {/* SEO Tools */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading
              title="SEO Tools We Work With"
              subtitle="To ensure data-driven optimization, we leverage industry-leading tools such as:"
              centered
            />
          </div>
          <div className="flex w-full flex-wrap justify-center gap-[var(--size--m)]">
            {SEO_TOOLS.map((tool) => (
              <span
                key={tool}
                className="rounded-[99999px] bg-white px-[var(--size--xl)] py-[var(--size--s)] text-[length:var(--typography--text-m)] font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-[var(--size--xl)] max-w-[48rem] text-center text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
            These tools help us monitor performance, identify opportunities, and optimize campaigns
            effectively.
          </p>
        </div>
      </section>

      {/* Expected Results */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="What Results Can You Expect?"
              subtitle="Our SEO campaigns are designed to deliver measurable improvements, including:"
            />
            <div className="flex flex-col gap-[var(--size--m)]">
              <ul className="grid grid-cols-1 gap-[var(--size--s)] sm:grid-cols-2">
                {EXPECTED_RESULTS.map((result) => (
                  <li key={result} className="flex items-start gap-[var(--size--s)]">
                    <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
                    <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                While SEO is a long-term investment, consistent optimization delivers sustainable
                results over time.
              </p>
            </div>
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
              Ready to Rank Higher on Google?
            </h2>
            <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
              Your customers are searching for your products and services right now. Let Let&apos;s
              Advertising help your business achieve higher rankings, increased organic traffic,
              and sustainable growth through expert SEO strategies.
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
