import { links } from "@/content/portfolio";
import { Code, EnvelopeSimple, GithubLogo, House, LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr";

type PortfolioDockProps = {
  homeHref?: string;
  workHref?: string;
};

export function PortfolioDock({ homeHref = "#top", workHref = "#work" }: PortfolioDockProps) {
  return (
    <nav className="dock" aria-label="Portfolio navigation">
      <a href={homeHref} aria-label="Home" data-tooltip="Home"><House weight="bold" /></a>
      <a href={workHref} aria-label="Work" data-tooltip="Work"><Code weight="bold" /></a>
      <span className="dock-separator" aria-hidden="true" />
      <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub"><GithubLogo weight="bold" /></a>
      <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn"><LinkedinLogo weight="bold" /></a>
      <a href={links.twitter} target="_blank" rel="noreferrer" aria-label="X" data-tooltip="X"><XLogo weight="bold" /></a>
      <a href={`${homeHref === "#top" ? "" : "/"}#contact`} aria-label="Contact" data-tooltip="Contact"><EnvelopeSimple weight="bold" /></a>
    </nav>
  );
}
