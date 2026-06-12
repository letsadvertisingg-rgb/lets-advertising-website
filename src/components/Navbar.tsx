"use client";

import { useState } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { ChevronDownIcon } from "@/components/icons";

interface DdCard {
  label: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
}

const PRODUCTS: DdCard[] = [
  {
    label: "Payments",
    description: "Everything you need to accept payments globally.",
    href: "/payments",
    image: "/images/frame-2147257064-69d613.webp",
    imageAlt:
      "Hand holding a smartphone displaying the blue Pay.com logo on a black screen against a grey background.",
  },
  {
    label: "Optimisation",
    description: "Maximize approval rates and recover failed transactions.",
    href: "/optimisation",
    image: "/images/frame-2147257064-69d618.webp",
    imageAlt: "Person paying $1,000 using tablet and smartphone with contactless payment app displayed.",
  },
  {
    label: "Protection",
    description: "Prevent fraud and keep chargebacks under control.",
    href: "/protection",
    image: "/images/rectangle-23842.webp",
  },
  {
    label: "Treasury",
    description: "Full clarity and control over your global cash flow.",
    href: "/treasury",
    image: "/images/frame-2147257065.webp",
  },
];

const DEVELOPERS: DdCard[] = [
  {
    label: "Documentation",
    description: "All the guides and references to build and integrate with Pay.com.",
    href: "https://apiref.pay.com/",
  },
  {
    label: "API reference",
    description: "A full technical guide for the Pay.com API.",
    href: "https://apiref.pay.com/",
  },
  {
    label: "Connections",
    description: "See every available integration and provider.",
    href: "/connections",
  },
];

const RESOURCES: DdCard[] = [
  {
    label: "Blog, Newsroom & Case studies",
    description: "Read the latest insights, company news, and customer success stories.",
    href: "/blog",
  },
  {
    label: "Faq",
    description: "Everything you wanted to know about Pay.com, answered.",
    href: "/faq",
  },
];

const COMPANY: DdCard[] = [
  {
    label: "About us",
    description: "Learn who we are and what drives us to build better payments.",
    href: "/about-us",
  },
  {
    label: "Careers",
    description: "See open roles and join a team that's reshaping how the world moves money.",
    href: "/careers",
  },
];

const MENUS: { label: string; cards: DdCard[] }[] = [
  { label: "Products", cards: PRODUCTS },
  { label: "Developers", cards: DEVELOPERS },
  { label: "Resources", cards: RESOURCES },
  { label: "Company", cards: COMPANY },
];

function DdCardLink({ card, onNavigate }: { card: DdCard; onNavigate: () => void }) {
  return (
    <Link
      href={card.href}
      onClick={onNavigate}
      className="is-animated flex min-w-[13rem] flex-1 flex-col gap-[0.75rem] rounded-[0.75rem] p-[0.75rem] no-underline transition-colors hover:bg-white/5"
    >
      <div className="flex items-center gap-[0.5rem]">
        <div className="h-[6px] w-[6px] rounded-full bg-[var(--brand--brand-mint)]" />
        <div className="text-animated-hover text-white text-[length:var(--typography--button-text-s)] font-semibold">
          <StaggerText text={card.label} />
        </div>
      </div>
      <p className="text-[length:var(--typography--text-xs)] leading-[1.5] text-[var(--neutral--neutral-grey-400)]">
        {card.description}
      </p>
      {card.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={card.image}
          alt={card.imageAlt ?? ""}
          className="w-full rounded-[var(--radius--radius-s,0.75rem)]"
        />
      )}
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
      {/* blur backdrop while a dropdown / mobile menu is open */}
      <div
        className="nav-bg-blur fixed inset-0 h-screen bg-black/50 backdrop-blur-[6px]"
        style={{
          display: anyOverlay ? "flex" : "none",
          opacity: anyOverlay ? 1 : 0,
          pointerEvents: anyOverlay ? "auto" : "none",
        }}
        onClick={() => {
          setOpenMenu(null);
          setMobileOpen(false);
        }}
      />

      <div className="relative flex w-full max-w-[var(--container--main-size)] items-center justify-between px-[var(--container--size-padding)]">
        <div className="relative z-[4] my-[var(--size--m)] flex w-full items-center justify-between rounded-[16px] bg-[var(--neutral--neutral-black-400)] py-[0.625rem] pr-[0.625rem] pl-[1.25rem]">
          {/* Brand */}
          <Link href="/" className="z-[4] aspect-[120/24] transition-opacity hover:opacity-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-69d50a.svg" alt="Pay.com" width={120} height={23} />
          </Link>

          {/* Desktop menu */}
          <nav className="flex items-center pl-[2rem] max-[991px]:hidden">
            {MENUS.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <div className="flex cursor-pointer items-center gap-[0.5rem] px-[1rem] py-[0.5rem] text-white text-[length:var(--typography--button-text-s)] font-medium">
                  <div>{menu.label}</div>
                  <div
                    className="h-[0.75rem] w-[0.75rem] transition-transform duration-200"
                    style={{ transform: openMenu === menu.label ? "rotate(180deg)" : undefined }}
                  >
                    <ChevronDownIcon width="100%" stroke="currentColor" className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right buttons */}
          <div className="relative z-[4] flex items-center gap-[0.75rem] max-[991px]:gap-[0.5rem]">
            <a
              href="https://dashboard.pay.com/"
              aria-label="Log in"
              className="btn-animate-chars relative inline-flex items-center justify-center px-[1.5rem] py-[0.75rem] no-underline max-[991px]:hidden"
            >
              <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] bg-[var(--neutral--neutral-black-300)]" />
              <span className="relative z-[1] text-white text-[length:var(--typography--button-text-s)] font-semibold leading-[1.5] whitespace-nowrap">
                <StaggerText text="Log in" />
              </span>
            </a>
            <Link
              href="/get-in-touch"
              aria-label="Get in Touch"
              className="btn-animate-chars relative inline-flex items-center justify-center px-[1.5rem] py-[0.75rem] no-underline"
            >
              <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] bg-white" />
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

          {/* Desktop dropdown panel */}
          {openMenu && (
            <div
              className="absolute left-0 right-0 top-full z-[3] pt-[0.5rem] max-[991px]:hidden"
              onMouseEnter={() => setOpenMenu(openMenu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="rounded-[0.75rem] bg-[var(--neutral--neutral-black-400)] p-[1.25rem] pb-[0.875rem]">
                <div className="flex w-full gap-[1rem] rounded-[16px] bg-[var(--neutral--neutral-black-400)]">
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
