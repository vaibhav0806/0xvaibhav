import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "@/app/page";

test("shows Vaibhav Pandey in the portfolio hero", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1, name: /vaibhav pandey/i })).toBeVisible();
});
