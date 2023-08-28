import { UseQueryResult, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { AxiosError } from "axios";
import { User } from "../interfaces/User";

const apiClient = new APIClient<User>("/queues");

export const useGetCreator = (
  queueId: number
): UseQueryResult<User, AxiosError> =>
  useQuery({
    queryKey: ["creator"],
    queryFn: () => apiClient.get(`/${queueId}/creator`),
  });
