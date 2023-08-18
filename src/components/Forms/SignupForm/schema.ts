import { z } from "zod";

export const schema = z.object({
  username: z
    .string({ required_error: "Specify username" })
    .min(4, "Username must be at least 4 characters")
    .max(32, "Username must be at most 32 characters")
    .regex(/^[a-z0-9_]+$/, {
      message: "You can use a-z, 0-9 and underscores",
    }),
  email: z
    .string()
    .min(1, { message: "Specify email" })
    .email("Enter correct email"),
  password: z
    .string({ required_error: "Specify password" })
    .min(6, "Password must be at leat 6 characters")
    .max(32, "Password must be at most 32 characters"),
});

export type FormData = z.infer<typeof schema>;
