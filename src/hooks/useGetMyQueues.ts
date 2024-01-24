import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Queue } from "../types/queue";
import UserApi from "../lib/api/users/UserApi";

export const useGetMyQueues = (
  userId: string
): UseQueryResult<Queue[], AxiosError> =>
  useQuery({
    queryKey: ["queues", userId],
    queryFn: () => UserApi.getCreatedByUserQueues(userId),
  });
