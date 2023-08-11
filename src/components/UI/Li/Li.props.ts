import { ReactNode } from "react";

export interface LiProps {
  children: ReactNode;
  icon: "queues" | "dashboard" | "settings" | "plus" | "logout";
  color?: "gray" | "primary";
}
