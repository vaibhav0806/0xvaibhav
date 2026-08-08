import { Contact } from "@/components/contact";
import { ExperienceList } from "@/components/experience-list";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { WorkCard } from "@/components/work-card";
import { featuredWork } from "@/content/portfolio";

export default function Home() {
  return (
    <main>
      <div className="shell">
        <SiteHeader />
        <Hero />
        <section id="work" className="chapter">
          <div className="chapter-heading"><h2>Selected work</h2><p>Systems, products, and experiments I&apos;ve taken from idea to reality.</p></div>
          <div className="work-list">{featuredWork.map((work, index) => <WorkCard key={work.title} work={work} index={index} />)}</div>
        </section>
        <section id="experience" className="chapter experience">
          <div className="chapter-heading"><h2>Experience</h2><p>A fast-moving path through product engineering, crypto, and AI infrastructure.</p></div>
          <ExperienceList />
        </section>
        <Contact />
      </div>
      <nav className="dock" aria-label="Portfolio navigation">
        <a href="#top">Home</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
      </nav>
    </main>
  );
}
