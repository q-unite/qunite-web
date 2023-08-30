import { useState } from "react";
import { handleModalOpen } from "../../../../../handlers/handleModalOpen";
import { Button } from "../../../../UI";
import styles from "./AddminButtons.module.css";
import { DeleteQueueModal, ManagersQueueModal } from "../../../../Modals";

export const AddminButtons = ({ id }: { id: number }): JSX.Element => {
  const [deletIsShown, setDeleteIsShown] = useState(false);
  const [managersIsShown, setManagersIsShown] = useState(false);

  return (
    <>
      <div className={styles.buttons}>
        <Button
          appearance="danger"
          icon="pencil"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            handleModalOpen(event, setManagersIsShown)
          }
        >
          Managers
        </Button>
        <Button
          appearance="red"
          icon="trash"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            handleModalOpen(event, setDeleteIsShown)
          }
        />
      </div>

      <DeleteQueueModal
        isShown={deletIsShown}
        setIsShown={setDeleteIsShown}
        queueId={id}
      />
      <ManagersQueueModal
        isShown={managersIsShown}
        setIsShown={setManagersIsShown}
        queueId={id}
      />
    </>
  );
};
