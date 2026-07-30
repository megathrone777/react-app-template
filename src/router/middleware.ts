import { redirect, type MiddlewareFunction } from "react-router";

import { navPaths } from "@/globals";

export const authMiddleware: MiddlewareFunction = () => {
  if (localStorage.getItem("user")) {
    return redirect(`${navPaths.base}${navPaths.dashboard}`);
  }
};

export const dashboardMiddleware: MiddlewareFunction = () => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    throw redirect(`${navPaths.base}${navPaths.auth}/${navPaths.login}`);
  }
};

export const indexMiddleware: MiddlewareFunction = () => {
  const storedUser = localStorage.getItem("user");

  throw redirect(
    storedUser
      ? `${navPaths.base}${navPaths.dashboard}`
      : `${navPaths.base}${navPaths.auth}/${navPaths.login}`
  );
};

export const logoutMiddleware: MiddlewareFunction = () => {
  localStorage.removeItem("user");
  throw redirect(`${navPaths.base}${navPaths.auth}/${navPaths.login}`);
};
