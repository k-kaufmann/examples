/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    exclude: [
      "**/e2e/**",
      "**/*.component.{test,spec}.?(c|m)[jt]s?(x)",
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
    ],
    globals: true,
  },
});
