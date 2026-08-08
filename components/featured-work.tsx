"use client";

import { ProjectRow } from "@/components/project-row";
import { featuredWork } from "@/content/portfolio";
import { LayoutGroup, useReducedMotion } from "motion/react";
import { type FocusEvent, useId, useState } from "react";

export function FeaturedWork() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const groupId = useId();
  const reduceMotion = useReducedMotion();

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActiveProject(null);
    }
  };

  return (
    <LayoutGroup id={groupId}>
      <div className="work-list" onMouseLeave={() => setActiveProject(null)} onBlur={handleBlur}>
        {featuredWork.map((work) => (
          <ProjectRow
            key={work.title}
            work={work}
            active={activeProject === work.title}
            reduceMotion={Boolean(reduceMotion)}
            onActivate={() => setActiveProject(work.title)}
          />
        ))}
      </div>
    </LayoutGroup>
  );
}
