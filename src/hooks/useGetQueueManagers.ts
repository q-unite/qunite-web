import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import QueueApi from "../lib/api/queue/QueueApi";
import { User } from "../types/user";

export const useGetQueueManagers = (
  queueId: string
): UseQueryResult<User[], AxiosError> =>
  useQuery({
    queryKey: ["managers", queueId],
    queryFn: () => QueueApi.getManagersOfQueue(queueId),
    retry: false,
  });
