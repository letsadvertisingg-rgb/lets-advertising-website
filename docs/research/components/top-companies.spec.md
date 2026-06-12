# TopCompanies Specification

## Overview
- **Target file:** `src/components/TopCompanies.tsx`
- **Sources:** `docs/research/sections/top-companies.html`, `docs/research/sections/top-companies.css`, screenshots `docs/design-references/section-top-companies.png`, `topo-03.png`/`topo-04.png`
- **Interaction model:** time-driven vertical text rotator

## Structure
- Left column: heading "Top companies use Pay.com for:" + `.top-companies-right` visual containing the Pay logo img (via manifest) — note: despite the class name, check fragment for exact arrangement (logo card sits beside/below heading).
- Right column: `.right-rotate-wrapper` (absolute, overflow hidden) > `.right-companies-wrapper` (flex column) with `[data-anim="text-rotate"]` items (large H3-scale text, grey #ccc-ish at 0.25 opacity per global CSS; active = opacity 1 + translateX(56px)).
- 7 industries (verbatim): iGaming & Sports Betting, eCommerce & Retail, Digital Media & Streaming, SaaS & Software Platforms, Travel & Hospitality, Crypto & Digital Assets, WealthTech & Investment Platforms.
- The DOM duplicates the list for seamless wrap (check fragment: if items appear 2-3×, replicate).

## Behavior (exact)
- PAUSE 1200ms between steps, ANIM 400ms `cubic-bezier(0.4,0,0.2,1)`.
- A track div (will-change transform) translates Y so the active item's vertical center aligns with the logo's center (measure with getBoundingClientRect on mount + resize).
- Each step: idx+1 → set `.is-active`, animate track translateY. After 7 steps, instantly (no transition) reset to the start index and continue. Start after fonts load / on mount; begin at the item nearest the logo center.
- Global CSS already covers item opacity/translate transitions.

## Responsive
- ≤767px: `.right-companies-wrapper` max-width 85% (global CSS). Stack columns per section CSS.

## Acceptance
- Continuous vertical carousel where the highlighted industry aligns with the logo, advancing every ~1.6s, seamless loop.
