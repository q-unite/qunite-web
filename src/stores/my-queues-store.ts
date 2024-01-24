import { create } from "zustand";
import { Queue } from "../types/queue";

interface MyQueuesStore {
  myQueues: Queue[];
  // eslint-disable-next-line no-unused-vars
  setMyQueues: (queues: Queue[]) => void;
  // eslint-disable-next-line no-unused-vars
  addToMyQueues: (queue: Queue) => void;
  // eslint-disable-next-line no-unused-vars
  removeFromMyQueues: (queueId: string) => void;
}

const useMyQueuesStore = create<MyQueuesStore>((set) => ({
  myQueues: [],
  setMyQueues: (queues) => set(() => ({ myQueues: queues })),
  addToMyQueues: (queue) =>
    set((store) => ({ myQueues: [...store.myQueues, queue] })),
  removeFromMyQueues: (queueId) =>
    set((store) => ({
      myQueues: store.myQueues.filter((q) => q.id !== queueId),
    })),
}));

export default useMyQueuesStore;
