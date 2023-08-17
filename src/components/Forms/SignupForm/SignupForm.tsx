import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate, useNavigate } from "react-router-dom";

import { Button, P } from "../../UI";
import styles from "./SignupForm.module.css";
import { schema, FormData } from "./schema";
import authStore from "../../../stores/auth-store";
import InputBox from "../InputBox";
import { onSubmit } from "../onSubmit";

const SignupForm = (): JSX.Element => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
        onSubmit({
          data,
          navigate,
          endpoint: "/auth/sign-up",
          setError,
        })
      )}
    >
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
      {error && <P color="primary">{error}</P>}
      <Button type="submit" appearance="success">
        Create an account
      </Button>
    </form>
  );
};

export default SignupForm;
