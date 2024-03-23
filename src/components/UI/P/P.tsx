import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";

import styles from "./P.module.css";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  color?: "gray" | "primary" | "black";
  size?: "s" | "m";
}

export const P = ({
  children,
  color = "gray",
  size = "s",
  className,
  ...props
}: Props): JSX.Element => {
  return (
    <p
      className={cn(styles.p, styles[color], styles[size], className)}
      {...props}
    >
      {children}
    </p>
  );
};
