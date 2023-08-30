import { z } from "zod";

export const schema = z.object({
  login: z.string({ required_error: "Specify login" }),
  password: z
    .string({ required_error: "Specify password" })
    .min(6, "Password must be at leat 6 characters")
    .max(32, "Password must be at most 32 characters"),
});

export type FormData = z.infer<typeof schema>;
