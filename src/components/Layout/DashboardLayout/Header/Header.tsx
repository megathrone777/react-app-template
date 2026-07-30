import React from "react";
import { NavLink } from "react-router";

import { navPaths } from "@/globals";
import { uuid } from "@/utils";

import { linkClass, wrapperClass } from "./Header.css";

import type { TMenuItem } from "./Header.types";

const menuItems: TMenuItem[] = [
  {
    label: "Home page",
    to: "/",
  },
  {
    label: "Test page",
    to: "test",
  },
];

const Header: React.FC = () => (
  <div className={wrapperClass}>
    <ul>
      {menuItems.map<React.ReactElement>(({ label, to }: TMenuItem) => (
        <li key={uuid()}>
          <NavLink
            {...{ to }}
            className={linkClass}
            viewTransition
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>

    <NavLink
      replace
      to={`${navPaths.base}${navPaths.logout}`}
      viewTransition
    >
      LogOut
    </NavLink>
  </div>
);

export { Header };
