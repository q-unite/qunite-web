import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { Button } from "../../../../ui";
import styles from "./Sidebar.module.css";
import LinksList from "../links-list";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar = ({ ...props }: Props): JSX.Element => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <nav {...props} style={isHidden ? { width: "156px" } : { width: "330px" }}>
      <LinksList activeLinkStyles={styles} isHidden={isHidden} />

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
