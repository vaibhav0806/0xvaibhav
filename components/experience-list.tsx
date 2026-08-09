import { experience } from "@/content/portfolio";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function ExperienceList() {
  return (
    <ol className="experience-list" aria-label="Experience">
      {experience.map((item) => (
        <li key={item.company}>
          <a href={item.href} target="_blank" rel="noreferrer">
            <Image
              className="experience-logo"
              src={item.logo}
              width={24}
              height={24}
              alt=""
              aria-hidden="true"
            />
            <strong>{item.company}</strong>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <span>{item.role}</span>
          <time>{item.period}</time>
        </li>
      ))}
    </ol>
  );
}
