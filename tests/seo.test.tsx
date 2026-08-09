import { metadata } from "@/app/layout";
import {
  alt as openGraphAlt,
  contentType as openGraphContentType,
  size as openGraphSize,
} from "@/app/opengraph-image";
import Home from "@/app/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import CaseStudyPage, {
  generateMetadata as generateCaseStudyMetadata,
} from "@/app/work/[slug]/page";
import { caseStudies } from "@/content/case-studies";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";

test("publishes canonical homepage metadata", () => {
  expect(metadata.metadataBase?.toString()).toBe("https://www.0xvaibhav.com/");
  expect(metadata.alternates?.canonical).toBe("/");
  expect(metadata.title).toMatchObject({
    default: "Vaibhav Pandey | Backend Engineer & Infrastructure Builder",
  });
  expect(metadata.description).toHaveLength(152);
  expect(metadata.openGraph).toMatchObject({ type: "profile", url: "/" });
  expect(metadata.twitter).toMatchObject({
    card: "summary_large_image",
    creator: "@ig_vaibhav1",
  });
});

test("server-renders valid profile JSON-LD", () => {
  render(<Home />);
  const script = document.querySelector('script[type="application/ld+json"]');

  expect(script).not.toBeNull();
  const data = JSON.parse(script!.textContent!);
  expect(data["@graph"]).toEqual(expect.arrayContaining([
    expect.objectContaining({
      "@type": "WebSite",
      url: "https://www.0xvaibhav.com",
    }),
    expect.objectContaining({
      "@type": "ProfilePage",
      mainEntity: { "@id": "https://www.0xvaibhav.com/#person" },
    }),
    expect.objectContaining({
      "@type": "Person",
      name: "Vaibhav Pandey",
    }),
  ]));
});

test("publishes crawl discovery routes", () => {
  expect(robots()).toMatchObject({
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.0xvaibhav.com/sitemap.xml",
    host: "https://www.0xvaibhav.com",
  });
  expect(sitemap()[0]).toEqual({ url: "https://www.0xvaibhav.com" });
});

test("publishes a large social preview image", () => {
  expect(openGraphSize).toEqual({ width: 1200, height: 630 });
  expect(openGraphAlt).toBe(
    "Vaibhav Pandey, Backend Engineer and Infrastructure Builder",
  );
  expect(openGraphContentType).toBe("image/png");
});

test("publishes three indexable project case studies", async () => {
  expect(caseStudies.map(({ slug }) => slug)).toEqual([
    "kairo",
    "era",
    "dflow-sdk",
  ]);
  expect(sitemap().map(({ url }) => url)).toEqual([
    "https://www.0xvaibhav.com",
    "https://www.0xvaibhav.com/work/kairo",
    "https://www.0xvaibhav.com/work/era",
    "https://www.0xvaibhav.com/work/dflow-sdk",
  ]);

  const titles = await Promise.all(caseStudies.map(async ({ slug }) => {
    const metadata = await generateCaseStudyMetadata({
      params: Promise.resolve({ slug }),
    });
    return metadata.title;
  }));
  expect(new Set(titles).size).toBe(3);

  const page = await CaseStudyPage({
    params: Promise.resolve({ slug: "kairo" }),
  });
  render(page);
  expect(document.querySelectorAll("h1")).toHaveLength(1);
  expect(document.querySelectorAll("h2").length).toBeGreaterThanOrEqual(3);
});
