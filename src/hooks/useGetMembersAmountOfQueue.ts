import { UseQueryResult, useQuery } from "@tanstack/react-query";
import QueueApi from "../lib/api/queue/QueueApi";

export const useGetMembersAmountOfQueue = (
  id: string
): UseQueryResult<number, undefined> =>
  useQuery({
    queryKey: ["members-amount", id],
    queryFn: () => QueueApi.getMembersOfQueue(id).then((res) => res.length),
    retry: false,
  });
