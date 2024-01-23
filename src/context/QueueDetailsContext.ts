import { createContext } from "react";
import { Member } from "../types/member";
import { User } from "../types/user";

interface QueueDetailsContextProps {
  me?: User;
  members: Member[];
  id: number;
  isMyQueue: boolean;
  isInQueue: boolean;
  isManager: boolean;
}

export const QueueDetailsContext = createContext<QueueDetailsContextProps>(
  {} as QueueDetailsContextProps
);
