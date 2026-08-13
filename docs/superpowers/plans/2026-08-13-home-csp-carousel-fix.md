# Home CSP and Carousel Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the deployed Home page by allowing only WebAssembly compilation required by Rapier, isolate future Lanyard failures, and move carousel arrows beside the cards while removing manual pause controls.

**Architecture:** Keep the existing Vercel security-header model and extend only `script-src` with the narrow `'wasm-unsafe-eval'` source. Wrap the lazy Lanyard subtree in a focused React error boundary. Simplify carousel state so autoplay only pauses during hover/focus, while `CarouselControls` renders side arrows and a separate indicator row.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, Vitest, Testing Library, Vercel configuration.

## Global Constraints

- Preserve Lanyard and the current Home layout.
- Never add the broad CSP source `'unsafe-eval'`.
- Keep autoplay and hover/focus pause behavior.
- Remove pause/play controls from both Home sliders.
- Desktop/tablet arrows sit outside the card row; mobile arrows partially overlay the card edges without horizontal page overflow.
- Preserve all unrelated user changes.

---

### Task 1: Add the regression-test harness and reproduce the failures

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `src/tests/deploymentSecurity.test.ts`
- Create: `src/tests/CarouselControls.test.tsx`
- Create: `src/tests/LanyardErrorBoundary.test.tsx`

**Interfaces:**
- Consumes: current `vercel.json` and `CarouselControls` API.
- Produces: `npm test` command and three regression suites.

- [ ] **Step 1: Install test-only dependencies**

Run:

```powershell
npm install --save-dev vitest @testing-library/react jsdom
```

- [ ] **Step 2: Add the test command**

Add to `package.json` scripts:

```json
"test": "vitest run"
```

- [ ] **Step 3: Write the failing CSP regression test**

```ts
import { describe, expect, it } from 'vitest'
import vercelConfig from '../../vercel.json'

describe('Vercel Content Security Policy', () => {
  it('allows WebAssembly compilation without enabling JavaScript eval', () => {
    const policy = vercelConfig.headers[0].headers.find(
      (header) => header.key === 'Content-Security-Policy',
    )?.value ?? ''
    const scriptSources = policy.match(/script-src ([^;]+)/)?.[1].split(/\s+/) ?? []

    expect(scriptSources).toContain("'wasm-unsafe-eval'")
    expect(scriptSources).not.toContain("'unsafe-eval'")
  })
})
```

- [ ] **Step 4: Write the failing carousel regression test**

```tsx
// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CarouselControls from '../components/CarouselControls'

describe('CarouselControls', () => {
  it('shows side navigation and no manual autoplay control', () => {
    render(
      <CarouselControls
        activeIndex={0}
        ariaLabel="Layihə slideri"
        pages={[0, 1, 2]}
        onNext={vi.fn()}
        onPrevious={vi.fn()}
        onSelect={vi.fn()}
      />,
    )

    expect(screen.getByRole('button', { name: 'Əvvəlki slayd' })).not.toBeNull()
    expect(screen.getByRole('button', { name: 'Növbəti slayd' })).not.toBeNull()
    expect(screen.queryByRole('button', { name: /avtomatik keçid/i })).toBeNull()
    expect(screen.getByTestId('carousel-side-controls').className).toContain('absolute')
  })
})
```

- [ ] **Step 5: Write the failing Lanyard isolation test**

```tsx
// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import LanyardErrorBoundary from '../components/LanyardErrorBoundary'

function BrokenLanyard() {
  throw new Error('WebAssembly compile failed')
}

describe('LanyardErrorBoundary', () => {
  it('contains a Lanyard failure and renders a local fallback', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined)
    render(
      <LanyardErrorBoundary>
        <BrokenLanyard />
      </LanyardErrorBoundary>,
    )

    expect(screen.getByText('3D kart hazırda göstərilə bilmir.')).not.toBeNull()
  })
})
```

- [ ] **Step 6: Run tests and verify RED**

Run:

```powershell
npm test
```

Expected: CSP suite fails because `'wasm-unsafe-eval'` is absent; carousel suite fails because pause/play props and control still exist; Lanyard suite fails because `LanyardErrorBoundary` does not exist.

---

### Task 2: Fix the deploy CSP and isolate Lanyard failures

**Files:**
- Modify: `vercel.json`
- Create: `src/components/LanyardErrorBoundary.tsx`
- Modify: `src/pages/Home.tsx`
- Test: `src/tests/deploymentSecurity.test.ts`
- Test: `src/tests/LanyardErrorBoundary.test.tsx`

**Interfaces:**
- Consumes: React `ReactNode` children and current lazy `Lanyard` import.
- Produces: `LanyardErrorBoundary({ children }: { children: ReactNode })` and a CSP that permits Rapier WASM compilation only.

- [ ] **Step 1: Add the narrow CSP source**

Change the `script-src` directive to:

```text
script-src 'self' 'wasm-unsafe-eval'
```

- [ ] **Step 2: Implement the error boundary**

```tsx
import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { Box } from 'lucide-react'

interface Props { children: ReactNode }
interface State { hasError: boolean }

class LanyardErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error('Lanyard render failed', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="status" className="flex h-full items-center justify-center">
          <div className="flex max-w-xs flex-col items-center gap-3 text-center text-neutral-400">
            <Box className="h-10 w-10 text-yellow-300/70" />
            <p className="text-sm">3D kart hazırda göstərilə bilmir.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default LanyardErrorBoundary
```

- [ ] **Step 3: Wrap only the lazy Lanyard subtree**

In `Home.tsx`, import `LanyardErrorBoundary` and place it around the existing `Suspense` so a 3D error cannot unmount the Home route.

- [ ] **Step 4: Run focused tests and verify GREEN**

Run:

```powershell
npx vitest run src/tests/deploymentSecurity.test.ts src/tests/LanyardErrorBoundary.test.tsx
```

Expected: both suites pass.

- [ ] **Step 5: Commit the deploy fix**

```powershell
git add vercel.json src/components/LanyardErrorBoundary.tsx src/pages/Home.tsx src/tests package.json package-lock.json
git commit -m "fix: restore home page under strict CSP"
```

---

### Task 3: Move carousel arrows beside cards and remove pause controls

**Files:**
- Modify: `src/components/CarouselControls.tsx`
- Modify: `src/components/HomeProjectsSection.tsx`
- Modify: `src/components/HomeCertificatesSection.tsx`
- Modify: `src/hooks/useCarousel.ts`
- Test: `src/tests/CarouselControls.test.tsx`

**Interfaces:**
- Consumes: `activeIndex`, `ariaLabel`, `pages`, `onNext`, `onPrevious`, `onSelect`.
- Produces: side-arrow overlay and indicator controls without `isPaused`, `onPause`, or `onPlay` props.

- [ ] **Step 1: Simplify `CarouselControlsProps`**

Use this interface:

```ts
interface CarouselControlsProps {
  activeIndex: number
  ariaLabel: string
  pages: number[]
  onNext: () => void
  onPrevious: () => void
  onSelect: (index: number) => void
}
```

- [ ] **Step 2: Render side arrows and centered indicators**

The arrow wrapper must use:

```text
pointer-events-none absolute inset-y-0 -left-3 -right-3 z-20 flex items-center justify-between sm:-left-5 sm:-right-5 lg:-left-6 lg:-right-6
```

Each arrow button restores pointer events and uses a translucent black/yellow style. Indicator buttons remain in a `mt-6 flex justify-center` row.

- [ ] **Step 3: Remove manual pause state from the hook**

Delete `isManuallyPaused`, `pause`, and `resume`. Keep `isInteractionPaused`, `pauseInteraction`, and `resumeInteraction`, and gate autoplay only on interaction pause, reduced motion, or no extra slides.

- [ ] **Step 4: Update both Home sections**

Remove manual pause destructuring and props. Wrap each carousel track and `CarouselControls` in `className="relative"` so absolute side arrows are anchored to the slider viewport.

- [ ] **Step 5: Run focused test and verify GREEN**

Run:

```powershell
npx vitest run src/tests/CarouselControls.test.tsx
```

Expected: one passing suite; no autoplay control exists and side navigation remains accessible.

- [ ] **Step 6: Commit the slider update**

```powershell
git add src/components/CarouselControls.tsx src/components/HomeProjectsSection.tsx src/components/HomeCertificatesSection.tsx src/hooks/useCarousel.ts src/tests/CarouselControls.test.tsx
git commit -m "fix: move home carousel controls beside cards"
```

---

### Task 4: Full verification

**Files:**
- Verify: `vercel.json`
- Verify: `src/pages/Home.tsx`
- Verify: `src/components/CarouselControls.tsx`

**Interfaces:**
- Consumes: completed Tasks 1–3.
- Produces: verified production build and route smoke-test evidence.

- [ ] **Step 1: Run all automated checks**

```powershell
npm test
npm run lint
npm run build
npm audit --omit=dev
git diff --check
```

Expected: every command exits `0`; audit reports `0 vulnerabilities`.

- [ ] **Step 2: Verify production preview routes**

Start Vite preview and request `/`, `/projects/`, and `/projects/supertraders/`. Each response must return HTTP 200.

- [ ] **Step 3: Verify the generated CSP contract**

Parse `vercel.json` and assert that the CSP includes `'wasm-unsafe-eval'`, excludes the exact token `'unsafe-eval'`, and retains `object-src 'none'` and `frame-ancestors 'none'`.

- [ ] **Step 4: Inspect final working tree**

Run:

```powershell
git status --short
git log -3 --oneline
```

Expected: only intentionally uncommitted plan/document changes remain, or the tree is clean.
