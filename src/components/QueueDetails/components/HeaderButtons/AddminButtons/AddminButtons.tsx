import { handleModalOpen } from "../../../../../handlers/handleModalOpen";
import { Button } from "../../../../UI";
import styles from "./AddminButtons.module.css";

interface Props {
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddminButtons = ({ setIsShown }: Props): JSX.Element => {
  return (
    <div className={styles.buttons}>
      <Button appearance="danger" icon="pencil">
        Managers
      </Button>
      <Button
        appearance="red"
        icon="trash"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleModalOpen(event, setIsShown)
        }
      />
    </div>
  );
};
