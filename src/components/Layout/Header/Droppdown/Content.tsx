import cn from "classnames";

import styles from "./Droppdown.module.css";
import { Li } from "../../../UI";
import { handleLogout } from "../handleLogout";
import { handleModalOpen } from "../../../../handlers/handleModalOpen";

interface Props {
  visible: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Content = ({ visible, setIsShown }: Props): JSX.Element => {
  return (
    <ul
      className={cn(styles.content, {
        [styles.visible]: !visible,
      })}
    >
      <Li
        icon="plus"
        size="s"
        onClick={(event: React.MouseEvent<HTMLLIElement>) =>
          handleModalOpen(event, setIsShown)
        }
      >
        Create queue
      </Li>
      <Li icon="logout" color="primary" size="s" onClick={() => handleLogout()}>
        Log out
      </Li>
    </ul>
  );
};
