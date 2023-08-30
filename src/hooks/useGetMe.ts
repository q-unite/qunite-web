import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { User } from "../interfaces/User";
import APIClient from "../services/api-client";
import { AxiosError } from "axios";

const apiClient = new APIClient<User>("/users/self");

/**
 * This hook is using for fetching user data.
 */

export const useGetMe = (): UseQueryResult<User, AxiosError> => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => apiClient.get(),
    refetchOnWindowFocus: false,
    retry: false,
  });
};
