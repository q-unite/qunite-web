import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/queues");

export const useGetMemberPositionInQueue = (
  queueId: number,
  memberId: number
): UseQueryResult<number, AxiosError> =>
  useQuery({
    queryKey: ["position", queueId, memberId],
    queryFn: () =>
      apiClient.get(`/${queueId}/members/${memberId}`).catch(() => null),
    refetchInterval: 500,
  });
