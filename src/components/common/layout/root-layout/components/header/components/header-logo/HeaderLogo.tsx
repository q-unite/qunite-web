import { Link } from "react-router-dom";
import { Htag } from "../../../../../../ui";
import styles from "./HeaderLogo.module.css";

const HeaderLogo = (): JSX.Element => {
  return (
    <Htag className={styles.logo} tag="h1" color="primary">
      <Link to="/">queued</Link>
    </Htag>
  );
};

export default HeaderLogo;
