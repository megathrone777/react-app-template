import { style, recipe, type RecipeVariants } from "@/theme";

export const wrapperClass = recipe(({ colors, devices, fonts }) => ({
  base: {
    borderRadius: 6,
    display: "inline-flex",
    fontWeight: fonts.medium,
  },

  variants: {
    size: {
      small: { height: 32 },
      medium: { height: 36 },

      large: {
        height: 42,

        "@media": {
          [devices.mobile]: { height: 36 },
        },
      },
    },

    template: {
      primary: { background: colors.cyan, color: colors.white },
      secondary: { background: colors.grayLighter, color: colors.black },
    },
  },

  defaultVariants: {
    size: "medium",
    template: "primary",
  },
}));

export const labelClass = style({
  cursor: "pointer",
});

export type TButtonVariants = RecipeVariants<typeof wrapperClass>;
