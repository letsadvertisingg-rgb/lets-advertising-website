"use client";

import { useEffect, useRef } from "react";

interface ProcessStep {
  title: string;
  body: string;
  backgroundImage: string;
  imageAlt: string;
}

const STEPS: ProcessStep[] = [
  {
    title: "Step 1: Understand Your Business",
    body:
      "We start by learning your goals, your target audience, your competitors, and your current marketing performance.",
    backgroundImage: "/images/rectangle-34625056.webp",
    imageAlt: "Abstract smooth blue waves pattern with gradient shades of blue.",
  },
  {
    title: "Step 2: Create a Growth Strategy",
    body: "We build a customized plan focused on your business objectives.",
    backgroundImage: "/images/group-2147259501.webp",
    imageAlt: "Two people walking on a beach with bright blue sky and ocean waves in the background",
  },
  {
    title: "Step 3: Launch & Optimize",
    body: "We implement campaigns, monitor results, and continuously improve performance.",
    backgroundImage: "/images/group-2147259502.webp",
    imageAlt: "Blue background with a subtle pattern of small right-facing triangles in darker blue shades.",
  },
  {
    title: "Step 4: Scale Success",
    body:
      "Once we identify what works, we expand those efforts to drive even greater growth.",
    backgroundImage: "/images/group-2147259503.webp",
    imageAlt: "Four animated characters seated around a table with laptops and books showing discussion or teamwork.",
  },
];

const Z_CLASSES = ["is-first", "is-second", "is-third", "is-fourth"];
const DURATION = 5850;

function easeInOut(t: number) {
  const s = -(Math.cos(Math.PI * t) - 1) / 2;
  return -(Math.cos(Math.PI * s) - 1) / 2;
}

export function GetBackSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const accordions = Array.from(root.querySelectorAll<HTMLElement>(".tabs-accordion"));
    const images = Array.from(root.querySelectorAll<HTMLElement>(".tab-image-right"));
    const rightWrapper = root.querySelector<HTMLElement>(".tabs-right-wrapper");
    const tabsWrapper = root.querySelector<HTMLElement>(".tabs-wrapper");

    let current = 0;
    let rafId = 0;
    let timers: ReturnType<typeof setTimeout>[] = [];

    const isMobile = () => window.innerWidth < 992;

    const getExpandedHeight = (p: HTMLElement) => {
      p.style.height = "auto";
      p.style.overflow = "visible";
      const h = p.scrollHeight;
      p.style.height = "0px";
      p.style.overflow = "hidden";
      void p.offsetHeight;
      return h;
    };

    const collapseAccordion = (acc: HTMLElement) => {
      const p = acc.querySelector("p")!;
      const progress = acc.querySelector<HTMLElement>(".line-progress");
      p.style.transition = "none";
      p.style.height = `${p.scrollHeight}px`;
      void p.offsetHeight;
      p.style.transition = "height 0.5s ease, opacity 0.5s ease";
      p.style.height = "0px";
      p.style.opacity = "0";
      p.style.overflow = "hidden";
      if (progress) progress.style.width = "0%";
      acc.classList.remove("is-active");
    };

    const expandAccordion = (acc: HTMLElement) => {
      const p = acc.querySelector("p")!;
      const targetHeight = getExpandedHeight(p);
      p.style.transition = "none";
      p.style.height = "0px";
      p.style.opacity = "0";
      p.style.overflow = "hidden";
      void p.offsetHeight;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          p.style.transition = "height 0.5s ease, opacity 0.5s ease";
          p.style.height = `${targetHeight}px`;
          p.style.opacity = "1";
          acc.classList.add("is-active");
          timers.push(
            setTimeout(() => {
              p.style.height = "auto";
              p.style.overflow = "visible";
            }, 520)
          );
        });
      });
    };

    const forceCloseAll = () => {
      accordions.forEach((acc) => {
        const p = acc.querySelector("p")!;
        const progress = acc.querySelector<HTMLElement>(".line-progress");
        p.style.transition = "none";
        p.style.height = "0px";
        p.style.opacity = "0";
        p.style.overflow = "hidden";
        if (progress) progress.style.width = "0%";
        acc.classList.remove("is-active");
      });
    };

    const switchImage = (fromIndex: number, toIndex: number) => {
      images[fromIndex].classList.remove("is-active");
      images[toIndex].classList.add("is-active");
    };

    const startProgressBar = () => {
      if (isMobile()) return;
      cancelAnimationFrame(rafId);
      let lastTime = performance.now();
      let elapsed = 0;
      const progressEl = accordions[current].querySelector<HTMLElement>(".line-progress");
      if (progressEl) progressEl.style.width = "0%";
      const animate = (now: number) => {
        const delta = Math.min(now - lastTime, 100);
        lastTime = now;
        elapsed += delta;
        const t = Math.min(elapsed / DURATION, 1);
        if (progressEl) progressEl.style.width = `${easeInOut(t) * 100}%`;
        if (t < 1) {
          rafId = requestAnimationFrame(animate);
        } else {
          activateTab((current + 1) % accordions.length);
        }
      };
      rafId = requestAnimationFrame(animate);
    };

    const activateTab = (index: number) => {
      if (index === current) return;
      cancelAnimationFrame(rafId);
      timers.forEach(clearTimeout);
      timers = [];
      const fromIndex = current;
      current = index;
      forceCloseAll();
      requestAnimationFrame(() => {
        collapseAccordion(accordions[fromIndex]);
        expandAccordion(accordions[index]);
        switchImage(fromIndex, index);
        if (!isMobile()) startProgressBar();
      });
    };

    // init
    images.forEach((img, i) => img.classList.toggle("is-active", i === 0));
    accordions.forEach((acc, i) => {
      const p = acc.querySelector("p")!;
      p.style.overflow = "hidden";
      if (i === 0) {
        acc.classList.add("is-active");
        void acc.offsetHeight;
        const h = p.scrollHeight;
        p.style.height = h > 0 ? `${h}px` : "auto";
        p.style.opacity = "1";
      } else {
        p.style.height = "0px";
        p.style.opacity = "0";
      }
    });

    const clickHandlers: Array<{ el: HTMLElement; fn: () => void }> = [];
    accordions.forEach((acc, i) => {
      const fn = () => {
        if (i !== current) activateTab(i);
      };
      acc.addEventListener("click", fn);
      clickHandlers.push({ el: acc, fn });
    });
    if (rightWrapper) {
      const fn = () => activateTab((current + 1) % accordions.length);
      rightWrapper.addEventListener("click", fn);
      clickHandlers.push({ el: rightWrapper, fn });
    }

    let observer: IntersectionObserver | undefined;
    if (tabsWrapper) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!isMobile()) startProgressBar();
            } else {
              cancelAnimationFrame(rafId);
              const progressEl = accordions[current]?.querySelector<HTMLElement>(".line-progress");
              if (progressEl) progressEl.style.width = "0%";
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(tabsWrapper);
    }

    return () => {
      cancelAnimationFrame(rafId);
      timers.forEach(clearTimeout);
      clickHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
      observer?.disconnect();
    };
  }, []);

  return (
    <section
      id="process"
      className="flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[991px]:pt-[var(--size--6xl)] max-[991px]:pb-[var(--size--6xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]"
    >
      <div ref={rootRef} className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        {/* Process accordion */}
        <div className="relative z-[1] mb-[var(--size--8xl)] max-[767px]:mb-[var(--size--4xl)] flex flex-col items-start">
          <div className="tabs-wrapper grid w-full grid-cols-[1fr_1.1fr] max-[991px]:grid-cols-1 gap-[var(--size--6xl)] max-[991px]:gap-[var(--size--4xl)]">
            <div className="flex flex-col justify-between gap-[var(--size--2xl)]">
              <h2 className="font-semibold text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] max-[767px]:text-[length:var(--typography--h2-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]">
                How we help your
                <br />
                business grow.
              </h2>
              <div className="flex h-[31.25rem] max-[991px]:h-auto flex-col items-stretch justify-end gap-[var(--size--2xl)]">
                {STEPS.map((s) => (
                  <div key={s.title} className="tabs-accordion">
                    <h3 className="font-semibold text-[length:var(--typography--h5)] max-[991px]:text-[length:var(--typography--h5-tablet)] leading-[var(--typography--line-height)] tracking-[-0.02em]">
                      {s.title}
                    </h3>
                    <p className="text-black text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                      {s.body}
                    </p>
                    <div className="line-progress absolute bottom-[-1px] left-0 z-[1] h-px w-full bg-[var(--brand--brand-electric-blue)]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="tabs-right-wrapper aspect-[626/752] overflow-hidden rounded-[32px] bg-[#0053ef] max-[767px]:rounded-[2rem]">
              {STEPS.map((s, i) => (
                <div
                  key={s.title}
                  className={`tab-image-right ${Z_CLASSES[i]} inset-0 flex h-full w-full items-center justify-center`}
                  style={{ zIndex: i + 1 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.backgroundImage}
                    alt={s.imageAlt}
                    sizes="(max-width: 626px) 100vw, 626px"
                    className="tab-image-background absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What makes us different */}
        <div id="why-us" className="relative z-[1] flex flex-col items-start">
          <div className="grid w-full grid-cols-3 max-[991px]:grid-cols-1 gap-[var(--size--xl)]">
            <div className="flex aspect-square flex-col items-center justify-between gap-[24px] rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] px-[2rem] pt-[2rem]">
              <div className="text-black text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                <span className="font-semibold">Client-focused approach.</span> Your success is our
                priority. Every strategy starts with your goals, not ours.
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/img-(12).webp"
                alt="Person reading on their phone in soft blue light."
                className="aspect-[180/200] max-h-[12.5rem] rounded-t-[1rem] object-cover"
              />
            </div>

            <div className="flex aspect-square flex-col items-center justify-between gap-[24px] rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] px-[2rem] pt-[2rem]">
              <div className="text-black text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                <strong>Data-driven decisions.</strong> Every strategy is backed by real performance
                insights. Campaigns are measured, refined, and improved continuously.
              </div>
              <div className="max-h-[10.625rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/img.svg" alt="" className="h-full w-full" />
              </div>
            </div>

            <div className="flex aspect-square flex-col items-center justify-between gap-[24px] rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] p-[2rem] pb-[24px]">
              <div className="text-black text-[length:var(--typography--text-m)] leading-[var(--typography--line-height-l)]">
                <strong>Transparent communication.</strong> No confusing marketing jargon, just
                clear updates, honest reporting, and results-oriented execution.
              </div>
              <div className="flex w-full flex-col gap-[0.75rem]">
                <div className="flex items-baseline gap-[0.5rem]">
                  <span className="text-[1.75rem] font-semibold">100%</span>
                  <span className="text-[length:var(--typography--text-s)] text-[var(--neutral--neutral-500)]">
                    transparent reporting
                  </span>
                </div>
                <div className="h-[10px] w-full overflow-hidden rounded-[99999px] bg-[var(--brand--brand-light-mint-10)]">
                  <div className="h-full w-[82%] rounded-[99999px] bg-[var(--brand--brand-mint)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
