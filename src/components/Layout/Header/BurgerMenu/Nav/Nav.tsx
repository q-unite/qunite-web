import { handleModalOpen } from "../../../../../handlers/handleModalOpen";
import { Button } from "../../../../common/ui";
import { Ul } from "../../../Sidebar/Ul/Ul";
import { handleLogout } from "../../handleLogout";
import styles from "./Nav.module.css";
import { NavProps } from "./Nav.props";

const Nav = ({ isHidden, setIsShown }: NavProps): JSX.Element => {
  return (
    <nav className={styles.nav} style={isHidden ? { display: "none" } : {}}>
      <Ul isHidden={false} navStyles={styles} />

      <footer className={styles.footer}>
        <Button
          appearance="success"
          onClick={(e) => handleModalOpen(e, setIsShown)}
        >
          Create queue
        </Button>
        <Button appearance="danger" onClick={() => handleLogout()}>
          Log out
        </Button>
      </footer>
    </nav>
  );
};

export default Nav;
