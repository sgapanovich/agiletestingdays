import { test, expect, request } from "@playwright/test";
import { createAssertions } from "../helpers/createAssertions";

test.describe("API testing", async () => {
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

    // creates assertions and console logs them to the terminal
    await createAssertions(body);

    expect(body.messageid).toBeDefined();
    expect(body.name).toBe("Sergei ATD");
    expect(body.email).toBe("testing@test.com");
    expect(body.phone).toBe("12345678910");
    expect(body.subject).toBe("this is a test hello");
    expect(body.description).toBe(
      "Hello I would like to inquire about this hotel and get some information. Please call me back"
    );
  });

  test("GET rooms", async ({ baseURL }) => {
    const getRequest = await request.newContext();
    const response = await getRequest.get(baseURL + "/room/", {});

    expect(response.status()).toBe(200);
    const body = await response.json();

    // creates assertions and console logs them to the terminal
    await createAssertions(body);
  });

  test("GET countries", async () => {
    const getRequest = await request.newContext();
    const response = await getRequest.get(
      "https://restcountries.com/v3.1/translation/germany"
    );

    expect(response.status()).toBe(200);
    const body = await response.json();

    // creates assertions and console logs them to the terminal
    await createAssertions(body);
  });
});
