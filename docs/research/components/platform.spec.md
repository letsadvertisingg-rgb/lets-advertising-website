# PlatformCarousel Specification

## Overview
- **Target file:** `src/components/PlatformCarousel.tsx`
- **Sources:** `docs/research/sections/platform.html`, `docs/research/sections/platform.css`, screenshots `docs/design-references/section-platform.png`, `topo-04.png`/`topo-05.png`
- **Interaction model:** Swiper carousel (drag, dots, hover arrows, scrollbar)

## Structure
- `section.platform`: bg `var(--neutral--neutral-grey-200)` (#f5f5f7).
- Heading: "One platform. Built for growth and scalability." (H2) — check fragment for accompanying paragraph/counter.
- Swiper `#swiper-1` with 6 slides (copy ALL from fragment verbatim — tag pill, heading, body, image). Known slides include:
  - "For CFOs" — "Reconcile settlements across all providers" — "Automate settlement reconciliation and decode hidden fees across multiple providers in seconds, not hours."
  - "For Head of Payments" — "Maximize your global authorization rates" — "Take strategic control of your global payment infrastructure. Use intelligent routing to rescue declines, boost approvals, and protect your bottom line."
  - "For Engineering Teams" — "Integrate in minutes with headless APIs" — "Accelerate integration timelines with our API-first architecture. Access clear documentation, robust SDKs, and headless infrastructure backed by guaranteed 99.999% uptime SLAs."
  - remaining 3 (For ... ) — extract from fragment ("Gain total visibility..." etc).
- Slide card: blue gradient visual on top (webp via manifest, wrapped in `.swiper-image-wrapper` with `[data-anim="paralax"]` img — global CSS + scroll parallax −8%), white text area below? (check fragment: label pill `+ For CFOs` style, heading, paragraph).
- Controls: counter `#swiper-counter-1` ("0X/0Y" leading zeros = lastVisible/total), nav dots container `.swiper-navigation` with `.swiper-nav-dot` template (active `is-active`; dotCount = total − visible + 1), prev/next buttons `#btn-prev`/`#btn-next` (arrow icons from fragment — likely `/images/arrow_right_alt.svg`), scrollbar `#scrollbar-1`.

## Swiper config (exact)
```js
slidesPerView: 1.15, spaceBetween: 16, speed: 800,
breakpoints: { 0:{slidesPerView:1.15,freeMode:false,spaceBetween:16}, 768:{slidesPerView:1.15,freeMode:true,spaceBetween:16}, 992:{slidesPerView:3,freeMode:true,spaceBetween:24}, 1500:{slidesPerView:3,freeMode:true,spaceBetween:32} }
```
- Use Swiper 11 core (`new Swiper(el, {...})` with Navigation/Pagination/Scrollbar/FreeMode modules) inside useEffect; or swiper/react with same params.
- Arrows: opacity 0 by default (global CSS); fade in on `.slider-component` mouseenter (and hide at begin/end respectively); update on slideChange.
- Counter shows `min(total, activeIndex + visible)` left-padded.
- Dots rebuilt on resize/breakpoint.

## Responsive
- Mobile: 1.15 cards visible, no freeMode; desktop: 3 visible + freeMode drag.

## Acceptance
- Draggable carousel matching screenshot; counter/dots/arrows behave exactly as described.
