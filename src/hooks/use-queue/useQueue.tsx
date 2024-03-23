import { useMemo } from "react";
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

  const isManager = useMemo(
    () => !!managers?.find((m) => m.id === user.id),
    [managers, user]
  );
  const isMyQueue = user.id === creatorId;
  const isInQueue = useMemo(
    () => !!members?.find((m) => m.memberId === user.id),
    [members, user]
  );

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
