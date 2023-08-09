import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [{ path: "/", element: <HomePage /> }],
      },
    ],
  },
]);

export default router;
