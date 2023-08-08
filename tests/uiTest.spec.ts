import { test, expect } from "@playwright/test";
import { getRooms } from "../datafactory/room";

test.describe("UI check", () => {
  let rooms;
  let name = "Agile Testing Days";

  test.beforeAll(async () => {
    // get rooms via API
    rooms = await getRooms();

    // update the first room name
    rooms.rooms[0].type = name;

    // to test when there is no room name
    // delete rooms.rooms[0].type;

    // mock 10 (or as many as you want rooms)
    // let firstRoom = rooms.rooms[0];
    // for (let i = 1; i < 10; i++) {
    //   rooms.rooms[i] = firstRoom;
    // }
  });

  test("Mock with real API response", async ({ page }) => {
    // intercept traffic and replace API response returned to UI
    // with the modified response from before all
    await page.route("**/room/", (route) =>
      route.fulfill({
        status: 500,
        body: JSON.stringify(rooms),
      })
    );

    await page.goto("https://automationintesting.online");

    await expect(page.getByText(name)).toBeVisible();
  });
});
