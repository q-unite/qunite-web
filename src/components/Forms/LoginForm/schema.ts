import { z } from "zod";

export const schema = z.object({
  login: z
    .string({ required_error: "Specify login" })
    .min(4, "Login must be at least 4 characters")
    .max(32, "Login must be at most 32 characters")
    .regex(/^[a-z0-9_]+$/, {
      message: "You can use a-z, 0-9 and underscores",
    }),
  password: z
    .string({ required_error: "Specify password" })
    .min(6, "Password must be at leat 6 characters")
    .max(32, "Password must be at most 32 characters"),
});

export type FormData = z.infer<typeof schema>;
