import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { IconProps } from "../icon/Icon.props";

export interface ButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    IconProps {
  children?: ReactNode;
  appearance: "danger" | "success" | "red";
}
