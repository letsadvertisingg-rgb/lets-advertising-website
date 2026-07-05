"use client";

import { useState } from "react";
import Link from "next/link";
import type { FaqItem } from "@/types";

export function ArticleFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-wrapper mx-auto min-w-0 max-w-full cursor-pointer">
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
                <div className="faq-paragraph max-w-[81ch]">
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

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[var(--size--s)]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-[var(--size--s)]">
          <span className="mt-[0.4rem] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
          <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[var(--size--s)]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-[var(--size--s)]">
          <span className="text-[var(--brand--brand-mint)]">✔</span>
          <span className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ArticleSection({
  id,
  title,
  children,
  alt = false,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[7rem] py-[var(--size--3xl)] max-[767px]:py-[var(--size--2xl)] ${alt ? "rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] px-[var(--size--2xl)] -mx-[var(--size--2xl)] max-[767px]:mx-0 max-[767px]:px-[var(--size--l)]" : "border-t border-[var(--border)] first:border-t-0"}`}
    >
      <h2 className="mb-[var(--size--xl)] font-semibold text-[length:var(--typography--h3)] max-[991px]:text-[length:var(--typography--h3-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
        {title}
      </h2>
      <div className="flex flex-col gap-[var(--size--l)]">{children}</div>
    </section>
  );
}

export function ArticleParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)] text-[var(--brand--brand-charcoal)]">
      {children}
    </p>
  );
}

export function BlogArticleHero({
  title,
  category,
  date,
  readTime,
  author,
}: {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
}) {
  return (
    <section className="relative flex flex-col items-center bg-black pt-[9.85rem] pb-[var(--size--5xl)] max-[767px]:pb-[var(--size--3xl)]">
      <div className="absolute inset-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#57e5b222,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(#fff0,#000)]" />
      </div>

      <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <Link
          href="/blog"
          className="mb-[var(--size--xl)] inline-flex items-center gap-[0.5rem] text-[length:var(--typography--text-s)] font-medium text-white/60 no-underline hover:text-white transition-colors"
        >
          ← Back to Blog
        </Link>
        <div className="flex flex-wrap items-center gap-[var(--size--s)] mb-[var(--size--l)]">
          <span className="rounded-[99999px] bg-white/10 px-[var(--size--m)] py-[var(--size--xs)] text-[length:var(--typography--text-xs)] font-semibold uppercase tracking-[0.08em] text-[var(--brand--brand-mint)]">
            {category}
          </span>
          <span className="text-[length:var(--typography--text-s)] text-white/50">
            {date} · {readTime}
            {author ? ` · ${author}` : ""}
          </span>
        </div>
        <h1 className="font-semibold text-white text-[length:var(--typography--h1)] max-[991px]:text-[length:var(--typography--h1-tablet)] max-[767px]:text-[length:var(--typography--h1-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
          {title}
        </h1>
      </div>
    </section>
  );
}

export function BlogArticleCta({
  title,
  body,
  subtext,
  ctaLabel,
  ctaHref = "/#contact",
}: {
  title: string;
  body: string;
  subtext?: string;
  ctaLabel: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative flex flex-col items-center justify-center bg-black py-[var(--size--8xl)] max-[767px]:py-[var(--size--5xl)]">
      <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="mx-auto flex max-w-[48rem] flex-col items-center gap-[var(--size--2xl)] text-center">
          <h2 className="font-semibold text-white text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
            {title}
          </h2>
          <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
            {body}
          </p>
          {subtext && (
            <p className="text-white/80 text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
              {subtext}
            </p>
          )}
          <Link
            href={ctaHref}
            aria-label={ctaLabel}
            className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer rounded-[9999px] px-[2rem] py-[1rem] no-underline"
          >
            <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] bg-[var(--brand--brand-electric-blue)]" />
            <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
              {ctaLabel}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
