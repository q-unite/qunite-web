import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Queue } from "../types/queue";
import QueueApi from "../lib/api/queue/QueueApi";

export const useGetQueues = (): UseQueryResult<Queue[], AxiosError> => {
  return useQuery({
    queryKey: ["queues"],
    queryFn: () => QueueApi.getAllQueues(),
    refetchOnWindowFocus: false,
    retry: false,
  });
};
