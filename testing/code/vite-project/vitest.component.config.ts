/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["**/*.component.{test,spec}.?(c|m)[jt]s?(x)"],
    globals: true,
    environment: "jsdom",
  },
});
