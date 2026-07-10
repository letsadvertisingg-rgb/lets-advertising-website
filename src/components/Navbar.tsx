"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { Wordmark } from "@/components/Wordmark";
import { ChevronDownIcon } from "@/components/icons";
import { BOOKING_URL, bookingLinkProps } from "@/lib/site";

interface DdCard {
  label: string;
  description: string;
  href: string;
}

const SERVICES: DdCard[] = [
  {
    label: "Website Design & Development",
    description: "Professional, mobile-friendly websites that turn visitors into customers.",
    href: "/web-design",
  },
  {
    label: "SEO",
    description: "Improve your Google rankings and reach customers actively searching for you.",
    href: "/seo-services",
  },
  {
    label: "Answer Engine Optimization (AEO)",
    description: "Get recommended by ChatGPT, Google AI Overviews, Gemini, and Perplexity.",
    href: "/aeo-services",
  },
  {
    label: "Social Media Marketing",
    description: "Build a strong social presence and generate leads where your customers are.",
    href: "/social-media-marketing",
  },
  {
    label: "Google & Paid Advertising",
    description: "Reach customers instantly with carefully managed, high-return campaigns.",
    href: "/paid-advertising",
  },
  {
    label: "Content Marketing",
    description: "Valuable content that builds credibility and encourages customer action.",
    href: "/content-marketing",
  },
  {
    label: "Analytics & Tracking",
    description: "Monthly reports, lead tracking, and complete campaign transparency.",
    href: "/analytics-tracking",
  },
];

const INDUSTRIES: DdCard[] = [
  {
    label: "Retail & E-commerce",
    description: "Drive online sales with targeted campaigns and optimized stores.",
    href: "/#industries",
  },
  {
    label: "Real Estate & Local Businesses",
    description: "Get found by customers in your area when they're ready to buy.",
    href: "/#industries",
  },
  {
    label: "Healthcare & Education",
    description: "Build trust and reach the people who need your services.",
    href: "/#industries",
  },
  {
    label: "Startups & Enterprise Brands",
    description: "Scalable strategies for every stage of business growth.",
    href: "/#industries",
  },
];

const PROCESS: DdCard[] = [
  {
    label: "Understand Your Business",
    description: "We learn your goals, audience, competitors, and current performance.",
    href: "/#process",
  },
  {
    label: "Create a Growth Strategy",
    description: "A customized plan focused on your business objectives.",
    href: "/#process",
  },
  {
    label: "Launch & Optimize",
    description: "We implement campaigns and continuously improve performance.",
    href: "/#process",
  },
  {
    label: "Scale Success",
    description: "We expand what works to drive even greater growth.",
    href: "/#process",
  },
];

const COMPANY: DdCard[] = [
  {
    label: "Why Choose Us",
    description: "Client-focused, transparent, data-driven, and results-oriented.",
    href: "/#why-us",
  },
  {
    label: "Blog",
    description: "Expert guides on SEO, Answer Engine Optimization, and the future of search.",
    href: "/blog",
  },
  {
    label: "Contact",
    description: "Get a free consultation and discover your growth potential.",
    href: BOOKING_URL,
  },
];

const MENUS: { label: string; cards: DdCard[] }[] = [
  { label: "Services", cards: SERVICES },
  { label: "Industries", cards: INDUSTRIES },
  { label: "Process", cards: PROCESS },
  { label: "Company", cards: COMPANY },
];

function DdCardLink({ card, onNavigate }: { card: DdCard; onNavigate: () => void }) {
  const external = card.href.startsWith("http");
  return (
    <Link
      href={card.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={onNavigate}
      className="is-animated flex min-w-0 flex-col gap-[0.75rem] rounded-[0.75rem] p-[0.75rem] no-underline transition-colors hover:bg-white/5"
    >
      <div className="flex min-w-0 items-start gap-[0.5rem]">
        <div className="mt-[0.4em] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--brand--brand-mint)]" />
        <span className="min-w-0 text-white text-[length:var(--typography--button-text-s)] font-semibold leading-snug">
          {card.label}
        </span>
      </div>
      <p className="text-[length:var(--typography--text-xs)] leading-[1.5] text-[var(--neutral--neutral-grey-400)]">
        {card.description}
      </p>
    </Link>
  );
}

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const anyOverlay = openMenu !== null || mobileOpen;

  return (
    <div className="fixed inset-x-0 top-0 z-[999] flex flex-col items-center">
      {/* blur backdrop while a dropdown / mobile menu is open — z-[1] keeps it below nav content */}
      <div
        className="nav-bg-blur fixed inset-0 z-[1] h-screen bg-black/50 backdrop-blur-[6px]"
        style={{
          display: anyOverlay ? "flex" : "none",
          opacity: anyOverlay ? 1 : 0,
          pointerEvents: anyOverlay ? "auto" : "none",
        }}
        onClick={() => {
          setOpenMenu(null);
          setMobileOpen(false);
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] flex w-full max-w-[var(--container--main-size)] items-center justify-between px-[var(--container--size-padding)]">
        <div
          className="relative z-[4] my-[var(--size--m)] flex w-full items-center justify-between rounded-[16px] bg-[var(--neutral--neutral-black-400)] py-[0.625rem] pr-[0.625rem] pl-[1.25rem]"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {/* Brand */}
          <Link href="/" className="z-[4] shrink-0 no-underline transition-opacity hover:opacity-80">
            <Wordmark className="text-white text-[1.125rem]" />
          </Link>

          {/* Desktop menu triggers */}
          <nav className="flex items-center pl-[2rem] max-[991px]:hidden">
            {MENUS.map((menu) => (
              <button
                key={menu.label}
                type="button"
                className="flex cursor-pointer items-center gap-[0.5rem] border-0 bg-transparent px-[1rem] py-[0.5rem] text-white text-[length:var(--typography--button-text-s)] font-medium"
                aria-expanded={openMenu === menu.label}
                aria-haspopup="true"
                onMouseEnter={() => setOpenMenu(menu.label)}
                onClick={() =>
                  setOpenMenu((current) => (current === menu.label ? null : menu.label))
                }
              >
                <span>{menu.label}</span>
                <span
                  className="inline-flex h-[0.75rem] w-[0.75rem] transition-transform duration-200"
                  style={{ transform: openMenu === menu.label ? "rotate(180deg)" : undefined }}
                >
                  <ChevronDownIcon width="100%" stroke="currentColor" className="text-white" />
                </span>
              </button>
            ))}
          </nav>

          {/* Right buttons */}
          <div className="relative z-[4] flex items-center gap-[0.75rem] max-[991px]:gap-[0.5rem]">
            <Link
              href="/#services"
              aria-label="Our Services"
              className="btn-animate-chars relative inline-flex items-center justify-center px-[1.5rem] py-[0.75rem] no-underline max-[991px]:hidden"
            >
              <div className="btn-animate-chars__bg pointer-events-none absolute inset-0 rounded-[99999px] bg-[var(--neutral--neutral-black-300)]" />
              <span className="relative z-[1] text-white text-[length:var(--typography--button-text-s)] font-semibold leading-[1.5] whitespace-nowrap">
                <StaggerText text="Our Services" />
              </span>
            </Link>
            <Link
              {...bookingLinkProps}
              aria-label="Get in Touch"
              className="btn-animate-chars relative inline-flex items-center justify-center px-[1.5rem] py-[0.75rem] no-underline"
            >
              <div className="btn-animate-chars__bg pointer-events-none absolute inset-0 rounded-[99999px] bg-white" />
              <span className="relative z-[1] text-black text-[length:var(--typography--button-text-s)] font-semibold leading-[1.5] whitespace-nowrap">
                <StaggerText text="Get in Touch" />
              </span>
            </Link>
            {/* Burger (mobile) */}
            <button
              aria-label="Menu"
              className="hidden max-[991px]:flex h-[43px] w-[43px] flex-col items-center justify-center gap-[5px] rounded-[99999px] bg-[var(--neutral--neutral-black-300)]"
              onClick={() => {
                setMobileOpen((o) => !o);
                setMobileSection(null);
              }}
            >
              <span
                className="block h-[2px] w-[16px] bg-white transition-transform"
                style={{ transform: mobileOpen ? "translateY(3.5px) rotate(45deg)" : undefined }}
              />
              <span
                className="block h-[2px] w-[16px] bg-white transition-transform"
                style={{ transform: mobileOpen ? "translateY(-3.5px) rotate(-45deg)" : undefined }}
              />
            </button>
          </div>

          {/* Desktop dropdown — full pill width so cards don't overlap */}
          {openMenu && (
            <div className="absolute left-0 right-0 top-full z-[5] pt-[0.5rem] max-[991px]:hidden">
              <div className="rounded-[0.75rem] bg-[var(--neutral--neutral-black-400)] p-[1.25rem] pb-[0.875rem]">
                <div className="grid w-full grid-cols-2 gap-[1rem] md:grid-cols-3">
                  {MENUS.find((m) => m.label === openMenu)!.cards.map((card) => (
                    <DdCardLink key={card.label} card={card} onNavigate={() => setOpenMenu(null)} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile menu panel */}
          {mobileOpen && (
            <div className="absolute left-0 right-0 top-full z-[3] mt-[0.5rem] hidden max-[991px]:block">
              <div className="flex flex-col gap-[0.25rem] rounded-[16px] bg-black p-[1rem]">
                {MENUS.map((menu) => (
                  <div key={menu.label} className="border-b border-white/10 last:border-b-0">
                    <button
                      className="flex w-full items-center justify-between py-[0.875rem] text-white text-[length:var(--typography--button-text-s)] font-semibold uppercase"
                      onClick={() => setMobileSection((s) => (s === menu.label ? null : menu.label))}
                    >
                      {menu.label}
                      <div
                        className="h-[8px] w-[8px] transition-transform duration-200"
                        style={{
                          transform: mobileSection === menu.label ? "rotate(180deg)" : undefined,
                        }}
                      >
                        <ChevronDownIcon width="100%" stroke="currentColor" className="text-white" />
                      </div>
                    </button>
                    {mobileSection === menu.label && (
                      <div className="flex flex-col gap-[0.25rem] pb-[0.875rem]">
                        {menu.cards.map((card) => (
                          <Link
                            key={card.label}
                            href={card.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-[0.375rem] text-white/80 text-[length:var(--typography--text-s)] no-underline"
                          >
                            {card.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
