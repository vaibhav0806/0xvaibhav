import { Contact } from "@/components/contact";
import { ExperienceList } from "@/components/experience-list";
import { FeaturedWork } from "@/components/featured-work";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { links, profile, stack } from "@/content/portfolio";
import { Code, EnvelopeSimple, GithubLogo, House, LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main id="top">
      <div className="edge-blur edge-blur-top" aria-hidden="true"><span /><span /><span /></div>
      <nav className="dock" aria-label="Portfolio navigation">
        <a href="#top" aria-label="Home" data-tooltip="Home"><House weight="bold" /></a>
        <a href="#work" aria-label="Work" data-tooltip="Work"><Code weight="bold" /></a>
        <span className="dock-separator" aria-hidden="true" />
        <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub"><GithubLogo weight="bold" /></a>
        <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn"><LinkedinLogo weight="bold" /></a>
        <a href={links.twitter} target="_blank" rel="noreferrer" aria-label="X" data-tooltip="X"><XLogo weight="bold" /></a>
        <a href="#contact" aria-label="Contact" data-tooltip="Contact"><EnvelopeSimple weight="bold" /></a>
      </nav>
      <div className="shell">
        <SiteHeader />
        <Hero />
        <section className="about chapter" id="about">
          <Reveal><h2>About</h2></Reveal>
          <Reveal className="about-copy" delay={0.04}>
            <p>I&apos;m a backend engineer who likes taking systems from first principles to production. I care about clear boundaries, predictable failure modes, and software that stays understandable as it grows.</p>
            <p>
              At <a className="current-company" href="https://createos.sh" target="_blank" rel="noreferrer">CreateOS</a>, {profile.now}
            </p>
            <p>
              I&apos;m currently building <a className="current-company" href="https://meetkairo.xyz" target="_blank" rel="noreferrer">Kairo</a>, a screen-native AI tutor that turns voice and screen context into visual guidance.
            </p>
          </Reveal>
          <Reveal delay={0.08}><ExperienceList /></Reveal>
        </section>
        <section id="work" className="chapter">
          <Reveal className="chapter-heading"><h2>Featured work</h2></Reveal>
          <FeaturedWork />
        </section>
        <section className="stack chapter" id="stack">
          <Reveal><h2>Stack</h2></Reveal>
          <Reveal className="stack-groups" delay={0.04}>
            {stack.map((group) => (
              <div className="stack-group" key={group.label}>
                <h3>{group.label}</h3>
                <div className="stack-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </Reveal>
        </section>
        <Contact />
      </div>
      <div className="edge-blur edge-blur-bottom" aria-hidden="true"><span /><span /><span /></div>
    </main>
  );
}
