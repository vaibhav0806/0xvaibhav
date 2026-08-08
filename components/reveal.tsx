import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const classes = ["scroll-reveal", className].filter(Boolean).join(" ");
  const style = { "--reveal-delay": `${delay}s` } as CSSProperties;

  return as === "section" ? <section className={classes} style={style}>{children}</section> : <div className={classes} style={style}>{children}</div>;
}
