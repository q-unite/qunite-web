import { z } from "zod";
import { validationSchema } from "../validation";

export type UpdateFormFields = z.infer<typeof validationSchema>;
