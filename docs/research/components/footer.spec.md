# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Sources:** `docs/research/sections/footer.html`, `docs/research/sections/footer.css`, screenshot `docs/design-references/section-footer.png`
- **Interaction model:** link hover (group dim + blue highlight — global CSS `.footer-link`/`.footer-links-wrapper`)

## Structure
- `footer.footer-section`: black, white text; container grid:
  - Left column: Pay.com logo (`/images/logo.svg`), tagline "Built to approve. Designed to convert.", StaggerButton "Get in Touch" (white pill, href from fragment); bottom: "Follow us on:" + LinkedIn logo/link (img via manifest or fragment SVG).
  - Right: link columns with small grey uppercase headings (copy ALL verbatim from fragment):
    - PRODUCTS: Payments, Optimisation, Protection, Treasury
    - COMPANY: About Us, Careers, Brand assets
    - DEVELOPERS: Documentation, API Reference, Connections
    - RESOURCES: Blog, Newsroom & Case studies, FAQ
    - PRICING: Pricing
    - LEGAL: Privacy Policy, Terms & Conditions, Cookie Policy, Report a Complaint
  - Links use `.footer-link` class inside `.footer-links-wrapper` (global hover CSS) + `.text-animated-hover`/`.is-animated` char-roll if fragment shows it.
- Bottom: "Copyright © {currentYear} Pay.com - All rights reserved. Click here to access our **Regulatory Information.**" (underlined link; the fragment contains a hidden `.regulatory-inner-wrapper` with full regulatory text — include it; check CSS whether it expands on click/hover and replicate).
- Very bottom: `.visual-bottom > img` — full-width blue zig-zag strip (via manifest).

## Responsive
- Columns stack ≤767px per CSS.

## Acceptance
- Matches screenshot; hovering one link dims the others in its group and turns it blue; current year renders dynamically.
