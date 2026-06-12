# StickyFeatures Specification (Payments / Optimisation / Protection / Treasury)

## Overview
- **Target file:** `src/components/StickyFeatures.tsx`
- **Sources:** `docs/research/sections/sticky-features.html`, `docs/research/sections/sticky-features.css`, screenshot `docs/design-references/section-sticky-features.png` + `topo-02.png`
- **Interaction model:** SCROLL-DRIVEN (desktop ≥992px); click-to-switch (mobile). DO NOT build this as click tabs on desktop.

## Structure
- Outer `.section-track`: black background, `height: 2250px` (check CSS — relative container that defines scroll length).
- Inner `section.section.scroll`: `position: sticky; top: 0; height: 100vh` (≈900px), holds a container with:
  - Left column: 4 headlines `[data-headline="1..4"]`: Payments, Optimisation, Protection, Treasury (H2-scale, white; inactive opacity 0.3) + below the active one, text blocks `[data-text="1..4"]` (paragraph + StaggerButton "Explore Payments" / "Explore Optimisation" / etc — copy labels+hrefs from fragment).
  - Right column: stacked image panels `[data-image="1..4"]` — each absolute inset-0, `zIndex: i+1`, containing background image (phone photo webp via manifest) + `.lottie-tab-trigger` lottie (svg renderer, loop false):
    1. Payments → `/lottie/1-payments-animation.json`
    2. Optimisation → `/lottie/2-optimization-animation.json`
    3. Protection → `/lottie/3-protection-animation.json`
    4. Treasury → `/lottie/4-treasury-animation.json`
- Panel texts (verbatim from fragment), e.g. Payments: "Capture global sales with a full suite of payment methods, orchestrated through a dynamic, embedded checkout. Secure card data in a centralized vault, and manage your outgoing funds effortlessly with automated payouts." (copy all 4)

## Behavior (exact port of the site's GSAP logic — implement with plain React + rAF/scroll listener; GSAP not installed)
- Initial: image[0] `clipPath: inset(0% 0% 0% 0%)`, others `inset(0% 0% 100% 0%)`; headline[0] opacity 1, others 0.3; text[0] visible, others `display:none`.
- Desktop: `scrollable = trackHeight - innerHeight`; offsets `[0, s/4, s/2, 3s/4]`; on scroll compute `scrolled = scrollY - trackTop`; active = highest i with scrolled ≥ offsets[i].
- setTab(to): headlines animate opacity (0.3↔1, 300ms ease-out); old text fades 250ms then display none, new text display flex + fade in 300ms; images: going down → new image clipPath animates `inset(0 0 100% 0)` → `inset(0 0 0 0)` over **900ms**; going up → current image animates to `inset(0 0 100% 0)` (peel away) while target is set visible instantly; skipped intermediate images set instantly. Use CSS transitions on clip-path (`transition: clip-path 0.9s ease`) toggled per the rules; set `transition: none` for instant sets.
- Active panel's lottie: `goToAndPlay(0)`; previous `goToAndStop(0)`.
- Click headline (desktop): instantly scroll window to `trackTop + offsets[i]` and setTab(i).
- Extra trigger: when track top crosses 40% of viewport and active===0, play lottie 0 (replicate: play first lottie when section enters view).
- Mobile <992px: section not scroll-jacked (sticky still fine but track height = auto/100vh; check CSS media queries); headlines clickable to switch; same animations.
- Re-evaluate on resize crossing 992px (reset to tab 0).

## Acceptance
- Scrolling through the 2250px track pins the section and sweeps through 4 panels with top-down clip reveals; headlines dim/undim; clicking a headline jumps; mobile is click-driven.
