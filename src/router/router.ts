import { createBrowserRouter } from "react-router";

import { ErrorBoundary, Layout } from "@/components";
import { navPaths } from "@/globals";
import { LoginPage, OverviewPage, RegistrationPage, TestPage } from "@/pages";
import { Spinner } from "@/ui";

import { loginAction } from "./actions";
import { overviewLoader } from "./loaders";
import {
  authMiddleware,
  dashboardMiddleware,
  indexMiddleware,
  logoutMiddleware,
} from "./middleware";

const router = createBrowserRouter([
  {
    children: [
      { index: true, middleware: [indexMiddleware] },

      {
        children: [
          { index: true, middleware: [indexMiddleware] },
          { Component: LoginPage, action: loginAction, path: navPaths.login },

          {
            Component: RegistrationPage,
            path: navPaths.registration,
          },
        ],

        Component: Layout.Auth,
        middleware: [authMiddleware],
        path: navPaths.auth,
      },

      {
        children: [
          {
            Component: OverviewPage,
            id: "overview",
            index: true,
            loader: overviewLoader,
          },

          {
            Component: TestPage,
            path: navPaths.test,
          },
        ],

        Component: Layout.Dashboard,
        middleware: [dashboardMiddleware],
        path: navPaths.dashboard,
      },

      { middleware: [logoutMiddleware], path: navPaths.logout },
    ],

    ErrorBoundary,
    HydrateFallback: Spinner,
    path: navPaths.base,
  },
]);

export { router };
