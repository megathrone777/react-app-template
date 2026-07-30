import type { InputHTMLAttributes } from "react";

export interface TProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  iconId?: TIconId;
}
