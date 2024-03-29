import { lazy, Suspense, useState } from "react";

import { Htag, Button } from "@/components/common/ui";

import { useWindowWidth } from "@/hooks";
import { handleModalOpen } from "@/handlers/handleModalOpen";

import styles from "./Header.module.css";

const CreateQueueModal = lazy(
  () => import("@/components/common/shared/modals/CreateQueueModal")
);

const Header = (): JSX.Element => {
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
      <Suspense fallback={null}>
        <CreateQueueModal isShown={isShown} setIsShown={setIsShown} />
      </Suspense>
    </header>
  );
};
export default Header;
