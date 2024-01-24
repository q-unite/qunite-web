import React, { PropsWithChildren, useContext, useMemo, useState } from "react";
import { AuthContextProps } from "../types";
import { User } from "../../../types/user";
import StorageUtil from "../../../lib/utils/StorageUtil";
import { useQuery } from "@tanstack/react-query";
import UserApi from "../../../lib/api/users/UserApi";

const AuthContext = React.createContext<AuthContextProps>({
  update: () => new Promise(() => {}),
  user: {} as User,
});

export const useAuthContext = (): AuthContextProps => useContext(AuthContext);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [accessToken, setAccessToken] = useState(StorageUtil.getAccessToken());

  const { error, isFetching, isFetched, isError, data, refetch } = useQuery(
    ["oauth", accessToken],
    () => UserApi.getMe(),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  if (error && !isFetching) {
    StorageUtil.removeAccessToken();
  }

  const context: AuthContextProps = useMemo(
    () => ({
      user: data as User,
      update: async () => {
        setAccessToken(StorageUtil.getAccessToken());
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
