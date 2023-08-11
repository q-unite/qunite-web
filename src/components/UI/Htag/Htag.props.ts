import { ReactNode } from "react";

export interface HtagProps {
  tag: "h1" | "h2";
  children: ReactNode;
  color?: "gray" | "black" | "primary";
}
