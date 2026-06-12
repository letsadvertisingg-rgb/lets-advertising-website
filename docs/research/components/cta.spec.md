# CtaSection Specification

## Overview
- **Target file:** `src/components/CtaSection.tsx`
- **Sources:** `docs/research/sections/cta.html`, `docs/research/sections/cta.css`, screenshot `docs/design-references/section-cta.png`
- **Interaction model:** hover reveals background + slides logo/text inside the big button

## Structure
- `section.cta`: black, tall (~900px desktop; `.section-cta-secondary` min-heights ≥1500px in globals), centered content.
- Absolute `.cta-bg-wrapper > img.cta-background` (full-bleed bg image via manifest; opacity 0 default — global CSS).
- `.cta-wrapper` > big `.cta-button` (href /book-a-demo): wide bordered (1px white-ish border, radius per CSS) pill/rect containing:
  - `.image-default`: blue Pay logo square img (via manifest; width 149px desktop / max 60px mobile — global CSS)
  - `.cta-text-wrapper`: "Book a Demo" (font-size 72px per global CSS, white)
- On hover (global CSS): bg image fades in (`opacity 1` — set via JS mouseenter/mouseleave on the button targeting the wrapper, exactly like the original), logo slides to right edge `translateX(calc(var(--btn-width) - 149px - 32px))`, text shifts `translateX(-20%)`.
- Set `--btn-width` CSS var to button offsetWidth on mount + resize (exact original logic).
- Below button: `<p>` "**Ready to unlock your full revenue potential?** Capture missing revenue with intelligent routing and gain centralised control of your payments." (bold/strong markup per fragment, white, centered).

## Acceptance
- Hover sweeps logo across the button, shifts text, fades in the background image; matches screenshot.
