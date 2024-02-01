import { Link } from "react-router-dom";
import { withAuthLayout } from "../../common/layout/auth-layout";
import SignUpForm from "./components/sign-up-form";
import { P } from "../../common/ui";
import styles from "./SignUp.module.css";

const SignUpPage = (): JSX.Element => {
  return (
    <div className={styles.flexContainer}>
      <SignUpForm />
      <P color="black">
        Doesn't have an account? <Link to="/login">Log in</Link>
      </P>
    </div>
  );
};

export default withAuthLayout(SignUpPage);
