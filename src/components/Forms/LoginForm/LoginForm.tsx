import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../UI";
import styles from "./LoginForm.module.css";
import APIClient from "../../../services/api-client";
import { schema, FormData } from "./schema";
import { AuthResponse } from "../../../interfaces/AuthResponse";
import authStore from "../../../stores/auth-store";
import { Navigate } from "react-router-dom";
import InputBox from "../InputBox/InputBox";

const apiClient = new APIClient<AuthResponse>("/auth/sign-in");

const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FieldValues): Promise<void> => {
    await apiClient
      .auth({ ...data })
      .then((data) => {
        authStore.getState().setToken(data.token);
        console.log(authStore.getState().token);
      })
      .catch((err) => console.log(err));
  };

  const isAuthenticated = authStore.getState().token;

  return isAuthenticated !== null ? (
    <Navigate to="/" />
  ) : (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputBox
        id="login"
        placeholder="Type your login"
        type="text"
        error={errors.login?.message}
        {...register("login")}
      />
      <InputBox
        id="password"
        placeholder="Type some password"
        {...register("password")}
        type="password"
        error={errors.password?.message}
      />
      <Button type="submit" appearance="success">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
