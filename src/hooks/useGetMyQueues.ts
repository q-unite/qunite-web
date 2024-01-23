import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Queue } from "../types/queue";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Queue[]>("/users");

export const useGetMyQueues = (
  userId?: number
): UseQueryResult<Queue[], AxiosError> =>
  useQuery({
    queryKey: ["queues", userId],
    queryFn: () => apiClient.get(`/${userId}/created-queues`),
  });
