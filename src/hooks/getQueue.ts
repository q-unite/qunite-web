import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Queue } from "../interfaces/Queue";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/queues");

export const useGetQueue = (id: string): UseQueryResult<Queue, AxiosError> =>
  useQuery({
    queryKey: ["queue", id],
    queryFn: () => apiClient.get(`/${id}`),
  });
