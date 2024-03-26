import { create } from "zustand";
import { Queue } from "../types/queue";

interface QueuesStore {
  queues: Queue[];
  // eslint-disable-next-line no-unused-vars
  setQueues: (queues: Queue[]) => void;
  // eslint-disable-next-line no-unused-vars
  addToQueues: (queue: Queue) => void;
}

const useQueuesStore = create<QueuesStore>((set) => ({
  queues: [],
  setQueues: (queues) => set(() => ({ queues })),
  addToQueues: (queue) =>
    set((store) => ({ queues: [...store.queues, queue] })),
}));

export default useQueuesStore;
