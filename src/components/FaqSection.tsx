"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import type { FaqItem } from "@/types";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What services does Let's Advertising offer?",
    answer:
      "We cover the full digital marketing stack: website design and development, search engine optimization (SEO), social media marketing, Google and paid advertising, content marketing, and analytics with performance tracking. Whether you need one service or a complete growth strategy, we build a plan around your business objectives.",
  },
  {
    question: "How do you measure and report results?",
    answer:
      "Every marketing decision we make is backed by data. You get monthly performance reports, website analytics, lead tracking, and campaign performance insights. You'll always know how many people visited your website, where your leads came from, which campaigns are working, and what return you're getting on your investment.",
  },
  {
    question: "Which businesses and industries do you work with?",
    answer:
      "We work with local businesses, startups, and established brands across retail and e-commerce, real estate, healthcare, automotive, education, hospitality, professional services, and enterprise. If your customers are online, we can help you reach them.",
  },
  {
    question: "How do we get started?",
    answer:
      "It starts with a free consultation. We learn your goals, your target audience, your competitors, and your current marketing performance. Then we build a customized growth strategy, launch and optimize your campaigns, and scale what works to drive even greater growth.",
  },
];

export function FaqSection() {
  // first item open on mount (the original auto-clicks the first FAQ)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
      <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="mx-auto max-w-[29.25rem] text-center">
          <h2 className="font-semibold text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] tracking-[-0.02em] leading-[1.1]">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-[var(--size--5xl)] max-[478px]:mt-[var(--size--2xl)]">
          <div className="faq-wrapper mx-auto mb-[4rem] min-w-[56rem] max-w-[56rem] max-[991px]:min-w-0 max-[991px]:max-w-full cursor-pointer">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="faq-item-wrapper">
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

          <div className="mx-auto flex w-full max-w-[23.4375rem] flex-col items-center gap-[var(--size--2xl)]">
            <p className="text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)] text-black text-center">
              Have more questions? We&rsquo;re happy to answer them.
            </p>
            <Link
              href="#contact"
              aria-label="Get in Touch"
              className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer px-[2rem] py-[1rem] no-underline"
            >
              <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] border border-black bg-transparent" />
              <span className="relative z-[1] text-black text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                <StaggerText text="Get in Touch" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
