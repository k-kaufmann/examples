import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("localhost:5173/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React/);
});

test("get started link", async ({ page }) => {
  await page.goto("localhost:5173/");

  await page.getByTestId("myButton").click();

  await expect(page.getByTestId("myHeading")).toBeVisible();
});
