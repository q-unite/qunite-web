import { Button, Input } from "../../UI";
import styles from "./LoginForm.module.css";

const LoginForm = (): JSX.Element => {
  return (
    <form className={styles.form}>
      <Input placeholder="Type your username" />
      <Input placeholder="Type your password" type="password" />
      <Button type="submit" onClick={() => {}} appearance="success">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
