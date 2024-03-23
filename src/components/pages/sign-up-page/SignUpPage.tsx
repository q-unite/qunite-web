import { Link } from "react-router-dom";

import { withAuthLayout } from "@/components/common/layout/auth-layout";
import { P } from "@/components/common/ui";
import SignUpForm from "./components/sign-up-form";

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
