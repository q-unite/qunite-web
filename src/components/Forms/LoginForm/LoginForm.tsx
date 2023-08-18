import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, P } from "../../UI";
import styles from "./LoginForm.module.css";
import { schema, FormData } from "./schema";
import authStore from "../../../stores/auth-store";
import { Navigate } from "react-router-dom";
import InputBox from "../InputBox";
import { onSubmit } from "../onSubmit";

const LoginForm = (): JSX.Element => {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const isAuthenticated = authStore.getState().token;

  return isAuthenticated !== null ? (
    <Navigate to="/" />
  ) : (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data: FieldValues) =>
        onSubmit({ data, endpoint: "/auth/sign-in", setError })
      )}
    >
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
      {error && <P color="primary">{error}</P>}
      <Button type="submit" appearance="success">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
