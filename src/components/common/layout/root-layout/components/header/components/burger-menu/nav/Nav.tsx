import { handleModalOpen } from "../../../../../../../../../handlers/handleModalOpen";
import styles from "./Nav.module.css";
import { NavProps } from "./Nav.props";
import FooterButtons from "./footer-buttons";
import LinksLinks from "../../../../links-list";

const Nav = ({ isHidden, setIsShown }: NavProps): JSX.Element | null => {
  if (isHidden) return null;

  return (
    <nav className={styles.nav}>
      <LinksLinks activeLinkStyles={styles} />
      <FooterButtons handleClick={(e) => handleModalOpen(e, setIsShown)} />
    </nav>
  );
};

export default Nav;
