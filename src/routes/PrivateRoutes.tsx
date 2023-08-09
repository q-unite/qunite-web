import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = (): JSX.Element => {
  const isAuthenticated = true;

  if (!isAuthenticated) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
