# GetBackSection Specification

## Overview
- **Target file:** `src/components/GetBackSection.tsx` (may split internals into `GetBackAccordion.tsx`, `GetBackStatCards.tsx`)
- **Sources:** `docs/research/sections/get-back.html`, `docs/research/sections/get-back.css`, screenshots `docs/design-references/section-get-back.png` (note: lower part of screenshot shows scroll-in states mid-animation; trust HTML/CSS), `topo-01.png`
- **Interaction model:** click + time-driven auto-cycle (5850ms per item)

## Structure
- Heading: "Every failed payment is lost revenue. We get it back." (H2, `var(--typography--h2)`; verify split/spans in fragment) + intro/right visual block (blue gradient image card on the right of heading — check fragment; image via manifest).
- Tabs area: left column of 4 `.tabs-accordion` items (Route, Recover, Convert, Protect) + right `.tabs-right-wrapper` with 4 stacked `.tab-image-right` blocks.
  - Each accordion item: `<h3>`/heading row (title), hidden `<p>` body, and a progress line: `.line-wrapper > .line-progress` (thin bar under item; check CSS).
  - Bodies (verbatim from fragment), e.g. Route: "Intelligent routing powered by a licensed acquirer – every transaction directed down the highest performing path, with no third party dependencies slowing you down." (copy all 4 from fragment)
  - Each `.tab-image-right`: background image (`.tab-image-background`, blue wave webp via manifest) + `.lottie-tab-trigger` with lottie (svg renderer, loop true, autoplay false):
    1. Route → `/lottie/1-route-animation.json`
    2. Recover → `/lottie/2-recover-animation.json`
    3. Convert → `/lottie/3-convert-animation.json`
    4. Protect → `/lottie/4-protect-animation.json`
- Global CSS already handles: `.tabs-accordion` base/active, `p` collapse, `.tab-image-right` fade, lottie fade. Use those class names.

## Behavior (exact, from site JS)
- DURATION = 5850ms. Desktop: active item shows `.line-progress` width 0→100% with double ease-in-out `t→ -(cos(π·(-(cos(πt)-1)/2))-1)/2` via rAF; at 100% → activateTab((current+1)%4).
- activateTab: collapse old `<p>` (height: scrollHeight→0, opacity→0, `height 0.5s ease, opacity 0.5s ease`), expand new `<p>` (0→scrollHeight, then height:auto after 520ms), switch `.is-active` on accordion + image, play new lottie from frame 0 (`goToAndPlay(0)`), stop old (`goToAndStop(0)`).
- Click an inactive item → activateTab(i). Click right image area → next tab.
- IntersectionObserver (threshold 0.3) on the tabs wrapper: out of view → pause rAF + lotties + reset progress; in view → resume.
- Mobile <992px: no progress bar; click-only switching; image still switches.
- First item active on load (p expanded, lottie plays when in view).

## Stat cards row (below tabs; 3 cards, light grey bg `var(--neutral--neutral-grey-100)` or per CSS, radius per CSS)
1. "Most orchestration platforms route your payments – then stop there. Pay.com goes further." + dark card with big "Pay" logo visual (image via manifest).
2. "With **intelligent routing** built into the same platform, we automatically direct each transaction down the highest-performing path and silently recover failures in real time." + bar-chart image (blue bars).
3. "As a **licensed acquirer** and principal member, we control the full stack. That means no external dependencies, no silent failures, and no one else's limitations becoming yours." + `100% of revenue retained` w/ mint progress bar (check fragment — likely styled divs + count-span).
(Copy text verbatim from fragment; bold spans per fragment markup.)

## Responsive
- ≤991px: accordion stacks above image; cards stack vertically.

## Acceptance
- Auto-cycling accordion with animated expand/collapse + line progress + lottie crossfade; verbatim copy; 3 stat cards match screenshot.
