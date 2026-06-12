# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Sources:** `docs/research/sections/navbar.html`, `docs/research/sections/navbar.css`, screenshot `docs/design-references/topo-00.png` (top)
- **Interaction model:** hover dropdowns (desktop), click burger menu (mobile), char-stagger link hover

## Structure
- `position: fixed`, top 0, full-width, high z-index. Inner `.nav-container` centers a dark pill bar.
- Pill bar (`.nav-menu-wrapper.black-400`): background `var(--neutral--neutral-black-400)` (#171717), border-radius pill, margin-top ~15px, height 63px, contains:
  - Brand: Pay.com logo (`/images/logo.svg` — white wordmark w/ blue glyph) linking to `/`.
  - Center nav: 4 dropdowns — Products, Developers, Resources, Company — each `<div>label</div>` + chevron (`ChevronDownIcon` from `@/components/icons`, 10x6 viewBox).
  - Right: "Log In" (ghost/dark button) + "Get in Touch" (white pill button) — both char-stagger buttons.
- Dropdown panels open on hover (desktop ≥992px): dark panels (#171717) with link lists. Extract the exact dropdown items/labels/hrefs from the fragment (Products: Payments, Optimisation, Protection, Treasury, Pricing…; Developers: Documentation, API Reference, Connections; Resources: Blog Newsroom & Case studies, FAQ; Company: About Us, Careers, Brand assets — verify against fragment, copy verbatim).
- `.nav-bg-blur`: fixed full-screen rgba(0,0,0,0.5) backdrop layer; hidden by default; visible (opacity 1) while a dropdown or the mobile menu is open. Transition `opacity 0.3s ease`.

## States & behaviors
- Dropdown open: chevron rotates 180°, panel fades/slides in (Webflow default ~200ms). Implement with React state on mouseenter/mouseleave of the dropdown root.
- Nav links use `.text-animated-hover`/`.is-animated` char-roll on hover (global CSS) — split label into char spans with `transitionDelay: i*0.01s` (see StaggerText).
- Mobile (≤991px): nav collapses to brand + burger + Get in Touch. Burger opens full menu panel (accordion-style dropdown toggles). Menu open → body scroll lock + `.nav-bg-blur` visible.

## Assets
- `/images/logo.svg` (brand). Chevron: `ChevronDownIcon`.

## Responsive
- ≥992px: full menu row. ≤991px: burger menu; pill bar stays.

## Acceptance
- Fixed overlay over dark hero looks identical to screenshot top.
- Hover any of the 4 menus → dark dropdown with verbatim items; blur layer appears behind.
