# CaseStudies Specification

## Overview
- **Target file:** `src/components/CaseStudies.tsx`
- **Sources:** `docs/research/sections/case-studies.html`, `docs/research/sections/case-studies.css`, screenshot `docs/design-references/section-case-studies.png`
- **Interaction model:** static + hover (button char-roll)

## Structure
- Heading: "Case studies" (H2).
- Grid of cards (check fragment for exact grid arrangement):
  1. Story card (light grey): ExpressVPN logo (image via manifest), heading "How ExpressVPN turned payment performance into a global growth engine", StaggerButton "Read Full Story" (href from fragment), quote: ""Our payment stack is now a genuine competitive advantage — a unified dashboard, smarter risk management, and intelligent routing all working together in one place."" (verbatim from fragment incl. quotes/em-dashes).
  2. Stat card: `11%` + "Conversion rate increase" (light blue/sky bg per CSS).
  3. Stat card: `$55M+` + "Additional annual revenue" (electric blue bg, white text).
  4. Photo card: woman with headphones (`getty-images...webp` or `alexander-pozdeev...webp` — match via fragment), rounded.
- Stat numbers may use `[data-anim="count-span"]` slot counters — check fragment; if so, same counter implementation as ScaleSection (consider a tiny shared util or duplicate inline).

## Responsive
- Stack on mobile per CSS media queries.

## Acceptance
- Layout matches screenshot exactly; verbatim text; counters animate if the original has them.
