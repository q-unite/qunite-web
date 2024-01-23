import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { User } from "../types/user";
import { AxiosError } from "axios";
import UserApi from "../lib/api/users/UserApi";

/**
 * This hook is using for fetching user data.
 */

export const useGetMe = (): UseQueryResult<User, AxiosError> => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => UserApi.getMe(),
    refetchOnWindowFocus: false,
    retry: false,
  });
};
