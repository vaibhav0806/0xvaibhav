import type { WorkItem } from "@/content/portfolio";
import type { CSSProperties } from "react";

export function ProjectRow({ work, index }: { work: WorkItem; index: number }) {
  const content = (
    <>
      <div className="work-index">0{index + 1}</div>
      <div className="work-title">
        <p>{work.eyebrow}</p>
        <h3>{work.title}</h3>
      </div>
      <p className="work-description">{work.description}</p>
      {work.href && <span className="work-arrow" aria-hidden="true">↗</span>}
      <span className="project-preview" aria-hidden="true">{index === 0 ? "100K" : "ERA"}</span>
    </>
  );

  return (
    <article className="work-row scroll-reveal" style={{ "--reveal-delay": `${index * 0.05}s` } as CSSProperties}>
      {work.href ? (
        <a href={work.href} target="_blank" rel="noreferrer" aria-label={`View ${work.title} on GitHub`}>{content}</a>
      ) : (
        <div>{content}</div>
      )}
    </article>
  );
}
