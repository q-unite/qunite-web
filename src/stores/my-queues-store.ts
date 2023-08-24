import { create } from "zustand";
import { Queue } from "../interfaces/Queue";

interface MyQueuesStore {
  myQueues: Queue[];
  // eslint-disable-next-line no-unused-vars
  setMyQueues: (queues: Queue[]) => void;
  // eslint-disable-next-line no-unused-vars
  addToMyQueues: (queue: Queue) => void;
}

const useMyQueuesStore = create<MyQueuesStore>((set) => ({
  myQueues: [],
  setMyQueues: (queues) => set(() => ({ myQueues: queues })),
  addToMyQueues: (queue) =>
    set((store) => ({ myQueues: [...store.myQueues, queue] })),
}));

export default useMyQueuesStore;
