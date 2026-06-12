# InsightsSection Specification

## Overview
- **Target file:** `src/components/InsightsSection.tsx`
- **Sources:** `docs/research/sections/insights.html`, `docs/research/sections/insights.css`, screenshots `docs/design-references/section-insights.png`, `topo-05.png`/`topo-06.png`
- **Interaction model:** hover (image zoom 1.025)

## Structure
- Header row: "Latest insights" (H2, left) + StaggerButton "View All Resources" (right, outline pill, href from fragment).
- 3 post cards (`.insights-post`, copy verbatim from fragment):
  1. Image group-2147259501/2/3 or per fragment → title "Best API for Payments" — meta: News • Industry • February 27, 2023
  2. "4 Payment Methods Most Widely Accepted in the US in 2026" — News • Industry • December 14, 2022
  3. "The Best Fraud Management Solution for Global Commerce" — News • Industry • March 20, 2023
  (Verify titles/dates/categories + hrefs + images via fragment & manifest.)
- Card: rounded image wrapper (overflow hidden; img `.insights-image` — global CSS handles hover scale), meta row (category link blue, dot separators, date), title (H5/H6 scale).

## Acceptance
- 3-card grid matching screenshot; image zooms subtly on card hover; verbatim titles/dates.
