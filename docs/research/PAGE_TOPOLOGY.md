# pay.com — Page Topology (desktop 1440px, total height ~13,329px)

Source of truth: `docs/research/topology-raw.json`, full-page screenshot `docs/design-references/pay-desktop-1440-full.png` (sliced as `topo-00..07.png`), raw HTML `docs/research/pay-home.html`.

| # | Section | Selector (orig) | Top | Height | Interaction model | Clone component |
|---|---------|-----------------|-----|--------|-------------------|-----------------|
| 0 | Navbar | `.navigation` | 0 | 93 (fixed) | hover dropdowns, char-stagger links | `Navbar.tsx` |
| 1 | Hero + tabs demo | `section.hero` | 0 | 1382 | time (word cycle 2.8s; tab auto-advance via Lottie) + click | `HeroSection.tsx`, `HeroTabs.tsx` |
| 2 | Logo marquee | `section.marquee` | 1382 | 204 | CSS marquee loop | `LogoMarquee.tsx` |
| 3 | Get-back accordion | `section.get-back` | 1586 | 1418 | click + auto-cycle 5850ms | `GetBackSection.tsx` (heading+accordion), `StatCards.tsx` (3 bottom cards) |
| 4 | Scale stats | `section.scale` | 3004 | 955 | viewport-entry counters | `ScaleSection.tsx` |
| 5 | Sticky scroll features | `.section-track > section.scroll` | 3959 | 2250 (sticky 900) | SCROLL-DRIVEN (GSAP-style offsets), click headings | `StickyFeatures.tsx` |
| 6 | Case studies | `section.case-studies` | 6209 | 957 | static + hover | `CaseStudies.tsx` |
| 7 | Top companies rotator | `section.top-comapnies` | 7166 | 900 | time-driven vertical rotator | `TopCompanies.tsx` |
| 8 | ROI calculator | `section.roi` | 8066 | 940 | form + modal | `RoiCalculator.tsx`, `RoiModal.tsx` |
| 9 | Platform carousel | `section.platform` | 9007 | 1044 | Swiper drag/dots/arrows | `PlatformCarousel.tsx` |
| 10 | FAQ | `section.faq` | 10050 | 977 | click accordion (first open) | `FaqSection.tsx` |
| 11 | Latest insights | `section.insigts` | 11027 | 671 | hover | `InsightsSection.tsx` |
| 12 | CTA secondary | `section.cta` | 11698 | 900 | hover bg reveal | `CtaSection.tsx` |
| 13 | Footer | `footer.footer-section` | 12598 | 731 | hover | `Footer.tsx` |
| — | ROI modal overlay | `#roiModalOverlay` | fixed | — | modal | part of `RoiModal.tsx` |

## Page-level layout
- Single flow column; `main.main-wrapper` wraps sections 1–12; footer outside main.
- Nav is `position: fixed` overlaying hero (hero has black bg behind it).
- Section 5 is the only scroll-jacked region: outer track 2250px tall, inner section sticky at top for 100vh.
- White background default; dark sections: hero bg (top 967px), section-track (black), roi (black), cta (black), footer (black).
- No smooth-scroll library; native scrolling.
- z-layers: nav (fixed, top), roi modal overlay (fixed, above all), content flow.

## Clone stack mapping
- Next.js 16 App Router; all sections client components where interactive ("use client").
- Lottie: `lottie-web` (same lib the site uses), files in `public/lottie/`.
- Carousel: `swiper` (same lib).
- Scroll-driven section: native scroll listener replicating the offsets logic (no GSAP needed — the logic is simple enough; transitions via CSS/inline styles like original).
- Fonts: self-hosted Google Sans Flex woff2 in `public/fonts/` via `next/font/local`; Merriweather via `next/font/google` (used for serif italic accents).
