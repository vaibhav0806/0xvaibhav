import { site } from "@/content/portfolio";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url }];
}
