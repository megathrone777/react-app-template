import { recipe, type RecipeVariants } from "@/theme";

import type { ComplexStyleRule } from "@vanilla-extract/css";
import type { CSSProperties } from "react";

const { borderRadius, height }: Pick<CSSProperties, "borderRadius" | "height"> = {
  borderRadius: 2,
  height: 4,
};

const lineWidth = (width: number): ComplexStyleRule => ({
  width,

  "::after": { width },
  "::before": { width },
});

export const buttonClass = recipe({
  base: {
    backgroundColor: "transparent",
    border: "none",
    color: "inherit",
    cursor: "pointer",
    display: "inline-block",
    overflow: "visible",
    padding: 0,
    transitionDuration: ".15s",
    transitionProperty: "opacity",
  },

  variants: {
    size: {
      normal: {
        height: 24,
      },

      small: {
        height: 18,
        transform: "translateY(5px)",
      },
    },
  },

  defaultVariants: {
    size: "normal",
  },
});

export const boxClass = recipe({
  base: {
    display: "inline-block",
    position: "relative",
  },

  variants: {
    size: {
      normal: {
        height: 24,
        width: 32,
      },

      small: {
        height: 18,
        width: 26,
      },
    },
  },

  defaultVariants: {
    size: "normal",
  },
});

export const lineClass = recipe(({ colors }) => ({
  base: {
    backgroundColor: colors.amber,
    borderRadius,
    bottom: 0,
    display: "block",
    height,
    marginTop: -height / 2,
    position: "absolute",
    top: "auto",
    transitionDelay: ".13s",
    transitionDuration: ".13s",
    transitionProperty: "transform",
    transitionTimingFunction: "cubic-bezier(.55, .055, .675, .19)",

    "::after": {
      backgroundColor: colors.amber,
      borderRadius,
      content: "",
      display: "block",
      height,
      position: "absolute",
      top: -20,
      transitionDelay: ".2s, 0s",
      transitionDuration: ".2s, .1s",
      transitionProperty: "top, opacity",
      transitionTimingFunction: "cubic-bezier(.33333, .66667, .66667, 1), linear",
    },

    "::before": {
      backgroundColor: colors.amber,
      borderRadius,
      content: "",
      display: "block",
      height,
      position: "absolute",
      top: -10,
      transitionDelay: ".2s, 0s",
      transitionDuration: ".12s, .13s",
      transitionProperty: "top, transform",
      transitionTimingFunction:
        "cubic-bezier(.33333, .66667, .66667, 1), cubic-bezier(.55, .055, .675, .19)",
    },
  },

  variants: {
    size: {
      normal: lineWidth(32),
      small: lineWidth(26),
    },

    isOpened: {
      true: {
        transform: "translate3d(0, -10px, 0) rotate(-45deg)",
        transitionDelay: ".22s",
        transitionTimingFunction: "cubic-bezier(.215, .61, .355, 1)",

        "::after": {
          opacity: 0,
          top: 0,
          transitionDelay: "0s, .22s",
          transitionTimingFunction: "cubic-bezier(.33333, 0, .66667, .33333), linear",
        },

        "::before": {
          top: 0,
          transform: "rotate(-90deg)",
          transitionDelay: ".16s, .25s",
          transitionDuration: ".1s, .13s",
          transitionTimingFunction: "cubic-bezier(.33333, 0, .66667, .33333)",
        },
      },

      false: {},
    },
  },

  defaultVariants: {
    size: "normal",
  },
}));

export type TBurgerVariants = RecipeVariants<typeof lineClass>;
