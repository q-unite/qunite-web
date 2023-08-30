import { Navigate, Outlet } from "react-router-dom";
import { useGetMe } from "../hooks";
import Loading from "../components/Loading/Loading";
import authStore from "../stores/auth-store";

const PrivateRoutes = (): JSX.Element => {
  const { data, isLoading } = useGetMe();

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.username) {
    authStore.getState().logout();
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
