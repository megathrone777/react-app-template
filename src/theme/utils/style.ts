import { style as vanillaStyle } from "@vanilla-extract/css";

import { devices, themeVars, type StyleArg } from "@/theme";

const style = (arg: StyleArg): string =>
  vanillaStyle(typeof arg === "function" ? arg({ devices, ...themeVars }) : arg);

export { style };
