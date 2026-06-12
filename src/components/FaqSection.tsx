"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import type { FaqItem } from "@/types";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does Pay.com support SMBs as well as enterprise merchants?",
    answer:
      "Yes. SMBs get a no-code drop-in checkout, transparent flat-rate pricing, and self-serve onboarding, while enterprise customers get bespoke commercials, dedicated account management, and access to advanced orchestration features like custom routing rules and multi-acquirer setups.",
  },
  {
    question: "How fast can I get started and go live?",
    answer:
      "Most merchants complete onboarding and start accepting payments within days, not weeks. Developers get sandbox access immediately, and the drop-in checkout or API typically lets you go live in under a week.",
  },
  {
    question: "Does Pay.com act as the acquirer, or does it connect to third-party acquirers?",
    answer:
      "Both. Pay.com offers its own licensed acquiring in key markets and also connects to third-party acquirers, banks, and APM providers worldwide. That means you can use Pay.com end-to-end or keep your existing providers and let Pay.com orchestrate across them.",
  },
  {
    question: "What is Pay.com and how does it work?",
    answer:
      "Pay.com is an all-in-one payment infrastructure that lets merchants accept online payments through a single, unified platform. It combines a payment gateway, acquiring, orchestration, a token vault, and analytics, so you plug in once and route, optimize, and settle payments globally without stitching together separate vendors.",
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
              Have more questions? Get all the answers.
            </p>
            <Link
              href="/faq"
              aria-label="View all FAQs"
              className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer px-[2rem] py-[1rem] no-underline"
            >
              <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] border border-black bg-transparent" />
              <span className="relative z-[1] text-black text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                <StaggerText text="View all FAQs" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
