import React from "react";
import { Form, NavLink } from "react-router";

import { Metadata } from "@/components";
import { navPaths } from "@/globals";

const title: string = "Login page";

const LoginPage: React.FC = () => (
  <>
    <Metadata {...{ title }} />
    <h1>{title}</h1>

    <Form method="POST">
      <button type="submit">Login</button>
    </Form>

    <p>
      <NavLink
        to={`${navPaths.base}${navPaths.auth}/${navPaths.registration}`}
        viewTransition
      >
        Don't have an account?
      </NavLink>
    </p>
  </>
);

export { LoginPage };
