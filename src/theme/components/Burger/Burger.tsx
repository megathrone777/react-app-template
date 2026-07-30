import React from "react";

import { boxClass, buttonClass, lineClass } from "./Burger.css";

import type { TProps } from "./Burger.types";

const Burger: React.FC<TProps> = ({ className, isOpened, size, ...rest }) => (
  <button
    className={`
      ${buttonClass({ size })}
      ${className && !!className.length ? ` ${className}` : ""}
    `}
    type="button"
    {...rest}
  >
    <span className={boxClass({ size })}>
      <span className={lineClass({ isOpened, size })} />
    </span>
  </button>
);

export { Burger };
