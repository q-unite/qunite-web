import { Link } from "react-router-dom";
import { withAuthLayout } from "../AuthLayout/AuthLayout";
import SignupForm from "../Forms/SignupForm/SignupForm";
import { P } from "../common/ui";

const SignupPage = (): JSX.Element => {
  return (
    <>
      <SignupForm />
      <P color="black">
        Doesn't have an account? <Link to="/login">Log in</Link>
      </P>
    </>
  );
};

export default withAuthLayout(SignupPage);
