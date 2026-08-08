# Portfolio Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the existing portfolio into a restrained, authored, motion-aware experience inspired by Saura3h and Emil Kowalski while preserving the approved content.

**Architecture:** Keep the homepage statically rendered by Next.js and isolate viewport-driven animation in small client components using Motion. Replace the generic card grid with editorial project rows, widen the composition, and add a compact bottom dock. Centralized content remains the only source of portfolio copy.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion, Vitest, Testing Library.

## Global Constraints

- Keep the approved title `Backend & Infrastructure Engineer` and all confidentiality boundaries.
- Use a near-black monochrome palette with no neon accent, gradients, terminal widgets, decorative dashboards, or contribution heatmaps.
- Use Geist sans and mono on a 960-1080px canvas with a maximum two-line hero statement.
- Present selected work as editorial rows rather than generic cards.
- Use `cubic-bezier(0.23, 1, 0.32, 1)` for entrances and `cubic-bezier(0.77, 0, 0.175, 1)` for movement.
- Animate only transform and opacity; never animate from `scale(0)` or use perpetual motion.
- Respect `prefers-reduced-motion` by removing positional movement while retaining opacity and color feedback.

---

### Task 1: Replace the Visual Hierarchy

**Files:**
- Modify: `components/hero.tsx`
- Modify: `components/site-header.tsx`
- Modify: `components/work-card.tsx`
- Modify: `components/experience-list.tsx`
- Modify: `components/contact.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Test: `tests/portfolio.test.tsx`

**Interfaces:**
- Consumes: `profile`, `links`, `featuredWork`, and `experience` from `content/portfolio.ts`.
- Produces: semantic sections with `#work`, `#experience`, and `#contact` anchors.

- [ ] **Step 1: Write failing structure tests**

Add assertions for the exact hero statement, two editorial work articles, and navigation anchors. Run `npm test -- tests/portfolio.test.tsx`; expect failure because the new statement and dock do not exist.

- [ ] **Step 2: Implement the editorial structure**

Use a compact identity row, the two-line statement `Backend engineer building systems that hold up.`, editorial project rows, a quiet timeline, a direct email close, and a fixed bottom dock. Remove the bordered two-column card grid and uppercase section-label pattern.

- [ ] **Step 3: Implement the design tokens**

Set the canvas to `min(1024px, calc(100% - 48px))`, use one monochrome palette, define the two approved easing tokens, use sharp geometry, and add explicit mobile fallbacks below 768px.

- [ ] **Step 4: Verify and commit**

Run `npm run check`. Commit with `git commit -m "feat: redesign portfolio hierarchy"`.

### Task 2: Add Purposeful Motion

**Files:**
- Create: `components/reveal.tsx`
- Create: `components/project-row.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `package.json`
- Modify: `package-lock.json`
- Test: `tests/portfolio.test.tsx`

**Interfaces:**
- Produces: `Reveal({ children, delay?, className? })` and `ProjectRow({ work, index })`.
- Consumes: `WorkItem` from `content/portfolio.ts` and Motion's `useReducedMotion`.

- [ ] **Step 1: Install Motion and write failing behavior tests**

Run `npm install motion`. Add tests confirming the content remains visible without animation APIs and external Era links retain accessible names. Run the focused tests and confirm the new component imports fail.

- [ ] **Step 2: Implement reveal motion**

Use opacity plus `translateY(16px)` to `translateY(0)` over 500ms with `[0.23, 1, 0.32, 1]`. Apply 40-60ms hero staggering and trigger section reveals once. Under reduced motion, use opacity only with zero positional offset.

- [ ] **Step 3: Implement interaction feedback**

Project rows use a 200ms opacity/scale preview transition from `0.96` to `1`; links and dock items use `scale(0.97)` press feedback over 140ms. Hover movement is gated behind `(hover: hover) and (pointer: fine)`.

- [ ] **Step 4: Verify and commit**

Run `npm run check`. Commit with `git commit -m "feat: add restrained portfolio motion"`.

### Task 3: Visual and Accessibility QA

**Files:**
- Modify only files with verified defects from this task.

**Interfaces:**
- Consumes: the completed homepage at `http://localhost:3000`.
- Produces: a responsive, keyboard-accessible, reduced-motion-safe final page.

- [ ] **Step 1: Inspect desktop and mobile renders**

Capture the live page at 1440x1000 and 390x844. Confirm the hero stays within two lines on desktop, work rows do not resemble cards, and the dock does not cover content.

- [ ] **Step 2: Audit motion and accessibility**

Confirm focus indicators, semantic headings, AA contrast, no horizontal overflow, and no positional movement under reduced motion.

- [ ] **Step 3: Fix only observed defects**

Apply the smallest CSS or component changes required by the inspection. Do not add new sections, dependencies, or decorative effects.

- [ ] **Step 4: Final verification and commit**

Run `npm run check` and `git diff --check`. Commit verified fixes with `git commit -m "fix: polish portfolio responsive behavior"` only if changes were required.

## Plan Self-Review

- **Spec coverage:** Task 1 covers hierarchy, palette, typography, editorial rows, dock, and responsive layout. Task 2 covers Emil-style motion and reduced-motion handling. Task 3 covers visual, interaction, and accessibility QA.
- **Placeholder scan:** No TBD/TODO markers or unspecified animation values remain.
- **Type consistency:** `ProjectRow` consumes the existing `WorkItem`; `Reveal` accepts React children plus optional delay and class name.
