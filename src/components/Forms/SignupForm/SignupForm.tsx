import { Button, Input } from "../../UI";
import styles from "./SignupForm.module.css";

const SignupForm = (): JSX.Element => {
  return (
    <form className={styles.form}>
      <Input placeholder="Type your email" />
      <Input placeholder="Type some username" />
      <Input placeholder="Type some password" type="password" />
      <Button type="submit" onClick={() => {}} appearance="success">
        Create an account
      </Button>
    </form>
  );
};

export default SignupForm;
