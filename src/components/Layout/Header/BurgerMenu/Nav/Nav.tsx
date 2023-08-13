import { Button } from "../../../../UI";
import { Ul } from "../../../Sidebar/Ul/Ul";
import styles from "./Nav.module.css";
import { NavProps } from "./Nav.props";

const Nav = ({ isHidden }: NavProps): JSX.Element => {
  return (
    <nav className={styles.nav} style={isHidden ? { display: "none" } : {}}>
      <Ul isHidden={false} navStyles={styles} />

      <footer className={styles.footer}>
        <Button appearance="success">Create queue</Button>
        <Button appearance="danger">Log out</Button>
      </footer>
    </nav>
  );
};

export default Nav;
