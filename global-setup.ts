import { config } from "dotenv";
import * as fs from "fs";
import yaml from "js-yaml";
import { calculateUICoverage } from "./helpers/calculateUICoverage";
import { warningsFile } from "./helpers/warnings";

config();

async function globalSetup() {
  // delete warnings file if exists so we can write and then append new warnings if needed
  try {
    fs.unlink(warningsFile, function () {});
  } catch (err) {
    console.error(err);
  }

  /*  
    this block is for UI feature/test cases coverage
    to console log coverage you need to run your tests with the following command
    CALCULATE_COVERAGE=true npx playwright test
  */
  let runCalculationCoverage = process.env.CALCULATE_COVERAGE;

  if (runCalculationCoverage) {
    console.log("\nCalculating coverage...");

    const obj = yaml.load(
      fs.readFileSync("./featureMap.yaml", { encoding: "utf-8" })
    );

    let pages = JSON.parse(JSON.stringify(obj, null, 2));
    calculateUICoverage(pages);
  }
}

export default globalSetup;
