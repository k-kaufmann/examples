import { afterEach, describe, expect, test, vi } from "vitest";
import { getConfigValue } from "./configLoader";
import { config } from "./types";

vi.mock("./config", () => {
  const config: config = {
    value1: "Gauda",
    value2: "Tomatensuppe",
  };
  const getConfig = vi.fn();
  getConfig.mockReturnValue(config);
  return { getConfig };
});

afterEach(() => {
  vi.resetAllMocks();
});

describe("can handle config", () => {
  test("get config value by key", () => {
    expect(getConfigValue("value1")).toBe("Gauda");
  });
});
