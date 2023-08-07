import * as fs from "fs";
import { warningsFile } from "./helpers/warnings";

async function globalTearDown() {
  // read the file and console.log the result
  try {
    const data = fs.readFileSync(warningsFile, "utf8");
    console.log(data);
  } catch (err) {
    null;
  }

}

export default globalTearDown;