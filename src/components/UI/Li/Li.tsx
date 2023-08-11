import { Icon } from "../Icon/Icon";
import { LiProps } from "./Li.props";

import styles from "./Li.module.css";
import { Htag } from "..";

export const Li = ({
  children,
  icon,
  color = "gray",
}: LiProps): JSX.Element => {
  return (
    <li className={`${styles.li} ${styles[color]}`}>
      <Icon icon={icon} size={20} />
      <Htag tag="h2" color={color}>
        {children}
      </Htag>
    </li>
  );
};
