# pay.com — Behavior Bible

All behaviors below were extracted **verbatim from the site's inline scripts** (saved at `docs/research/custom-scripts.js`) and inline styles (`docs/research/custom-styles.css`). Mechanisms are exact, not inferred.

## Global

### Button character stagger (`[data-button-animate-chars]`)
- On load, button text is split into per-character `<span>`s with `transition-delay: index * 0.01s`.
- CSS (custom-styles.css): on hover each char translates up/out and a duplicate slides in (see `.btn-animate-chars` block). Desktop only (`@media (min-width: 992px)`).
- `.btn-animate-chars__bg` background layer; hover scales/colors per CSS.

### Text hover stagger (`.text-animated-hover`)
- Same per-char split, used on nav/footer links.

### Parallax (`[data-anim="paralax"]`)
- JS scroll listener: `progress = (vh - rect.top) / (vh + rect.height)`, clamped 0..1; `translateY((clamp - 0.5) * -8%)`.
- Base CSS: `transform-origin: center; scale: 1.2`.
- Variant `.bento-box-right.paralax .full-image`: scale 1.2, offset multiplier **-24%** instead of -8%.

### Slot-machine counters (`[data-anim="count-span"]`)
- Each digit becomes a vertical column of 0..digit numbers (height 1.1em per cell, width 0.55em).
- Trigger: IntersectionObserver `threshold: 0.8`, fires once.
- Per-slot: delay `i * 120ms`, duration `1200 + i * 150ms`, easing `cubic-bezier(0.25, 1, 0.5, 1)`, transform `translateY(calc(-100% + 1.1em))`.

### Nav
- `.navigation` is `position: fixed`, top 0, full width, z-high. `.nav-menu-wrapper` background `rgb(23,23,23)` (black-400), border-radius (pill), sits 15px from top, height 63px.
- `.nav-bg-blur`: rgba(0,0,0,0.5) blur overlay used when mobile menu/dropdowns open (display none → opacity transition).
- Dropdown menus on hover (Webflow nav). Products/Developers/Resources/Company.

### External links: `[external-link="true"]` get `target=_blank rel=noopener`.
### Copyright year: `#copyright` element replaced with current year.

## Section: Hero

### Cycling word (`.span-animated`)
- Words: `['Convert.', 'Orchestrate.', 'Route.', 'Recover.']`, interval **2800ms**.
- Exit: `transform: translateY(60%)`, opacity→0, `transform 0.25s cubic-bezier(0.76,0,0.24,1), opacity 0.15s ease`.
- Swap text, jump (no transition) to `translateY(-30%)` opacity 0, then animate to `translateY(0)` opacity 1 (`0.25s` same bezier, opacity `0.2s ease`).
- Parent: `display:inline-block; overflow:hidden; vertical-align:middle`.
- Heading is `Don't process.` + cycling word (starts "Convert.").

### Hero background
- `.bg-background-wrapper.hero`: absolute, black, height 967px; contains 2 absolute images (`.position-absolute-left.max-width-448`, `.position-absolute-top-right`), a `.background-marqee` (4420px tall, slow `marqueeMove` keyframes diagonal drift) and `.overaly` gradient overlay.
- `@keyframes marqueeMove { 0% { transform: translate(0,0) } 100% { transform: translate(X,Y) } }` — see custom-styles.css.

### Hero tabs (checkout demo) — INTERACTION MODEL: click + time-driven auto-advance
- 5 tabs: Embedded checkout, Routing, Automation, Reconciliation, Operational visibility. Each has an icon + label.
- Tab content = **Lottie canvas animation** per tab (`.lottie-trigger[data-tab-index][data-path]`), renderer canvas, no loop; freezes on last frame on complete.
- Local lottie files (public/lottie/): homepage-embedded-checkout-animation.json, homepage-routing-animation.json, homepage-automation-animation.json, 2nd-lottie.json (reconciliation), homepage-operational-visibility-animation.json.
- Auto-advance: after current Lottie's duration (totalFrames/frameRate*1000, fallback 20000ms) → next tab.
- Progress: `.tab-progress-bar` inside active tab, absolute full-height from left, background #2F2F2F, width 0→100% synced to elapsed/duration via rAF.
- Tab styles: bg #000 !important; hover #2F2F2F; current `rgba(47,47,47,0.7)`; `transition: background-color 0.2s ease`.
- Mobile (≤991px): tab menu horizontally scrollable (scrollbar hidden), swipe gestures switch tabs, active tab scrolled into view.
- Inactive panes stay rendered (`display:block; visibility:hidden; position:absolute; opacity:0`).

## Section: Logo marquee
- "Trusted by industry leaders in 32+ countries" + horizontally scrolling logo strip (CSS `marqueeMove` translate loop). Logos: PayPal, Stripe, Paysafe, capital.com, ExpressVPN, G Pay, etc. (duplicated for seamless loop). `.marque-css-item-logo { overflow: clip }`.

## Section: get-back ("Every failed payment is lost revenue.") — INTERACTION MODEL: click + time-driven auto-cycle
- 4 accordion items (`.tabs-accordion`): Route, Recover, Convert, Protect; 4 matching images (`.tab-image-right`) each with an SVG-renderer looping Lottie (`.lottie-tab-trigger[data-path]`): 1-route-animation.json, 2-recover-animation.json, 3-convert-animation.json, 4-protect-animation.json.
- Auto-advance every **5850ms** (desktop only progress bar `.line-progress` width 0→100% with double-easeInOut `-(cos(πt)-1)/2` applied twice).
- Accordion body `<p>`: `height: 0; opacity: 0; overflow: hidden` → expands to scrollHeight; `transition: height 0.5s ease, opacity 0.5s ease`; after 520ms set height:auto.
- Active item gets `.is-active`. Click any item to activate; click on right image wrapper advances to next.
- Images crossfade via `.is-active` class (CSS opacity transition); Lottie of active tab plays (loop), others reset to frame 0.
- IntersectionObserver on `.tabs-wrapper`, threshold 0.3 — pauses cycle + lotties out of view.
- First item expanded on load.

## Section: scale ("Scale proven at volume")
- Stat numbers use slot-machine counters (`data-anim="count-span"`): 99.999%, 3x, 98%, $ billions.
- Runner photo card has parallax image. Pattern decorations (dots) as images.

## Section: section-track (Payments/Optimisation/Protection/Treasury) — INTERACTION MODEL: SCROLL-DRIVEN (desktop), click (mobile)
- Structure: `.section-track` height 2250px, black bg; child `section.section.scroll` is `position: sticky; top: 0; height: 900px` (100vh).
- GSAP + ScrollTrigger logic (verbatim in custom-scripts.js):
  - 4 panels: `[data-headline="1..4"]`, `[data-text="1..4"]`, `[data-image="1..4"]`.
  - `scrollable = track.offsetHeight - window.innerHeight`; tab switch offsets at 0, 1/4, 2/4, 3/4 of scrollable.
  - On scroll: compute active index; headings opacity 0.3 (inactive) ↔ 1 (active), `0.3s power2.out`.
  - Texts: fade out 0.25s then `display:none`; new text `display:flex`, fade in 0.3s.
  - Images stacked absolute (z-index i+1), revealed by clip-path: inactive `inset(0% 0% 100% 0%)`, active `inset(0% 0% 0% 0%)`; animate 0.9s. Scrolling down reveals new image top-down over previous; scrolling up peels current away.
  - Each image has an SVG Lottie (no loop): 1-payments-animation.json, 2-optimization-animation.json, 3-protection-animation.json, 4-treasury-animation.json — plays when its panel becomes active.
  - Clicking a heading jumps scroll position to that panel's offset (instant).
  - Mobile (<992px): no scroll logic; headings clickable only.
- Headlines: Payments, Optimisation, Protection, Treasury. Each panel has paragraph + "Explore X" button.

## Section: case-studies
- Static layout. ExpressVPN card + 11% / $55M+ stat cards + photo. Hover states on "Read Full Story" button (char stagger).

## Section: top-companies — INTERACTION MODEL: time-driven vertical rotator
- Left: "Top companies use Pay.com for:" + Pay logo card on right (`.top-companies-right` with img).
- Right: `.right-rotate-wrapper` > `.right-companies-wrapper` with 7 `[data-anim="text-rotate"]` industry items: iGaming & Sports Betting, eCommerce & Retail, Digital Media & Streaming, SaaS & Software Platforms, Travel & Hospitality, Crypto & Digital Assets, WealthTech & Investment Platforms.
- Rotator: PAUSE 1200ms, ANIM 400ms `cubic-bezier(0.4,0,0.2,1)`; track translateY moves so the active item is vertically centered against the logo; active item gets `.is-active` (full opacity; others dimmed via CSS). After 7 steps, resets instantly to start (list is duplicated in DOM for seamless wrap).

## Section: ROI calculator — INTERACTION MODEL: form + modal
- Left: black panel with giant Pay logo image, "See the revenue you're leaving behind" + paragraph.
- Right: card with: currency selector (USD/GBP/EUR — inline SVG flags stored in `window._roiFlags`, dropdown toggling display flex/none, chevron rotate 180deg), two inputs (annual turnover, prefilled "10,000,000"; AOV prefilled "5,000"), live thousands-separator formatting, error states (`.error` class + visible error message) when empty.
- Calculate button: shows `Calculating <spinner>` for 1600ms then opens modal.
- Modal (`#roiModalOverlay`, display flex, body overflow hidden):
  - Total Revenue Uplift = 5% of turnover: Partial Approval 1% + Smart Routing 3% + Cascading 1%.
  - Amount animates via digit slot-machine (delay 100+i*80ms, duration 1200+i*80ms).
  - Chart bars heights [13,19,28,40,53,66,78]px animate height 0→h, `cubic-bezier(0.34,1.56,0.64,1)` (overshoot), staggered 60ms.
  - Breakdown rows with trend SVG badge + per-row amounts; 3 info checkmark lines; "Book a Demo" button.
  - Close: X button, overlay click, Escape.
- ESC/system: closes modal, restores body scroll.

## Section: platform (One platform...) — Swiper carousel
- Swiper 11, `#swiper-1`: slidesPerView 1.15/mobile, 3/desktop(992+), freeMode on ≥768, spaceBetween 16/24/32 (0/992/1500), speed 800.
- Counter `#swiper-counter-1` format "03/06" (visibleEnd/total, leading zeros).
- Custom dots: count = total - visible + 1, click → slideTo; active class `is-active`.
- Prev/next buttons `#btn-prev/#btn-next` fade in only while hovering `.slider-component`; hidden at ends.
- Scrollbar `#scrollbar-1` (drag bg black). Slide images have the -8% parallax.
- 6 slides, each: blue gradient image top + label pill (For CFOs, For Head of Payments, For Engineering Teams, ...), heading, paragraph.

## Section: FAQ — click accordion
- `.faq-item` / `.faq-item---first`; click toggles; only one open at a time; first item auto-opened on load (programmatic `.click()`).
- `.faq-paragraph-wrapper`: `display:grid; grid-template-rows: 0fr→1fr` transition (see custom-styles.css `.faq-paragraph-wrapper.is-active`).
- Every 2nd `.faq-item-wrapper` has no border (nth-child rule).
- +/x icon rotates when open.

## Section: insights
- 3 blog cards. Hover: `.insights-image` scale 1.025 (`transform 0.4s ease` implied by CSS), title underline/color shift per CSS.

## Section: CTA (secondary)
- Black section, big bordered "Book a Demo" button with logo icon; `.cta-bg-wrapper` (background image, absolute, opacity 0) fades to 1 on button hover.
- `--btn-width` CSS var set to button offsetWidth (used by CSS slide animation).
- `@media (min-width:1500px) .section.cta-secondary { min-height: ... }`.

## Section: Footer
- Black. Logo + "Built to approve. Designed to convert." + Get in Touch button; link columns: PRODUCTS / COMPANY / DEVELOPERS / RESOURCES / PRICING / LEGAL; "Follow us on: LinkedIn"; copyright with dynamic year + Regulatory Information expandable text; bottom blue zig-zag visual strip image.
- Desktop: `.footer-link { opacity: 1; transition }` hover dims (see custom-styles.css).

## Responsive breakpoints (site-wide)
- Webflow defaults: 991px (tablet), 767px (mobile-landscape), 478px (mobile).
- Custom JS uses **992px** as the desktop threshold everywhere (`isMobile = width < 992`).
- ≥1500px: larger section paddings/min-heights; ≥2900px: html font-size scales (fluid).
