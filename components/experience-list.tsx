import { experience } from "@/content/portfolio";
export function ExperienceList() { return <ol className="experience-list">{experience.map((item) => <li key={item.company}><div><strong>{item.company}</strong><span>{item.role}</span>{item.detail && <p>{item.detail}</p>}</div><time>{item.period}</time></li>)}</ol>; }
