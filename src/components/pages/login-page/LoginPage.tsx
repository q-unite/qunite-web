import { Link } from "react-router-dom";
import { withAuthLayout } from "../../common/layout/auth-layout";
import LoginForm from "./components/login-form";
import { P } from "../../common/ui";
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
