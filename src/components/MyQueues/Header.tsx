import { useState } from "react";
import { handleModalOpen } from "../../handlers/handleModalOpen";
import { CreateQueueModal } from "../Modals/CreateQueueModal";
import { Button, Htag } from "../UI";
import styles from "./MyQueues.module.css";
import { useWindowWidth } from "../../hooks";

export const Header = (): JSX.Element => {
  const [isShown, setIsShown] = useState(false);
  const windowWidth = useWindowWidth();

  return (
    <header className={styles.header}>
      <Htag tag="h1">Your queues</Htag>
      <Button
        appearance="danger"
        icon="plus"
        onClick={(e) => handleModalOpen(e, setIsShown)}
      >
        {windowWidth > 765 ? "Create queue" : null}
      </Button>
      <CreateQueueModal isShown={isShown} setIsShown={setIsShown} />
    </header>
  );
};
