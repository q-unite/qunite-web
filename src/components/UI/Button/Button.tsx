import cn from "classnames";

import { ButtonProps } from "./Button.props";
import { Icon } from "../Icon/Icon";
import { P } from "..";
import styles from "./Button.module.css";

export const Button = ({
  appearance,
  children,
  icon = "none",
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.danger]: appearance === "danger",
        [styles.success]: appearance === "success",
        [styles.red]: appearance === "red",
      })}
      {...props}
    >
      {children && (
        <P
          className={cn({
            [styles.danger]: appearance === "danger",
            [styles.success]: appearance === "success",
            [styles.red]: appearance === "red",
          })}
        >
          {children}
        </P>
      )}
      {icon != "none" && <Icon icon={icon} />}
    </button>
  );
};
