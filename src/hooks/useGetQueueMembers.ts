import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import APIClient from "../services/api-client";
import { Member } from "../interfaces/Member";

const apiClient = new APIClient<Member[]>("/queues");

export const useGetQueueMembers = (
  queueId: number
): UseQueryResult<Member[], AxiosError> =>
  useQuery({
    queryKey: ["members", queueId],
    queryFn: () => apiClient.get(`/${queueId}/members`),
    refetchInterval: 500,
  });
