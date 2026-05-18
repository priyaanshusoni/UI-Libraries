import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Locaters" }).click();
  await page.getByRole("button", { name: "Click Me (Role: button)" }).click();
});
