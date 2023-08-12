import { NavLink } from "react-router-dom";
import { Li } from "../../../UI";
import { NavbarItemProps } from "./NavbarItem.props";
import styles from "./NavbarItem.module.css";

export const NavbarItem = ({
  icon,
  name,
  href,
}: NavbarItemProps): JSX.Element => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${styles.active} ${styles.navbarItem}`
          : `${styles.navbarItem}`
      }
    >
      <Li icon={icon}>{name}</Li>
    </NavLink>
  );
};
