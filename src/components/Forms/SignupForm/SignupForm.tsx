import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate, useNavigate } from "react-router-dom";

import APIClient from "../../../services/api-client";
import { Button, Input, P } from "../../UI";
import styles from "./SignupForm.module.css";
import { schema, FormData } from "./schema";
import authStore from "../../../stores/auth-store";
import InputBox from "../InputBox/InputBox";

const apiClient = new APIClient<void>("/auth/sign-up");

const SignupForm = (): JSX.Element => {
  const navigate = useNavigate();

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
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const isAuthenticated = authStore.getState().token;

  return isAuthenticated !== null ? (
    <Navigate to="/" />
  ) : (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
};

export default SignupForm;
