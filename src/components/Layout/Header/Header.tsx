import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Header.module.css";
import { Droppdown } from "./Droppdown/Droppdown";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header = ({ className, ...props }: Props): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <h1 className={styles.logo}>queued</h1>
      <Droppdown />
      <BurgerMenu />
    </header>
  );
};

export default Header;
