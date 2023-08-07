import { config } from "dotenv";
import * as fs from "fs";
import yaml from "js-yaml";
import { calculateUICoverage } from "./helpers/calculateUICoverage";
import { warningsFile } from "./helpers/warnings";
import { apiDocsMessage } from "./helpers/apiDocsMessage";

config();

async function globalSetup() {

    // delete warnings file if exists
    try {
    fs.unlink(warningsFile, function () {});
    } catch (err) {
    console.error(err);
    }
 
    // this block is for UI feature/test cases coverage
    let runCalculationCoverage = process.env.CALCULATE_COVERAGE;

    if (runCalculationCoverage) {
    console.log("\nCalculating coverage...");

    const obj = yaml.load(
        fs.readFileSync("./featureMap.yaml", { encoding: "utf-8" })
    );

    let pages = JSON.parse(JSON.stringify(obj, null, 2));
    calculateUICoverage(pages);
    }

    // get message API docs
    await apiDocsMessage();
}

export default globalSetup;
