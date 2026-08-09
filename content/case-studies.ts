export type CaseStudySection = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  summary: string;
  description: string;
  stack: string[];
  repository: string;
  live?: { label: string; href: string };
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "kairo",
    title: "Kairo",
    eyebrow: "Screen-native AI tutor",
    year: "2026",
    summary: "A macOS AI tutor that combines voice and screen context to point at the next step while keeping the learner in control.",
    description: "How Kairo combines Tauri, Rust, React, Fastify, PostgreSQL, voice, and screen context to deliver visual guidance without taking over the user's computer.",
    stack: ["TypeScript", "React", "Rust", "Tauri", "Fastify", "PostgreSQL"],
    repository: "https://github.com/vaibhav0806/kairo-tutor",
    live: { label: "Visit Kairo", href: "https://meetkairo.xyz" },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Practical software labs are highly contextual. A learner may be one click, command, or configuration change away from progress, but a conventional chat interface cannot see that state without a long explanation and constant context switching.",
          "Kairo is built around a narrower promise: understand the learner's question and current screen, then point to the next action. It explains and guides, but never clicks or types on the learner's behalf.",
        ],
      },
      {
        title: "System shape",
        paragraphs: [
          "The desktop app runs React 19 inside Tauri v2. Rust owns native concerns such as the global shortcut, audio, screen capture, panels, and overlay behavior. A Fastify backend owns authentication, provider credentials, preferences, usage metering, and billing, with PostgreSQL as the system of record.",
          "Voice and screen context move through authenticated backend routes to speech and model providers. Production builds keep provider keys out of the desktop bundle, and the response returns as spoken guidance, a visual highlight, and a companion cursor.",
        ],
      },
      {
        title: "Engineering decisions",
        paragraphs: [
          "Screen context is treated as sensitive input rather than an always-on stream. Voice questions capture after push-to-talk completes, a text gate decides whether the frame is required, and text-only requests discard it locally. Transmitted frames are resized before leaving the device.",
        ],
        points: [
          "Block capture for a conservative set of password, mail, wallet, banking, messaging, and photo applications.",
          "Discard a frame if the frontmost application changes while capture is in progress.",
          "Exclude Kairo's own guidance surfaces from normal production capture.",
          "Keep direct-provider credentials limited to local development paths.",
        ],
      },
      {
        title: "What it demonstrates",
        paragraphs: [
          "Kairo crosses native desktop behavior, product interaction, backend APIs, data, billing, and AI providers without blurring their boundaries. The interesting work is not a model call; it is building a product system where contextual assistance stays responsive, inspectable, and respectful of user control.",
        ],
      },
    ],
  },
  {
    slug: "era",
    title: "era",
    eyebrow: "Ephemeral runtime agent",
    year: "2026",
    summary: "A personal agent orchestrator that turns Telegram requests into isolated coding runs and reviewable GitHub pull requests.",
    description: "How era orchestrates disposable Docker coding agents with budgets, GitHub pull requests, egress controls, approval gates, testing, cancellation, and backups.",
    stack: ["Go", "Docker", "SQLite", "GitHub Apps", "Telegram", "systemd"],
    repository: "https://github.com/vaibhav0806/era",
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Delegating a coding task is easy to demo and difficult to trust. A useful personal agent needs bounded cost, disposable execution, constrained credentials and networking, a durable task lifecycle, and an output that fits normal code review.",
          "era starts from that operational boundary. A request can arrive from Telegram, but the result must leave behind a branch and pull request that a human can inspect, approve, reject, or continue.",
        ],
      },
      {
        title: "System shape",
        paragraphs: [
          "A Go orchestrator persists task state in SQLite, accepts Telegram commands, claims queued work, and starts a fresh Docker container for every run. The runner clones the selected repository with a short-lived GitHub App token, executes the agent, tests the result, pushes a branch, and opens a pull request.",
          "The service runs continuously under systemd. CI validates formatting, vetting, race tests, builds, and smoke checks before deployment; local and offsite backups protect the task history and audit trail.",
        ],
      },
      {
        title: "Engineering decisions",
        paragraphs: [
          "Every task receives an explicit budget profile for iterations, cost, and wall-clock time. Container egress is allowlisted, repository access uses installation tokens rather than a broad personal token, and cancellation kills the running container while preserving a meaningful task state.",
        ],
        points: [
          "Scan diffs for removed tests, skipped checks, weakened assertions, and deleted test files.",
          "Require human approval for suspicious output and reflect the decision on the pull request.",
          "Run repository tests before committing when a supported test target is present.",
          "Keep progress, cost, completion summaries, and decisions in a durable audit log.",
        ],
      },
      {
        title: "What it demonstrates",
        paragraphs: [
          "era is an infrastructure project disguised as a Telegram bot. Its core is the control plane around an unreliable, expensive worker: lifecycle state, isolation, policy enforcement, credentials, review, deployment, and recovery. That is the part that lets an agent hold up outside a demo.",
        ],
      },
    ],
  },
  {
    slug: "dflow-sdk",
    title: "DFlow SDK",
    eyebrow: "TypeScript and Python SDK",
    year: "2026",
    summary: "A dual-language SDK for DFlow prediction markets and Solana trading, from market discovery to live data and transactions.",
    description: "How the DFlow SDK creates consistent TypeScript and Python clients for prediction-market data, WebSockets, Solana swaps, orders, signing, and positions.",
    stack: ["TypeScript", "Python", "REST", "WebSockets", "Solana"],
    repository: "https://github.com/vaibhav0806/dflow-sdk",
    live: { label: "Read the documentation", href: "https://dflow-sdk.vercel.app" },
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "DFlow exposes a broad prediction-market and trading surface: events, markets, orderbooks, trades, series, search, swaps, orders, intents, tokens, venues, and live updates. Integrators should not have to rebuild authentication, request handling, response models, and transaction utilities for every product and language.",
          "The SDK packages that surface behind one discoverable client in both TypeScript and Python, so an integration can move from reading a market to preparing a trade without switching abstractions.",
        ],
      },
      {
        title: "System shape",
        paragraphs: [
          "The top-level client groups APIs by domain and shares configuration, authentication, transport, and error behavior. Typed resource clients cover the REST surface, while WebSocket subscriptions deliver price, trade, and orderbook changes for applications that need live state.",
          "Trading helpers bridge API responses to Solana workflows such as quotes, swaps, transaction signing, positions, and redemption. The TypeScript and Python packages are distributed through npm and PyPI with parallel documentation and examples.",
        ],
      },
      {
        title: "Engineering decisions",
        paragraphs: [
          "The two implementations stay conceptually aligned while remaining idiomatic in their own ecosystems. TypeScript exposes typed asynchronous clients; Python uses familiar naming and data access. Domain boundaries remain visible instead of collapsing the API into a single generic request method.",
        ],
        points: [
          "Support single, list, search, and batch market operations without losing response types.",
          "Keep real-time subscriptions beside the REST resources they update.",
          "Expose signing and position helpers without hiding the underlying Solana transaction flow.",
          "Ship runnable quick starts for both package ecosystems.",
        ],
      },
      {
        title: "What it demonstrates",
        paragraphs: [
          "The SDK is developer infrastructure: the product is the boundary other engineers consume. It demonstrates API modeling, cross-language consistency, live data, transaction-oriented integrations, documentation, examples, and package distribution as one coherent developer experience.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
