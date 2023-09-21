import { UseQueryResult, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<number>("/queues");

export const useGetMembersAmountOfQueue = (
  id: string
): UseQueryResult<number, undefined> =>
  useQuery({
    queryKey: ["members", id],
    queryFn: () => apiClient.get(`/${id}/members-amount`),
  });
