import { z } from "zod";
import { validationSchema } from "../validation";

export type SignUpFormFields = z.infer<typeof validationSchema>;
