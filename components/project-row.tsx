import type { WorkItem } from "@/content/portfolio";

type ProjectRowProps = {
  work: WorkItem;
};

export function ProjectRow({ work }: ProjectRowProps) {
  const primaryHref = work.caseStudy ?? work.href;
  const isExternal = primaryHref?.startsWith("http");
  const content = (
    <>
      <div className="work-heading">
        <div className="work-title">
          <h3>{work.title}</h3>
          <span>{work.eyebrow}</span>
        </div>
        <div className="work-actions">
          <time>{work.period}</time>
          {primaryHref && <span className="work-arrow" aria-hidden="true">↗</span>}
        </div>
      </div>
      <p className="work-description">{work.description}</p>
      <p className="work-stack">{work.stack.join(" / ")}</p>
    </>
  );

  return (
    <article className="work-row">
      {primaryHref ? (
        <a href={primaryHref} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>{content}</a>
      ) : (
        <div>{content}</div>
      )}
    </article>
  );
}
