import type { TButtonVariants } from "./Button.css";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface TProps
  extends
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target">,
    TButtonVariants {
  iconId?: TIconId;
}
