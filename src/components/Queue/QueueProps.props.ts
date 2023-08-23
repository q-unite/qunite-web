import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface QueueProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
}
