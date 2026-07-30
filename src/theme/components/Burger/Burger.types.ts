import type { TBurgerVariants } from "./Burger.css";

import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface TProps
  extends
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    TBurgerVariants {
  isOpened: boolean;
}
