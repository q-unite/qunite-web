import { Link } from "react-router-dom";

import { withAuthLayout } from "@/components/common/layout/auth-layout";
import { P } from "@/components/common/ui";
import LoginForm from "./components/login-form";

import styles from "./LoginPage.module.css";

const LoginPage = (): JSX.Element => {
  return (
    <div className={styles.flexContainer}>
      <LoginForm />
      <P color="black">
        Doesn't have an account? <Link to="/sign-up">Sign up</Link>
      </P>
    </div>
  );
};

export default withAuthLayout(LoginPage);
