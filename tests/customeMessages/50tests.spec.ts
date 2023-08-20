import { test, expect } from "@playwright/test";
import { addWarning } from "../../helpers/warnings";

test.describe("Custom warnings 50 tests", async () => {
  test("Test #1", async () => {
    expect(1).toBe(1);
  });

  test("Test #2", async () => {
    expect(2).toBe(2);

    // adds a warning to the warnings.log and then console logs it after all tests are done running
    await addWarning(
      "Sergei, wake up, this test is not good: '" + test.info().title + "'"
    );
  });

  test("Test #3", async () => {
    expect(3).toBe(3);
  });

  test("Test #4", async () => {
    expect(4).toBe(4);

    await addWarning(
      "Sergei, this test might need some help as well: '" +
        test.info().title +
        "'. Please, ask developers if they changed anything first"
    );
  });

  test("Test #5", async () => {
    expect(5).toBe(5);
  });

  test("Test #6", async () => {
    expect(6).toBe(6);
  });

  test("Test #7", async () => {
    expect(7).toBe(7);
  });

  test("Test #8", async () => {
    expect(8).toBe(8);
  });

  test("Test #9", async () => {
    expect(9).toBe(9);
  });

  test("Test #10", async () => {
    expect(10).toBe(10);
  });

  test("Test #11", async () => {
    expect(11).toBe(11);
  });

  test("Test #12", async () => {
    expect(12).toBe(12);
  });

  test("Test #13", async () => {
    expect(13).toBe(13);
  });

  test("Test #14", async () => {
    expect(14).toBe(14);
  });

  test("Test #15", async () => {
    expect(15).toBe(15);
  });

  test("Test #16", async () => {
    expect(16).toBe(16);
  });

  test("Test #17", async () => {
    expect(17).toBe(17);
  });

  test("Test #18", async () => {
    expect(18).toBe(18);
  });

  test("Test #19", async () => {
    expect(19).toBe(19);
  });

  test("Test #20", async () => {
    expect(20).toBe(20);
  });

  test("Test #21", async () => {
    expect(21).toBe(21);
  });

  test("Test #22", async () => {
    expect(22).toBe(22);
  });

  test("Test #23", async () => {
    expect(23).toBe(23);
  });

  test("Test #24", async () => {
    expect(24).toBe(24);
  });

  test("Test #25", async () => {
    expect(25).toBe(25);
  });

  test("Test #26", async () => {
    expect(26).toBe(26);
  });

  test("Test #27", async () => {
    expect(27).toBe(27);
  });

  test("Test #28", async () => {
    expect(28).toBe(28);
  });

  test("Test #29", async () => {
    expect(29).toBe(29);
  });

  test("Test #30", async () => {
    expect(30).toBe(30);
  });

  test("Test #31", async () => {
    expect(31).toBe(31);
  });

  test("Test #32", async () => {
    expect(32).toBe(32);
  });

  test("Test #33", async () => {
    expect(33).toBe(33);
  });

  test("Test #34", async () => {
    expect(34).toBe(34);
  });

  test("Test #35", async () => {
    expect(35).toBe(35);
  });

  test("Test #36", async () => {
    expect(36).toBe(36);
  });

  test("Test #37", async () => {
    expect(37).toBe(37);
  });

  test("Test #38", async () => {
    expect(38).toBe(38);
  });

  test("Test #39", async () => {
    expect(39).toBe(39);
  });

  test("Test #40", async () => {
    expect(40).toBe(40);
  });

  test("Test #41", async () => {
    expect(41).toBe(41);
  });

  test("Test #42", async () => {
    expect(42).toBe(42);
  });

  test("Test #43", async () => {
    expect(43).toBe(43);
  });

  test("Test #44", async () => {
    expect(44).toBe(44);
  });

  test("Test #45", async () => {
    expect(45).toBe(45);
  });

  test("Test #46", async () => {
    expect(46).toBe(46);
  });

  test("Test #47", async () => {
    expect(47).toBe(47);
  });

  test("Test #48", async () => {
    expect(48).toBe(48);
  });

  test("Test #49", async () => {
    expect(49).toBe(49);
  });

  test("Test #50", async () => {
    expect(50).toBe(50);
  });
});
