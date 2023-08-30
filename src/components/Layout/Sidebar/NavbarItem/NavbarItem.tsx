import { NavLink } from "react-router-dom";
import { Li } from "../../../UI";
import { NavbarItemProps } from "./NavbarItem.props";

export const NavbarItem = ({
  icon,
  name,
  href,
  isHidden,
  styles,
}: NavbarItemProps): JSX.Element => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${styles.active} ${styles.navbarItem}`
          : `${styles.navbarItem}`
      }
      style={isHidden ? { justifyContent: "center", paddingLeft: 0 } : {}}
    >
      <Li icon={icon}>{!isHidden && name}</Li>
    </NavLink>
  );
};
