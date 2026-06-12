# ScaleSection Specification

## Overview
- **Target file:** `src/components/ScaleSection.tsx`
- **Sources:** `docs/research/sections/scale.html`, `docs/research/sections/scale.css`, screenshot `docs/design-references/section-scale.png`
- **Interaction model:** viewport-entry slot-machine counters + image parallax

## Structure
- Heading: "Scale proven at volume" (H2, left-aligned).
- Bento grid (check fragment/CSS grid template):
  - Large card: runner photo (`rickie-tom-schunemann...webp` via manifest) with overlay stat `99.999%` + label "Industrial uptime" (verify verbatim) — white text over image, photo has `[data-anim="paralax"]` treatment (global CSS scale 1.2 + JS translateY; implement the scroll listener: `offset = (clamp((vh-rect.top)/(vh+rect.height),0,1) - 0.5) * -8` in % translateY).
  - Card: `3x` + "faster merchant onboarding than the industry standard" (grey bg).
  - Card: `98%` + "of customer payments volume" (electric blue bg #0053EF, white text).
  - Card: `$ billions` + "processed every month" (white/grey, with dot-pattern decoration images via manifest).
- Stat numbers: wrap number in `[data-anim="count-span"]` and implement the EXACT counter: split integer digits into slots (width .55em, height 1.1em, overflow hidden), each slot has column of 0..digit, on IntersectionObserver threshold 0.8 (once) animate each column `translateY(calc(-100% + 1.1em))` with delay `i*120ms`, duration `1200+i*150ms`, easing `cubic-bezier(0.25,1,0.5,1)`. Prefix/suffix (%, $, x, .) stay static. Decimals handled per-digit ("99.999" → slots for 9,9 then dot then 9,9,9).

## Responsive
- Grid collapses to single column ≤767px; check CSS media queries for 991px arrangement.

## Acceptance
- Bento grid matching screenshot; numbers roll up like slot machines on first scroll into view; runner photo parallaxes.
