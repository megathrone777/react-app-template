import React from "react";

import { viewBoxMap } from "./viewBoxMap";

import type { TProps } from "./Icon.types";

const Icon: React.FC<TProps> = ({ className, id }) => (
  <svg
    className={className && !!className.length ? className : ""}
    preserveAspectRatio="xMidYMid meet"
    viewBox={viewBoxMap[id]}
  >
    <use href={`/sprite.svg#${id}Icon`} />
  </svg>
);

export { Icon };
