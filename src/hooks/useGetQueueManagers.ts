import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { User } from "../types/user";
import { AxiosError } from "axios";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/queues");

export const useGetQueueManagers = (
  queueId: string
): UseQueryResult<User[], AxiosError> =>
  useQuery({
    queryKey: ["managers", queueId],
    queryFn: () => apiClient.get(`/${queueId}/managers`),
  });
