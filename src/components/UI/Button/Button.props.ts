import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { IconProps } from "../Icon/Icon.props";

export interface ButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    IconProps {
  children?: ReactNode;
  appearance: "danger" | "success" | "red";
}
