import { metadata } from "@/app/layout";
import Home from "@/app/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
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
  expect(sitemap()).toEqual([{ url: "https://www.0xvaibhav.com" }]);
});
