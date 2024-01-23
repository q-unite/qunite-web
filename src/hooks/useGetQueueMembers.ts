import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import QueueApi from "../lib/api/queue/QueueApi";
import { Member } from "../types/member";

export const useGetQueueMembers = (
  queueId: string
): UseQueryResult<Member[], AxiosError> =>
  useQuery({
    queryKey: ["members", queueId],
    queryFn: () => QueueApi.getMembersOfQueue(queueId),
    refetchInterval: 500,
    retry: false,
  });
