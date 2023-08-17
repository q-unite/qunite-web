import { FieldErrors } from "react-hook-form";

export type logInErrors = FieldErrors<{
  password: string;
  login: string;
}>;

export type signupErrors = FieldErrors<{
  username: string;
  email: string;
  password: string;
}>;
