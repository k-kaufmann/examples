import { getConfig } from "./config";
import { configKeys } from "./types";

export function getConfigValue(key: configKeys): string {
  console.log(getConfig());
  return getConfig()[key];
}
