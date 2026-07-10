"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { ServiceHeroImage } from "@/components/ServiceHeroImage";
import type { FaqItem } from "@/types";
import { bookingLinkProps } from "@/lib/site";

const BENEFITS = [
  "Build trust and credibility",
  "Improve search engine visibility",
  "Generate more leads and inquiries",
  "Increase online sales",
  "Deliver an exceptional user experience",
  "Strengthen your brand identity",
  "Stay ahead of competitors",
];

const SERVICES = [
  {
    title: "Custom Website Design",
    body: "We create unique, visually appealing websites that reflect your brand identity and deliver an engaging user experience.",
  },
  {
    title: "Responsive Design",
    body: "Every website is fully optimized for desktops, tablets, and smartphones, ensuring a seamless experience across all devices.",
  },
  {
    title: "UI/UX Design",
    body: "Our focus is on intuitive navigation, clean layouts, and user-friendly interfaces that encourage visitors to take action.",
  },
  {
    title: "Business Website Development",
    body: "From corporate websites to service-based businesses, we build professional websites designed to establish credibility and drive growth.",
  },
  {
    title: "E-commerce Website Design",
    body: "Launch a secure and scalable online store with a smooth shopping experience, product management, and easy checkout functionality.",
  },
  {
    title: "Landing Page Design",
    body: "We design high-converting landing pages for advertising campaigns, product launches, and lead generation.",
  },
  {
    title: "Website Redesign",
    body: "Already have a website? We can modernize its design, improve performance, and enhance the overall user experience.",
  },
  {
    title: "Website Maintenance & Support",
    body: "Keep your website updated, secure, and running smoothly with our ongoing maintenance and technical support services.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    body: "We understand your business, target audience, and project goals to create the right digital strategy.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    body: "Our designers create visually engaging layouts that align with your brand and business objectives.",
  },
  {
    step: "03",
    title: "Development",
    body: "We transform approved designs into a fully functional, responsive, and optimized website.",
  },
  {
    step: "04",
    title: "Testing",
    body: "Every website undergoes rigorous testing for speed, responsiveness, security, and compatibility across browsers and devices.",
  },
  {
    step: "05",
    title: "Launch",
    body: "Once approved, we deploy your website and ensure everything runs smoothly from day one.",
  },
  {
    step: "06",
    title: "Ongoing Support",
    body: "We continue to provide updates, maintenance, and improvements as your business grows.",
  },
];

const WHY_CHOOSE = [
  "Creative and custom website designs",
  "Mobile-first and responsive approach",
  "Fast-loading and SEO-friendly websites",
  "User-focused design for higher conversions",
  "Secure, scalable, and easy-to-manage solutions",
  "Affordable pricing with transparent communication",
  "Dedicated support from planning to launch",
];

const INDUSTRIES = [
  "Real Estate",
  "Healthcare",
  "Education",
  "Restaurants & Cafes",
  "E-commerce",
  "Manufacturing",
  "Finance",
  "Travel & Tourism",
  "Legal Services",
  "Startups & Small Businesses",
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 2–6 weeks, depending on the project's complexity and requirements.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. Every website we build is fully responsive and optimized for all screen sizes.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can refresh your current website with a modern design, improved functionality, and better performance.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Yes. We follow SEO best practices, including clean code, fast loading speeds, optimized structure, and mobile responsiveness.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer ongoing maintenance, security updates, backups, and technical support to keep your website running efficiently.",
  },
];

const CTA_BENEFITS = [
  "Free Website Consultation",
  "Custom Design Strategy",
  "Mobile-First & SEO-Ready Builds",
  "Dedicated Support from Planning to Launch",
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

export function WebDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center bg-black pt-[9.85rem] pb-[var(--size--8xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#57e5b233,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(#fff0,#000)]" />
        </div>

        <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 items-center gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <div className="flex flex-col gap-[var(--size--xl)]">
              <div className="text-[length:var(--typography--text-m)] font-medium uppercase tracking-[0.12em] text-white/60">
                Web Design Services
              </div>
              <h1 className="font-semibold text-white text-[length:var(--typography--h1)] max-[991px]:text-[length:var(--typography--h1-tablet)] max-[767px]:text-[length:var(--typography--h1-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                Build a Website That Grows Your Business
              </h1>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                Your website is often the first impression customers have of your brand. At
                Let&apos;s Advertising, we design modern, responsive, and high-performing websites
                that not only look great but also help you generate leads, increase sales, and
                strengthen your online presence.
              </p>
              <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                Whether you&apos;re a startup, small business, or established company, we create
                websites tailored to your goals, industry, and audience.
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
              src="/seo/web-design.png"
              alt="Web design services illustration"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="flex flex-col items-center bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="grid grid-cols-2 gap-[var(--size--4xl)] max-[991px]:grid-cols-1">
            <SectionHeading
              title="Benefits of a Professional Website"
              subtitle="A professionally designed website helps you stand out online and turn visitors into customers."
            />
            <div className="flex flex-col gap-[var(--size--m)]">
              <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
                A professionally designed website helps you:
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
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Our Web Design Services" />
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
                <h3
                  className={`font-semibold text-[length:var(--typography--h5)] max-[991px]:text-[length:var(--typography--h5-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em] ${i % 3 === 1 ? "text-white" : ""}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] ${i % 3 === 1 ? "text-white/90" : "text-[var(--brand--brand-charcoal)]"}`}
                >
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="flex flex-col items-center bg-black pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading title="Our Web Design Process" dark />
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
          <ul className="grid w-full max-w-[48rem] grid-cols-1 gap-[var(--size--m)] sm:grid-cols-2">
            {WHY_CHOOSE.map((item) => (
              <li
                key={item}
                className="flex items-start gap-[var(--size--s)] rounded-[var(--radius--radius-xxl)] bg-white p-[var(--size--l)]"
              >
                <span className="mt-[0.15rem] shrink-0 text-[var(--brand--brand-electric-blue)]">
                  ✓
                </span>
                <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex w-full max-w-[var(--container--main-size)] flex-col items-center px-[var(--container--size-padding)] mx-auto">
          <div className="mb-[var(--size--5xl)]">
            <SectionHeading
              title="Industries We Serve"
              subtitle="We design websites for businesses across various industries, including:"
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
              Ready to Build Your Website?
            </h2>
            <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
              Your website should do more than just look good—it should help your business grow. At
              Let&apos;s Advertising, we combine creativity, technology, and strategy to deliver
              websites that attract visitors, engage customers, and drive measurable results.
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
