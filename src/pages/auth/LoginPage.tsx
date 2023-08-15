import { withAuthLayout } from "../../components/AuthLayout/AuthLayout";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

const LoginPage = (): JSX.Element => {
  return <LoginForm />;
};

export default withAuthLayout(LoginPage);
