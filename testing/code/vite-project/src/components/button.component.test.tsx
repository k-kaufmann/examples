// @vitest-environment jsdom

import { describe, expect, test } from "vitest";
import { MyButton } from "./button";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("Button Component", () => {
  test("Headline is not shown", async () => {
    render(<MyButton />);
    expect(() => {
      screen.getAllByText("Clicked");
    }).toThrowError("Unable to find an element");
  });
  test("Show Headline after click", async () => {
    const user = userEvent.setup();
    render(<MyButton />);
    await user.click(await screen.findByTestId("myButton"));
    expect(await screen.findByText("Clicked!")).toBeDefined();
  });
});
