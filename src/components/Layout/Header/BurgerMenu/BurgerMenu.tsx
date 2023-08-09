import { Button } from "../../../UI";
import styles from "./BurgerMenu.module.css";

export const BurgerMenu = (): JSX.Element => {
  return (
    <div className={styles.burgerMenu}>
      <Button appearance="danger" icon="menu" />

      {/* in fututre versions there also will be the navaigation */}
    </div>
  );
};
