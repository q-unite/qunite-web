import cn from "classnames";
import { LiProps } from "./Li.props";
import styles from "./Li.module.css";
import { Htag, P, Icon } from "..";

export const Li = ({
  children,
  icon,
  color = "gray",
  size = "m",
  className,
  ...props
}: LiProps): JSX.Element => {
  return (
    <li className={cn(styles.li, styles[color], className)} {...props}>
      <Icon icon={icon} size={20} />
      {size === "s" ? <P>{children}</P> : <Htag tag="h2">{children}</Htag>}
    </li>
  );
};
