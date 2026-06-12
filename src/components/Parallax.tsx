"use client";

import { useEffect, useRef } from "react";

/**
 * pay.com's [data-anim="paralax"] scroll parallax, ported verbatim:
 * image is pre-scaled to 1.2 (global CSS) and translated by
 * (progress - 0.5) * -strength % as it crosses the viewport.
 */
export function ParallaxImage({
  src,
  alt = "",
  className,
  strength = 8,
  sizes,
}: {
  src: string;
  alt?: string;
  className?: string;
  strength?: number;
  sizes?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    img.style.willChange = "transform";
    const onScroll = () => {
      const rect = img.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamp = Math.min(Math.max(progress, 0), 1);
      const offset = (clamp - 0.5) * -strength;
      img.style.transform = `translateY(${offset}%)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt={alt} data-anim="paralax" className={className} sizes={sizes} />;
}
