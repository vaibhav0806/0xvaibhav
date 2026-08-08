import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "@/app/page";

test("shows Vaibhav Pandey in the portfolio hero", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1, name: /vaibhav pandey/i })).toBeVisible();
});

test("shows approved work and a direct contact link", () => {
  render(<Home />);
  expect(screen.getByText(/100,000 requests/i)).toBeVisible();
  expect(screen.getByRole("link", { name: /email vaibhav/i })).toHaveAttribute("href", "mailto:vaibhav.pandey0806@gmail.com");
});
