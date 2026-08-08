import { links, profile } from "@/content/portfolio";
import { HeroShader } from "@/components/hero-shader";
import { Reveal } from "@/components/reveal";
import type { CSSProperties } from "react";

export function Hero() {
  const firstLine = ["Backend", "Engineer"];
  const secondLine = ["&", "Infrastructure", "Builder."];

  return (
    <section className="hero">
      <HeroShader />
      <h1 aria-label="Backend Engineer & Infrastructure Builder.">
        <span className="hero-line">
          {firstLine.map((word, index) => <span className="hero-word" style={{ "--word-index": index } as CSSProperties} key={word}>{word}</span>)}
        </span>
        <span className="hero-line hero-line-muted">
          {secondLine.map((word, index) => <span className="hero-word" style={{ "--word-index": index + firstLine.length } as CSSProperties} key={word}>{word}</span>)}
        </span>
      </h1>
      <Reveal className="hero-intro" delay={0.34}>
        <p>{profile.summary}</p>
      </Reveal>
      <Reveal className="hero-actions" delay={0.42}>
        <a className="button button-primary" href={links.email}>Email me <span aria-hidden="true">↗</span></a>
        <a className="button" href={links.cal} target="_blank" rel="noreferrer">Book a call <span aria-hidden="true">↗</span></a>
      </Reveal>
    </section>
  );
}
