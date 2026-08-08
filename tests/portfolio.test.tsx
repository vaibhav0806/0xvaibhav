import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "@/app/page";

test("leads with the approved editorial positioning", () => {
  render(<Home />);
  expect(screen.getByText("Vaibhav Pandey")).toBeVisible();
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Backend engineer building systems that hold up.",
    }),
  ).toBeVisible();
  expect(screen.getByRole("navigation", { name: "Portfolio navigation" })).toBeVisible();
});

test("shows approved work and a direct contact link", () => {
  render(<Home />);
  expect(screen.getByText(/100,000 requests/i)).toBeVisible();
  expect(screen.getAllByRole("article")).toHaveLength(2);
  expect(screen.getByRole("link", { name: "View Era on GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/vaibhav0806/era",
  );
  expect(screen.getByRole("link", { name: /email vaibhav/i })).toHaveAttribute("href", "mailto:vaibhav.pandey0806@gmail.com");
});

test("does not give non-clickable work a link affordance", () => {
  render(<Home />);
  const coinDcx = screen.getByRole("heading", { name: "CoinDCX Trade Report" }).closest("article");
  expect(coinDcx).not.toBeNull();
  expect(within(coinDcx!).queryByRole("link")).not.toBeInTheDocument();
  expect(within(coinDcx!).queryByText("↗")).not.toBeInTheDocument();
});
