import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import QueueApi from "../lib/api/queue/QueueApi";
import { User } from "../types/user";

export const useGetCreator = (
  queueId: string
): UseQueryResult<User, AxiosError> =>
  useQuery({
    queryKey: ["creator", queueId],
    queryFn: () => QueueApi.getCreatorOfQueue(queueId),
    refetchOnWindowFocus: false,
    retry: false,
  });
