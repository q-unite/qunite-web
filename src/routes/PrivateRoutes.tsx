import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = (): JSX.Element => {
  const isAuthenticated = localStorage.getItem("token");

  if (isAuthenticated === null) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
