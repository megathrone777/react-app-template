import eslintPluginPerfectionist from "eslint-plugin-perfectionist";
import eslintPluginReact from "@eslint-react/eslint-plugin";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import { parser, plugin as eslintPluginTypescript } from "typescript-eslint";
import { defineConfig } from "eslint/config";

const config = defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["dist/**", "node_modules/**", "eslint.config.ts"],
    languageOptions: {
      parser,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      "@eslint-react": eslintPluginReact,
      "@stylistic": eslintPluginStylistic,
      "@typescript-eslint": eslintPluginTypescript,
      perfectionist: eslintPluginPerfectionist,
    },
    rules: {
      "func-style": ["error", "expression"],
      "no-multi-spaces": "error",
      "newline-after-var": "error",
      "newline-before-return": "error",
      "no-inline-comments": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-restricted-syntax": [
        "error",
        "FunctionDeclaration",
        {
          message: "Avoid raw degree symbol in string literals. Use '\\u00B0'.",
          selector: "Literal[value=/°/u][raw!=/\\\\u00B0/u]",
        },
        {
          message: "Avoid raw degree symbol in template literals. Use '\\u00B0'.",
          selector: "TemplateElement[value.raw=/°/u]",
        },
        {
          message: "Use template literal `${value}` instead of String(value).",
          selector: "CallExpression[callee.name='String']",
        },
        {
          message: "Use unary plus +value instead of Number(value).",
          selector: "CallExpression[callee.name='Number']",
        },
        {
          message: "Use the rgba() helper instead of raw rgba() strings.",
          selector: "Literal[value=/rgba\\(/u]",
        },
        {
          message: "Use the rgba() helper instead of raw rgba() strings.",
          selector: "TemplateElement[value.raw=/rgba\\(/u]",
        },
        {
          message: "Use a color variable from theme instead of a raw hex code.",
          selector: "Literal[value=/^#[0-9a-fA-F]{3,8}$/u]",
        },
      ],
      "no-trailing-spaces": "error",
      "no-unused-vars": "off",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
      ],
      "prefer-const": "error",
      "prefer-destructuring": "off",
      quotes: "off",
      semi: "off",

      "@stylistic/comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "only-multiline",
          importAttributes: "always-multiline",
          dynamicImports: "always-multiline",
          enums: "always-multiline",
          generics: "never",
          tuples: "never",
        },
      ],
      "@stylistic/indent": [
        "error",
        2,
        {
          offsetTernaryExpressions: true,
          ignoredNodes: [
            "JSXExpressionContainer > ConditionalExpression",
            "JSXExpressionContainer > LogicalExpression",
            "TemplateLiteral *",
          ],
        },
      ],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/jsx-closing-bracket-location": "error",
      "@stylistic/jsx-closing-tag-location": "error",
      "@stylistic/jsx-curly-brace-presence": "error",
      "@stylistic/jsx-curly-newline": "error",
      "@stylistic/jsx-curly-spacing": "error",
      "@stylistic/jsx-first-prop-new-line": "error",
      "@stylistic/jsx-indent-props": ["error", { indentMode: 2 }],
      "@stylistic/jsx-max-props-per-line": ["error", { maximum: 2 }],
      "@stylistic/jsx-tag-spacing": "error",
      "@stylistic/quotes": ["error", "double"],

      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        { format: ["camelCase", "PascalCase"], selector: "property" },
        { filter: { match: true, regex: "^[@&:APP_]" }, format: null, selector: "property" },
        { format: null, modifiers: ["requiresQuotes"], selector: "property" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "_", varsIgnorePattern: "_" },
      ],
      "@typescript-eslint/only-throw-error": "off",
      "@typescript-eslint/prefer-destructuring": "error",

      "perfectionist/sort-enums": "off",
      "perfectionist/sort-exports": "error",
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: [
            {
              groupName: "type-react",
              elementNamePattern: ["^react$", "^react-.*"],
              selector: "type",
            },
            {
              groupName: "react",
              elementNamePattern: ["^react$", "^react-.*"],
            },
            {
              groupName: "internal-alias",
              elementNamePattern: ["^@/.+"],
            },
            {
              elementNamePattern: ["\\.css$"],
              groupName: "style",
            },
          ],
          groups: [
            "builtin",
            { newlinesBetween: 1 },
            "react",
            { newlinesBetween: 0 },
            "external",
            { newlinesBetween: 1 },
            "internal-alias",
            { newlinesBetween: 1 },

            "parent",
            { newlinesBetween: 1 },
            "sibling",
            { newlinesBetween: 1 },
            "index",
            { newlinesBetween: 1 },
            "import",
            { newlinesBetween: 1 },

            "style",
            { newlinesBetween: 1 },

            "type-react",
            { newlinesBetween: 0 },
            "type-external",
            { newlinesBetween: 0 },
            "type-internal",
            { newlinesBetween: 0 },
            "type-parent",
            { newlinesBetween: 0 },
            "type-sibling",
            { newlinesBetween: 0 },
            "type-index",
            { newlinesBetween: 1 },
            "type-import",
            { newlinesBetween: 1 },
          ],
          internalPattern: ["^@/.+"],
          newlinesBetween: 1,
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-interfaces": "error",
      "perfectionist/sort-jsx-props": "error",
      "perfectionist/sort-named-exports": "error",
      "perfectionist/sort-object-types": "error",
      "perfectionist/sort-objects": [
        "error",
        {
          type: "natural",
          order: "asc",
          customGroups: [
            {
              elementNamePattern: ["^&"],
              groupName: "current",
            },
            {
              elementNamePattern: ["^:"],
              groupName: "pseudo",
            },
            {
              elementNamePattern: ["^@"],
              groupName: "media",
            },
            {
              elementNamePattern: ["^devices.mobile"],
              groupName: "devices.mobile",
            },
            {
              elementNamePattern: ["^devices.tablet"],
              groupName: "devices.tablet",
            },
            {
              elementNamePattern: ["^devices.desktop"],
              groupName: "devices.desktop",
            },
            {
              elementNamePattern: ["^devices.pointerCoarse"],
              groupName: "devices.pointerCoarse",
            },
            {
              elementNamePattern: ["^devices.pointerFine"],
              groupName: "devices.pointerFine",
            },
          ],
          groups: [
            "unknown",
            "current",
            "pseudo",
            "media",
            "devices.mobile",
            "devices.tablet",
            "devices.desktop",
            "devices.pointerCoarse",
            "devices.pointerFine",
          ],
        },
      ],
      "perfectionist/sort-union-types": "error",

      "@eslint-react/dom-no-missing-button-type": "error",
      "@eslint-react/dom-no-string-style-prop": "error",
      "@eslint-react/dom-no-unknown-property": "error",
      "@eslint-react/dom-no-unsafe-target-blank": "error",
      "@eslint-react/jsx-no-key-after-spread": "error",
      "@eslint-react/naming-convention-context-name": "error",
      "@eslint-react/naming-convention-id-name": "error",
      "@eslint-react/naming-convention-ref-name": "error",
      "@eslint-react/no-access-state-in-setstate": "error",
      "@eslint-react/no-array-index-key": "error",
      "@eslint-react/no-class-component": "error",
      "@eslint-react/no-context-provider": "error",
      "@eslint-react/no-direct-mutation-state": "error",
      "@eslint-react/no-duplicate-key": "error",
      "@eslint-react/no-implicit-key": "error",
      "@eslint-react/no-missing-key": "error",
      "@eslint-react/no-use-context": "error",
      "@eslint-react/rules-of-hooks": "error",
      "@eslint-react/set-state-in-effect": "error",
      "@eslint-react/set-state-in-render": "error",
      "@eslint-react/use-state": "error",
      "@eslint-react/web-api-no-leaked-event-listener": "error",
      "@eslint-react/web-api-no-leaked-interval": "error",
      "@eslint-react/web-api-no-leaked-resize-observer": "error",
      "@eslint-react/web-api-no-leaked-timeout": "error",
    },
  },
  {
    files: ["src/theme/utils/rgba.ts", "src/theme/variables/colors.ts"],
    rules: {
      "no-restricted-syntax": "off",
    },
  },
]);

export default config;
