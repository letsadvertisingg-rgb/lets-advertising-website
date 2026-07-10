"use client";

import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { Wordmark } from "@/components/Wordmark";
import type { FooterColumn } from "@/types";
import { BOOKING_URL, bookingLinkProps } from "@/lib/site";

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { label: "Website Design & Development", href: "/web-design" },
      { label: "SEO", href: "/seo-services" },
      { label: "Answer Engine Optimization (AEO)", href: "/aeo-services" },
      { label: "Social Media Marketing", href: "/social-media-marketing" },
      { label: "Google & Paid Advertising", href: "/paid-advertising" },
      { label: "Content Marketing", href: "/content-marketing" },
      { label: "Analytics & Tracking", href: "/analytics-tracking" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Retail & E-commerce", href: "/#industries" },
      { label: "Real Estate", href: "/#industries" },
      { label: "Healthcare", href: "/#industries" },
      { label: "Local Businesses", href: "/#industries" },
      { label: "Startups", href: "/#industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Why Choose Us", href: "/#why-us" },
      { label: "Our Process", href: "/#process" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: BOOKING_URL },
    ],
  },
];

function FooterLinkColumn({ column }: { column: FooterColumn }) {
  return (
    <div className="flex flex-col gap-[1.25rem]">
      <div className="text-[length:var(--typography--label-xs)] uppercase font-semibold text-[var(--neutral--neutral-white-300)]">
        {column.heading}
      </div>
      <div className="footer-links-wrapper">
        {column.links.map((link, i) => (
          <Link
            key={link.label + i}
            href={link.href}
            {...(link.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={`footer-link is-animated text-white no-underline ${i === 0 ? "pt-0 pb-2" : "py-2"}`}
          >
            <div className="text-[length:var(--typography--text-s)] leading-[var(--typography--line-height-l)]">
              {link.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section relative flex flex-col items-center bg-black text-white pt-[var(--size--8xl)] pb-[4rem]">
      <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto grid grid-cols-1 min-[992px]:grid-cols-2 gap-[3rem]">
        {/* Left: brand + tagline + CTA */}
        <div className="flex flex-col justify-between gap-[var(--size--3xl)]">
          <div className="flex flex-col items-start gap-[var(--size--3xl)]">
            <div className="flex flex-col gap-[var(--size--2xl)]">
              <Link href="/" className="no-underline">
                <Wordmark className="text-white text-[1.5rem]" />
              </Link>
              <div className="text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)] text-white">
                Let&rsquo;s build your brand. Let&rsquo;s grow together.
              </div>
            </div>
            <Link
              {...bookingLinkProps}
              aria-label="Get in Touch"
              className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer px-[2rem] py-[1rem] no-underline"
            >
              <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] border border-white bg-transparent" />
              <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                <StaggerText text="Get in Touch" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right: link columns */}
        <div className="grid grid-cols-3 max-[767px]:grid-cols-2 gap-[var(--size--3xl)]">
          {FOOTER_COLUMNS.map((col) => (
            <FooterLinkColumn key={col.heading} column={col} />
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto mt-[var(--size--8xl)]">
        <div className="text-[length:var(--typography--text-s)] leading-[var(--typography--line-height-l)]">
          Copyright © {year} Let&rsquo;s Advertising. All rights reserved.
        </div>
      </div>

      {/* Bottom zig-zag visual strip */}
      <div className="visual-bottom absolute bottom-0 left-0 right-0 flex items-end max-h-[1rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/visual.webp" alt="" sizes="100vw" className="w-full h-full custom" />
      </div>
    </footer>
  );
}
