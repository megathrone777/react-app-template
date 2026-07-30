import React from "react";

import { Icon } from "@/ui";

import { wrapperClass, labelClass } from "./Button.css";

import type { TProps } from "./Button.types";

const Button: React.FC<TProps> = ({
  children,
  className,
  href,
  iconId,
  size,
  target,
  template,
  type = "button",
  ...rest
}) => {
  const renderLayout: React.ReactElement = (
    <>
      {iconId && <Icon id={iconId} />}
      {children && <span className={labelClass}>{children}</span>}
    </>
  );

  if (href && !!href.length) {
    return (
      <a
        className={`
          ${wrapperClass({ size, template })}
          ${className && !!className.length ? ` ${className}` : ""}
        `}
        {...{ href, target }}
      >
        {renderLayout}
      </a>
    );
  }

  return (
    <button
      className={`
        ${wrapperClass({ size, template })}
        ${className && !!className.length ? ` ${className}` : ""}
      `}
      {...{ type, ...rest }}
    >
      {renderLayout}
    </button>
  );
};

export { Button };
