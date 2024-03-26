import { Outlet } from "react-router-dom";

import styles from "./RootLayout.module.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const RootLayout = (): JSX.Element => {
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

export default RootLayout;
