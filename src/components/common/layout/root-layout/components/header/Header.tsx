import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes, Suspense, lazy } from "react";

import { useWindowWidth } from "../../../../../../hooks";
import styles from "./Header.module.css";
import Loading from "./components/loading";
import HeaderLogo from "./components/header-logo";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Dropdown = lazy(() => import("./components/dropdown"));
const BurgerMenu = lazy(() => import("./components/burger-menu"));

const Header = ({ className, ...props }: Props): JSX.Element => {
  const width = useWindowWidth();

  return (
    <header className={cn(className, styles.header)} {...props}>
      <HeaderLogo />
      <Suspense fallback={<Loading />}>
        {width > 765 ? <Dropdown /> : <BurgerMenu />}
      </Suspense>
    </header>
  );
};

export default Header;
