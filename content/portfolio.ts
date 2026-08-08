export type WorkItem = { title: string; eyebrow: string; description: string; href?: string };
export type ExperienceItem = { company: string; role: string; period: string; detail?: string };

export const profile = {
  name: "Vaibhav Pandey",
  title: "Backend & Infrastructure Engineer",
  summary: "I build product infrastructure and resilient backend systems, from a team's first service to production-scale platforms.",
  now: "At CreateOS, I build infrastructure for AI execution that helps teams run, connect, and manage AI-powered workflows.",
};

export const links = {
  github: "https://github.com/vaibhav0806",
  linkedin: "https://linkedin.com/in/vaibhav0806",
  email: "mailto:vaibhav.pandey0806@gmail.com",
};

export const featuredWork: WorkItem[] = [
  { title: "CoinDCX Trade Report", eyebrow: "End-to-end product", description: "Built tax-ready crypto trade reports end to end, helping users receive reports in under a minute. The feature handled approximately 100,000 requests in its first week and 15,000–20,000 requests a day at peak." },
  { title: "Era", eyebrow: "Personal project", description: "An agent orchestration project built around turning requests into safe, reviewable development work.", href: "https://github.com/vaibhav0806/era" },
];

export const experience: ExperienceItem[] = [
  { company: "CreateOS", role: "Software Engineer", period: "Apr 2026 — Present", detail: profile.now },
  { company: "CoinDCX", role: "Engineering Intern → Associate Software Engineer", period: "Nov 2024 — Mar 2026" },
  { company: "Okto", role: "Software Engineer · Freelance", period: "Aug 2024 — Nov 2024" },
  { company: "Push Chain", role: "Intern → Integration & Ecosystem Intern", period: "Oct 2023 — Aug 2024" },
  { company: "Instadapp, vishwa.ai & Froker", role: "Workflow, Product & Software Engineering", period: "2023 — 2024" },
];
