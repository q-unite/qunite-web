import { useState } from "react";
import styles from "./BurgerMenu.module.css";
import { CreateQueueModal } from "../../../../../../../Modals";
import { Button } from "../../../../../../ui";
import Nav from "./nav";

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

      <CreateQueueModal isShown={isShown} setIsShown={setIsShown} />
    </div>
  );
};

export default BurgerMenu;
