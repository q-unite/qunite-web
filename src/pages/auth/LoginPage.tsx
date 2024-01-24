import { Link } from "react-router-dom";
import { withAuthLayout } from "../../components/AuthLayout/AuthLayout";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { P } from "../../components/common/ui";

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
