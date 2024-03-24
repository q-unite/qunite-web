import cn from "classnames";

import { ButtonProps } from "./Button.props";
import { P, Icon } from "..";
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
      className={cn(styles.button, className, styles[appearance])}
      {...props}
    >
      {children && <P size="m">{children}</P>}
      {icon != "none" && <Icon icon={icon} />}
    </button>
  );
};
