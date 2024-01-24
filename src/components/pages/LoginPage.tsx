import { Link } from "react-router-dom";
import { withAuthLayout } from "../common/layout/auth-layout";
import LoginForm from "../Forms/LoginForm/LoginForm";
import { P } from "../common/ui";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <LoginForm />
      <P color="black">
        Doesn't have an account? <Link to="/signup">Sign up</Link>
      </P>
    </>
  );
};

export default withAuthLayout(LoginPage);
