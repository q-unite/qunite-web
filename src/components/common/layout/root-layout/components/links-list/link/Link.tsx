import { NavLink } from "react-router-dom";
import { LinkProps } from "./LinkProps";
import { Htag, Icon } from "../../../../../ui";

const Link: React.FC<LinkProps> = ({
  href,
  name,
  icon,
  styles,
  isHidden,
}): JSX.Element => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
      }
    >
      <Icon icon={icon} size={20} />
      {!isHidden && (
        <Htag tag="h2" color="gray">
          {name}
        </Htag>
      )}
    </NavLink>
  );
};

export default Link;
