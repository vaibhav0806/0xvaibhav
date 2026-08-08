"use client";

import type { WorkItem } from "@/content/portfolio";
import { motion } from "motion/react";

type ProjectRowProps = {
  work: WorkItem;
  active: boolean;
  reduceMotion: boolean;
  onActivate: () => void;
};

export function ProjectRow({ work, active, reduceMotion, onActivate }: ProjectRowProps) {
  const content = (
    <>
      <div className="work-heading">
        <div className="work-title">
          <h3>{work.title}</h3>
          <span>{work.eyebrow}</span>
        </div>
        <div className="work-actions">
          <time>{work.period}</time>
          {work.href && <span className="work-arrow" aria-hidden="true">↗</span>}
        </div>
      </div>
      <p className="work-description">{work.description}</p>
      <p className="work-stack">{work.stack.join(" / ")}</p>
    </>
  );

  return (
    <article className="work-row" onMouseEnter={onActivate} onFocus={onActivate}>
      {active && (
        <motion.div
          className="work-hover-bg"
          layoutId="featured-work-hover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 32, mass: 0.6 }}
          aria-hidden="true"
        />
      )}
      {work.href ? (
        <a href={work.href} target="_blank" rel="noreferrer" aria-label={`View ${work.title} on GitHub`}>{content}</a>
      ) : (
        <div>{content}</div>
      )}
    </article>
  );
}
