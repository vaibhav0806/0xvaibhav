// @vitest-environment node

import Home from "@/app/page";
import { renderToString } from "react-dom/server";
import { expect, test } from "vitest";

test("keeps portfolio content visible in server-rendered HTML", () => {
  const html = renderToString(<Home />);
  expect(html).not.toContain("opacity:0");
  expect(html).not.toContain("translateY(16px)");
});
