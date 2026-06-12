# RoiCalculator Specification

## Overview
- **Target files:** `src/components/RoiCalculator.tsx` + `src/components/RoiModal.tsx`
- **Sources:** `docs/research/sections/roi.html`, `docs/research/sections/roi.css`, screenshot `docs/design-references/section-roi.png`; ALL widget/modal CSS classes already exist verbatim in `src/app/globals.css` (`.roi-card`, `.roi-header`, `.currency-*`, `.input-wrap`, `.field-*`, `.tooltip-*`, `.calc-btn`, `.roi-spinner`, `.roi-modal-*`, `.roi-digit-*`, `.roi-chart-*`, `.roi-breakdown-*`, `.roi-info-*`, `.flag-icon`)
- **Interaction model:** form + dropdown + animated modal

## Structure
- `section.roi`: black, full-bleed; absolute `.bg-background-wrapper > img.bg-image.roi` (background photo `img.webp`/`bg-img.webp` via manifest — check fragment).
- Left `.roi-left-wrapper`: giant Pay logo visual (img via manifest), heading "See the revenue you're leaving behind", paragraph "Discover how much additional revenue you could generate by improving your approval rates through intelligent payment orchestration." (verify verbatim), small label "Switch. It pays." or similar — copy from fragment.
- Right `.roi-right-wrapper`: white `.roi-card`:
  - Header: "ROI Calculator" (`.roi-heading` class in globals — fragment uses `.heading-style-h5`) + currency button (`.currency-btn`): `FlagUsdIcon` + "USD" + `RoiChevronIcon` (rotates 180° when open).
  - Currency dropdown (`.currency-dropdown`): 3 options USD ($ US Dollar), GBP (£ British Pound), EUR (€ Euro) — flags `FlagUsdIcon/FlagGbpIcon/FlagEurIcon`, checkmark on selected. Closes on outside click.
  - Field 1: label "What is your annual turnover?" + tooltip icon "?" (tooltip text from fragment) + input: prefix currency symbol, placeholder "10,000,000", suffix code (USD).
  - Field 2: "What is your Avg Order Value (AOV)?" + tooltip + input placeholder "5,000".
  - Input behavior: digits only, live `toLocaleString('en-US')` thousands formatting, `.filled` class when non-empty, error state (`.error` + `.field-error.visible` "This field is required" — copy text from fragment) when calculating with empty value; focus clears placeholder; blur restores it if empty.
  - Button `.calc-btn` "Calculate Your Revenue Uplift" → on valid: 1600ms disabled with text "Calculating" + `.roi-spinner`, then open modal.

## Modal (RoiModal — rendered in a portal/fixed overlay, `.roi-modal-overlay`)
- Math: turnover = parsed input; partial = round(t*0.01); smart = round(t*0.03); cascade = round(t*0.01); total = sum. Format `{sym} {n.toLocaleString('en-US')}`.
- Layout (classes in globals): close button (`CloseIcon`), `.roi-modal-top` grey box with label "Total Revenue Uplift", animated amount (`.roi-modal-amount` — digit slot machine: per digit slot column 0..d, delay `100+i*80ms`, duration `1200+i*80ms`, `cubic-bezier(0.25,1,0.5,1)`, translateY(calc(-100% + 1.15em)); commas/prefix static), chart bars `.roi-chart-bars` heights [13,19,28,40,53,66,78]px animating height 0→h with `cubic-bezier(0.34,1.56,0.64,1)`, delay `50+i*60ms`, duration `500+i*80ms`, divider, breakdown rows: Partial Approval (1%), Smart Routing (3%), Cascading (1%) each with `TrendUpIcon` badge + amount.
- `.roi-info-box`: 3 `RoiCheckIcon` lines: "Your estimated revenue uplift with Pay.com could be approximately {total}" / "Unlocked through our smart orchestration capabilities, including Partial Approval, Smart Routing, Cascading, and more." / "Based on the inputted AOV, there may be additional revenue opportunities yet to be captured."
- Sub text: "Book a demo to find out how much you could be leaving on the table." + StaggerButton "Book a Demo" (href /book-a-demo, blue or white pill per screenshot/fragment).
- Close: X, overlay click, Escape. Body scroll locked while open.

## Responsive
- ≤767px: roi-card height auto; modal info box + chart hidden (already in global CSS); left/right stack per section CSS.

## Acceptance
- Pixel match to screenshot; currency switching updates symbols/suffixes; validation, spinner, modal with animated digits + bars all work.
