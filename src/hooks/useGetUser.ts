import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { User } from "../types/user";
import { AxiosError } from "axios";
import UserApi from "../lib/api/users/UserApi";

export const useGetUser = (userId: number): UseQueryResult<User, AxiosError> =>
  useQuery({
    queryKey: ["user", userId],
    queryFn: () => UserApi.getUserById(userId.toString()),
  });
