import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Layout from "../components/Layout/Layout";
import QueuesPage from "../components/pages/QueuesPage";
import DashboardPage from "../components/pages/DashboardPage";
import SettingsPage from "../components/pages/SettingsPage";
import SignupPage from "../components/pages/SignupPage";
import LoginPage from "../components/pages/LoginPage";
import QueueDetailsPage from "../components/pages/QueueDetailsPage";

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
            element: <QueuesPage />,
          },
          { path: "/queues/:id", element: <QueueDetailsPage /> },
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
