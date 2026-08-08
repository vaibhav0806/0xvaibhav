# 0xvaibhav Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a fast, accessible personal portfolio at `0xvaibhav.com` that presents Vaibhav as a Backend & Infrastructure Engineer.

**Architecture:** A statically rendered Next.js site with content held in typed local data. The homepage composes focused section components from that data, while CSS owns the dark editorial design and its small motion details. External links and contact information remain centralized so publishing updates are low-risk.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Vitest, Playwright, Vercel.

## Global Constraints

- Use the approved title: `Backend & Infrastructure Engineer`.
- Use a dark, monochrome editorial design with a narrow reading column and no gradients, terminal widgets, decorative dashboards, or contribution heatmaps.
- Keep CreateOS content at the approved high-level description only; never include private repository names, internal architecture, or internal outcomes.
- CoinDCX Trade Report copy may cite approximately 100,000 first-week requests, 15,000-20,000 daily peak requests, and sub-minute report delivery, but no AWS architecture.
- Feature CoinDCX Trade Report and Era; show CreateOS as the current-role anchor, not a detailed case study.
- Preserve responsive behavior, keyboard navigation, reduced-motion support, semantic headings, and WCAG AA contrast.
- Do not add a CMS, analytics package, blog platform, or project archive in the launch scope.

---

## Planned File Structure

| Path | Responsibility |
| --- | --- |
| `app/layout.tsx` | Site metadata, fonts, and document shell. |
| `app/page.tsx` | Homepage composition from typed portfolio content. |
| `app/globals.css` | Design tokens, editorial layout, interaction, and responsive styles. |
| `components/site-header.tsx` | Minimal sticky identity/navigation row. |
| `components/hero.tsx` | Positioning statement and primary links. |
| `components/section-heading.tsx` | Consistent section label and heading treatment. |
| `components/work-card.tsx` | Accessible selected-work presentation. |
| `components/experience-list.tsx` | Compact career timeline. |
| `components/contact.tsx` | Contact call to action and social links. |
| `content/portfolio.ts` | Typed, approved copy and link constants. |
| `tests/portfolio.test.ts` | Content and rendering unit tests. |
| `e2e/home.spec.ts` | Browser-level homepage and accessibility smoke tests. |
| `README.md` | Local development, validation, and deployment instructions. |

### Task 1: Bootstrap a Tested Static Next.js Site

**Files:**
- Create: `package.json`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Create: `vitest.config.ts`
- Create: `playwright.config.ts`
- Create: `tests/setup.ts`
- Create: `e2e/home.spec.ts`
- Create: `README.md`

**Interfaces:**
- Produces: `npm run dev`, `npm run build`, `npm run test`, and `npm run test:e2e` commands.
- Produces: a static HTML response for `/` with `<main>` as the page landmark.

- [ ] **Step 1: Initialize source control and scaffold the app**

```bash
git init
npx create-next-app@latest . --ts --tailwind --eslint --app --use-npm --import-alias '@/*'
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom playwright @playwright/test
npx playwright install --with-deps chromium
```

- [ ] **Step 2: Add scripts and test configuration**

Add these scripts to `package.json`:

```json
{
  "test": "vitest run",
  "test:watch": "vitest",
  "test:e2e": "playwright test",
  "check": "npm run lint && npm run test && npm run build"
}
```

Configure Vitest for `jsdom`, `tests/setup.ts`, and the `@` alias. Configure Playwright with `baseURL: 'http://127.0.0.1:3000'` and a `webServer` that runs `npm run dev`.

- [ ] **Step 3: Write the initial failing browser test**

```ts
import { expect, test } from '@playwright/test';

test('renders the portfolio homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('main')).toBeVisible();
  await expect(page).toHaveTitle(/Vaibhav Pandey/);
});
```

- [ ] **Step 4: Implement the minimum document shell**

In `app/layout.tsx`, set `metadata.title` to `Vaibhav Pandey — Backend & Infrastructure Engineer`; in `app/page.tsx`, render `<main><h1>Vaibhav Pandey</h1></main>`.

- [ ] **Step 5: Run verification**

```bash
npm run test:e2e
npm run check
```

Expected: browser smoke test, lint, unit tests, and production build pass.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json app vitest.config.ts playwright.config.ts tests e2e README.md
git commit -m "chore: scaffold portfolio site"
```

### Task 2: Establish Typed Portfolio Content

**Files:**
- Create: `content/portfolio.ts`
- Create: `tests/portfolio.test.ts`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `profile`, `featuredWork`, and `experience` exports from `content/portfolio.ts`.
- Consumes: the source `profile.name` and `profile.title` in `app/page.tsx`.

- [ ] **Step 1: Write failing content tests**

```ts
import { experience, featuredWork, profile } from '@/content/portfolio';

it('keeps the approved positioning and featured work', () => {
  expect(profile.title).toBe('Backend & Infrastructure Engineer');
  expect(featuredWork.map((work) => work.slug)).toEqual(['coindcx-trade-report', 'era']);
  expect(experience[0].company).toBe('CreateOS');
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- tests/portfolio.test.ts
```

Expected: FAIL because `@/content/portfolio` does not exist.

- [ ] **Step 3: Implement the content contract**

Define `Profile`, `WorkItem`, and `ExperienceItem` interfaces. Populate only approved content:

```ts
export const profile = {
  name: 'Vaibhav Pandey',
  title: 'Backend & Infrastructure Engineer',
  summary: 'I build product infrastructure and resilient backend systems, from a team\'s first service to production-scale platforms.',
  now: 'At CreateOS, I build infrastructure for AI execution that helps teams run, connect, and manage AI-powered workflows.',
};
```

Create `featuredWork` entries for `coindcx-trade-report` and `era`, and a reverse-chronological `experience` array for CreateOS, CoinDCX, Okto, Push Chain, Instadapp, vishwa.ai, and Froker. Keep the GitHub URL `https://github.com/vaibhav0806`, LinkedIn URL `https://linkedin.com/in/vaibhav0806`, and email URL `mailto:vaibhav.pandey0806@gmail.com` in a single `links` export.

- [ ] **Step 4: Render the title from content**

Replace the literal heading in `app/page.tsx` with `profile.name` and `profile.title`.

- [ ] **Step 5: Run verification**

```bash
npm run test -- tests/portfolio.test.ts
npm run check
```

Expected: all tests pass and the build has no type errors.

- [ ] **Step 6: Commit**

```bash
git add content/portfolio.ts tests/portfolio.test.ts app/page.tsx
git commit -m "feat: add portfolio content model"
```

### Task 3: Build the Editorial Design System and Hero

**Files:**
- Create: `components/site-header.tsx`
- Create: `components/hero.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `app/page.tsx`
- Modify: `tests/portfolio.test.ts`

**Interfaces:**
- Consumes: `profile` and `links` from `content/portfolio.ts`.
- Produces: `SiteHeader` and `Hero` React components.

- [ ] **Step 1: Write failing render tests**

```tsx
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

it('shows the title and contact links in the hero', () => {
  render(<Home />);
  expect(screen.getByRole('heading', { level: 1, name: /vaibhav pandey/i })).toBeVisible();
  expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href');
  expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute('href');
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- tests/portfolio.test.ts
```

Expected: FAIL because the hero links are absent.

- [ ] **Step 3: Implement the components and tokens**

`SiteHeader` contains the name mark and anchor links for Work, Experience, and Contact. `Hero` renders the title, summary, current focus, and GitHub/LinkedIn/email links with descriptive accessible labels.

In `app/globals.css`, define `--page`, `--surface`, `--text`, `--muted`, `--line`, and `--accent` variables; use a maximum content width of `44rem`; apply `prefers-reduced-motion: reduce`; and ensure focus-visible outlines use the accent token. Load one variable sans-serif through `next/font` in `app/layout.tsx`.

- [ ] **Step 4: Run verification**

```bash
npm run test -- tests/portfolio.test.ts
npm run check
```

Expected: hero tests pass and the page is responsive without lint or type errors.

- [ ] **Step 5: Commit**

```bash
git add app components tests/portfolio.test.ts
git commit -m "feat: add editorial hero and navigation"
```

### Task 4: Add Featured Work and Experience Evidence

**Files:**
- Create: `components/section-heading.tsx`
- Create: `components/work-card.tsx`
- Create: `components/experience-list.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `tests/portfolio.test.ts`

**Interfaces:**
- Consumes: `WorkItem[]` and `ExperienceItem[]` from `content/portfolio.ts`.
- Produces: `SectionHeading`, `WorkCard`, and `ExperienceList` components.

- [ ] **Step 1: Write failing tests for approved evidence**

```tsx
it('renders the selected work and current role', () => {
  render(<Home />);
  expect(screen.getByRole('heading', { name: /selected work/i })).toBeVisible();
  expect(screen.getByText(/trade report/i)).toBeVisible();
  expect(screen.getByText(/100,000 requests/i)).toBeVisible();
  expect(screen.getByText(/createos/i)).toBeVisible();
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- tests/portfolio.test.ts
```

Expected: FAIL because those sections do not yet exist.

- [ ] **Step 3: Implement the evidence sections**

`WorkCard` renders an `article` with an `h3`, concise problem/contribution/outcome copy, optional public project link, and no internal architecture details. The CoinDCX entry states end-to-end ownership, tax-ready reports, sub-minute delivery, and approximately 100,000 first-week requests. The Era entry links to its public repository.

`ExperienceList` renders a semantic ordered list. The CreateOS entry uses only the approved public sentence. The other entries show company, role, and dates without inflated descriptions.

- [ ] **Step 4: Run verification**

```bash
npm run test -- tests/portfolio.test.ts
npm run check
```

Expected: selected-work and experience tests pass; the build remains static.

- [ ] **Step 5: Commit**

```bash
git add app components tests/portfolio.test.ts
git commit -m "feat: add work and experience sections"
```

### Task 5: Complete Contact, Accessibility, and Release Readiness

**Files:**
- Create: `components/contact.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `e2e/home.spec.ts`
- Modify: `README.md`

**Interfaces:**
- Consumes: `links` from `content/portfolio.ts`.
- Produces: a contact section at `#contact` and release instructions.

- [ ] **Step 1: Write failing browser checks**

```ts
test('supports navigation and a direct contact path', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /contact/i }).click();
  await expect(page.locator('#contact')).toBeInViewport();
  await expect(page.getByRole('link', { name: /email vaibhav/i })).toHaveAttribute('href', /^mailto:/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test:e2e
```

Expected: FAIL because `#contact` is absent.

- [ ] **Step 3: Implement contact and polish**

Add a `Contact` section with a direct email link plus GitHub and LinkedIn links. Verify all external links use `target="_blank"` only when needed and include `rel="noreferrer"`. Add responsive typography, mobile spacing, keyboard focus states, and one CSS-only underline/reveal interaction that disables under reduced motion.

Update `README.md` with Node version, install, development, validation, Vercel deployment, and the DNS instruction to point `0xvaibhav.com` to the Vercel project after it is deployed.

- [ ] **Step 4: Run full verification**

```bash
npm run check
npm run test:e2e
```

Expected: lint, unit tests, production build, and browser tests pass.

- [ ] **Step 5: Perform manual responsive and content review**

Check the homepage at 375px, 768px, and 1440px widths. Confirm each heading is readable, every link works, CreateOS copy contains no private details, and CoinDCX copy does not describe AWS or internal architecture.

- [ ] **Step 6: Commit**

```bash
git add app components e2e README.md
git commit -m "feat: finalize portfolio experience"
```

## Plan Self-Review

- **Spec coverage:** Tasks 3-5 implement the approved visual direction, hierarchy, contact path, selected work, experience timeline, and confidentiality boundaries. Task 2 centralizes claims so they are reviewable before publication. Task 1 provides a buildable, testable base.
- **Placeholder scan:** No TBD/TODO markers, unnamed interfaces, or deferred implementation steps remain. Task 2 supplies the confirmed GitHub, LinkedIn, and email URLs and uses only validated or user-approved project copy. A resume link is intentionally out of scope for launch.
- **Type consistency:** All page sections consume `profile`, `links`, `featuredWork`, and `experience` declared in `content/portfolio.ts`; `WorkCard` and `ExperienceList` use the corresponding item types.
