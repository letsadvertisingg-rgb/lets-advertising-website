# HeroSection Specification

## Overview
- **Target files:** `src/components/HeroSection.tsx` + `src/components/HeroTabs.tsx`
- **Sources:** `docs/research/sections/hero.html`, `docs/research/sections/hero.css`, screenshot `docs/design-references/section-hero.png`
- **Interaction model:** time-driven word cycle (2.8s) + click/auto-advancing Lottie tabs

## Structure (from fragment)
- `section.hero`: white section, but with absolute `.bg-background-wrapper.hero` (black, height ~967px desktop) behind content. Background wrapper contains:
  - `<img>` absolute bottom-left (`.position-absolute-left.max-width-448`) — map via manifest (bottom-left-shape.svg or webp).
  - `<img>` absolute top-right (`.position-absolute-top-right`) — top-right-shape.svg.
  - `.background-marqee` — a huge tiled pattern layer (4420px tall) drifting diagonally via global `marqueeMove` 40s animation. Check fragment for its inner content (repeated image tiles).
  - `.overaly` — gradient overlay div (CSS in section css).
- `.container.home` content column (centered, white text):
  - H1: `Don't process.` + `<span class="span-animated">Convert.</span>` (the cycling word). Font: `var(--typography--h1)` weight per CSS, white, centered, two lines.
  - Paragraph: "The payment orchestration and acquiring platform engineered for acceptance. Higher approval rates, lower fees, and a checkout experience that seals the deal." (verify verbatim from fragment)
  - Buttons row: "Book a Demo" (white pill, href /book-a-demo) + "Get Started" (dark/outline pill) — StaggerButton.
- Second column (`.column.margin-top-5xl`): the tabs demo (HeroTabs).

## HeroTabs (CRITICAL — replicate mechanics exactly)
- 5 tabs in `.hero-tabs-menu` (global CSS handles link/current/hover backgrounds + progress bar):
  1. Embedded checkout — icon `EmbeddedCheckoutIcon`, lottie `/lottie/homepage-embedded-checkout-animation.json`
  2. Routing — `RoutingIcon`, `/lottie/homepage-routing-animation.json`
  3. Automation — `AutomationIcon`, `/lottie/homepage-automation-animation.json`
  4. Reconciliation — `ReconciliationIcon`, `/lottie/2nd-lottie.json`
  5. Operational visibility — `OperationalVisibilityIcon`, `/lottie/homepage-operational-visibility-animation.json`
- Tab pill row: dark pills (bg #000, current rgba(47,47,47,0.7), hover #2F2F2F), white text + 20px icon, gap per CSS. Use classes `hero-tabs-menu`, `w-tab-link`, `w--current` so global CSS applies; add `.tab-progress-bar` div inside each tab.
- Content pane below: white rounded card area (`.w-tab-pane` + inner `.tab-image` container, radius per CSS) hosting the Lottie (renderer **canvas**, `loop:false`, freeze on last frame via `goToAndStop(totalFrames-1)` on complete).
- Auto-advance: when active Lottie completes its duration (`(totalFrames/frameRate)*1000`, fallback 20000ms) advance to next tab `(i+1)%5`.
- Progress: `.tab-progress-bar` width 0→100% over the same duration via requestAnimationFrame (it's the tab's background fill, behind label).
- Click a tab: switch immediately, restart its lottie from frame 0, reset progress.
- Mobile ≤991px: menu scrolls horizontally (global CSS), active tab scrolled into view, swipe left/right switches tab.
- Panes keep all 5 lotties mounted; inactive panes hidden via `.w-tab-pane` global CSS (`w--tab-active` class on active).

## States
- Word cycle (HeroSection, `.span-animated`): words `['Convert.', 'Orchestrate.', 'Route.', 'Recover.']`, every 2800ms: out = translateY(60%) + opacity 0 over `transform 0.25s cubic-bezier(0.76,0,0.24,1), opacity 0.15s ease`; after 250ms swap text, jump to translateY(-30%) (no transition), then animate to translateY(0)/opacity 1 (`0.25s` same bezier, opacity `0.2s ease`). Parent span: inline-block, overflow hidden, vertical-align middle.

## Responsive
- ≤991px: H1 `var(--typography--h1-tablet)`; buttons stack per CSS; tab labels nowrap with horizontal scroll.

## Acceptance
- Black hero with drifting diagonal pattern, cycling headline word, two buttons, working auto-advancing lottie tabs with background-fill progress.
