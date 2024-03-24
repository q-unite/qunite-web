import { lazy, Suspense, useState } from "react";
import Nav from "./nav";
import { Button } from "@/components/common/ui";
import styles from "./BurgerMenu.module.css";

const CreateQueueModal = lazy(
  () => import("@/components/common/shared/modals/CreateQueueModal")
);

const BurgerMenu = (): JSX.Element => {
  const [isHidden, setIsHidden] = useState(true);
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={styles.burgerMenu}>
      <Button
        appearance="danger"
        icon={isHidden ? "menu" : "arrow"}
        onClick={() => setIsHidden(!isHidden)}
        style={!isHidden ? { transform: "rotate(90deg)" } : {}}
      />

      <Nav isHidden={isHidden} setIsShown={setIsShown} />

      <Suspense fallback={null}>
        <CreateQueueModal isShown={isShown} setIsShown={setIsShown} />
      </Suspense>
    </div>
  );
};

export default BurgerMenu;
