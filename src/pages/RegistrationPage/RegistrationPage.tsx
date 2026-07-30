import React from "react";
import { NavLink } from "react-router";

import { Metadata } from "@/components";
import { navPaths } from "@/globals";

const title: string = "Registration page";

const RegistrationPage: React.FC = () => (
  <>
    <Metadata {...{ title }} />
    <h1>{title}</h1>
    <p>Registration form here...</p>

    <p>
      <NavLink
        to={`${navPaths.base}${navPaths.auth}/${navPaths.login}`}
        viewTransition
      >
        Already have an account?
      </NavLink>
    </p>
  </>
);

export { RegistrationPage };
