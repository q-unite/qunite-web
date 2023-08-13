import { useState } from "react";
import { Button } from "../../../UI";
import styles from "./BurgerMenu.module.css";
import Nav from "./Nav/Nav";

export const BurgerMenu = (): JSX.Element => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={styles.burgerMenu}>
      <Button
        appearance="danger"
        icon={isHidden ? "menu" : "arrow"}
        onClick={() => setIsHidden(!isHidden)}
        style={!isHidden ? { transform: "rotate(90deg)" } : {}}
      />

      <Nav isHidden={isHidden} />
    </div>
  );
};
