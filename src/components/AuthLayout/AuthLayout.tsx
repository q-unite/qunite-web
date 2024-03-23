import { FunctionComponent } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import styles from "./AuthLayout.module.css";
import { AuthLayoutProps } from "./AuthLayout.props";

const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Sidebar className={styles.sidebar} />
      <main className={styles.body}>{children}</main>
    </div>
  );
};

export const withAuthLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AuthLayout>
        <Component {...props} />
      </AuthLayout>
    );
  };
};
