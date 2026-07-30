import { recipe, type RecipeVariants } from "@/theme";

export const wrapperClass = recipe(({ animations, colors }) => ({
  base: {
    animationDuration: ".5s",
    animationIterationCount: "infinite",
    animationName: animations.spin,
    animationTimingFunction: "linear",
    borderColor: colors.amber,
    borderRadius: "50%",
    borderStyle: "solid",
    borderTopColor: "transparent",
    insetInline: 0,
    marginInline: "auto",
    position: "absolute",
    top: "50%",
  },

  variants: {
    size: {
      normal: {
        borderWidth: 10,
        height: 60,
        width: 60,
      },

      small: {
        borderWidth: 6,
        height: 25,
        width: 25,
      },
    },
  },

  defaultVariants: {
    size: "normal",
  },
}));

export type TSpinnerVariants = RecipeVariants<typeof wrapperClass>;
