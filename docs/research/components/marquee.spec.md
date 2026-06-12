# LogoMarquee Specification

## Overview
- **Target file:** `src/components/LogoMarquee.tsx`
- **Sources:** `docs/research/sections/marquee.html`, `docs/research/sections/marquee.css`, screenshot `docs/design-references/section-marquee.png`
- **Interaction model:** continuous CSS animation

## Structure
- `section.marquee` (padding `var(--size--4xl)` top/bottom).
- `<p class="heading-style-h6 text-weight-bold">Trusted by industry leaders in 32+ countries</p>`
- `.marquee-wrapper` with `.marquee-left-overlay` (gradient fade on left edge — CSS in section css) and `.marquee-css-wrapper` containing **two identical** `.marquee-css-list` divs (for seamless loop).
- 8 logos per list, in order: logo.svg (PayPal), logo-(1).svg, logo-(2).svg, logo-(3).svg, logo-(4).svg, paysafe.svg, capital.svg, express.svg (all in `/images/`). Last item has extra class `express`.
- Logo img class `marque-css-item-logo` (overflow clip per global custom css). Sizes/gaps from section css (`.marquee-css-item`, `.marquee-css-list`).

## Animation
- The original animates `.marquee-css-list` via Webflow's data-css-marquee CSS — check `marquee.css` for the exact `animation`/`@keyframes`. If the keyframes are NOT present in the file, use the standard pattern: both lists side-by-side in a flex row, each animating `translateX(0 → -100%)` linearly, infinite; duration ~30s (eyeball vs original); pause NOT on hover (original keeps moving).

## Responsive
- Same layout all breakpoints; logo heights per CSS media queries.

## Acceptance
- Seamless infinite leftward logo scroll with left-edge fade overlay, heading verbatim.
