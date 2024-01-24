import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, P } from "../../common/ui";
import styles from "./LoginForm.module.css";
import { schema, FormData } from "./schema";
import { Navigate, useNavigate } from "react-router-dom";
import InputBox from "../InputBox";
import { useGetMe } from "../../../hooks";
import AuthService from "../../../lib/services/auth";
import getErrorMessage from "../../../lib/utils/getErrorMessage";

const LoginForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { data, refetch } = useGetMe();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const isAuthenticated = data?.username;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await AuthService.signIn(data);
      await refetch().then(() => navigate("/"));
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      setError("root", { message });
    }
  });

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
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
      {errors.root && <P color="primary">{errors.root.message}</P>}
    </form>
  );
};

export default LoginForm;
