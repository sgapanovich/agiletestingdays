import * as fs from "fs";
import { expect } from "@playwright/test";
import { fail } from "assert";
import { addWarning } from "./warnings";

let docs = "./apiDocs.json";

export async function validateAgainstSchema(
  object: object,
  schemaObject: string
) {
  // get keys from the object
  let responseObjectKeys = Object.keys(object).sort();

  // get keys from the docs
  let schema = await schemaParameters(schemaObject);
  let docsObjectKeys = Object.keys(schema).sort();

  // compare object keys
  try {
    expect(docsObjectKeys).toEqual(responseObjectKeys);
  } catch (e) {
    await addWarning(
      `For the object ${schemaObject} expected parameters were: [${docsObjectKeys}] but API returned [${responseObjectKeys}]`
    );
  }
}

export async function schemaParameters(schemaObject: string) {
  try {
    let apiDocs = fs.readFileSync(docs).toString("utf-8");

    return JSON.parse(apiDocs).components.schemas[schemaObject].properties;
  } catch (e) {
    fail(
      `The '${schemaObject}' object you passed does not exist in '${docs}' documentation`
    );
  }
}
