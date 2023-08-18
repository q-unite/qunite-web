import { ReactNode } from "react";

export interface ModalProps {
  isShown: boolean;
  title: string;
  children: ReactNode;
  successButtonText: string;
  dangerButtonText: string;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}
