import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FlexProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction?: "column" | "row";
}
