import React from "react";

import { Icon } from "@/ui";

import {
  errorClass,
  iconClass,
  iconWrapperClass,
  inputClass,
  layoutClass,
  wrapperClass,
} from "./Input.css";

import type { TProps } from "./Input.types";

const Input: React.FC<TProps> = ({
  autoComplete = "off",
  errorMessage,
  iconId,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  required,
  type,
}) => {
  const isError: boolean = Boolean(errorMessage && errorMessage.length > 0);

  return (
    <div className={wrapperClass}>
      <div className={layoutClass[isError ? "error" : "default"]}>
        {iconId && (
          <div className={iconWrapperClass}>
            <Icon
              className={iconClass}
              id={iconId}
            />
          </div>
        )}

        <input
          className={inputClass[isError ? "error" : "default"]}
          {...{ autoComplete, name, onBlur, onChange, onFocus, placeholder, required, type }}
        />
      </div>

      {isError && <p className={errorClass}>{errorMessage}</p>}
    </div>
  );
};

export { Input };
