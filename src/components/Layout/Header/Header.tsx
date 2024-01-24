import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./Header.module.css";
import { Droppdown } from "./Droppdown/Droppdown";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { Htag } from "../../common/ui";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header = ({ className, ...props }: Props): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Htag className={styles.logo} tag="h1" color="primary">
        <Link to="/">queued</Link>
      </Htag>
      <Droppdown />
      <BurgerMenu />
    </header>
  );
};

export default Header;
