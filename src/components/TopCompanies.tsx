"use client";

import { useEffect, useRef } from "react";

const INDUSTRIES = [
  "iGaming & Sports Betting",
  "eCommerce & Retail",
  "Digital Media & Streaming",
  "SaaS & Software Platforms",
  "Travel & Hospitality",
  "Crypto & Digital Assets",
  "WealthTech & Investment Platforms",
];

const TOTAL = 7;
const PAUSE = 1200;
const ANIM = 400;

export function TopCompanies() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    const logo = logoRef.current;
    if (!wrapper || !track || !logo) return;

    let items: HTMLElement[] = [];
    let offsets: number[] = [];
    let heights: number[] = [];
    let cachedTarget = 0;
    let startIdx = 0;
    let currentIdx = 0;
    let stepCount = 0;
    let animating = false;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;

    const setY = (y: number, anim: boolean) => {
      track.style.transition = anim ? `transform ${ANIM}ms cubic-bezier(0.4,0,0.2,1)` : "none";
      track.style.transform = `translateY(${y}px)`;
    };

    const targetFor = (idx: number) => -(offsets[idx] + heights[idx] / 2 - cachedTarget);

    const activate = (idx: number) => {
      items.forEach((el, i) => el.classList.toggle("is-active", i === idx));
    };

    const measure = () => {
      track.style.transition = "none";
      track.style.transform = "translateY(0px)";
      void track.offsetHeight;
      items = Array.from(track.querySelectorAll<HTMLElement>('[data-anim="text-rotate"]'));
      offsets = items.map((el) => el.offsetTop);
      heights = items.map((el) => el.offsetHeight);

      const logoBCR = logo.getBoundingClientRect();
      const wrapperBCR = wrapper.getBoundingClientRect();
      cachedTarget = logoBCR.top + logoBCR.height / 2 - wrapperBCR.top;

      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i < TOTAL; i++) {
        const d = Math.abs(offsets[i] + heights[i] / 2 - cachedTarget);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      }
      startIdx = best;
      if (items.length) {
        activate(currentIdx);
        setY(targetFor(currentIdx), false);
      }
    };

    const next = () => {
      if (cancelled || animating) return;
      animating = true;
      const nextIdx = currentIdx + 1;
      stepCount++;
      currentIdx = nextIdx;
      activate(nextIdx);
      setY(targetFor(nextIdx), true);
      timer = setTimeout(() => {
        if (cancelled) return;
        if (stepCount === TOTAL) {
          stepCount = 0;
          items.forEach((el) => (el.style.transition = "none"));
          currentIdx = startIdx;
          activate(startIdx);
          setY(targetFor(startIdx), false);
          void track.offsetHeight;
          items.forEach((el) => (el.style.transition = ""));
        }
        animating = false;
        requestAnimationFrame(() => {
          timer = setTimeout(next, PAUSE);
        });
      }, ANIM);
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measure, 150);
    };

    const init = () => {
      if (cancelled) return;
      measure();
      window.addEventListener("resize", onResize);
      items.forEach((el) => el.classList.remove("is-active"));
      currentIdx = startIdx;
      stepCount = 0;
      activate(startIdx);
      setY(targetFor(startIdx), false);
      timer = setTimeout(next, PAUSE);
    };

    document.fonts.ready.then(init);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center pt-[var(--size--6xl)] pb-[var(--size--6xl)] bg-[url('/images/vector-(1).webp')] bg-top bg-no-repeat"
      style={{ backgroundSize: "auto" }}
    >
      <div className="flex h-full w-full max-w-[var(--container--main-size)] flex-1 flex-col px-[var(--container--size-padding)] mx-auto">
        <div className="relative z-[1] grid flex-1 grid-cols-2 max-[991px]:grid-cols-1 gap-[16px]">
          <div className="flex h-full items-center justify-start">
            <h2 className="max-w-[14ch] font-semibold text-[length:var(--typography--h3)] max-[991px]:text-[length:var(--typography--h3-tablet)] leading-[var(--typography--line-height-m)] tracking-[-0.02em]">
              Top companies use Pay.com for:
            </h2>
          </div>

          <div
            ref={wrapperRef}
            className="top-companies-right pointer-events-none relative flex h-full min-h-[480px] w-full flex-col items-start justify-center overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img ref={logoRef} src="/images/vector-(3).svg" alt="" />
            <div className="right-rotate-wrapper">
              <div ref={trackRef} className="relative w-full" style={{ willChange: "transform" }}>
                <div className="right-companies-wrapper gap-[48px]">
                  {[...INDUSTRIES, ...INDUSTRIES].map((label, i) => (
                    <div
                      key={i}
                      data-anim="text-rotate"
                      className="font-semibold text-[length:var(--typography--h3)] max-[991px]:text-[length:var(--typography--h3-tablet)] leading-[var(--typography--line-height-m)] tracking-[-0.02em]"
                    >
                      <strong>{label}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="gradient-right absolute bottom-0 left-0 right-0 z-[1] min-h-[105px] w-full bg-[linear-gradient(#0000,#fff)]" />
            <div className="gradient-right top absolute top-0 left-0 right-0 z-[1] min-h-[105px] w-full bg-[linear-gradient(#fff,#0000)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
