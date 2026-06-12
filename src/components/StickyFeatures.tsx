"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { AnimationItem } from "lottie-web";
import { StaggerText } from "@/components/StaggerButton";
import type { StickyFeaturePanel } from "@/types";

const PANELS: StickyFeaturePanel[] = [
  {
    headline: "Payments",
    body:
      "Capture global sales with a full suite of payment methods, orchestrated through a dynamic, embedded checkout. Secure card data in a centralized vault, and manage your outgoing funds effortlessly with automated payouts.",
    ctaLabel: "Explore Payments",
    ctaHref: "/payments",
    lottiePath: "/lottie/1-payments-animation.json",
    backgroundImage: "/images/getty-images-dmznozrpwge-unsplash-1.webp",
  },
  {
    headline: "Optimisation",
    body:
      "Turn declines into captured revenue with intelligent routing and automated failover to recover transactions the moment they fail. Network tokens maximize authorization rates, while real-time monitoring keeps your entire stack visible and in control.",
    ctaLabel: "Explore Optimization",
    ctaHref: "/optimisation",
    lottiePath: "/lottie/2-optimization-animation.json",
    backgroundImage: "/images/alexander-pozdeev-xxg-vxkrjmq-unsplash-1.webp",
  },
  {
    headline: "Protection",
    body:
      "Defend your margins and cut your dispute workload with a proactive risk engine that blocks fraud with 3DS and passkey authentication. Pre-dispute collaboration and automated workflows resolve disputes before they escalate.",
    ctaLabel: "Explore Protection",
    ctaHref: "/protection",
    lottiePath: "/lottie/3-protection-animation.json",
    backgroundImage: "/images/rickie-tom-schunemann-rkkjqswcv7o-unsplash-1.webp",
  },
  {
    headline: "Treasury",
    body:
      "Automate settlement reconciliation and gain absolute financial visibility. Manage global accounts, global payouts, and foreign exchange across every transaction — all from a single command center.",
    ctaLabel: "Explore Treasury",
    ctaHref: "/treasury",
    lottiePath: "/lottie/4-treasury-animation.json",
    backgroundImage: "/images/image-385.webp",
  },
];

const TOTAL = 4;
const CLIP_OPEN = "inset(0% 0% 0% 0%)";
const CLIP_CLOSED = "inset(0% 0% 100% 0%)";

export function StickyFeatures() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const headings = Array.from(track.querySelectorAll<HTMLElement>("[data-headline]"));
    const texts = Array.from(track.querySelectorAll<HTMLElement>("[data-text]"));
    const images = Array.from(track.querySelectorAll<HTMLElement>("[data-image]"));
    const lottieInstances: (AnimationItem | null)[] = [null, null, null, null];
    let active = 0;
    let clickInProgress = false;
    let cancelled = false;
    let cleanupFns: (() => void)[] = [];
    const textTimers: ReturnType<typeof setTimeout>[] = [];

    const isMob = () => window.innerWidth < 992;

    import("lottie-web").then(({ default: lottie }) => {
      if (cancelled) return;
      images.forEach((wrapper, i) => {
        const trigger = wrapper.querySelector<HTMLElement>(".lottie-tab-trigger");
        if (!trigger) return;
        lottieInstances[i] = lottie.loadAnimation({
          container: trigger,
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: PANELS[i].lottiePath,
        });
      });
      // play tab 0's lottie when track enters 40% of viewport while tab 0 active
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (active !== 0) return;
            const anim = lottieInstances[0];
            if (!anim) return;
            if (entry.isIntersecting) anim.goToAndPlay(0, true);
            else anim.goToAndStop(0, true);
          });
        },
        { rootMargin: "0px 0px -40% 0px" }
      );
      io.observe(track);
      cleanupFns.push(() => io.disconnect());
    });

    const playLottie = (i: number) => lottieInstances[i]?.goToAndPlay(0, true);
    const resetLottie = (i: number) => lottieInstances[i]?.goToAndStop(0, true);

    const setImageClip = (i: number, clip: string, animate: boolean) => {
      const img = images[i];
      img.style.transition = animate ? "clip-path 0.9s ease" : "none";
      img.style.clipPath = clip;
    };

    const setTab = (to: number, animate = true) => {
      const from = active;
      if (to === from || to < 0 || to >= TOTAL) return;
      active = to;

      resetLottie(from);
      playLottie(to);

      headings.forEach((h, i) => {
        h.style.transition = "opacity 0.3s cubic-bezier(0.25,0.46,0.45,0.94)";
        h.style.opacity = i === to ? "1" : "0.3";
      });

      texts.forEach((text, i) => {
        if (i === from) {
          text.style.transition = "opacity 0.25s ease-out";
          text.style.opacity = "0";
          text.style.pointerEvents = "none";
          textTimers.push(
            setTimeout(() => {
              if (active !== i) text.style.display = "none";
            }, 250)
          );
        }
        if (i === to) {
          text.style.display = "flex";
          requestAnimationFrame(() => {
            text.style.transition = "opacity 0.3s ease-out";
            text.style.opacity = "1";
            text.style.pointerEvents = "auto";
          });
        }
      });

      if (to > from) {
        for (let j = from + 1; j < to; j++) setImageClip(j, CLIP_CLOSED, false);
        setImageClip(to, CLIP_CLOSED, false);
        void images[to].offsetHeight;
        setImageClip(to, CLIP_OPEN, animate);
      } else {
        for (let j = from - 1; j > to; j--) setImageClip(j, CLIP_CLOSED, false);
        setImageClip(to, CLIP_OPEN, false);
        setImageClip(from, CLIP_CLOSED, animate);
      }
    };

    const initState = () => {
      active = 0;
      headings.forEach((h, i) => (h.style.opacity = i === 0 ? "1" : "0.3"));
      texts.forEach((t, i) => {
        t.style.opacity = i === 0 ? "1" : "0";
        t.style.pointerEvents = i === 0 ? "auto" : "none";
        t.style.display = i === 0 ? "flex" : "none";
      });
      images.forEach((img, i) => {
        img.style.zIndex = String(i + 1);
        setImageClip(i, i === 0 ? CLIP_OPEN : CLIP_CLOSED, false);
      });
    };

    const cleanup = () => {
      cleanupFns.forEach((fn) => fn());
      cleanupFns = [];
    };

    const setup = () => {
      cleanup();
      initState();

      if (isMob()) {
        headings.forEach((heading, i) => {
          const handler = () => {
            if (i === active) return;
            setTab(i, true);
          };
          heading.style.cursor = "pointer";
          heading.addEventListener("click", handler);
          cleanupFns.push(() => heading.removeEventListener("click", handler));
        });
        return;
      }

      const scrollable = track.offsetHeight - window.innerHeight;
      const offsets = [0, Math.round(scrollable / 4), Math.round(scrollable / 2), Math.round((scrollable / 4) * 3)];

      const getTabFromScroll = () => {
        const trackTop = track.getBoundingClientRect().top + window.scrollY;
        const scrolled = window.scrollY - trackTop;
        if (scrolled < 0) return 0;
        for (let i = offsets.length - 1; i >= 0; i--) {
          if (scrolled >= offsets[i]) return i;
        }
        return 0;
      };

      const onScroll = () => {
        if (clickInProgress) return;
        const tab = getTabFromScroll();
        if (tab !== active) setTab(tab, true);
      };
      window.addEventListener("scroll", onScroll);
      cleanupFns.push(() => window.removeEventListener("scroll", onScroll));

      headings.forEach((heading, i) => {
        const handler = () => {
          if (i === active || clickInProgress) return;
          const trackTop = track.getBoundingClientRect().top + window.scrollY;
          clickInProgress = true;
          setTab(i, true);
          window.scrollTo({ top: trackTop + offsets[i], behavior: "instant" });
          setTimeout(() => {
            clickInProgress = false;
          }, 50);
        };
        heading.style.cursor = "pointer";
        heading.addEventListener("click", handler);
        cleanupFns.push(() => heading.removeEventListener("click", handler));
      });
    };

    setup();

    let wasM = isMob();
    const onResize = () => {
      const nowM = isMob();
      if (nowM !== wasM) {
        wasM = nowM;
        setup();
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      cleanup();
      textTimers.forEach(clearTimeout);
      window.removeEventListener("resize", onResize);
      lottieInstances.forEach((a) => a?.destroy());
    };
  }, []);

  return (
    <div ref={trackRef} className="h-[250vh] max-[991px]:h-auto bg-black">
      <section className="sticky top-0 flex min-h-screen flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[991px]:pt-[var(--size--6xl)] max-[991px]:pb-[var(--size--6xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
        <div className="flex h-full w-full max-w-[var(--container--main-size)] flex-1 flex-col px-[var(--container--size-padding)] mx-auto">
          <div className="relative z-[1] grid h-full flex-1 grid-cols-2 max-[991px]:grid-cols-1 max-[991px]:grid-rows-[auto_auto] gap-[var(--size--8xl)] max-[991px]:gap-[var(--size--4xl)]">
            {/* Left: headlines + texts */}
            <div className="flex h-full flex-col justify-between gap-[var(--size--7xl)] pb-[var(--size--4xl)] max-[991px]:pb-0">
              <div className="flex flex-col items-start justify-start gap-[var(--size--xs)]">
                {PANELS.map((p, i) => (
                  <div
                    key={p.headline}
                    data-headline={i + 1}
                    className="font-semibold text-white text-[length:var(--typography--h2)] max-[991px]:text-[length:var(--typography--h2-tablet)] max-[767px]:text-[length:var(--typography--h2-mobile)] leading-[var(--typography--line-height-s)] tracking-[-0.02em]"
                    style={{ opacity: i === 0 ? 1 : 0.3, cursor: "pointer" }}
                  >
                    {p.headline}
                  </div>
                ))}
              </div>

              <div className="relative min-h-[250px] max-[991px]:min-h-[240px] flex flex-col gap-[var(--size--4xl)]">
                {PANELS.map((p, i) => (
                  <div
                    key={p.headline}
                    data-text={i + 1}
                    className="absolute inset-0 flex-col items-start justify-start gap-[var(--size--4xl)]"
                    style={{ display: i === 0 ? "flex" : "none", opacity: i === 0 ? 1 : 0 }}
                  >
                    <div className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
                      {p.body}
                    </div>
                    <Link
                      href={p.ctaHref}
                      aria-label={p.ctaLabel}
                      className="btn-animate-chars relative inline-flex flex-none items-center justify-center gap-[0.5rem] cursor-pointer px-[var(--size--2xl)] py-[1rem] no-underline"
                    >
                      <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] border border-white bg-transparent" />
                      <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
                        <StaggerText text={p.ctaLabel} />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stacked clip-path image panels */}
            <div className="relative h-full max-[991px]:min-h-[500px] w-full overflow-hidden rounded-[var(--radius--radius-xxl)]">
              {PANELS.map((p, i) => (
                <div
                  key={p.headline}
                  data-image={i + 1}
                  className="absolute inset-0 flex h-full w-full items-center justify-center"
                  style={{ zIndex: i + 1, clipPath: i === 0 ? CLIP_OPEN : CLIP_CLOSED }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.backgroundImage}
                    alt=""
                    sizes="100vw"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="relative z-[2] h-full w-full">
                    <div className="lottie-tab-trigger h-full w-full opacity-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
