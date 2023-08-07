import { test, expect, request } from '@playwright/test';
import { createAssertions } from '../helpers/createAssertions';
import { validateAgainstSchema } from '../helpers/schemaFunctions';

test.describe("API testing", async () => {
  test("GET rooms", async ({ baseURL }) => {
    const getRequest = await request.newContext();
    const response = await getRequest.get(baseURL + "/room/");

    expect(response.status()).toBe(200);
    const body = await response.json();
  });

  test("POST message", async ({ baseURL }) => {
    const postRequest = await request.newContext();
    const response = await postRequest.post(baseURL + "/message/", {
      data: {
        name: "Sergei ATD",
        email: "testing@test.com",
        phone: "12345678910",
        subject: "this is a test hello",
        description:
          "Hello I would like to inquire about this hotel and get some information. Please call me back",
      },
    });

    expect(response.status()).toBe(201);
    const body = await response.json();

    // await validateAgainstSchema(body, "Message")
  });

  test("GET all countries", async () => {
    const getRequest = await request.newContext();
    const response = await getRequest.get("https://restcountries.com/v3.1/translation/germany");

    // https://restcountries.com/v3.1/all

    expect(response.status()).toBe(200);
    const body = await response.json();
    await createAssertions(body)
  });
})

