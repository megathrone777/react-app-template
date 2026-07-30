import type { TSpinnerVariants } from "./Spinner.css";

import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type TProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  TSpinnerVariants;
