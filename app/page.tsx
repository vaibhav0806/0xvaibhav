import { Contact } from "@/components/contact";
import { ExperienceList } from "@/components/experience-list";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { WorkCard } from "@/components/work-card";
import { featuredWork } from "@/content/portfolio";

export default function Home() {
  return <main><div className="shell"><SiteHeader /><Hero /><section id="work"><p className="eyebrow">Selected work</p><h2>Built for real constraints.</h2><div className="work-grid">{featuredWork.map((work) => <WorkCard key={work.title} work={work} />)}</div></section><section id="experience"><p className="eyebrow">Experience</p><h2>Building in public and in production.</h2><ExperienceList /></section><Contact /></div></main>;
}
