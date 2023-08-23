import { Navigate, Outlet } from "react-router-dom";
import { useGetMe } from "../hooks";
import Loading from "../components/Loading/Loading";

const PrivateRoutes = (): JSX.Element => {
  const { data, isLoading } = useGetMe();

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.username) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
