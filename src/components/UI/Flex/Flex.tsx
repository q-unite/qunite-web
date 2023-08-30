import cn from "classnames";
import { FlexProps } from "./Flex.props";
import styles from "./Flex.module.css";

export const Flex = ({
  className,
  children,
  direction = "column",
  ...props
}: FlexProps): JSX.Element => {
  return (
    <div
      className={cn(className, styles.flex, {
        [styles.column]: direction === "column",
        [styles.row]: direction === "row",
      })}
      {...props}
    >
      {children}
    </div>
  );
};
