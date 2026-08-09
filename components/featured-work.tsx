import { ProjectRow } from "@/components/project-row";
import { featuredWork } from "@/content/portfolio";

export function FeaturedWork() {
  return (
    <div className="work-list">
      {featuredWork.map((work) => <ProjectRow key={work.title} work={work} />)}
    </div>
  );
}
