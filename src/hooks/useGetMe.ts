import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { User } from "../interfaces/User";
import APIClient from "../services/api-client";

/**
 * This hook is using for fetching user data.
 */

const apiClient = new APIClient<User>("/users/self");

export const useGetMe = (): UseQueryResult<User, unknown> => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => apiClient.get(),
  });
};
