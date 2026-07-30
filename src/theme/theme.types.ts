import type { themeVars } from "./theme.css";

import type { ComplexStyleRule, GlobalStyleRule } from "@vanilla-extract/css";
import type { recipe as vanillaRecipe, RuntimeFn } from "@vanilla-extract/recipes";
import type { devices } from "./variables";

export type ThemeVars = typeof themeVars & {
  devices: typeof devices;
};

export type StyleArg = ((themeVars: ThemeVars) => ComplexStyleRule) | ComplexStyleRule;
export type GlobalStyleArg = ((themeVars: ThemeVars) => GlobalStyleRule) | GlobalStyleRule;

export type RecipeVariantGroups = Record<string, Record<string, ComplexStyleRule | string>>;
export type RecipeOptions<Variants extends RecipeVariantGroups> = Parameters<
  typeof vanillaRecipe<Variants>
>[0];

/** Like `RecipeVariants` from the package, minus the `| undefined` it leaves on the result. */
export type RecipeVariants<Fn extends (...args: never[]) => string> = NonNullable<
  Parameters<Fn>[0]
>;

export type Recipe = <Variants extends RecipeVariantGroups>(
  options: ((themeVars: ThemeVars) => RecipeOptions<Variants>) | RecipeOptions<Variants>,
  debugId?: string
) => RuntimeFn<Variants>;
