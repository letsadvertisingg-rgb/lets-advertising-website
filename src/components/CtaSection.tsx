"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function CtaSection() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;
    const setWidth = () => {
      btn.style.setProperty("--btn-width", `${btn.offsetWidth}px`);
    };
    setWidth();
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, []);

  return (
    <section className="section-cta-secondary relative flex flex-col items-center justify-center min-h-screen max-[767px]:min-h-0 bg-black pt-[var(--size--8xl)] pb-[var(--size--8xl)] max-[767px]:pt-[var(--size--5xl)] max-[767px]:pb-[var(--size--5xl)]">
      {/* Background image, revealed on button hover */}
      <div className="cta-bg-wrapper absolute inset-0 flex flex-col items-center justify-center overflow-hidden" style={{ opacity: bgVisible ? 1 : 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/frame-8943584.svg"
          alt=""
          className="cta-background absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="cta-wrapper mx-auto flex max-w-[53.125rem] flex-col gap-[32px] max-[767px]:gap-[48px] max-[767px]:items-center text-center text-[1.5rem] leading-[1.5em] overflow-visible">
          <Link
            ref={buttonRef}
            href="/book-a-demo"
            className="cta-button relative z-[1] flex items-center justify-start h-[180px] min-h-[180px] p-[16px] border-2 border-white rounded-tr-[24px] rounded-bl-[24px] rounded-tl-none rounded-br-none transition-all duration-[400ms] hover:bg-[#0053ef] hover:border-[#0053ef] hover:shadow-[0_0_194px_#0053ef] max-[767px]:w-full max-[767px]:max-w-[400px] max-[767px]:h-[72px] max-[767px]:min-h-[72px] max-[767px]:p-[6px] max-[767px]:rounded-tr-[12px] max-[767px]:rounded-bl-[12px]"
            onMouseEnter={() => setBgVisible(true)}
            onMouseLeave={() => setBgVisible(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/group-8942993.svg" alt="" className="image-default" />
            <div className="cta-text-wrapper">
              <div className="cta-text font-semibold text-[4.5rem] max-[991px]:leading-[1em] max-[767px]:text-[28px]" style={{ fontVariationSettings: '"wght" 580' }}>
                Book a Demo
              </div>
            </div>
          </Link>
          <div className="text-is-relative relative z-[2] text-white max-[767px]:order-[-1] max-[767px]:text-[1.125rem] max-[767px]:leading-[150%]">
            <span className="font-semibold">Ready to unlock your full revenue potential?</span>{" "}
            Capture missing revenue with intelligent routing and gain centralised control of your payments.
          </div>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="absolute bottom-0 left-0 right-0 w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
        <div className="h-px w-full bg-[#ffffff1a]" />
      </div>
    </section>
  );
}
