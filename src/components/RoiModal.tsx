"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { StaggerText } from "@/components/StaggerButton";
import { CloseIcon, RoiCheckIcon, TrendUpIcon } from "@/components/icons";
import type { CurrencyCode } from "@/types";

const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = { USD: "$", GBP: "£", EUR: "€" };
const BAR_HEIGHTS = [13, 19, 28, 40, 53, 66, 78];

interface RoiModalProps {
  turnover: number;
  currency: CurrencyCode;
  onClose: () => void;
}

export function RoiModal({ turnover, currency, onClose }: RoiModalProps) {
  const amountRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  const sym = CURRENCY_SYMBOLS[currency];
  const partial = Math.round(turnover * 0.01);
  const smart = Math.round(turnover * 0.03);
  const cascade = Math.round(turnover * 0.01);
  const total = partial + smart + cascade;
  const fmt = (n: number) => `${sym} ${Math.round(n).toLocaleString("en-US")}`;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // animate amount digits + chart bars (verbatim timings from the original)
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const t0 = setTimeout(() => {
      const el = amountRef.current;
      if (el) {
        const finalText = fmt(total);
        const match = finalText.match(/[\d,]+/);
        if (match) {
          const prefix = finalText.substring(0, finalText.indexOf(match[0]));
          el.innerHTML = "";
          const slots: HTMLElement[] = [];
          if (prefix) {
            const p = document.createElement("span");
            p.className = "roi-static-char";
            p.textContent = prefix;
            el.appendChild(p);
          }
          match[0].split("").forEach((char) => {
            if (char === ",") {
              const comma = document.createElement("span");
              comma.className = "roi-static-char";
              comma.textContent = ",";
              el.appendChild(comma);
              return;
            }
            const d = parseInt(char, 10);
            const slot = document.createElement("span");
            slot.className = "roi-digit-slot";
            const inner = document.createElement("span");
            inner.className = "roi-digit-inner";
            for (let n = 0; n <= d; n++) {
              const numEl = document.createElement("span");
              numEl.className = "roi-digit-num";
              numEl.textContent = String(n);
              inner.appendChild(numEl);
            }
            slot.appendChild(inner);
            el.appendChild(slot);
            slots.push(inner);
          });
          slots.forEach((inner, i) => {
            timers.push(
              setTimeout(() => {
                inner.style.transition = `transform ${1200 + i * 80}ms cubic-bezier(0.25, 1, 0.5, 1)`;
                inner.style.transform = "translateY(calc(-100% + 1.15em))";
              }, 100 + i * 80)
            );
          });
        } else {
          el.textContent = finalText;
        }
      }
      const chart = chartRef.current;
      if (chart) {
        chart.innerHTML = "";
        BAR_HEIGHTS.forEach((h, i) => {
          const bar = document.createElement("div");
          bar.className = "roi-chart-bar";
          bar.style.height = "0px";
          chart.appendChild(bar);
          timers.push(
            setTimeout(() => {
              bar.style.transition = `height ${500 + i * 80}ms cubic-bezier(0.34, 1.56, 0.64, 1)`;
              bar.style.height = `${h}px`;
            }, 50 + i * 60)
          );
        });
      }
    }, 50);
    timers.push(t0);
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rows = [
    { label: "Partial Approval", pct: "1%", val: partial },
    { label: "Smart Routing", pct: "3%", val: smart },
    { label: "Cascading", pct: "1%", val: cascade },
  ];

  return (
    <div
      className="roi-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="roi-modal">
        <button className="roi-modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon width={12} height={12} />
        </button>
        <div className="roi-modal-top">
          <div className="roi-modal-top-label">Total Revenue Uplift</div>
          <div className="roi-amount-section">
            <div ref={amountRef} className="roi-modal-amount" />
            <div ref={chartRef} className="roi-chart-bars" />
          </div>
          <div className="roi-modal-divider" />
          <div className="roi-breakdown-rows">
            {rows.map((r) => (
              <div key={r.label} className="roi-breakdown-row">
                <div className="roi-row-left">
                  {r.label}{" "}
                  <span className="roi-row-badge">
                    <TrendUpIcon width={12} height={12} /> {r.pct}
                  </span>
                </div>
                <div className="roi-row-amount">{fmt(r.val)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="roi-info-box">
          <div className="roi-info-item">
            <RoiCheckIcon className="roi-check-icon" width={20} height={20} />
            <span>
              Your estimated revenue uplift with Pay.com could be approximately {fmt(total)}
            </span>
          </div>
          <div className="roi-info-item">
            <RoiCheckIcon className="roi-check-icon" width={20} height={20} />
            <span>
              Unlocked through our smart orchestration capabilities, including Partial Approval,
              Smart Routing, Cascading, and more.
            </span>
          </div>
          <div className="roi-info-item">
            <RoiCheckIcon className="roi-check-icon" width={20} height={20} />
            <span>
              Based on the inputted AOV, there may be additional revenue opportunities yet to be
              captured.
            </span>
          </div>
        </div>
        <p className="roi-modal-sub">Book a demo to find out how much you could be leaving on the table.</p>
        <Link
          href="/book-a-demo"
          aria-label="Book a Demo"
          className="btn-animate-chars relative inline-flex w-full items-center justify-center gap-[0.5rem] cursor-pointer px-[2rem] py-[1rem] no-underline"
        >
          <div className="btn-animate-chars__bg absolute inset-0 rounded-[99999px] bg-[var(--brand--brand-electric-blue)]" />
          <span className="relative z-[1] text-white text-[length:var(--typography--button-text-m)] font-semibold leading-[1.5] whitespace-nowrap">
            <StaggerText text="Book a Demo" />
          </span>
        </Link>
      </div>
    </div>
  );
}
