"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import type { FooterColumn } from "@/types";

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Products",
    links: [
      { label: "Payments", href: "/payments" },
      { label: "Optimisation", href: "/optimisation" },
      { label: "Protection", href: "/protection" },
      { label: "Treasury", href: "/treasury" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Brand assets", href: "/brand-assets" },
    ],
  },
  {
    heading: "DEVELOPERS",
    links: [
      { label: "Documentation", href: "https://apiref.pay.com/" },
      { label: "API Reference", href: "https://apiref.pay.com/" },
      { label: "Connections", href: "/connections" },
    ],
  },
  {
    heading: "resources",
    links: [
      { label: "Blog, Newsroom & Case studies", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "pricing",
    links: [{ label: "Pricing", href: "/pricing-us" }],
  },
  {
    heading: "legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
      { label: "Cookie Policy", href: "/legal/cookie-policy" },
      { label: "Report a Complaint", href: "/legal/report-a-complaint" },
    ],
  },
];

const REGULATORY_TEXT = `Pay.com Group Entities ("Pay.com Group") operate under the brand name "Pay.com" with headquarters in Limassol, Cyprus. The Pay.com Group includes: PAYCOMCY LIMITED (HE 408974), a Cyprus Payment Institution regulated by the Central Bank of Cyprus (licence no. 115.1.2.42) providing payment services, including the issuing of payment instruments and the acquiring of payment transactions. PAY TECHNOLOGIES (CY) LIMITED (HE 437492), a Cyprus private limited company acting as the technology and payment gateway provider to the Group. PAY.COM US, INC. (Delaware file no. 6425328), a corporation registered in the State of Delaware, USA, acting as a registered Independent Sales Organization (ISO) under the sponsorship of a US Bank to provide merchant payment processing services across the United States.`;

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
  const [regulatoryOpen, setRegulatoryOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section relative flex flex-col items-center bg-black text-white pt-[var(--size--8xl)] pb-[4rem]">
      <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto grid grid-cols-1 min-[992px]:grid-cols-2 gap-[3rem]">
        {/* Left: brand + tagline + CTA + linkedin */}
        <div className="flex flex-col justify-between gap-[var(--size--3xl)]">
          <div className="flex flex-col items-start gap-[var(--size--3xl)]">
            <div className="flex flex-col gap-[var(--size--2xl)]">
              <Link href="/" className="footer-logo-wrapper flex justify-start min-w-[9.375rem] h-[1.875rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo-69d50a.svg" alt="Pay.com" className="w-full h-full" />
              </Link>
              <div className="text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)] text-white">
                Built to approve. Designed to convert.
              </div>
            </div>
            <Link
              href="/book-a-demo"
              aria-label="Get in Touch"
              className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer px-[2rem] py-[1rem] no-underline"
            >
              <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] border border-white bg-transparent" />
              <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                <StaggerText text="Get in Touch" />
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-[var(--size--2xl)] max-[991px]:hidden">
            <div className="linkedin-wrapper flex items-center gap-[0.75rem]">
              <div className="text-[length:var(--typography--text-m)] text-white">Follow us on:</div>
              <a
                href="https://uk.linkedin.com/company/pay-com-official"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/layer1.svg" alt="LinkedIn" className="linkedin-image" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: link columns */}
        <div className="grid grid-cols-3 max-[767px]:grid-cols-2 gap-[var(--size--3xl)]">
          {FOOTER_COLUMNS.map((col) => (
            <FooterLinkColumn key={col.heading} column={col} />
          ))}
        </div>

        {/* Mobile linkedin row */}
        <div className="hidden max-[991px]:flex flex-col gap-[var(--size--2xl)]">
          <div className="linkedin-wrapper flex items-center gap-[0.75rem]">
            <div className="text-[length:var(--typography--text-m)] text-white">Follow us on:</div>
            <a
              href="https://uk.linkedin.com/company/pay-com-official"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/layer1.svg" alt="LinkedIn" className="linkedin-image" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright + regulatory */}
      <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto mt-[var(--size--8xl)]">
        <div className="text-[length:var(--typography--text-s)] leading-[var(--typography--line-height-l)]">
          Copyright © {year} Pay.com - All rights reserved. Click here to access our{" "}
          <strong
            className="text-regulatory underline decoration-1 underline-offset-4 cursor-pointer"
            onClick={() => setRegulatoryOpen((o) => !o)}
          >
            Regulatory Information.
          </strong>
        </div>
        <div
          className="regulatory-wrapper overflow-hidden grid transition-[grid-template-rows] duration-300"
          style={{ gridTemplateRows: regulatoryOpen ? "1fr" : "0fr" }}
        >
          <div className="min-h-0">
            <div className="regulatory-inner-wrapper pt-[1.5rem]">
              <p className="text-[length:var(--typography--text-s)] leading-[var(--typography--line-height-l)] text-white">
                {REGULATORY_TEXT}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom zig-zag visual strip */}
      <div className="visual-bottom absolute bottom-0 left-0 right-0 flex items-end max-h-[1rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/visual.webp"
          alt="Colorful boat sails on calm blue ocean water under a clear sky."
          sizes="100vw"
          className="w-full h-full custom"
        />
      </div>
    </footer>
  );
}
