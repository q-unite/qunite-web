import { createContext } from "react";
import { Member } from "../types/member";

interface QueueDetailsContextProps {
  members: Member[];
  id: string;
  isMyQueue: boolean;
  isInQueue: boolean;
  isManager: boolean;
}

export const QueueDetailsContext = createContext<QueueDetailsContextProps>(
  {} as QueueDetailsContextProps
);
