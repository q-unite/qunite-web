import cn from "classnames";

import styles from "./Droppdown.module.css";
import { Li } from "../../../common/ui";
import { handleModalOpen } from "../../../../handlers/handleModalOpen";
import AuthService from "../../../../lib/services/auth/AuthService";
import useAuth from "../../../../hooks/use-auth";
import { useNavigate } from "react-router-dom";

interface Props {
  visible: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Content = ({ visible, setIsShown }: Props): JSX.Element => {
  const { update } = useAuth();
  const navigate = useNavigate();

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
      <Li
        icon="logout"
        color="primary"
        size="s"
        onClick={() => {
          AuthService.logout();
          update();
          navigate(0);
        }}
      >
        Log out
      </Li>
    </ul>
  );
};
