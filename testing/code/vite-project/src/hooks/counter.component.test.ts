import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./counter";

describe("useCounter", () => {
  test("can increase counter", () => {
    const { result } = renderHook(() => useCounter());
    console.log(result.current);
    act(() => {
      result.current.increase();
    });

    expect(result.current.counter).toBe(1);
  });
});
