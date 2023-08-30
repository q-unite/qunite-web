import { createContext } from "react";
import { Member } from "../interfaces/Member";
import { User } from "../interfaces/User";

interface QueueDetailsContextProps {
  me?: User;
  members: Member[];
  id: number;
  isMyQueue: boolean;
  isInQueue: boolean;
}

export const QueueDetailsContext =
  createContext<QueueDetailsContextProps | null>(null);
