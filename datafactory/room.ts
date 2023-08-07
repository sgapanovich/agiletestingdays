import { expect, request } from "@playwright/test";

let baseURL = process.env.API_URL;

export async function getRooms() {
  const getRequest = await request.newContext();
  const response = await getRequest.get(baseURL + "/room/");

  expect(response.status()).toBe(200);
  const body = await response.json();
  return body;
}
