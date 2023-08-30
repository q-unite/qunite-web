import React from "react";
import cn from "classnames";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }: InputProps, ref): JSX.Element => {
    return (
      <input ref={ref} className={cn(styles.input, className)} {...props} />
    );
  }
);
