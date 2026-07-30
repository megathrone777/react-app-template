import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLOrSVGElement>,
  HTMLOrSVGElement
> {
  id: TIconId;
}
