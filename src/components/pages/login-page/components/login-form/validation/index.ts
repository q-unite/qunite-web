import { z } from "zod";

export const validationSchema = z.object({
  login: z
    .string()
    .min(4, "Login must have at least 4 characters")
    .max(32, "Login must have at most 32 characters")
    .or(
      z.string({ required_error: "Specify email" }).email("Enter correct email")
    ),
  password: z
    .string({ required_error: "Specify password" })
    .min(6, "Password must have at least 6 characters")
    .max(32, "Password must be at most 32 characters"),
});
