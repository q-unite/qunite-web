import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { Button, P } from "../../common/ui";
import styles from "./SignupForm.module.css";
import { schema, FormData } from "./schema";
import InputBox from "../InputBox";
import AuthService from "../../../lib/services/auth/AuthService";
import getErrorMessage from "../../../lib/utils/getErrorMessage";
import useAuth from "../../../hooks/use-auth";

const SignupForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { update } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await AuthService.signUp(data);
      await update().then(() => navigate("/login"));
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      setError("root", { message });
    }
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <InputBox
        placeholder="Type your email"
        {...register("email")}
        id="email"
        type="email"
        error={errors.email?.message}
      />
      <InputBox
        placeholder="Type some username"
        {...register("username")}
        id="username"
        type="text"
        error={errors.username?.message}
      />
      <InputBox
        placeholder="Type some password"
        {...register("password")}
        id="password"
        type="password"
        error={errors.password?.message}
      />
      <Button type="submit" appearance="success">
        Create an account
      </Button>
      {errors.root && <P color="primary">{errors.root.message}</P>}
    </form>
  );
};

export default SignupForm;
