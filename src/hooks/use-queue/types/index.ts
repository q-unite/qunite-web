import { Member } from "@/types/member";
import { Queue } from "@/types/queue";
import { User } from "@/types/user";

export interface QueueContextProps {
  id: string;
  queue: Queue;
  members: Member[];
  managers: User[];
  creatorId: string;
  updateMembers: () => Promise<void>;
  updateManagers: () => Promise<void>;
  updateCreator: () => Promise<void>;
}

export interface UseQueueReturn extends QueueContextProps {
  isMyQueue: boolean;
  isInQueue: boolean;
  isManager: boolean;
}
