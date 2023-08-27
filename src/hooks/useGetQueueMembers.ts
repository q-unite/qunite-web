import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import APIClient from "../services/api-client";
import { Memeber } from "../interfaces/Member";

const apiClient = new APIClient("/queues");

export const useGetQueueMembers = (
  queueId: number
): UseQueryResult<Memeber[], AxiosError> =>
  useQuery({
    queryKey: ["members", queueId],
    queryFn: () => apiClient.get(`/${queueId}/members`),
  });
