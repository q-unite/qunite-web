import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m" | "l";
}
