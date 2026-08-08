"use client";

import type { WorkItem } from "@/content/portfolio";
import { motion, useReducedMotion } from "motion/react";

export function ProjectRow({ work, index }: { work: WorkItem; index: number }) {
  const reduceMotion = useReducedMotion();
  const content = (
    <>
      <div className="work-index">0{index + 1}</div>
      <div className="work-title">
        <p>{work.eyebrow}</p>
        <h3>{work.title}</h3>
      </div>
      <p className="work-description">{work.description}</p>
      <span className="work-arrow" aria-hidden="true">↗</span>
      <span className="project-preview" aria-hidden="true">{index === 0 ? "100K" : "ERA"}</span>
    </>
  );

  if (reduceMotion) {
    return (
      <article className="work-row">
        {work.href ? <a href={work.href} target="_blank" rel="noreferrer" aria-label={`View ${work.title} on GitHub`}>{content}</a> : <div>{content}</div>}
      </article>
    );
  }

  return (
    <motion.article
      className="work-row"
      initial={{ opacity: 0, transform: "translateY(16px)" }}
      whileInView={{ opacity: 1, transform: "none" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
    >
      {work.href ? (
        <a href={work.href} target="_blank" rel="noreferrer" aria-label={`View ${work.title} on GitHub`}>{content}</a>
      ) : (
        <div>{content}</div>
      )}
    </motion.article>
  );
}
