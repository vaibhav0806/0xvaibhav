# 0xvaibhav Portfolio Design

## Purpose

Create a personal portfolio for `0xvaibhav.com` that makes Vaibhav memorable as a high-taste, high-agency backend engineer while giving founders and engineering teams fast, credible evidence of his work.

## Audience

- Founders hiring an engineer.
- Product and engineering teams evaluating backend, FDE, full-stack/generalist AI, DevRel, or DevX potential.

The site will lead with backend and infrastructure. It will prove adjacent strengths through selected work rather than presenting a list of role labels.

## Positioning

**Working title:** Backend & Infrastructure Engineer.

**Working promise:** Builds product infrastructure and resilient backend systems, from a team's first service to production-scale platforms.

This is deliberately preferred over "Systems Engineer": it is clear, accurate, and does not imply a narrow embedded, networking, or SRE specialization.

## Information Architecture

The homepage is a personal-brand landing page with a serious technical core.

1. **Hero** — name, working title, concise promise, and links to GitHub, LinkedIn, email, and resume.
2. **Now** — current role at NodeOps / CreateOS, current areas of work, and openness to relevant conversations.
3. **Selected work** — three or four evidence-rich projects or roles, each structured as problem, contribution, and outcome.
4. **Experience** — compact chronological history, prioritizing scope and impact over a resume duplicate.
5. **Systems and writing** — technical notes, talks, system-design thinking, or useful experiments. It supports FDE and DevRel credibility without requiring an editorial cadence at launch.
6. **Contact** — direct email CTA and quiet social links.

## Visual Direction

- Dark, monochrome, editorial visual language on a wide 960-1080px canvas.
- Left-aligned authored hero with a compact identity line and a maximum two-line positioning statement.
- Geist sans and mono typography with disciplined scale, generous chapter spacing, and muted supporting text.
- No neon accent, generic card grid, gradients, terminal widgets, decorative dashboards, or contribution heatmaps.
- Selected work appears as large editorial rows with impact, role, year, and an optional visual preview.
- A compact bottom dock provides persistent navigation without copying the reference implementation.
- Inspiration: the authored landing-page structure of saura3h.xyz, Emil Kowalski's typographic restraint, and mrmehta.in's content clarity. The result must remain visually original.

## Motion Direction

- Motion exists for hierarchy, feedback, or spatial continuity; nothing moves only for decoration.
- Hero elements reveal once with a 40-60ms stagger and strong ease-out timing.
- Project preview transitions use opacity and `scale(0.96)` to `scale(1)`; never animate from `scale(0)`.
- Pressable elements use subtle `scale(0.97)` feedback within 100-160ms.
- Section entrances are brief and interruptible, using transform and opacity only.
- Shared motion tokens use `cubic-bezier(0.23, 1, 0.32, 1)` for entrances and `cubic-bezier(0.77, 0, 0.175, 1)` for on-screen movement.
- `prefers-reduced-motion` removes positional movement while preserving useful opacity and color feedback.
- No perpetual animation, scroll hijacking, or mandatory GSAP sequence.

## Content Principles

- Make specific, defensible claims; validate metrics before publishing them.
- Prefer evidence of ownership, technical decisions, and outcomes over technology lists.
- Keep confidential NodeOps and other private-repository details abstract unless explicitly cleared for publication.
- Use a consistent voice: concise, technical, calm, and confident without hype.
- The resume remains a complete chronology; the site is curated proof of judgment and craft.

## Career Narrative

- **CreateOS** — Software Engineer, April 2026-present. The current-role anchor: builds infrastructure for AI execution, framed at a high level because the concrete work is private.
- **CoinDCX** — Engineering Intern to Associate Software Engineer, November 2024-March 2026. The flagship case study.
- **Okto** — Software Engineer (freelance), August-November 2024.
- **Push Chain** — Intern to Integration and Ecosystem Intern, October 2023-August 2024.
- Earlier product and workflow experience at Instadapp, vishwa.ai, and Froker appears in the compact experience timeline only.

## Featured Work

### CoinDCX Trade Report

The flagship case study. Vaibhav built the product end to end to help Indian crypto users generate tax-ready trade reports. The public story may state that reports were delivered in under a minute, the launch handled approximately 100,000 requests in its first week, and it served approximately 15,000-20,000 requests per day at peak. Do not disclose its AWS architecture or other internal implementation details.

### Era

The second featured case study, selected because it is public and inspectable. It demonstrates personal technical taste and agent-system work without relying on private employer context.

### CreateOS

The "Now" anchor, not a detailed public case study. Use only the approved high-level framing: infrastructure for AI execution that helps teams run, connect, and manage AI-powered workflows. Do not expose private implementation details, repository names, or internal outcomes.

## Success Criteria

- A hiring manager understands Vaibhav's core value in the first screen.
- A technical reader can find credible work evidence within one scroll.
- The experience is memorable for its restraint, clarity, and finish.
- The site makes contacting Vaibhav or opening his resume effortless.

## Scope Boundaries

- Launch as a focused personal site, not a full blog platform or project archive.
- Do not publish sensitive details from private work.
- Defer content-management tooling, analytics, and a large writing section until the core site is live.
