import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "@/app/page";

test("leads with the approved compact positioning", () => {
  render(<Home />);
  expect(screen.getByText("Vaibhav Pandey")).toBeVisible();
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Backend Engineer & Infrastructure Builder.",
    }),
  ).toBeVisible();
  expect(screen.getByRole("img", { name: "Vaibhav Pandey" })).toBeVisible();
  expect(screen.getByRole("heading", { level: 2, name: "About" })).toBeVisible();
  expect(screen.getByRole("heading", { level: 2, name: "Featured work" })).toBeVisible();
  expect(screen.getByRole("navigation", { name: "Portfolio navigation" })).toBeVisible();
  expect(document.querySelector(".hero-shader")).not.toBeNull();
  expect(screen.getByRole("link", { name: /book a call/i })).toHaveAttribute("href", "https://cal.com/vaibhav0806/30min");
});

test("shows the approved public project archive and a direct contact link", () => {
  render(<Home />);
  expect(screen.getAllByRole("article")).toHaveLength(11);
  expect(screen.getByRole("heading", { name: "Kairo" })).toBeVisible();
  expect(screen.getByRole("heading", { name: "Prophet" })).toBeVisible();
  expect(screen.getByRole("heading", { name: "DFlow SDK" })).toBeVisible();
  expect(screen.getByRole("heading", { name: "Cloak" })).toBeVisible();
  expect(screen.getByRole("heading", { name: "PermaSign" })).toBeVisible();
  expect(screen.getByRole("heading", { name: "Beacon" })).toBeVisible();
  expect(screen.getByRole("heading", { name: "SEO Workflow" })).toBeVisible();
  expect(screen.getByRole("heading", { name: "Pixel Tamagotchi" })).toBeVisible();
  expect(screen.getByRole("heading", { name: "Tech Digest" })).toBeVisible();
  expect(screen.getByRole("heading", { name: "Coduel" })).toBeVisible();
  expect(screen.queryByRole("heading", { name: "Git Wrapped" })).not.toBeInTheDocument();
  const era = screen.getByRole("heading", { name: "era" }).closest("article");
  expect(era).not.toBeNull();
  expect(within(era!).getByText("ephemeral runtime agent")).toBeVisible();
  expect(within(era!).getByRole("link")).toHaveAttribute("href", "/work/era");
  expect(screen.getByRole("link", { name: /email vaibhav/i })).toHaveAttribute("href", "mailto:vaibhav.pandey0806@gmail.com");
});

test("keeps Kairo first in featured work", () => {
  render(<Home />);
  const [firstProject] = screen.getAllByRole("article");

  expect(within(firstProject).getByRole("heading", { name: "Kairo" })).toBeVisible();
});

test("links flagship projects to internal case studies", () => {
  render(<Home />);
  const caseStudyLinks = [
    ["Kairo", "/work/kairo"],
    ["era", "/work/era"],
    ["DFlow SDK", "/work/dflow-sdk"],
  ];

  for (const [title, href] of caseStudyLinks) {
    const project = screen.getByRole("heading", { name: title }).closest("article");
    expect(project).not.toBeNull();
    expect(within(project!).getByRole("link")).toHaveAttribute("href", href);
  }
});

test("links Kairo from the about section", () => {
  render(<Home />);

  expect(screen.getByRole("link", { name: "Kairo" })).toHaveAttribute("href", "https://meetkairo.xyz");
});

test("positions and links PermaSign", () => {
  render(<Home />);
  const permaSign = screen.getByRole("heading", { name: "PermaSign" }).closest("article");
  expect(permaSign).not.toBeNull();
  expect(within(permaSign!).getByText("Web3-native document signing")).toBeVisible();
  expect(within(permaSign!).getByRole("link")).toHaveAttribute(
    "href",
    "https://github.com/Prasad-178/PermaSign",
  );
});

test("keeps CoinDCX in experience instead of featured work", () => {
  render(<Home />);
  expect(screen.queryByRole("heading", { name: "CoinDCX Trade Report" })).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "CoinDCX" })).toHaveAttribute("href", "https://coindcx.com");
});

test("links and expands every experience company", () => {
  render(<Home />);
  const experience = screen.getByRole("list", { name: "Experience" });
  const companies = [
    ["CreateOS", "https://createos.sh"],
    ["CoinDCX", "https://coindcx.com"],
    ["Okto", "https://okto.tech"],
    ["Push Chain", "https://push.org"],
    ["Instadapp", "https://instadapp.io"],
    ["vishwa.ai", "https://vishwa.ai"],
  ];

  for (const [name, href] of companies) {
    expect(within(experience).getByRole("link", { name })).toHaveAttribute("href", href);
  }

  expect(screen.getByText("Workflow Engineer")).toBeVisible();
  expect(screen.getByText("Product Engineering Intern")).toBeVisible();
  expect(within(experience).queryByRole("link", { name: "Froker" })).not.toBeInTheDocument();
  expect(experience.querySelectorAll(".experience-logo")).toHaveLength(companies.length);
});

test("moves one shared highlight through featured work", () => {
  render(<Home />);
  const era = screen.getByRole("heading", { name: "era" }).closest("article");
  const kairo = screen.getByRole("heading", { name: "Kairo" }).closest("article");

  fireEvent.mouseEnter(era!);
  expect(document.querySelectorAll(".work-hover-bg")).toHaveLength(1);
  expect(era!.querySelector(".work-hover-bg")).not.toBeNull();

  fireEvent.mouseEnter(kairo!);
  expect(kairo!.querySelector(".work-hover-bg")).not.toBeNull();
  expect(document.querySelectorAll(".work-hover-bg")).toHaveLength(1);
});

test("shows the evidenced technical breadth in grouped skills", () => {
  render(<Home />);
  expect(screen.getByText("Languages")).toBeVisible();
  expect(screen.getByText("Backend & APIs")).toBeVisible();
  expect(screen.getByText("Data & Infra")).toBeVisible();
  expect(screen.getByText("Web3")).toBeVisible();
  expect(screen.getByText("Systems")).toBeVisible();

  for (const skill of ["TypeScript", "Rust", "Redis", "MongoDB", "WebSockets", "Solana", "Observability"]) {
    expect(screen.getByText(skill)).toBeVisible();
  }
});

test("stays dark-only and exposes accessible dock links", () => {
  render(<Home />);
  expect(screen.queryByRole("button", { name: /theme/i })).not.toBeInTheDocument();

  const navigation = screen.getByRole("navigation", { name: "Portfolio navigation" });
  expect(within(navigation).getByRole("link", { name: "Home" })).toHaveAttribute("href", "#top");
  expect(within(navigation).getByRole("link", { name: "Work" })).toHaveAttribute("href", "#work");
  expect(within(navigation).getByRole("link", { name: "X" })).toHaveAttribute("href", "https://x.com/ig_vaibhav1");
  expect(within(navigation).getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
});
