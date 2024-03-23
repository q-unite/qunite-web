import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Queue } from "../interfaces/Queue";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Queue[]>("/queues");

export const useGetQueues = (): UseQueryResult<Queue[], AxiosError> => {
  return useQuery({
    queryKey: ["queues"],
    queryFn: () => apiClient.get(),
  });
};
