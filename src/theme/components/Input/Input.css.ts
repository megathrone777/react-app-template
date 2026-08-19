import { recipe, rgba, style } from "@/theme";

export const wrapperClass = style({
  paddingBottom: 30,
  position: "relative",
});

export const layoutClass = recipe(({ colors }) => ({
  base: {
    position: "relative",
    width: "100%",
  },

  variants: {
    isError: {
      true: {
        color: colors.red,

        ":focus-within": {
          color: colors.black,
        },
      },

      false: {
        color: colors.black,
      },
    },
  },
}));

export const iconWrapperClass = style({
  alignItems: "center",
  display: "grid",
  insetBlock: 0,
  justifyContent: "center",
  left: 0,
  pointerEvents: "none",
  position: "absolute",
  width: 40,
});

export const iconClass = style({
  height: 22,
});

export const inputClass = recipe(({ colors, easing, fonts }) => ({
  base: {
    backgroundColor: "transparent",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    color: "inherit",
    fontSize: 15,
    fontWeight: fonts.demi,
    height: 42,
    outline: "none",
    paddingLeft: 40,
    transitionDuration: ".15s",
    transitionProperty: "border-color, box-shadow",
    transitionTimingFunction: easing,
    width: "100%",

    "::placeholder": {
      color: "inherit",
      fontSize: 15,
      fontWeight: fonts.demi,
    },
  },

  variants: {
    isError: {
      true: {
        borderColor: colors.red,
        boxShadow: `
          ${rgba(colors.black, 0)} 0 0 0 0,
          ${rgba(colors.black, 0)} 0 0 0 0,
          ${rgba(colors.black, 0)} 0 0 0 0,
          ${colors.red} 0 0 0 1px,
          ${rgba(colors.black, 0.25)} 0 25px 50px -12px
        `,

        ":focus": {
          borderColor: colors.grayLighter,
          boxShadow: "none",
        },
      },

      false: {
        borderColor: colors.grayLighter,

        ":focus": {
          borderColor: colors.cyan,
          boxShadow: `
            ${rgba(colors.black, 0)} 0 0 0 0,
            ${rgba(colors.black, 0)} 0 0 0 0,
            ${rgba(colors.black, 0)} 0 0 0 0,
            ${colors.cyan} 0 0 0 1px,
            ${rgba(colors.black, 0.25)} 0 25px 50px -12px
          `,
        },
      },
    },
  },
}));

export const errorClass = style(({ colors, fonts }) => ({
  color: colors.red,
  fontSize: 13,
  fontWeight: fonts.medium,
  left: 5,
  position: "absolute",
  top: 44,
}));
