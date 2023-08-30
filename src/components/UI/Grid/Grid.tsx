import cn from "classnames";
import { GridProps } from "./Grid.props";
import styles from "./Grid.module.css";

export const Grid = ({
  className,
  children,
  ...props
}: GridProps): JSX.Element => {
  return (
    <div className={cn(className, styles.grid)} {...props}>
      {children}
    </div>
  );
};
