import { experience } from "@/content/portfolio";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function ExperienceList() {
  const logoDevToken = process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN;

  return (
    <ol className="experience-list" aria-label="Experience">
      {experience.map((item) => (
        <li key={item.company}>
          <a href={item.href} target="_blank" rel="noreferrer">
            {logoDevToken ? (
              <Image
                className="experience-logo"
                src={`https://img.logo.dev/${new URL(item.href).hostname}?token=${logoDevToken}&size=48&format=webp&greyscale=true&theme=dark&retina=true`}
                width={24}
                height={24}
                alt=""
                aria-hidden="true"
                referrerPolicy="origin"
                unoptimized
              />
            ) : null}
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
