import { createContext } from "react";
import { Member } from "../interfaces/Member";
import { User } from "../interfaces/User";

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
