# SEO and Performance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Ship complete technical SEO, branded OG/X previews, three substantive project case studies, and a clean Lighthouse pass without sacrificing the site's dark editorial identity.

**Architecture:** Centralize canonical site and case-study content in typed data, use Next.js metadata routes for crawl discovery and social images, and statically generate the case-study pages. Remove avoidable client hydration from the featured-work list and progressively simplify the shader only as far as measured Lighthouse results require.

**Tech Stack:** Next.js 16 App Router, React 19 Server Components, TypeScript, native CSS, Vitest, Testing Library, Lighthouse.

## Global Constraints

- Canonical origin: https://www.0xvaibhav.com
- Homepage title: Vaibhav Pandey | Backend Engineer & Infrastructure Builder
- Homepage description: Vaibhav Pandey builds secure, scalable backend systems and AI infrastructure with Go, Node.js, and Python. Explore his experience and selected projects.
- No meta keywords, stuffing, unsupported awards, private implementation details, or invented metrics.
- Keep the dark-only narrow-column design, amber interaction accent, and server-visible content.
- Do not stage AGENTS.md, CLAUDE.md, tmp/, or .env.local.
- Do not use subagents.

---

### Task 1: Canonical metadata, crawl routes, and identity schema

**Files:**
- Modify: content/portfolio.ts
- Modify: app/layout.tsx
- Modify: app/page.tsx
- Create: app/robots.ts
- Create: app/sitemap.ts
- Create: tests/seo.test.tsx

**Interfaces:**
- Produces: site.url, site.title, site.description, site.image.
- Produces: robots(): MetadataRoute.Robots and sitemap(): MetadataRoute.Sitemap.
- Consumes: existing profile, links, experience, and featuredWork data.

- [ ] **Step 1: Write failing SEO contract tests**

Tests assert:

~~~tsx
expect(metadata.metadataBase?.toString()).toBe("https://www.0xvaibhav.com/");
expect(metadata.alternates?.canonical).toBe("/");
expect(metadata.title).toMatchObject({
  default: "Vaibhav Pandey | Backend Engineer & Infrastructure Builder",
});
expect(metadata.description).toHaveLength(152);
expect(metadata.openGraph).toMatchObject({ type: "profile", url: "/" });
expect(metadata.twitter).toMatchObject({
  card: "summary_large_image",
  creator: "@ig_vaibhav1",
});
expect(robots()).toMatchObject({
  rules: { userAgent: "*", allow: "/" },
  sitemap: "https://www.0xvaibhav.com/sitemap.xml",
  host: "https://www.0xvaibhav.com",
});
expect(sitemap()).toEqual([{ url: "https://www.0xvaibhav.com" }]);
~~~

Render Home, parse the application/ld+json script, and assert its @graph includes WebSite, ProfilePage, and Person nodes with stable canonical @id values.

- [ ] **Step 2: Run tests and verify RED**

Run: npm test -- tests/seo.test.tsx

Expected: FAIL because metadata routes, site data, and JSON-LD do not exist.

- [ ] **Step 3: Add canonical metadata and crawl routes**

Add a site export to content/portfolio.ts with the exact global values. Expand app/layout.tsx with metadataBase, title default/template, canonical alternates, authorship, creator/publisher, index/follow robots, profile Open Graph, and summary_large_image X metadata.

Create app/robots.ts and app/sitemap.ts from site.url. Do not add changeFrequency, priority, or a false build-time lastModified.

- [ ] **Step 4: Add escaped homepage JSON-LD**

Render one @graph containing:

- WebSite with #website and preferred site name.
- ProfilePage with #profile and mainEntity #person.
- Person with name, canonical URL, local image, job title, CreateOS worksFor, GitHub/LinkedIn/X sameAs, and visible backend/AI/Go/Node.js/Python topics.

Serialize with JSON.stringify(data).replace(/</g, "\\u003c").

- [ ] **Step 5: Verify GREEN and commit**

Run: npm test -- tests/seo.test.tsx && npm run check

Commit: add technical SEO foundation

---

### Task 2: Branded Open Graph and X preview

**Files:**
- Create: app/opengraph-image.tsx
- Create: app/twitter-image.tsx
- Modify: tests/seo.test.tsx

**Interfaces:**
- Produces: cached 1200x630 image/png routes with a shared visual implementation.
- Consumes: site.title and site.description.

- [ ] **Step 1: Add failing export tests**

~~~ts
expect(openGraphSize).toEqual({ width: 1200, height: 630 });
expect(openGraphAlt).toBe(
  "Vaibhav Pandey, Backend Engineer and Infrastructure Builder",
);
expect(openGraphContentType).toBe("image/png");
~~~

- [ ] **Step 2: Run tests and verify RED**

Run: npm test -- tests/seo.test.tsx

Expected: FAIL because the OG module does not exist.

- [ ] **Step 3: Implement the preview**

Use ImageResponse with a #090a0a canvas, restrained grey radial surfaces, a small amber 0XVAIBHAV.COM label, the two-line role headline, and a Go / Node.js / Python line. Use only supported inline flex styles. Re-export the same implementation from twitter-image.tsx.

- [ ] **Step 4: Verify and commit**

Run tests and build, then confirm both image endpoints return 200 image/png at 1200x630.

Commit: add social preview images

---

### Task 3: Searchable Kairo, era, and DFlow case studies

**Files:**
- Create: content/case-studies.ts
- Create: app/work/[slug]/page.tsx
- Create: components/portfolio-dock.tsx
- Modify: app/page.tsx
- Modify: components/site-header.tsx
- Modify: components/featured-work.tsx
- Modify: components/project-row.tsx
- Modify: content/portfolio.ts
- Modify: app/sitemap.ts
- Modify: app/globals.css
- Modify: tests/portfolio.test.tsx
- Modify: tests/seo.test.tsx

**Interfaces:**
- Produces: CaseStudy, CaseStudySection, caseStudies, and getCaseStudy(slug).
- Produces: generateStaticParams and generateMetadata for /work/[slug].
- Changes: WorkItem gains caseStudy?: string; href remains the public source URL.
- Produces: PortfolioDock({ homeHref, workHref }) as a reusable Server Component.

- [ ] **Step 1: Write failing route and link tests**

Assert slugs are exactly kairo, era, dflow-sdk; sitemap lists the homepage plus all three canonical work URLs; homepage rows for those projects link internally; Prophet remains external; and each route returns unique title, description, and canonical metadata.

- [ ] **Step 2: Run tests and verify RED**

Run: npm test -- tests/portfolio.test.tsx tests/seo.test.tsx

Expected: FAIL because case-study data and routes do not exist.

- [ ] **Step 3: Add grounded content**

Kairo covers the macOS screen-native tutor, React 19/Tauri v2 desktop shell, Rust native behavior, Fastify/PostgreSQL backend, voice/screen context, server-side provider keys, and conservative capture safeguards. Links: meetkairo.xyz and the public repository.

era covers Telegram tasks, disposable Docker runs, GitHub pull requests, budget profiles, GitHub App tokens, egress controls, diff scanning, approvals, cancellation, race-tested CI, and backups. Link: public repository.

DFlow SDK covers one TypeScript/Python surface for DFlow prediction markets and Solana trading, typed REST clients, live WebSockets, orders/swaps/intents, signing/position helpers, npm/PyPI distribution, docs, and the public repository.

Each entry contains title, eyebrow, year, summary, SEO description, stack, repository, optional live/docs link, and four concise sections: The problem, System shape, Engineering decisions, What it demonstrates. No unsupported metrics.

- [ ] **Step 4: Build static routes and internal links**

Use promise-based Next.js 16 params, generateStaticParams, generateMetadata, notFound, one H1, H2 section headings, source/demo CTAs, and a visible back-to-work link.

Extract the existing dock from app/page.tsx. Use #top and #work on home, then / and /#work on case studies. Change primary Kairo/era/DFlow rows to internal links; case-study pages retain repository links.

Remove project-row aria-label overrides so visible content forms the accessible name.

- [ ] **Step 5: Style, verify, and commit**

Add scoped case-study reading styles and explicit mobile fallbacks. Update sitemap. Run both test files and npm run check; confirm build output includes all three static routes.

Commit: add project case studies

---

### Task 4: Remove measured accessibility and JavaScript bottlenecks

**Files:**
- Modify: components/site-header.tsx
- Modify: components/featured-work.tsx
- Modify: components/project-row.tsx
- Modify: components/hero-shader.tsx
- Create for the measured experiment: components/hero-shader-canvas.tsx; delete it if the CSS-only implementation wins.
- Modify: app/globals.css
- Modify: package.json
- Modify: package-lock.json
- Create: public/avatar.jpg
- Modify: next.config.ts
- Modify: tests/portfolio.test.tsx
- Modify: tests/ssr.test.tsx

**Measured baseline:** Performance 59, Accessibility 99, Best Practices 100, SEO 100. TBT 4,910ms and JavaScript execution 6.9s. Accessibility failures: redundant avatar alt and project aria-label/content mismatch.

- [ ] **Step 1: Write failing accessibility architecture tests**

Assert the identity link remains named while the adjacent image has alt="", project anchors have no overriding aria-label, all projects remain in SSR output, and content has no hidden inline initial styles.

- [ ] **Step 2: Run tests and verify RED**

Run: npm test -- tests/portfolio.test.tsx tests/ssr.test.tsx

- [ ] **Step 3: Remove featured-work hydration**

Convert FeaturedWork and ProjectRow to Server Components. Replace Motion layout state with .work-row::before opacity/transform transitions on :hover and :focus-within. Preserve sibling dimming with :has().

- [ ] **Step 4: Localize and correct the avatar**

Copy the exact current GitHub avatar to public/avatar.jpg, render /avatar.jpg with alt="", and retain aria-label="Vaibhav Pandey, home" on the identity link. Remove the GitHub image remote pattern from next.config.ts.

- [ ] **Step 5: Apply the shader performance gate**

First test a dynamic desktop-only Paper canvas loaded after initial idle, with the animated CSS gradients visible immediately and no canvas for reduced motion or mobile.

Accept it only if mobile Lighthouse reaches at least 95 Performance, TBT is below 200ms, and other categories are 100. Otherwise remove the runtime shader and keep the existing moving CSS gradient, which preserves the visual feel without client JavaScript. Remove unused motion and Paper dependencies after the decision.

- [ ] **Step 6: Verify and commit**

Run npm run check, a clean production Lighthouse audit, 390px overflow checks, and a no-JavaScript content check.

Commit: optimize portfolio performance

---

### Task 5: Production validation and release

**Files:** Modify only files required by repeatable measured findings.

- [ ] **Step 1: Run the complete gate**

Run npm run check, git diff --check, and git status -sb.

- [ ] **Step 2: Inspect local production output**

Verify:

- Root head has canonical, description, OG, X, and JSON-LD.
- robots.txt and sitemap.xml return 200 with canonical URLs.
- OG and X image routes return 200 image/png.
- All three /work routes return 200 with unique titles.

- [ ] **Step 3: Run Lighthouse three times**

Run three clean mobile audits. Report median category scores and Web Vitals. Fix repeatable findings; do not chase a one-run anomaly.

- [ ] **Step 4: Push and verify Vercel**

Push main, wait for deployment, repeat endpoint/head checks on www.0xvaibhav.com, and verify the apex permanently redirects to www.

- [ ] **Step 5: Search Console handoff**

Give the user exact steps to verify the Domain property, submit /sitemap.xml, request indexing for four URLs, run Rich Results Test, validate the social card, and monitor Page Indexing/Core Web Vitals.
