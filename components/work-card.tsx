import type { WorkItem } from "@/content/portfolio";

export function WorkCard({ work, index }: { work: WorkItem; index: number }) {
  const content = (
    <>
      <div className="work-index">0{index + 1}</div>
      <div className="work-title">
        <p>{work.eyebrow}</p>
        <h3>{work.title}</h3>
      </div>
      <p className="work-description">{work.description}</p>
      <span className="work-arrow" aria-hidden="true">↗</span>
    </>
  );

  return (
    <article className="work-row">
      {work.href ? <a href={work.href} target="_blank" rel="noreferrer">{content}</a> : <div>{content}</div>}
    </article>
  );
}
