import { useState } from "react";
import { Button } from "../../../common/ui";
import styles from "./BurgerMenu.module.css";
import Nav from "./Nav/Nav";
import { CreateQueueModal } from "../../../Modals/CreateQueueModal";

export const BurgerMenu = (): JSX.Element => {
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

      <CreateQueueModal isShown={isShown} setIsShown={setIsShown} />
    </div>
  );
};
