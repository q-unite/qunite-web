import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Queue } from "../interfaces/Queue";
import QueueApi from "../lib/api/queue/QueueApi";

export const useGetQueue = (id: string): UseQueryResult<Queue, AxiosError> =>
  useQuery({
    queryKey: ["queue", id],
    queryFn: () => QueueApi.getQueueById(id),
  });
