import { PortfolioDock } from "@/components/portfolio-dock";
import { SiteHeader } from "@/components/site-header";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { site } from "@/content/portfolio";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) return {};

  const canonical = `/work/${caseStudy.slug}`;

  return {
    title: caseStudy.eyebrow === "Ephemeral runtime agent"
      ? "era: Ephemeral Runtime Agent"
      : caseStudy.slug === "kairo"
        ? "Kairo: Screen-native AI Tutor"
        : "DFlow SDK for TypeScript and Python",
    description: caseStudy.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: caseStudy.title,
      description: caseStudy.description,
      siteName: "Vaibhav Pandey",
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.description,
      creator: "@ig_vaibhav1",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  return (
    <main id="top">
      <div className="edge-blur edge-blur-top" aria-hidden="true"><span /><span /><span /></div>
      <PortfolioDock homeHref="/" workHref="/#work" />
      <div className="shell case-study-shell">
        <SiteHeader homeHref="/" />
        <article className="case-study">
          <Link className="case-study-back" href="/#work">← Featured work</Link>
          <header className="case-study-header">
            <p className="case-study-kicker">{caseStudy.eyebrow} <span>/</span> <time dateTime={caseStudy.year}>{caseStudy.year}</time></p>
            <h1>{caseStudy.title}</h1>
            <p className="case-study-summary">{caseStudy.summary}</p>
            <ul className="case-study-stack" aria-label="Technology stack">
              {caseStudy.stack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <div className="case-study-actions">
              {caseStudy.live ? <a href={caseStudy.live.href} target="_blank" rel="noreferrer">{caseStudy.live.label} <span aria-hidden="true">↗</span></a> : null}
              <a href={caseStudy.repository} target="_blank" rel="noreferrer">View source <span aria-hidden="true">↗</span></a>
            </div>
          </header>

          <div className="case-study-sections">
            {caseStudy.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <div>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.points ? (
                    <ul>
                      {section.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>

          <footer className="case-study-footer">
            <Link href="/#work">More featured work</Link>
            <a href={site.url}>0xvaibhav.com</a>
          </footer>
        </article>
      </div>
      <div className="edge-blur edge-blur-bottom" aria-hidden="true"><span /><span /><span /></div>
    </main>
  );
}
