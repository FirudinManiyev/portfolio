# ProfileCard Replacement Design

## Goal

Replace the Home hero's WebGL Lanyard with a portfolio-styled React Bits ProfileCard that uses `src/assets/firudinmaniyev.jpeg`, remains responsive and accessible, and renders consistently in local Vite builds and on Vercel.

## Scope

- Keep the current Home hero copy, hierarchy, spacing intent, and black/yellow visual language.
- Replace only the right-side Lanyard presentation with the new ProfileCard.
- Show the ProfileCard on mobile, tablet, and desktop.
- Route the card's contact action to `/contact` through React Router.
- Remove Lanyard-only code, assets, tests, dependencies, and CSP permissions after confirming they have no other consumers.
- Update portfolio project metadata so it no longer advertises removed Three.js technologies.

## Component Architecture

Create `src/components/ProfileCard.tsx` as a typed, reusable component. It accepts the profile image, name, title, handle, status, contact label, contact destination, glow options, and tilt flags. It owns pointer tracking and its presentational layers, while route data stays with the Home page.

The component is adapted from the supplied React Bits source instead of copied unchanged. Its visual result remains a holographic profile card, but its implementation follows the repository conventions: TypeScript without `any`, Tailwind utilities for layout and appearance, no document-level style injection, and no dependency on WebGL or Three.js.

The Home page imports the image through Vite and renders:

- name: `Firudin Maniyev`
- title: `Full-stack Developer`
- handle: `firudincoder`
- status: `Əlaqə üçün açıq`
- contact label: `Əlaqə saxla`
- destination: `/contact`

No separate icon-pattern image is required. The holographic texture is created with lightweight CSS gradients, preventing a missing production asset from producing a local/deploy mismatch.

## Visual and Responsive Behaviour

The card uses the site's neutral black surface, yellow/amber accents, restrained border glow, and soft entrance animation. It is centered within the hero's right column and capped to a portrait-card width so it does not compete with the headline.

- Mobile: the card appears below the hero copy at a compact width; pointer/device tilt is disabled.
- Tablet: the two-column hero layout remains intact where space permits; the card scales within its column.
- Desktop: pointer tilt, moving highlight, and subtle glow are enabled.
- Reduced motion: tilt and decorative motion are disabled when `prefers-reduced-motion: reduce` is active.
- The photo uses `object-cover`, a stable aspect ratio, meaningful alt text, and the same imported URL in both main and mini-avatar positions.

The contact control is a semantic React Router link with visible focus styling. Decorative layers ignore pointer events and assistive technology.

## Cleanup and Security

After ProfileCard is integrated, remove:

- `src/components/Lanyard.tsx`
- `src/components/LanyardErrorBoundary.tsx`
- `src/tests/LanyardErrorBoundary.test.tsx`
- `src/assets/lanyard/card.glb`
- `src/assets/lanyard/lanyard.png`
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/rapier`
- `meshline`
- `three`
- `@types/three`

Remove `'wasm-unsafe-eval'` from Vercel's `script-src` because no WebAssembly runtime will remain. Retain all other security directives. Update the CSP regression test to require `script-src 'self'` without either `'unsafe-eval'` or `'wasm-unsafe-eval'`.

Remove Three.js-related technology labels from the portfolio entry in `src/data/projects.ts`. Do not remove technology names belonging to unrelated historical projects.

## Error Handling and Deployment Consistency

The photo is bundled through a static TypeScript import, so Vite fingerprints it in production. The image reserves its layout before loading and retains accessible fallback text if decoding fails. The ProfileCard contains no lazy WebAssembly initialization, physics engine, canvas context, device-orientation permission request, or environment-dependent asset URL.

The Vercel rewrite continues serving `index.html` for client routes. The `/contact` action uses React Router, so local preview and Vercel navigation follow the same path.

## Testing and Acceptance Criteria

Add focused component tests proving that:

- the profile image has descriptive alt text;
- the name, title, handle, and status render;
- the contact control links to `/contact`;
- the component exposes a stable responsive wrapper and does not require Three.js.

Update deployment security tests to prove broad eval and WASM eval are absent. Add a repository regression assertion that Lanyard runtime packages are absent from production dependencies.

Before completion, run:

- `npm test`
- `npm run lint`
- `npm run build`
- `npm audit --omit=dev`
- `git diff --check`
- production preview smoke checks for `/`, `/contact`, and `/projects/supertraders/`

The change is accepted when all checks pass, the production bundle contains no Lanyard/Three.js chunk, the Home route renders the new card at all responsive breakpoints, and local preview routes return successful responses.
