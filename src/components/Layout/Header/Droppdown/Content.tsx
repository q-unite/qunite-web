import cn from "classnames";

import styles from "./Droppdown.module.css";
import { P } from "../../../UI";

export const Content = ({ visible }: { visible: boolean }): JSX.Element => {
  return (
    <ul
      className={cn(styles.content, {
        [styles.visible]: !visible,
      })}
    >
      <li>
        <P>Create queue</P>
      </li>
      <li>
        <P color="primary">Log out</P>
      </li>
    </ul>
  );
};
