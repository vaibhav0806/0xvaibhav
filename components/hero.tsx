import { links, profile } from "@/content/portfolio";

export function Hero() {
  return (
    <section className="hero" id="top">
      <h1>Backend engineer building systems that hold up.</h1>
      <div className="hero-details">
        <p className="hero-intro">{profile.summary}</p>
        <div className="hero-now">
          <p>{profile.now}</p>
          <p>Open to backend, FDE, DevRel, and ambitious technical teams.</p>
        </div>
      </div>
      <div className="text-links" aria-label="Social links">
        <a href={links.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
        <a href={links.email}>Email <span>↗</span></a>
      </div>
    </section>
  );
}
