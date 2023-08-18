import { NavbarItem } from "../NavbarItem/NavbarItem";
import styles from "./Ul.module.css";

interface Props {
  isHidden: boolean;
  navStyles: CSSModuleClasses;
}

export const Ul = ({ isHidden, navStyles }: Props): JSX.Element => {
  return (
    <ul className={styles.ul}>
      <NavbarItem
        icon="queues"
        name="Queues"
        href="/"
        isHidden={isHidden}
        styles={navStyles}
      />
      <NavbarItem
        icon="dashboard"
        name="Dashboard"
        href="/dashboard"
        isHidden={isHidden}
        styles={navStyles}
      />
      <NavbarItem
        icon="settings"
        name="Settings"
        href="/settings"
        isHidden={isHidden}
        styles={navStyles}
      />
    </ul>
  );
};
