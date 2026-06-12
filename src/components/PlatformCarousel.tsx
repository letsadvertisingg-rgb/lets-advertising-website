"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { ParallaxImage } from "@/components/Parallax";
import type { PlatformSlide } from "@/types";

const SLIDES: PlatformSlide[] = [
  {
    tag: "For CFOs",
    title: "Reconcile settlements across all providers",
    body: "Automate settlement reconciliation and decode hidden fees across multiple providers in seconds, not hours",
    image: "/images/1.webp",
  },
  {
    tag: "For Head of Payments",
    title: "Maximize your global authorization rates",
    body: "Take strategic control of your global payment infrastructure. Use intelligent routing to rescue declines, boost approvals, and protect your bottom line.",
    image: "/images/2.webp",
  },
  {
    tag: "For Engineering Teams",
    title: "Integrate in minutes with headless APIs",
    body: "Accelerate integration timelines with our API-first architecture. Access clear documentation, robust SDKs, and headless infrastructure backed by guaranteed 99.999% uptime SLAs.",
    image: "/images/3.webp",
  },
  {
    tag: "For Operations Teams",
    title: "Gain total operational visibility",
    body: "Consolidate your fragmented payment stack into a single dashboard. Automate your back-office tasks, save time, and track your global cash flow.",
    image: "/images/4.webp",
  },
];

const SLIDE_ALTS = [
  "Payment platforms Stripe, Worldpay, Paysafe, and Pay.com linked to reconciliation overview with matched and unmatched status.",
  "Flowchart shows 3DS available, Country Card US, Amount over $100, leading to Best route found.",
  "System status shows all systems operational and uptime SLA at 99.999%.",
  "Dashboard with financial summary showing $4.418M and a 91.5% completion gauge.",
];

export function PlatformCarousel() {
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const component = componentRef.current;
    if (!component) return;
    const swiperEl = component.querySelector<HTMLElement>("#swiper-1");
    const counterEl = component.querySelector<HTMLElement>("#swiper-counter-1");
    const nav = component.querySelector<HTMLElement>(".swiper-navigation");
    const prevBtn = component.querySelector<HTMLElement>("#btn-prev");
    const nextBtn = component.querySelector<HTMLElement>("#btn-next");
    if (!swiperEl) return;

    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

    const getVisible = (sw: Swiper) => {
      const v = sw.params.slidesPerView;
      if (typeof v === "number") return v < 2 ? 1 : Math.floor(v);
      return 1;
    };

    const updateCounter = (sw: Swiper) => {
      if (!counterEl) return;
      const total = sw.slides.length;
      const visible = getVisible(sw);
      const end = Math.min(total, sw.activeIndex + visible);
      counterEl.textContent = `${pad(end)}/${pad(total)}`;
    };

    const updateArrows = (sw: Swiper) => {
      if (!prevBtn || !nextBtn) return;
      prevBtn.style.opacity = sw.isBeginning ? "0" : "1";
      prevBtn.style.pointerEvents = sw.isBeginning ? "none" : "auto";
      nextBtn.style.opacity = sw.isEnd ? "0" : "1";
      nextBtn.style.pointerEvents = sw.isEnd ? "none" : "auto";
    };

    const buildDots = (sw: Swiper) => {
      if (!nav) return;
      const total = sw.slides.length;
      const visible = getVisible(sw);
      const dotCount = Math.max(1, total - visible + 1);
      nav.querySelectorAll(".swiper-nav-dot").forEach((d) => d.remove());
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement("div");
        dot.className = "swiper-nav-dot";
        dot.style.cssText =
          "border-radius:999999px;width:8px;height:8px;transition:all .3s;cursor:pointer;background-color:" +
          (i === sw.activeIndex ? "#000" : "#0003");
        dot.addEventListener("click", () => sw.slideTo(i));
        nav.appendChild(dot);
      }
    };

    const updateDots = (sw: Swiper) => {
      if (!nav) return;
      nav.querySelectorAll<HTMLElement>(".swiper-nav-dot").forEach((dot, i) => {
        dot.style.backgroundColor = i === sw.activeIndex ? "#000" : "#0003";
      });
    };

    const swiper = new Swiper(swiperEl, {
      modules: [Navigation, Pagination, Scrollbar, FreeMode],
      slidesPerView: 1.15,
      spaceBetween: 16,
      speed: 800,
      navigation: { nextEl: "#btn-next", prevEl: "#btn-prev" },
      scrollbar: { el: "#scrollbar-1" },
      breakpoints: {
        0: { slidesPerView: 1.15, freeMode: false, spaceBetween: 16 },
        768: { slidesPerView: 1.15, freeMode: true, spaceBetween: 16 },
        992: { slidesPerView: 3, freeMode: true, spaceBetween: 24 },
        1500: { slidesPerView: 3, freeMode: true, spaceBetween: 32 },
      },
      on: {
        init(sw) {
          updateCounter(sw);
          buildDots(sw);
        },
        slideChange(sw) {
          updateCounter(sw);
          updateArrows(sw);
          updateDots(sw);
        },
        resize(sw) {
          updateCounter(sw);
          buildDots(sw);
        },
        breakpoint(sw) {
          updateCounter(sw);
          buildDots(sw);
        },
      },
    });

    const onEnter = () => updateArrows(swiper);
    const onLeave = () => {
      if (prevBtn) {
        prevBtn.style.opacity = "0";
        prevBtn.style.pointerEvents = "none";
      }
      if (nextBtn) {
        nextBtn.style.opacity = "0";
        nextBtn.style.pointerEvents = "none";
      }
    };
    component.addEventListener("mouseenter", onEnter);
    component.addEventListener("mouseleave", onLeave);

    return () => {
      component.removeEventListener("mouseenter", onEnter);
      component.removeEventListener("mouseleave", onLeave);
      swiper.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col items-center overflow-hidden bg-[var(--neutral--neutral-grey-200)] pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[991px]:pt-[var(--size--6xl)] max-[991px]:pb-[var(--size--6xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
      <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="relative flex flex-col gap-[var(--size--4xl)]">
          <h2 className="max-w-[20ch] font-semibold text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
            One platform. Built for growth and scalability.
          </h2>

          <div ref={componentRef} className="slider-component relative overflow-visible">
            {/* prev/next buttons */}
            <div className="absolute left-[-44px] right-[-44px] top-[40%] z-[2] flex w-auto items-center justify-between gap-[16px]">
              <div
                id="btn-prev"
                className="flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-[999999px] bg-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/arrow_right_alt.svg" alt="" className="rotate-180" />
              </div>
              <div
                id="btn-next"
                className="flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-[999999px] bg-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/arrow_right_alt.svg" alt="" />
              </div>
            </div>

            <div id="swiper-1" className="swiper">
              <div className="swiper-wrapper" role="list">
                {SLIDES.map((slide, i) => (
                  <div key={slide.tag} className="swiper-slide" role="listitem">
                    <div className="flex flex-col gap-[var(--size--xl)]">
                      <div className="swiper-image-wrapper relative mb-[var(--size--xl)] aspect-square w-full overflow-hidden rounded-[32px]">
                        <ParallaxImage
                          src={slide.image}
                          alt={SLIDE_ALTS[i]}
                          className="absolute inset-0 h-full w-full max-h-full object-cover"
                          sizes="100vw"
                        />
                        <div className="absolute bottom-[24px] left-[24px] flex items-center justify-start gap-[var(--size--xs)] rounded-[var(--radius--radius-circle)] border border-[#fff3] bg-[#0000000d] px-[var(--size--m)] py-[var(--size--xs)] font-medium backdrop-blur-[15px]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/images/dot.svg" alt="" />
                          <div className="text-white text-[length:var(--typography--text-m)]">{slide.tag}</div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[var(--size--m)]">
                        <div className="max-w-[300px] font-semibold text-[length:var(--typography--h5)] max-[991px]:text-[length:var(--typography--h5-tablet)] leading-[var(--typography--line-height)] tracking-[-0.02em]">
                          {slide.title}
                        </div>
                        <div className="text-black text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                          {slide.body}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div id="scrollbar-1" className="swiper-scrollbar mt-[var(--size--2xl)]" />
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-[24px]">
            <div className="swiper-navigation mx-auto flex items-center gap-[8px] rounded-[var(--radius--radius-circle)] bg-white p-[12px]" />
            <div id="swiper-counter-1" className="text-[length:var(--typography--text-s)] text-black hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
