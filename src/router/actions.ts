import { data, redirect, type ActionFunction } from "react-router";

import { getUser } from "./helpers";

export const loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = `${formData.get("email")}`.trim();
  const password = `${formData.get("password")}`.trim();
  const user = await getUser("email", email);

  if (!user) {
    return data<TActionData>({
      message: `User with email "${email}" not found.`,
      name: "email",
    });
  }

  if (user.password.toLowerCase() !== password.toLowerCase()) {
    return data<TActionData>({
      message: "Wrong password",
      name: "password",
    });
  }

  localStorage.setItem("user", JSON.stringify(user));
  throw redirect("/dashboard");
};
