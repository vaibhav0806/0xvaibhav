import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { createElement } from "react";
import { afterEach, vi } from "vitest";

process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN = "pk_test";

vi.mock("@paper-design/shaders-react", () => ({
  MeshGradient: () => createElement("canvas", { "data-testid": "hero-shader-canvas" }),
}));

afterEach(() => cleanup());

if (typeof window !== "undefined") {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: query.includes("prefers-reduced-motion"),
      media: query,
      onchange: null,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      addListener: () => undefined,
      removeListener: () => undefined,
      dispatchEvent: () => true,
    }),
  });
}
