import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import QueueApi from "../lib/api/queue/QueueApi";

export const useGetMemberPositionInQueue = (
  queueId: number,
  memberId: string
): UseQueryResult<number, AxiosError> =>
  useQuery({
    queryKey: ["position", queueId, memberId],
    queryFn: () =>
      QueueApi.getMemberPositionInQueue(
        queueId.toString(),
        memberId.toString()
      ),
    refetchInterval: 500,
  });
