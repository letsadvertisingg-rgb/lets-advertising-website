"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { HeroTabs } from "@/components/HeroTabs";

const WORDS = ["Convert.", "Orchestrate.", "Route.", "Recover."];

const MARQUEE_IMAGES = [
  "/images/img-(2).webp",
  "/images/img-(3).webp",
  "/images/img-(8).webp",
  "/images/img-(4).webp",
  "/images/img-(7).webp",
  "/images/img-(9).webp",
  "/images/img-(1).webp",
  "/images/img-(4).webp",
  "/images/img-(8).webp",
];

function MarqueeDiagonal({ position }: { position: "bottom-left" | "bottom-right" | "top-right" }) {
  const positionClass =
    position === "bottom-left"
      ? "bottom-0 left-0"
      : position === "bottom-right"
        ? "bottom-0 right-0"
        : "top-0 right-0";
  return (
    <div
      className={`absolute ${positionClass} grid h-[150vw] w-[150vw] grid-cols-3 grid-rows-3 gap-[100px]`}
    >
      {MARQUEE_IMAGES.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={src}
          alt=""
          sizes="(max-width: 827px) 100vw, 827px"
          className="aspect-square h-full w-full"
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const wordRef = useRef<HTMLSpanElement>(null);

  // cycling hero word — verbatim port of the site's .span-animated script
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
    <section className="relative flex min-h-screen flex-col items-center justify-start bg-white pt-[9.85rem] pb-[var(--size--6xl)]">
      {/* Black background with diagonal drifting image marquee (top ~70% of section) */}
      <div className="absolute inset-x-0 top-0 bottom-[30%] overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bottom-left-shape.svg"
          alt=""
          className="absolute bottom-0 left-0 z-[2] max-w-[446px]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/top-right-shape.svg" alt="" className="absolute top-0 right-0 z-[2]" />
        <div className="background-marqee absolute bottom-0 left-0 grid h-[calc(300vw+100px)] w-[calc(300vw+100px)] grid-cols-2 grid-rows-[auto_auto] gap-[16px] opacity-40">
          <MarqueeDiagonal position="bottom-left" />
          <MarqueeDiagonal position="bottom-right" />
          <MarqueeDiagonal position="top-right" />
        </div>
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(#fff0,#000)]" />
      </div>

      <div className="relative z-[1] w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="flex flex-col items-center">
          <div className="mx-auto flex w-full max-w-[56rem] flex-col items-center">
            <h1 className="text-center font-semibold text-white text-[length:var(--typography--jumbo)] max-[991px]:text-[length:var(--typography--jumbo-tablet)] max-[767px]:text-[length:var(--typography--jumbo-mobile)] leading-[var(--typography--line-height-s)]">
              Don&rsquo;t process.
              <br />
              <span>
                <span ref={wordRef} className="span-animated">
                  Convert.
                </span>
              </span>
            </h1>
            <div className="mx-auto mt-[var(--size--xl)] max-w-[32.75rem] text-center">
              <p className="text-white text-[length:var(--typography--text-xl)] max-[767px]:text-[length:var(--typography--text-xl-mobile)] leading-[var(--typography--line-height-l)]">
                The payment orchestration and acquiring platform engineered for acceptance. Higher
                approval rates, lower fees, and a checkout experience that seals the deal.
              </p>
            </div>
            <div className="mx-auto mt-[var(--size--2xl)] grid max-w-[21.0625rem] grid-cols-[auto_auto] items-center justify-items-stretch gap-[1rem]">
              <Link
                href="/book-a-demo"
                aria-label="Book a Demo"
                className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer rounded-[9999px] px-[2rem] py-[1rem] no-underline"
              >
                <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] bg-white" />
                <span
                  className="relative z-[1] text-black text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap"
                  style={{ fontVariationSettings: '"wght" 590' }}
                >
                  <StaggerText text="Book a Demo" />
                </span>
              </Link>
              <div className="max-[479px]:hidden">
                <Link
                  href="/book-a-demo"
                  aria-label="Get Started"
                  className="btn-animate-chars relative inline-flex items-center justify-center gap-[0.5rem] cursor-pointer px-[2rem] py-[1rem] no-underline"
                >
                  <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] border border-white bg-transparent" />
                  <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                    <StaggerText text="Get Started" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-[1] mt-[var(--size--5xl)] flex flex-col items-start">
          <HeroTabs />
        </div>
      </div>
    </section>
  );
}
