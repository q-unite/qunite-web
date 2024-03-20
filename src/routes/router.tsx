import { createBrowserRouter } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import Layout from "../components/common/layout/root-layout";

import DashboardPage from "../components/pages/DashboardPage";
import SettingsPage from "../components/pages/SettingsPage";
import QueueDetailsPage from "../components/pages/QueueDetailsPage";

import Login from "../pages/login";
import SignUp from "../pages/sign-up";
import Queues from "../pages/queues";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Queues />,
          },
          { path: "/queues/:id", element: <QueueDetailsPage /> },
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
