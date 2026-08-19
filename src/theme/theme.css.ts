import { createGlobalTheme, keyframes } from "@vanilla-extract/css";

import { animations, colors, fonts } from "./variables";

const themeVars = createGlobalTheme(":root", {
  animations: Object.fromEntries(
    Object.entries(animations).map(([key, value]) => [
      key,
      keyframes(value as Parameters<typeof keyframes>[0]),
    ])
  ) as { [K in keyof typeof animations]: string },
  colors,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  fonts,
  safeAreas: {
    insetBottom: "env(safe-area-inset-bottom)",
    insetTop: "env(safe-area-inset-bottom)",
  },
});

export { themeVars };
