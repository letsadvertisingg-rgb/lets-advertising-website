# FaqSection Specification

## Overview
- **Target file:** `src/components/FaqSection.tsx`
- **Sources:** `docs/research/sections/faq.html`, `docs/research/sections/faq.css`, screenshot `docs/design-references/section-faq.png`
- **Interaction model:** click accordion, one open at a time, first open on mount

## Structure
- Heading: "Frequently asked questions" (H2, centered, max-width column).
- 4 FAQ items (copy Q&A verbatim from fragment):
  1. "Does Pay.com support SMBs as well as enterprise merchants?"
  2. "How fast can I get started and go live?"
  3. "Does Pay.com act as the acquirer, or does it connect to third-party acquirers?"
  4. "What is Pay.com and how does it work?"
- Item structure: `.faq-item-wrapper` > `.faq-item` (first uses `.faq-item---first`) with question row (text + plus icon: two bars, `.faq-plus-vertical` is the vertical bar that rotates 90° when open — check fragment for the icon markup) and `.faq-paragraph-wrapper` > `.faq-paragraph` (answer).
- Global CSS already handles: grid-rows 0fr→1fr transition, padding-top, plus rotation, border rules (even items borderless, last bordered).
- Below: "Have more questions? Get all the answers." + StaggerButton "View all FAQs" (href from fragment).

## Behavior
- Click toggles: close any open, open clicked (unless it was open → all closed). Apply `.is-active` on wrapper + `.is-open` on item.
- First item open on mount (replicate the site's auto-click).

## Acceptance
- Smooth 0.35s grid-row expansion, rotating plus, single-open behavior, first open initially, verbatim Q&A.
