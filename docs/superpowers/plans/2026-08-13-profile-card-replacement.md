# ProfileCard Replacement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Home hero Lanyard with a responsive React Bits-inspired profile card and remove every runtime, asset, permission, and package that existed only for the old 3D card.

**Architecture:** A typed `ProfileCard` component renders a semantic, mobile-first portrait card and applies pointer tilt through element-scoped CSS variables without WebGL. `Home` supplies portfolio data and a bundled avatar import; security and package regression tests protect the deployment from reintroducing eval or Three.js dependencies.

**Tech Stack:** React 19, TypeScript, React Router DOM, Framer Motion, Tailwind CSS v4, Vitest, Testing Library

## Global Constraints

- Keep the existing Home hero text hierarchy and black/yellow portfolio design.
- Use `src/assets/firudinmaniyev.jpeg` for the main portrait and mini avatar.
- The contact action must navigate to `/contact` with React Router.
- Desktop pointer tilt is enabled; mobile tilt and reduced-motion tilt are disabled.
- Do not use WebGL, WebAssembly, device-orientation permissions, inline JSX style objects, `any`, or document-level style injection.
- Remove only files and packages proven to be exclusive to Lanyard.
- Local production preview and Vercel must consume the same bundled assets and route paths.

---

### Task 1: Build and integrate the responsive ProfileCard

**Files:**
- Create: `src/components/ProfileCard.tsx`
- Create: `src/tests/ProfileCard.test.tsx`
- Modify: `src/pages/Home.tsx`
- Add: `src/assets/firudinmaniyev.jpeg`

**Interfaces:**
- Consumes: React Router `Link`, the Vite-imported avatar URL, and optional visual configuration props.
- Produces: `ProfileCard(props: ProfileCardProps): JSX.Element` with a semantic article and `/contact` link.

- [ ] **Step 1: Write the failing component test**

```tsx
// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import ProfileCard from '../components/ProfileCard'

describe('ProfileCard', () => {
  it('presents Firudin profile information and links to contact', () => {
    render(
      <MemoryRouter>
        <ProfileCard
          avatarUrl="/firudin.jpg"
          name="Firudin Maniyev"
          title="Full-stack Developer"
          handle="firudincoder"
          status="Əlaqə üçün açıq"
          contactText="Əlaqə saxla"
          contactTo="/contact"
          showUserInfo
          enableTilt
          enableMobileTilt={false}
        />
      </MemoryRouter>,
    )

    expect(screen.getByRole('article', { name: 'Firudin Maniyev profil kartı' })).not.toBeNull()
    expect(screen.getByRole('img', { name: 'Firudin Maniyev profil şəkli' })).not.toBeNull()
    expect(screen.getByText('Full-stack Developer')).not.toBeNull()
    expect(screen.getByText('@firudincoder')).not.toBeNull()
    expect(screen.getByText('Əlaqə üçün açıq')).not.toBeNull()
    expect(screen.getByRole('link', { name: 'Əlaqə saxla' }).getAttribute('href')).toBe('/contact')
  })
})
```

- [ ] **Step 2: Run the test and verify RED**

Run: `npx vitest run src/tests/ProfileCard.test.tsx`

Expected: FAIL because `src/components/ProfileCard.tsx` does not exist.

- [ ] **Step 3: Implement the minimal typed component**

Create a `ProfileCardProps` interface with `avatarUrl`, `miniAvatarUrl`, `iconUrl`, `name`, `title`, `handle`, `status`, `contactText`, `contactTo`, `showUserInfo`, `enableTilt`, `enableMobileTilt`, `behindGlowEnabled`, and `className`. Render a semantic `<article aria-label={`${name} profil kartı`}>`, a descriptive portrait `<img>`, and a `<Link to={contactTo}>`.

Use Tailwind utilities for layout and appearance. In pointer handlers, update only element-scoped `--profile-rotate-x`, `--profile-rotate-y`, `--profile-pointer-x`, and `--profile-pointer-y` variables through a ref. Gate those handlers behind fine-pointer, reduced-motion, and mobile-tilt checks, then reset all variables on pointer leave.

- [ ] **Step 4: Integrate it into Home**

Replace the lazy `Lanyard`, `Suspense`, `LanyardErrorBoundary`, and `useMediaQuery` code in `Home.tsx` with static imports for `ProfileCard` and `firudinmaniyev.jpeg`. Render the card in the existing right hero column with these values:

```tsx
<ProfileCard
  avatarUrl={firudinProfileImage}
  miniAvatarUrl={firudinProfileImage}
  name="Firudin Maniyev"
  title="Full-stack Developer"
  handle="firudincoder"
  status="Əlaqə üçün açıq"
  contactText="Əlaqə saxla"
  contactTo="/contact"
  showUserInfo
  enableTilt
  enableMobileTilt={false}
  behindGlowEnabled
/>
```

Make the right column visible at every breakpoint and cap the card width with mobile-first sizing.

- [ ] **Step 5: Run focused tests and verify GREEN**

Run: `npx vitest run src/tests/ProfileCard.test.tsx`

Expected: PASS with one component behavior test.

- [ ] **Step 6: Commit the component slice**

```bash
git add src/components/ProfileCard.tsx src/tests/ProfileCard.test.tsx src/pages/Home.tsx src/assets/firudinmaniyev.jpeg
git commit -m "feat: replace hero lanyard with profile card"
```

---

### Task 2: Remove the Lanyard runtime and tighten deployment security

**Files:**
- Modify: `src/tests/deploymentSecurity.test.ts`
- Create: `src/tests/runtimeDependencies.test.ts`
- Modify: `vercel.json`
- Modify: `vite.config.ts`
- Modify: `src/data/projects.ts`
- Modify: `package.json`
- Modify: `package-lock.json`
- Delete: `src/components/Lanyard.tsx`
- Delete: `src/components/LanyardErrorBoundary.tsx`
- Delete: `src/tests/LanyardErrorBoundary.test.tsx`
- Delete: `src/assets/lanyard/card.glb`
- Delete: `src/assets/lanyard/lanyard.png`

**Interfaces:**
- Consumes: Vercel's CSP header and npm package metadata.
- Produces: a non-WASM production runtime with `script-src 'self'` and no Lanyard-only dependencies.

- [ ] **Step 1: Update security and dependency tests for the desired state**

Change the CSP test so its behavior requires both eval sources to be absent:

```ts
expect(scriptSources).toContain("'self'")
expect(scriptSources).not.toContain("'wasm-unsafe-eval'")
expect(scriptSources).not.toContain("'unsafe-eval'")
```

Add a dependency contract test:

```ts
import { describe, expect, it } from 'vitest'
import packageJson from '../../package.json'

describe('browser runtime dependencies', () => {
  it.each(['@react-three/drei', '@react-three/fiber', '@react-three/rapier', 'three'])(
    'does not ship the removed Lanyard dependency %s',
    (dependency) => {
      expect(packageJson.dependencies).not.toHaveProperty(dependency)
    },
  )
})
```

- [ ] **Step 2: Run the two tests and verify RED**

Run: `npx vitest run src/tests/deploymentSecurity.test.ts src/tests/runtimeDependencies.test.ts`

Expected: FAIL because the CSP still permits WASM evaluation and package dependencies still contain the Lanyard stack.

- [ ] **Step 3: Remove runtime dependencies and dead files**

Run:

```bash
npm uninstall @react-three/drei @react-three/fiber @react-three/rapier three
npm uninstall -D @types/three
```

Delete the five exact Lanyard files/assets listed above after verifying their resolved paths are within the repository. Remove `assetsInclude: ['**/*.glb']` from `vite.config.ts`.

- [ ] **Step 4: Tighten CSP and update project metadata**

Change Vercel's directive from `script-src 'self' 'wasm-unsafe-eval'` to `script-src 'self'`, preserving all other header directives. Remove `three/fiber` and `Three.js` from only the portfolio project's `technologies` array.

- [ ] **Step 5: Run focused tests and verify GREEN**

Run: `npx vitest run src/tests/deploymentSecurity.test.ts src/tests/runtimeDependencies.test.ts`

Expected: PASS for the narrowed CSP and dependency contract.

- [ ] **Step 6: Commit the cleanup slice**

```bash
git add package.json package-lock.json vercel.json vite.config.ts src/data/projects.ts src/tests/deploymentSecurity.test.ts src/tests/runtimeDependencies.test.ts
git add -u src/components src/tests src/assets/lanyard
git commit -m "perf: remove lanyard 3d runtime"
```

---

### Task 3: Update ignored artifacts and verify the production result

**Files:**
- Modify: `.gitignore`

**Interfaces:**
- Consumes: Vite, TypeScript, Vitest, and Vercel local artifact conventions.
- Produces: a clean repository after local builds, coverage runs, and Vercel CLI usage.

- [ ] **Step 1: Extend `.gitignore`**

Keep existing entries and add:

```gitignore
# Test and build caches
coverage
.vite
*.tsbuildinfo

# Deployment tooling
.vercel

# Local environment variants
.env.*
!.env.example
```

Do not ignore `src/assets/firudinmaniyev.jpeg`.

- [ ] **Step 2: Run complete verification**

Run:

```bash
npm test
npm run lint
npm run build
npm audit --omit=dev
git diff --check
```

Expected: every command exits with code 0; the Vite output has no Lanyard, Rapier, or Three.js chunk.

- [ ] **Step 3: Smoke-test production routes**

Start `vite preview` on `127.0.0.1:4173`, request `/`, `/contact/`, and `/projects/supertraders/`, and assert status `200` plus a root element for each response. Stop the exact preview process afterward.

- [ ] **Step 4: Verify repository cleanup**

Run `rg -n "Lanyard|@react-three|from 'three'|wasm-unsafe-eval" src package.json vite.config.ts vercel.json` and inspect every remaining match. The only acceptable references are historical design/plan documentation; no production or test match may remain.

- [ ] **Step 5: Commit repository hygiene**

```bash
git add .gitignore
git commit -m "chore: ignore local build artifacts"
```
