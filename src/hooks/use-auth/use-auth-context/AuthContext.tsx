import React, { PropsWithChildren, useContext, useMemo, useState } from "react";
import { AuthContextProps } from "../types";
import { User } from "../../../types/user";
import StorageUtil from "../../../lib/utils/StorageUtil";
import { useQuery } from "@tanstack/react-query";
import UserApi from "../../../lib/api/users/UserApi";
import { AxiosError } from "axios";
import AuthApi from "../../../lib/api/auth/AuthApi";

const AuthContext = React.createContext<AuthContextProps>({
  update: () => new Promise(() => {}),
  user: {} as User,
});

export const useAuthContext = (): AuthContextProps => useContext(AuthContext);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [jwt, setJwt] = useState(StorageUtil.getTokens());

  const { error, isFetching, isFetched, isError, data, refetch } = useQuery(
    ["oauth", jwt?.accessToken, jwt?.refreshToken],
    () => UserApi.getMe(),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  if (error && !isFetching) {
    const status = (error as AxiosError).response?.status;
    if (jwt && status === 404) {
      AuthApi.refresh({ refreshToken: jwt.refreshToken })
        .then(async ({ accessToken }) => {
          StorageUtil.setTokens(accessToken, jwt?.refreshToken);
          await refetch();
        })
        .catch(() => {
          StorageUtil.removeTokens();
        });
    } else {
      StorageUtil.removeTokens();
    }
  }

  const context: AuthContextProps = useMemo(
    () => ({
      user: data as User,
      update: async () => {
        setJwt(StorageUtil.getTokens());
        await refetch();
      },
    }),
    [data, refetch]
  );

  return (
    <AuthContext.Provider value={context}>
      {(isFetched || isError) && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
