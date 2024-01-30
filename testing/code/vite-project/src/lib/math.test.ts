import { describe, expect, test } from "vitest";
import { sum } from "./math";

describe("math", () => {
  test("can sum two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });
  test("can sum two negative numbers", () => {
    expect(sum(-2, -2)).toBe(-4);
  });
  test("can't handle null", () => {
    expect(() => {
      sum(0, 2);
    }).toThrowError();
    expect(() => {
      sum(2, 0);
    }).toThrowError();
  });
});
