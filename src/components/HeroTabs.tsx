"use client";

import { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";
import {
  AutomationIcon,
  EmbeddedCheckoutIcon,
  OperationalVisibilityIcon,
  ReconciliationIcon,
  RoutingIcon,
} from "@/components/icons";
import type { HeroTab } from "@/types";

const TABS: (HeroTab & { Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> })[] = [
  {
    id: "embedded-checkout",
    label: "Embedded checkout",
    lottiePath: "/lottie/homepage-embedded-checkout-animation.json",
    Icon: EmbeddedCheckoutIcon,
  },
  {
    id: "routing",
    label: "Routing",
    lottiePath: "/lottie/homepage-routing-animation.json",
    Icon: RoutingIcon,
  },
  {
    id: "automation",
    label: "Automation",
    lottiePath: "/lottie/homepage-automation-animation.json",
    Icon: AutomationIcon,
  },
  {
    id: "reconciliation",
    label: "Reconciliation",
    lottiePath: "/lottie/2nd-lottie.json",
    Icon: ReconciliationIcon,
  },
  {
    id: "operational-visibility",
    label: "Operational visibility",
    lottiePath: "/lottie/homepage-operational-visibility-animation.json",
    Icon: OperationalVisibilityIcon,
  },
];

const FALLBACK_DURATION = 20000;

export function HeroTabs() {
  const [current, setCurrent] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);
  const animRef = useRef<AnimationItem | null>(null);
  const rafRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const lottieModRef = useRef<typeof import("lottie-web").default | null>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isSwiping = useRef(false);

  currentRef.current = current;

  useEffect(() => {
    let cancelled = false;
    const root = rootRef.current;
    if (!root) return;

    const getBar = (index: number) =>
      root.querySelector<HTMLElement>(`[data-tab-bar="${index}"]`);
    const getTrigger = (index: number) =>
      root.querySelector<HTMLElement>(`[data-lottie-trigger="${index}"]`);

    const stopProgress = () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
      const bar = getBar(currentRef.current);
      if (bar) bar.style.width = "0%";
    };

    const startTab = (index: number) => {
      if (cancelled) return;
      const lottie = lottieModRef.current;
      const trigger = getTrigger(index);
      if (!lottie || !trigger) return;

      animRef.current?.destroy();
      trigger.innerHTML = "";
      const anim = lottie.loadAnimation({
        container: trigger,
        renderer: "canvas",
        loop: false,
        autoplay: false,
        path: TABS[index].lottiePath,
        rendererSettings: { clearCanvas: true, progressiveLoad: true, preserveAspectRatio: "xMidYMid meet" },
      });
      animRef.current = anim;
      anim.addEventListener("complete", () => {
        anim.goToAndStop(anim.totalFrames - 1, true);
      });

      const begin = () => {
        if (cancelled) return;
        const duration =
          anim.totalFrames && anim.frameRate
            ? (anim.totalFrames / anim.frameRate) * 1000
            : FALLBACK_DURATION;
        anim.goToAndStop(0, true);
        anim.play();
        const startTime = Date.now();
        const bar = getBar(index);
        const tick = () => {
          if (cancelled) return;
          const pct = Math.min(((Date.now() - startTime) / duration) * 100, 100);
          if (bar) bar.style.width = `${pct}%`;
          if (pct < 100) rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          if (cancelled) return;
          switchTo((index + 1) % TABS.length);
        }, duration);
      };

      if (anim.isLoaded) begin();
      else anim.addEventListener("DOMLoaded", begin);
    };

    const scrollTabIntoView = (index: number) => {
      const menu = menuRef.current;
      if (!menu || window.innerWidth > 991) return;
      const activeTab = menu.children[index] as HTMLElement | undefined;
      if (!activeTab) return;
      const menuRect = menu.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      menu.scrollTo({
        left: Math.max(0, menu.scrollLeft + (tabRect.left - menuRect.left) - 8),
        behavior: "smooth",
      });
    };

    const switchTo = (index: number) => {
      stopProgress();
      setCurrent(index);
      currentRef.current = index;
      scrollTabIntoView(index);
      startTab(index);
    };

    // expose for click handlers via dataset event delegation
    root.dataset.ready = "true";
    const onClickCapture = (e: Event) => {
      const target = (e.target as HTMLElement).closest("[data-tab-link]");
      if (!target) return;
      e.preventDefault();
      const i = parseInt(target.getAttribute("data-tab-link")!, 10);
      if (i === currentRef.current) return;
      switchTo(i);
    };
    root.addEventListener("click", onClickCapture);

    // touch swipe (mobile)
    const menu = menuRef.current;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.changedTouches[0].screenX;
      touchStartY.current = e.changedTouches[0].screenY;
      isSwiping.current = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      const dx = Math.abs(e.changedTouches[0].screenX - touchStartX.current);
      const dy = Math.abs(e.changedTouches[0].screenY - touchStartY.current);
      if (dx > 8 && dx > dy) isSwiping.current = true;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].screenX;
      if (isSwiping.current && Math.abs(diff) > 40) {
        const next =
          diff > 0
            ? Math.min(currentRef.current + 1, TABS.length - 1)
            : Math.max(currentRef.current - 1, 0);
        if (next !== currentRef.current) switchTo(next);
      }
      setTimeout(() => (isSwiping.current = false), 300);
    };
    menu?.addEventListener("touchstart", onTouchStart, { passive: true });
    menu?.addEventListener("touchmove", onTouchMove, { passive: true });
    menu?.addEventListener("touchend", onTouchEnd, { passive: true });

    import("lottie-web").then(({ default: lottie }) => {
      if (cancelled) return;
      lottieModRef.current = lottie;
      startTab(0);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
      root.removeEventListener("click", onClickCapture);
      menu?.removeEventListener("touchstart", onTouchStart);
      menu?.removeEventListener("touchmove", onTouchMove);
      menu?.removeEventListener("touchend", onTouchEnd);
      animRef.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      className="hero-tabs flex w-full flex-col rounded-[var(--radius--radius-l)] border-2 border-[#17171799] bg-black p-[var(--size--2xs)]"
    >
      <div
        ref={menuRef}
        className="hero-tabs-menu mb-[var(--size--2xs)] flex gap-[var(--size--2xs)] overflow-hidden"
      >
        {TABS.map((tab, i) => (
          <a
            key={tab.id}
            data-tab-link={i}
            href="#"
            className={`w-tab-link${i === current ? " w--current" : ""} flex flex-1 cursor-pointer items-center justify-center gap-[var(--size--2xs)] rounded-[var(--radius--radius-circle)] px-[var(--size--l)] py-[var(--size--s)] text-white no-underline`}
          >
            <div data-tab-bar={i} className="tab-progress-bar" />
            <div className="flex flex-col items-center">
              <tab.Icon width={20} height={20} />
            </div>
            <div className="text-[length:var(--typography--button-text-s)]">{tab.label}</div>
          </a>
        ))}
      </div>
      <div className="aspect-[1264/652] relative">
        {TABS.map((tab, i) => (
          <div
            key={tab.id}
            className={`w-tab-pane${i === current ? " w--tab-active" : ""} aspect-[1264/652] overflow-hidden rounded-[12px]`}
          >
            <div className="relative z-[2] h-full w-full">
              <div data-lottie-trigger={i} className="h-full w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
