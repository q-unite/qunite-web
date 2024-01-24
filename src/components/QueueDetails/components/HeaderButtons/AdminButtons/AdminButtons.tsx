import { useState } from "react";
import { handleModalOpen } from "../../../../../handlers/handleModalOpen";
import { Button } from "../../../../common/ui";
import styles from "./AdminButtons.module.css";
import { DeleteQueueModal, ManagersQueueModal } from "../../../../Modals";

export const AdminButtons = ({ id }: { id: string }): JSX.Element => {
  const [deleteIsShown, setDeleteIsShown] = useState(false);
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
        isShown={deleteIsShown}
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
