import { redirect, type ActionFunction } from "react-router";

import { navPaths } from "@/globals";

export const loginAction: ActionFunction = async () => {
  // const queryString = await request.text();
  // const params = new URLSearchParams(queryString);

  // if (success) {
  //   localStorage.setItem("user", JSON.stringify(userObj));
  //   return redirect(`${navPaths.base}${navPaths.dashboard}`);
  // }
  // return errors;

  localStorage.setItem("user", "true");

  return redirect(`${navPaths.base}${navPaths.dashboard}`);
};

export const registrationAction: ActionFunction = async () => {
  // const params = new URLSearchParams(queryString);
  // if (success) {
  // return redirect(`${navPaths.base}${navPaths.dashboard}`);
  // }
  // return errors;
};
