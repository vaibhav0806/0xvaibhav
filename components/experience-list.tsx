import { experience } from "@/content/portfolio";

export function ExperienceList() {
  return (
    <ol className="experience-list">
      {experience.map((item) => (
        <li key={item.company}>
          <strong>{item.company}</strong>
          <span>{item.role}</span>
          <time>{item.period}</time>
        </li>
      ))}
    </ol>
  );
}
