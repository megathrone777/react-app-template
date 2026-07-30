import { existsSync, rmSync, readFileSync } from "fs";
import { resolve } from "path";

import { defineConfig, type Rspack } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

const sprite = readFileSync(
  resolve(import.meta.dirname, "public/sprite.svg"),
  "utf-8"
);

const kitchensinkTemplatePath = resolve(import.meta.dirname, "public/kitchensink.html");
const kitchensinkSymbolIds = Array.from(
  sprite.matchAll(/<symbol[^>]*\bid="([^"]+)"/g),
  (match) => match[1]
).sort((a, b) => a.localeCompare(b));

const renderKitchensink = (): string => {
  const vars: Record<string, string> = {
    count: `${kitchensinkSymbolIds.length}`,
    items: kitchensinkSymbolIds
      .map<string>((symbolId: string) => {
        const displayId = symbolId.endsWith("Icon") ? symbolId.slice(0, -4) : symbolId;

        return `
          <li class="tile" data-id="${displayId}" title="Click to copy &quot;${displayId}&quot;">
            <svg aria-hidden="true">
              <use href="#${symbolId}"/>
            </svg>
            <span>${displayId}</span>
          </li>`;
      })
      .join("\n      "),
    sprite,
  };

  return readFileSync(kitchensinkTemplatePath, "utf-8").replace(
    /<%=\s*(\w+)\s*%>/g,
    (_, key: string) => vars[key] ?? ""
  );
};

const config = defineConfig(({ envMode }) => {
  const isProduction: boolean = envMode === "production";

  return {
    dev: {
      client: {
        overlay: {
          errors: true,
          runtime: true,
        },
      },

      cliShortcuts: {
        help: false,
      },

      progressBar: true,
    },

    html: {
      template: "./public/index.html",
      templateParameters: {
        sprite,
      },
    },

    performance: {
      removeConsole: isProduction,
    },

    plugins: [
      pluginReact({
        reactCompiler: true,
      }),
      pluginTypeCheck(),
      {
        name: "exclude-kitchensink-from-build",
        setup: ({ onAfterBuild }): void => {
          onAfterBuild((): void => {
            const copied = resolve(import.meta.dirname, "dist/kitchensink.html");

            if (existsSync(copied)) rmSync(copied);
          });
        },
      },
    ],

    resolve: {
      alias: {
        "@": resolve(import.meta.dirname, "src"),
        "@/ui": resolve(import.meta.dirname, "src/theme/components"),
      },
      extensions: [".js", ".ts", ".tsx"],
    },

    server: {
      host: true,
      open: true,
      setup: ({ server }): void => {
        server.middlewares.use((request, response, next) => {
          const path = request.url?.split("?")[0];

          if (path === "/kitchensink" || path === "/kitchensink/" || path === "/kitchensink.html") {
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            response.setHeader("Cache-Control", "no-store");
            response.end(renderKitchensink());

            return;
          }

          next();
        });
      },
    },

    source: {
      entry: {
        index: resolve(import.meta.dirname, "src/index.tsx"),
      },

      exclude: [resolve(import.meta.dirname, "dist")],
    },

    tools: {
      rspack: (_, { appendPlugins }): Rspack.Configuration | void => {
        appendPlugins([new VanillaExtractPlugin()]);
      },
    },
  };
});

export default config;
