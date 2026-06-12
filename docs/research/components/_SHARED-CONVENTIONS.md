# Shared builder conventions (pay.com clone)

These apply to every section component.

## Sources of truth (in priority order)
1. `docs/research/sections/<name>.html` — VERBATIM DOM fragment from the live site. Preserve structure, text, and class semantics. All text content must be copied character-for-character from here.
2. `docs/research/sections/<name>.css` — the exact Webflow CSS rules for every class in the fragment (rem-based, includes media queries). Use these values verbatim.
3. `docs/design-references/section-<name>.png` — desktop 1440px screenshot crop.
4. `docs/research/BEHAVIORS.md` — exact interaction mechanics (the relevant excerpt is inlined in your prompt).

## Tech rules
- Next.js 16 App Router, React 19, TypeScript strict, NO `any`.
- Add `"use client"` only when the component needs state/effects.
- Styling: Tailwind v4 utility classes using arbitrary values that reference the original CSS variables, e.g. `text-[length:var(--typography--h2)]`, `p-[var(--size--xl)]`, `rounded-[var(--radius--radius-m)]`, `bg-[var(--neutral--neutral-black-400)]`. ALL original Webflow CSS variables (`--typography--*`, `--size--*`, `--radius--*`, `--neutral--*`, `--brand--*`, `--system--*`, `--color--*`, `--container--*`) are defined in `src/app/globals.css` with their original names. Use them instead of hardcoding values so fluid root-font scaling works.
- Keep rem-based values as rem (html font-size is fluid; px would break scaling).
- Where a stateful pattern already has global CSS in `src/app/globals.css` (`.tabs-accordion`, `.faq-paragraph-wrapper`, `.hero-tabs-menu .w-tab-link`, `.tab-progress-bar`, `.w-tab-pane`, `.btn-animate-chars`, `.text-animated-hover`, `[data-anim="text-rotate"]`, `.cta-button`, `.footer-link`, `.insights-post`, `.roi-*`, `.currency-*`, `.input-wrap`, `.calc-btn`, `.background-marqee`, `[data-anim="paralax"]`) — use those EXACT class names in your JSX; do not re-implement.
- Container pattern: `w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto`.
- Section pattern: `flex flex-col items-center pt-[var(--size--8xl)] pb-[var(--size--8xl)]` (check your section's CSS for overrides).
- Shared components: `StaggerButton` / `StaggerText` from `@/components/StaggerButton` (char-roll buttons); icons from `@/components/icons`.
- Buttons in the original use this structure — replicate via StaggerButton:
  `<a class="btn-animate-chars ..."><div class="btn-animate-chars__bg ..."></div><span data-button-animate-chars>...chars...</span></a>`
  Typical primary (white) button CSS: bg white, color black, radius `var(--radius--radius-circle)`, padding `0.75rem 1.5rem`, font-size `var(--typography--button-text-m)`, weight 500. Check your fragment's button classes in the section CSS for the exact variant.
- Images: use plain `<img>` tags (the original does). Map every CDN URL to its local file using `docs/research/asset-manifest.json` (CDN → `/images/...`, `/lottie/...`). NEVER reference cdn.prod.website-files.com at runtime.
- Lottie: `lottie-web` is installed. Pattern:
  ```tsx
  "use client";
  import lottie, { AnimationItem } from "lottie-web";
  // in useEffect: const anim = lottie.loadAnimation({ container, renderer: "svg", loop, autoplay, path: "/lottie/<file>.json" }); return () => anim.destroy();
  ```
- Swiper 11 is installed (`swiper`, `swiper/react` or core API).
- Webflow breakpoints: desktop ≥992px, tablet 768–991, mobile-landscape 479–767, mobile <479. Tailwind: use `max-lg:` (≤991 ≈ lg=1024 — instead use arbitrary `min-[992px]:` and `max-[991px]:` variants for exactness), `max-[767px]:`, `max-[478px]:`.
- Mobile-first is NOT required here — match the original media-query structure (`max-[991px]:` overrides) for fidelity.

## Definition of done
- Component renders standalone (export named component, no required props unless the spec says so).
- `npx tsc --noEmit` passes.
- All text verbatim; all assets local; all hover/timing values exactly as specified.
- Commit your work in your worktree with a descriptive message.
