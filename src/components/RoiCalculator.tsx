"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FlagEurIcon,
  FlagGbpIcon,
  FlagUsdIcon,
  InputErrorIcon,
  RoiChevronIcon,
} from "@/components/icons";
import { RoiModal } from "@/components/RoiModal";
import type { CurrencyCode } from "@/types";

const CURRENCIES: { code: CurrencyCode; sym: string; name: string }[] = [
  { code: "USD", sym: "$", name: "US dollar" },
  { code: "GBP", sym: "£", name: "British pound" },
  { code: "EUR", sym: "€", name: "Euro" },
];

function Flag({ code, ...props }: { code: CurrencyCode; width?: number; height?: number }) {
  if (code === "USD") return <FlagUsdIcon {...props} />;
  if (code === "GBP") return <FlagGbpIcon {...props} />;
  return <FlagEurIcon {...props} />;
}

function formatThousands(raw: string) {
  return raw ? parseInt(raw, 10).toLocaleString("en-US") : "";
}

export function RoiCalculator() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [turnover, setTurnover] = useState("");
  const [aov, setAov] = useState("");
  const [turnoverError, setTurnoverError] = useState(false);
  const [aovError, setAovError] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [turnoverFocused, setTurnoverFocused] = useState(false);
  const [aovFocused, setAovFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sym = CURRENCIES.find((c) => c.code === currency)!.sym;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const calculate = () => {
    const turnoverRaw = turnover.replace(/[^0-9]/g, "");
    const aovRaw = aov.replace(/[^0-9]/g, "");
    let hasError = false;
    if (!turnoverRaw) {
      setTurnoverError(true);
      hasError = true;
    }
    if (!aovRaw) {
      setAovError(true);
      hasError = true;
    }
    if (hasError) return;
    setCalculating(true);
    setTimeout(() => {
      setCalculating(false);
      setModalOpen(true);
    }, 1600);
  };

  return (
    <section className="relative flex flex-row max-[991px]:flex-col items-center justify-center overflow-hidden bg-black">
      <div className="relative z-[1] flex w-full flex-row max-[991px]:flex-col items-center gap-[2rem] pl-[calc(50vw-40rem)] max-[991px]:pl-0">
        {/* Left */}
        <div className="flex max-w-[47%] flex-1 flex-col gap-y-[var(--size--8xl)] pt-[5rem] pb-[17.5rem] pr-[4.3125rem] max-[991px]:w-full max-[991px]:max-w-full max-[991px]:px-[var(--container--size-padding)] max-[991px]:pb-[3rem]">
          <Link href="/" className="max-w-[35.625rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/frame-2147257218.webp"
              alt=""
              sizes="100vw"
              className="aspect-[570/320] h-full w-full"
            />
          </Link>
          <div className="flex max-w-[25.8125rem] flex-col items-start gap-[var(--size--xl)]">
            <div className="font-semibold text-white text-[length:var(--typography--h4)] max-[991px]:text-[length:var(--typography--h4-tablet)] leading-[var(--typography--line-height-m)] tracking-[-0.02em]">
              See the revenue you&rsquo;re leaving behind
            </div>
            <p className="text-white/80 text-[length:var(--typography--text-l)] leading-[var(--typography--line-height-l)]">
              Discover how much additional revenue you could generate by improving your approval
              rates through intelligent payment orchestration.
            </p>
          </div>
        </div>

        {/* Right: calculator card */}
        <div className="flex-1 py-[11.25rem] pl-[2rem] max-[991px]:w-full max-[991px]:py-[3rem] max-[991px]:px-[var(--container--size-padding)] max-[991px]:flex max-[991px]:justify-center">
          <div className="roi-card">
            <div className="roi-header">
              <span className="roi-heading">ROI Calculator</span>
              <div ref={dropdownRef} className="relative">
                <button
                  className="currency-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen((o) => !o);
                  }}
                >
                  <span className="flag-icon">
                    <Flag code={currency} width={24} height={24} />
                  </span>
                  <span>{currency}</span>
                  <RoiChevronIcon
                    width={14}
                    height={14}
                    style={{
                      transition: "transform 0.2s",
                      flexShrink: 0,
                      pointerEvents: "none",
                      transform: dropdownOpen ? "rotate(180deg)" : undefined,
                    }}
                  />
                </button>
                {dropdownOpen && (
                  <div className="currency-dropdown">
                    {CURRENCIES.map((c) => (
                      <div
                        key={c.code}
                        className="currency-option"
                        onClick={() => {
                          setCurrency(c.code);
                          setDropdownOpen(false);
                        }}
                      >
                        <div className="curr-left">
                          <span className="flag-icon">
                            <Flag code={c.code} width={24} height={24} />
                          </span>
                          <span className="curr-code">{c.code}</span>
                          <span className="curr-name">{c.name}</span>
                        </div>
                        <span
                          className="checkmark"
                          style={{ visibility: c.code === currency ? "visible" : "hidden" }}
                        >
                          ✓
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="roi-fields-wrapper">
              <div className="field-wrap">
                <div className="field-label">
                  What is your annual turnover?
                  <div className="tooltip-wrap">
                    <div className="tooltip-icon">?</div>
                    <div className="tooltip-box">Total gross revenue per annum</div>
                  </div>
                </div>
                <div
                  className={`input-wrap${turnover ? " filled" : ""}${turnoverError ? " error" : ""}`}
                >
                  <span className="input-prefix">{sym}</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder={turnoverFocused ? "" : "10,000,000"}
                    value={turnover}
                    onFocus={() => {
                      setTurnoverFocused(true);
                      setTurnoverError(false);
                    }}
                    onBlur={() => setTurnoverFocused(false)}
                    onChange={(e) =>
                      setTurnover(formatThousands(e.target.value.replace(/[^0-9]/g, "")))
                    }
                  />
                  <InputErrorIcon className="input-error-icon" width={14} height={15} />
                  <span className="input-suffix">{currency}</span>
                </div>
                <span className={`field-error${turnoverError ? " visible" : ""}`}>
                  Please enter your annual turnover
                </span>
              </div>

              <div className="field-wrap">
                <div className="field-label">
                  What is your Avg Order Value (AOV)?
                  <div className="tooltip-wrap">
                    <div className="tooltip-icon">?</div>
                    <div className="tooltip-box">Average transaction / basket / order value</div>
                  </div>
                </div>
                <div className={`input-wrap${aov ? " filled" : ""}${aovError ? " error" : ""}`}>
                  <span className="input-prefix">{sym}</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder={aovFocused ? "" : "5,000"}
                    value={aov}
                    onFocus={() => {
                      setAovFocused(true);
                      setAovError(false);
                    }}
                    onBlur={() => setAovFocused(false)}
                    onChange={(e) => setAov(formatThousands(e.target.value.replace(/[^0-9]/g, "")))}
                  />
                  <InputErrorIcon className="input-error-icon" width={14} height={15} />
                  <span className="input-suffix">{currency}</span>
                </div>
                <span className={`field-error${aovError ? " visible" : ""}`}>
                  Please enter your average order value
                </span>
              </div>
            </div>

            <button className="calc-btn" onClick={calculate} disabled={calculating}>
              {calculating ? (
                <>
                  Calculating <div className="roi-spinner" />
                </>
              ) : (
                "Calculate Your Revenue Uplift"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Right-half background image */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bg-img-69e75d.webp"
          alt=""
          sizes="100vw"
          className="bg-image roi sticky top-0 ml-auto h-full w-full max-w-[50%] max-[991px]:max-w-full object-cover overflow-clip"
        />
      </div>

      {modalOpen && (
        <RoiModal
          turnover={parseInt(turnover.replace(/[^0-9]/g, ""), 10) || 0}
          currency={currency}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}
