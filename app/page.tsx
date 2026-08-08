import { Contact } from "@/components/contact";
import { ExperienceList } from "@/components/experience-list";
import { Hero } from "@/components/hero";
import { ProjectRow } from "@/components/project-row";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { featuredWork } from "@/content/portfolio";

export default function Home() {
  return (
    <main>
      <div className="shell">
        <SiteHeader />
        <Hero />
        <section id="work" className="chapter">
          <Reveal className="chapter-heading"><h2>Selected work</h2><p>Systems, products, and experiments I&apos;ve taken from idea to reality.</p></Reveal>
          <div className="work-list">{featuredWork.map((work, index) => <ProjectRow key={work.title} work={work} index={index} />)}</div>
        </section>
        <section id="experience" className="chapter experience">
          <Reveal className="chapter-heading"><h2>Experience</h2><p>A fast-moving path through product engineering, crypto, and AI infrastructure.</p></Reveal>
          <Reveal><ExperienceList /></Reveal>
        </section>
        <Contact />
      </div>
      <nav className="dock" aria-label="Portfolio navigation">
        <a href="#top">Home</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
      </nav>
    </main>
  );
}
