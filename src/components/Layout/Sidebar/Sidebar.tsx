import { DetailedHTMLProps, HTMLAttributes } from "react";
import { NavbarItem } from "./NavbarItem/NavbarItem";
import styles from "./Sidebar.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar = ({ ...props }: Props): JSX.Element => {
  return (
    <nav {...props}>
      <ul className={styles.ul}>
        <NavbarItem icon="queues" name="Queues" href="/" />
        <NavbarItem icon="dashboard" name="Dashboard" href="/dashboard" />
        <NavbarItem icon="settings" name="Settings" href="/settings" />
      </ul>
    </nav>
  );
};

export default Sidebar;
