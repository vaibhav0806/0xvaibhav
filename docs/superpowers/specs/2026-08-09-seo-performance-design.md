# SEO and Performance Design

## Goal

Turn `https://www.0xvaibhav.com/` into a technically complete, indexable portfolio with strong branded and recruiter-intent search signals, useful project-level search surfaces, accurate social previews, and excellent real-world performance.

The implementation will target a 100 score in a clean headless Lighthouse run across Performance, Accessibility, Best Practices, and SEO. Lighthouse scores vary with hardware, network, browser extensions, and run-to-run conditions, so the durable requirement is to eliminate genuine findings and preserve strong Core Web Vitals rather than manipulate the audit.

## Search Positioning

- Canonical origin: `https://www.0xvaibhav.com`
- Title: `Vaibhav Pandey | Backend Engineer & Infrastructure Builder`
- Description: `Vaibhav Pandey builds secure, scalable backend systems and AI infrastructure with Go, Node.js, and Python. Explore his experience and selected projects.`
- Primary intent: branded searches for Vaibhav Pandey and recruiter searches for backend, infrastructure, Go, Node.js, Python, AI infrastructure, and distributed-systems engineers.
- Project intent: Kairo AI tutor, ephemeral runtime agent, and DFlow TypeScript/Python SDK.

No meta-keywords tag, keyword stuffing, unsupported awards, or invented employment claims will be added.

## Phase 1: Technical SEO and Social Discovery

The root metadata will define `metadataBase`, a self-referencing canonical URL, authorship, creator/publisher, index/follow directives, Open Graph metadata, and a large-image X card. The existing favicon remains the search favicon.

Next.js metadata routes will provide:

- `/robots.txt`, allowing the public site and linking the sitemap.
- `/sitemap.xml`, initially listing only canonical, indexable pages.
- A 1200×630 Open Graph image matching the site's monochrome visual language and amber interaction accent.

The homepage will emit JSON-LD as an `@graph` containing:

- `WebSite` for the preferred site name.
- `ProfilePage` for the homepage.
- `Person` for Vaibhav, with truthful visible identity, role, CreateOS affiliation, image, skills, and verified GitHub, LinkedIn, and X profiles.

The JSON-LD will be server-rendered and escaped before insertion.

## Phase 2: Searchable Proof of Work

Three substantive, statically generated case-study routes will be created:

- `/work/kairo`
- `/work/era`
- `/work/dflow-sdk`

Each page will contain original, readable content grounded in public repositories and already verified portfolio facts: overview, problem, constraints, architecture or engineering decisions, reliability/safety considerations, stack, and source/demo links. Private implementation details and unsupported metrics will not be published.

The corresponding homepage project rows will link internally to these case studies. Each case study will link to its public repository and, where available, its live product. All three canonical URLs will be added to the sitemap and will receive unique metadata.

Case studies will share the existing typography, narrow column, dock, dark-only palette, motion restraint, and responsive behavior. No generic blog template or card-grid redesign will be introduced.

## Phase 3: Performance and Best Practices

A clean production Lighthouse audit will establish the baseline and identify exact findings. The likely high-impact work is:

- Keep meaningful content server-rendered and visible without JavaScript.
- Replace the client-side Motion project-hover implementation with a CSS interaction if it materially reduces JavaScript without degrading the feel.
- Keep the shader's CSS fallback, then defer the canvas enhancement until the page is idle; avoid the canvas on reduced-motion and constrained mobile conditions.
- Host the profile image locally to remove a critical third-party request.
- Preserve lazy loading for below-fold company logos.
- Fix only measured Best Practices, accessibility, and console findings.

The visual direction will remain intact. A performance score is not worth removing the identity of the site unless a measured bottleneck cannot be solved more carefully.

## Testing and Validation

Automated tests will cover:

- Metadata base, canonical URL, title, description, OG, and X fields.
- `robots.txt` and sitemap outputs.
- Parseable JSON-LD whose identity claims match visible content.
- Static case-study routes, unique metadata, and internal links.
- Existing accessibility, responsive, SSR, and interaction contracts.

Production validation will include:

- `npm run check`.
- Generated `<head>` inspection.
- HTTP checks for `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, and each case study.
- Google Rich Results-compatible JSON-LD validation.
- Clean headless Lighthouse runs with the exact scores and remaining variance reported honestly.
- Mobile overflow and no-JavaScript checks.

## Release and Measurement

Changes will be committed and pushed to `main` for Vercel deployment. After deployment:

1. Verify the canonical `www` host and permanent apex redirect.
2. Add the domain to Google Search Console.
3. Submit `https://www.0xvaibhav.com/sitemap.xml`.
4. Inspect and request indexing for the homepage and three case studies.
5. Validate social previews and monitor Core Web Vitals and indexed pages.

Search rankings are not guaranteed by technical tags. The case studies and future system-design writing are the compounding organic-search layer.
