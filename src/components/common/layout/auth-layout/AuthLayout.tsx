import { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "@/hooks/use-auth";
import styles from "./AuthLayout.module.css";
import { AuthLayoutProps } from "./AuthLayout.props";
import { Sidebar } from "./components/sidebar";

const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

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
