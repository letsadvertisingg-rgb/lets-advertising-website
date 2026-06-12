"use client";

import { useEffect, useRef } from "react";

/**
 * pay.com's [data-anim="count-span"] slot-machine counter, ported verbatim:
 * each digit is a column of 0..digit; on first viewport entry (threshold 0.8)
 * columns roll up with delay i*120ms, duration 1200+i*150ms,
 * cubic-bezier(0.25,1,0.5,1). Prefix/suffix/decimal point stay static.
 */
export function CountSpan({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const span = ref.current;
    if (!span) return;
    const slots = Array.from(span.querySelectorAll<HTMLSpanElement>("[data-count-inner]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          slots.forEach((inner, i) => {
            const delay = i * 120;
            const duration = 1200 + i * 150;
            setTimeout(() => {
              inner.style.transition = `transform ${duration}ms cubic-bezier(0.25, 1, 0.5, 1)`;
              inner.style.transform = `translateY(calc(-100% + 1.1em))`;
            }, delay);
          });
        });
      },
      { threshold: 0.8 }
    );
    observer.observe(span);
    return () => observer.disconnect();
  }, []);

  const prefixMatch = value.match(/^[^0-9]*/);
  const prefix = prefixMatch ? prefixMatch[0] : "";
  const suffixMatch = value.match(/[^0-9.]+$/);
  const suffix = suffixMatch ? suffixMatch[0] : "";
  const numberMatch = value.match(/[\d.]+/);
  const numberStr = numberMatch ? numberMatch[0] : "";
  const [intPart, decPart] = numberStr.split(".");

  const renderDigit = (digit: string, key: string) => (
    <span
      key={key}
      className="relative inline-block overflow-hidden align-bottom"
      style={{ height: "1.1em", width: "0.55em", letterSpacing: 0 }}
    >
      <span data-count-inner="" className="relative flex flex-col" style={{ letterSpacing: 0 }}>
        {Array.from({ length: parseInt(digit, 10) + 1 }, (_, n) => (
          <span
            key={n}
            className="block text-left"
            style={{ height: "1.1em", lineHeight: "1.1em", letterSpacing: 0 }}
          >
            {n}
          </span>
        ))}
      </span>
    </span>
  );

  if (!numberStr) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "flex-end",
        overflow: "visible",
        position: "relative",
        letterSpacing: "inherit",
      }}
    >
      {prefix && <span style={{ letterSpacing: "inherit" }}>{prefix}</span>}
      {intPart.split("").map((d, i) => renderDigit(d, `i${i}`))}
      {decPart !== undefined && decPart !== "" && (
        <>
          <span style={{ letterSpacing: 0 }}>.</span>
          {decPart.split("").map((d, i) => renderDigit(d, `d${i}`))}
        </>
      )}
      {suffix && <span style={{ letterSpacing: "inherit" }}>{suffix}</span>}
    </span>
  );
}
