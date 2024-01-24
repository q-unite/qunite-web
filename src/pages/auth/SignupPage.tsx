import { Link } from "react-router-dom";
import { withAuthLayout } from "../../components/AuthLayout/AuthLayout";
import SignupForm from "../../components/Forms/SignupForm/SignupForm";
import { P } from "../../components/common/ui";

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
