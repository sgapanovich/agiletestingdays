import { request } from "@playwright/test";
import * as fs from "fs";

let url = "https://automationintesting.online/message/v3/api-docs/message-api";

export async function apiDocsMessage() {
  try {
    const getApiDocs = await request.newContext();
    const response = await getApiDocs.get(url);

    const body = await response.json();
    fs.writeFileSync("./apiDocs.json", JSON.stringify(body, null, 2));
  } catch (err) {
    throw new Error(`Couldn't make a successful call to ${url}`);
  }
}
