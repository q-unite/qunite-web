import { lazy, Suspense, useState } from "react";
import { Button } from "@/components/common/ui";

import useQueue from "@/hooks/use-queue";
import { handleModalOpen } from "@/handlers/handleModalOpen";

import styles from "./AdminButtons.module.css";

const DeleteQueueModal = lazy(
  () => import("@/components/common/shared/modals/DeleteQueueModal")
);
const ManagersQueueModal = lazy(
  () => import("@/components/common/shared/modals/ManagersQueueModal")
);

const AdminButtons = (): JSX.Element => {
  const { id } = useQueue();
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

      <Suspense fallback={null}>
        <DeleteQueueModal
          isShown={deleteIsShown}
          setIsShown={setDeleteIsShown}
          queueId={id}
        />
      </Suspense>
      <Suspense fallback={null}>
        <ManagersQueueModal
          isShown={managersIsShown}
          setIsShown={setManagersIsShown}
          queueId={id}
        />
      </Suspense>
    </>
  );
};

export default AdminButtons;
