import cn from "classnames";
import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

export const Htag = ({
  children,
  tag,
  className,
  color = "black",
  ...props
}: HtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(styles.h1, styles[color], className)} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn(styles.h2, styles[color], className)} {...props}>
          {children}
        </h2>
      );
    default:
      return <></>;
  }
};
