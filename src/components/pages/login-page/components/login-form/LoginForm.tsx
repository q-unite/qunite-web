import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import InputBox from "@/components/Forms/InputBox";
import { Button, P } from "@/components/common/ui";

import useAuth from "@/hooks/use-auth";
import AuthService from "@/lib/services/auth";
import getErrorMessage from "@/lib/utils/getErrorMessage";

import { LoginFormFields } from "./types";
import { validationSchema } from "./validation";

import styles from "./LoginForm.module.css";

const LoginForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { update } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormFields>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      data.login = data.login.toLowerCase();
      await AuthService.signIn(data);
      await update().then(() => navigate(0));
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      setError("root", { message });
    }
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <InputBox
        id="login"
        placeholder="Type your login"
        type="text"
        {...register("login")}
        error={errors.login?.message}
      />
      <InputBox
        id="password"
        placeholder="Type some password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />
      <Button type="submit" appearance="success">
        Login
      </Button>
      {errors.root && <P color="primary">{errors.root.message}</P>}
    </form>
  );
};

export default LoginForm;
