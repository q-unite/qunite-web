import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { Button } from "../../UI";
import { Ul } from "./Ul/Ul";
import styles from "./Sidebar.module.css";
import navStyles from "./NavbarItem/NavbarItem.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar = ({ ...props }: Props): JSX.Element => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <nav {...props} style={isHidden ? { width: "156px" } : { width: "330px" }}>
      <Ul isHidden={isHidden} navStyles={navStyles} />

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
