import { useParams } from "react-router-dom";
import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import QueueApi from "@/lib/api/queue/QueueApi";

import { QueueContextProps } from "../types";
import { Member } from "@/types/member";
import { User } from "@/types/user";
import { Queue } from "@/types/queue";

const QueueContext = createContext<QueueContextProps>({
  id: "",
  queue: {} as Queue,
  members: [] as Member[],
  managers: [] as User[],
  creatorId: "",
  updateCreator: () => new Promise(() => {}),
  updateManagers: () => new Promise(() => {}),
  updateMembers: () => new Promise(() => {}),
});

export const useQueueContext = (): QueueContextProps =>
  useContext(QueueContext);

const QueueProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();

  const { data: queue, isFetched: isFetchedQueue } = useQuery({
    queryKey: ["queue", id],
    queryFn: () => QueueApi.getQueueById(id!),
    refetchOnWindowFocus: false,
    retry: false,
  });

  const {
    data: managers,
    refetch: refetchManagers,
    isFetched: isFetchedManagers,
  } = useQuery({
    queryKey: ["queue-managers", id],
    queryFn: () => QueueApi.getManagersOfQueue(id!),
    refetchOnWindowFocus: false,
    retry: false,
  });

  const {
    data: members,
    refetch: refetchMembers,
    isFetched: isFetchedMembers,
  } = useQuery({
    queryKey: ["queue-members", id],
    queryFn: () => QueueApi.getMembersOfQueue(id!),
    refetchOnWindowFocus: false,
    retry: false,
    refetchInterval: 1000,
  });

  const {
    data: creator,
    refetch: refetchCreator,
    isFetched: isFetchedCreator,
  } = useQuery({
    queryKey: ["queue-creator", id],
    queryFn: () => QueueApi.getCreatorOfQueue(id!),
    refetchOnWindowFocus: false,
    retry: false,
  });

  const context: QueueContextProps = useMemo(
    () => ({
      id: id!,
      queue: queue as Queue,
      members: members as Member[],
      managers: managers as User[],
      creatorId: creator?.id as string,
      updateCreator: async () => {
        await refetchCreator();
      },
      updateManagers: async () => {
        await refetchManagers();
      },
      updateMembers: async () => {
        await refetchMembers();
      },
    }),
    [
      id,
      queue,
      members,
      managers,
      creator,
      refetchCreator,
      refetchManagers,
      refetchMembers,
    ]
  );

  return (
    <QueueContext.Provider value={context}>
      {isFetchedMembers &&
        isFetchedCreator &&
        isFetchedManagers &&
        isFetchedQueue &&
        children}
    </QueueContext.Provider>
  );
};

export default QueueProvider;
