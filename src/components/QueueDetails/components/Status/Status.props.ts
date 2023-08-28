import { DetailedHTMLProps, HTMLAttributes } from "react";
import { User } from "../../../../interfaces/User";

export interface StatusProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  me: User;
}
