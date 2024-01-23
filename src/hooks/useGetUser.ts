import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { User } from "../types/user";
import { AxiosError } from "axios";
import APIClient from "../services/api-client";

const apiClient = new APIClient<User>("/users");

export const useGetUser = (userId: number): UseQueryResult<User, AxiosError> =>
  useQuery({
    queryKey: ["user", userId],
    queryFn: () => apiClient.get(`/${userId}`),
  });
