import { test, expect } from "@playwright/test";
import { getRooms } from "../datafactory/room";

test.describe("UI check", () => {
  let rooms;

  test.beforeAll(async () => {
    rooms = await getRooms();

    rooms.rooms[0].type = "Hello, baby";
    for (let i = 1; i < 10; i++) {
      rooms.rooms[i] = rooms.rooms[0];
    }
  });

  test.only("Mock with real API response", async ({ page }) => {
    await page.route("**/room/", (route) =>
      route.fulfill({
        status: 200,
        body: JSON.stringify(rooms),
      })
    );

    await page.goto("https://automationintesting.online");

    expect(100).toBe(100);
  });
});
