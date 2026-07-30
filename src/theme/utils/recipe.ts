import { recipe as vanillaRecipe, type RuntimeFn } from "@vanilla-extract/recipes";

import {
  devices,
  themeVars,
  type Recipe,
  type RecipeOptions,
  type RecipeVariantGroups,
  type ThemeVars,
} from "@/theme";

const recipe: Recipe = ((
  options: unknown,
  debugId?: string
): RuntimeFn<RecipeVariantGroups> => {
  const vars = { devices, ...themeVars };
  const resolvedOptions = (
    typeof options === "function"
      ? (options as (themeVars: ThemeVars) => RecipeOptions<RecipeVariantGroups>)(vars)
      : options
  ) as RecipeOptions<RecipeVariantGroups>;

  return vanillaRecipe(resolvedOptions, debugId);
}) as Recipe;

export { recipe };
