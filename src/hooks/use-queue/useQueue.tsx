import useAuth from "../use-auth";
import { UseQueueReturn } from "./types";
import { useQueueContext } from "./use-queue-context";

const useQueue = (): UseQueueReturn => {
  const {
    id,
    queue,
    members,
    managers,
    creatorId,
    updateMembers,
    updateCreator,
    updateManagers,
  } = useQueueContext();
  const { user } = useAuth();

  const isManager = !!managers?.find((m) => m.id === user.id);
  const isMyQueue = user.id === creatorId;
  const isInQueue = !!members?.find((m) => m.memberId.toString() === user.id);

  return {
    id,
    queue,
    members,
    managers,
    creatorId,
    isMyQueue,
    isInQueue,
    isManager,
    updateMembers,
    updateCreator,
    updateManagers,
  };
};

export default useQueue;
