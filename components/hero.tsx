import { links, profile } from "@/content/portfolio";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Reveal><h1>Backend engineer building systems that hold up.</h1></Reveal>
      <Reveal className="hero-details" delay={0.05}>
        <p className="hero-intro">{profile.summary}</p>
        <div className="hero-now">
          <p>{profile.now}</p>
          <p>Open to backend, FDE, DevRel, and ambitious technical teams.</p>
        </div>
      </Reveal>
      <Reveal className="text-links" delay={0.1}>
        <a href={links.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
        <a href={links.email}>Email <span>↗</span></a>
      </Reveal>
    </section>
  );
}
