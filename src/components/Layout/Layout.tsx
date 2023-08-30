import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Layout = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
