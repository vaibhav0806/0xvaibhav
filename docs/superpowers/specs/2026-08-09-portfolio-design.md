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

1. **Hero** - name, working title, concise promise, and direct email and GitHub actions.
2. **About** - current role at CreateOS, current areas of work, and compact chronological experience.
3. **Featured work** - a dense project archive spanning backend infrastructure, AI products, developer tools, crypto systems, and one credited private collaboration.
4. **Stack** - a concise technical toolkit.
5. **Contact** - direct email CTA and quiet social links.

## Visual Direction

- Dark, monochrome visual language on an intimate 680px canvas.
- Left-aligned authored hero with a small portrait, compact identity line, and a two-line positioning statement.
- Geist sans and mono typography with a 44px desktop display scale, dense project rows, and muted supporting text.
- No neon accent, generic card grid, gradients, terminal widgets, decorative dashboards, or contribution heatmaps.
- Featured work appears as a compact project ledger with impact, role, year, and technical context.
- A compact icon dock and masked page-edge blur provide persistent navigation and depth without copying the reference implementation.
- Inspiration: the authored landing-page structure of saura3h.xyz, Emil Kowalski's typographic restraint, and mrmehta.in's content clarity. The result must remain visually original.

## Motion Direction

- Motion exists for hierarchy, feedback, or spatial continuity; nothing moves only for decoration.
- Hero words reveal once with a 65ms stagger, blur, and strong ease-out timing.
- Project transitions use restrained background, opacity, and arrow movement.
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

The project archive features era, Kairo Tutor, Prophet, DFlow SDK, Cloak, SEO Workflow, Beacon, PermaSign, Pixel Tamagotchi, Tech Digest, and Coduel. era leads as the backend and infrastructure flagship. PermaSign is positioned as Web3-native document signing and links to its public collaboration repository.

CoinDCX remains part of the experience timeline but is not presented as a featured project.

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
