import React from "react";

import { wrapperClass } from "./Spinner.css";

import type { TProps } from "./Spinner.types";

const Spinner: React.FC<TProps> = ({ className, size }) => (
  <div
    className={`
      ${wrapperClass({ size })}
      ${className && !!className.length ? ` ${className}` : ""}
    `}
  />
);

export { Spinner };
