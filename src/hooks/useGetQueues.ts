import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Queue } from "../types/queue";
import QueueService from "../lib/services/queue/QueueService";

export const useGetQueues = (): UseQueryResult<Queue[], AxiosError> => {
  return useQuery({
    queryKey: ["queues"],
    queryFn: () => QueueService.getAllQueues(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
    retry: false,
  });
};
