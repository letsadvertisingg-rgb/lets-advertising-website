"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { bookingLinkProps } from "@/lib/site";

const WORDS = ["More Customers.", "More Leads.", "More Sales."];

const CHART_LINE =
  "M0,520 L140,462 L280,490 L480,380 L620,418 L800,280 L920,320 L1100,180 L1220,215 L1440,60";
const CHART_AREA = `${CHART_LINE} L1440,560 L0,560 Z`;

function HeroChartSegment({ id }: { id: string }) {
  return (
    <svg
      className="hero-chart__segment"
      viewBox="0 0 1440 560"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`hero-line-grad-${id}`}
          x1="0"
          y1="560"
          x2="1440"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2cb67d" />
          <stop offset="1" stopColor="#57e5b2" />
        </linearGradient>
        <linearGradient id={`hero-area-grad-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#57e5b2" stopOpacity="0.2" />
          <stop offset="1" stopColor="#57e5b2" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path className="hero-chart__area" d={CHART_AREA} fill={`url(#hero-area-grad-${id})`} />
      <path
        className="hero-chart__line"
        d={CHART_LINE}
        stroke={`url(#hero-line-grad-${id})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="hero-chart__line-tracer"
        d={CHART_LINE}
        pathLength={1}
        stroke="#7cf4c8"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle className="hero-chart__point" cx="480" cy="380" r="4" fill="#57e5b2" />
      <circle className="hero-chart__point hero-chart__point--alt" cx="1100" cy="180" r="4" fill="#57e5b2" />
      <circle className="hero-chart__point" cx="1440" cy="60" r="5" fill="#57e5b2" />
    </svg>
  );
}

export function HeroSection() {
  const wordRef = useRef<HTMLSpanElement>(null);

  // cycling hero word
  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    const parent = el.parentElement!;
    parent.style.display = "inline-block";
    parent.style.overflow = "hidden";
    parent.style.verticalAlign = "middle";

    let current = 0;
    el.style.display = "block";
    el.textContent = WORDS[0];
    el.style.opacity = "1";
    el.style.transform = "translateY(0%)";
    el.style.willChange = "transform, opacity";

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const switchWord = () => {
      el.style.transition =
        "transform 0.25s cubic-bezier(0.76,0,0.24,1), opacity 0.15s ease";
      el.style.transform = "translateY(60%)";
      el.style.opacity = "0";
      timeouts.push(
        setTimeout(() => {
          current = (current + 1) % WORDS.length;
          el.textContent = WORDS[current];
          el.style.transition = "none";
          el.style.transform = "translateY(-30%)";
          el.style.opacity = "0";
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.style.transition =
                "transform 0.25s cubic-bezier(0.76,0,0.24,1), opacity 0.2s ease";
              el.style.transform = "translateY(0%)";
              el.style.opacity = "1";
            });
          });
        }, 250)
      );
    };

    const interval = setInterval(switchWord, 2800);
    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center bg-black pt-[9.85rem] pb-[var(--size--8xl)]">
      {/* Hero background: data grid, brand glow, growth chart, floating metrics */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-glow absolute inset-0" />

        {/* Animated growth chart */}
        <div className="hero-chart absolute inset-x-0 bottom-0 h-[60%]">
          <HeroChartSegment id="a" />
        </div>

        {/* Floating metric chips */}
        <div className="hero-chip hero-chip--1 z-[3]">
          <div className="hero-chip__inner">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 17l6-6 4 4 8-8"
                stroke="#57e5b2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 7h7v7"
                stroke="#57e5b2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              Organic traffic growth
            </span>
          </div>
        </div>
        <div className="hero-chip hero-chip--2 z-[3]">
          <div className="hero-chip__inner">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="#6ea8ff" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" stroke="#6ea8ff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>
              Top Google visibility
            </span>
          </div>
        </div>
        <div className="hero-chip hero-chip--3 z-[3]">
          <div className="hero-chip__inner">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="13" width="4" height="7" rx="1" fill="#57e5b2" />
              <rect x="10" y="9" width="4" height="11" rx="1" fill="#57e5b2" />
              <rect x="16" y="4" width="4" height="16" rx="1" fill="#57e5b2" />
            </svg>
            <span>
              Strong return on ad spend
            </span>
          </div>
        </div>
        <div className="hero-chip hero-chip--4 z-[3]">
          <div className="hero-chip__inner">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 8.5h16M4 12h16M4 15.5h16"
                stroke="#57e5b2"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>
              Lower acquisition costs
            </span>
          </div>
        </div>
        <div className="hero-chip hero-chip--5 z-[3]">
          <div className="hero-chip__inner">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 4v16M4 12h16"
                stroke="#57e5b2"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>
              Better lead quality
            </span>
          </div>
        </div>
        <div className="hero-chip hero-chip--6 z-[3]">
          <div className="hero-chip__inner">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 16l4-4 3 3 5-5 4 4"
                stroke="#57e5b2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              Consistent monthly clicks
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="flex flex-col items-center">
          <div className="mx-auto flex w-full max-w-[64rem] flex-col items-center">
            <div className="mb-[var(--size--m)] text-center text-[length:var(--typography--text-m)] font-medium uppercase tracking-[0.12em] text-white/60">
              Grow your business online with confidence
            </div>
            <h1 className="text-center font-semibold text-white text-[length:var(--typography--jumbo)] max-[991px]:text-[length:var(--typography--jumbo-tablet)] max-[767px]:text-[length:var(--typography--jumbo-mobile)] leading-[var(--typography--line-height-s)]">
              We help you get
              <br />
              <span>
                <span ref={wordRef} className="span-animated">
                  More Customers.
                </span>
              </span>
            </h1>
            <div className="mx-auto mt-[var(--size--xl)] max-w-[36rem] text-center">
              <p className="text-white text-sm max-[767px]:text-xs leading-[var(--typography--line-height-l)]">
                Running a business is already challenging. Marketing it online shouldn&rsquo;t be.
                We help businesses attract the right audience, generate quality leads, and turn
                visitors into paying customers.
              </p>
            </div>
            <div className="relative top-20 mx-auto mt-[var(--size--2xl)] grid max-w-[23rem] grid-cols-[auto_auto] items-center justify-items-stretch gap-[1rem]">
              <Link
                {...bookingLinkProps}
                aria-label="Free Consultation"
                className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer rounded-[9999px] px-[2rem] py-[1rem] no-underline"
              >
                <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] bg-blue-600" />
                <span
                  className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap"
                  style={{ fontVariationSettings: '"wght" 590' }}
                >
                  <StaggerText text="Free Consultation" />
                </span>
              </Link>
              <div className="max-[479px]:hidden">
                <Link
                  href="#services"
                  aria-label="Our Services"
                  className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer px-[2rem] py-[1rem] no-underline"
                >
                  <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] border border-white bg-transparent" />
                  <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                    <StaggerText text="Our Services" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
