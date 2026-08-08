import type { WorkItem } from "@/content/portfolio";
export function WorkCard({ work }: { work: WorkItem }) { const content = <><p className="eyebrow">{work.eyebrow}</p><h3>{work.title}</h3><p>{work.description}</p></>; return <article className="work-card">{work.href ? <a href={work.href} target="_blank" rel="noreferrer">{content}</a> : content}</article>; }
