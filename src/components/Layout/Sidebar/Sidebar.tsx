import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { NavbarItem } from "./NavbarItem/NavbarItem";
import styles from "./Sidebar.module.css";
import { Button } from "../../UI";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar = ({ ...props }: Props): JSX.Element => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <nav {...props} style={isHidden ? { width: "156px" } : { width: "330px" }}>
      <ul className={styles.ul}>
        <NavbarItem icon="queues" name="Queues" href="/" isHidden={isHidden} />
        <NavbarItem
          icon="dashboard"
          name="Dashboard"
          href="/dashboard"
          isHidden={isHidden}
        />
        <NavbarItem
          icon="settings"
          name="Settings"
          href="/settings"
          isHidden={isHidden}
        />
      </ul>
      <div
        className={styles.hideButtonContainer}
        style={isHidden ? { transform: "rotate(180deg)" } : {}}
      >
        <Button
          className={styles.hideButton}
          appearance="danger"
          icon="arrow"
          onClick={() => setIsHidden(!isHidden)}
        />
      </div>
    </nav>
  );
};

export default Sidebar;
