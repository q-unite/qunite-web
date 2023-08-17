import cn from "classnames";

import styles from "./Droppdown.module.css";
import { Li } from "../../../UI";
import { handleLogout } from "../handleLogout";

export const Content = ({ visible }: { visible: boolean }): JSX.Element => {
  return (
    <ul
      className={cn(styles.content, {
        [styles.visible]: !visible,
      })}
    >
      <Li icon="plus" size="s">
        Create queue
      </Li>
      <Li icon="logout" color="primary" size="s" onClick={() => handleLogout()}>
        Log out
      </Li>
    </ul>
  );
};
