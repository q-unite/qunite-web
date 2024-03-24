import { DetailedHTMLProps, LiHTMLAttributes, ReactNode } from "react";

export interface LiProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children: ReactNode;
  icon: "queues" | "dashboard" | "settings" | "plus" | "logout";
  color?: "gray" | "primary";
  size?: "s" | "m";
}
