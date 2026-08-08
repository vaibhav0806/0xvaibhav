export type WorkItem = { title: string; eyebrow: string; period: string; description: string; stack: string[]; href?: string };
export type ExperienceItem = { company: string; role: string; period: string; href: string };

export const profile = {
  name: "Vaibhav Pandey",
  title: "Backend & Infrastructure Engineer",
  summary: "I build secure, scalable backend systems and product infrastructure. Mostly with Go, Node.js, and Python.",
  now: "I build the infrastructure behind AI execution, from agent runtimes and integrations to the control plane teams use to run workflows in production.",
};

export const links = {
  github: "https://github.com/vaibhav0806",
  linkedin: "https://linkedin.com/in/vaibhav0806",
  twitter: "https://x.com/ig_vaibhav1",
  cal: "https://cal.com/vaibhav0806/30min",
  email: "mailto:vaibhav.pandey0806@gmail.com",
};

export const featuredWork: WorkItem[] = [
  { title: "Kairo", eyebrow: "AI product", period: "2026", description: "A screen-native macOS AI tutor that turns voice and screen context into visual guidance while keeping provider keys server-side.", stack: ["TypeScript", "Rust", "Fastify", "PostgreSQL"], href: "https://github.com/vaibhav0806/kairo-tutor" },
  { title: "era", eyebrow: "ephemeral runtime agent", period: "2026", description: "A personal agent orchestrator that turns Telegram tasks into sandboxed, budgeted coding runs and GitHub pull requests.", stack: ["Go", "Docker", "SQLite", "GitHub Apps"], href: "https://github.com/vaibhav0806/era" },
  { title: "Prophet", eyebrow: "Trading agent", period: "2026", description: "An autonomous agent that finds and executes delta-neutral arbitrage across three BNB Chain prediction-market order books.", stack: ["TypeScript", "Hono", "Solidity", "MCP"], href: "https://github.com/vaibhav0806/prophet" },
  { title: "DFlow SDK", eyebrow: "Developer SDK", period: "2026", description: "A published TypeScript and Python SDK for DFlow prediction markets on Solana, with typed clients, live data, swaps, and transaction helpers.", stack: ["TypeScript", "Python", "WebSockets", "Solana"], href: "https://github.com/vaibhav0806/dflow-sdk" },
  { title: "Cloak", eyebrow: "Privacy product", period: "2026", description: "A privacy-preserving Solana DCA app that separates deposits from scheduled trades through a shielded pool and session wallets.", stack: ["Next.js", "PostgreSQL", "Solana", "Zero-knowledge"], href: "https://github.com/vaibhav0806/cloak-dca" },
  { title: "SEO Workflow", eyebrow: "Agent workflow", period: "2026", description: "A Go workflow that diagnoses indexing problems, studies competitor patterns, and prepares reviewable SEO fixes as GitHub pull requests.", stack: ["Go", "Google Search Console", "GitHub API", "OpenRouter"], href: "https://github.com/vaibhav0806/seo-workflow" },
  { title: "Beacon", eyebrow: "Local-first tool", period: "2026", description: "A startup outreach workspace that scores fit, verifies contacts, drafts tailored emails, and tracks approval-based sending and follow-ups.", stack: ["TypeScript", "SQLite", "Resend", "YC data"], href: "https://github.com/vaibhav0806/beacon" },
  { title: "PermaSign", eyebrow: "Web3-native document signing", period: "2025", description: "A cryptographic document-signing workspace using Arweave for permanent records and wallet-backed verification.", stack: ["Next.js", "TypeScript", "Arweave", "Google Cloud KMS"], href: "https://github.com/Prasad-178/PermaSign" },
  { title: "Pixel Tamagotchi", eyebrow: "Developer tool", period: "2026", description: "A local terminal pet that tracks Git commits through a post-commit hook and changes mood when coding activity drops.", stack: ["Go", "Cobra", "Bubble Tea", "Homebrew"], href: "https://github.com/vaibhav0806/pixel-tamagotchi" },
  { title: "Tech Digest", eyebrow: "Content pipeline", period: "2026", description: "A deployed feed that aggregates Hacker News and Product Hunt, persists anonymous bookmarks, and publishes a daily Telegram digest.", stack: ["Python", "FastAPI", "SQLite", "Telegram"], href: "https://github.com/vaibhav0806/tech-digest" },
  { title: "Coduel", eyebrow: "Realtime mobile", period: "2026", description: "A realtime 1v1 coding game with matchmaking, timed rounds, rating tiers, streaks, and bot fallback when no opponent is available.", stack: ["React Native", "Expo", "Supabase", "Deno"], href: "https://github.com/vaibhav0806/coduel" },
];

export const experience: ExperienceItem[] = [
  { company: "CreateOS", role: "Software Engineer", period: "Apr 2026 - Present", href: "https://createos.sh" },
  { company: "CoinDCX", role: "Engineering Intern to Associate Software Engineer", period: "Nov 2024 - Mar 2026", href: "https://coindcx.com" },
  { company: "Okto", role: "Software Engineer, Freelance", period: "Aug 2024 - Nov 2024", href: "https://okto.tech" },
  { company: "Push Chain", role: "Integration and Ecosystem Intern", period: "Oct 2023 - Aug 2024", href: "https://push.org" },
  { company: "Instadapp", role: "Workflow Engineer", period: "Mar 2024 - Apr 2024", href: "https://instadapp.io" },
  { company: "vishwa.ai", role: "Product Engineering Intern", period: "Oct 2023 - Dec 2023", href: "https://vishwa.ai" },
  { company: "Froker", role: "SDE Intern", period: "Feb 2023 - Apr 2023", href: "https://froker.in" },
];

export const stack = [
  { label: "Languages", skills: ["Go", "TypeScript", "Python", "JavaScript", "Rust", "Solidity"] },
  { label: "Backend & APIs", skills: ["Node.js", "Gin", "Express", "Fastify", "REST APIs", "WebSockets"] },
  { label: "Data & Infra", skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Linux", "Git"] },
  { label: "Web3", skills: ["Ethereum", "Solana", "Smart Contracts", "Foundry", "Hardhat", "Privy"] },
  { label: "Systems", skills: ["Distributed Systems", "System Design", "Microservices", "Observability", "Developer Tooling"] },
];
