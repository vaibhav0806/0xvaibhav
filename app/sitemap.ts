import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/portfolio";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url },
    ...caseStudies.map(({ slug }) => ({ url: `${site.url}/work/${slug}` })),
  ];
}
